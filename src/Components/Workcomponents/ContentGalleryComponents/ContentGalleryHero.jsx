
import { motion } from "framer-motion";

export default function ContentGalleryHero({
  project,
  featuredMedia,
  onOpenMedia,
}) {
  const featuredImage =
    featuredMedia?.type === "video"
      ? featuredMedia.poster
      : featuredMedia?.src;

  return (
    <section className="px-5 pb-10 pt-28 sm:px-8 md:px-12 md:pb-16 md:pt-36 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#007589]">
            Siluxri / Content Creation
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
            The art of telling
            <br />
            <span className="text-[#007589]">
              {project.name}
            </span>
            ’s story.
          </h1>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[#2F2E41]/65 md:pb-2 md:text-base">
          Explore the visuals, campaigns, and creative stories
          crafted to bring {project.name} to life.
        </p>
      </motion.div>

      {featuredMedia && featuredImage && (
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.2,
            ease: "easeInOut",
          }}
          onClick={() => onOpenMedia(featuredMedia)}
          aria-label={`View featured content: ${featuredMedia.alt || project.name}`}
          className="group relative block w-full overflow-hidden rounded-tr-[28px] rounded-bl-[28px] bg-[#A0CBD2]/30 text-left md:rounded-tr-[64px] md:rounded-bl-[64px]"
        >
          <img
            src={featuredImage}
            alt={featuredMedia.alt || `${project.name} featured campaign`}
            fetchPriority="high"
            className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:h-[480px] md:h-[580px] lg:h-[680px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2F2E41]/65 via-transparent to-black/5" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-8 md:p-12">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/75">
                Featured work
              </p>

              <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
                {featuredMedia.title || project.name}
              </h2>

              <p className="mt-2 text-sm text-white/80">
                {featuredMedia.category || "Creative campaign"}
              </p>
            </div>

            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/10 text-xl backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#2F2E41] sm:size-14">
              {featuredMedia.type === "video" ? "▶" : "↗"}
            </span>
          </div>
        </motion.button>
      )}

      {!featuredMedia && (
        <div className="flex min-h-[300px] items-center justify-center rounded-tr-[28px] rounded-bl-[28px] bg-[#A0CBD2]/25 px-6 text-center md:min-h-[440px] md:rounded-tr-[64px] md:rounded-bl-[64px]">
          <p className="max-w-md text-sm leading-7 text-[#2F2E41]/65">
            The featured campaign for {project.name} will appear here
            once its media has been added.
          </p>
        </div>
      )}
    </section>
  );
}
