import { motion } from "motion/react";

const banks = [
{ abbr: "Vietinbank", name: "Ngân hàng TMCP Công Thương Việt Nam", color: "#005FAA" },
{ abbr: "VCB", name: "Ngân hàng TMCP Ngoại Thương Việt Nam", color: "#007B4E" },
{ abbr: "Agribank", name: "Ngân hàng Nông nghiệp và Phát triển nông thôn", color: "#00853E" },
{ abbr: "BIDV", name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam", color: "#003DA5" },
{ abbr: "BVBank", name: "Ngân hàng Bản Việt", color: "#E30613" },
{ abbr: "HDBank", name: "Ngân hàng TMCP Phát triển TP Hồ Chí Minh", color: "#004B8D" },
{ abbr: "HSBC", name: "Ngân hàng TNHH MTV HSBC", color: "#DB0011" },
{ abbr: "Eximbank", name: "Ngân hàng Xuất nhập Khẩu Việt Nam", color: "#005BAA" },
{ abbr: "VPBank", name: "Ngân hàng TMCP Việt Nam Thịnh Vượng", color: "#00923F" },
];

export default function App() {
return (

<div className="min-h-screen flex items-center justify-center p-8"
style={{
           background: 'linear-gradient(135deg, #f8f9fc 0%, #e8ecf4 100%)',
           fontFamily: "'Outfit', sans-serif"
         }}>
<div className="w-full max-w-7xl">
{/_ Header _/}
<motion.div
className="text-center mb-12"
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }} >
<h1 className="mb-2" style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1a2c5b 0%, #2d5a8f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>
Thanh toán trực tuyến
</h1>
<p style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: 500 }}>
Hỗ trợ chuyển khoản qua các ngân hàng uy tín
</p>
</motion.div>

        {/* Banks Grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {banks.map((bank, index) => (
            <motion.div
              key={bank.abbr}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                scale: 1.05,
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Card Background */}
              <div
                className="relative overflow-hidden rounded-xl p-4 h-28 flex flex-col items-center justify-center"
                style={{
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Hover Gradient Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${bank.color}08 0%, ${bank.color}18 100%)`
                  }}
                />

                {/* Bank Abbreviation */}
                <div className="relative z-10 text-center">
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: bank.color,
                      letterSpacing: '-0.01em',
                      marginBottom: '0.25rem',
                      transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                    className="group-hover:scale-110"
                  >
                    {bank.abbr}
                  </div>

                  {/* Decorative Line */}
                  <div
                    className="h-0.5 w-8 mx-auto rounded-full transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${bank.color}, transparent)`,
                      opacity: 0.4
                    }}
                  />
                </div>

                {/* Tooltip on Hover */}
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: 'rgba(15, 23, 42, 0.95)',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  {bank.name}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 -mt-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '4px solid transparent',
                      borderRight: '4px solid transparent',
                      borderTop: '4px solid rgba(15, 23, 42, 0.95)'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Banks Indicator */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(0,0,0,0.08)',
              backdropFilter: 'blur(10px)',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#64748b'
            }}
          >
            <span style={{
              fontSize: '1.2rem',
              letterSpacing: '0.1em',
              color: '#94a3b8'
            }}>
              •••
            </span>
            <span>Và nhiều ngân hàng khác: VietBank, NCB, VIB, MB, ACB...</span>
          </div>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span style={{ fontWeight: 500 }}>Giao dịch an toàn & bảo mật</span>
          </div>
        </motion.div>
      </div>
    </div>

);
}
