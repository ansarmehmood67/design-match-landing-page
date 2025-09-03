import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import tutelaImpresaLogo from "@/assets/tutelaimpresa-logo.png";

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
      staggerChildren: 0.4,
      delayChildren: 0.1
    }
  }
};

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-12 md:mb-16 relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="relative inline-block">
            QUANTO COSTA?
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-yellow-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
          {/* Suggested Price with X Cross */}
          <motion.div 
            className="bg-gradient-to-br from-white via-gray-50 to-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative group overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <div className="relative inline-block mb-4">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">€250,00</h3>
                {/* Premium X Cross */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-2 bg-gradient-to-r from-brand-red via-red-600 to-brand-red transform rotate-12 rounded-full shadow-xl opacity-90"></div>
                  <div className="absolute w-full h-2 bg-gradient-to-r from-brand-red via-red-600 to-brand-red transform -rotate-12 rounded-full shadow-xl opacity-90"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6 font-medium tracking-wide">IVA ESCLUSA</p>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-2xl border-l-4 border-brand-red">
                <p className="text-brand-red font-bold text-lg leading-tight">
                  PREZZO SUGGERITO<br />
                  <span className="text-base font-semibold">ENTE BILATERALE</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Promo Card - Most Popular */}
          <motion.div 
            className="bg-gradient-to-br from-white via-red-50 to-white p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-brand-red relative group transform scale-105 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-brand-red to-red-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                ✨ PIÙ POPOLARE
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20"></div>
            <div className="relative z-10 pt-4">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">€159,00</h3>
              <p className="text-sm text-gray-500 mb-4 font-medium tracking-wide">IVA ESCLUSA</p>
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-2xl mb-6 shadow-lg">
                <p className="font-bold text-xl">🎉 PROMO!</p>
              </div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="red" 
                  size="lg" 
                  className="w-full rounded-full hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 font-bold text-lg py-4"
                  onClick={() => window.open('https://tinyurl.com/FDDLPO', '_blank')}
                >
                  ACQUISTA ORA 🚀
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Ferrari Service Card */}
          <motion.div 
            className="bg-gradient-to-br from-white via-blue-50 to-white p-8 md:p-10 rounded-3xl shadow-2xl border border-blue-200 relative group overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">€149,00</h3>
              <p className="text-sm text-gray-500 mb-4 font-medium tracking-wide">IVA ESCLUSA</p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border-l-4 border-blue-500 mb-6">
                <p className="text-blue-700 font-bold text-lg">CLIENTI</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-inner mb-6 border">
                <img 
                  src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                  alt="Ferrari Service Logo" 
                  className="h-14 w-auto mx-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = tutelaImpresaLogo;
                  }}
                />
              </div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="red" 
                  size="lg" 
                  className="w-full rounded-full hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 font-bold text-lg py-4"
                  onClick={() => window.open('https://tinyurl.com/FDDLNR', '_blank')}
                >
                  ACQUISTA ORA
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Tutela Impresa Premium Card */}
          <motion.div 
            className="bg-gradient-to-br from-brand-red via-red-600 to-red-800 p-8 md:p-10 rounded-3xl shadow-2xl text-white relative group overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-red-300 to-red-400 rounded-full opacity-15"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">€99,00</h3>
              <p className="text-sm mb-4 opacity-90 font-medium tracking-wide">IVA ESCLUSA</p>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 mb-6">
                <p className="text-white font-bold text-lg">CLIENTI</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-inner mb-6 border border-white/30">
                <div className="flex items-center justify-center space-x-3">
                  <img 
                    src={tutelaImpresaLogo}
                    alt="Tutela Impresa Logo" 
                    className="h-12 object-contain filter brightness-0 invert"
                  />
                  <img 
                    src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                    alt="Ferrari Service Logo" 
                    className="h-12 object-contain filter brightness-0 invert"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white text-brand-red border-white hover:bg-gray-50 rounded-full font-bold hover:shadow-2xl transition-all duration-300 text-lg py-4"
                  onClick={() => window.open('https://tinyurl.com/FDDLTI', '_blank')}
                >
                  ACQUISTA ORA 💎
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}