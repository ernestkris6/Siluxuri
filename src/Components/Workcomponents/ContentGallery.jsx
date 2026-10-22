
import { Link, useParams } from "react-router";
import { project } from "../../data";

export default function ContentGallery() {
  const { slug } = useParams();

  const selectedProject = project.find(
    (item) => item.slug === slug
  );

  if (!selectedProject) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-semibold">
          Project not found
        </h1>

        <p className="mt-3 text-gray-500">
          We couldn't find the brand you're looking for.
        </p>

        <Link
          to="/work"
          className="mt-6 underline underline-offset-4"
        >
          Back to Work
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-5 py-24 md:px-12 lg:px-20">
      <Link
        to={`/work/${selectedProject.slug}`}
        className="mb-8 inline-flex items-center gap-2 text-sm"
      >
        <span aria-hidden="true">←</span>
        Back to {selectedProject.name}
      </Link>

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em]">
          Content Creation
        </p>

        <h1 className="text-4xl font-semibold md:text-6xl">
          {selectedProject.name}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-70">
          Explore the creative content developed for{" "}
          {selectedProject.name}.
        </p>
      </header>

      {/* Content gallery will go here */}
      <section aria-label={`${selectedProject.name} content gallery`}>
        <p className="text-sm opacity-60">
          Content gallery coming soon.
        </p>
      </section>
    </main>
  );
}
