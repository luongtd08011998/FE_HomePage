"use client";

import { useState } from "react";
import { Form, Input, Button, Card, message, Result, Typography, Alert, notification, Spin } from "antd";
import { UserOutlined, PhoneOutlined, HomeOutlined, MailOutlined, SendOutlined, FileTextOutlined } from "@ant-design/icons";
import { registrationService, type RegistrationPayload } from "@/services/registration";
import { motion, AnimatePresence } from "motion/react";

const { Title, Text } = Typography;

export default function RegistrationForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [regTime, setRegTime] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  const onFinish = async (values: any) => {
    // Honeypot check: Nếu trường ẩn này có dữ liệu -> Bắt bot
    if (values.website) {
      console.warn("Bot detected!");
      return;
    }

    // Xóa trường website trước khi gửi đi
    const { website, ...payload } = values;

    setLoading(true);
    try {
      const res = await registrationService.register(payload);
      
      if (res.retCode === "ERR_OK") {
        notification.success({
          title: "Đăng ký thành công",
          description: "Yêu cầu của quý khách đã được gửi đi thành công.",
          placement: "topRight",
        });
        setSuccess(true);
        try {
          const time = await registrationService.getRegistrationTime(payload.phone);
          setRegTime(time);
        } catch (e) {
          console.error("Failed to fetch registration time", e);
        }
      } else {
        // Xử lý tất cả các mã lỗi (bao gồm cả spam 429) thông qua notification
        notification.error({
          title: "Thông báo",
          description: res.retMsg || "Đăng ký không thành công. Vui lòng thử lại.",
          duration: 5,
        });
      }
    } catch (error: any) {
      console.error("Unexpected Error:", error);
      notification.error({
        title: "Lỗi hệ thống",
        description: "Đã có lỗi không mong muốn xảy ra. Vui lòng thử lại sau.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto py-12 px-4"
      >
        <Card className="shadow-2xl border-0 overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg">
          <Result
            status="success"
            title={<span className="text-2xl font-bold text-blue-900">Đăng Ký Thành Công!</span>}
            subTitle={
              <div className="space-y-4">
                <Text className="text-gray-600 text-lg">
                  Yêu cầu lắp đặt của quý khách đã được ghi nhận vào hệ thống.
                </Text>
                {regTime && (
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <Text strong className="text-blue-800">Thời gian đăng ký:</Text>
                    <div className="text-xl font-mono text-blue-600 mt-1">{regTime}</div>
                  </div>
                )}
              </div>
            }
            extra={[
              <Button 
                type="primary" 
                key="home" 
                size="large" 
                onClick={() => window.location.href = "/"}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 h-12 px-8 rounded-xl font-semibold shadow-lg shadow-blue-200"
              >
                Về trang chủ
              </Button>,
              <Button 
                key="again" 
                size="large" 
                onClick={() => {
                  setSuccess(false);
                  form.resetFields();
                }}
                className="h-12 px-8 rounded-xl border-gray-200 text-gray-600 hover:text-blue-600"
              >
                Đăng ký mới
              </Button>,
            ]}
          />
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">Dịch vụ trực tuyến</span>
          </div>
          <Title level={1} className="!text-blue-900 !mb-4 !text-4xl md:!text-5xl font-bold">
            Đăng Ký Lắp Đặt <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Nước Sạch</span>
          </Title>
          <Text className="text-gray-500 text-lg max-w-2xl mx-auto block leading-relaxed">
            Quý khách vui lòng điền đầy đủ thông tin dưới đây. Nhân viên của chúng tôi sẽ liên hệ lại trong vòng 24h để tiến hành khảo sát.
          </Text>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="shadow-2xl border-0 overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400" />
          
          <Spin spinning={loading} description="Đang xử lý yêu cầu..." size="large">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
              className="p-4 md:p-8"
              requiredMark={false}
            >
            {/* Honeypot field - Bot sẽ tự điền vào đây, người dùng thì không thấy */}
            <Form.Item name="website" className="hidden" style={{ display: "none" }}>
              <Input tabIndex={-1} autoComplete="off" />
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <Form.Item
                name="name"
                label={<span className="text-gray-700 font-medium">Họ và tên chủ hộ</span>}
                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
              >
                <Input 
                  prefix={<UserOutlined className="text-gray-400" />} 
                  placeholder="Ví dụ: Nguyễn Văn A" 
                  className="rounded-xl border-gray-200 h-14"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label={<span className="text-gray-700 font-medium">Số điện thoại liên hệ</span>}
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại' },
                  { pattern: /^[0-9]{10}$/, message: 'Số điện thoại không hợp lệ (10 chữ số)' }
                ]}
              >
                <Input 
                  prefix={<PhoneOutlined className="text-gray-400" />} 
                  placeholder="Ví dụ: 0981234567" 
                  className="rounded-xl border-gray-200 h-14"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="text-gray-700 font-medium">Địa chỉ Email (nếu có)</span>}
                rules={[{ type: 'email', message: 'Email không hợp lệ' }]}
                className="md:col-span-2"
              >
                <Input 
                  prefix={<MailOutlined className="text-gray-400" />} 
                  placeholder="ví dụ: nva@gmail.com" 
                  className="rounded-xl border-gray-200 h-14"
                />
              </Form.Item>

              <Form.Item
                name="waterMeterAddress"
                label={<span className="text-gray-700 font-medium">Địa chỉ lắp đặt đồng hồ</span>}
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ lắp đặt' }]}
                className="md:col-span-2"
              >
                <Input.TextArea 
                  placeholder="Nhập địa chỉ chi tiết nơi cần lắp đặt" 
                  className="rounded-xl border-gray-200 !min-h-[120px] pt-3"
                  autoSize={{ minRows: 3, maxRows: 6 }}
                />
              </Form.Item>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<SendOutlined />}
                className="w-full md:w-auto min-w-[240px] h-14 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 border-0 text-lg font-bold shadow-xl shadow-blue-200 hover:scale-[1.02] transition-transform"
              >
                GỬI YÊU CẦU ĐĂNG KÝ
              </Button>
            </div>
          </Form>

          <div className="bg-blue-50/50 p-6 border-t border-gray-100">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 font-bold text-xs">i</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sau khi gửi yêu cầu, hệ thống sẽ tự động xử lý và chuyển cho bộ phận kỹ thuật. Chúng tôi sẽ liên hệ lại với quý khách theo số điện thoại đã cung cấp để hướng dẫn các bước tiếp theo.
              </p>
            </div>

            <div className="border-t border-blue-100 pt-6">
              <h3 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                <FileTextOutlined /> Quý khách vui lòng chuẩn bị hồ sơ gồm:
              </h3>
              
              
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span>
                    Đơn xin lắp đặt:{" "}
                    <a 
                      href="/2026_Giay_de_nghi_lap_dat_dong_ho_toctienltd.doc" 
                      download 
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Tải về mẫu đơn tại đây
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span>Giấy chứng nhận quyền sử dụng đất chính chủ</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span>Căn cước công dân của người đứng tên trên GCNQSDĐ</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span>Giấy phép xây dựng (Nếu đất nằm ngoài khu TĐC và Khu đã được cấp phép)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span><strong>Đối với Doanh Nghiệp:</strong> Giấy phép ĐKKD, CCCD người đại diện</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span>Hợp đồng thuê đất (Nếu là đất thuê)</span>
                </li>
              </ul>

              <Alert
                title="Lưu ý quan trọng"
                description="Kính đề nghị Quý khách chuẩn bị đầy đủ các loại giấy tờ nêu trên để cung cấp cho nhân viên khảo sát khi đến làm việc.

Trường hợp hồ sơ hoặc thông tin chưa đầy đủ, chúng tôi rất tiếc chưa thể tiếp nhận và xử lý yêu cầu của Quý khách."
                type="warning"
                showIcon
                className="rounded-xl border-orange-100 bg-orange-50/50"
              />
            </div>
          </div>
        </Spin>
      </Card>
    </motion.div>
    </div>
  );
}
