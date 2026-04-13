          {/* Customers Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/30 backdrop-blur-sm mb-6">
                <span className="text-orange-300">Đối Tác Tin Cậy</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-white mb-6">Khách Hàng</h2>
              <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Hơn 20 năm được sự tin tưởng phục vụ người dân và các khu công nghiệp trên địa bàn Thị xã Phú Mỹ
              </p>
            </div>

            {/* Trust Banner */}
            <div className="mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-amber-600/20 to-yellow-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-orange-600/10 via-amber-600/10 to-yellow-600/10 backdrop-blur-lg rounded-3xl p-12 md:p-16 border border-orange-500/30 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-600 to-amber-600 mb-6 shadow-2xl shadow-orange-600/40">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl text-white mb-6">Đối Tác Đáng Tin Cậy</h3>
                  <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Đây là động lực quan trọng để chúng tôi tiếp tục không ngừng nỗ lực đầu tư phát triển trong thời gian tới
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Categories */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Residential Customers */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-lg rounded-3xl p-10 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl text-white mb-1">Người Dân</h3>
                      <p className="text-blue-200">Cư dân Thị xã Phú Mỹ</p>
                    </div>
                  </div>

                  <div className="bg-blue-950/30 rounded-2xl p-6 border border-blue-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      <h4 className="text-white text-lg">Phục vụ cộng đồng</h4>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      Cung cấp nước sạch chất lượng cao cho hàng ngàn hộ gia đình trên địa bàn Thị xã Phú Mỹ, đảm bảo sức khỏe và chất lượng cuộc sống cho cộng đồng
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Nước sạch an toàn 24/7</span>
                  </div>
                </div>
              </div>

              {/* Industrial Customers */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-emerald-600/10 to-green-600/10 backdrop-blur-lg rounded-3xl p-10 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl text-white mb-1">Khu Công Nghiệp</h3>
                      <p className="text-emerald-200">Đối tác công nghiệp</p>
                    </div>
                  </div>

                  <div className="bg-emerald-950/30 rounded-2xl p-6 border border-emerald-500/20 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      <h4 className="text-white text-lg">Các khu công nghiệp lớn</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300">KCN Phú Mỹ 1</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300">KCN Phú Mỹ 2 & Mở rộng</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300">KCN Cái Mép</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300">KCN Mỹ Xuân B1</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-emerald-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Đáp ứng nhu cầu sản xuất quy mô lớn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="mt-12 grid md:grid-cols-4 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-amber-600/10 to-orange-600/10 backdrop-blur-lg rounded-2xl p-6 border border-amber-500/30 text-center group-hover:border-amber-400/50 transition-all">
                  <div className="text-4xl text-amber-400 mb-2">20+</div>
                  <div className="text-slate-300">Năm Kinh Nghiệm</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 text-center group-hover:border-blue-400/50 transition-all">
                  <div className="text-4xl text-blue-400 mb-2">1000+</div>
                  <div className="text-slate-300">Hộ Dân Phục Vụ</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-emerald-600/10 to-teal-600/10 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/30 text-center group-hover:border-emerald-400/50 transition-all">
                  <div className="text-4xl text-emerald-400 mb-2">5+</div>
                  <div className="text-slate-300">Khu Công Nghiệp</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-violet-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-6 border border-violet-500/30 text-center group-hover:border-violet-400/50 transition-all">
                  <div className="text-4xl text-violet-400 mb-2">100%</div>
                  <div className="text-slate-300">Chất Lượng Cam Kết</div>
                </div>
              </div>
            </div>
          </div>
        </div>
