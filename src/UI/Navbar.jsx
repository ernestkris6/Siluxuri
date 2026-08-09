import { useState } from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";


const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team"},
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {

  const [ isOpen, setIsOpen ] = useState(false)

  //px-1 sm:px-3
  //backdrop-blur-md shadow-sm sticky top-0 z-50

  return (
    <div className="px-0 sm:px-1 md:px-3">
      <header className="flex justify-between items-center max-w-7xl">
        <Link to="/">
          <Logo />
         </Link>
        <nav className="flex gap-6 px-0 sm:px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hidden md:flex relative px-1 py-2 transition-colors duration-300 ${
                  isActive
                    ? "text-blue font-bold"
                    : "text-blue hover:text-magenta"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-black rounded-full"
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

              {/* Mobile Toggle */}
              <button
                className="flex md:hidden text-magenta transition cursor-pointer text-4xl pr-3"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX /> : <FiMenu />  }
              </button>

              <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-40 flex min-h-screen flex-col bg-magenta text-white md:hidden"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-6 py-6">
                <Logo />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white transition cursor-pointer text-4xl"
                    aria-label="Close menu"
                  >
                    <FiX />
                  </button>
                </div>

              {/* Navigation Links */}
              <nav className="flex flex-1 flex-col justify-center px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center border-b border-white/20 py-4"
                    >
                      <span className="mr-4 text-sm text-white/50">
                        0{index + 1}
                      </span>

                      <span className="text-4xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
                        {item.name}
                      </span>

                      <span className="ml-auto text-2xl opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        →
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom section */}
              <div className="flex items-end justify-between px-6 pb-8">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/50">
                    Get in touch
                  </p>

                  <a
                    href="mailto:siluxuri@gmail.com"
                    className="text-sm"
                  >
                    siluxuri@gmail.com
                  </a>
                </div>

                <div className="flex gap-4 text-sm">
                  <a href="#" aria-label="Instagram">
                    Instagram
                  </a>

                  <a href="#" aria-label="LinkedIn">
                    LinkedIn
                  </a>
                </div>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
        </nav>
      </header>
    </div>
  );
}
























