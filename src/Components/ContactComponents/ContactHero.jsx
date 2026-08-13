import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-blue">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
        alt="SILUXURI contact"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue/65" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[60vh] items-center justify-center px-6 py-24 text-center sm:px-8 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
            Get in touch
          </p>

          <h1 className="text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Let's talk.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl md:text-2xl">
            Have a project, idea or campaign in mind?
            We'd love to hear about it.
          </p>
        </motion.div>

      </div>
    </section>
  );
}