import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Think differently",
    text: "We question the obvious and look for ideas that give brands a distinct point of view.",
  },
  {
    number: "02",
    title: "Make it useful",
    text: "Creativity should solve problems. Every idea needs a purpose beyond simply looking good.",
  },
  {
    number: "03",
    title: "Stay human",
    text: "People connect with people. We create brands that communicate with clarity, personality and emotion.",
  },
  {
    number: "04",
    title: "Keep moving",
    text: "Digital culture never stands still. Neither do we. We experiment, learn and evolve.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-skyblue px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-blue/50">
              03 / Philosophy
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              What we
              <span className="text-blue/40"> believe.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-blue/60">
            The principles behind the work, the partnerships and the
            brands we help build.
          </p>

        </div>


        {/* Values */}
        <div className="grid border-t border-blue/20 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group border-b border-blue/20 p-6 ${index % 2 === 0 ? 'sm:border-r' : ""} lg:border-r lg:last:border-r-0  lg:min-h-[330px] lg:p-8`}
            >

              <span className="text-xs font-medium tracking-[0.2em] text-blue/40">
                {value.number}
              </span>

              <div className="mt-20">

                <h3 className="text-xl font-medium transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-blue/60">
                  {value.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}