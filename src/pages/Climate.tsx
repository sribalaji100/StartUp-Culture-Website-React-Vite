import { Leaf, GraduationCap, Users, Lightbulb, TrendingUp, Award as AwardIcon, Search, MessageCircle, Globe, Award, Building, ChevronDown, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PartnersCarousel from "../components/PartnersCarousel";
import PartnerLogos from "../components/PartnerLogos";
import { partners } from "../data/partners";

const Climate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Navigation Dots */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["hero", "partners", "impact", "programs", "testimonials"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary transition-colors duration-200"
              aria-label={`Navigate to ${section} section`}
            />
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-16 sm:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Initiative Badge */}
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-8"
              >
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                Climate Green Tag Initiative
              </motion.span>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                GreenTrack Initiative:
                <span className="block mt-2">Building a
                  <span className="relative">
                    <span className="relative z-10 text-primary"> Sustainable</span>
                    <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-primary/20" viewBox="0 0 200 9" fill="currentColor">
                      <path d="M0,9 C50,5 100,0 200,9" />
                    </svg>
                  </span>
                </span>
                <span className="block mt-2">Future</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empowering the next generation of socially responsible entrepreneurs, our program inspires and transforms visionary students into tomorrow's leaders. Drive meaningful change with us!
              </p>

              {/* Impact Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 bg-white/80 backdrop-blur-sm border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md mx-auto lg:mx-0"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 font-medium">
                    On a mission to impact <span className="text-primary font-bold text-lg sm:text-xl">1.5 Million</span> aspiring entrepreneurs
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  Join GreenTrack
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button variant="outline" className="border-2 border-gray-200 hover:border-primary hover:text-primary px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium transition-all duration-300">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative order-1 lg:order-last mb-8 lg:mb-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent rounded-2xl sm:rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Sustainability Illustration" 
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl animate-float relative z-10"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 bg-green-100/30 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section - Right after Hero */}
      <section className="relative z-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto">
          <PartnersCarousel 
            partners={partners.ecosystem}
            title="Our Ecosystem Partners"
            subtitle="Collaborating with leading organizations to drive sustainable innovation and create lasting impact"
          />
        </div>
      </section>

      {/* Detailed Partners Section */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our Global Impact Network
            </motion.h2>
            <p className="text-xl text-gray-600">
              Collaborating with world-class organizations to drive sustainable innovation
            </p>
          </div>

          {/* Partners Grid */}
          <div className="space-y-16">
            {/* Global Partners */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Global Partners</h3>
              <PartnerLogos partners={partners.global} />
            </div>

            {/* Government Partners */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Government Partners</h3>
              <PartnerLogos partners={partners.government} />
            </div>

            {/* Academic Partners */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Academic Partners</h3>
              <PartnerLogos partners={partners.academic} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Mission */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-surface-lighter py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">About Startup Culture</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                For over a decade, we've built a global network committed to empowering startups and providing equal opportunities for innovators to thrive in the sustainable technology space.
              </p>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  "Empowering the next generation of socially responsible entrepreneurs, our program inspires and transforms visionary students into tomorrow's leaders. Drive meaningful change with us!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Pillars of GreenTrack Initiative</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive programs designed to support and accelerate sustainable startups at every stage of their journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>GreenHat Bootcamp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Hands-on workshops focusing on sustainable practices and innovative green technologies.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AwardIcon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>GreenHat Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Guided mentorship programs pairing eco-startups with experienced industry experts.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>GreenHat Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Additional sessions reinforcing sustainable solutions and practical skill-building.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AwardIcon className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Eco Corporate Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Networking platform connecting entrepreneurs with corporate partners for strategic collaborations (co-development, CSR, etc.).
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Eco Investor Pitch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Opportunities for green startups to present their ideas to potential investors.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-surface-light py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Startups' Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the innovative entrepreneurs who are changing the world through sustainable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex flex-row gap-4 items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <CardTitle>Org Lether</CardTitle>
                  <CardDescription>Eco-friendly leather alternative</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Turning the invasive Prosopis juliflora into durable, eco-friendly leather sheets, reducing environmental impact while creating sustainable fashion materials.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 italic">
                  "GreenTrack provided us with the mentorship and resources to scale our production sustainably."
                </p>
              </CardFooter>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex flex-row gap-4 items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Plast B</CardTitle>
                  <CardDescription>Biodegradable plastic solution</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A spray made from microorganisms that degrades non-biodegradable plastic into manure in just two months, tackling one of our planet's biggest waste challenges.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 italic">
                  "The Eco Investor Pitch event connected us with the perfect funding partners who shared our vision."
                </p>
              </CardFooter>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex flex-row gap-4 items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AwardIcon className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <CardTitle>Amara</CardTitle>
                  <CardDescription>Postpartum mental health support</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tailored postpartum mental health support for women, ensuring compassionate care during a critical life transition and promoting holistic wellbeing.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 italic">
                  "GreenHat Bootcamp gave us the framework to build a socially responsible business model that prioritizes care."
                </p>
              </CardFooter>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex flex-row gap-4 items-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <CardTitle>Bio Glow Organics</CardTitle>
                  <CardDescription>Organic cosmetics platform</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  An e-commerce platform for organic cosmetics and skincare, promoting a healthier lifestyle through sustainable, cruelty-free beauty products.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 italic">
                  "The corporate connections we made through GreenTrack helped us secure sustainable suppliers for our entire product line."
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Through our Green Tamil Nadu Mission and Climate Green Tag Initiative, we've made significant strides in promoting sustainable entrepreneurship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600">Green Startups Supported</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p className="text-gray-600">Carbon Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100M+</div>
                <p className="text-gray-600">Investment in Green Tech</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1.5M</div>
                <p className="text-gray-600">Aspiring Entrepreneurs Goal</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="glass-card inline-block p-6 rounded-xl bg-green-50">
                <h3 className="text-xl font-semibold mb-4">Green Tamil Nadu Mission</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50,000</div>
                    <p className="text-gray-600">Aspiring Entrepreneurs via Boot Camp</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">40+</div>
                    <p className="text-gray-600">Sustainable Startups by 2025</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50%</div>
                    <p className="text-gray-600">Women-Led Ventures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Background Decorations */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="text-center mb-16 relative">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold mb-4"
            >
              What Our Participants Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Real stories from our community members who have experienced transformation through our programs
            </motion.p>
          </div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                {
                  quote: "It is a very interactive & interesting session. I feel like this is the best event I have attended in all these 3 years. Very helpful and useful!",
                  author: "Vainavi R",
                  role: "Bootcamp Participant",
                  image: "/testimonials/person1.jpg"
                },
                {
                  quote: "The startup training event was engaging & informative, with objectives communicated effectively. Presenters were knowledgeable & kept participants involved throughout",
                  author: "N. Supriya",
                  role: "Bootcamp Participant",
                  image: "/testimonials/person2.jpg"
                },
                // ... other testimonials
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="mb-6">
                      {/* Quote Icon */}
                      <svg className="w-10 h-10 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zm-11 8v6H7c-1.657 0-3-1.343-3-3v-3h4zm12 0v6h-4c-1.657 0-3-1.343-3-3v-3h4z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
            </div>
          </Carousel>

          {/* Testimonial Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-gray-600">Program Graduates</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-gray-600">Success Stories</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-gray-600">Expert Mentors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 rounded-xl bg-secondary text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Join the GreenTrack Initiative</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Be part of our mission to create a sustainable future through innovative entrepreneurship.
              </p>
              <Button className="btn-primary bg-primary hover:bg-primary-dark text-black">Get Involved</Button>
              
              <div className="mt-8 flex flex-wrap justify-center gap-8">
                <div>
                  <p className="text-sm opacity-80 mb-2">In partnership with</p>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to join the GreenTrack initiative? Reach out to us!
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Leaf className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <span className="block font-medium">Phone</span>
                      <span className="text-gray-600">+91 9842486037</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Leaf className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <span className="block font-medium">Email</span>
                      <span className="text-gray-600">engagement@startupculture.co.in</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Leaf className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <span className="block font-medium">Location</span>
                      <span className="text-gray-600">Rathinam Techzone, Eachanari, Madukkarai, Tamil Nadu - 641021</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Leaf className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <span className="block font-medium">Website</span>
                      <Link to="/" className="text-primary hover:underline">www.startupculture.co.in</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  <div>
                    <Button className="w-full">Send Message</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Climate;
