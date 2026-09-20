
// import ProjectCard from "../components/works/ProjectCard";
import ProjectCard from "./ProjectCard";
import { project } from "../../data";

export default function Project () {
  const featuredProject = project[0];
  const remainingProjects = project.slice(1);

  return (
    <main className="overflow-hidden bg-[#F2F2F2] text-[#2F2E41]">

      {/* HERO */}
      <section className="px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#007589]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#007589]">
              Siluxri / Selected Works
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Ideas made
              <span className="block italic text-[#007589]">
                visible.
              </span>
            </h1>

            <div className="max-w-md lg:pb-2">
              <p className="text-base leading-7 text-[#555568] md:text-lg">
                A collection of identities, campaigns and digital
                experiences crafted for ambitious brands.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F2E41]">
                <span className="h-2 w-2 rounded-full bg-[#EB6F38]" />
                Six brands. Many stories.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#007589]">
              01 / Featured Project
            </p>

            <p className="text-xs uppercase tracking-[0.15em] text-[#77778A]">
              {featuredProject.category}
            </p>
          </div>

          <ProjectCard project={featuredProject} featured />
        </div>
      </section>

      {/* REMAINING PROJECTS */}
      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#007589]">
                The archive
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                More work.
                <span className="block italic text-[#007589]">
                  More possibilities.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#555568]">
              Explore the brands, stories and creative solutions
              behind our work.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2">
            {remainingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="bg-[#2F2E41] px-5 py-24 text-[#F2F2F2] sm:px-8 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#A0CBD2]">
            Your brand, next
          </p>

          <h2 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Every great brand
            <span className="block italic text-[#A0CBD2]">
              starts with an idea.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#D2D2DB]">
            Have a vision you want to bring to life? Let's create
            something meaningful together.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-4 border-b border-[#A0CBD2] pb-2 text-sm font-medium text-[#F2F2F2] transition-colors hover:text-[#A0CBD2]"
          >
            Start a conversation
            <span>↗</span>
          </a>
        </div>
      </section>

    </main>
  );
};
