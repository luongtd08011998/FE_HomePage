import { motion } from "motion/react";
import { CreditCard, Building2, Wallet, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface PaymentMethod {
id: number;
name: string;
shortName: string;
color: string;
gradient: string;
icon: "bank" | "card" | "wallet";
}

const paymentMethods: PaymentMethod[] = [
{
id: 1,
name: "Vietcombank",
shortName: "VCB",
color: "#007042",
gradient: "linear-gradient(135deg, #007042 0%, #00a854 100%)",
icon: "bank"
},
{
id: 2,
name: "BIDV",
shortName: "BIDV",
color: "#004B9D",
gradient: "linear-gradient(135deg, #004B9D 0%, #0066CC 100%)",
icon: "bank"
},
{
id: 3,
name: "Vietinbank",
shortName: "VTB",
color: "#ED1C24",
gradient: "linear-gradient(135deg, #ED1C24 0%, #FF4655 100%)",
icon: "bank"
},
{
id: 4,
name: "Payoo",
shortName: "Payoo",
color: "#FF6B00",
gradient: "linear-gradient(135deg, #FF6B00 0%, #FF8F3D 100%)",
icon: "wallet"
},
{
id: 5,
name: "Agribank",
shortName: "Agribank",
color: "#00843D",
gradient: "linear-gradient(135deg, #00843D 0%, #00A94F 100%)",
icon: "bank"
}
];

export default function App() {
const [selectedMethod, setSelectedMethod] = useState<number | null>(null);
const [hoveredId, setHoveredId] = useState<number | null>(null);

const getIcon = (iconType: string) => {
switch (iconType) {
case "bank":
return Building2;
case "card":
return CreditCard;
case "wallet":
return Wallet;
default:
return Building2;
}
};

return (
<div
className="min-h-screen flex items-center justify-center p-8"
style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        fontFamily: 'Karla, sans-serif'
      }} >
<div className="w-full max-w-5xl">
{/_ Header _/}
<motion.div
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
className="text-center mb-12" >
<div className="inline-flex items-center gap-3 mb-4 px-5 py-2.5 rounded-full"
style={{
              background: 'rgba(20, 184, 166, 0.1)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              backdropFilter: 'blur(10px)'
            }} >
<CreditCard className="w-5 h-5" style={{ color: '#14b8a6' }} />
<span style={{ color: '#14b8a6', letterSpacing: '0.05em', fontSize: '0.875rem', fontWeight: 500 }}>
THANH TOÁN TRỰC TUYẾN
</span>
</div>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '3rem',
              fontWeight: 300,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}
          >
            Chọn phương thức thanh toán
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Thanh toán hóa đơn nước nhanh chóng, an toàn với các ngân hàng và cổng thanh toán uy tín
          </p>
        </motion.div>

        {/* Payment Methods Row */}
        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          {paymentMethods.map((method, index) => {
            const IconComponent = getIcon(method.icon);
            const isSelected = selectedMethod === method.id;
            const isHovered = hoveredId === method.id;

            return (
              <motion.button
                key={method.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => setSelectedMethod(method.id)}
                onMouseEnter={() => setHoveredId(method.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  background: isSelected || isHovered
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: '2px solid',
                  borderColor: isSelected
                    ? method.color
                    : 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  padding: '1.5rem',
                  minWidth: '160px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {/* Gradient Background on Hover/Select */}
                <motion.div
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  animate={{ opacity: isSelected || isHovered ? 0.1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: method.gradient
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: isSelected || isHovered ? 1.1 : 1,
                      rotate: isSelected ? 360 : 0
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl"
                    style={{
                      background: method.gradient,
                      boxShadow: isSelected || isHovered
                        ? `0 10px 40px ${method.color}40`
                        : 'none',
                      transition: 'box-shadow 0.4s ease'
                    }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: '#ffffff' }} />
                  </motion.div>

                  {/* Bank Name */}
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      color: '#ffffff',
                      marginBottom: '0.25rem',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {method.shortName}
                  </h3>

                  <p style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginBottom: '1rem'
                  }}>
                    {method.name}
                  </p>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: method.color,
                        boxShadow: isSelected ? `0 0 10px ${method.color}` : 'none'
                      }}
                    />
                    <span style={{
                      fontSize: '0.625rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      letterSpacing: '0.05em'
                    }}>
                      {isSelected ? 'ĐÃ CHỌN' : 'KHẢ DỤNG'}
                    </span>
                  </div>
                </div>

                {/* Selected Check Icon */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-3 right-3 z-20"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: method.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 20px ${method.color}60`
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4" style={{ color: '#ffffff' }} />
                  </motion.div>
                )}

                {/* Hover/Selected Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: isSelected
                      ? `0 0 30px ${method.color}40, inset 0 0 30px ${method.color}20`
                      : isHovered
                      ? `0 0 20px ${method.color}30`
                      : 'none'
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedMethod ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={selectedMethod ? { scale: 1.05 } : {}}
            whileTap={selectedMethod ? { scale: 0.95 } : {}}
            disabled={!selectedMethod}
            className="px-10 py-4 rounded-full"
            style={{
              background: selectedMethod
                ? 'linear-gradient(135deg, #14b8a6, #06b6d4)'
                : 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              border: 'none',
              cursor: selectedMethod ? 'pointer' : 'not-allowed',
              boxShadow: selectedMethod
                ? '0 10px 40px rgba(20, 184, 166, 0.4)'
                : 'none',
              transition: 'all 0.4s ease'
            }}
          >
            TIẾP TỤC THANH TOÁN
          </motion.button>
        </motion.div>
      </div>
    </div>

);
}
