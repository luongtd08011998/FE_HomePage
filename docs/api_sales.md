1. Post: http://localhost:8080/api/v1/qlkh/auth/login
    {
  "digiCode": "00400234",
  "phone": "02839846640"
}{
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklkIjoxMzU3MCwic3ViIjoiMDA0MDAyMzQiLCJkaWdpQ29kZSI6IjAwNDAwMjM0IiwiZXhwIjoxNzc1Nzk3NjI2LCJpYXQiOjE3NzU3NjI2MjZ9.5us8w2zvwev6xLtJHye8VbzRVXRFG3OHnaL14VkpZXA"
    },
    "message": "Đăng nhập thành công",
    "statusCode": 200
}

2. Get lấy thông tin khách hàng : http://localhost:8080/api/v1/qlkh/customers/me 
lấy accessToken của Post: http://localhost:8080/api/v1/qlkh/auth/login bỏ vào bear token
{
    "data": {
        "digiCode": "00400234",
        "name": "CÔNG TY TNHH XỬ LÝ CHẤT THẢI CÔNG NGHIỆP VÀ TƯ VẤN MÔI TRƯỜNG VĂN LANG",
        "address": "1/1, Đường số 5, Phường Hạnh Thông, Thành phố Hồ Chí Minh, Việt Nam",
        "phone": "02839846640",
        "email": "",
        "sms": "0918485639",
        "taxCode": "0302042609",
        "isActive": 1,
        "isWaterCut": 0
    },
    "message": "Lấy thông tin khách hàng thành công",
    "statusCode": 200
}
3.Get lấy danh sach hóa đơn dịch vụ của Khách hàng:
http://localhost:8080/api/v1/qlkh/sales-invoices
lấy accessToken của Post: http://localhost:8080/api/v1/qlkh/auth/login bỏ vào bear token
{
    "data": {
        "meta": {
            "page": 1,
            "pageSize": 20,
            "pages": 1,
            "total": 1
        },
        "result": [
            {
                "salesInvoiceId": 103,
                "invoiceNum": "00000013",
                "invoiceDate": "20260228",
                "templateCode": "1/002",
                "digiCode": "00400234",
                "customerName": "CÔNG TY TNHH XỬ LÝ CHẤT THẢI CÔNG NGHIỆP VÀ TƯ VẤN MÔI TRƯỜNG VĂN LANG",
                "address": "1/1, Đường số 5, Phường Hạnh Thông, Thành phố Hồ Chí Minh, Việt Nam",
                "invoiceTotal": 2240244.0,
                "status": 2
            }
        ]
    },
    "message": "Lấy danh sách hóa đơn bán thành công",
    "statusCode": 200
}
4. Lấy ra chi tiết hóa đơn :http://localhost:8080/api/v1/qlkh/sales-invoices/{salesInvoiceId}

lấy accessToken của Post: http://localhost:8080/api/v1/qlkh/auth/login bỏ vào bear token

{
    "data": {
        "salesInvoiceId": 103,
        "invoiceNum": "00000013",
        "invoiceDate": "20260228",
        "templateCode": "1/002",
        "digiCode": "00400234",
        "customerName": "CÔNG TY TNHH XỬ LÝ CHẤT THẢI CÔNG NGHIỆP VÀ TƯ VẤN MÔI TRƯỜNG VĂN LANG",
        "address": "1/1, Đường số 5, Phường Hạnh Thông, Thành phố Hồ Chí Minh, Việt Nam",
        "invoiceTotal": 2240244.0,
        "status": 2
    },
    "message": "Lấy chi tiết hóa đơn bán thành công",
    "statusCode": 200
}
dung api viết thêm danh sach hóa đơn dịch vụ cùng với danh sahc hóa đơn do chúng đăng nhập cùng 1 link . khi KH truy cập vào sẽ thấy 2 tab là 
1.danh sách đơn đã làm rồi khoong làm lại nữa giuữ nguyên
2. danh sách hóa đơn dịch vụ cần làm viêt plan 
