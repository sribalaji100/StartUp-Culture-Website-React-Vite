import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ErrorBoundary from "./ErrorBoundary";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Climate Initiative", href: "/climate" },
    { name: "Startup Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7; // 70% of viewport height
      setScrolled(window.scrollY > 20);
      setShowCTA(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <ErrorBoundary type="component">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <Link to="/" className="font-bold text-lg sm:text-xl text-gray-900">
                StartupCulture
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-8 lg:space-x-12 mr-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-all duration-200 text-sm lg:text-base relative ${
                      location.pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-gray-600 hover:text-primary"
                    } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:transition-transform after:duration-200 ${
                      location.pathname === item.href ? "after:scale-x-100" : "hover:after:scale-x-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className={`transition-all duration-500 min-w-[120px] ${
                showCTA 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}>
                <button className="w-full bg-[#FFB800] text-black px-6 py-2.5 rounded-full text-sm lg:text-base font-medium hover:bg-[#FFB800]/90 transition-all duration-200 whitespace-nowrap">
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex md:hidden items-center justify-center w-12 h-12 -mr-3 text-gray-500 hover:text-primary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-white transform transition-transform duration-300 ease-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ zIndex: 40 }}
          >
            <div className="h-full overflow-y-auto">
              {/* Navigation Links */}
              <div className="px-6 py-8">
                <div className="flex flex-col space-y-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-gray-800 hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className={`fixed bottom-0 left-0 right-0 transition-all duration-500 ${
                showCTA 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-full opacity-0 pointer-events-none"
              }`}>
                <div className="p-6 bg-white border-t border-gray-100">
                  <Link 
                    to="/contact"
                    className="flex items-center justify-center w-full bg-[#FFB800] text-black h-14 rounded-full text-base font-semibold hover:bg-[#FFB800]/90 transition-all duration-200"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300"
            style={{ zIndex: 30 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </ErrorBoundary>
  );
};

export default Navbar;
