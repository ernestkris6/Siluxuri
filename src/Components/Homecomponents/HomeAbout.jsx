import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-skyblue px-5 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 flex items-center justify-between border-b border-blue/20 pb-4"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em]">
            About Us
          </span>

          <span className="text-sm text-blue/50">
            01
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              We create ideas
              <span className="block text-magenta">
                that move brands forward.
              </span>
            </h2>
          </motion.div>

          {/* Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-end lg:pb-2"
          >
            <p className="max-w-xl text-xl leading-relaxed sm:text-2xl">
              We are a creative agency specialized in building result-oriented strategies, designs and marketing solutions.
            </p>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="w-fit"
            >
              <Link
                to="/about"
                className="group mt-10 flex w-fit items-center gap-4 border-b-2 border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-7 hover:border-orange hover:text-orange"
              >
                Discover more

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 border-t border-blue/20 pt-8"
        >
          <p className="max-w-4xl text-2xl font-medium leading-tight sm:text-3xl md:text-4xl">
            Strategy. Creativity. Digital.{" "}
            <span className="text-magenta">
              Everything working together.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}













































// import { FiArrowRight } from "react-icons/fi";
// import { Link } from "react-router";

// export default function AboutSection() {
//   return (
//     <section className="w-full bg-skyblue px-5 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
//       <div className="mx-auto max-w-7xl">

//         {/* Section label */}
//         <div className="mb-16 flex items-center justify-between border-b border-blue/20 pb-4">
//           <span className="text-sm font-medium uppercase tracking-[0.2em]">
//             About Us
//           </span>

//           <span className="text-sm text-blue/50">
//             01
//           </span>
//         </div>

//         {/* Main content */}
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

//           {/* Heading */}
//           <div>
//             <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
//               We create ideas
//               <span className="block text-magenta">
//                 that move brands forward.
//               </span>
//             </h2>
//           </div>

//           {/* Description + CTA */}
//           <div className="flex flex-col justify-end lg:pb-2">
//             <p className="max-w-xl text-xl leading-relaxed sm:text-2xl">
//               We are a creative agency specialized in building result-oriented strategies, designs and marketing solutions.
//             </p>

//             <Link
//               to="/about"
//               className="group mt-10 flex w-fit items-center gap-4 border-b-2 border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-7 hover:text-orange hover:border-orange"
//             >
//               Discover more

//               <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
//                 <FiArrowRight />
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* Bottom statement */}
//         <div className="mt-24 border-t border-blue/20 pt-8">
//           <p className="max-w-4xl text-2xl font-medium leading-tight sm:text-3xl md:text-4xl">
//             Strategy. Creativity. Digital.{" "}
//             <span className="text-magenta">
//               Everything working together.
//             </span>
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }