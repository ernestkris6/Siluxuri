import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We listen, research and understand your brand, audience, market and ambitions.",
  },
  {
    number: "02",
    title: "Strategise",
    text: "We turn insights into a clear creative and communication strategy.",
  },
  {
    number: "03",
    title: "Create",
    text: "We develop ideas, campaigns and experiences that make your brand matter.",
  },
  {
    number: "04",
    title: "Grow",
    text: "We measure, learn and refine to keep creating meaningful results.",
  },
];

export default function ServicesItem() {
  return (
    <section className="bg-[#A0CBD2]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 md:py-32 lg:px-16">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#2F2E41]/60">
              How we work
            </span>

            <h2 className="mt-5 max-w-md text-4xl font-medium tracking-tight text-[#2F2E41] sm:text-5xl">
              Good work starts with <span className="text-magenta">good thinking.</span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="grid grid-cols-[60px_1fr] gap-5 border-t border-[#2F2E41]/20 py-7 sm:grid-cols-[80px_1fr]"
              >
                <span className="text-sm text-[#2F2E41]/50">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium text-[#2F2E41]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-lg leading-7 text-[#2F2E41]/65">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
















// import { motion } from "framer-motion";

// const steps = [
//   {
//     number: "01",
//     title: "Discover",
//     text: "We understand the idea, the audience and what the project needs to achieve.",
//   },
//   {
//     number: "02",
//     title: "Design",
//     text: "We develop the visual direction and shape the experience around the strategy.",
//   },
//   {
//     number: "03",
//     title: "Build",
//     text: "Once the direction is approved, we bring the design to life through development.",
//   },
//   {
//     number: "04",
//     title: "Launch",
//     text: "We refine, test and prepare the finished experience for the real world.",
//   },
// ];

// export default function ServicesItem() {
//   return (
//     <section className="bg-blue text-[#F2F2F2] px-6 md:px-10 lg:px-16 py-24 md:py-32">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
//         <div className="lg:col-span-4">
//           <div className="flex items-center gap-4">
//             <span className="w-10 h-px bg-[#007589]" />

//             <span className="text-xs uppercase tracking-[0.3em] text-[#F2F2F2]/50">
//               Our process
//             </span>
//           </div>
//         </div>

//         <div className="lg:col-span-8">
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.045em] leading-[0.95]">
//             From first idea
//             <br />
//             to <span className="text-[#A0CBD2]">final product.</span>
//           </h2>
//         </div>
//       </div>

//       <div className="border-t border-[#F2F2F2]/15">
//         {steps.map((step, index) => (
//           <motion.div
//             key={step.number}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.08,
//             }}
//             className="
//               grid
//               grid-cols-1
//               md:grid-cols-12
//               gap-6
//               py-8
//               md:py-10
//               border-b
//               border-[#F2F2F2]/15
//             "
//           >
//             <span className="md:col-span-2 text-sm text-[#007589]">
//               {step.number}
//             </span>

//             <h3 className="md:col-span-4 text-2xl md:text-3xl font-medium">
//               {step.title}
//             </h3>

//             <p className="md:col-span-5 md:col-start-8 text-[#F2F2F2]/55 leading-relaxed">
//               {step.text}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

