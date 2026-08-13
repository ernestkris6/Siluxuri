import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section className="w-full bg-blue px-6 py-24 text-white sm:px-8 md:px-12 lg:px-16 xl:px-20">
      
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/20 pb-5"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Get in touch
          </p>
        </motion.div>


        <div className="grid gap-12 md:grid-cols-3">

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Email
            </p>

            <a
              href="mailto:siluxuri@gmail.com"
              className="text-xl transition-colors duration-300 hover:text-orange sm:text-2xl"
            >
              siluxuri@gmail.com
            </a>
          </motion.div>


          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Phone
            </p>

            <a
              href="tel:+2340000000000"
              className="text-xl transition-colors duration-300 hover:text-orange sm:text-2xl"
            >
              +234 000 000 0000
            </a>
          </motion.div>


          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Location
            </p>

            <p className="text-xl sm:text-2xl">
              Lagos, Nigeria
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}