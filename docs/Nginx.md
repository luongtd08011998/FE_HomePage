events {
worker_connections 1024;
}

http {
include mime.types;
default_type application/octet-stream;

    server {
        listen 80;
        server_name 125.253.121.171;

        # 1. Backend API (uu tiên tru?c)
        location /api/v1/ {
            proxy_pass http://127.0.0.1:8080/api/v1/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        # 2. Admin Panel (Port 3001)
        location /admin/ {
            proxy_pass http://127.0.0.1:3001/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            # Fix reload không l?i
            proxy_intercept_errors on;
            error_page 404 = /admin/index.html;
        }

        # 3. Frontend (Next.js - Port 3000)
        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            # WebSocket (Next.js c?n)
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }

}
