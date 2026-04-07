Lấy ra các article liên quan (tag và categories)
http://localhost:8080/api/v1/articles/1/related
"data": {
"meta": {
"page": 1,
"pageSize": 20,
"pages": 1,
"total": 3
},
"result": [
{
"id": 2,
"title": "Thông tin liên hệ",
"slug": "thong-tin-lien-he",
"content": "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: auto; padding: 20px;\">\n\n <h2 style=\"color: #0a4b78; border-bottom: 3px solid #0a4b78; padding-bottom: 8px;\">\n Thông tin công ty\n </h2>\n\n <table style=\"width: 100%; border-collapse: collapse; margin-top: 15px;\">\n\n <tr>\n <td style=\"width: 180px; padding: 10px; font-weight: bold;\">Tên công ty:</td>\n <td style=\"padding: 10px;\">Công ty TNHH Cấp nước Tóc Tiên</td>\n </tr>\n\n <tr style=\"background: #f9f9f9;\">\n <td style=\"padding: 10px; font-weight: bold;\">Địa chỉ:</td>\n <td style=\"padding: 10px;\">Ấp 6, Xã Châu Pha, Thành phố Hồ Chí Minh, Việt Nam</td>\n </tr>\n\n <tr>\n <td style=\"padding: 10px; font-weight: bold;\">Giám đốc:</td>\n <td style=\"padding: 10px;\">Phan Thanh Hải</td>\n </tr>\n\n <tr style=\"background: #f9f9f9;\">\n <td style=\"padding: 10px; font-weight: bold;\">Mã số thuế:</td>\n <td style=\"padding: 10px;\">3500815711</td>\n </tr>\n\n <tr>\n <td style=\"padding: 10px; font-weight: bold;\">Số tài khoản:</td>\n <td style=\"padding: 10px;\">\n 008.1000.127.995 - Ngân hàng Vietcombank BR-VT PGD số 3\n </td>\n </tr>\n\n <tr style=\"background: #f9f9f9;\">\n <td style=\"padding: 10px; font-weight: bold;\">Điện thoại:</td>\n <td style=\"padding: 10px;\">0254 3 894 894 - 0865 379 119</td>\n </tr>\n\n <tr>\n <td style=\"padding: 10px; font-weight: bold;\">Email:</td>\n <td style=\"padding: 10px;\">\n <a href=\"mailto:office@toctienltd.vn\" style=\"color: #0a4b78; text-decoration: none;\">\n office@toctienltd.vn\n </a>\n </td>\n </tr>\n\n <tr style=\"background: #f9f9f9;\">\n <td style=\"padding: 10px; font-weight: bold;\">Website:</td>\n <td style=\"padding: 10px;\">\n <a href=\"https://toctienltd.vn\" target=\"\_blank\" style=\"color: #0a4b78; text-decoration: none;\">\n toctienltd.vn\n </a>\n </td>\n </tr>\n\n </table>\n\n</div>",
"thumbnail": "/uploads/avatars/1775447781640_logocty1.jpg",
"type": 0,
"views": 0,
"active": 1,
"author": {
"id": 1,
"name": "Super Admin"
},
"category": {
"id": 6,
"name": "Liên hệ"
},
"tags": [
{
"id": 2,
"name": "Văn bản"
}
],
"createdAt": "2026-04-05T18:40:26.478131Z",
"updatedAt": "2026-04-06T04:10:23.022567Z"
}
]
},
"message": "Lấy bài viết liên quan thành công",
"statusCode": 200
}
lấy danh sach bài viết theo tag
http://localhost:8080/api/v1/tags/1/articles
"data": {
"meta": {
"page": 1,
"pageSize": 20,
"pages": 1,
"total": 2
},
"result": [
{
"id": 1,
"title": "Quá trình hình thành - phát triển",
"slug": "hinh-thanh-phat-trien",
"content": "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: auto; padding: 20px;\">\n\n <h2 style=\"color: #0a4b78; border-bottom: 3px solid #0a4b78; padding-bottom: 8px;\">\n Quá trình hình thành - phát triển\n </h2>\n\n <p style=\"text-align: justify; margin-top: 15px;\">\n <strong>Công ty Cấp nước TNHH Tóc Tiên (CAP NUOC TOCTIEN CO. LTD)</strong> có địa chỉ tại \n Ấp 6, xã Tóc Tiên, thị xã Phú Mỹ, tỉnh Bà Rịa - Vũng Tàu. \n Dự án có tổng mức đầu tư <strong>120 tỷ đồng</strong>, được thực hiện theo Luật khuyến khích đầu tư trong nước, \n nhằm cung cấp nước cho toàn bộ khu công nghiệp và khu dân cư \n <strong>Phú Mỹ - Mỹ Xuân - Phước Hòa</strong> với công suất \n <strong>40.000 m³/ngày đêm</strong>.\n </p>\n\n <p style=\"text-align: justify;\">\n CAP NUOC TOCTIEN CO. LTD đã góp phần quan trọng trong việc cung cấp nước sạch \n cho toàn bộ khu công nghiệp Phú Mỹ và các khu dân cư \n <strong>Mỹ Xuân - Phước Hòa - Tân Thành - Bà Rịa Vũng Tàu</strong>.\n </p>\n\n <div style=\"background: #f0f7fb; padding: 15px; border-left: 5px solid #0a4b78; margin: 20px 0;\">\n <p style=\"margin: 0; text-align: justify;\">\n Trong thời gian đến năm 2020, nhu cầu cấp nước của tỉnh Bà Rịa - Vũng Tàu \n ước tính khoảng <strong>400.000 m³/ngày</strong>. Trong đó, dự kiến nâng công suất \n <strong>Nhà máy nước Đá Đen</strong> lên <strong>200.000 m³/ngày</strong>, \n sử dụng nguồn nước từ hồ Đá Đen.\n </p>\n </div>\n\n <p style=\"text-align: justify;\">\n Ngày <strong>21/5/2007</strong>, theo văn bản số <strong>3049/UBND.VP</strong>, \n UBND tỉnh Bà Rịa - Vũng Tàu đã chấp thuận cho phép <strong>Tập đoàn Hải Châu</strong> \n thiết lập đới bảo vệ nguồn nước hồ Suối Nhum thuộc hệ thống cấp nước của công ty.\n </p>\n\n <p style=\"text-align: justify;\">\n Đồng thời, Tập đoàn cũng được phép lập dự án khai thác và sử dụng nguồn nước từ \n <strong>hồ Đá Đen</strong> nhằm bổ sung vào hệ thống cấp nước của CAP NUOC TOCTIEN CO. LTD, \n đảm bảo nhu cầu nước phục vụ công nghiệp và sinh hoạt với công suất \n <strong>150.000 m³/ngày</strong>.\n </p>\n\n</div>",
"thumbnail": "/uploads/avatars/1775428382700_logocty1.jpg",
"type": 0,
"views": 0,
"active": 1,
"author": {
"id": 1,
"name": "Super Admin"
},
"category": {
"id": 5,
"name": "Hình thành và phát triển"
},
"tags": [
{
"id": 1,
"name": "Liên hệ"
},
{
"id": 2,
"name": "Văn bản"
}
],
"createdAt": "2026-04-05T18:40:26.473417Z",
"updatedAt": "2026-04-06T04:10:15.140070Z"
}
]
},
"message": "Lấy danh sách bài viết theo tag thành công",
"statusCode": 200
}
lay tât ca cac bai viet theo danh mục cây :
http://localhost:8080/api/v1/categories/4/articles
"data": {
"meta": {
"page": 1,
"pageSize": 20,
"pages": 1,
"total": 3
},
"result": [
{
"id": 1,
"title": "Quá trình hình thành - phát triển",
"slug": "hinh-thanh-phat-trien",
"content": "<div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: auto; padding: 20px;\">\n\n <h2 style=\"color: #0a4b78; border-bottom: 3px solid #0a4b78; padding-bottom: 8px;\">\n Quá trình hình thành - phát triển\n </h2>\n\n <p style=\"text-align: justify; margin-top: 15px;\">\n <strong>Công ty Cấp nước TNHH Tóc Tiên (CAP NUOC TOCTIEN CO. LTD)</strong> có địa chỉ tại \n Ấp 6, xã Tóc Tiên, thị xã Phú Mỹ, tỉnh Bà Rịa - Vũng Tàu. \n Dự án có tổng mức đầu tư <strong>120 tỷ đồng</strong>, được thực hiện theo Luật khuyến khích đầu tư trong nước, \n nhằm cung cấp nước cho toàn bộ khu công nghiệp và khu dân cư \n <strong>Phú Mỹ - Mỹ Xuân - Phước Hòa</strong> với công suất \n <strong>40.000 m³/ngày đêm</strong>.\n </p>\n\n <p style=\"text-align: justify;\">\n CAP NUOC TOCTIEN CO. LTD đã góp phần quan trọng trong việc cung cấp nước sạch \n cho toàn bộ khu công nghiệp Phú Mỹ và các khu dân cư \n <strong>Mỹ Xuân - Phước Hòa - Tân Thành - Bà Rịa Vũng Tàu</strong>.\n </p>\n\n <div style=\"background: #f0f7fb; padding: 15px; border-left: 5px solid #0a4b78; margin: 20px 0;\">\n <p style=\"margin: 0; text-align: justify;\">\n Trong thời gian đến năm 2020, nhu cầu cấp nước của tỉnh Bà Rịa - Vũng Tàu \n ước tính khoảng <strong>400.000 m³/ngày</strong>. Trong đó, dự kiến nâng công suất \n <strong>Nhà máy nước Đá Đen</strong> lên <strong>200.000 m³/ngày</strong>, \n sử dụng nguồn nước từ hồ Đá Đen.\n </p>\n </div>\n\n <p style=\"text-align: justify;\">\n Ngày <strong>21/5/2007</strong>, theo văn bản số <strong>3049/UBND.VP</strong>, \n UBND tỉnh Bà Rịa - Vũng Tàu đã chấp thuận cho phép <strong>Tập đoàn Hải Châu</strong> \n thiết lập đới bảo vệ nguồn nước hồ Suối Nhum thuộc hệ thống cấp nước của công ty.\n </p>\n\n <p style=\"text-align: justify;\">\n Đồng thời, Tập đoàn cũng được phép lập dự án khai thác và sử dụng nguồn nước từ \n <strong>hồ Đá Đen</strong> nhằm bổ sung vào hệ thống cấp nước của CAP NUOC TOCTIEN CO. LTD, \n đảm bảo nhu cầu nước phục vụ công nghiệp và sinh hoạt với công suất \n <strong>150.000 m³/ngày</strong>.\n </p>\n\n</div>",
"thumbnail": "/uploads/avatars/1775428382700_logocty1.jpg",
"type": 0,
"views": 0,
"active": 1,
"author": {
"id": 1,
"name": "Super Admin"
},
"category": {
"id": 5,
"name": "Hình thành và phát triển"
},
"tags": [
{
"id": 1,
"name": "Liên hệ"
},
{
"id": 2,
"name": "Văn bản"
}
],
"createdAt": "2026-04-05T18:40:26.473417Z",
"updatedAt": "2026-04-06T04:10:15.140070Z"
}
]
},
"message": "Lấy bài viết theo cây danh mục thành công",
"statusCode": 200
}
lấy toàn bộ cây danh mục:
http://localhost:8080/api/v1/categories/tree
"data": [
{
"children": [],
"createdAt": "2026-04-05T18:40:26.455435Z",
"id": 3,
"name": "Văn bản",
"parent": null,
"slug": "van-ban",
"updatedAt": "2026-04-06T03:44:29.908576Z"
},
{
"children": [
{
"children": [],
"createdAt": "2026-04-06T03:46:30.933870Z",
"id": 5,
"name": "Hình thành và phát triển",
"parent": null,
"slug": "hinh-thanh-phat-trien",
"updatedAt": "2026-04-06T03:46:30.933870Z"
},
{
"children": [],
"createdAt": "2026-04-06T03:47:14.346727Z",
"id": 6,
"name": "Liên hệ",
"parent": null,
"slug": "lien-he",
"updatedAt": "2026-04-06T03:47:14.346728Z"
},
{
"children": [],
"createdAt": "2026-04-06T03:47:50.480349Z",
"id": 7,
"name": "Hoạt động và sự kiện",
"parent": null,
"slug": "hoat-dong-su-kien",
"updatedAt": "2026-04-06T03:47:50.480349Z"
}
],
"createdAt": "2026-04-05T18:40:26.455866Z",
"id": 4,
"name": "Giới thiệu",
"parent": null,
"slug": "gioi-thieu",
"updatedAt": "2026-04-06T03:44:13.103120Z"
},
{
"children": [],
"createdAt": "2026-04-06T04:47:43.788664Z",
"id": 8,
"name": "Tin tức",
"parent": null,
"slug": "tin-tuc",
"updatedAt": "2026-04-06T04:47:43.788664Z"
}
],
"message": "Lấy toàn bộ cây danh mục thành công",
"statusCode": 200
