import { NavLink, Link } from "react-router";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";


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

  return (
    <div className="bg-white ">
      <header className="flex justify-between items-center max-w-7xl">
        <Link to="/">
          <Logo />
         </Link>
        <nav className="flex gap-6 px-0 sm:px-3">
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
                className="md:hidden text-magenta transition cursor-pointer text-4xl pr-3"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX /> : <FiMenu />  }
              </button>
      
    </nav>
      </header>
    </div>
  );
}















// import { Link, NavLink } from "react-router";
// import Logo from "./Logo";

// export default function Navbar() {

//   // const navLinkClass = ({ isActive }) => 
//     // isActive ? "text-[#c1630b] font-medium border-b-2 border-[#c1630b] pb-1 transition duration-50" : "text-red-black hover:text-[#c1630b]";


//   // const navLinkClass = ({ isActive }) =>
//   // `relative px-1 py-2 transition-colors duration-300 ${
//   //   isActive
//   //     ? "text-black font-medium"
//   //     : "text-gray-700 hover:text-blue-700"
//   // }`;

//   const navLinkClass = ({ isActive }) =>
//   `relative px-1 py-2 transition-colors duration-300 ${
//     isActive
//       ? "text-black border-b-2 font-medium"
//       : "text-gray-700 hover:text-blue-700"
//   }`;

//   return (
//     <div>
//         <header className="flex justify-between items-center px-6 max-w-7xl">
//         <Link to="/">
//           <Logo />
//         </Link>
//           <nav className="space-x-8">
//             <NavLink className={navLinkClass} to='/'>Home</NavLink>
//             <NavLink className={navLinkClass} to='about'>About</NavLink>
//             <NavLink className={navLinkClass} to='services'>Services</NavLink>
//             <NavLink className={navLinkClass} to='contact'>Contact</NavLink>
//             <NavLink className={navLinkClass} to='team'>Team Members</NavLink>
//           </nav>
//         </header>
//     </div>
//   )
// }












































// import { useEffect, useRef, useState } from "react";
// import { NavLink, useLocation } from "react-router";
// import Logo from "./Logo";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Contact", path: "/contact" },
//   { name: "Team", path: "/team" },
// ];

// export default function Navbar() {
//   const navRef = useRef(null);
//   const linkRefs = useRef({});
//   // const location = useLocation();

//   // const [underline, setUnderline] = useState({
//   //   left: 0,
//   //   width: 0,
//   // });

//   // useEffect(() => {
//   //   const activeLink = linkRefs.current[location.pathname];

//   //   if (activeLink && navRef.current) {
//   //     const navRect = navRef.current.getBoundingClientRect();
//   //     const linkRect = activeLink.getBoundingClientRect();

//   //     setUnderline({
//   //       left: linkRect.left - navRect.left,
//   //       width: linkRect.width,
//   //     });
//   //   }
//   // }, [location.pathname]);

//   return (
//     <header className="w-7xl">
//       <div className="flex items-center justify-between px-4">

//         {/* Logo */}
//         <NavLink to="/" aria-label="Home">
//           <Logo />
//         </NavLink>

//         {/* Desktop Navigation */}
//         <nav
//           ref={navRef}
//           className="hidden md:flex items-center gap-6"
//         >
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               ref={(el) => {
//                 linkRefs.current[item.path] = el;
//               }}
//               className={({ isActive }) =>
//                 `px-1 py-2 transition-colors duration-300 ${
//                   isActive
//                     ? "text-black font-medium"
//                     : "text-gray-700 hover:text-blue-700"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           {/* Sliding underline */}
//           <span
//             className="absolute bottom-0 h-0.5 rounded-full bg-black transition-all duration-300 ease-in-out"
//             style={{
//               left: `${underline.left}px`,
//               width: `${underline.width}px`,
//             }}
//           />
//         </nav>

//       </div>
//     </header>
//   );
// }





































// // import { useEffect, useRef, useState } from "react";
// // import { NavLink, useLocation } from "react-router";
// // import Logo from "./Logo";

// // const navItems = [
// //   { name: "Home", path: "/" },
// //   { name: "About", path: "/about" },
// //   { name: "Services", path: "/services" },
// //   { name: "Contact", path: "/contact" },
// //   { name: "Team", path: "/team" },
// // ];

// // export default function Navbar() {
// //   const navRef = useRef(null);
// //   const linkRefs = useRef({});
// //   const location = useLocation();

// //   const [underline, setUnderline] = useState({
// //     left: 0,
// //     width: 0,
// //   });

// //   useEffect(() => {
// //     const activeLink = linkRefs.current[location.pathname];

// //     if (activeLink && navRef.current) {
// //       const navRect = navRef.current.getBoundingClientRect();
// //       const linkRect = activeLink.getBoundingClientRect();

// //       setUnderline({
// //         left: linkRect.left - navRect.left,
// //         width: linkRect.width,
// //       });
// //     }
// //   }, [location.pathname]);

// //   return (
// //     <header className="w-7xl">
// //       <div className="flex items-center justify-between px-4">

// //         {/* Logo */}
// //         <NavLink to="/">
// //           <Logo />
// //         </NavLink>

// //         {/* Navigation */}
// //         <nav
// //           ref={navRef}
// //           className="hidden md:flex items-center gap-6"
// //         >
// //           {navItems.map((item) => (
// //             <NavLink
// //               key={item.path}
// //               to={item.path}
// //               ref={(el) => {
// //                 linkRefs.current[item.path] = el;
// //               }}
// //               className={({ isActive }) =>
// //                 `px-1 py-2 transition-colors duration-300 ${
// //                   isActive
// //                     ? "text-black font-medium"
// //                     : "text-gray-700 hover:text-blue-700"
// //                 }`
// //               }
// //             >
// //               {item.name}
// //             </NavLink>
// //           ))}

// //           {/* Sliding underline */}
// //           <span
// //             className="absolute bottom-0 h-0.5 rounded-full bg-black transition-all duration-300 ease-in-out"
// //             style={{
// //               left: `${underline.left}px`,
// //               width: `${underline.width}px`,
// //             }}
// //           />
// //         </nav>

// //       </div>
// //     </header>
// //   );
// // }






















// import { useEffect, useRef, useState } from "react";
// import { NavLink, useLocation } from "react-router";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Projects", path: "/projects" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const navRef = useRef(null);
//   const linkRefs = useRef({});
//   const location = useLocation();

//   const [underline, setUnderline] = useState({
//     left: 0,
//     width: 0,
//   });

//   useEffect(() => {
//     const activeLink = linkRefs.current[location.pathname];

//     if (activeLink && navRef.current) {
//       const navRect = navRef.current.getBoundingClientRect();
//       const linkRect = activeLink.getBoundingClientRect();

//       setUnderline({
//         left: linkRect.left - navRect.left,
//         width: linkRect.width,
//       });
//     }
//   }, [location.pathname]);

//   return (
//     <nav ref={navRef} className="relative flex gap-6">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.path}
//           to={item.path}
//           ref={(el) => {
//             linkRefs.current[item.path] = el;
//           }}
//           className={({ isActive }) =>
//             `px-1 py-2 transition-colors duration-300 ${
//               isActive
//                 ? "text-black font-medium"
//                 : "text-gray-700 hover:text-blue-700"
//             }`
//           }
//         >
//           {item.name}
//         </NavLink>
//       ))}

//       <span
//         className="absolute bottom-0 h-0.5 rounded-full bg-black transition-all duration-300 ease-in-out"
//         style={{
//           left: `${underline.left}px`,
//           width: `${underline.width}px`,
//         }}
//       />
//     </nav>
//   );
// }













