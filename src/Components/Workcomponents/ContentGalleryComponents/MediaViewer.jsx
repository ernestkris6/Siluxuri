
import { useEffect, useState } from "react";

export default function MediaViewer({
  items,
  selectedMedia,
  onClose,
  onSelect,
}) {
  const [imageZoomed, setImageZoomed] = useState(false);

  const currentIndex = items.findIndex(
    (item) => item.id === selectedMedia.id
  );

  const isVideo = selectedMedia.type === "video";

  const goTo = (direction) => {
    if (items.length < 2) return;

    const nextIndex =
      (currentIndex + direction + items.length) % items.length;

    setImageZoomed(false);
    onSelect(items[nextIndex]);
  };

  useEffect(() => {
    setImageZoomed(false);
  }, [selectedMedia.id]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowLeft") goTo(-1);

      if (event.key === "ArrowRight") goTo(1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, items, onClose, onSelect]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171722]/95 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={selectedMedia.title || "Media viewer"}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close media viewer"
        className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:right-7 sm:top-7"
      >
        ×
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Previous item"
            className="absolute left-2 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:left-5 sm:size-12"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Next item"
            className="absolute right-2 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:right-5 sm:size-12"
          >
            ›
          </button>
        </>
      )}

      <div className="flex max-h-[90vh] w-full max-w-6xl flex-col items-center">
        {isVideo ? (
          <video
            key={selectedMedia.id}
            src={selectedMedia.src}
            poster={selectedMedia.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="max-h-[76vh] max-w-full rounded-lg object-contain"
          >
            Your browser does not support HTML video.
          </video>
        ) : (
          <img
            key={selectedMedia.id}
            src={selectedMedia.src}
            alt={selectedMedia.alt || selectedMedia.title || ""}
            onClick={() => setImageZoomed((value) => !value)}
            className={`max-h-[76vh] max-w-full rounded-lg object-contain transition-transform duration-300 ${
              imageZoomed
                ? "cursor-zoom-out scale-[1.05]"
                : "cursor-zoom-in"
            }`}
          />
        )}

        <div className="mt-5 max-w-2xl px-12 text-center text-white">
          {selectedMedia.title && (
            <h3 className="text-base font-medium sm:text-lg">
              {selectedMedia.title}
            </h3>
          )}

          <p className="mt-1 text-xs text-white/60 sm:text-sm">
            {selectedMedia.category || (isVideo ? "Video" : "Photography")}
            {items.length > 1 && ` · ${currentIndex + 1} of ${items.length}`}
          </p>
        </div>
      </div>
    </div>
  );
}
