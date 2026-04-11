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
<motion.a
href="#"
className="flex items-center gap-3 flex-shrink-0 group"
whileHover={{ scale: 1.02 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }} >
<motion.div
whileHover={{
                  rotate: [0, -15, 15, -10, 10, 0],
                  scale: 1.1
                }}
transition={{ duration: 0.6 }}
className="relative" >
<motion.div
className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-shadow duration-300"
whileHover={{
                    background: [
                      "linear-gradient(to bottom right, rgb(59, 130, 246), rgb(29, 78, 216))",
                      "linear-gradient(to bottom right, rgb(96, 165, 250), rgb(59, 130, 246))",
                      "linear-gradient(to bottom right, rgb(59, 130, 246), rgb(29, 78, 216))"
                    ]
                  }}
transition={{ duration: 0.8 }} >
<motion.div
animate={{
                      y: [0, -2, 0]
                    }}
transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} >
<Droplets className="w-8 h-8 text-white" strokeWidth={2.5} />
</motion.div>
</motion.div>
<motion.div
className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
transition={{ duration: 2, repeat: Infinity }}
whileHover={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 360]
                  }}
/>
{/_ Ripple effect on hover _/}
<motion.div
className="absolute inset-0 rounded-2xl bg-blue-400"
initial={{ scale: 1, opacity: 0 }}
whileHover={{ scale: 1.4, opacity: [0, 0.3, 0] }}
transition={{ duration: 0.6 }}
/>
</motion.div>
<div className="hidden sm:block">
<motion.h1
className="text-xl md:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
whileHover={{
                    scale: 1.05,
                    background: [
                      "linear-gradient(to right, #1f2937, #1f2937)",
                      "linear-gradient(to right, #2563eb, #1d4ed8, #2563eb)",
                      "linear-gradient(to right, #1f2937, #1f2937)"
                    ],
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
transition={{ duration: 0.8 }} >
TNHH Cấp Nước Tóc Tiên
</motion.h1>
<motion.p
className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
initial={{ opacity: 0.7 }}
whileHover={{
                    opacity: 1,
                    x: [0, 3, 0]
                  }}
transition={{ duration: 0.5 }} >
Nguồn nước sạch - Sức khỏe vàng
</motion.p>
</div>
</motion.a>
