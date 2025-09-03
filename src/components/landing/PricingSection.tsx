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
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          variants={mobileStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Suggested Price with X Cross */}
          <motion.div 
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 relative group"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="relative mb-4">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 relative z-10">€250,00</h3>
                {/* Stylish X Cross - Fixed positioning */}
                <svg 
                  className="absolute inset-0 w-full h-full z-20" 
                  viewBox="0 0 100 50"
                  style={{ top: '10px' }}
                >
                  <line 
                    x1="10" y1="15" x2="90" y2="35" 
                    stroke="#dc2626" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="drop-shadow-lg"
                  />
                  <line 
                    x1="10" y1="35" x2="90" y2="15" 
                    stroke="#dc2626" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="drop-shadow-lg"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mb-4">IVA ESCLUSA</p>
              <div className="border-l-4 border-brand-red pl-4">
                <p className="text-brand-red font-bold text-lg">
                  PREZZO SUGGERITO<br />
                  ENTE BILATERALE
                </p>
              </div>
            </div>
          </motion.div>

          {/* Promo Card - Most Popular */}
          <motion.div 
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-2 border-brand-red relative group transform scale-105"
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold">
                POPOLARE
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative pt-2">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">€159,00</h3>
              <p className="text-sm text-gray-600 mb-4">IVA ESCLUSA</p>
              <div className="bg-brand-red text-white px-4 py-2 rounded-lg mb-6 inline-block">
                <p className="font-bold text-lg">🎉 PROMO!</p>
              </div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="red" 
                  size="lg" 
                  className="w-full rounded-full hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
                  onClick={() => window.open('https://tinyurl.com/FDDLPO', '_blank')}
                >
                  ACQUISTA ORA 🖊️
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Ferrari Service Card */}
          <motion.div 
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 relative group"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">€149,00</h3>
              <p className="text-sm text-gray-600 mb-4">IVA ESCLUSA</p>
              <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <p className="text-blue-600 font-bold text-lg">CLIENTI</p>
              </div>
              <div className="flex items-center justify-center mb-6 bg-gray-50 p-4 rounded-lg">
                <img 
                  src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                  alt="Tutela Impresa Logo" 
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = tutelaImpresaLogo;
                  }}
                />
              </div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="red" 
                  size="lg" 
                  className="w-full rounded-full hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
                  onClick={() => window.open('https://tinyurl.com/FDDLNR', '_blank')}
                >
                  ACQUISTA ORA
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Tutela Impresa Premium Card */}
          <motion.div 
            className="bg-gradient-to-br from-brand-red to-red-700 p-6 md:p-8 rounded-2xl shadow-xl text-white relative group overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">€99,00</h3>
              <p className="text-sm mb-4 opacity-90">IVA ESCLUSA</p>
              <div className="bg-white/20 p-3 rounded-lg mb-6 inline-block">
                <p className="text-white font-bold text-lg">CLIENTI</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg mb-6 flex items-center justify-center space-x-2">
                <img 
                  src={tutelaImpresaLogo}
                  alt="Tutela Impresa Logo" 
                  className="h-10 object-contain filter brightness-0 invert"
                />
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white text-brand-red border-white hover:bg-gray-100 rounded-full font-bold hover:shadow-xl transition-all duration-300"
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