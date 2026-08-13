import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "PR & Communications",
    image: "/images/pr.jpg",
    size: "large",
  },
  {
    number: "02",
    title: "Social Media",
    image: "/images/social-media.jpg",
    size: "small",
  },
  {
    number: "03",
    title: "Digital Marketing",
    image: "/images/digital-marketing.jpg",
    size: "small",
  },
  {
    number: "04",
    title: "Events & Social Commerce",
    image: "/images/events.jpg",
    size: "large",
  },
];

export default function HomeServices() {
  return (
    <section className="w-full px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 border-b border-blue/20 pb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium uppercase tracking-[0.2em]">
              Services
            </span>

            <span className="text-sm text-blue/40">
              02
            </span>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:gap-20">
          <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            What we do to
            <span className="block text-blue/40">
              move brands forward.
            </span>
          </h2>

          <p className="max-w-xl self-end text-xl leading-relaxed text-blue/70 sm:text-2xl">
            From strategy and storytelling to digital experiences and
            unforgettable events, we create work that connects brands with
            the people who matter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {services.map((service, index) => (
            <motion.a
              href="/services"
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative block overflow-hidden rounded-2xl ${
                service.size === "large"
                  ? "md:min-h-[600px]"
                  : "md:min-h-[450px]"
              } min-h-[420px]`}
            >

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-blue/30 transition-colors duration-500 group-hover:bg-blue/50" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-white/60">
                    {service.number}
                  </span>

                  <span className="translate-y-2 text-2xl opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    →
                  </span>
                </div>

                <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  {service.title}
                </h3>

              </div>
            </motion.a>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-blue/20 pt-8 sm:flex-row sm:items-center">

          <p className="max-w-lg text-lg text-blue/60">
            Have something bigger in mind? Let's create something
            meaningful together.
          </p>

          <a
            href="/services"
            className="group flex w-fit items-center gap-4 border-b-2 border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-7 hover:border-orange hover:text-orange"
          >
            Explore all services

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}