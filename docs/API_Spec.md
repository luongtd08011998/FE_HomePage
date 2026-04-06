Dưới đây là danh sách chi tiết tất cả API đang được sử dụng trong ứng dụng, với base URL là http://localhost:8080/api/v1

1. Tag (src/services/tag.ts)
   Method Endpoint Mô tả
   GET /tags Lấy danh sách tags (có phân trang)
   GET /tags/:id Lấy tag theo ID
   POST /tags Tạo tag mới
   PUT /tags Cập nhật tag
   DELETE /tags/:id Xoá tag
2. Article (src/services/article.ts)
   Method Endpoint Mô tả
   GET /articles Lấy danh sách bài viết (có phân trang)
   GET /articles/:id Lấy bài viết theo ID
   POST /articles Tạo bài viết mới
   PUT /articles Cập nhật bài viết
   DELETE /articles/:id Xoá bài viết

3. Document (src/services/document.ts)
   Method Endpoint Mô tả
   GET /documents Lấy danh sách tài liệu (có phân trang)
   GET /documents/:id Lấy tài liệu theo ID
   GET /documents/article/:articleId Lấy tài liệu theo article ID
   POST /documents Tạo tài liệu mới
   PUT /documents Cập nhật tài liệu
   DELETE /documents/:id Xoá tài liệu

4. User (src/services/user.ts)
   Method Endpoint Mô tả
   GET users Lấy danh sách người dùng (có phân trang)
   GET /users/:id Lấy người dùng theo ID
   POST users Tạo người dùng mới
   PUT users Cập nhật người dùng
   DELETE /users/:id Xoá người dùng

5. Category (src/services/category.ts)
   Method Endpoint Mô tả
   GET /categories Lấy danh sách danh mục (có phân trang)
   GET /categories/:id Lấy danh mục theo ID
   POST /categories Tạo danh mục mới
   PUT /categories Cập nhật danh mục
   DELETE /categories/:id Xoá danh mục

Lưu ý chung:

- Tất cả request đều gắn Authorization: Bearer <token> từ localStorage.
- Các endpoint PUT không truyền ID trên URL — ID được đưa vào trong body request (UpdateXxxRequest).
- Document là service duy nhất có endpoint đặc biệt: GET /documents/article/:articleId.
