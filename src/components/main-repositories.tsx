"use client";

const REPOSITORIES = [
  {
    name: "use-selectable",
    description: "React hook for item selection",
    url: "https://github.com/alexalannunes/use-selectable",
  },
  {
    name: "use-deletable",
    description: "A simple React hook to manage item deletion confirmation.",
    url: "https://github.com/alexalannunes/use-deletable",
  },
  {
    name: "business-card",
    description: "generate dev business card",
    url: "https://github.com/alexalannunes/business-card",
  },
  {
    name: "SupaShadows",
    description: "Generate beautiful CSS shadows",
    url: "https://supa-shadows.vercel.app?utm_source=alexalannunes_site",
  },
  {
    name: "SupaColors",
    description: "Generate beautiful palette colors",
    url: "https://supa-colors.vercel.app?utm_source=alexalannunes_site",
  },
  {
    name: "TmpMail",
    description: "Get a temporary email address in a second",
    url: "https://tmp-mail.vercel.app?utm_source=alexalannunes_site",
  },
] as const;

export function MainRepositories() {
  const handleEventGA = (repo: string) => {
    window.gtag?.("event", "visit_main_repositories", {
      repository: repo,
    });
  };

  return (
    <div className="grid text-center sm:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3">
      {REPOSITORIES.map((repo) => (
        <a
          key={repo.name}
          href={repo.url}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleEventGA(repo.name)}
        >
          <h2 className="mb-3 text-2xl font-semibold">{repo.name}</h2>
          <p className="m-0 text-sm text-center text-gray-500 dark:text-gray-400">
            {repo.description}
          </p>
        </a>
      ))}
    </div>
  );
}
