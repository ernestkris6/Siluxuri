import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiAlertCircle } from "react-icons/fi";
import Toast from "../../Lib/Toast";

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  const services = [
    "Brand Strategy",
    "Identity Design",
    "Digital Marketing",
    "Equipment Rental",
  ];

  /*
   * --------------------------------------------------
   * HANDLE INPUT CHANGE
   * --------------------------------------------------
   */

  const handleInputChange = (e) => {
    const { name } = e.target;

    // Clear the field-specific error once
    // the user starts correcting it.
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /*
   * --------------------------------------------------
   * HANDLE SERVICE SELECTION
   * --------------------------------------------------
   */

  const handleServiceSelect = (service) => {
    setSelectedService(service);

    // Clear service validation error
    if (errors.service) {
      setErrors((prev) => ({
        ...prev,
        service: "",
      }));
    }
  };

  /*
   * --------------------------------------------------
   * VALIDATE FORM
   * --------------------------------------------------
   */

  const validateForm = (formData) => {
    const newErrors = {};

    const firstName = formData.get("firstName")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const message = formData.get("message")?.trim();

    /*
     * NAME
     */

    if (!firstName) {
      newErrors.firstName = "Please enter your name.";
    } else if (firstName.length < 2) {
      newErrors.firstName =
        "Your name must be at least 2 characters.";
    }

    /*
     * EMAIL
     */

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex =
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (!emailRegex.test(email)) {
        newErrors.email =
          "Please enter a valid email address.";
      }
    }

    /*
     * PHONE
     */

    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (phone.length < 7) {
      newErrors.phone =
        "Please enter a valid phone number.";
    }

    /*
     * SERVICE
     */

    if (!selectedService) {
      newErrors.service =
        "Please select a service you'd like help with.";
    }

    /*
     * MESSAGE
     */

    if (!message) {
      newErrors.message =
        "Please tell us a little about your project.";
    } else if (message.length < 10) {
      newErrors.message =
        "Please provide a little more detail about your project.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /*
   * --------------------------------------------------
   * HANDLE FORM SUBMISSION
   * --------------------------------------------------
   */

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous toast
    setToast(null);

    // Prevent duplicate submissions
    if (isSubmitting) {
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    /*
     * Validate form before submission
     */

    const isValid = validateForm(formData);

    if (!isValid) {
      setToast({
        type: "error",
        message:
          "Please check the highlighted fields and try again.",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/mvzzgoqp",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      /*
       * Formspree returned an error
       */

      if (!response.ok) {
        let errorMessage =
          "Something went wrong 😢 Please try again.";

        try {
          const data = await response.json();

          if (data?.errors?.length > 0) {
            errorMessage = data.errors
              .map((error) => error.message)
              .join(" ");
          }
        } catch {
          // Response wasn't JSON.
          // Keep the default error message.
        }

        throw new Error(errorMessage);
      }

      /*
       * SUCCESS
       */

      setToast({
        type: "success",
        message:
          "Thanks for reaching out! Your enquiry has been sent successfully 🎉",
      });

      /*
       * Reset form
       */

      form.reset();

      /*
       * Reset selected service
       */

      setSelectedService("");

      /*
       * Clear validation errors
       */

      setErrors({});
    } catch (error) {
      console.error(
        "Siluxri contact form submission failed:",
        error
      );

      setToast({
        type: "error",
        message:
          error?.message ||
          "Something went wrong 😢 Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * --------------------------------------------------
   * INPUT STYLES
   * --------------------------------------------------
   */

  const getInputClass = (fieldName) => {
    return `w-full border-b ${
      errors[fieldName]
        ? "border-red-500"
        : "border-blue/90"
    } bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange`;
  };

  return (
    <>
      {/* ==================================================
          TOAST
      ================================================== */}

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <section className="w-full bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* ==================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-blue/40">
                Contact
              </p>

              <h2 className="max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Tell us about
                <span className="block text-orange">
                  your project.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-lg leading-relaxed text-blue/60">
                Whether you have a fully formed brief or just
                an idea, we'd love to hear what you're thinking.
              </p>
            </motion.div>

            {/* ==================================================
                FORM
            ================================================== */}

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
              noValidate
            >

              {/* ==================================================
                  NAME + EMAIL
              ================================================== */}

              <div className="grid gap-10 sm:grid-cols-2">

                {/* NAME */}

                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
                  >
                    Your name*
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="John Doe"
                    autoComplete="name"
                    onChange={handleInputChange}
                    aria-invalid={!!errors.firstName}
                    className={getInputClass("firstName")}
                  />

                  {errors.firstName && (
                    <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                      <FiAlertCircle />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
                  >
                    Email*
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    onChange={handleInputChange}
                    aria-invalid={!!errors.email}
                    className={getInputClass("email")}
                  />

                  {errors.email && (
                    <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                      <FiAlertCircle />
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>

              {/* ==================================================
                  COMPANY + PHONE
              ================================================== */}

              <div className="grid gap-10 sm:grid-cols-2">

                {/* COMPANY */}

                <div>
                  <label
                    htmlFor="company"
                    className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Your company"
                    onChange={handleInputChange}
                    className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
                  >
                    Phone*
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+234"
                    autoComplete="tel"
                    onChange={handleInputChange}
                    aria-invalid={!!errors.phone}
                    className={getInputClass("phone")}
                  />

                  {errors.phone && (
                    <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                      <FiAlertCircle />
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* ==================================================
                  SERVICE
              ================================================== */}

              <div>
                <label className="mb-4 block text-xs uppercase tracking-[0.15em] text-blue/90">
                  What can we help with?*
                </label>

                <div className="flex flex-wrap gap-3">

                  {services.map((service) => {
                    const isSelected =
                      selectedService === service;

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() =>
                          handleServiceSelect(service)
                        }
                        className={`rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
                          isSelected
                            ? "border-orange bg-orange text-white"
                            : "border-blue/20 hover:border-orange hover:bg-orange hover:text-white"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}

                </div>

                {/* SELECTED SERVICE */}

                <input
                  type="hidden"
                  name="service"
                  value={selectedService}
                />

                {errors.service && (
                  <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* ==================================================
                  MESSAGE
              ================================================== */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
                >
                  Tell us about your project*
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Let's create something beautiful..."
                  onChange={handleInputChange}
                  aria-invalid={!!errors.message}
                  className={`w-full resize-none border-b ${
                    errors.message
                      ? "border-red-500"
                      : "border-blue/20"
                  } bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange`}
                />

                {errors.message && (
                  <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* ==================================================
                  SUBMIT
              ================================================== */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-5 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-8 hover:border-orange hover:text-orange disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send enquiry"}

                {!isSubmitting && (
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    <FiArrowRight />
                  </span>
                )}

                {isSubmitting && (
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-blue/20 border-t-blue"
                    aria-hidden="true"
                  />
                )}
              </button>

            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

















// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";
// import Toast from "../../Lib/Toast";

// export default function ContactForm() {
//   const [selectedService, setSelectedService] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [toast, setToast] = useState(null);

//   const services = [
//     "Brand Strategy",
//     "Identity Design",
//     "Digital Marketing",
//     "Equipment Rental",
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Clear any previous toast
//     setToast(null);

//     // Require a service selection
//     if (!selectedService) {
//       setToast({
//         type: "error",
//         message: "Please select a service.",
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch(
//         "https://formspree.io/f/mvzzgoqp",
//         {
//           method: "POST",
//           body: formData,
//           headers: {
//             Accept: "application/json",
//           },
//         }
//       );

//       // Formspree returned an error
//       if (!response.ok) {
//         let errorMessage =
//           "Something went wrong 😢 Please try again.";

//         try {
//           const data = await response.json();

//           if (data?.errors?.length > 0) {
//             errorMessage = data.errors
//               .map((error) => error.message)
//               .join(" ");
//           }
//         } catch {
//           // Response wasn't JSON, so use our default message
//         }

//         throw new Error(errorMessage);
//       }

//       // SUCCESS
//       setToast({
//         type: "success",
//         message: "Message sent successfully 🎉",
//       });

//       // Reset the form
//       form.reset();

//       // Reset selected service
//       setSelectedService("");

//     } catch (error) {
//       console.error("Form submission failed:", error);

//       // ERROR
//       setToast({
//         type: "error",
//         message:
//           error.message ||
//           "Something went wrong 😢 Please try again.",
//       });

//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {/* Toast */}
//       {toast && (
//         <Toast
//           type={toast.type}
//           message={toast.message}
//           onClose={() => setToast(null)}
//         />
//       )}

//       <section className="w-full bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
//         <div className="mx-auto max-w-7xl">

//           <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

//             {/* LEFT CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-blue/40">
//                 Contact
//               </p>

//               <h2 className="max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
//                 Tell us about
//                 <span className="block text-orange">
//                   your project.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-md text-lg leading-relaxed text-blue/60">
//                 Whether you have a fully formed brief or just
//                 an idea, we'd love to hear what you're thinking.
//               </p>
//             </motion.div>

//             {/* FORM */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="space-y-10"
//             >

//               {/* NAME + EMAIL */}
//               <div className="grid gap-10 sm:grid-cols-2">

//                 {/* NAME */}
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
//                   >
//                     Your name*
//                   </label>

//                   <input
//                     id="firstName"
//                     type="text"
//                     name="firstName"
//                     placeholder="John Doe"
//                     required
//                     className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   />
//                 </div>

//                 {/* EMAIL */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
//                   >
//                     Email*
//                   </label>

//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     placeholder="you@email.com"
//                     required
//                     className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   />
//                 </div>

//               </div>

//               {/* COMPANY + PHONE */}
//               <div className="grid gap-10 sm:grid-cols-2">

//                 {/* COMPANY */}
//                 <div>
//                   <label
//                     htmlFor="company"
//                     className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
//                   >
//                     Company
//                   </label>

//                   <input
//                     id="company"
//                     type="text"
//                     name="company"
//                     placeholder="Your company"
//                     className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   />
//                 </div>

//                 {/* PHONE */}
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
//                   >
//                     Phone*
//                   </label>

//                   <input
//                     id="phone"
//                     type="tel"
//                     name="phone"
//                     placeholder="+234"
//                     required
//                     className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   />
//                 </div>

//               </div>

//               {/* SERVICE */}
//               <div>
//                 <label className="mb-4 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                   What can we help with?*
//                 </label>

//                 <div className="flex flex-wrap gap-3">

//                   {services.map((service) => {
//                     const isSelected =
//                       selectedService === service;

//                     return (
//                       <button
//                         key={service}
//                         type="button"
//                         onClick={() =>
//                           setSelectedService(service)
//                         }
//                         className={`rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
//                           isSelected
//                             ? "border-orange bg-orange text-white"
//                             : "border-blue/20 hover:border-orange hover:bg-orange hover:text-white"
//                         }`}
//                       >
//                         {service}
//                       </button>
//                     );
//                   })}

//                 </div>

//                 {/* Selected service sent to Formspree */}
//                 <input
//                   type="hidden"
//                   name="service"
//                   value={selectedService}
//                 />
//               </div>

//               {/* MESSAGE */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90"
//                 >
//                   Tell us about your project*
//                 </label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   placeholder="Let's create something beautiful..."
//                   required
//                   className="w-full resize-none border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                 />
//               </div>

//               {/* SUBMIT */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="group flex items-center gap-5 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-8 hover:border-orange hover:text-orange disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 {isSubmitting
//                   ? "Sending..."
//                   : "Send enquiry"}

//                 <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
//                   <FiArrowRight />
//                 </span>
//               </button>

//             </motion.form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
























//================ 02 ==================
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";
// import { useForm } from "@formspree/react";
// import Toast from "../../Lib/Toast";

// export default function ContactForm() {
//   const [selectedService, setSelectedService] = useState("");
//   const [state, handleSubmit] = useForm("mvzzgoqppp");
//   const [toast, setToast] = useState(null);

//   const formRef = useRef(null);

//   const services = [
//     "Brand Strategy",
//     "Identity Design",
//     "Digital Marketing",
//     "Equipment Rental",
//   ];

//   // SUCCESS
//   useEffect(() => {
//     if (!state.succeeded) return;

//     setToast({
//       type: "success",
//       message: "Message sent successfully 🎉",
//     });

//     if (formRef.current) {
//       formRef.current.reset();
//     }

//     setSelectedService("");

//     const timer = setTimeout(() => {
//       setToast(null);
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [state.succeeded]);

//   // ERROR
//   useEffect(() => {
//     if (state.errors?.length > 0 && !state.submitting) {
//       setToast({
//         type: "error",
//         message: "Something went wrong 😢 Please try again.",
//       });
//     }
//   }, [state.errors, state.submitting]);

//   // FORM SUBMISSION
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     // Make sure a service has been selected

//     //  setToast({
//     //     type: "error",
//     //     message: "Something went wrong 😢 Please try again.",
//     //   });

//     //     return;

//     if (!selectedService) {
//       setToast({
//         type: "error",
//         message: "Please select a service.",
//       });
//       return;
//     }

//     await handleSubmit(e);
//   };

//   return (
//     <>
//       {toast && (
//         <Toast
//           type={toast.type}
//           message={toast.message}
//           onClose={() => setToast(null)}
//         />
//       )}

//       <section className="w-full bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

//             {/* LEFT */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-blue/40">
//                 Contact
//               </p>

//               <h2 className="max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
//                 Tell us about
//                 <span className="block text-orange">
//                   your project.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-md text-lg leading-relaxed text-blue/60">
//                 Whether you have a fully formed brief or just
//                 an idea, we'd love to hear what you're thinking.
//               </p>
//             </motion.div>

//             {/* FORM */}
//             <motion.form
//               ref={formRef}
//               onSubmit={onSubmit}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="space-y-10"
//             >

//               {/* NAME + EMAIL */}
//               <div className="grid gap-10 sm:grid-cols-2">

//                 <div>
//                   <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                     Your name
//                   </label>

//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="John Doe"
//                     required
//                     className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                     Email
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="you@email.com"
//                     required
//                     className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   />
//                 </div>

//               </div>

//               {/* COMPANY + PHONE */}
//               <div className="grid gap-10 sm:grid-cols-2">

//                 <div>
//                   <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                     Company
//                   </label>

//                   <input
//                     type="text"
//                     name="company"
//                     placeholder="Your company"
//                     required
//                     className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                     Phone
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="+234"
//                     required
//                     className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   />
//                 </div>

//               </div>

//               {/* SERVICE */}
//               <div>
//                 <label className="mb-4 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                   What can we help with?
//                 </label>

//                 <div className="flex flex-wrap gap-3">

//                   {services.map((service) => {
//                     const isSelected = selectedService === service;

//                     return (
//                       <button
//                         key={service}
//                         type="button"
//                         onClick={() => setSelectedService(service)}
//                         className={`rounded-full border px-5 py-3 text-sm cursor-pointer transition-all duration-300 ${
//                           isSelected
//                             ? "border-orange bg-orange text-white"
//                             : "border-blue/20 hover:border-orange hover:bg-orange hover:text-white"
//                         }`}
//                       >
//                         {service}
//                       </button>
//                     );
//                   })}

//                 </div>

//                 {/* This is what Formspree receives */}
//                 <input
//                   type="hidden"
//                   name="service"
//                   value={selectedService}
//                 />
//               </div>

//               {/* MESSAGE */}
//               <div>
//                 <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                   Tell us about your project
//                 </label>

//                 <textarea
//                   name="message"
//                   rows={5}
//                   placeholder="Let's create something beautiful..."
//                   required
//                   className="w-full resize-none border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                 />
//               </div>

//               {/* SUBMIT */}
//               <button
//                 type="submit"
//                 disabled={state.submitting}
//                 className="group flex items-center gap-5 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-8 hover:border-orange hover:text-orange disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 {state.submitting ? "Sending..." : "Send enquiry"}

//                 <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
//                   <FiArrowRight />
//                 </span>
//               </button>

//             </motion.form>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }












































// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";
// import { useForm } from "@formspree/react";
// import Toast from "../../Lib/Toast"

// export default function ContactForm() {

//   //import.meta.env.VITE_FORMSPREE_ID || 

//   const [ selectedService, setSelectedService ] = useState("")
//   const [state, handleSubmit] = useForm("mvzzgoqp");

// // console.log("msg", import.meta.env.VITE_FORMSPREE_ID);

//   const [toast, setToast] = useState(null);

//   const formRef = useRef(null);


//   // SUCCESS MESSAGE
//   useEffect(() => {

//     // if(!state.succeeded) return;
    
//     if (!state.succeeded) return; 
//     {
//       setToast({
//         type: "success",
//         message: "Message sent successfully 🎉",
//       });


//       if (formRef.current) {
//         formRef.current.reset();
//       }


//       const timer = setTimeout(() => {
//         setToast(null);
//       }, 4000);


//       return () => clearTimeout(timer);
//     }


//   }, [state.succeeded]);


  
//   // ERROR MESSAGE
//   useEffect(() => {

//     if (state.errors?.length && !state.submitting) {

//       setToast({
//         type: "error",
//         message: "Something went wrong 😢 Please try again.",
//       });

//     }

//   }, [state.errors, state.submitting]);



//   return (

//     <>
//     {
//         toast && (
//           <Toast
//             type={toast.type}
//             message={toast.message}
//             onClose={() => setToast(null)}
//           />
//         )
//       }

//     <section className="w-full bg-white px-6 py-24 text-blue sm:px-8 md:px-12 lg:px-16 xl:px-20">
      
//       <div className="mx-auto max-w-7xl">

//         <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

//           {/* Left */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-blue/40">
//               Contact
//             </p>

//             <h2 className="max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
//               Tell us about
//               <span className="block text-orange">
//                 your project.
//               </span>
//             </h2>

//             <p className="mt-8 max-w-md text-lg leading-relaxed text-blue/60">
//               Whether you have a fully formed brief or just
//               an idea, we'd love to hear what you're thinking.
//             </p>
//           </motion.div>


//           {/* Form */}
//           <motion.form
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-10"
//             ref={formRef}
//             onSubmit={handleSubmit}
//           >

//             {/* Name + Email */}
//             <div className="grid gap-10 sm:grid-cols-2">

//               <div>
//                 <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                   Your name
//                 </label>

//                 <input
//                   type="text"
//                   name="firstName"
//                   className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   placeholder="John Doe"            
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   placeholder="you@email.com"
//                   required
//                 />
//               </div>

//             </div>


//             {/* Company + Phone */}
//             <div className="grid gap-10 sm:grid-cols-2">

//               <div>
//                 <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                   Company
//                 </label>

//                 <input
//                   type="text"
//                   name="company"
//                   className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   placeholder="Your company"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                   Phone
//                 </label>

//                 <input
//                   type="tel"
//                   name="phone"
//                   className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                   placeholder="+234"
//                   required
//                 />
//               </div>

//             </div>


//             {/* Service */}
//             <div>
//               <label className="mb-4 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                 What can we help with?
//               </label>

//               <div className="flex flex-wrap gap-3">

//                 {[
//                   "Brand Strategy",
//                   "Identity Design",
//                   "Digital Marketing",
//                   "Equipment Rental",
//                 ].map((service) => (
//                   <button
//                     key={service}
//                     type="button"
//                     onClick={()=> setSelectedService(service)}
//                     className={`rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
//       selectedService === service
//         ? "border-orange bg-orange text-white"
//         : "border-blue/20 hover:border-orange hover:bg-orange hover:text-white"
//     }`}
//                   >
//                     {service}
//                   </button>
//                 ))}

//               </div>
//             </div>

//             <input
//               type="hidden"
//               name="service"
//               value={selectedService}

//              />
//             {/* Message */}
//             <div>
//               <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
//                 Tell us about your project
//               </label>

//               <textarea
//                 name="message"
//                 rows="5"
//                 className="w-full resize-none border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
//                 placeholder="Let's create something beautiful..."
//                 required
//               />
//             </div>


//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={state.submitting}
//               className="group flex items-center gap-5 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-8 hover:border-orange hover:text-orange"
//             >
//               {state.submitting ? "Sending..." : "Send enquiry"}


//               <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
//                 <FiArrowRight />
//               </span>
//             </button>

//           </motion.form>

//         </div>

//       </div>
//     </section>
//     </>
//   );
// }

