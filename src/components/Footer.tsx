
import { Mail, Phone, MapPin, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/mission" },
      { label: "Careers", href: "/careers" },
      { label: "Press Kit", href: "/press" }
    ],
    programs: [
      { label: "Startup Accelerator", href: "/accelerator" },
      { label: "Mentorship", href: "/mentorship" },
      { label: "Investment", href: "/investment" },
      { label: "Events", href: "/events" }
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Success Stories", href: "/stories" },
      { label: "Knowledge Base", href: "/resources" },
      { label: "Partner Network", href: "/partners" }
    ]
  };

  const footerData = {
    contactInfo: {
      email: "engagement@startupculture.co.in",
      phone: "+91 9842486037",
      address: "Rathinam Techzone, Eachanari, Madukkarai, Tamil Nadu - 641021"
    }
  };

  return (
    <ErrorBoundary type="component">
      <footer className="bg-gradient-to-b from-[#111111] to-black text-white">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h3 className="text-2xl font-bold mb-4">Stay ahead of the curve</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#333] text-white placeholder-white/50 focus:outline-none focus:border-[#FFB800]"
              />
              <button className="bg-[#FFB800] text-black px-6 py-3 rounded-full font-medium hover:bg-[#FFB800]/90 transition-colors whitespace-nowrap">
                Subscribe →
              </button>
            </div>
            <p className="text-white/70 mt-3">
              Get weekly insights on startup trends, funding opportunities, and success stories.
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">StartupCulture</h3>
                <p className="text-white/70">
                  Empowering the next generation of innovators and entrepreneurs to build sustainable, impactful businesses.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:engagement@startupculture.co.in" className="flex items-center text-white/70 hover:text-[#FFB800] transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  engagement@startupculture.co.in
                </a>
                <a href="tel:+919842486037" className="flex items-center text-white/70 hover:text-[#FFB800] transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  +91 9842486037
                </a>
                <div className="flex items-center text-white/70">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  Rathinam Techzone, Eachanari, Madukkarai, Tamil Nadu - 641021
                </div>
              </div>
              
              {/* Partners */}
              <div className="pt-4">
                <p className="text-white/70 mb-2">Our Global Partners:</p>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center" title="SDSN Youth (UN)">
                    <Globe className="h-4 w-4 text-white/80" />
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center" title="UNLEASH">
                    <Award className="h-4 w-4 text-white/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/70 hover:text-[#FFB800] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/70 hover:text-[#FFB800] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/70 hover:text-[#FFB800] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/50 text-sm">
                © {currentYear} StartupCulture. All rights reserved.
              </div>
              <div className="flex gap-6">
                <Link to="/privacy" className="text-sm text-white/50 hover:text-[#FFB800] transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-white/50 hover:text-[#FFB800] transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-sm text-white/50 hover:text-[#FFB800] transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;
