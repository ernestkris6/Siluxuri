import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheck,
  FiAlertCircle,
  FiX,
} from "react-icons/fi";

export default function Toast({
  message,
  type = "success",
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          x: 35,
          y: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        exit={{
          opacity: 0,
          x: 35,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed right-5 top-5 z-[9999] w-[calc(100%-2.5rem)] max-w-[390px] sm:right-6 sm:top-6"
      >
        <div className="relative overflow-hidden rounded-lg border border-blue/10 bg-white shadow-[0_12px_35px_rgba(8,22,48,0.12)]">

          {/* CONTENT */}

          <div className="flex min-h-[68px] items-center px-4 py-3">

            {/* STATUS ICON */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.08,
              }}
              className={`mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                isSuccess
                  ? "bg-orange/10 text-orange"
                  : "bg-red-50 text-red-500"
              }`}
            >
              {isSuccess ? (
                <FiCheck className="text-[16px]" />
              ) : (
                <FiAlertCircle className="text-[16px]" />
              )}
            </motion.div>

            {/* MESSAGE */}

            <div className="min-w-0 flex-1 pr-3">

              <p
                className={`mb-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] ${
                  isSuccess
                    ? "text-orange"
                    : "text-red-500"
                }`}
              >
                {isSuccess ? "Success" : "Error"}
              </p>

              <p className="text-[13px] leading-[1.4] text-blue/75">
                {message}
              </p>

            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close notification"
              className="flex h-7 w-7 shrink-0 items-center justify-center text-blue/30 transition-all duration-200 hover:text-blue/70"
            >
              <FiX className="text-[15px]" />
            </button>

          </div>

          {/* PROGRESS LINE */}

          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-blue/5">

            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{
                duration: 4,
                ease: "linear",
              }}
              style={{
                transformOrigin: "left",
              }}
              className={`h-full ${
                isSuccess
                  ? "bg-orange"
                  : "bg-red-500"
              }`}
            />

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}














// import { useEffect } from "react";

// export default function Toast({
//   message,  
//   type = "success",
//   onClose,
// }) {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 4000);  

//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div className="fixed top-6 right-6 z-50 animate-slide-in">  
//       <div
//         className={`relative overflow-hidden px-6 py-4 rounded-xl shadow-lg text-white flex items-center gap-3
//         ${
//           type === "success"  
//             ? "bg-emerald-600"
//             : "bg-red-600"
//         }`}
//       >
//         <span className="font-medium">
//           {message}
//         </span>

//         <button
//           onClick={onClose}
//           className="ml-2 text-white/80 hover:text-white transition-colors duration-200"
//           aria-label="Close notification"
//         >
//           ✕
//         </button>

//         {/* Animated Progress Bar */}
//         <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/20">
//           <div
//             className="h-full bg-white animate-toast-progress"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }























// import { useEffect } from "react";

// export default function Toast({ message, type = "success", onClose }) {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 4000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div className="fixed top-6 right-6 z-50 animate-slide-in">
//       <div
//         className={`px-6 py-4 rounded-xl shadow-lg text-white flex items-center gap-3
//         ${type === "success" ? "bg-emerald-600" : "bg-red-600"}`}
//       >
//         <span className="font-medium">{message}</span>
//         <button
//           onClick={onClose}
//           className="ml-2 text-white/80 hover:text-white"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// }