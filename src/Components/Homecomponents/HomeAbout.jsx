export default function AboutSection() {
  return (
    <section className="w-full bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <div className="mb-16 flex items-center justify-between border-b border-blue/20 pb-4">
          <span className="text-sm font-medium uppercase tracking-[0.2em]">
            About Us
          </span>

          <span className="text-sm text-blue/50">
            01
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

          {/* Heading */}
          <div>
            <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              We create ideassssssssssssssss
              <span className="block text-skyblue">
                that move brands forward.
              </span>
            </h2>
          </div>

          {/* Description + CTA */}
          <div className="flex flex-col justify-end lg:pb-2">
            <p className="max-w-xl text-xl leading-relaxed sm:text-2xl">
              We are a creative agency that helps brands find their voice,
              connect with their audience and create experiences that matter.
              From strategy to digital, we turn bold ideas into meaningful
              results.
            </p>

            <a
              href="/about"
              className="group mt-10 flex w-fit items-center gap-4 border-b-2 border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-7 hover:text-orange hover:border-orange"
            >
              Discover more

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-blue/20 pt-8">
          <p className="max-w-4xl text-2xl font-medium leading-tight sm:text-3xl md:text-4xl">
            Strategy. Creativity. Digital.{" "}
            <span className="text-skyblue">
              Everything working together.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}