import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiX } from "react-icons/fi";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function BrandGuideViewer({
  fileUrl,
  brandName,
  onClose,
}) {
  const viewerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const element = viewerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const pageWidth = Math.max(
    100,
    Math.min(containerWidth - 24, 900)
  );

//   if (!fileUrl) {
//   return null;
// }

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#171717]"
      role="dialog"
      aria-modal="true"
      aria-label={`${brandName} brand guidelines`}
    >
      {/* Viewer header */}
      <header className="relative z-10 flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-[#171717] px-4 py-4 text-white sm:px-8">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#A0CBD2]">
            SILUXRI / BRAND GUIDELINES
          </p>

          <h2 className="mt-1 truncate text-sm font-medium sm:text-base">
            {brandName}
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close brand guide"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#A0CBD2]"
        >
          <FiX size={20} />
        </button>
      </header>

      {/* Scrollable document */}
      <main
        ref={viewerRef}
        className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-[#303030] px-3 py-6 sm:px-8 sm:py-10"
      >
        {error ? (
          <div className="mx-auto max-w-md py-20 text-center text-white">
            <h3 className="text-lg font-medium">
              Unable to open this brand guide
            </h3>

            <p className="mt-3 text-sm text-white/60">
              Please check your connection and try again.
            </p>

            <button
              type="button"
              onClick={() => {
                setError(false);
                setNumPages(0);
              }}
              className="mt-6 border-b border-[#A0CBD2] pb-1 text-sm text-[#A0CBD2]"
            >
              Try again
            </button>
          </div>
        ) : (
          <Document
            key={fileUrl}
            file={fileUrl}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setError(false);
            }}
            onLoadError={() => setError(true)}
            loading={
              <p className="py-20 text-center text-sm text-white/60">
                Loading brand guidelines...
              </p>
            }
            error={
              <p className="py-20 text-center text-sm text-white/60">
                Unable to load the document.
              </p>
            }
            // onLoadError={(error) => {
            //   console.error("Failed to load brand guide:", error);
            //   setError("This brand guide is currently unavailable.");
            //   }}
            // onSourceError={(error) => {
            //   console.error("Brand guide source error:", error);
            //   setError("This brand guide is currently unavailable.");
            // }}
            className="flex flex-col items-center gap-5"
          >
            {Array.from(
              { length: numPages },
              (_, index) => (
                <div
                  key={`${fileUrl}-${index + 1}`}
                  className="overflow-hidden bg-white shadow-2xl"
                  style={{ width: pageWidth, maxWidth: "100%" }}
                >
                  <Page
                    pageNumber={index + 1}
                    width={pageWidth}
                    renderTextLayer
                    renderAnnotationLayer
                    loading={
                      <div className="p-10 text-center text-sm text-neutral-500">
                        Loading page {index + 1}...
                      </div>
                    }
                  />
                </div>
              )
            )}
          </Document>
        )}
      </main>

      {/* Minimal footer */}
      <footer className="flex shrink-0 items-center justify-center border-t border-white/10 bg-[#171717] px-4 py-3 text-xs text-white/50">
        {numPages > 0
          ? `${numPages} ${numPages === 1 ? "page" : "pages"} · ${brandName}`
          : "Brand presentation"}
      </footer>
    </div>
  );
}
