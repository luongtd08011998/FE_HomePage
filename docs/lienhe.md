import { motion } from "motion/react";
import { Phone, Mail, MapPin, Building, User, CreditCard, Globe } from "lucide-react";

export default function App() {
const contactInfo = [
{
icon: Building,
title: "Tên công ty",
content: "Công ty TNHH cấp nước Tóc Tiên",
delay: 0.1
},
{
icon: MapPin,
title: "Địa chỉ",
content: "Ấp 6, Xã Châu Pha, Thành phố Hồ Chí Minh, Việt Nam",
delay: 0.2
},
{
icon: User,
title: "Giám đốc",
content: "Phan Thanh Hải",
delay: 0.3
},
{
icon: Phone,
title: "Điện thoại",
content: "0254 3 894 894 - 0865379119",
link: "tel:0254 3 894 894",
delay: 0.4
},
{
icon: Mail,
title: "Email",
content: "office@toctienltd.vn",
link: "mailto:office@toctienltd.vn",
delay: 0.5
},
{
icon: Globe,
title: "Website",
content: "toctienltd.vn",
link: "https://toctienltd.vn",
delay: 0.6
},
{
icon: CreditCard,
title: "Mã số thuế",
content: "3500815711",
delay: 0.7
},
{
icon: Building,
title: "Số tài khoản",
content: "008.1000.127.995",
subtitle: "Ngân hàng VIETCOMBANK BR-VT PGD số 3",
delay: 0.8
}
];

return (
<div className="min-h-screen w-full relative overflow-hidden">
{/_ Animated water background _/}
<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-[#f8fafb] to-[#dbeafe]"></div>

        {/* Animated water waves */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            background: "radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)"
          }}
        />

        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center shadow-lg shadow-blue-200">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm-7 7c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm14 0c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm-7 7c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" />
              </svg>
            </div>
          </motion.div>

          <motion.h1
            className="mb-4 text-5xl md:text-6xl lg:text-7xl tracking-tight"
            style={{
              background: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Liên hệ
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#0c4a6e] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Công ty TNHH cấp nước Tóc Tiên
          </motion.p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: item.delay,
                ease: "easeOut"
              }}
            >
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-blue-100/50 border border-[#e0f2fe] hover:shadow-xl hover:shadow-blue-200/60 transition-all duration-500 hover:-translate-y-2">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0ea5e9]/0 via-[#38bdf8]/0 to-[#0ea5e9]/0 group-hover:from-[#0ea5e9]/20 group-hover:via-[#38bdf8]/10 group-hover:to-[#0ea5e9]/20 transition-all duration-500 pointer-events-none"></div>

                <div className="relative">
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] group-hover:from-[#0ea5e9] group-hover:to-[#0284c7] transition-all duration-500">
                    <item.icon className="w-7 h-7 text-[#0284c7] group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="mb-3 text-sm uppercase tracking-widest text-[#64748b]">
                    {item.title}
                  </h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="block text-[#0a1628] group-hover:text-[#0284c7] transition-colors duration-300"
                    >
                      <p className="mb-1">
                        {item.content}
                      </p>
                      {item.subtitle && (
                        <p className="text-sm text-[#64748b]">
                          {item.subtitle}
                        </p>
                      )}
                    </a>
                  ) : (
                    <>
                      <p className="text-[#0a1628] mb-1">
                        {item.content}
                      </p>
                      {item.subtitle && (
                        <p className="text-sm text-[#64748b]">
                          {item.subtitle}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map placeholder with ripple effect */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-[#e0f2fe] via-white to-[#dbeafe] flex items-center justify-center relative overflow-hidden">
            {/* Ripple animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-32 h-32 rounded-full border-2 border-[#0ea5e9]"
                animate={{
                  scale: [1, 2.5, 2.5, 1],
                  opacity: [0.6, 0.2, 0, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute w-32 h-32 rounded-full border-2 border-[#38bdf8]"
                animate={{
                  scale: [1, 2.5, 2.5, 1],
                  opacity: [0.6, 0.2, 0, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute w-32 h-32 rounded-full border-2 border-[#0284c7]"
                animate={{
                  scale: [1, 2.5, 2.5, 1],
                  opacity: [0.6, 0.2, 0, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 2
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] mb-6 shadow-xl shadow-blue-300/50">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#0c4a6e" }}>
                Vị trí của chúng tôi
              </h3>
              <p className="text-[#64748b] max-w-md mx-auto px-6">
                Ấp 6, Xã Châu Pha, Thành phố Hồ Chí Minh, Việt Nam
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="text-[#64748b]">
            Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho quý khách hàng
          </p>
        </motion.div>
      </div>
    </div>

);
}
