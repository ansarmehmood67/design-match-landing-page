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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function PricingSection() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 md:mb-20 relative"
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
            className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-200 relative h-[400px] flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <div className="relative z-10">
              <div className="relative mb-6">
                <h3 className="text-4xl font-bold text-gray-900 mb-2 relative">
                  €250,00
                  {/* Stylish X Cross */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transform rotate-12 shadow-sm"></div>
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -rotate-12 shadow-sm"></div>
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-700 to-transparent transform rotate-12"></div>
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-700 to-transparent transform -rotate-12"></div>
                  </div>
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-6 group-hover:text-gray-600 transition-colors">IVA ESCLUSA</p>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500 group-hover:shadow-md transition-shadow duration-300 relative z-10">
              <p className="text-red-700 font-bold text-sm group-hover:text-red-800 transition-colors">
                PREZZO SUGGERITO<br />
                ENTE BILATERALE
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Popular */}
          <motion.div 
            className="bg-gradient-to-br from-white to-red-50 p-8 rounded-xl shadow-lg border-2 border-red-500 relative h-[400px] flex flex-col justify-between group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2 transform scale-105"
            variants={fadeInUp}
            whileHover={{ scale: 1.08 }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                ⭐ PIÙ POPOLARE
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <div className="pt-4 relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">€159,00</h3>
              <p className="text-sm text-gray-500 mb-4 group-hover:text-gray-600 transition-colors">IVA ESCLUSA</p>
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg mb-6 inline-block shadow-md group-hover:shadow-lg transition-shadow">
                <p className="font-bold">🔥 PROMO!</p>
              </div>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="red" 
                size="lg" 
                className="w-full hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://tinyurl.com/FDDLPO', '_blank')}
              >
                ACQUISTA ORA 🚀
              </Button>
            </motion.div>
          </motion.div>

          {/* Card 3 - Clienti */}
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 relative h-[400px] flex flex-col justify-between group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">€149,00</h3>
              <p className="text-sm text-gray-500 mb-4 group-hover:text-gray-600 transition-colors">IVA ESCLUSA</p>
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-lg mb-6 border border-blue-300 group-hover:shadow-md transition-shadow">
                <p className="text-blue-700 font-bold group-hover:text-blue-800 transition-colors">CLIENTI</p>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg mb-6 border shadow-inner group-hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                  alt="Tutela Impresa Logo" 
                  className="h-12 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = tutelaImpresaLogo;
                  }}
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://tinyurl.com/FDDLNR', '_blank')}
                >
                  ACQUISTA ORA
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4 - Premium Red */}
          <motion.div 
            className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-8 rounded-xl shadow-lg text-white relative h-[400px] flex flex-col justify-between group hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-300 hover:-translate-y-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-2 group-hover:text-yellow-100 transition-colors">€99,00</h3>
              <p className="text-sm mb-4 opacity-90 group-hover:opacity-100 transition-opacity">IVA ESCLUSA</p>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mb-6 border border-white/30 group-hover:bg-white/30 transition-colors">
                <p className="font-bold group-hover:text-yellow-100 transition-colors">💎 CLIENTI VIP</p>
              </div>
              <p className="text-sm mb-6 group-hover:text-yellow-100 transition-colors">TUTELA IMPRESA 100%</p>
            </div>
            
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6 border border-white/20 group-hover:bg-white/20 group-hover:shadow-lg transition-all">
                <img 
                  src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                  alt="Tutela Impresa Logo" 
                  className="h-10 object-contain mx-auto filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = tutelaImpresaLogo;
                  }}
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-red-600 hover:bg-yellow-100 hover:text-red-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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