import { motion } from "framer-motion";
import { Partner } from "../data/partners";
import { cn } from "@/lib/utils";

interface PartnerLogosProps {
  partners: Partner[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const PartnerLogos = ({ partners, title, subtitle, className }: PartnerLogosProps) => {
  return (
    <div className={cn("py-12", className)}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-6xl mx-auto px-4">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="aspect-[3/2] relative">
              <div className="absolute inset-0 bg-white rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            
            {/* Tooltip */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-sm rounded-md py-1 px-2 whitespace-nowrap z-10">
              {partner.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos; 