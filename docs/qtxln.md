{/_ Technology Section _/}
<div className="mt-32 text-center">
<div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-blue-500/30 backdrop-blur-sm mb-6">
<span className="text-blue-300">Công Nghệ Hiện Đại</span>
</div>
<h2 className="text-4xl md:text-5xl text-white mb-6">Quy Trình Xử Lý Nước</h2>
<p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-4">
Sử dụng quy trình xử lý truyền thống được ứng dụng phổ biến trên thế giới
</p>
<p className="text-slate-400 max-w-2xl mx-auto mb-16">
Hệ thống gồm 2 cụm xử lý hoạt động độc lập, đảm bảo hệ số dự phòng và an toàn trong quá trình vận hành
</p>

            {/* Process Flow */}
            <div className="relative max-w-6xl mx-auto">
              {/* Desktop Flow - Horizontal */}
              <div className="hidden md:flex items-center justify-between gap-4">
                {/* Step 1 - Raw Water */}
                <div className="flex-1 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 border border-slate-600 group-hover:border-slate-500 transition-all duration-300 h-64 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-slate-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-slate-300 text-sm">1</div>
                      <h3 className="text-xl text-white mb-2">Nước Thô</h3>
                      <p className="text-slate-400 text-sm text-center">Nguồn đầu vào</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Step 2 - Reaction */}
                <div className="flex-1 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 border border-blue-500 group-hover:border-blue-400 transition-all duration-300 h-64 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">2</div>
                      <h3 className="text-xl text-white mb-2">Phản Ứng</h3>
                      <p className="text-blue-100 text-sm text-center">Keo tụ hóa chất</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Step 3 - Settling */}
                <div className="flex-1 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-3xl p-8 border border-cyan-500 group-hover:border-cyan-400 transition-all duration-300 h-64 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm">3</div>
                      <h3 className="text-xl text-white mb-2">Lắng</h3>
                      <p className="text-cyan-100 text-sm text-center">Tách tạp chất</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Step 4 - Filtration */}
                <div className="flex-1 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl p-8 border border-violet-500 group-hover:border-violet-400 transition-all duration-300 h-64 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                      </div>
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm">4</div>
                      <h3 className="text-xl text-white mb-2">Lọc</h3>
                      <p className="text-violet-100 text-sm text-center">Lọc tinh vi</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Step 5 - Clean Water */}
                <div className="flex-1 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 border-2 border-emerald-400 group-hover:border-emerald-300 transition-all duration-300 h-64 flex flex-col items-center justify-center shadow-2xl shadow-emerald-600/50">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-white text-sm">5</div>
                      <h3 className="text-xl text-white mb-2">Nước Sạch</h3>
                      <p className="text-emerald-100 text-sm text-center">Đạt tiêu chuẩn</p>
                    </div>
                  </div>
                </div>
              </div>
