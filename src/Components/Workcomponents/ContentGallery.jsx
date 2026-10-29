import { useMemo, useState, useRef } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { project } from "../../data";

import ContentGalleryHero from "./ContentGalleryComponents/ContentGalleryHero";
import MediaGrid from "./ContentGalleryComponents/MediaGrid";
import MediaViewer from "./ContentGalleryComponents/MediaViewer";
import ContentGalleryCTA from "./ContentGalleryComponents/ContentGalleryCTA";

const MEDIA_FILTERS = [
  { label: "All content", value: "all" },
  { label: "Images", value: "image" },
  { label: "Reels", value: "reel" },
  { label: "Videos", value: "video" },
  { label: "Graphics", value: "graphic" },
];

const SORT_OPTIONS = [
  { label: "Newest first", value: "newest" },
  { label: "Oldest first", value: "oldest" },
  { label: "Title: A–Z", value: "title" },
];

const INITIAL_ITEMS = 24;

const getMediaDate = (item) => {
  if (!item.date) return null;

  const timestamp = new Date(item.date).getTime();

  return Number.isNaN(timestamp) ? null : timestamp;
};

const getMediaTitle = (item) => item.title || "Untitled creative";

const getMediaTypeLabel = (type) => {
  const labels = {
    image: "Image",
    reel: "Reel",
    video: "Video",
    graphic: "Graphic",
  };

  return labels[type] || "Creative";
};

function MediaCard({ item, onOpenMedia, featured = false }) {
  const isVideo = item.type === "video" || item.type === "reel";
  const imageSrc = isVideo ? item.poster || item.src : item.src;

  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpenMedia(item)}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-[#2F2E41]/5 text-left ${
        featured ? "aspect-[4/3]" : "aspect-[4/5]"
      }`}
      aria-label={`Open ${getMediaTitle(item)}`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={item.alt || getMediaTitle(item)}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#A0CBD2]/30 px-5 text-center">
          <span className="text-sm text-[#2F2E41]/65">
            Add a preview image for this creative
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#171722]/85 via-transparent to-black/5 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

      {isVideo && (
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm">
          {item.type === "reel" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <rect
                x="6"
                y="3"
                width="12"
                height="18"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="m10 9 5 3-5 3V9Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="m9 6 9 6-9 6V6Z"
                fill="currentColor"
              />
            </svg>
          )}
        </span>
      )}

      <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
        {getMediaTypeLabel(item.type)}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        {item.category && (
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#A0CBD2]">
            {item.category}
          </p>
        )}

        <h3 className="text-base font-medium leading-snug sm:text-lg">
          {getMediaTitle(item)}
        </h3>

        <span className="mt-3 inline-flex items-center gap-2 text-xs text-white/75 transition-colors group-hover:text-white">
          View creative
          <span aria-hidden="true">↗</span>
        </span>
      </div>
    </motion.button>
  );
}


function MediaCarousel({
  title,
  description,
  items,
  onOpenMedia,
  type = "video",
}) {
  const carouselRef = useRef(null);
  const [progress, setProgress] = useState(0);

  if (!items.length) return null;

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction * container.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  const updateProgress = () => {
    const container = carouselRef.current;
    if (!container) return;

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    setProgress(
      maxScroll > 0
        ? container.scrollLeft / maxScroll
        : 0
    );
  };

  const isReel = type === "reel";

  return (
    <section className="mb-20 md:mb-28">
      <div className="mb-8 flex items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#007589]">
            0{isReel ? "2" : "3"} / Moving image
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {title}
            <span className="text-[#EB6F38]">.</span>
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-7 text-[#2F2E41]/60">
            {description}
          </p>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            aria-label={`Scroll ${title} left`}
            className="flex size-12 items-center justify-center rounded-full border border-[#2F2E41]/20 text-xl transition-all hover:border-[#007589] hover:bg-[#007589] hover:text-white"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            aria-label={`Scroll ${title} right`}
            className="flex size-12 items-center justify-center rounded-full border border-[#2F2E41]/20 text-xl transition-all hover:border-[#007589] hover:bg-[#007589] hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        onScroll={updateProgress}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => onOpenMedia(item)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group relative shrink-0 snap-start overflow-hidden rounded-2xl bg-[#A0CBD2]/20 text-left ${
              isReel
                ? "w-[72%] max-w-[280px] sm:w-[34%] lg:w-[23%]"
                : "w-[85%] max-w-[480px] sm:w-[58%] lg:w-[43%]"
            }`}
            aria-label={`Open ${item.title || title}`}
          >
            <div
              className={`relative overflow-hidden ${
                isReel ? "aspect-[9/16]" : "aspect-video"
              }`}
            >
              <img
                src={item.poster || item.src}
                alt={item.alt || item.title || ""}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

              <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {isReel ? "Social reel" : "Brand film"}
              </span>

              <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/15 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                ▶
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/65">
                  {item.category || "Creative production"}
                </p>

                <h3 className="text-lg font-medium sm:text-xl">
                  {item.title || `Creative ${index + 1}`}
                </h3>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-4">
        <div className="h-[2px] flex-1 overflow-hidden bg-[#2F2E41]/10">
          <div
            className="h-full bg-[#007589] transition-all duration-200"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>

        <span className="text-[10px] uppercase tracking-widest text-[#2F2E41]/45">
          Drag to explore
        </span>
      </div>

      <div className="mt-5 flex justify-between sm:hidden">
        <button
          type="button"
          onClick={() => scrollCarousel(-1)}
          className="text-xs font-medium text-[#007589]"
        >
          ← Previous
        </button>

        <button
          type="button"
          onClick={() => scrollCarousel(1)}
          className="text-xs font-medium text-[#007589]"
        >
          Next →
        </button>
      </div>
    </section>
  );
}

