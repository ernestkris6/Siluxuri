import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-magenta px-6 py-16 text-white sm:px-8 md:px-12 lg:px-16 xl:px-20">

      <div className="mx-auto max-w-7xl">

        {/* CTA */}
        <div className="border-b border-white/20 pb-20">

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            Have a project in mind?
          </p>

          <h2 className="max-w-5xl text-5xl font-medium leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">
            Let's work
            <span className="block text-white/40">
              together.
            </span>
          </h2>

          <a
            href="/contact"
            className="group mt-10 inline-flex items-center gap-4 border-b border-white pb-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:gap-7"
          >
            Start a project

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              <FiArrowRight />
            </span>
          </a>

        </div>

        {/* Links */}
        <div className="grid gap-12 border-b border-white/20 py-12 sm:grid-cols-2 md:grid-cols-3">

          {/* Navigation */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
              Navigate
            </p>

            <div className="flex flex-col items-start gap-3">
              <a
                href="/"
                className="text-lg transition-colors hover:text-white/50"
              >
                Home
              </a>

              <a
                href="/about"
                className="text-lg transition-colors hover:text-white/50"
              >
                About
              </a>

              <a
                href="/services"
                className="text-lg transition-colors hover:text-white/50"
              >
                Services
              </a>

              <a
                href="/team"
                className="text-lg transition-colors hover:text-white/50"
              >
                Team
              </a>

              <a
                href="/contact"
                className="text-lg transition-colors hover:text-white/50"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
              Connect
            </p>

            <div className="flex flex-col items-start gap-3">
  <a
    href="#"
    className="flex items-center gap-3 text-lg transition-colors hover:text-white/50"
  >
    <FaInstagram className="text-base" />
    Instagram
  </a>

  <a
    href="#"
    className="flex items-center gap-3 text-lg transition-colors hover:text-white/50"
  >
    <FaLinkedinIn className="text-base" />
    LinkedIn
  </a>

  <a
    href="#"
    className="flex items-center gap-3 text-lg transition-colors hover:text-white/50"
  >
    <FaFacebookF className="text-base" />
    Facebook
  </a>

  <a
    href="mailto:hello@youragency.com"
    className="flex items-center gap-3 text-lg transition-colors hover:text-white/50"
  >
    <FaEnvelope className="text-base" />
    Email
  </a>

  <a
    href="mailto:hello@youragency.com"
    className="flex items-center gap-3 text-lg transition-colors hover:text-white/50"
  >
    <FaWhatsapp className="text-base" />
    (+234) 704 522 9142
  </a>
</div>


{/* 
            <div className="flex flex-col items-start gap-3">
              <a
                href="#"
                className="text-lg transition-colors hover:text-white/50"
              >
                Instagram
                
              </a>

              <a
                href="#"
                className="text-lg transition-colors hover:text-white/50"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-lg transition-colors hover:text-white/50"
              >
                Facebook
              </a>

              <a
                href="mailto:hello@youragency.com"
                className="text-lg transition-colors hover:text-white/50"
              >
                Email
              </a>
            </div> */}
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </p>

            <a
                href="mailto:siluxuri@gmail.com"
                className="flex items-center gap-3 text-lg transition-colors hover:text-white/50"
            >
                <FaMailBulk className="text-base" />
                siluxuri@gmail.com
            </a>

            <p className="mt-3 max-w-xs text-lg leading-relaxed text-white/60">
              Let's create something people will remember.
            </p>
          </div>

        </div>

        {/* Huge brand name */}
        <div className="overflow-hidden py-12">

          <h3 className="whitespace-nowrap text-[18vw] font-bold leading-[0.75] tracking-[-0.07em] text-white">
            SILUXURI
          </h3>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            &copy; {new Date().getFullYear()} Your Agency. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}