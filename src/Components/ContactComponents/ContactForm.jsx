import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "@formspree/react";
import Toast from "../../Lib/Toast";

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [state, handleSubmit] = useForm("mvzzgoqp");
  const [toast, setToast] = useState(null);

  const formRef = useRef(null);

  const services = [
    "Brand Strategy",
    "Identity Design",
    "Digital Marketing",
    "Equipment Rental",
  ];

  // SUCCESS
  useEffect(() => {
    if (!state.succeeded) return;

    setToast({
      type: "success",
      message: "Message sent successfully 🎉",
    });

    if (formRef.current) {
      formRef.current.reset();
    }

    setSelectedService("");

    const timer = setTimeout(() => {
      setToast(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [state.succeeded]);

  // ERROR
  useEffect(() => {
    if (state.errors?.length > 0 && !state.submitting) {
      setToast({
        type: "error",
        message: "Something went wrong 😢 Please try again.",
      });
    }
  }, [state.errors, state.submitting]);

  // FORM SUBMISSION
  const onSubmit = async (event) => {
    event.preventDefault();

    // Make sure a service has been selected
    if (!selectedService) {
      setToast({
        type: "error",
        message: "Please select a service.",
      });
      return;
    }

    await handleSubmit(event);
  };

  return (
    <>
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

            {/* LEFT */}
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

            {/* FORM */}
            <motion.form
              ref={formRef}
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >

              {/* NAME + EMAIL */}
              <div className="grid gap-10 sm:grid-cols-2">

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                    Your name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="John Doe"
                    required
                    className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  />
                </div>

              </div>

              {/* COMPANY + PHONE */}
              <div className="grid gap-10 sm:grid-cols-2">

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    required
                    className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234"
                    required
                    className="w-full border-b border-blue/90 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                  />
                </div>

              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-4 block text-xs uppercase tracking-[0.15em] text-blue/90">
                  What can we help with?
                </label>

                <div className="flex flex-wrap gap-3">

                  {services.map((service) => {
                    const isSelected = selectedService === service;

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`rounded-full border px-5 py-3 text-sm cursor-pointer transition-all duration-300 ${
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

                {/* This is what Formspree receives */}
                <input
                  type="hidden"
                  name="service"
                  value={selectedService}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-blue/90">
                  Tell us about your project
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Let's create something beautiful..."
                  required
                  className="w-full resize-none border-b border-blue/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-blue/30 focus:border-orange"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={state.submitting}
                className="group flex items-center gap-5 border-b border-blue pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:gap-8 hover:border-orange hover:text-orange disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send enquiry"}

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight />
                </span>
              </button>

            </motion.form>

          </div>
        </div>
      </section>
    </>
  );
}












































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

