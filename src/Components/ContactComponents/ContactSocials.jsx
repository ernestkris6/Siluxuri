import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "#",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "#",
  },
];

export default function ContactSocials() {
  return (
    <section className="w-full px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
      
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            Follow along
          </p>

          <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let's stay
            <span className="block text-white/50">
              connected.
            </span>
          </h2>


          {/* Social links */}
          <div className="mt-12 border-t border-white/20">

            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="group flex items-center justify-between border-b border-blue/50 py-6 transition-colors duration-300 hover:bg-white/5"
                >

                  <div className="flex items-center gap-5">

                    <span className="text-sm text-white/40">
                      0{index + 1}
                    </span>

                    <Icon className="text-xl" />

                    <span className="text-xl font-medium sm:text-2xl">
                      {social.name}
                    </span>

                  </div>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>

                </a>
              );
            })}

          </div>

        </motion.div>

      </div>

    </section>
  );
}