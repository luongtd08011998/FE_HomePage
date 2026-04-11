import { motion } from "motion/react";
import { useState } from "react";
import {
Droplets,
ArrowLeft,
Calendar,
User,
Eye,
Share2,
Bookmark,
Facebook,
Twitter,
Link2,
ChevronRight,
Clock,
Tag,
Download,
Printer
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const articleData = {
id: 1,
title: "Kết quả xét nghiệm nước tháng 09/2025",
subtitle: "Cấp nước Tóc Tiên - Kết quả xét nghiệm chất lượng nước sạch tháng 09/2025. Đảng bảo chất...",
category: "Chất lượng nước",
author: "Phòng Kiểm định",
publishDate: "17/09/2025",
views: 1234,
readTime: "5 phút đọc",
image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
tags: ["Xét nghiệm", "Chất lượng", "An toàn", "Tháng 9/2025"]
};

const relatedArticles = [
{
id: 2,
title: "Kết quả xét nghiệm nước tháng 08/2025",
date: "15/08/2025",
image: "https://images.unsplash.com/photo-1748261347768-a32434751a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
},
{
id: 3,
title: "Quy trình kiểm định chất lượng nước",
date: "10/09/2025",
image: "https://images.unsplash.com/photo-1748261347718-48afb646c3d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
},
{
id: 4,
title: "Tiêu chuẩn nước sạch theo Bộ Y Tế",
date: "05/09/2025",
image: "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
}
];

const testResults = [
{ stt: 1, soPhieu: "KDQL_CSC_17092025_012825", diaDiem: "Nhà máy Cấp nước Tóc Tiên", ngayLay: "17.09.2025", lienHe: "KDQL_CSC_17092025_012825.20" },
{ stt: 2, soPhieu: "KDQL_CSC_17092025_012920", diaDiem: "TTYT Phú Mỹ", ngayLay: "17.09.2025", lienHe: "KDQL_CSC_17092025_012920.20" }
];

export default function App() {
const [isBookmarked, setIsBookmarked] = useState(false);

const handleShare = (platform: string) => {
console.log(`Sharing to ${platform}`);
};

return (
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-500 transition-colors">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-500 transition-colors">Tin tức</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{articleData.category}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {articleData.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {articleData.readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
                {articleData.title}
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {articleData.subtitle}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{articleData.author}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{articleData.publishDate}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{articleData.views.toLocaleString()} lượt xem</span>
                </div>
              </div>
            </motion.div>

            {/* Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-2xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Chia sẻ:</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleShare('copy')}
                  className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Link2 className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-full transition-colors ${
                    isBookmarked ? "bg-yellow-100 text-yellow-600" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src={articleData.image}
                alt={articleData.title}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none mb-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl text-gray-900 mb-4">Thông tin chung</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cấp nước Tóc Tiên - Kết quả xét nghiệm chất lượng nước sạch tháng 09/2025.
                  Đảm bảo chất lượng theo đúng tiêu chuẩn Bộ Y Tế quy định.
                </p>

                <h3 className="text-xl text-gray-900 mb-4">Kết quả xét nghiệm</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dưới đây là bảng kết quả xét nghiệm chi tiết các mẫu nước được lấy tại các điểm khác nhau:
                </p>

                {/* Test Results Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm text-gray-700 border-b border-gray-200">STT</th>
                        <th className="px-4 py-3 text-left text-sm text-gray-700 border-b border-gray-200">Số phiếu</th>
                        <th className="px-4 py-3 text-left text-sm text-gray-700 border-b border-gray-200">Địa điểm lấy mẫu</th>
                        <th className="px-4 py-3 text-left text-sm text-gray-700 border-b border-gray-200">Ngày lấy</th>
                        <th className="px-4 py-3 text-left text-sm text-gray-700 border-b border-gray-200">Liên hệ xử lý</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testResults.map((result) => (
                        <tr key={result.stt} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100">{result.stt}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100 font-mono">{result.soPhieu}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100">{result.diaDiem}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100">{result.ngayLay}</td>
                          <td className="px-4 py-3 text-sm border-b border-gray-100">
                            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                              {result.lienHe}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl text-gray-900 mb-4">Kết luận</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tất cả các mẫu nước đều đạt tiêu chuẩn chất lượng theo quy định của Bộ Y Tế.
                  Công ty TNHH Cấp Nước Tóc Tiên cam kết tiếp tục duy trì và nâng cao chất lượng
                  nước cung cấp cho khách hàng.
                </p>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-500" />
                {articleData.tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Related Articles */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm mb-6"
              >
                <h3 className="text-xl text-gray-900 mb-4">Bài viết liên quan</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article, index) => (
                    <motion.a
                      key={article.id}
                      href="#"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="flex gap-3 group"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl mb-3">Đăng ký nhận tin</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Nhận thông báo về các bản tin chất lượng nước mới nhất
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-blue-200 focus:outline-none focus:border-white/60 transition-colors"
                  />
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Đăng ký
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>

);
}
