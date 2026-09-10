import { motion } from "framer-motion";

const ServicesOverview = () => {
  return (
    <section className="bg-[#F2F2F2] text-[#2F2E41] px-6 md:px-10 lg:px-16 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <span className="w-10 h-px bg-[#007589]" />

            <span className="text-xs uppercase tracking-[0.3em] text-[#2F2E41]/50">
              What we do
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.045em] leading-[0.95]">
            Ideas are easy.
            <br />
            <span className="text-[#007589]">
              Making them matter
            </span>{" "}
            is the work.
          </h2>

          <p className="max-w-2xl mt-10 text-base md:text-lg leading-relaxed text-[#2F2E41]/60">
            We combine strategy, design and technology to create brands and
            digital experiences that communicate clearly and leave a lasting
            impression.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;