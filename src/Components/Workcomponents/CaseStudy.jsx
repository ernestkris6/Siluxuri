import { Link, useParams } from "react-router";
import { project } from "../../data";
import BrandGuideViewer from "./BrandGuideViewer";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Animated project metrics
function CountUpMetric({ value, label, theme, index }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const prefersReducedMotion = useReducedMotion();

  const [displayValue, setDisplayValue] = useState(
    prefersReducedMotion ? String(value) : "0"
  );

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(String(value));
      return;
    }

    const originalValue = String(value);
    const match = originalValue.match(/^([\d,]+(?:\.\d+)?)(.*)$/);

    if (!match) {
      setDisplayValue(originalValue);
      return;
    }

    const numberText = match[1];
    const suffix = match[2];
    const target = Number(numberText.replace(/,/g, ""));

    const decimalPlaces = numberText.includes(".")
      ? numberText.split(".")[1].length
      : 0;

    if (!Number.isFinite(target)) {
      setDisplayValue(originalValue);
      return;
    }

    const duration = 1600;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const current = target * easedProgress;

      let formattedNumber;

      if (decimalPlaces > 0) {
        formattedNumber = current.toLocaleString("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        });
      } else {
        formattedNumber = Math.floor(current).toLocaleString(
          "en-US"
        );
      }

      setDisplayValue(
        progress === 1
          ? originalValue
          : `${formattedNumber}${suffix}`
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 35,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-t pt-6"
      style={{
        borderColor: `${theme.foreground}30`,
      }}
    >
      <p
        aria-label={`${label}: ${value}`}
        style={{
          fontFamily: theme.displayFont,
          fontVariantNumeric: "tabular-nums",
        }}
        className="text-4xl sm:text-4xl lg:text-5xl"
      >
        {displayValue}
      </p>

      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
        {label}
      </p>
    </motion.div>
  );
}




