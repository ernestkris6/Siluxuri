import herovideo from "../../assets/herovideo.mp4"

export default function HeroSection() {
  return (
    <section className="w-full min-h-[70vh] text-blue mb-8">
      <div className="mx-auto flex items-center px-1 py-24">
        
        <div className="w-full">
          {/* Heading */}
          <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hello, we are your next agency.
          </h1>

          {/* Description */}
          <p className="mt-8 text-2xl font-medium sm:text-3xl md:w-2/3">
            The kind that reimagines what PR, Social Media, Digital Marketing, Events, Social Commerce can achieve for you and your brand. The kind that dives deep to help your business grow and meet brand results.
          </p>
        </div>
      </div>

    <div className="relative h-[380px] mt-[-32px] overflow-hidden md:h-[480px]">
            {/* Video */}
            <video
                className="absolute inset-0 w-full h-full rounded-2xl object-cover"
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






































