import ProjectCard from "./ProjectCard";
import { project } from "../../data";
import image1 from "../../assets/digital1.webp";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router";

export default function Project () {
  // const featuredProject = project[0];
  // const projectsItems = project.slice(1);
  const projectItems = project;

  return (
    <main className="overflow-hidden bg-white text-white/95">

      {/* HERO */}

      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40 lg:px-16">

    {/* Background Image */}
      <img
        src={image1}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

    {/* Blue Overlay */}
    <div className="absolute inset-0 bg-blue/65" />

    {/* Content */}
    <div className="relative mx-auto max-w-7xl">

      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-10 bg-white/80" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
          Siluxri / Selected Works
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Ideas made
          <span className="block italic text-orange">
            visible.
          </span>
        </h1>

        <div className="max-w-md lg:pb-2">
          <p className="text-base leading-7 text-white/80 md:text-lg">
            A collection of identities, campaigns and digital
            experiences crafted for ambitious brands.
          </p>

          <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-2 w-2 rounded-full bg-orange" />
            Six brands. Many stories.
          </div>
        </div>
      </div>
  </div>
</section>

      {/* FEATURED PROJECT */}
      
      {/* REMAINING PROJECTS */}
<section className="px-5 py-24 sm:px-8 md:py-32 lg:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-magenta">
          The archive
        </p>

        <h2 className="font-serif text-4xl leading-tight sm:text-5xl text-magenta">
          More work.
          <span className="block italic text-orange">
            More possibilities.
          </span>
        </h2>
      </div>

      <p className="max-w-xs text-sm leading-6 text-blue">
        Explore the brands, stories and creative solutions
        behind our work.
      </p>

    </div>

    <div className="grid gap-x-6 gap-y-16 sm:grid-cols-3">
      {projectItems.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>

  </div>
</section>

      {/* CLOSING STATEMENT */}
      <section className="bg-blue px-5 py-24 text-white sm:px-8 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-skyblue">
            Your brand, next
          </p>

          <h2 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Every great brand
            <span className="block italic text-orange">
              starts with an idea.
            </span>
          </h2>

          <hr className="text-white/25 my-4"/>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white">
            Have a vision you want to bring to life? Let's create
            something meaningful together.
          </p>

          <Link
            to="contact"
            className="mt-8 inline-flex items-center gap-4 border-b border-skyblue pb-2 text-sm font-medium text-white transition-colors hover:text-skyblue"
          >
            Chat with US
            <span><FiArrowUpRight /></span>
          </Link>
        </div>
      </section>

    </main>
  );
};

