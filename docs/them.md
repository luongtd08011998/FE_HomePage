import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
const [scrollProgress, setScrollProgress] = useState(0);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
setIsVisible(true);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

}, []);

const article = {
title: "The Art of Modern Design: Creating Spaces That Inspire",
subtitle: "Exploring the intersection of minimalism and functionality in contemporary workspace design",
author: {
name: "Sarah Chen",
avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
bio: "Design Writer & Creative Director"
},
publishedDate: "16 Tháng 4, 2026",
readTime: "8 phút đọc",
category: "Thiết Kế",
coverImage: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
content: [
{
type: 'paragraph',
text: 'Trong thế giới thiết kế hiện đại, chúng ta đang chứng kiến một sự chuyển mình đáng kể từ những không gian phức tạp, đầy ắp đồ đạc sang những môi trường tối giản, tập trung vào bản chất. Xu hướng này không chỉ đơn thuần là về thẩm mỹ, mà còn phản ánh cách chúng ta sống và làm việc trong kỷ nguyên số.'
},
{
type: 'heading',
text: 'Triết Lý Tối Giản'
},
{
type: 'paragraph',
text: 'Chủ nghĩa tối giản không có nghĩa là loại bỏ mọi thứ cho đến khi không còn gì. Đúng hơn, nó là về việc giữ lại những gì thực sự quan trọng và loại bỏ những gì không cần thiết. Mỗi yếu tố trong không gian đều có một mục đích rõ ràng, tạo nên sự hài hòa giữa hình thức và chức năng.'
},
{
type: 'image',
src: 'https://images.unsplash.com/photo-1570993492881-25240ce854f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
caption: 'Không gian làm việc hiện đại với thiết kế tối giản'
},
{
type: 'quote',
text: 'Thiết kế tốt là ít nhất có thể - nhưng vẫn đủ để truyền cảm hứng.',
author: 'Dieter Rams'
},
{
type: 'heading',
text: 'Ánh Sáng và Không Gian'
},
{
type: 'paragraph',
text: 'Ánh sáng tự nhiên đóng vai trò then chốt trong việc tạo nên những không gian sống động. Cách ánh sáng di chuyển qua phòng trong suốt cả ngày không chỉ ảnh hưởng đến tâm trạng mà còn định hình cách chúng ta tương tác với môi trường xung quanh. Những nhà thiết kế giỏi hiểu rằng ánh sáng không chỉ là yếu tố chiếu sáng - nó là vật liệu xây dựng.'
},
{
type: 'paragraph',
text: 'Không gian trống không phải là không gian lãng phí. Đó là sự thở của thiết kế, cho phép từng yếu tố được tỏa sáng và người dùng có thể tập trung vào những gì quan trọng. Trong văn phòng hiện đại, khoảng trống này trở thành nơi suy nghĩ sáng tạo được nở rộ.'
},
{
type: 'heading',
text: 'Vật Liệu và Kết Cấu'
},
{
type: 'paragraph',
text: 'Sự lựa chọn vật liệu phản ánh giá trị và cá tính của không gian. Gỗ tự nhiên mang lại sự ấm áp, kim loại tạo nên vẻ hiện đại, trong khi đá và bê tông thể hiện sức mạnh và độ bền. Khi kết hợp khéo léo, những vật liệu này tạo nên một câu chuyện xúc giác, thu hút cả thị giác lẫn xúc giác.'
},
{
type: 'image',
src: 'https://images.unsplash.com/photo-1516798705208-066b05ced1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
caption: 'Sự hòa quyện của các vật liệu tự nhiên'
},
{
type: 'paragraph',
text: 'Cuối cùng, thiết kế tuyệt vời không chỉ về việc tạo ra những không gian đẹp mắt. Nó là về việc hiểu con người, nhu cầu của họ và cách họ tương tác với môi trường. Khi chúng ta thiết kế với sự đồng cảm và mục đích rõ ràng, chúng ta tạo ra những không gian không chỉ đẹp mà còn có ý nghĩa và truyền cảm hứng.'
}
],
tags: ['Thiết kế', 'Kiến trúc', 'Tối giản', 'Workspace']
};

