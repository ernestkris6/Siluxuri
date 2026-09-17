import { FiUsers, FiEye, FiHeart } from "react-icons/fi";
import digital from "../../assets/strategyImage.jpg"
import { motion } from "framer-motion";

const metrics = [
  {
    icon: <FiUsers />,
    value: "250K+",
    label: "FOLLOWERS",
    description:
      "A growing community that trusts, engages and supports the brands we build.",
    iconBg: "bg-[#A0CBD2]",
    line: "bg-[#007589]",
  },
  {
    icon: <FiEye />,
    value: "12M+",
    label: "IMPRESSIONS",
    description:
      "Strategic campaigns that put brands in front of the right people, right on time.",
    iconBg: "bg-[#EB6F38]",
    line: "bg-[#EB6F38]",
  },
  {
    icon: <FiHeart />,
    value: "420K+",
    label: "INTERACTIONS",
    description:
      "Real conversations, meaningful engagement and lasting connections across platforms.",
    iconBg: "bg-[#A0CBD2]",
    line: "bg-[#007589]",
  },
];

export default function ServicesMetrics() {
  return (
    <section className="relative overflow-hidden bg-[#F2F2F2] py-20 sm:py-24 lg:py-28">
      
      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* =========================
              IMAGE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-tr-[24px] rounded-br-[24px] lg:rounded-tr-[60px] lg:rounded-br-[60px]"
          >
            <img
              src={digital}
              alt="Siluxri creative workspace"
              className="h-[420px] w-full object-cover sm:h-[580px] lg:h-[640px]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>

          {/* =========================
              CONTENT
          ========================== */}
          <div>
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-[#007589]">
                Our Impact
              </span>

              <div className="mt-4 h-[2px] w-10 bg-[#007589]" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#1F263B] sm:text-6xl lg:text-7xl"
            >
              Real people.
              <br />

              <span className="italic text-[#007589]">
                Meaningful
              </span>{" "}
              reach.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-2xl font-sans text-base leading-8 text-[#3D4658] sm:text-lg"
            >
              Our work doesn’t just look good — it performs. We help brands
              build genuine communities, increase visibility and create real
              engagement across digital platforms.
            </motion.p>

            {/* =========================
                METRICS
            ========================== */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.1,
                  }}
                  className={`
                    px-0 py-8
                    sm:px-6 sm:py-0
                    ${index !== 0 ? "border-t border-[#1F263B]/15 sm:border-l sm:border-t-0" : ""}
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      flex h-16 w-16 items-center justify-center
                      rounded-full
                      ${metric.iconBg}
                      text-2xl text-[#1F263B]
                    `}
                  >
                    {metric.icon}
                  </div>

                  {/* Number */}
                  <h3 className="mt-7 font-serif text-5xl leading-none tracking-[-0.04em] text-[#1F263B] sm:text-4xl lg:text-5xl">
                    {metric.value}
                  </h3>

                  {/* Label */}
                  <p className="mt-5 font-sans text-xs font-medium tracking-[0.3em] text-[#1F263B]">
                    {metric.label}
                  </p>

                  {/* Accent line */}
                  <div
                    className={`mt-6 h-[2px] w-10 ${metric.line}`}
                  />

                  {/* Description */}
                  <p className="mt-5 max-w-[220px] font-sans text-sm leading-7 text-[#4B5567]">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM DARK PANEL
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-5 mt-20 overflow-hidden rounded bg-[#1F263B] px-7 py-12 sm:mx-8 sm:px-12 lg:mx-12 lg:mt-28 lg:px-20 lg:py-16"
      >
        <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">

          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="h-[1px] w-16 bg-[#A0CBD2]" />

            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/80">
              Insights
              <span className="mx-3 text-[#007589]">/</span>
              Creativity
              <span className="mx-3 text-[#007589]">/</span>
              Impact
            </p>
          </div>

          {/* Right */}
          <p className="max-w-md font-serif text-2xl italic leading-tight text-[#A0CBD2] sm:text-3xl">
            More than numbers.
            <br />
            It’s real growth.
          </p>
        </div>

        {/* Decorative shape */}
        <div className="absolute -bottom-32 -right-24 h-64 w-64 rounded-full bg-[#007589]" />

        {/* Orange dot */}
        <div className="absolute right-24 top-7 h-12 w-12 rounded-full bg-[#EB6F38] sm:right-28" />
      </motion.div>
    </section>
  );
}



























// import { motion } from "framer-motion";

// const metrics = [
//   {
//     value: "250K+",
//     label: "Followers",
//     description: "Growing communities across platforms",
//   },
//   {
//     value: "4.8M+",
//     label: "Impressions",
//     description: "Content reaching the right audiences",
//   },
//   {
//     value: "320K+",
//     label: "Interactions",
//     description: "Meaningful audience engagement",
//   },
// ];

// export default function ServicesMetrics() {
//   return (
//     <section className="bg-white px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
//       <div className="mx-auto max-w-7xl">

//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
//         >
//           <div>
//             <span className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-blue">
//               Our impact
//             </span>

//             <h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
//               Numbers that tell
//               <span className="text-[#EB6F38]"> a story.</span>
//             </h2>
//           </div>

//           <p className="max-w-sm text-sm leading-7 text-white/60">
//             We combine creativity, strategy and digital execution to create
//             measurable impact for the brands we work with.
//           </p>
//         </motion.div>

//         {/* Metrics */}
//         <div className="grid overflow-hidden rounded-2xl border border-white/10 md:grid-cols-3">
//           {metrics.map((metric, index) => (
//             <motion.div
//               key={metric.label}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.12,
//               }}
//               className="group relative border-b border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.04] md:border-b-0 md:border-r md:last:border-r-0 lg:p-10"
//             >
//               {/* Number */}
//               <div className="mb-16 flex items-start justify-between">
//                 <span className="text-xs text-white/40">
//                   0{index + 1}
//                 </span>

//                 <span className="text-xs uppercase tracking-[0.2em] text-[#A0CBD2]">
//                   Metric
//                 </span>
//               </div>

//               <div>
//                 <motion.h3
//                   whileHover={{ x: 5 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-5xl font-medium tracking-tight sm:text-6xl"
//                 >
//                   {metric.value}
//                 </motion.h3>

//                 <p className="mt-3 text-lg font-medium text-[#A0CBD2]">
//                   {metric.label}
//                 </p>

//                 <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
//                   {metric.description}
//                 </p>
//               </div>

//               {/* Decorative line */}
//               <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#EB6F38] transition-all duration-500 group-hover:w-full" />
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }