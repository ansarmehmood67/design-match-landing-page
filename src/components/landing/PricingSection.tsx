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
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
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
            className="bg-white p-8 rounded-xl shadow-lg border relative h-[400px] flex flex-col justify-between"
            variants={fadeInUp}
          >
            <div>
              <div className="relative mb-6">
                <h3 className="text-4xl font-bold text-gray-900 mb-2 relative">
                  €250,00
                  {/* Simple X Cross */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-red-600 transform rotate-12"></div>
                    <div className="absolute w-full h-0.5 bg-red-600 transform -rotate-12"></div>
                  </div>
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-6">IVA ESCLUSA</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-red-700 font-bold text-sm">
                PREZZO SUGGERITO<br />
                ENTE BILATERALE
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Popular */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg border-2 border-red-500 relative h-[400px] flex flex-col justify-between"
            variants={fadeInUp}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                PIÙ POPOLARE
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">€159,00</h3>
              <p className="text-sm text-gray-500 mb-4">IVA ESCLUSA</p>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg mb-6 inline-block">
                <p className="font-bold">PROMO!</p>
              </div>
            </div>
            
            <Button 
              variant="red" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://tinyurl.com/FDDLPO', '_blank')}
            >
              ACQUISTA ORA 🚀
            </Button>
          </motion.div>

          {/* Card 3 - Clienti */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg border relative h-[400px] flex flex-col justify-between"
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">€149,00</h3>
              <p className="text-sm text-gray-500 mb-4">IVA ESCLUSA</p>
              <div className="bg-gray-100 p-3 rounded-lg mb-6">
                <p className="text-gray-700 font-bold">CLIENTI</p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border">
                <img 
                  src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                  alt="Tutela Impresa Logo" 
                  className="h-12 object-contain mx-auto"
                  onError={(e) => {
                    e.currentTarget.src = tutelaImpresaLogo;
                  }}
                />
              </div>
              <Button 
                variant="default" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://tinyurl.com/FDDLNR', '_blank')}
              >
                ACQUISTA ORA
              </Button>
            </div>
          </motion.div>

          {/* Card 4 - Premium Red */}
          <motion.div 
            className="bg-red-600 p-8 rounded-xl shadow-lg text-white relative h-[400px] flex flex-col justify-between"
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-4xl font-bold mb-2">€99,00</h3>
              <p className="text-sm mb-4 opacity-90">IVA ESCLUSA</p>
              <div className="bg-white/20 p-3 rounded-lg mb-6">
                <p className="font-bold">CLIENTI</p>
              </div>
              <p className="text-sm mb-6">TUTELA IMPRESA 100%</p>
            </div>
            
            <div>
              <div className="bg-white/10 p-4 rounded-lg mb-6 border border-white/20">
                <img 
                  src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                  alt="Tutela Impresa Logo" 
                  className="h-10 object-contain mx-auto filter brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.src = tutelaImpresaLogo;
                  }}
                />
              </div>
              <Button 
                size="lg" 
                className="w-full bg-white text-red-600 hover:bg-gray-100"
                onClick={() => window.open('https://tinyurl.com/FDDLTI', '_blank')}
              >
                ACQUISTA ORA 👑
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}