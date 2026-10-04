import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import digital1 from "../../assets/digital1.webp";
import digital2 from "../../assets/digital2.webp";
import Card from "../../assets/rtmmockup.jpg";
import rentals from "../../assets/rentals.webp";
import { Link } from "react-router";


const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We build result-oriented brand strategies that convey what makes your company unique.",
      image:  digital1,
 
  },
  {
    number: "02",
    title: "Identity Design",
    description:
      "From logo design to colour palettes and typography, we craft designs that resonates with your audience.",
    image: Card,
 
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Our digital marketing services complement our branding work by enhancing online visibility and driving engagement.",
    image: digital2
    
  },
  {
    number: "04",
    title: "Studio and Equipment Rental",
    description:
      "We provide flexible and affordable equipment rental solutions for creators, entrepreneurs and small businesses.",
    image: rentals,

  },
];

////px-3 sm:px-6
export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-5 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
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
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-20"
          >
            <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              What we do to help
              <span className="block text-orange">
                brands move forward.
              </span>
            </h2>
          </motion.div>


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

                    <p className="mt-5 max-w-m text-lg sm:text-xl leading-relaxed text-blue/60">
                      {service.description}
                    </p>
                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-xs uppercase tracking-[0.2em] text-blue/40">
                    Explore service
                  </span>

                 <Link to="services">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue/20 text-lg transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white">
                    <FiArrowRight />
                  </span>
                 </Link>

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

            <Link
              to="/contact"
              className="group flex w-fit shrink-0 items-center gap-4 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-7 hover:border-orange hover:text-orange"
            >
              Start a project

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowRight />
              </span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

