return (

<div className="min-h-screen relative" style={{
      background: 'linear-gradient(to bottom, #faf8f5 0%, #f5f1ea 100%)',
      fontFamily: 'var(--font-serif)'
    }}>
{/_ Reading Progress Bar _/}
<div
className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 transition-all duration-300 z-50"
style={{ width: `${scrollProgress}%` }}
/>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <article className="max-w-4xl mx-auto px-6">
          <div
            className="mb-12 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span
                style={{ fontFamily: 'var(--font-sans)' }}
                className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-semibold tracking-wider uppercase rounded-full"
              >
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="mb-6 leading-tight text-amber-950"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                letterSpacing: '-0.02em'
              }}
            >
              {article.title}
            </h1>



            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-amber-900/10">
              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
                />
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)' }} className="font-semibold text-amber-950 text-sm">
                    {article.author.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)' }} className="text-xs text-amber-700">
                    {article.author.bio}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-amber-700" style={{ fontFamily: 'var(--font-sans)' }}>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {article.publishedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div
            className="mb-16 transition-all duration-1000 ease-out delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
              <ImageWithFallback
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 to-transparent" />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-2xl mx-auto mb-20">
            {article.content.map((block, index) => {
              const delay = 500 + (index * 100);

              if (block.type === 'paragraph') {
                return (
                  <p
                    key={index}
                    className="mb-6 text-amber-900 leading-relaxed transition-all duration-1000 ease-out"
                    style={{
                      fontSize: '1.125rem',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: `${delay}ms`
                    }}
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="mt-12 mb-6 text-amber-950 transition-all duration-1000 ease-out"
                    style={{
                      fontSize: '2rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: `${delay}ms`
                    }}
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={index}
                    className="my-12 pl-8 border-l-4 border-amber-400 transition-all duration-1000 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transitionDelay: `${delay}ms`
                    }}
                  >
                    <p className="text-2xl text-amber-900 italic mb-3 leading-relaxed">
                      "{block.text}"
                    </p>
                    <cite style={{ fontFamily: 'var(--font-sans)' }} className="text-sm text-amber-700 not-italic">
                      — {block.author}
                    </cite>
                  </blockquote>
                );
              }

              if (block.type === 'image') {
                return (
                  <figure
                    key={index}
                    className="my-12 transition-all duration-1000 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                      transitionDelay: `${delay}ms`
                    }}
                  >
                    <div className="overflow-hidden rounded-xl shadow-xl">
                      <ImageWithFallback
                        src={block.src}
                        alt={block.caption}
                        className="w-full hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <figcaption
                      style={{ fontFamily: 'var(--font-sans)' }}
                      className="mt-3 text-center text-sm text-amber-700 italic"
                    >
                      {block.caption}
                    </figcaption>
                  </figure>
                );
              }

              return null;
            })}
          </div>

          {/* Tags */}
          <div className="max-w-2xl mx-auto mb-12 pb-12 border-b border-amber-900/10">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{ fontFamily: 'var(--font-sans)' }}
                  className="px-3 py-1 bg-amber-50 text-amber-800 text-xs rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Card */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200/50 shadow-lg">
              <div className="flex items-start gap-4">
                <ImageWithFallback
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-950 mb-2">
                    {article.author.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)' }} className="text-amber-800 text-sm mb-4">
                    {article.author.bio} - Chuyên viết về thiết kế, kiến trúc và nghệ thuật đương đại. Đam mê khám phá cách con người tương tác với không gian xung quanh.
                  </p>
                  <button
                    style={{ fontFamily: 'var(--font-sans)' }}
                    className="px-4 py-2 bg-amber-900 text-amber-50 text-sm font-medium rounded-lg hover:bg-amber-800 transition-colors"
                  >
                    Theo dõi tác giả
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-amber-950 mb-8">Bài viết liên quan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Phong Cách Scandinavian Trong Thiết Kế Nội Thất',
                  image: 'https://images.unsplash.com/photo-1516889454133-d3cd87326a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
                  readTime: '5 phút đọc'
                },
                {
                  title: 'Màu Sắc và Tâm Lý Trong Không Gian Làm Việc',
                  image: 'https://images.unsplash.com/photo-1552680324-aee2ea34b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
                  readTime: '6 phút đọc'
                },
                {
                  title: 'Xu Hướng Thiết Kế 2026: Tương Lai Của Workspace',
                  image: 'https://images.unsplash.com/photo-1570993492881-25240ce854f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
                  readTime: '7 phút đọc'
                }
              ].map((related, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s backwards`
                  }}
                >
                  <div className="overflow-hidden rounded-xl mb-3 aspect-[4/3]">
                    <ImageWithFallback
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-950 mb-2 group-hover:text-amber-700 transition-colors">
                    {related.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)' }} className="text-sm text-amber-700">
                    {related.readTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>



      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>

);
}
