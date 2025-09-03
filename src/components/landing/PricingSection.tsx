import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import tutelaImpresaLogo from "@/assets/tutelaimpresa-logo.png";
import ferrariLogo from "@/assets/ferrari-logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const mobileStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28 relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 md:mb-20 relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="relative inline-block">
            QUANTO COSTA?
            <motion.div 
              className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red via-yellow-400 to-brand-red rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.div 
              className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-white/30 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-16"
          variants={mobileStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 - Crossed Out Price */}
          <motion.div 
            className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-10 rounded-3xl shadow-2xl shadow-black/20 border border-gray-200 relative group h-[400px] flex flex-col justify-between overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="relative mb-6">
                <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-2 relative">
                  €250,00
                  {/* Premium X Cross */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -rotate-12 shadow-lg"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transform rotate-12 shadow-lg"></div>
                    </div>
                  </div>
                </h3>
              </div>
              <p className="text-sm font-semibold text-gray-500 mb-6 tracking-wider">IVA ESCLUSA</p>
            </div>
            
            <div className="relative">
              <div className="border-l-4 border-gradient-to-b from-red-500 to-red-600 bg-gradient-to-r from-red-50 to-transparent p-4 rounded-r-lg">
                <p className="text-red-700 font-bold text-lg leading-tight">
                  PREZZO SUGGERITO<br />
                  <span className="text-red-600">ENTE BILATERALE</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Most Popular */}
          <motion.div 
            className="bg-gradient-to-br from-white to-red-50 p-8 md:p-10 rounded-3xl shadow-2xl shadow-red-500/20 border-2 border-red-500 relative group h-[400px] flex flex-col justify-between overflow-hidden transform scale-105"
            variants={fadeInUp}
            whileHover={{ scale: 1.08, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-black shadow-xl shadow-red-500/30 border-2 border-white">
                ⭐ POPOLARE
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-red-200 to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative z-10 pt-4">
              <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-2">€159,00</h3>
              <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wider">IVA ESCLUSA</p>
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-2xl mb-6 inline-block shadow-lg">
                <p className="font-black text-lg">🔥 PROMO ATTIVA!</p>
              </div>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="red" 
                size="lg" 
                className="w-full rounded-2xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-400 bg-gradient-to-r from-red-600 to-red-700 font-black text-lg py-4"
                onClick={() => window.open('https://tinyurl.com/FDDLPO', '_blank')}
              >
                ACQUISTA ORA 🚀
              </Button>
            </motion.div>
          </motion.div>

          {/* Card 3 - Ferrari Service */}
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-10 rounded-3xl shadow-2xl shadow-blue-500/20 border border-blue-200 relative group h-[400px] flex flex-col justify-between overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-2">€149,00</h3>
              <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wider">IVA ESCLUSA</p>
              <div className="border-l-4 border-gradient-to-b from-blue-500 to-blue-600 bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-r-lg mb-6">
                <p className="text-blue-700 font-bold text-lg">CLIENTI PREMIUM</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl mb-6 shadow-inner border">
                <img 
                  src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                  alt="Tutela Impresa Logo" 
                  className="h-14 object-contain mx-auto filter drop-shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = tutelaImpresaLogo;
                  }}
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="red" 
                  size="lg" 
                  className="w-full rounded-2xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-400 font-black text-lg py-4"
                  onClick={() => window.open('https://tinyurl.com/FDDLNR', '_blank')}
                >
                  ACQUISTA ORA
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4 - Premium Red */}
          <motion.div 
            className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 p-8 md:p-10 rounded-3xl shadow-2xl shadow-red-900/40 text-white relative group overflow-hidden h-[400px] flex flex-col justify-between border border-red-400"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-800 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-black mb-2 text-white drop-shadow-lg">€99,00</h3>
              <p className="text-sm font-semibold opacity-90 mb-4 tracking-wider">IVA ESCLUSA</p>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-6 inline-block border border-white/30">
                <p className="text-white font-black text-lg drop-shadow">💎 CLIENTI VIP</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-6 border border-white/20 shadow-inner">
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={tutelaImpresaLogo}
                    alt="Tutela Impresa Logo" 
                    className="h-12 object-contain filter brightness-0 invert drop-shadow-lg"
                  />
                  <div className="w-1 h-8 bg-white/30 rounded-full"></div>
                  <img 
                    src={ferrariLogo}
                    alt="Ferrari Logo" 
                    className="h-12 object-contain filter drop-shadow-lg"
                  />
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-red-700 border-2 border-white hover:bg-gray-100 rounded-2xl font-black text-lg py-4 shadow-xl hover:shadow-2xl transition-all duration-400"
                  onClick={() => window.open('https://tinyurl.com/FDDLTI', '_blank')}
                >
                  ACQUISTA ORA 👑
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}