import { motion } from "framer-motion";
import digi from "../../assets/digital2.webp";


export default function AboutStory() {
  return (
    <section className="bg-[#F2F2F2] px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        {/* Section intro */}
        <div className="mb-20 grid gap-8 md:grid-cols-[180px_1fr] md:gap-16">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-magenta">
            02 / Our Story
          </p>

          <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            We combine strategy, creativity and technology to help
            ambitious businesses move forward.
          </h2>

        </div>


        {/* Main layout */}
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.1fr] lg:items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={digi}
                alt="Creative work at Siluxuri"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-full bg-orange sm:block" />
          </motion.div>


          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:pl-10"
          >

            <p className="max-w-2xl text-lg leading-8 text-blue/65 sm:text-xl">
              Siluxuri is a creative studio built around one simple idea:
              good businesses deserve equally good brands.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue/65 sm:text-xl">
              We work across branding, digital marketing, web development,
              social media and creative communication to help businesses
              communicate clearly and compete confidently.
            </p>


            {/* Mission */}
            <div className="mt-14 border-l-2 border-magenta pl-6">

              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-magenta">
                Our Mission
              </p>

              <p className="max-w-2xl text-xl font-medium leading-relaxed sm:text-2xl">
                Our mission is to provide our clients with practical,
                creative, and effective branding/digital marketing solutions
                that help their businesses differentiate themselves in the
                competitive environment.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}