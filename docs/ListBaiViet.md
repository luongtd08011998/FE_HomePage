import { motion } from "motion/react";
import { useState } from "react";
import {
Droplets,
Search,
Calendar,
User,
ChevronRight,
Clock,
Filter,
Grid3x3,
List,
TrendingUp
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const categories = [
{ id: "all", label: "Tất cả", count: 24 },
{ id: "promotion", label: "Ưu đãi", count: 5 },
{ id: "news", label: "Tin tức", count: 12 },
{ id: "document", label: "Văn bản", count: 4 },
{ id: "customer", label: "Quản lý khách hàng", count: 3 }
];

const articles = [
{
id: 1,
title: "Hướng dẫn cách xem chi số đồng hồ nước",
excerpt: "Hướng dẫn chi tiết cách xem chỉ số đồng hồ nước chính xác để theo dõi mức tiêu thụ hàng tháng...",
category: "Tin tức",
author: "Phòng XL doanh",
date: "15/11/2024",
readTime: "3 phút",
image: "https://images.unsplash.com/photo-1624948465027-6f9b51067557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
views: 234
},
{
id: 2,
title: "CẢNH BÁO LỪA ĐẢO",
excerpt: "Thông báo cảnh báo tình trạng giả mạo nhân viên công ty để lừa đảo. Khách hàng cần cảnh giác với các trường hợp đáng ngờ...",
category: "Tin tức",
author: "Phòng Hành chính",
date: "12/11/2024",
readTime: "2 phút",
image: "https://images.unsplash.com/photo-1617155092918-480ef0b17330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
views: 456
},
{
id: 3,
title: "Thông báo lịch nghỉ Tết Nguyên Đán Ất Ngọ 2025",
excerpt: "Công ty TNHH Cấp Nước Tóc Tiên thông báo lịch nghỉ Tết Nguyên Đán năm 2025. Khách hàng lưu ý sắp xếp đặt hàng...",
category: "Tin tức",
author: "Phòng Tổng hợp",
date: "10/11/2024",
readTime: "2 phút",
image: "https://images.unsplash.com/photo-1748261347768-a32434751a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
views: 189
},
{
id: 4,
title: "Chính sách giảm giá cho khách hàng thân thiết",
excerpt: "Áp dụng chính sách ưu đãi đặc biệt cho khách hàng sử dụng dịch vụ lâu dài. Giảm giá đến 15% cho đơn hàng thường xuyên...",
category: "Ưu đãi",
author: "Phòng Kinh doanh",
date: "08/11/2024",
readTime: "4 phút",
image: "https://images.unsplash.com/photo-1748261347718-48afb646c3d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
views: 567
},
{
id: 5,
title: "Quy trình xử lý nước hiện đại",
excerpt: "Tìm hiểu về công nghệ RO tiên tiến và quy trình lọc 8 công đoạn đảm bảo nước sạch đạt chuẩn quốc tế...",
category: "Tin tức",
author: "Phòng Kỹ thuật",
date: "05/11/2024",
readTime: "6 phút",
image: "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
views: 345
},
{
id: 6,
title: "Kết quả xét nghiệm nước tháng 10/2024",
excerpt: "Công bố kết quả xét nghiệm chất lượng nước tháng 10/2024. Tất cả các chỉ số đều đạt tiêu chuẩn Bộ Y Tế...",
category: "Văn bản",
author: "Phòng Kiểm định",
date: "01/11/2024",
readTime: "5 phút",
image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
views: 423
}
];

export default function App() {
const [activeCategory, setActiveCategory] = useState("all");
const [searchQuery, setSearchQuery] = useState("");
const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

const filteredArticles = articles.filter(article => {
const matchesCategory = activeCategory === "all" ||
article.category.toLowerCase().includes(activeCategory);
const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
return matchesCategory && matchesSearch;
});

return (
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
{/_ Header _/}
<header className="bg-white border-b border-gray-200 shadow-sm">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
<Droplets className="w-7 h-7 text-white" strokeWidth={2.5} />
</div>
<div>
<h1 className="text-xl text-gray-900">TNHH Cấp Nước Tóc Tiên</h1>
<p className="text-xs text-gray-500">Tin tức & Sự kiện</p>
</div>
</div>
</div>
</div>
</header>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-4xl md:text-5xl mb-4">Tin tức</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Cập nhật những thông tin mới nhất về dịch vụ, chính sách và hoạt động của công ty
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Search & Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bài viết..."
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-1">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <List className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span>{category.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id
                    ? "bg-white/20"
                    : "bg-gray-100"
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Hiển thị <span className="font-medium text-gray-900">{filteredArticles.length}</span> bài viết
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span>Mới nhất</span>
          </div>
        </div>

        {/* Articles Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="text-blue-500 flex items-center gap-1"
                    >
                      <span className="text-sm">Đọc tiếp</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 cursor-pointer group"
              >
                <div className="flex gap-6 p-6">
                  <div className="w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>

                    <h3 className="text-2xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Không tìm thấy bài viết</h3>
            <p className="text-gray-500">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
          </motion.div>
        )}

        {/* Load More */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors"
            >
              Xem thêm bài viết
            </motion.button>
          </div>
        )}
      </div>
    </div>

);
}
