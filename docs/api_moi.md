Lấy danh mục con trực tiếp từ cha
http://localhost:8080/api/v1/categories/5/children
"data": [
        {
            "id": 10,
            "name": "Hình thành và phát triển",
            "slug": "hinh-thanh-phat-trien",
            "active": 1,
            "parent": {
                "id": 5,
                "name": "Giới thiệu"
            },
            "createdAt": "2026-04-09T16:43:58.455656Z",
            "updatedAt": "2026-04-09T16:43:58.455656Z"
        },
        {
            "id": 11,
            "name": "Liên hệ",
            "slug": "thong-tin-lien-he",
            "active": 1,
            "parent": {
                "id": 5,
                "name": "Giới thiệu"
            },
            "createdAt": "2026-04-09T16:44:13.805575Z",
            "updatedAt": "2026-04-09T16:44:13.805575Z"
        },
        {
            "id": 12,
            "name": "Hoạt động và sự kiện",
            "slug": "hoat-dong-su-kien-va-thu-nghiem",
            "active": 1,
            "parent": {
                "id": 5,
                "name": "Giới thiệu"
            },
            "createdAt": "2026-04-09T16:44:41.025897Z",
            "updatedAt": "2026-04-09T16:44:41.025897Z"
        }
    ],
    "message": "Lấy danh mục con trực tiếp thành công",
    "statusCode": 200