import { FiUsers, FiEye, FiHeart } from "react-icons/fi";
import digital from "../../assets/strategyImage.jpg";
import { motion } from "framer-motion";

const metrics = [
  {
    icon: <FiUsers />,
    value: "77K+",
    label: "FOLLOWERS",
    description:
      "A growing community that trusts, engages and supports the brands we build.",
    iconBg: "bg-[#A0CBD2]",
    line: "bg-[#007589]",
  },
  {
    icon: <FiEye />,
    value: "10M+",
    label: "IMPRESSIONS",
    description:
      "Strategic campaigns that put brands in front of the right people, right on time.",
    iconBg: "bg-[#EB6F38]",
    line: "bg-[#EB6F38]",
  },
  {
    icon: <FiHeart />,
    value: "270K+",
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
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
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
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-3xl text-5xl leading-[0.95] tracking-[-0.04em] text-[#1F263B] sm:text-6xl lg:text-7xl"
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
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
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
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.1,
                  }}
                  className={`
                    flex flex-col items-center text-center
                    px-0 py-8
                    sm:items-start sm:text-left
                    sm:px-6 sm:py-0
                    ${
                      index !== 0
                        ? "border-t border-[#1F263B]/15 sm:border-l sm:border-t-0"
                        : ""
                    }
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
                  <h3 className="mt-7 text-5xl leading-none tracking-[-0.04em] text-[#1F263B] sm:text-4xl lg:text-5xl">
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
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="relative mx-5 mt-20 overflow-hidden rounded bg-[#1F263B] px-7 py-12 sm:mx-8 sm:px-12 lg:mx-12 lg:mt-28 lg:px-20 lg:py-16"
      >
        <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">

          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="h-[1px] w-16 bg-[#A0CBD2]" />

            <p className="font-sans text-[7px] sm:text-[10px] uppercase tracking-[0.4em] text-white/80">
              Insights
              <span className="mx-3 text-magenta">/</span>
              Creativity
              <span className="mx-3 text-magenta">/</span>
              Impact
            </p>
          </div>

          {/* Right */}
          <p className="max-w-md text-2xl italic leading-tight text-[#A0CBD2] sm:text-3xl">
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



