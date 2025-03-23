import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ErrorBoundary from "../components/ErrorBoundary";
import LoadingState from "../components/LoadingState";
import PartnersCarousel from "../components/PartnersCarousel";
import { partners } from "../data/partners";
import PartnerLogos from "../components/PartnerLogos";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const metricsRef = useRef(null);

  const metrics = [
    { label: "Startups Supported", value: 500, color: "from-yellow-500 to-amber-500" },
    { label: "Programs Conducted", value: 150, color: "from-blue-500 to-indigo-500" },
    { label: "Partners Engaged", value: 75, color: "from-green-500 to-emerald-500" },
    { label: "Success Stories", value: 200, color: "from-purple-500 to-indigo-500" },
  ];

  const features = [
    {
      title: "Climate Initiative",
      description: "Leading-edge programs designed to foster growth and innovation in emerging markets. Our tailored approach combines capital, mentorship, and strategic resources.",
      icon: "/icons/rocket-launch.svg",
      stats: ["100+ Startups", "40M+ Funding", "85% Success Rate"],
      color: "from-indigo-500 to-blue-500",
      link: "/climate"
    },
    {
      title: "Startup Program",
      description: "Connect with industry veterans, successful founders, and domain experts. Get personalized guidance to navigate challenges and scale your business.",
      icon: "/icons/mentorship.svg",
      stats: ["50+ Mentors", "200+ Hours", "24/7 Support"],
      color: "from-purple-500 to-indigo-500",
      link: "/programs"
    },
    {
      title: "Global Network",
      description: "Join a worldwide community of innovators, investors, and industry leaders. Access international markets and partnership opportunities.",
      icon: "/icons/global-network.svg",
      stats: ["30+ Countries", "500+ Partners", "1000+ Connections"],
      color: "from-emerald-500 to-green-500",
      link: "/network"
    }
  ];

  const testimonials = [
    {
      quote: [
        "It is a very interactive & interesting session. ",
        "I feel like this is the best event I have attended in all these 3 years",
        ". Very helpful and ",
        "useful",
        "!"
      ],
      author: "Vainavi R",
      role: "Bootcamp Participant",
      country: "IN",
      rating: 5
    },
    {
      quote: [
        "The startup training event was ",
        "engaging & informative",
        ", with objectives communicated effectively. Presenters were ",
        "knowledgeable & kept participants involved",
        " throughout"
      ],
      author: "N. Supriya",
      role: "Bootcamp Participant",
      country: "IN",
      rating: 5
    },
    {
      quote: [
        "The ",
        "GreenTrack Initiative",
        " has been transformative. Their ",
        "sustainable approach",
        " and expert guidance helped us achieve our eco-friendly business goals."
      ],
      author: "Rahul M",
      role: "Program Graduate",
      country: "IN",
      rating: 5
    },
    {
      quote: [
        "As a first-time eco-entrepreneur, ",
        "their guidance was invaluable",
        ". The program provides ",
        "clear roadmaps and milestones",
        " for sustainable success."
      ],
      author: "Priya S",
      role: "GreenTrack Participant",
      country: "IN",
      rating: 5
    }
  ];

  const [counts, setCounts] = useState({
    startups: 0,
    programs: 0,
    partners: 0,
    success: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = metricsRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const framesPerSecond = 60;
      const totalFrames = (duration / 1000) * framesPerSecond;
      
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        
        if (frame <= totalFrames) {
          setCounts(prev => ({
            startups: Math.min(Math.round(500 * progress), 500),
            programs: Math.min(Math.round(150 * progress), 150),
            partners: Math.min(Math.round(75 * progress), 75),
            success: Math.min(Math.round(200 * progress), 200),
          }));
        } else {
          clearInterval(counter);
        }
      }, 1000 / framesPerSecond);

      return () => clearInterval(counter);
    }
  }, [isVisible]);

  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/5 via-white to-white" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.1]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              {/* Mobile Hero Image - Optimized for Visual Impact */}
              <div className="block lg:hidden w-full max-w-[240px] mx-auto -mt-8 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-light/20 to-transparent rounded-full blur-2xl" />
                  <img
                    src="/hero-illustration.svg"
                    alt="Startup illustration"
                    className="relative z-10 w-full h-full object-contain animate-float"
                    loading="eager"
                    width="240"
                    height="240"
                  />
                </motion.div>
              </div>

              {/* Content Stack - Mobile Optimized */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center lg:text-left -mt-4 sm:mt-0"
              >
                {/* Welcome Badge - More Prominent */}
                <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 shadow-sm backdrop-blur-sm mb-4 sm:mb-6">
                  <span className="animate-pulse mr-2">🚀</span>
                  Welcome to StartupCulture
                </div>
                
                {/* Title Stack - Tighter Spacing */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                    Empowering
                    <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"> Startups</span>
                    <span className="block mt-1">&</span>
                    <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                      Sustainability
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                    Join us in building the next generation of entrepreneurs and a greener future.
                  </p>
                </div>
                
                {/* Quick Stats - Integrated with Content */}
                <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8 max-w-xs mx-auto lg:mx-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-2.5 text-center shadow-sm border border-gray-100"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-gray-600 font-medium">Startups</div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-2.5 text-center shadow-sm border border-gray-100"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-gray-600 font-medium">Success Rate</div>
                  </motion.div>
                </div>
                
                {/* CTA Buttons - Optimized Layout */}
                <div className="flex flex-col gap-2.5 max-w-xs mx-auto lg:mx-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <Link 
                      to="/programs" 
                      className="w-full bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                    >
                      <span>Explore Our Initiatives</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <Link 
                      to="/about" 
                      className="w-full px-6 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center group"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Desktop Hero Image */}
              <div className="hidden lg:block relative h-[480px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent rounded-2xl" />
                <img
                  src="/hero-illustration.svg"
                  alt="Startup illustration"
                  className="w-full h-full object-contain animate-fade-in relative z-10 animate-float"
                  loading="eager"
                  width="600"
                  height="480"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Carousel Section */}
        <section className="relative z-20 bg-gradient-to-b from-white via-gray-50 to-white py-20">
          <div className="container mx-auto">
            <PartnersCarousel 
              partners={partners.ecosystem}
              title="Our Trusted Partners"
              subtitle="Working with industry leaders to drive innovation and create meaningful impact"
            />
          </div>
        </section>

        {/* Why StartupCulture Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.08]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Main Headline */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]"
              >
                Building the future of
                <span className="block mt-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  sustainable innovation
                </span>
              </motion.h2>
            </div>

            {/* Stats Section */}
            <div className="mt-16 relative" ref={metricsRef}>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl" />
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.1]" />
              
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {metric.label === "Startups Supported" && counts.startups}
                      {metric.label === "Programs Conducted" && counts.programs}
                      {metric.label === "Partners Engaged" && counts.partners}
                      {metric.label === "Success Stories" && counts.success}
                      +
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="mt-16 relative">
              <div className="absolute inset-x-0 top-40 bottom-40 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              
              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Link 
                    key={feature.title}
                    to={feature.link}
                    className="group relative"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="h-full"
                    >
                      {/* Card Background with Gradient Border */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/80 rounded-2xl" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 rounded-2xl`} />
                      <div className="absolute inset-px bg-white rounded-2xl" />
                      
                      {/* Card Content */}
                      <div className="relative p-8">
                        {/* Icon */}
                        <div className="mb-8 inline-block">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 shadow-lg transform transition-transform duration-300 group-hover:rotate-6`}>
                            <img
                              src={feature.icon}
                              alt={feature.title}
                              className="w-full h-full object-contain filter brightness-0 invert"
                            />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                          {feature.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                          {feature.stats.map((stat, statIndex) => (
                            <div 
                              key={statIndex}
                              className={`flex items-center ${statIndex === 2 && 'sm:col-span-2'}`}
                            >
                              <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-10 flex items-center justify-center mr-3`}>
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                              </div>
                              <span className="text-sm font-medium text-gray-800">
                                {stat}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute top-8 right-8 transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowRight className={`w-5 h-5 text-gradient-to-r ${feature.color.split(' ')[1]}`} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 text-center"
            >
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-2 text-gray-900 hover:text-primary font-medium group"
              >
                <span className="relative">
                  <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  Discover our programs
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          
          {/* Header */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold mb-4">
                <span className="text-lg sm:text-xl">🚀</span>
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  SUCCESS STORIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                From Vision to Victory
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Join the ranks of innovative founders who turned their dreams into reality with our support
              </p>
            </div>

            {/* Testimonials Slider */}
            <div className="relative w-full overflow-hidden mb-12 sm:mb-16">
              <div className="absolute left-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
              <div className="absolute right-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
              <motion.div 
                className="flex gap-4 sm:gap-6 items-end"
                animate={{
                  x: [0, -2400]
                }}
                transition={{
                  x: {
                    duration: 150,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
              >
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    style={{
                      minHeight: index % 3 === 0 ? '340px' : index % 3 === 1 ? '380px' : '320px'
                    }}
                    className="flex-shrink-0 w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.24)] transition-all duration-300 border border-white/20 flex flex-col justify-between relative hover:-translate-y-1"
                  >
                    <div>
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {testimonial.quote.map((part, partIndex) => (
                          partIndex % 2 === 0 ? (
                            <span key={partIndex}>{part}</span>
                          ) : (
                            <span key={partIndex} className="bg-primary/10 text-primary font-medium px-1.5 py-0.5 rounded">
                              {part}
                            </span>
                          )
                        ))}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold ring-2 sm:ring-4 ring-white">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm">{testimonial.author}</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-2">
                          {testimonial.role} • {testimonial.country}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Metrics */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 flex items-center gap-2">
                  <span>4.6</span>
                  <span className="text-primary-light">★</span>
                </div>
                <div className="text-gray-300 text-sm sm:text-base font-medium">satisfaction rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 flex items-center gap-2">
                  <span>3</span>
                  <span className="text-primary-light text-lg sm:text-xl">⚡</span>
                </div>
                <div className="text-gray-300 text-sm sm:text-base font-medium">minute response time</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-black/90 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[800px]">
            <div className="bg-[#111111] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] rounded-full text-xs sm:text-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
                <span className="text-white/80">Limited Time Offer</span>
              </div>

              {/* Main Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Start Your Journey
                  <span className="inline sm:block mt-1 sm:mt-2">to</span>
                  <span className="block mt-1 sm:mt-2 text-[#FFB800]">Startup Success</span>
                </h2>
                
                <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-[460px]">
                  Join thousands of founders who have transformed their ideas into thriving businesses. Get exclusive access to mentorship, funding opportunities, and a global network.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8">
                  <Link 
                    to="/register" 
                    className="bg-[#FFB800] text-black px-6 py-3 rounded-full font-medium hover:bg-[#FFB800]/90 transition-colors text-center"
                  >
                    Get Started Now →
                  </Link>
                  <Link 
                    to="/programs" 
                    className="text-white hover:text-[#FFB800] transition-colors text-center sm:text-left py-2"
                  >
                    View Programs →
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex -space-x-2">
                    {['A', 'B', 'C', 'D'].map((letter, i) => (
                      <div 
                        key={letter}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-xs font-medium text-white"
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-white/70 text-center sm:text-left">
                    <span className="text-white font-medium">50+</span> founders joined this week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
