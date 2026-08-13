import { useState } from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
// import Logo2 from "./Logo2";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import Silux from "./Silux";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-2 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <nav className="flex w-full items-center justify-between">
        {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>
      

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-1 py-2 transition-colors duration-300 ${
                  isActive
                    ? "text-blue font-bold"
                    : "text-blue hover:text-magenta"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {/* Sliding underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-black"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-8 text-base text-blue pr-6">
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors duration-300 hover:text-magenta"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors duration-300 hover:text-magenta"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors duration-300 hover:text-magenta"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex cursor-pointer text-4xl text-magenta transition md:hidden pr-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {!isOpen && <FiMenu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="fixed inset-0 z-40 flex h-screen flex-col overflow-y-hidden bg-magenta text-white md:hidden"
            >

              {/* Menu Header */}
              <div className="flex items-center justify-between pl-1 pr-6 py-1">
                {/* <Logo2 /> */}
                <Silux />
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-4xl text-white transition"
                  aria-label="Close menu"
                >
                  <FiX />
                </button>

              </div>

              {/* Navigation Links */}
              <div className="flex flex-1 flex-col justify-center px-6">

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center border-b border-white/20 py-2"
                    >

                      <span className="mr-4 text-sm text-white/50">
                        0{index + 1}
                      </span>

                      <span className="text-4xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
                        {item.name}
                      </span>

                      <span className="ml-auto text-2xl opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        <FiArrowRight />
                      </span>

                    </NavLink>
                  </motion.div>
                ))}

              </div>

              {/* Bottom Section */}
              <div className="flex justify-end px-6 pb-8">

                {/* Email */}


                {/* Social Links */}
                <div className="flex gap-4 text-sm">
                  <a
                    href="#"
                    aria-label="Instagram"
                  >
                   <FaInstagram />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                  > 
                    <FaLinkedinIn  />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                  >
                    <FaFacebookF/>
                  </a>
                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}

































































