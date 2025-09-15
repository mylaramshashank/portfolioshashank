import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: "Home", href: "#", delay: 0.1 },
    { name: "About", href: "#about", delay: 0.2 },
    { name: "Projects", href: "#projects", delay: 0.3 },
    { name: "Contact", href: "#contact", delay: 0.4 },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-soft" 
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#");
              }}
              className="text-2xl font-bold font-heading"
            >
              <span className={`transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                Mylaram
              </span>{" "}
              <span className="text-teal-primary">Shashank</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group ${
                    isScrolled 
                      ? "text-foreground hover:text-teal-primary" 
                      : "text-white hover:text-teal-light"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-teal-primary hover:bg-accent" 
                    : "text-white/70 hover:text-teal-light hover:bg-white/10"
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? "text-foreground hover:text-teal-primary" 
                  : "text-white hover:text-teal-light"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                duration: 0.3,
                staggerChildren: 0.05,
                staggerDirection: -1,
              },
            },
          }}
        >
          <motion.div 
            className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg rounded-lg mt-2 border border-border shadow-soft"
            variants={{
              open: { y: 0, opacity: 1 },
              closed: { y: -10, opacity: 0 },
            }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-teal-primary hover:bg-accent transition-colors duration-200"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Mobile Social Links */}
            <motion.div
              className="flex justify-center space-x-4 pt-4 border-t border-border"
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -10 },
              }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg text-muted-foreground hover:text-teal-primary hover:bg-accent transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;