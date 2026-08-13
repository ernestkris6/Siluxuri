import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "PR & Communications",
    description:
      "Building stories that connect brands with people and create meaningful conversations.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Social Media",
    description:
      "Creating conversations, communities and digital experiences that keep brands relevant.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Driving growth through thoughtful digital strategies, creative campaigns and measurable results.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Events & Social Commerce",
    description:
      "Creating experiences that bring brands and people together in memorable ways.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-2 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 flex items-center justify-between border-b border-blue/20 pb-4">
          <span className="text-sm font-medium uppercase tracking-[0.2em]">
            Services
          </span>

          <span className="text-sm text-blue/40">
            02
          </span>
        </div>

        {/* Intro */}
        <div className="mb-20">
          <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            What we do to help
            <span className="block text-blue/40">
              brands move forward.
            </span>
          </h2>
        </div>

        {/* Services */}
        <div className="border-t border-blue/20">

          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="grid border-b border-blue/20 py-8 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-10 lg:gap-20 lg:py-10"
            >

              {/* Text */}
              <div className="flex min-h-[260px] flex-col justify-between py-2">

                <div className="flex gap-5">

                  <span className="pt-1 text-sm font-medium text-blue/40">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="max-w-lg text-3xl font-medium leading-tight tracking-tight lg:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-md text-lg leading-relaxed text-blue/60">
                      {service.description}
                    </p>
                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-xs uppercase tracking-[0.2em] text-blue/40">
                    Explore service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue/20 text-lg transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white">
                    <FiArrowRight />
                  </span>

                </div>

              </div>

              {/* Image */}
              <div className="group relative overflow-hidden rounded-2xl">

                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-blue/0 transition-colors duration-500 group-hover:bg-blue/10" />

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="border-t border-blue/20 pt-10">

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-xl text-xl leading-relaxed text-blue/60 sm:text-2xl">
              Have a project in mind? Let's turn your next idea into
              something people remember.
            </p>

            <a
              href="/contact"
              className="group flex w-fit shrink-0 items-center gap-4 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-7 hover:border-orange hover:text-orange"
            >
              Start a project

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowRight />
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}


























// import { motion } from "framer-motion";

// const services = [
//   {
//     number: "01",
//     title: "PR & Communications",
//     description:
//       "Building stories that connect brands with people and create meaningful conversations.",
//     image:
//       "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     number: "02",
//     title: "Social Media",
//     description:
//       "Creating conversations, communities and digital experiences that keep brands relevant.",
//     image:
//       "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     number: "03",
//     title: "Digital Marketing",
//     description:
//       "Driving growth through thoughtful digital strategies, creative campaigns and measurable results.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     number: "04",
//     title: "Events & Social Commerce",
//     description:
//       "Creating experiences that bring brands and people together in memorable ways.",
//     image:
//       "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="w-full bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
//       <div className="mx-auto max-w-7xl">

//         {/* Header */}
//         <div className="mb-16 flex items-center justify-between border-b border-blue/20 pb-4">
//           <span className="text-sm font-medium uppercase tracking-[0.2em]">
//             Services
//           </span>

//           <span className="text-sm text-blue/40">
//             04
//           </span>
//         </div>

//         {/* Introduction */}
//         <div className="mb-20">
//           <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
//             What we do to help
//             <span className="block text-blue/40">
//               brands move forward.
//             </span>
//           </h2>
//         </div>

//         {/* Services */}
//         <div>
//           {services.map((service, index) => {
//             const reversed = index % 2 !== 0;

//             return (
//               <motion.div
//                 key={service.number}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.08,
//                 }}
//                 className="border-t border-blue/20 py-10 md:py-14"
//               >
//                 <div
//                   className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24 ${
//                     reversed ? "md:[&>*:first-child]:order-2" : ""
//                   }`}
//                 >

//                   {/* Text */}
//                   <div className="flex h-full flex-col justify-between">

//                     <div className="flex items-start gap-6">

//                       <span className="pt-1 text-sm font-medium text-blue/40">
//                         {service.number}
//                       </span>

//                       <div>
//                         <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//                           {service.title}
//                         </h3>

//                         <p className="mt-5 max-w-md text-lg leading-relaxed text-blue/60">
//                           {service.description}
//                         </p>
//                       </div>

//                     </div>

//                     {/* Arrow */}
//                     <div className="mt-8 flex items-center justify-between md:mt-12">

//                       <span className="text-xs uppercase tracking-[0.2em] text-blue/40">
//                         Explore service
//                       </span>

//                       <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue/20 text-lg transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white">
//                         →
//                       </span>

//                     </div>

//                   </div>

//                   {/* Image */}
//                   <div className="group relative overflow-hidden rounded-2xl">

//                     <div className="aspect-[4/3] overflow-hidden">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                       />
//                     </div>

//                     {/* Image overlay */}
//                     <div className="pointer-events-none absolute inset-0 bg-blue/0 transition-colors duration-500 group-hover:bg-blue/10" />

//                   </div>

//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="border-t border-blue/20 pt-10">

//           <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

//             <p className="max-w-xl text-xl leading-relaxed text-blue/60 sm:text-2xl">
//               Have a project in mind? Let's turn your next idea into
//               something people remember.
//             </p>

//             <a
//               href="/contact"
//               className="group flex w-fit shrink-0 items-center gap-4 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-7 hover:border-orange hover:text-orange"
//             >
//               Start a project

//               <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </a>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }