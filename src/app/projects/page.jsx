import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "List of my Next.js and React projects",
};

const projects = [
  {
    name: "Genderize Accuracy",
    description: "Full-featured Accuracy app built with Next.js",
    live: "https://genderize-accuracy.vercel.app/",
    github: "https://github.com/Monisasmal/Genderize-Accuracy",
  },
  // {
    // name: "Dashboard App",
    // description: "Admin dashboard using Next.js and Tailwind",
    // live: "https://dashboard.vercel.app",
    // github: "https://github.com/username/dashboard",
  // },
];

export default function ProjectsPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Projects
      </h1>

      <p className="text-gray-600 mb-6">
        Below are some of my deployed projects with live demos and source code.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-2">
              {project.name}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo →
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