export default function CaseStudy() {
  const { slug } = useParams();

  const [expandedService, setExpandedService] = useState(null);
  const [isBrandGuideOpen, setIsBrandGuideOpen] = useState(false);

  // route for ios

const openBrandGuide = (url) => {
  if (!url) return;

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" &&
      navigator.maxTouchPoints > 1);

  if (isIOS) {
    window.location.href = url;
    return;
  }

  setIsBrandGuideOpen(true);
};


  // Find the selected project.
  const selectedProject = project.find(
    (item) => item.slug === slug
  );

  // Fallback for an invalid project URL.
  if (!selectedProject) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
        <div>
          <h1 className="text-5xl text-blue">
            Project not found.
          </h1>

          <Link
            to="/work"
            className="mt-6 inline-block text-magenta underline"
          >
            Back to Works
          </Link>
        </div>
      </main>
    );
  }

  // Brand theme with safe defaults.
  const theme = selectedProject.theme || {
    background: "#F2F2F2",
    foreground: "#2F2E41",
    accent: "#007589",
    secondary: "#EB6F38",
    displayFont: "Roboto",
  };

  const metrics = selectedProject.metrics || [];
  const hasMetrics = metrics.length > 0;
  const services = selectedProject.services || [];
  const results = selectedProject.results || [];

  // PDF path for the selected project.
  // const brandGuideUrl =
  //   selectedProject.brandGuide ||
  //   `/brand-guides/${selectedProject.slug}.pdf`;

  const brandGuideUrl = selectedProject.brandGuide || null;

  return (
    <>
      <main
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
        }}
        className="overflow-hidden"
      >
        {/* =========================
            CASE STUDY HERO
        ========================== */}
        <section className="pb-16 sm:pb-20 md:pb-24">
          <div className="w-full overflow-hidden">
            {selectedProject.cover && (
              <motion.img
                src={selectedProject.cover}
                alt={`${selectedProject.name} project cover`}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[35vh] min-h-[320px] w-full object-cover md:h-[45vh] md:min-h-[450px]"
              />
            )}
          </div>

          <div className="px-5 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  to="/work"
                  className="my-8 inline-flex items-center gap-2 border-b pb-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
                >
                  <FiArrowLeft />
                  Back to Works
                </Link>
              </motion.div>

              <div className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-8 flex items-center gap-3"
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.25em]"
                    style={{ color: theme.accent }}
                  >
                    Selected Project
                  </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
                  <motion.h1
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ fontFamily: theme.displayFont }}
                    className="text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl"
                  >
                    {selectedProject.name}
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-md"
                  >
                    <p className="text-sm leading-7 opacity-75">
                      {selectedProject.message}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="mt-8 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.15em]"
                >
                  <span>{selectedProject.category}</span>
                  <span>{selectedProject.location}</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            ABOUT THE BRAND
        ========================== */}
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              01 / The Brand
            </p>

            <div>
              <h2
                style={{ fontFamily: theme.displayFont }}
                className="text-3xl leading-tight sm:text-4xl"
              >
                Building a brand with intention.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </section>

        {/* =========================
            OUR CONTRIBUTION
        ========================== */}
        <section
          className="scroll-mt-20 px-5 py-20 sm:px-8 md:py-28 lg:px-16"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.foreground }}
            >
              02 / Our Contribution
            </motion.p>

            <div
              className="divide-y"
              style={{ borderColor: `${theme.foreground}20` }}
            >
              {services.map((service, index) => {
                const serviceName = String(service).toLowerCase();

                // Accept both service labels.
                const isBrandIdentity =
                  serviceName.includes("brand identity") ||
                  serviceName.includes("brand guide");

                const isSocialMedia =
                  serviceName.includes("social media");

                const isContentCreation =
                  serviceName.includes("content creation");

                const isInfluencerMarketing =
                  serviceName.includes("influencer");

                const isMerchandiseDesign = 
                  serviceName.includes("merchandise design")

                const isPaidAdvertising =
                  serviceName.includes("paid advertising") ||
                  serviceName.includes("paid ads");

                const isExpandable =
                  isInfluencerMarketing || isPaidAdvertising || isMerchandiseDesign;

                const isExpanded = expandedService === service;

                const detailText = isInfluencerMarketing
                  ? selectedProject.influencerMarketingDetails
                  : isPaidAdvertising
                    ? selectedProject.paidAdvertisingDetails
                    : selectedProject.merchandiseDesignDetails;

                
                const detailFallback = isInfluencerMarketing
                  ? "Add details about creator partnerships, influencer collaborations, campaign strategy, and results for this brand."
                  : isPaidAdvertising
                    ? "Add details about the advertising strategy, campaign creatives, audience targeting, and performance results for this brand."
                    : "Explore the merchandise designed for this brand, including branded apparel, promotional products, creative concepts, and visual identity applications.";

                // const detailText = isInfluencerMarketing
                //   ? selectedProject.influencerMarketingDetails :
                //    isPaidAdvertising ? isMerchandiseDesign : selectedProject.paidAvertisingDetails : selectedProject.merchandiseDesignDetails;

                // const detailFallback = isInfluencerMarketing
                //   ? "Add details about creator partnerships, influencer collaborations, campaign strategy, and results for this brand."
                //   : "Add details about the advertising strategy, campaign creatives, audience targeting, and performance results for this brand.";

                const rowContent = (
                  <>
                    <div className="flex items-center gap-6">
                      <span className="text-xs opacity-50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        style={{ fontFamily: theme.displayFont }}
                        className="text-2xl sm:text-3xl cursor-pointer"
                      >
                        {service}
                      </h3>
                    </div>

                    {/* rotate arrow too */}
                    <motion.span
                      animate={
                        isExpandable
                          ? { rotate: isExpanded ? 45 : 0 }
                          : undefined
                      }
                      whileHover={
                        !isExpandable ? { x: 4, y: -4 } : undefined
                      }
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-xl"
                      style={{ color: theme.accent }}
                      aria-hidden="true"
                    >
                      <FiArrowUpRight />
                    </motion.span>
                  </>
                );

                return (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: 6 }}
                  >
                    {/* BRAND GUIDE: open the in-site PDF viewer */}
                    {isBrandIdentity && brandGuideUrl  && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openBrandGuide(brandGuideUrl)}}
                        className="flex w-full items-center justify-between gap-5 py-6 text-left transition-opacity hover:opacity-75"
                        aria-label={`View ${selectedProject.name} brand guide`}
                      >
                        {rowContent}
                      </button>
                    )}

                    {/* SOCIAL MEDIA: scroll to the outcome */}
                    {isSocialMedia && (
                      <button
                        type="button"
                        onClick={() => {
                          document
                            .getElementById("outcome")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}
                        className="flex w-full items-center justify-between gap-5 py-6 text-left transition-opacity hover:opacity-75"
                        aria-label="Scroll to the outcome section"
                      >
                        {rowContent}
                      </button>
                    )}

                    {/* CONTENT CREATION: future gallery page */}
                    {isContentCreation && (
                      <Link
                        to={`/work/${selectedProject.slug}/content`}
                        className="flex w-full items-center justify-between gap-5 py-6 transition-opacity hover:opacity-75"
                        aria-label={`View ${selectedProject.name} content creation portfolio`}
                      >
                        {rowContent}
                      </Link>
                    )}

                    {/* INFLUENCER MARKETING / PAID ADVERTISING */}
                    {isExpandable && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedService(
                              isExpanded ? null : service
                            )
                          }
                          aria-expanded={isExpanded}
                          className="flex w-full items-center justify-between gap-5 py-6 text-left transition-opacity hover:opacity-75"
                        >
                          {rowContent}
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? "auto" : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                          aria-hidden={!isExpanded}
                        >
                          <div className="pb-7 pl-10 sm:pl-12">
                            <p className="max-w-2xl text-sm leading-7 opacity-80">
                              {detailText || detailFallback}
                            </p>
                          </div>
                        </motion.div>
                      </>
                    )}

                    {/* Other services remain visible */}
                    {!isBrandIdentity &&
                      !isSocialMedia &&
                      !isContentCreation &&
                      !isExpandable && (
                        <div className="flex items-center justify-between gap-5 py-6">
                          {rowContent}
                        </div>
                      )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================
            THE IMPACT
        ========================== */}
        {hasMetrics && (
          <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: theme.accent }}
              >
                03 / The Impact
              </motion.p>

              <div className="grid gap-8 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <CountUpMetric
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                    theme={theme}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================
            THE OUTCOME
        ========================== */}
        <section
          id="outcome"
          className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              {hasMetrics ? "04" : "03"} / The Outcome
            </p>

            <div>
              <h2
                style={{ fontFamily: theme.displayFont }}
                className="text-3xl leading-tight sm:text-4xl"
              >
                What we helped achieve.
              </h2>

              <div
                className="mt-8 divide-y"
                style={{ borderColor: `${theme.foreground}20` }}
              >
                {results.map((result, index) => (
                  <motion.div
                    key={result}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex gap-5 py-5"
                  >
                    <span
                      className="text-xs"
                      style={{ color: theme.accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-base leading-7 opacity-80">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================
            NEXT PROJECT
        ========================== */}
        <section
          className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
          style={{
            backgroundColor: theme.foreground,
            color: theme.background,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-7xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] opacity-60">
              Continue Exploring
            </p>

            <h2
              style={{ fontFamily: theme.displayFont }}
              className="mt-5 text-4xl sm:text-5xl"
            >
              More of our work.
            </h2>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-block"
            >
              <Link
                to="/work"
                className="mt-8 inline-flex items-center gap-4 border-b pb-2 text-sm"
                style={{ borderColor: theme.secondary }}
              >
                Back to all projects
                <span>
                  <FiArrowUpRight />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* PDF VIEWER: outside the main layout and overflow container */}
      {isBrandGuideOpen && brandGuideUrl && (
        <BrandGuideViewer
          fileUrl={brandGuideUrl}
          brandName={selectedProject.name}
          onClose={() => setIsBrandGuideOpen(false)}
        />
      )}
    </>
  );
}














































//22
// import { Link, useParams } from "react-router";
// import { project } from "../../data";
// import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
// import {
//   motion,
//   useInView,
//   useReducedMotion,
// } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import BrandGuideViewer from "./BrandGuideViewer";

// // Animated project metrics
// function CountUpMetric({ value, label, theme, index }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     once: true,
//     amount: 0.3,
//   });
//   const prefersReducedMotion = useReducedMotion();

//   const [displayValue, setDisplayValue] = useState(
//     prefersReducedMotion ? String(value) : "0"
//   );

//   useEffect(() => {
//     if (!isInView) return;

//     if (prefersReducedMotion) {
//       setDisplayValue(String(value));
//       return;
//     }

//     const originalValue = String(value);
//     const match = originalValue.match(/^([\d,]+(?:\.\d+)?)(.*)$/);

//     if (!match) {
//       setDisplayValue(originalValue);
//       return;
//     }

//     const numberText = match[1];
//     const suffix = match[2];
//     const target = Number(numberText.replace(/,/g, ""));
//     const decimalPlaces = numberText.includes(".")
//       ? numberText.split(".")[1].length
//       : 0;

//     if (!Number.isFinite(target)) {
//       setDisplayValue(originalValue);
//       return;
//     }

//     const duration = 1600;
//     let startTime;
//     let animationFrame;

//     const animate = (timestamp) => {
//       if (startTime === undefined) startTime = timestamp;

//       const progress = Math.min(
//         (timestamp - startTime) / duration,
//         1
//       );

//       const easedProgress = 1 - Math.pow(1 - progress, 4);
//       const current = target * easedProgress;

//       let formattedNumber;

//       if (decimalPlaces > 0) {
//         formattedNumber = current.toLocaleString("en-US", {
//           minimumFractionDigits: decimalPlaces,
//           maximumFractionDigits: decimalPlaces,
//         });
//       } else {
//         formattedNumber = Math.floor(current).toLocaleString(
//           "en-US"
//         );
//       }

//       setDisplayValue(
//         progress === 1
//           ? originalValue
//           : `${formattedNumber}${suffix}`
//       );

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [isInView, value, prefersReducedMotion]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{
//         opacity: 0,
//         y: prefersReducedMotion ? 0 : 35,
//       }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{
//         duration: prefersReducedMotion ? 0 : 0.7,
//         delay: prefersReducedMotion ? 0 : index * 0.1,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="border-t pt-6"
//       style={{
//         borderColor: `${theme.foreground}30`,
//       }}
//     >
//       <p
//         aria-label={`${label}: ${value}`}
//         style={{
//           fontFamily: theme.displayFont,
//           fontVariantNumeric: "tabular-nums",
//         }}
//         className="text-4xl sm:text-4xl lg:text-5xl"
//       >
//         {displayValue}
//       </p>

//       <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
//         {label}
//       </p>
//     </motion.div>
//   );
// }

// export default function CaseStudy() {
//   const { slug } = useParams();
//   const [expandedService, setExpandedService] = useState(null);
//   const [isBrandGuideOpen, setIsBrandGuideOpen] =
//   useState(false);

//   // Find the selected project.
//   const selectedProject = project.find(
//     (item) => item.slug === slug
//   );

//   // Fallback for an invalid project URL.
//   if (!selectedProject) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
//         <div>
//           <h1 className="text-5xl text-blue">
//             Project not found.
//           </h1>

//           <Link
//             to="/work"
//             className="mt-6 inline-block text-magenta underline"
//           >
//             Back to Works
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   // Brand theme with safe defaults.
//   const theme = selectedProject.theme || {
//     background: "#F2F2F2",
//     foreground: "#2F2E41",
//     accent: "#007589",
//     secondary: "#EB6F38",
//     displayFont: "Roboto",
//   };

//   const metrics = selectedProject.metrics || [];
//   const hasMetrics = metrics.length > 0;
//   const services = selectedProject.services || [];
//   const results = selectedProject.results || [];

//   return (
//     <main
//       style={{
//         backgroundColor: theme.background,
//         color: theme.foreground,
//       }}
//       className="overflow-hidden"
//     >
//       {/* =========================
//           CASE STUDY HERO
//       ========================== */}
//       <section className="pb-16 sm:pb-20 md:pb-24">
//         <div className="w-full overflow-hidden">
//           {selectedProject.cover && (
//             <motion.img
//               src={selectedProject.cover}
//               alt={`${selectedProject.name} project cover`}
//               initial={{ scale: 1.08 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 duration: 1.4,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="h-[35vh] min-h-[320px] w-full object-cover md:h-[45vh] md:min-h-[450px]"
//             />
//           )}
//         </div>

//         <div className="px-5 sm:px-8 lg:px-16">
//           <div className="mx-auto max-w-7xl">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.25,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               <Link
//                 to="/work"
//                 className="my-8 inline-flex items-center gap-2 border-b pb-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
//               >
//                 <FiArrowLeft />
//                 Back to Works
//               </Link>
//             </motion.div>

//             <div className="mt-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.35,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="mb-8 flex items-center gap-3"
//               >
//                 <p
//                   className="text-xs font-semibold uppercase tracking-[0.25em]"
//                   style={{ color: theme.accent }}
//                 >
//                   Selected Project
//                 </p>
//               </motion.div>

//               <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
//                 <motion.h1
//                   initial={{ opacity: 0, y: 45 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.9,
//                     delay: 0.45,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   style={{ fontFamily: theme.displayFont }}
//                   className="text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl"
//                 >
//                   {selectedProject.name}
//                 </motion.h1>

//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.65,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="max-w-md"
//                 >
//                   <p className="text-sm leading-7 opacity-75">
//                     {selectedProject.message}
//                   </p>
//                 </motion.div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.6 }}
//                 transition={{ duration: 0.8, delay: 0.9 }}
//                 className="mt-8 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.15em]"
//               >
//                 <span>{selectedProject.category}</span>
//                 <span>{selectedProject.location}</span>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================
//           ABOUT THE BRAND
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
//         >
//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{ color: theme.accent }}
//           >
//             01 / The Brand
//           </p>

//           <div>
//             <h2
//               style={{ fontFamily: theme.displayFont }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               Building a brand with intention.
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">
//               {selectedProject.description}
//             </p>
//           </div>
//         </motion.div>
//       </section>

//       {/* =========================
//           OUR CONTRIBUTION
//       ========================== */}
//       <section
//         className="scroll-mt-20 px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{ backgroundColor: theme.secondary }}
//       >
//         <div className="mx-auto max-w-7xl">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{ color: theme.foreground }}
//           >
//             02 / Our Contribution
//           </motion.p>

//           <div
//             className="divide-y"
//             style={{ borderColor: `${theme.foreground}20` }}
//           >
//             {services.map((service, index) => {
//               const serviceName = String(service).toLowerCase();

//               const isBrandIdentity =
//                 serviceName.includes("brand identity") || serviceName.includes("brand guide");

//               const isSocialMedia =
//                 serviceName.includes("social media");

//               const isContentCreation =
//                 serviceName.includes("content creation");

//               const isInfluencerMarketing =
//                 serviceName.includes("influencer");

//               const isPaidAdvertising =
//                 serviceName.includes("paid advertising") ||
//                 serviceName.includes("paid ads");

//               const isExpandable =
//                 isInfluencerMarketing || isPaidAdvertising;

//               const isExpanded = expandedService === service;

//               const brandGuideUrl =
//                 selectedProject.brandGuide ||
//                 `/brand-guides/${selectedProject.slug}.pdf`;

//               const detailText = isInfluencerMarketing
//                 ? selectedProject.influencerMarketingDetails
//                 : selectedProject.paidAdvertisingDetails;

//               const detailFallback = isInfluencerMarketing
//                 ? "Add details about creator partnerships, influencer collaborations, campaign strategy, and results for this brand."
//                 : "Add details about the advertising strategy, campaign creatives, audience targeting, and performance results for this brand.";

//               const rowContent = (
//                 <>
//                   <div className="flex items-center gap-6">
//                     <span className="text-xs opacity-50">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <h3
//                       style={{ fontFamily: theme.displayFont }}
//                       className="text-2xl sm:text-3xl"
//                     >
//                       {service}
//                     </h3>
//                   </div>

//                   <motion.span
//                     animate={
//                       isExpandable
//                         ? { rotate: isExpanded ? 45 : 0 }
//                         : undefined
//                     }
//                     whileHover={
//                       !isExpandable ? { x: 4, y: -4 } : undefined
//                     }
//                     transition={{ duration: 0.2 }}
//                     className="shrink-0 text-xl"
//                     style={{ color: theme.accent }}
//                     aria-hidden="true"
//                   >
//                     <FiArrowUpRight />
//                   </motion.span>
//                 </>
//               );

//               return (
//                 <motion.div
//                   key={service}
//                   initial={{ opacity: 0, x: -25 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{
//                     duration: 0.65,
//                     delay: index * 0.08,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   whileHover={{ x: 6 }}
//                 >
//                   {/* BRAND IDENTITY: open the brand guide */}
//                   {/* {isBrandIdentity && (
//                     <a
//                       href={brandGuideUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex w-full items-center justify-between gap-5 py-6 text-left transition-opacity hover:opacity-75"
//                       aria-label={`Open ${selectedProject.name} brand guide`}
//                     >
//                       {rowContent}
//                     </a>
//                   )} */}

//                   {isBrandIdentity && (
//                   <button
//                     type="button"
//                     onClick={() => setIsBrandGuideOpen(true)}
//                     className="flex w-full items-center justify-between gap-5 py-6 text-left transition-opacity hover:opacity-75"
//                     aria-label={`View ${selectedProject.name} brand guide`}
//                   >
//                     {rowContent}
//                   </button>
//                   )}

//                   {isBrandGuideOpen && (
//                     <BrandGuideViewer
//                       fileUrl={brandGuideUrl}
//                       brandName={selectedProject.name}
//                       onClose={() => setIsBrandGuideOpen(false)}
//                     />
//                    )}

                  

//                   {/* SOCIAL MEDIA: scroll to contribution */}
//                   {isSocialMedia && (
//                     <button
//                       type="button"
//                       onClick={() => {
//                         document
//                           .getElementById("outcome")
//                           ?.scrollIntoView({
//                             behavior: "smooth",
//                             block: "start",
//                           });
//                       }}
//                       className="flex w-full items-center justify-between gap-5 py-6 text-left transition-opacity hover:opacity-75"
//                       aria-label="Scroll to our contribution section"
//                     >
//                       {rowContent}
//                     </button>
//                   )}

//                   {/* CONTENT CREATION: future gallery page */}
//                   {isContentCreation && (
//                     <Link
//                       to={`/work/${selectedProject.slug}/content`}
//                       className="flex w-full items-center justify-between gap-5 py-6 transition-opacity hover:opacity-75"
//                       aria-label={`View ${selectedProject.name} content creation portfolio`}
//                     >
//                       {rowContent}
//                     </Link>
//                   )}

//                   {/* INFLUENCER MARKETING / PAID ADVERTISING */}
//                   {isExpandable && (
//                     <>
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setExpandedService(
//                             isExpanded ? null : service
//                           )
//                         }
//                         aria-expanded={isExpanded}
//                         className="flex w-full items-center justify-between gap-5 py-6 text-left transition-opacity hover:opacity-75"
//                       >
//                         {rowContent}
//                       </button>

//                       <motion.div
//                         initial={false}
//                         animate={{
//                           height: isExpanded ? "auto" : 0,
//                           opacity: isExpanded ? 1 : 0,
//                         }}
//                         transition={{
//                           duration: 0.35,
//                           ease: [0.22, 1, 0.36, 1],
//                         }}
//                         className="overflow-hidden"
//                         aria-hidden={!isExpanded}
//                       >
//                         <div className="pb-7 pl-10 sm:pl-12">
//                           <p className="max-w-2xl text-sm leading-7 opacity-80">
//                             {detailText || detailFallback}
//                           </p>
//                         </div>
//                       </motion.div>
//                     </>
//                   )}

//                   {/* Other services remain visible */}
//                   {!isBrandIdentity &&
//                     !isSocialMedia &&
//                     !isContentCreation &&
//                     !isExpandable && (
//                       <div className="flex items-center justify-between gap-5 py-6">
//                         {rowContent}
//                       </div>
//                     )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================
//           THE IMPACT
//       ========================== */}
//       {hasMetrics && (
//         <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//           <div className="mx-auto max-w-7xl">
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//               style={{ color: theme.accent }}
//             >
//               03 / The Impact
//             </motion.p>

//             <div className="grid gap-8 sm:grid-cols-3">
//               {metrics.map((metric, index) => (
//                 <CountUpMetric
//                   key={metric.label}
//                   value={metric.value}
//                   label={metric.label}
//                   theme={theme}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* =========================
//           THE OUTCOME
//       ========================== */}
//       <section 
//         id="outcome"
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
//         >
//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{ color: theme.accent }}
//           >
//             {hasMetrics ? "04" : "03"} / The Outcome
//           </p>

//           <div>
//             <h2
//               style={{ fontFamily: theme.displayFont }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               What we helped achieve.
//             </h2>

//             <div
//               className="mt-8 divide-y"
//               style={{ borderColor: `${theme.foreground}20` }}
//             >
//               {results.map((result, index) => (
//                 <motion.div
//                   key={result}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.25 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.08,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="flex gap-5 py-5"
//                 >
//                   <span
//                     className="text-xs"
//                     style={{ color: theme.accent }}
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <p className="text-base leading-7 opacity-80">
//                     {result}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* =========================
//           NEXT PROJECT
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{
//           backgroundColor: theme.foreground,
//           color: theme.background,
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto max-w-7xl"
//         >
//           <p className="text-xs uppercase tracking-[0.2em] opacity-60">
//             Continue Exploring
//           </p>

//           <h2
//             style={{ fontFamily: theme.displayFont }}
//             className="mt-5 text-4xl sm:text-5xl"
//           >
//             More of our work.
//           </h2>

//           <motion.div
//             whileHover={{ x: 5 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="inline-block"
//           >
//             <Link
//               to="/work"
//               className="mt-8 inline-flex items-center gap-4 border-b pb-2 text-sm"
//               style={{ borderColor: theme.secondary }}
//             >
//               Back to all projects
//               <span>
//                 <FiArrowUpRight />
//               </span>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }


















































// import { Link, useParams } from "react-router";
// import { project } from "../../data";
// import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
// import {
//   motion,
//   useInView,
//   useReducedMotion,
// } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// // CHANGED 1: New count-up component for animated project metrics.
// // Supports values such as "31.32K", "4.08M", and "1,248".
// function CountUpMetric({ value, label, theme, index }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     once: true,
//     amount: 0.3,
//   });
//   const prefersReducedMotion = useReducedMotion();

//   const [displayValue, setDisplayValue] = useState(
//     prefersReducedMotion ? String(value) : "0"
//   );

//   useEffect(() => {
//     if (!isInView) return;

//     // Respect accessibility preferences for reduced motion.
//     if (prefersReducedMotion) {
//       setDisplayValue(String(value));
//       return;
//     }

//     const originalValue = String(value);
//     const match = originalValue.match(
//       /^([\d,]+(?:\.\d+)?)(.*)$/
//     );

//     // If the value isn't numeric, display it without animation.
//     if (!match) {
//       setDisplayValue(originalValue);
//       return;
//     }

//     const numberText = match[1];
//     const suffix = match[2];
//     const target = Number(numberText.replace(/,/g, ""));
//     const decimalPlaces = numberText.includes(".")
//       ? numberText.split(".")[1].length
//       : 0;

//     if (!Number.isFinite(target)) {
//       setDisplayValue(originalValue);
//       return;
//     }

//     const duration = 1600;
//     let startTime;
//     let animationFrame;

//     const animate = (timestamp) => {
//       if (startTime === undefined) {
//         startTime = timestamp;
//       }

//       const progress = Math.min(
//         (timestamp - startTime) / duration,
//         1
//       );

//       // Smooth ease-out animation.
//       const easedProgress = 1 - Math.pow(1 - progress, 4);
//       const current = target * easedProgress;

//       let formattedNumber;

//       if (decimalPlaces > 0) {
//         formattedNumber = current.toLocaleString("en-US", {
//           minimumFractionDigits: decimalPlaces,
//           maximumFractionDigits: decimalPlaces,
//         });
//       } else {
//         formattedNumber = Math.floor(current).toLocaleString(
//           "en-US"
//         );
//       }

//       // CHANGED 2: Preserve the original formatting at completion.
//       setDisplayValue(
//         progress === 1
//           ? originalValue
//           : `${formattedNumber}${suffix}`
//       );

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [isInView, value, prefersReducedMotion]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{
//         opacity: 0,
//         y: prefersReducedMotion ? 0 : 35,
//       }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{
//         duration: prefersReducedMotion ? 0 : 0.7,
//         delay: prefersReducedMotion ? 0 : index * 0.1,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="border-t pt-6"
//       style={{
//         borderColor: `${theme.foreground}30`,
//       }}
//     >
//       <p
//         aria-label={`${label}: ${value}`}
//         style={{
//           fontFamily: theme.displayFont,
//           fontVariantNumeric: "tabular-nums",
//         }}
//         className="text-4xl sm:text-4xl lg:text-5xl"
//       >
//         {displayValue}
//       </p>

//       <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
//         {label}
//       </p>
//     </motion.div>
//   );
// }

// export default function CaseStudy() {
//   const { slug } = useParams();

//   // Find the selected project from the URL.
//   const selectedProject = project.find(
//     (item) => item.slug === slug
//   );

//   // Simple fallback for an invalid project URL.
//   if (!selectedProject) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
//         <div>
//           <h1 className="text-5xl text-blue">
//             Project not found.
//           </h1>

//           <Link
//             to="/work"
//             className="mt-6 inline-block text-magenta underline"
//           >
//             Back to Works
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   // Brand theme with safe defaults.
//   const theme = selectedProject.theme || {
//     background: "#F2F2F2",
//     foreground: "#2F2E41",
//     accent: "#007589",
//     secondary: "#EB6F38",
//     displayFont: "Roboto",
//   };

//   // CHANGED 3: Safely check whether metrics exist.
//   const metrics = selectedProject.metrics || [];
//   const hasMetrics = metrics.length > 0;
//   const services = selectedProject.services || [];
//   const results = selectedProject.results || [];

//   return (
//     <main
//       style={{
//         backgroundColor: theme.background,
//         color: theme.foreground,
//       }}
//       className="overflow-hidden"
//     >
//       {/* =========================
//           CASE STUDY HERO
//       ========================== */}
//       <section className="pb-16 sm:pb-20 md:pb-24">
//         {/* FULL-WIDTH HERO IMAGE */}
//         <div className="w-full overflow-hidden">
//           {selectedProject.cover && (
//             <motion.img
//               src={selectedProject.cover}
//               alt={`${selectedProject.name} project cover`}
//               initial={{ scale: 1.08 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 duration: 1.4,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="h-[35vh] min-h-[320px] w-full object-cover md:h-[45vh] md:min-h-[450px]"
//             />
//           )}
//         </div>

//         {/* PROJECT DETAILS */}
//         <div className="px-5 sm:px-8 lg:px-16">
//           <div className="mx-auto max-w-7xl">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.25,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               <Link
//                 to="/work"
//                 className="my-8 inline-flex items-center gap-2 border-b pb-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
//               >
//                 <FiArrowLeft />
//                 Back to Works
//               </Link>
//             </motion.div>

//             <div className="mt-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.35,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="mb-8 flex items-center gap-3"
//               >
//                 {/* <span
//                   className="h-px w-10"
//                   style={{ backgroundColor: theme.accent }}
//                 /> */}

//                 <p
//                   className="text-xs font-semibold uppercase tracking-[0.25em]"
//                   style={{ color: theme.accent }}
//                 >
//                   Selected Project
//                 </p>
//               </motion.div>

//               <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
//                 <motion.h1
//                   initial={{ opacity: 0, y: 45 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.9,
//                     delay: 0.45,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   style={{ fontFamily: theme.displayFont }}
//                   className="text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl"
//                 >
//                   {selectedProject.name}
//                 </motion.h1>

//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.65,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="max-w-md"
//                 >
//                   <p className="text-sm leading-7 opacity-75">
//                     {selectedProject.message}
//                   </p>
//                 </motion.div>
//               </div>

//               {/* PROJECT METADATA */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.6 }}
//                 transition={{ duration: 0.8, delay: 0.9 }}
//                 className="mt-8 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.15em]"
//               >
//                 <span>{selectedProject.category}</span>
//                 <span>{selectedProject.location}</span>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================
//           ABOUT THE BRAND
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
//         >
//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{ color: theme.accent }}
//           >
//             01 / The Brand
//           </p>

//           <div>
//             <h2
//               style={{ fontFamily: theme.displayFont }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               Building a brand with intention.
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">
//               {selectedProject.description}
//             </p>
//           </div>
//         </motion.div>
//       </section>

//       {/* =========================
//           SERVICES
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{ backgroundColor: theme.secondary }}
//       >
//         <div className="mx-auto max-w-7xl">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{ color: theme.foreground }}
//           >
//             02 / Our Contribution
//           </motion.p>

//           <div
//             className="divide-y"
//             style={{
//               borderColor: `${theme.foreground}20`,
//             }}
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={service}
//                 initial={{ opacity: 0, x: -25 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{
//                   duration: 0.65,
//                   delay: index * 0.08,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 whileHover={{ x: 6 }}
//                 className="flex items-center justify-between gap-5 py-6"
//               >
//                 <div className="flex cursor-pointer items-center gap-6">
//                   <span className="text-xs opacity-50">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <h3
//                     style={{ fontFamily: theme.displayFont }}
//                     className="text-2xl sm:text-3xl"
//                   >
//                     {service}
//                   </h3>
//                 </div>

//                 <motion.span
//                   whileHover={{ x: 4, y: -4 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-xl"
//                   style={{ color: theme.accent }}
//                 >
//                   <FiArrowUpRight />
//                 </motion.span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================
//           METRICS — UPDATED
//       ========================== */}
//       {hasMetrics && (
//         <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//           <div className="mx-auto max-w-7xl">
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//               style={{ color: theme.accent }}
//             >
//               03 / The Impact
//             </motion.p>

//             {/* CHANGED 4: Use CountUpMetric instead of static metric values. */}
//             <div className="grid gap-8 sm:grid-cols-3">
//               {metrics.map((metric, index) => (
//                 <CountUpMetric
//                   key={metric.label}
//                   value={metric.value}
//                   label={metric.label}
//                   theme={theme}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* =========================
//           RESULTS
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
//         >
//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{ color: theme.accent }}
//           >
//             {/* CHANGED 5: Update section numbering when metrics are absent. */}
//             {hasMetrics ? "04" : "03"} / The Outcome
//           </p>

//           <div>
//             <h2
//               style={{ fontFamily: theme.displayFont }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               What we helped achieve.
//             </h2>

//             <div
//               className="mt-8 divide-y"
//               style={{
//                 borderColor: `${theme.foreground}20`,
//               }}
//             >
//               {results.map((result, index) => (
//                 <motion.div
//                   key={result}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.25 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.08,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="flex gap-5 py-5"
//                 >
//                   <span
//                     className="text-xs"
//                     style={{ color: theme.accent }}
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <p className="text-base leading-7 opacity-80">
//                     {result}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* =========================
//           NEXT PROJECT
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{
//           backgroundColor: theme.foreground,
//           color: theme.background,
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto max-w-7xl"
//         >
//           <p className="text-xs uppercase tracking-[0.2em] opacity-60">
//             Continue Exploring
//           </p>

//           <h2
//             style={{ fontFamily: theme.displayFont }}
//             className="mt-5 text-4xl sm:text-5xl"
//           >
//             More of our work.
//           </h2>

//           <motion.div
//             whileHover={{ x: 5 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="inline-block"
//           >
//             <Link
//               to="/work"
//               className="mt-8 inline-flex items-center gap-4 border-b pb-2 text-sm"
//               style={{ borderColor: theme.secondary }}
//             >
//               Back to all projects
//               <span>
//                 <FiArrowUpRight />
//               </span>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }









































































//ORIGINAL
// import { Link, useParams } from "react-router";
// import { project } from "../../data";
// import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
// import { motion } from "framer-motion";

// export default function CaseStudy() {
//   const { slug } = useParams();

//   // Find the selected project from the URL
//   const selectedProject = project.find(
//     (item) => item.slug === slug
//   );

//   // Simple fallback for an invalid project URL
//   if (!selectedProject) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
//         <div>
//           <h1 className="text-5xl text-blue">
//             Project not found.
//           </h1>

//           <Link
//             to="/work"
//             className="mt-6 inline-block text-magenta underline"
//           >
//             Back to Works
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   // Brand theme
//   // The fallback prevents the page from crashing if a project
//   // doesn't have a theme yet.
//   const theme = selectedProject.theme || {
//     background: "#F2F2F2",
//     foreground: "#2F2E41",
//     accent: "#007589",
//     secondary: "#EB6F38",
//     displayFont: "Roboto",
//   };

//   // CHANGED: Check whether this project actually has metrics.
//   const hasMetrics = selectedProject.metrics?.length > 0;

//   return (
//     <main
//       style={{
//         backgroundColor: theme.background,
//         color: theme.foreground,
//       }}
//       className="overflow-hidden"
//     >
//       {/* =========================
//           CASE STUDY HERO
//       ========================== */}
//       <section className="pb-16 sm:pb-20 md:pb-24">

//         {/* =========================
//             FULL-WIDTH HERO IMAGE
//         ========================== */}
//         <div className="w-full overflow-hidden">

//           <motion.img
//             src={selectedProject.cover}
//             alt={`${selectedProject.name} project cover`}
//             initial={{ scale: 1.08 }}
//             animate={{ scale: 1 }}
//             transition={{
//               duration: 1.4,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="h-[35vh] min-h-[320px] w-full object-cover md:h-[45vh] md:min-h-[450px]"
//           />

//         </div>

//         {/* =========================
//             PROJECT DETAILS
//         ========================== */}
//         <div className="px-5 sm:px-8 lg:px-16">
//           <div className="mx-auto max-w-7xl">

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.25,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               <Link
//                 to="/work"
//                 className="my-8 inline-flex items-center gap-2 border-b pb-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
//               >
//                 <FiArrowLeft /> Back to Works
//               </Link>
//             </motion.div>

//             <div className="mt-6">

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.35,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="mb-8 flex items-center gap-3"
//               >
//                 <span
//                   className="h-px w-10"
//                   style={{
//                     backgroundColor: theme.accent,
//                   }}
//                 />

//                 <p
//                   className="text-xs font-semibold uppercase tracking-[0.25em]"
//                   style={{
//                     color: theme.accent,
//                   }}
//                 >
//                   Selected Project
//                 </p>
//               </motion.div>

//               <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">

//                 <motion.h1
//                   initial={{ opacity: 0, y: 45 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.9,
//                     delay: 0.45,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   style={{
//                     fontFamily: theme.displayFont,
//                   }}
//                   className="text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl"
//                 >
//                   {selectedProject.name}
//                 </motion.h1>

//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.65,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="max-w-md"
//                 >
//                   <p className="text-sm leading-7 opacity-75">
//                     {selectedProject.description}
//                   </p>

//                   {/* <div className="mt-6 flex flex-wrap gap-2">
//                     {selectedProject.services?.map((service, index) => (
//                       <motion.span
//                         key={service}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.75 + index * 0.06,
//                           ease: "easeOut",
//                         }}
//                         className="rounded-full border px-3 py-2 text-xs"
//                         style={{
//                           borderColor: `${theme.foreground}35`,
//                         }}
//                       >
//                         {service}
//                       </motion.span>
//                     ))}
//                   </div> */}
//                 </motion.div>
//               </div>

//               {/* Project metadata */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.6 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.9,
//                 }}
//                 className="mt-8 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.15em]"
//               >
//                 <span>{selectedProject.category}</span>
//                 <span>{selectedProject.location}</span>
//               </motion.div>

//             </div>
//           </div>
//         </div>
//       </section>


//       {/* =========================
//           ABOUT THE BRAND
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
//         >

//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.accent,
//             }}
//           >
//             01 / The Brand
//           </p>

//           <div>
//             <h2
//               style={{
//                 fontFamily: theme.displayFont,
//               }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               Building a brand with intention.
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">
//               {selectedProject.description}
//             </p>
//           </div>

//         </motion.div>
//       </section>


//       {/* =========================
//           SERVICES
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{
//           backgroundColor: `${theme.secondary}`,
//         }}
//       >
//         <div className="mx-auto max-w-7xl">

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.foreground,
//             }}
//           >
//             02 / Our Contribution
//           </motion.p>

//           <div
//             className="divide-y"
//             style={{
//               borderColor: `${theme.foreground}20`,
//             }}
//           >
//             {selectedProject.services?.map((service, index) => (
//               <motion.div
//                 key={service}
//                 initial={{ opacity: 0, x: -25 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{
//                   duration: 0.65,
//                   delay: index * 0.08,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 whileHover={{ x: 6 }}
//                 className="flex items-center justify-between gap-5 py-6"
//               >

//                 <div className="flex items-center gap-6 cursor-pointer">

//                   <span className="text-xs opacity-50">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <h3
//                     style={{
//                       fontFamily: theme.displayFont,
//                     }}
//                     className="text-2xl sm:text-3xl"
//                   >
//                     {service}
//                   </h3>

//                 </div>

      

//                 <motion.span
//                   whileHover={{ x: 4, y: -4 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-xl"
//                   style={{
//                     color: theme.accent,
//                   }}
//                 >
//                     <FiArrowUpRight />
//                 </motion.span>
                
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>


//       {/* =========================
//           METRICS
//       ========================== */}
//       {hasMetrics && (
//         <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

//           <div className="mx-auto max-w-7xl">

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//               style={{
//                 color: theme.accent,
//               }}
//             >
//               03 / The Impact
//             </motion.p>

//             <div className="grid gap-8 sm:grid-cols-3">

//               {selectedProject.metrics.map((metric, index) => (
//                 <motion.div
//                   key={metric.label}
//                   initial={{ opacity: 0, y: 35 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.1,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="border-t pt-6"
//                   style={{
//                     borderColor: `${theme.foreground}30`,
//                   }}
//                 >

//                   <p
//                     style={{
//                       fontFamily: theme.displayFont,
//                     }}
//                     className="text-4xl sm:text-4xl lg:text-5xl"
//                   >
//                     {metric.value}
//                   </p>

//                   <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
//                     {metric.label}
//                   </p>

//                 </motion.div>
//               ))}

//             </div>
//           </div>
//         </section>
//       )}


//       {/* =========================
//           RESULTS
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]"
//         >

//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.accent,
//             }}
//           >
//             {/* CHANGED: Results becomes 03 without metrics, 04 with metrics */}
//             {hasMetrics ? "04" : "03"} / The Outcome
//           </p>

//           <div>

//             <h2
//               style={{
//                 fontFamily: theme.displayFont,
//               }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               What we helped achieve.
//             </h2>

//             <div
//               className="mt-8 divide-y"
//               style={{
//                 borderColor: `${theme.foreground}20`,
//               }}
//             >
//               {selectedProject.results?.map((result, index) => (
//                 <motion.div
//                   key={result}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.25 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.08,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="flex gap-5 py-5"
//                 >

//                   <span
//                     className="text-xs"
//                     style={{
//                       color: theme.accent,
//                     }}
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <p className="text-base leading-7 opacity-80">
//                     {result}
//                   </p>

//                 </motion.div>
//               ))}
//             </div>

//           </div>
//         </motion.div>
//       </section>


//       {/* =========================
//           GALLERY
//       ========================== */}



//       {/* =========================
//           NEXT PROJECT
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{
//           backgroundColor: theme.foreground,
//           color: theme.background,
//         }}
//       >

//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto max-w-7xl"
//         >

//           <p className="text-xs uppercase tracking-[0.2em] opacity-60">
//             Continue Exploring
//           </p>

//           <h2
//             style={{
//               fontFamily: theme.displayFont,
//             }}
//             className="mt-5 text-4xl sm:text-5xl"
//           >
//             More of our work.
//           </h2>

//           <motion.div
//             whileHover={{ x: 5 }}
//             transition={{
//               duration: 0.25,
//               ease: "easeOut",
//             }}
//             className="inline-block"
//           >
//             <Link
//               to="/work"
//               className="mt-8 inline-flex items-center gap-4 border-b pb-2 text-sm"
//               style={{
//                 borderColor: theme.secondary,
//               }}
//             >
//               Back to all projects
//               <span>
//                 <FiArrowUpRight />
//               </span>
//             </Link>
//           </motion.div>

//         </motion.div>
//       </section>

//     </main>
//   );
// }



      // {selectedProject.gallery?.length > 0 && (
      //   <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">

      //     <div className="mx-auto max-w-7xl">

      //       <motion.p
      //         initial={{ opacity: 0, y: 20 }}
      //         whileInView={{ opacity: 1, y: 0 }}
      //         viewport={{ once: true }}
      //         transition={{
      //           duration: 0.7,
      //           ease: [0.22, 1, 0.36, 1],
      //         }}
      //         className="mb-8 text-xs font-semibold uppercase tracking-[0.2em]"
      //         style={{
      //           color: theme.accent,
      //         }}
      //       >
      //         {/* CHANGED: Gallery becomes 04 without metrics, 05 with metrics */}
      //         {hasMetrics ? "05" : "04"} / The Work
      //       </motion.p>

      //       {/* =========================
      //           TILE GALLERY
      //       ========================== */}
      //       <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
      //         <div className="mx-auto max-w-7xl">

      //           {selectedProject.gallery?.length > 0 && (
      //             <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
      //               {selectedProject.gallery.map((image, index) => {
      //                 const imageSizes = [
      //                   "aspect-[4/5]",
      //                   "aspect-square",
      //                   "aspect-[3/4]",
      //                   "aspect-[4/5]",
      //                   "aspect-square",
      //                   "aspect-[3/4]",
      //                   "aspect-[4/5]",
      //                   "aspect-square",
      //                 ];

      //                 return (
      //                   <motion.div
      //                     key={image}
      //                     initial={{ opacity: 0, y: 35 }}
      //                     whileInView={{ opacity: 1, y: 0 }}
      //                     viewport={{
      //                       once: true,
      //                       amount: 0.08,
      //                     }}
      //                     transition={{
      //                       duration: 0.7,
      //                       delay: (index % 4) * 0.06,
      //                       ease: [0.22, 1, 0.36, 1],
      //                     }}
      //                     className="group mb-3 w-full break-inside-avoid overflow-hidden rounded-xl"
      //                   >
      //                     <div
      //                       className={`w-full ${
      //                         imageSizes[index % imageSizes.length]
      //                       }`}
      //                     >
      //                       <img
      //                         src={image}
      //                         alt={`${selectedProject.name} project image ${index + 1}`}
      //                         loading="lazy"
      //                         className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      //                       />
      //                     </div>
      //                   </motion.div>
      //                 );
      //               })}
      //             </div>
      //           )}

      //         </div>
      //       </section>

      //     </div>
      //   </section>
      // )}


















































































// import { Link, useParams } from "react-router";
// import { project } from "../../data";
// import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

// export default function CaseStudy() {
//   const { slug } = useParams();

//   // Find the selected project from the URL
//   const selectedProject = project.find(
//     (item) => item.slug === slug
//   );

//   // Simple fallback for an invalid project URL
//   if (!selectedProject) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
//         <div>
//           <h1 className="font-serif text-5xl text-blue">
//             Project not found.
//           </h1>

//           <Link
//             to="/work"
//             className="mt-6 inline-block text-magenta underline"
//           >
//             Back to Works
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   // Brand theme
//   // The fallback prevents the page from crashing if a project
//   // doesn't have a theme yet.
//   const theme = selectedProject.theme || {
//     background: "#F2F2F2",
//     foreground: "#2F2E41",
//     accent: "#007589",
//     secondary: "#EB6F38",
//     displayFont: "Georgia, serif",
//   };

//   // CHANGED: Check whether this project actually has metrics.
//   const hasMetrics = selectedProject.metrics?.length > 0;

//   return (
//     <main
//       style={{
//         backgroundColor: theme.background,
//         color: theme.foreground,
//       }}
//       className="overflow-hidden"
//     >
//       {/* =========================
//           CASE STUDY HERO
//       ========================== */}
//       <section className="pb-16 sm:pb-20 md:pb-24">

//         {/* =========================
//             FULL-WIDTH HERO IMAGE
//         ========================== */}
//         <div className="w-full overflow-hidden">
            
//           <img
//             src={selectedProject.cover}
//             alt={`${selectedProject.name} project cover`}
//             className="h-[35vh] min-h-[320px] w-full object-cover md:h-[45vh] md:min-h-[450px]"
//           />

          
//         </div>

//         {/* =========================
//             PROJECT DETAILS
//         ========================== */}
//         <div className="px-5 sm:px-8 lg:px-16">
//           <div className="mx-auto max-w-7xl">
            
//             <Link
//               to="/work"
//               className="my-8 inline-flex items-center gap-2 text-xs font-semibold uppercase border-b pb-2 tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
//             >
//                <FiArrowLeft /> Back to Works
//             </Link>

//             <div className="mt-6">

//               <div className="mb-8 flex items-center gap-3">
//                 <span
//                   className="h-px w-10"
//                   style={{
//                     backgroundColor: theme.accent,
//                   }}
//                 />

//                 <p
//                   className="text-xs font-semibold uppercase tracking-[0.25em]"
//                   style={{
//                     color: theme.accent,
//                   }}
//                 >
//                   Selected Project
//                 </p>
//               </div>

//               <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">

//                 <h1
//                   style={{
//                     fontFamily: theme.displayFont,
//                   }}
//                   className="text-5xl leading-[1] tracking-tight sm:text-6xl md:text-7xl"
//                 >
//                   {selectedProject.name}
//                 </h1>

//                 <div className="max-w-md">
//                   <p className="text-sm leading-7 opacity-75">
//                     {selectedProject.description}
//                   </p>

//                   <div className="mt-6 flex flex-wrap gap-2">
//                     {selectedProject.services?.map((service) => (
//                       <span
//                         key={service}
//                         className="rounded-full border px-3 py-2 text-xs"
//                         style={{
//                           borderColor: `${theme.foreground}35`,
//                         }}
//                       >
//                         {service}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Project metadata */}
//               <div className="mt-8 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.15em] opacity-60">
//                 <span>{selectedProject.category}</span>
//                 <span>{selectedProject.location}</span>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>


//       {/* =========================
//           ABOUT THE BRAND
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">
//         <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">

//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.accent,
//             }}
//           >
//             01 / The Brand
//           </p>

//           <div>
//             <h2
//               style={{
//                 fontFamily: theme.displayFont,
//               }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               Building a brand with intention.
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">
//               {selectedProject.description}
//             </p>
//           </div>

//         </div>
//       </section>


//       {/* =========================
//           SERVICES
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{
//           backgroundColor: `${theme.secondary}`,
//         }}
//       >
//         <div className="mx-auto max-w-7xl">

//           <p
//             className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.foreground,
//             }}
//           >
//             02 / Our Contribution
//           </p>

//           <div
//             className="divide-y"
//             style={{
//               borderColor: `${theme.foreground}20`,
//             }}
//           >
//             {selectedProject.services?.map((service, index) => (
//               <div
//                 key={service}
//                 className="flex items-center justify-between gap-5 py-6"
//               >

//                 <div className="flex items-center gap-6">

//                   <span className="text-xs opacity-50">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <h3
//                     style={{
//                       fontFamily: theme.displayFont,
//                     }}
//                     className="text-2xl sm:text-3xl"
//                   >
//                     {service}
//                   </h3>

//                 </div>

//                 <span
//                   className="text-xl"
//                   style={{
//                     color: theme.accent,
//                   }}
//                 >
//                   <FiArrowUpRight />
//                 </span>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>


//       {/* =========================
//           METRICS
//       ========================== */}
//       {hasMetrics && (
//         <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

//           <div className="mx-auto max-w-7xl">

//             <p
//               className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
//               style={{
//                 color: theme.accent,
//               }}
//             >
//               03 / The Impact
//             </p>

//             <div className="grid gap-8 sm:grid-cols-3">

//               {selectedProject.metrics.map((metric) => (
//                 <div
//                   key={metric.label}
//                   className="border-t pt-6"
//                   style={{
//                     borderColor: `${theme.foreground}30`,
//                   }}
//                 >

//                   <p
//                     style={{
//                       fontFamily: theme.displayFont,
//                     }}
//                     className="text-4xl sm:text-5xl"
//                   >
//                     {metric.value}
//                   </p>

//                   <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
//                     {metric.label}
//                   </p>

//                 </div>
//               ))}

//             </div>
//           </div>
//         </section>
//       )}


//       {/* =========================
//           RESULTS
//       ========================== */}
//       <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-16">

//         <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">

//           <p
//             className="text-xs font-semibold uppercase tracking-[0.2em]"
//             style={{
//               color: theme.accent,
//             }}
//           >
//             {/* CHANGED: Results becomes 03 without metrics, 04 with metrics */}
//             {hasMetrics ? "04" : "03"} / The Outcome
//           </p>

//           <div>

//             <h2
//               style={{
//                 fontFamily: theme.displayFont,
//               }}
//               className="text-3xl leading-tight sm:text-4xl"
//             >
//               What we helped achieve.
//             </h2>

//             <div
//               className="mt-8 divide-y"
//               style={{
//                 borderColor: `${theme.foreground}20`,
//               }}
//             >
//               {selectedProject.results?.map((result, index) => (
//                 <div
//                   key={result}
//                   className="flex gap-5 py-5"
//                 >

//                   <span
//                     className="text-xs"
//                     style={{
//                       color: theme.accent,
//                     }}
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <p className="text-base leading-7 opacity-80">
//                     {result}
//                   </p>

//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================
//           GALLERY
//       ========================== */}
//       {selectedProject.gallery?.length > 0 && (
//         <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">

//           <div className="mx-auto max-w-7xl">

//             <p
//               className="mb-8 text-xs font-semibold uppercase tracking-[0.2em]"
//               style={{
//                 color: theme.accent,
//               }}
//             >
//               {/* CHANGED: Gallery becomes 04 without metrics, 05 with metrics */}
//               {hasMetrics ? "05" : "04"} / The Work
//             </p>

//             {/* =========================
//                 TILE GALLERY
//             ========================== */}
//             <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
//               <div className="mx-auto max-w-7xl">

//                 {selectedProject.gallery?.length > 0 && (
//                   <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
//                     {selectedProject.gallery.map((image, index) => {
//                       const imageSizes = [
//                         "aspect-[4/5]",
//                         "aspect-square",
//                         "aspect-[3/4]",
//                         "aspect-[4/5]",
//                         "aspect-square",
//                         "aspect-[3/4]",
//                         "aspect-[4/5]",
//                         "aspect-square",
//                       ];

//                       return (
//                         <div
//                           key={image}
//                           className="group mb-3 w-full break-inside-avoid overflow-hidden rounded-xl"
//                         >
//                           <div
//                             className={`w-full ${
//                               imageSizes[index % imageSizes.length]
//                             }`}
//                           >
//                             <img
//                               src={image}
//                               alt={`${selectedProject.name} project image ${index + 1}`}
//                               loading="lazy"
//                               className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                             />
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}

//               </div>
//             </section>

//           </div>
//         </section>
//       )}


//       {/* =========================
//           NEXT PROJECT
//       ========================== */}
//       <section
//         className="px-5 py-20 sm:px-8 md:py-28 lg:px-16"
//         style={{
//           backgroundColor: theme.foreground,
//           color: theme.background,
//         }}
//       >

//         <div className="mx-auto max-w-7xl">

//           <p className="text-xs uppercase tracking-[0.2em] opacity-60">
//             Continue Exploring
//           </p>

//           <h2
//             style={{
//               fontFamily: theme.displayFont,
//             }}
//             className="mt-5 text-4xl sm:text-5xl"
//           >
//             More of our work.
//           </h2>

//           <Link
//             to="/work"
//             className="mt-8 inline-flex items-center gap-4 border-b pb-2 text-sm"
//             style={{
//               borderColor: theme.secondary,
//             }}
//           >
//             Back to all projects
//             <span><FiArrowUpRight /></span>
//           </Link>

//         </div>
//       </section>

//     </main>
//   );
// }



































