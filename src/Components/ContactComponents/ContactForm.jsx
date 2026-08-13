import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="w-full bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
      
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-blue/40">
              Contact
            </p>

            <h2 className="max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Tell us about
              <span className="block text-blue/40">
                your project.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-blue/60">
              Whether you have a fully formed brief or just
              an idea, we'd love to hear what you're thinking.
            </p>
          </motion.div>


          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >

            {/* Name + Email */}
            <div className="grid gap-10 sm:grid-cols-2">

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                  Your name
                </label>

                <input
                  type="text"
                  className="w-full border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  placeholder="you@email.com"
                />
              </div>

            </div>


            {/* Company + Phone */}
            <div className="grid gap-10 sm:grid-cols-2">

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                  Company
                </label>

                <input
                  type="text"
                  className="w-full border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                  Phone
                </label>

                <input
                  type="tel"
                  className="w-full border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  placeholder="+234"
                />
              </div>

            </div>


            {/* Service */}
            <div>
              <label className="mb-4 block text-xs uppercase tracking-[0.15em] text-blue/90">
                What can we help with?
              </label>

              <div className="flex flex-wrap gap-3">

                {[
                  "PR & Communications",
                  "Social Media",
                  "Digital Marketing",
                  "Events & Social Commerce",
                ].map((service) => (
                  <button
                    key={service}
                    type="button"
                    className="rounded-full border border-blue/20 px-5 py-3 text-sm transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white"
                  >
                    {service}
                  </button>
                ))}

              </div>
            </div>


            {/* Message */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                Tell us about your project
              </label>

              <textarea
                rows="5"
                className="w-full resize-none border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                placeholder="Tell us a little about what you're working on..."
              />
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="group flex items-center gap-5 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-8 hover:border-orange hover:text-orange"
            >
              Send enquiry

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}