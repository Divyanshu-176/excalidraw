import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-950">
      Navigation
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <div className="text-2xl font-bold text-zinc-900 dark:text-white">
          Excalimore
        </div>
        <div className="flex gap-4">
          <Link href="/signin">
            <button className="cursor-pointer rounded-lg px-6 py-2 font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className=" cursor-pointer rounded-lg bg-zinc-900 px-6 py-2 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-32">
        <h1 className="mb-6 max-w-2xl text-5xl font-bold text-zinc-900 dark:text-white md:text-6xl">
          Draw, Create, and Share
        </h1>
        <p className="mb-12 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
          A minimal, open-source drawing application for sketches, diagrams, and collaborative whiteboarding.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link href="/signup">
            <button className="cursor-pointer rounded-lg bg-zinc-900 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Get Started Free
            </button>
          </Link>
          <button className="cursor-pointer rounded-lg border border-zinc-300 px-8 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900">
            Learn More
          </button>
        </div>

        {/* Features */}
        <div className="mt-20 grid w-full max-w-3xl gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
            <div className="mb-3 text-2xl">✏️</div>
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
              Intuitive Drawing
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Simple and powerful tools to bring your ideas to life
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
            <div className="mb-3 text-2xl">🤝</div>
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
              Real-time Collaboration
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Work together with your team in real-time
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
            <div className="mb-3 text-2xl">🔒</div>
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
              Privacy First
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Your sketches stay private and secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
