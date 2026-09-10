import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We define the foundation behind your brand — positioning, direction, audience and the ideas that make it meaningful.",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "We create distinctive visual systems that give your brand a recognizable presence across every touchpoint.",
  },
  {
    number: "03",
    title: "Website Design",
    description:
      "We design purposeful digital experiences that balance strong visual direction with clarity and usability.",
  },
  {
    number: "04",
    title: "Web Development",
    description:
      "We turn approved designs into responsive, functional websites built with modern technologies and attention to detail.",
  },
];

export default function ServicesList () {
  return (
    <section className="bg-[#F2F2F2] text-[#2F2E41] px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#2F2E41]/15">
        {services.map((service, index) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
            className={`
              group
              py-10
              md:py-14
              pr-6
              md:pr-12
              border-b
              border-[#2F2E41]/15
              ${index % 2 === 0 ? "md:border-r md:pr-12" : "md:pl-12"}
            `}
          >
            <div className="flex items-start justify-between gap-6">
              <span className="text-sm text-[#007589]">
                {service.number}
              </span>

              <span className="text-[#2F2E41]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>

            <h3 className="mt-16 text-3xl md:text-4xl font-medium tracking-[-0.035em]">
              {service.title}
            </h3>

            <p className="max-w-md mt-5 text-[#2F2E41]/60 leading-relaxed">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

