export default function App() {
return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50 py-20 px-6">
<div className="max-w-7xl mx-auto">
{/_ Header _/}
<div className="text-center mb-16">
<div className="inline-block mb-4">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center mx-auto shadow-xl shadow-blue-600/20">
<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
</svg>
</div>
</div>
<h1 className="text-slate-900 mb-4">Phạm Vi Cấp Nước</h1>
<p className="text-slate-600 text-xl mb-2">
Công ty TNHH Cấp nước Tóc Tiên
</p>
<p className="text-slate-500">
Quyết định số 14414/UB-ND-VP - UBND Tỉnh Bà Rịa - Vũng Tàu
</p>
</div>

        {/* Coverage Areas - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Domestic Water */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 border border-slate-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-slate-900 mb-6">Nước Sinh Hoạt</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <p className="text-slate-600">Các hộ dân ở phía đông Quốc lộ 51</p>
                </div>
                <div className="flex gap-3 items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <p className="text-slate-600">Khu vực Nam Hiệp Thành</p>
                </div>
                <div className="flex gap-3 items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <p className="text-slate-600">Từ điểm giao Quốc lộ 51 và đường QH33 đi theo lề trái về Đường 81</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industrial Water */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-300 border border-slate-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-slate-900 mb-6">Nước Công Nghiệp</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <p className="text-slate-600">Khu công nghiệp Mỹ Xuân B1-Conac</p>
                </div>
                <div className="flex gap-3 items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <p className="text-slate-600">50% Khu công nghiệp PM1</p>
                </div>
                <div className="flex gap-3 items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <p className="text-slate-600">Khu công nghiệp Phú Mỹ 2 và Phú Mỹ 2 mở rộng</p>
                </div>
                <div className="flex gap-3 items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <p className="text-slate-600">Khu công nghiệp Cái Mép</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

);
}
