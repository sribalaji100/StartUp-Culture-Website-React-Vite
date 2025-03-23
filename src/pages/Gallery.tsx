import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });

  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      image: "/placeholder.svg",
      role: "CEO & Founder",
      description: "Leading innovation and strategic growth"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      image: "/placeholder.svg",
      role: "Head of Product",
      description: "Driving product vision and execution"
    },
    {
      id: 3,
      name: "Michael Chen",
      image: "/placeholder.svg",
      role: "Tech Lead",
      description: "Architecting scalable solutions"
    },
    {
      id: 4,
      name: "Emma Davis",
      image: "/placeholder.svg",
      role: "Design Director",
      description: "Crafting user experiences"
    },
    {
      id: 5,
      name: "Alex Turner",
      image: "/placeholder.svg",
      role: "Marketing Lead",
      description: "Building brand presence"
    },
    {
      id: 6,
      name: "Lisa Wong",
      image: "/placeholder.svg",
      role: "Operations Head",
      description: "Optimizing business processes"
    },
    {
      id: 7,
      name: "David Park",
      image: "/placeholder.svg",
      role: "Innovation Lead",
      description: "Exploring future technologies"
    }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "events",
      title: "Startup Weekend 2023",
      image: "/placeholder.svg",
      date: "Oct 2023",
    },
    {
      id: 2,
      category: "programs",
      title: "Mentorship Program",
      image: "/placeholder.svg",
      date: "Ongoing",
    },
    {
      id: 3,
      category: "events",
      title: "Innovation Summit",
      image: "/placeholder.svg",
      date: "Dec 2023",
    },
    {
      id: 4,
      category: "initiatives",
      title: "Green Tech Exhibition",
      image: "/placeholder.svg",
      date: "Jan 2024",
    },
    {
      id: 5,
      category: "programs",
      title: "Accelerator Demo Day",
      image: "/placeholder.svg",
      date: "Mar 2024",
    },
    {
      id: 6,
      category: "initiatives",
      title: "Climate Action Workshop",
      image: "/placeholder.svg",
      date: "Apr 2024",
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "events", label: "Events" },
    { id: "programs", label: "Programs" },
    { id: "initiatives", label: "Initiatives" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Team Section with Slider */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50/50 via-white to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Our Team
              </span>
              <h2 className="text-4xl font-bold">Meet the Innovators</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Passionate individuals driving change and innovation in the entrepreneurial ecosystem
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Carousel Navigation */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={scrollNext}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="text-primary-light font-medium">{member.role}</p>
                          <p className="text-sm text-gray-200">{member.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Gallery Header */}
          <div className="text-center space-y-12 mb-20">
            <h2 className="text-5xl md:text-6xl font-bold">Gallery</h2>
            <div className="inline-flex gap-8 text-lg">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative py-2 ${
                    activeFilter === filter.id
                      ? "text-primary"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {filter.label}
                  {activeFilter === filter.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                  </div>
                  <div className="mt-6 space-y-1">
                    <p className="text-sm text-primary font-medium tracking-wider uppercase">
                      {item.date}
                    </p>
                    <motion.h3 
                      layout
                      className="text-2xl font-bold group-hover:text-primary transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
