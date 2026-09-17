import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div
        className={`px-6 py-4 rounded-xl shadow-lg text-white flex items-center gap-3
        ${type === "success" ? "bg-emerald-600" : "bg-red-600"}`}
      >
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white/80 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}