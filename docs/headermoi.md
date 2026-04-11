<motion.header
ref={headerRef}
style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow
        }}
className="sticky top-0 z-50 backdrop-blur-lg" >
<div className="max-w-7xl mx-auto px-4 md:px-6">
{/_ Top Bar _/}
<div className="py-4 flex items-center justify-between gap-4">
{/_ Logo & Company Name _/}
<div className="flex items-center gap-3 flex-shrink-0">
<motion.div
whileHover={{ rotate: [0, -10, 10, 0] }}
transition={{ duration: 0.5 }}
className="relative" >
<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
<Droplets className="w-8 h-8 text-white" strokeWidth={2.5} />
</div>
<motion.div
className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
transition={{ duration: 2, repeat: Infinity }}
/>
</motion.div>
<div className="hidden sm:block">
<h1 className="text-xl md:text-2xl text-gray-900">TNHH Cấp Nước Tóc Tiên</h1>
<p className="text-xs text-gray-500">Nguồn nước sạch - Sức khỏe vàng</p>
</div>
</div>

            {/* Search Bar - Desktop */}
            <motion.div
              animate={{
                width: isSearchFocused ? "100%" : "auto",
                maxWidth: isSearchFocused ? "600px" : "400px"
              }}
              className="hidden md:flex flex-1 max-w-md mx-4"
            >
              <div className="relative w-full">
                <motion.div
                  animate={{
                    scale: isSearchFocused ? 1.02 : 1,
                    boxShadow: isSearchFocused
                      ? "0 8px 24px rgba(59, 130, 246, 0.15)"
                      : "0 2px 8px rgba(0, 0, 0, 0.05)"
                  }}
                  className="relative"
                >
                  <Search
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                      isSearchFocused ? "text-blue-500" : "text-gray-400"
                    }`}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    placeholder="Tìm kiếm dịch vụ, tin tức..."
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isSearchFocused && searchQuery ? 1 : 0 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-xs rounded-full"
                  >
                    Enter
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Hotline Button */}
            <motion.a
              href="tel:02513822059"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
            >
              <div className="relative">
                <Phone className="w-5 h-5" />
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
              <div className="text-left">
                <p className="text-xs opacity-90">Hotline</p>
                <p className="font-medium">0251 3822 059</p>
              </div>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>


            {/* Working Status */}
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Đang hoạt động</span>
            </motion.div>
          </nav>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none transition-all text-gray-900"
              />
            </div>
          </div>
        </div>
