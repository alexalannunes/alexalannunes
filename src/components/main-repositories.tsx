"use client";

export function MainRepositories() {
  const handleEventGA = (repo: string) => {
    (window as any).gtag("event", "visit_main_repositories", {
      repository: repo,
    });
  };

  return (
    <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3">
      <a
        href="https://supa-shadows.vercel.app?utm_source=alexalannunes_site"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleEventGA("SupaShadows")}
      >
        <h2 className="mb-3 text-2xl font-semibold">SupaShadows</h2>
        <p className="m-0 text-sm text-center opacity-50">
          Generate beautiful CSS shadows
        </p>
      </a>

      <a
        href="https://supa-colors.vercel.app?utm_source=alexalannunes_site"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleEventGA("SupaColors")}
      >
        <h2 className="mb-3 text-2xl font-semibold">SupaColors</h2>
        <p className="m-0 text-sm opacity-50">
          Generate beautiful palette colors
        </p>
      </a>

      <a
        href="https://tmp-mail.vercel.app?utm_source=alexalannunes_site"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleEventGA("TmpMail")}
      >
        <h2 className="mb-3 text-2xl font-semibold">TmpMail</h2>
        <p className="m-0 text-sm opacity-50">
          Get a temporary email address in a second
        </p>
      </a>
    </div>
  );
}