// function MediaCarousel({ title, description, items, onOpenMedia }) {
//   if (!items.length) return null;

//   return (
//     <section className="mb-16 md:mb-20">
//       <div className="mb-6 flex items-end justify-between gap-4">
//         <div>
//           <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#007589]">
//             Selected work
//           </p>
//           <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
//             {title}
//             <span className="text-[#EB6F38]">.</span>
//           </h3>
//           {description && (
//             <p className="mt-2 max-w-lg text-sm leading-6 text-[#2F2E41]/60">
//               {description}
//             </p>
//           )}
//         </div>

//         <span className="shrink-0 text-xs text-[#2F2E41]/50">
//           {items.length} {items.length === 1 ? "piece" : "pieces"}
//         </span>
//       </div>

//       <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5">
//         {items.map((item) => (
//           <div
//             key={item.id}
//             className={`w-[78%] shrink-0 snap-start sm:w-[48%] lg:w-[32%] ${
//               item.type === "reel"
//                 ? "max-w-[320px]"
//                 : "max-w-[520px]"
//             }`}
//           >
//             <MediaCard
//               item={item}
//               onOpenMedia={onOpenMedia}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function ContentGallery() {
  const { slug } = useParams();

  const [activeType, setActiveType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const [selectedMediaId, setSelectedMediaId] = useState(null);

  const selectedProject = project.find(
    (item) => item.slug === slug
  );

  // Keep the original case-study gallery separate.
  // This page exclusively uses contentGallery.
  const gallery = selectedProject?.contentGallery ?? [];

  const filteredGallery = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const results = gallery.filter((item) => {
      const matchesType =
        activeType === "all" || item.type === activeType;

      const searchableText = [
        item.title,
        item.category,
        item.alt,
        item.description,
        ...(Array.isArray(item.tags) ? item.tags : []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      return matchesType && matchesSearch;
    });

    return [...results].sort((a, b) => {
      if (sortBy === "title") {
        return getMediaTitle(a).localeCompare(getMediaTitle(b));
      }

      const dateA = getMediaDate(a);
      const dateB = getMediaDate(b);

      // Undated assets remain at the end for both date sorts.
      if (dateA === null && dateB === null) return 0;
      if (dateA === null) return 1;
      if (dateB === null) return -1;

      return sortBy === "oldest"
        ? dateA - dateB
        : dateB - dateA;
    });
  }, [gallery, activeType, searchQuery, sortBy]);

  const selectedMedia = filteredGallery.find(
    (item) => item.id === selectedMediaId
  );

  const featuredMedia =
    gallery.find((item) => item.featured) ||
    gallery.find((item) => item.type === "image") ||
    gallery[0] ||
    null;

  const isAllContent = activeType === "all";

  const reels = filteredGallery.filter(
    (item) => item.type === "reel"
  );

  const videos = filteredGallery.filter(
    (item) => item.type === "video"
  );

  const imagesAndGraphics = filteredGallery.filter(
    (item) => item.type === "image" || item.type === "graphic"
  );

  const visibleItems = filteredGallery.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGallery.length;

  const openMedia = (media) => {
    setSelectedMediaId(media.id);
  };

  const closeMedia = () => {
    setSelectedMediaId(null);
  };

  const changeType = (type) => {
    setActiveType(type);
    setVisibleCount(INITIAL_ITEMS);
    closeMedia();
  };

  const changeSearch = (value) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_ITEMS);
    closeMedia();
  };

  const changeSort = (value) => {
    setSortBy(value);
    setVisibleCount(INITIAL_ITEMS);
    closeMedia();
  };

  if (!selectedProject) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#EB6F38]">
          Siluxri Creative
        </p>

        <h1 className="text-3xl font-semibold text-[#2F2E41] md:text-5xl">
          Project not found
        </h1>

        <p className="mt-4 max-w-md text-sm leading-7 text-[#2F2E41]/65">
          We couldn't find the brand you're looking for.
          Please return to our work page to explore our projects.
        </p>

        <Link
          to="/work"
          className="mt-8 rounded-full bg-[#007589] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2F2E41]"
        >
          Back to Our Work
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F2F2F2] text-[#2F2E41]">
      <ContentGalleryHero
        project={selectedProject}
        featuredMedia={featuredMedia}
        onOpenMedia={openMedia}
      />

      <section
        id="content-gallery"
        className="px-5 pb-20 pt-12 sm:px-8 md:px-12 md:pb-28 md:pt-16 lg:px-20"
      >
        {/* Page introduction */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#007589]">
              The creative collection
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Content gallery
              <span className="text-[#EB6F38]">.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#2F2E41]/65 md:text-base">
              A curated collection of the visual stories, campaigns,
              and creative assets developed for {selectedProject.name}.
            </p>
          </div>

          <p className="text-sm text-[#2F2E41]/55">
            {filteredGallery.length}{" "}
            {filteredGallery.length === 1 ? "piece" : "pieces"}
          </p>
        </motion.div>

        {/* Search */}
        <div className="mb-6">
          <label
            htmlFor="content-gallery-search"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#2F2E41]/65"
          >
            Find a creative
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-[#2F2E41]/10 bg-white px-4 transition-colors focus-within:border-[#007589] sm:max-w-xl">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 shrink-0 text-[#007589]"
              aria-hidden="true"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m16 16 4.2 4.2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>

            <input
              id="content-gallery-search"
              type="search"
              value={searchQuery}
              onChange={(event) => changeSearch(event.target.value)}
              placeholder="Search campaigns, graphics, tags..."
              className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-[#2F2E41]/35"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => changeSearch("")}
                className="shrink-0 text-xs text-[#007589] hover:text-[#EB6F38]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Media type filters */}
        <div className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            role="group"
            aria-label="Filter content by media type"
          >
            {MEDIA_FILTERS.map((filter) => {
              const isActive = activeType === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => changeType(filter.value)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full border px-5 py-3 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "border-[#007589] bg-[#007589] text-white"
                      : "border-[#2F2E41]/10 bg-white text-[#2F2E41]/70 hover:border-[#007589]/50 hover:text-[#007589]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="content-gallery-sort"
              className="shrink-0 text-xs text-[#2F2E41]/60"
            >
              Sort by
            </label>

            <select
              id="content-gallery-sort"
              value={sortBy}
              onChange={(event) => changeSort(event.target.value)}
              className="min-w-0 rounded-full border border-[#2F2E41]/10 bg-white px-4 py-3 text-xs text-[#2F2E41] outline-none transition-colors focus:border-[#007589]"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {gallery.length === 0 ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-[#2F2E41]/10 bg-white px-6 py-16 text-center">
            <span className="mb-4 text-3xl text-[#007589]">✳</span>

            <h2 className="text-xl font-semibold">
              The gallery is taking shape.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-[#2F2E41]/60">
              We're preparing the creative collection for{" "}
              {selectedProject.name}. Please check back soon.
            </p>
          </div>
        ) : filteredGallery.length === 0 ? (
          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-[#2F2E41]/10 bg-white px-6 py-16 text-center">
            <span className="mb-4 text-3xl text-[#007589]">⌕</span>

            <h2 className="text-xl font-semibold">
              No matching creatives found.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-[#2F2E41]/60">
              Try a different search term or choose another media type.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                changeType("all");
              }}
              className="mt-6 rounded-full bg-[#007589] px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-[#2F2E41]"
            >
              View all content
            </button>
          </div>
        ) : (
          <>
            {/* All content: editorial featured work */}
            
{isAllContent && !searchQuery.trim() && featuredMedia && (
  <section className="mb-20 md:mb-28">
    <div className="mb-7 flex items-end justify-between gap-5">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#EB6F38]">
          Selected project / 01
        </p>

        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          The standout.
        </h2>
      </div>

      <span className="hidden text-xs uppercase tracking-widest text-[#2F2E41]/45 sm:block">
        Featured creative
      </span>
    </div>

    <button
      type="button"
      onClick={() => openMedia(featuredMedia)}
      className="group relative block w-full overflow-hidden bg-[#2F2E41] text-left"
    >
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/8]">
        <img
          src={
            ["video", "reel"].includes(featuredMedia.type)
              ? featuredMedia.poster || ""
              : featuredMedia.src
          }
          alt={featuredMedia.alt || featuredMedia.title || ""}
          className="size-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171722]/70 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white sm:p-10 md:p-14">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#A0CBD2]">
              {featuredMedia.category || "Featured creative"}
            </p>

            <h3 className="max-w-2xl text-2xl font-semibold sm:text-4xl md:text-5xl">
              {featuredMedia.title || selectedProject.name}
            </h3>
          </div>

          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/50 text-xl transition-all group-hover:bg-white group-hover:text-[#2F2E41]">
            ↗
          </span>
        </div>
      </div>
    </button>
  </section>
)}

            {/* {isAllContent && !searchQuery.trim() && featuredMedia && (
              <section className="mb-16 md:mb-20">
                <div className="mb-6">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#EB6F38]">
                    In the spotlight
                  </p>

                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Featured creative
                    <span className="text-[#EB6F38]">.</span>
                  </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
                  <div className="min-w-0">
                    <MediaCard
                      item={featuredMedia}
                      onOpenMedia={openMedia}
                      featured
                    />
                  </div>

                  <div className="py-2 lg:px-5 lg:py-8">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#007589]">
                      {featuredMedia.category ||
                        getMediaTypeLabel(featuredMedia.type)}
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                      {getMediaTitle(featuredMedia)}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#2F2E41]/65">
                      {featuredMedia.description ||
                        `Explore a selected piece from the creative work developed for ${selectedProject.name}.`}
                    </p>

                    <button
                      type="button"
                      onClick={() => openMedia(featuredMedia)}
                      className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#2F2E41] px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-[#007589]"
                    >
                      Explore creative
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </section>
            )} */}

            {/* Reels: horizontal, portrait-friendly carousel */}
            {(isAllContent || activeType === "reel") && (
              <MediaCarousel
  title="Reels"
  description="Short-form content, social storytelling and campaign moments."
  items={reels}
  onOpenMedia={openMedia}
  type="reel"
/>
              // <MediaCarousel
              //   title="Reels"
              //   description="Short-form stories made to catch attention and keep people watching."
              //   items={reels}
              //   onOpenMedia={openMedia}
              // />
            )}

            {/* Videos: horizontal, landscape-friendly carousel */}
            {(isAllContent || activeType === "video") && (

              <MediaCarousel
  title="Videos"
  description="Brand films and longer-form visual storytelling."
  items={videos}
  onOpenMedia={openMedia}
  type="video"
/>
              // <MediaCarousel
              //   title="Videos"
              //   description="Brand films, campaign videos and moving-image stories."
              //   items={videos}
              //   onOpenMedia={openMedia}
              // />
            )}

            {/* Images and graphics: editorial layout */}
            {(isAllContent ||
              activeType === "image" ||
              activeType === "graphic") &&
              imagesAndGraphics.length > 0 && (
                <section className="mb-16 md:mb-20">
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#007589]">
                        Visual direction
                      </p>

                      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {activeType === "image"
                          ? "Images"
                          : activeType === "graphic"
                            ? "Graphics"
                            : "Images & graphics"}
                        <span className="text-[#EB6F38]">.</span>
                      </h2>
                    </div>

                    <span className="shrink-0 text-xs text-[#2F2E41]/50">
                      {imagesAndGraphics.length}{" "}
                      {imagesAndGraphics.length === 1
                        ? "piece"
                        : "pieces"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {imagesAndGraphics.map((item, index) => (
                      <div
                        key={item.id}
                        className={
                          index % 5 === 0
                            ? "sm:row-span-1 lg:col-span-2"
                            : ""
                        }
                      >
                        <MediaCard
                          item={item}
                          onOpenMedia={openMedia}
                          featured={index % 5 === 0}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* Browse all: paginated mixed-media collection */}
            {isAllContent && (
              <section className="border-t border-[#2F2E41]/10 pt-12 md:pt-16">
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#EB6F38]">
                      The full collection
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      Browse all
                      <span className="text-[#EB6F38]">.</span>
                    </h2>

                    <p className="mt-2 text-sm text-[#2F2E41]/60">
                      Explore every creative in one place.
                    </p>
                  </div>

                  <span className="text-xs text-[#2F2E41]/50">
                    Showing {visibleItems.length} of{" "}
                    {filteredGallery.length}
                  </span>
                </div>

                <MediaGrid
                  items={visibleItems}
                  onOpenMedia={openMedia}
                />

                {hasMore && (
                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount((count) =>
                          Math.min(
                            count + INITIAL_ITEMS,
                            filteredGallery.length
                          )
                        )
                      }
                      className="rounded-full border border-[#007589] px-8 py-3.5 text-sm font-medium text-[#007589] transition-all hover:bg-[#007589] hover:text-white"
                    >
                      Load more creatives
                    </button>
                  </div>
                )}
              </section>
            )}

            {/* Single-type views use a focused layout */}
            {!isAllContent && (
              <section className="mb-10">
                {activeType === "image" ||
                activeType === "graphic" ? (
                  <MediaGrid
                    items={filteredGallery}
                    onOpenMedia={openMedia}
                  />
                ) : null}

                {hasMore && (
                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount((count) =>
                          Math.min(
                            count + INITIAL_ITEMS,
                            filteredGallery.length
                          )
                        )
                      }
                      className="rounded-full border border-[#007589] px-8 py-3.5 text-sm font-medium text-[#007589] transition-all hover:bg-[#007589] hover:text-white"
                    >
                      Load more creatives
                    </button>
                  </div>
                )}
              </section>
            )}
          </>
        )}
      </section>

      <ContentGalleryCTA project={selectedProject} />

      {/* <div className="px-5 py-8 sm:px-8 md:px-12 lg:px-20 bg-white">
        <Link
          to={`/work/${selectedProject.slug}`}
          className="inline-flex items-center gap-2 text-sm text-[#2F2E41]/70 transition-colors hover:text-[#007589] border-b-1"
        >
          <span aria-hidden="true">←</span>
          Back to {selectedProject.name}
        </Link>
      </div> */}

      {selectedMedia && (
        <MediaViewer
          items={filteredGallery}
          selectedMedia={selectedMedia}
          onClose={closeMedia}
          onSelect={(media) => setSelectedMediaId(media.id)}
        />
      )}
    </main>
  );
}







































// import { useMemo, useState } from "react";
// import { Link, useParams } from "react-router";
// import { motion } from "framer-motion";
// import { project } from "../../data";

// import ContentGalleryHero from "./ContentGalleryComponents/ContentGalleryHero";
// import GalleryFilters from "./ContentGalleryComponents/GalleryFilters";
// import MediaGrid from "./ContentGalleryComponents/MediaGrid";
// import MediaViewer from "./ContentGalleryComponents/MediaViewer";
// import ContentGalleryCTA from "./ContentGalleryComponents/ContentGalleryCTA";

// export default function ContentGallery() {
//   const { slug } = useParams();
//   const [activeCategory, setActiveCategory] = useState("All content");
//   const [selectedMediaId, setSelectedMediaId] = useState(null);

//   const selectedProject = project.find(
//     (item) => item.slug === slug
//   );

//   const gallery = selectedProject?.gallery ?? [];

//   const categories = useMemo(() => {
//     const uniqueCategories = [
//       ...new Set(
//         gallery
//           .map((item) => item.category)
//           .filter(Boolean)
//       ),
//     ];

//     return ["All content", ...uniqueCategories];
//   }, [gallery]);

//   const filteredGallery = useMemo(() => {
//     if (activeCategory === "All content") {
//       return gallery;
//     }

//     return gallery.filter(
//       (item) => item.category === activeCategory
//     );
//   }, [gallery, activeCategory]);

//   const selectedMedia = filteredGallery.find(
//     (item) => item.id === selectedMediaId
//   );

//   const openMedia = (media) => {
//     setSelectedMediaId(media.id);
//   };

//   const closeMedia = () => {
//     setSelectedMediaId(null);
//   };

//   const changeCategory = (category) => {
//     setActiveCategory(category);
//     closeMedia();
//   };

//   if (!selectedProject) {
//     return (
//       <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
//         <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#EB6F38]">
//           Siluxri Creative
//         </p>

//         <h1 className="text-3xl font-semibold text-[#2F2E41] md:text-5xl">
//           Project not found
//         </h1>

//         <p className="mt-4 max-w-md text-sm leading-7 text-[#2F2E41]/65">
//           We couldn't find the brand you're looking for.
//           Please return to our work page to explore our projects.
//         </p>

//         <Link
//           to="/work"
//           className="mt-8 rounded-full bg-[#007589] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2F2E41]"
//         >
//           Back to Our Work
//         </Link>
//       </main>
//     );
//   }

//   const featuredMedia =
//     gallery.find((item) => item.featured) ?? gallery[0] ?? null;

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#F2F2F2] text-[#2F2E41]">
//       <ContentGalleryHero
//         project={selectedProject}
//         featuredMedia={featuredMedia}
//         onOpenMedia={openMedia}
//       />

//       <section
//         id="content-gallery"
//         className="px-5 pb-20 pt-12 sm:px-8 md:px-12 md:pb-28 md:pt-16 lg:px-20"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between"
//         >
//           <div>
//             <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#007589]">
//               The creative collection
//             </p>

//             <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
//               Content gallery<span className="text-[#EB6F38]">.</span>
//             </h2>

//             <p className="mt-4 max-w-xl text-sm leading-7 text-[#2F2E41]/65 md:text-base">
//               A curated collection of the visual stories, campaigns,
//               and creative assets developed for {selectedProject.name}.
//             </p>
//           </div>

//           <p className="text-sm text-[#2F2E41]/55">
//             {filteredGallery.length}{" "}
//             {filteredGallery.length === 1 ? "piece" : "pieces"}
//           </p>
//         </motion.div>

//         {gallery.length > 0 && (
//           <GalleryFilters
//             categories={categories}
//             activeCategory={activeCategory}
//             onChange={changeCategory}
//           />
//         )}

//         {filteredGallery.length > 0 ? (
//           <MediaGrid
//             items={filteredGallery}
//             onOpenMedia={openMedia}
//           />
//         ) : (
//           <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-[#2F2E41]/10 px-6 py-16 text-center">
//             <span className="mb-4 text-3xl text-[#007589]">
//               ✳
//             </span>

//             <h3 className="text-xl font-medium">
//               {gallery.length === 0
//                 ? "The gallery is taking shape."
//                 : "No content in this category yet."}
//             </h3>

//             <p className="mt-3 max-w-md text-sm leading-7 text-[#2F2E41]/60">
//               {gallery.length === 0
//                 ? `We're preparing the creative collection for ${selectedProject.name}. Please check back soon.`
//                 : "Try another category to explore more of this brand's creative work."}
//             </p>
//           </div>
//         )}
//       </section>

//       <ContentGalleryCTA project={selectedProject} />

//       <div className="px-5 py-8 sm:px-8 md:px-12 lg:px-20">
//         <Link
//           to={`/work/${selectedProject.slug}`}
//           className="inline-flex items-center gap-2 text-sm text-[#2F2E41]/70 transition-colors hover:text-[#007589]"
//         >
//           <span aria-hidden="true">←</span>
//           Back to {selectedProject.name} case study
//         </Link>
//       </div>

//       {selectedMedia && (
//         <MediaViewer
//           items={filteredGallery}
//           selectedMedia={selectedMedia}
//           onClose={closeMedia}
//           onSelect={(media) => setSelectedMediaId(media.id)}
//         />
//       )}
//     </main>
//   );
// }
































































// import { Link, useParams } from "react-router";
// import { project } from "../../data";

// export default function ContentGallery() {
//   const { slug } = useParams();

//   const selectedProject = project.find(
//     (item) => item.slug === slug
//   );

//   if (!selectedProject) {
//     return (
//       <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
//         <h1 className="text-3xl font-semibold">
//           Project not found
//         </h1>

//         <p className="mt-3 text-gray-500">
//           We couldn't find the brand you're looking for.
//         </p>

//         <Link
//           to="/work"
//           className="mt-6 underline underline-offset-4"
//         >
//           Back to Work
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen px-5 py-24 md:px-12 lg:px-20">
//       <Link
//         to={`/work/${selectedProject.slug}`}
//         className="mb-8 inline-flex items-center gap-2 text-sm"
//       >
//         <span aria-hidden="true">←</span>
//         Back to {selectedProject.name}
//       </Link>

//       <header className="mb-12">
//         <p className="mb-3 text-sm uppercase tracking-[0.2em]">
//           Content Creation
//         </p>

//         <h1 className="text-4xl font-semibold md:text-6xl">
//           {selectedProject.name}
//         </h1>

//         <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-70">
//           Explore the creative content developed for{" "}
//           {selectedProject.name}.
//         </p>
//       </header>

//       {/* Content gallery will go here */}
//       <section aria-label={`${selectedProject.name} content gallery`}>
//         <p className="text-sm opacity-60">
//           Content gallery coming soon.
//         </p>
//       </section>
//     </main>
//   );
// }
