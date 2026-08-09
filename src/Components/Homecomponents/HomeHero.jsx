import herovideo from "../../assets/herovideo.mp4"

export default function HeroSection() {
  return (
    <section className="w-full min-h-[70vh] text-blue">
      <div className="mx-auto flex items-center px-1 py-24">
        
        <div className="w-full">
          {/* Heading */}
          <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hello, we are your next agencyyyyyyyyy.
          </h1>

          {/* Description */}
          <p className="mt-8 text-2xl font-medium sm:text-3xl md:w-2/3">
            The kind that reimagines what PR, Social Media, Digital Marketing, Events, Social Commerce can achieve for you and your brand. The kind that dives deep to help your business grow and meet brand results.
          </p>
        </div>
      </div>

    <div className="relative min-h-screen overflow-hidden">
            {/* Video */}
            <video
                className="absolute inset-0 w-full h-[380px] md:w-full md:h-[480px] rounded-2xl object-cover"
                src={herovideo}
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    </section>
  );
}



























// import herovideo from "../../assets/herovideo.mp4";

// export default function HeroSection() {
//   return (
//     <section className="w-full px-2 py-20 text-black sm:px-8 md:px-12">
      
//       {/* Text */}
//       <div className="w-full">
//         <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
//           Hello, we are your next agency.
//         </h1>

//         <p className="mt-6 text-2xl font-medium leading-tight sm:text-3xl md:w-2/3">
//           The kind that reimagines what PR, Social Media, Digital Marketing,
//           Events, Social Commerce can achieve for you and your brand. The kind
//           that dives deep to help your business grow and meet brand results.
//         </p>
//       </div>

//       {/* Video */}
//       <div className="relative mt-8 h-[280px] w-full overflow-hidden rounded-2xl sm:h-[380px] md:mt-10 md:h-[480px]">
        
//         {/* Video */}
//         <video
//           className="absolute inset-0 h-full w-full object-cover"
//           src={herovideo}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40" />

//       </div>
//     </section>
//   );
// }

















