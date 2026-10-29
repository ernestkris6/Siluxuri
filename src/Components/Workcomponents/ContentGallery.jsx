
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { project } from "../../data";

import ContentGalleryHero from "./ContentGalleryComponents/ContentGalleryHero";
import GalleryFilters from "./ContentGalleryComponents/GalleryFilters";
import MediaGrid from "./ContentGalleryComponents/MediaGrid";
import MediaViewer from "./ContentGalleryComponents/MediaViewer";
import ContentGalleryCTA from "./ContentGalleryComponents/ContentGalleryCTA";

export default function ContentGallery() {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState("All content");
  const [selectedMediaId, setSelectedMediaId] = useState(null);

  const selectedProject = project.find(
    (item) => item.slug === slug
  );

  const gallery = selectedProject?.gallery ?? [];

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        gallery
          .map((item) => item.category)
          .filter(Boolean)
      ),
    ];

    return ["All content", ...uniqueCategories];
  }, [gallery]);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All content") {
      return gallery;
    }

    return gallery.filter(
      (item) => item.category === activeCategory
    );
  }, [gallery, activeCategory]);

  const selectedMedia = filteredGallery.find(
    (item) => item.id === selectedMediaId
  );

  const openMedia = (media) => {
    setSelectedMediaId(media.id);
  };

  const closeMedia = () => {
    setSelectedMediaId(null);
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
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

  const featuredMedia =
    gallery.find((item) => item.featured) ?? gallery[0] ?? null;

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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#007589]">
              The creative collection
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Content gallery<span className="text-[#EB6F38]">.</span>
            </h2>

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

        {gallery.length > 0 && (
          <GalleryFilters
            categories={categories}
            activeCategory={activeCategory}
            onChange={changeCategory}
          />
        )}

        {filteredGallery.length > 0 ? (
          <MediaGrid
            items={filteredGallery}
            onOpenMedia={openMedia}
          />
        ) : (
          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-[#2F2E41]/10 px-6 py-16 text-center">
            <span className="mb-4 text-3xl text-[#007589]">
              ✳
            </span>

            <h3 className="text-xl font-medium">
              {gallery.length === 0
                ? "The gallery is taking shape."
                : "No content in this category yet."}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-[#2F2E41]/60">
              {gallery.length === 0
                ? `We're preparing the creative collection for ${selectedProject.name}. Please check back soon.`
                : "Try another category to explore more of this brand's creative work."}
            </p>
          </div>
        )}
      </section>

      <ContentGalleryCTA project={selectedProject} />

      <div className="px-5 py-8 sm:px-8 md:px-12 lg:px-20">
        <Link
          to={`/work/${selectedProject.slug}`}
          className="inline-flex items-center gap-2 text-sm text-[#2F2E41]/70 transition-colors hover:text-[#007589]"
        >
          <span aria-hidden="true">←</span>
          Back to {selectedProject.name} case study
        </Link>
      </div>

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
