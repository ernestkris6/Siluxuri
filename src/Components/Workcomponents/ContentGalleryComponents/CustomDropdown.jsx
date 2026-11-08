
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CustomDropdown({
  id,
  options,
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const dropdownRef = useRef(null);

  const selectedIndex = options.findIndex(
    (option) => option.value === value
  );

  const selectedOption = options[selectedIndex];

  // Close when clicking outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Keep the active option in sync with the selected option.
  useEffect(() => {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  }, [selectedIndex]);

  const selectOption = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!isOpen) {
        setIsOpen(true);
        return;
      }

      setActiveIndex((current) =>
        (current + 1) % options.length
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!isOpen) {
        setIsOpen(true);
        return;
      }

      setActiveIndex((current) =>
        (current - 1 + options.length) % options.length
      );
    }

    if (event.key === "Enter" || event.key === " ") {
      if (isOpen) {
        event.preventDefault();

        if (options[activeIndex]) {
          selectOption(options[activeIndex]);
        }
      }
    }

    if (event.key === "Escape") {
      setIsOpen(false);
    }

    if (event.key === "Home" && isOpen) {
      event.preventDefault();
      setActiveIndex(0);
    }

    if (event.key === "End" && isOpen) {
      event.preventDefault();
      setActiveIndex(options.length - 1);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="relative min-w-[170px]"
    >
      {/* Dropdown trigger */}
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-options`}
        className={`flex w-full items-center justify-between gap-5 rounded-full border bg-white px-4 py-3 text-xs font-medium text-[#2F2E41] outline-none transition-all duration-300 cursor-pointer ${
          isOpen
            ? "border-[#007589] shadow-[0_0_0_3px_rgba(0,117,137,0.08)]"
            : "border-[#2F2E41]/10 hover:border-[#007589]/50"
        }`}
      >
        <span>
          {selectedOption?.label || "Select an option"}
        </span>

        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 shrink-0 text-[#007589]"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      {/* Dropdown options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${id}-options`}
            role="listbox"
            aria-labelledby={id}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-full z-50 mt-2 w-full min-w-[190px] overflow-hidden rounded-2xl border border-[#2F2E41]/10 bg-white p-1.5 shadow-[0_12px_35px_rgba(47,46,65,0.12)]"
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = activeIndex === index;

              return (
                <div
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectOption(option)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-3 text-xs transition-colors duration-200 ${
                    isSelected
                      ? "bg-[#007589]/[0.07] font-semibold text-[#007589]"
                      : isActive
                        ? "bg-[#2F2E41]/[0.04] text-[#2F2E41]"
                        : "text-[#2F2E41]/70 hover:bg-[#2F2E41]/[0.04] hover:text-[#2F2E41]"
                  }`}
                >
                  <span>{option.label}</span>

                  {isSelected && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-[#007589]"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 12 4 4L19 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
