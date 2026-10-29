
export default function GalleryFilters({
  categories = [],
  activeCategory,
  onChange,
}) {
  if (!categories.length) return null;

  return (
    <div
      className="mb-8 flex gap-2 overflow-x-auto pb-3 md:mb-10"
      role="group"
      aria-label="Filter gallery content by category"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`shrink-0 rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
              isActive
                ? "border-[#007589] bg-[#007589] text-white"
                : "border-[#2F2E41]/15 bg-transparent text-[#2F2E41]/70 hover:border-[#007589] hover:text-[#007589]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}





























// export default function GalleryFilters({
//   categories,
//   activeCategory,
//   onChange,
// }) {
//   return (
//     <div
//       className="mb-8 flex gap-2 overflow-x-auto pb-3 md:mb-10"
//       aria-label="Filter gallery content"
//     >
//       {categories.map((category) => {
//         const isActive = activeCategory === category;

//         return (
//           <button
//             key={category}
//             type="button"
//             onClick={() => onChange(category)}
//             aria-pressed={isActive}
//             className={`shrink-0 rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
//               isActive
//                 ? "border-[#007589] bg-[#007589] text-white"
//                 : "border-[#2F2E41]/15 bg-transparent text-[#2F2E41]/70 hover:border-[#007589] hover:text-[#007589]"
//             }`}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// }
