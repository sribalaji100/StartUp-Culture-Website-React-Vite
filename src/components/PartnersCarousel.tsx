import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Partner } from "../data/partners";
import { cn } from "@/lib/utils";

interface PartnersCarouselProps {
  partners: Partner[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const PartnersCarousel = ({ partners, title, subtitle, className }: PartnersCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [duplicatedPartners, setDuplicatedPartners] = useState<Partner[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    // Duplicate partners array for seamless infinite scroll
    setDuplicatedPartners([...partners, ...partners, ...partners]);
  }, [partners]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = async () => {
      const scrollWidth = scrollContainer.scrollWidth / 3;
      
      await controls.start({
        x: -scrollWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    scroll();

    return () => {
      controls.stop();
    };
  }, [controls, duplicatedPartners]);

  return (
    <div className={cn("w-full py-16 bg-white/50 backdrop-blur-sm", className)}>
      <div className="container mx-auto px-4">
        {/* Title Section */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Infinite Scroll Container */}
        <div className="overflow-hidden relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Content */}
          <motion.div
            ref={scrollRef}
            animate={controls}
            className="flex gap-12 items-center"
            style={{ width: 'fit-content' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 group relative"
              >
                <div className="w-48 h-32 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center 
                             transition-all duration-300 group-hover:shadow-xl">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain filter transition-all duration-300
                             group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 
                              rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity 
                              duration-300 whitespace-nowrap z-20">
                  <p className="text-sm font-medium text-gray-800">{partner.name}</p>
                  {partner.description && (
                    <p className="text-xs text-gray-600">{partner.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel; 