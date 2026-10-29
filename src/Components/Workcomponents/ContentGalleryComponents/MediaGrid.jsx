
import { motion } from "framer-motion";

export default function MediaGrid({ items, onOpenMedia }) {
  return (
    <div className="grid grid-cols-2 items-start gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {items.map((item, index) => {
        const aspectRatio =
          item.aspect === "landscape"
            ? "aspect-[4/3]"
            : item.aspect === "square"
              ? "aspect-square"
              : "aspect-[3/4]";

        const isVideo = item.type === "video";

        return (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
              duration: 0.9,
              delay: Math.min((index % 3) * 0.1, 0.2),
              ease: "easeOut",
            }}
            onClick={() => onOpenMedia(item)}
            aria-label={`Open ${item.title || item.alt || item.category || "gallery item"}`}
            className="group min-w-0 text-left"
          >
            <div
              className={`relative overflow-hidden rounded-xl bg-[#A0CBD2]/20 sm:rounded-2xl ${aspectRatio}`}
            >
              <img
                src={isVideo ? item.poster || item.src : item.src}
                alt={item.alt || item.title || ""}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-[#2F2E41]/0 transition-colors duration-300 group-hover:bg-[#2F2E41]/15" />

              {isVideo && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/80 bg-black/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:size-14">
                    <span className="ml-1 text-lg">▶</span>
                  </span>
                </span>
              )}

              <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-sm text-[#2F2E41] opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                ↗
              </span>
            </div>

            <div className="flex items-start justify-between gap-2 px-1 pb-2 pt-3 sm:pt-4">
              <div className="min-w-0">
                {item.title && (
                  <h3 className="truncate text-sm font-medium sm:text-base">
                    {item.title}
                  </h3>
                )}

                <p className="mt-1 text-xs text-[#2F2E41]/55 sm:text-sm">
                  {item.category || (isVideo ? "Video" : "Photography")}
                </p>
              </div>

              {isVideo && (
                <span className="shrink-0 pt-0.5 text-[10px] uppercase tracking-wider text-[#007589] sm:text-xs">
                  Video
                </span>
              )}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
