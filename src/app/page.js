import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black px-6 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/waves2.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 " />

      <main className="relative z-10 flex flex-col items-center text-center gap-8 max-w-2xl">
        {/* Accent icon */}
        <Rocket className="h-5 w-5 text-[#bfdbfe]" strokeWidth={1.5} />

        {/* Label */}
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
          Coming Soon
        </span>

        {/* Headline */}
        <h1 className="brand-font text-4xl font-semibold leading-tight tracking-tighter text-white sm:text-6xl lg:text-7xl">
          Something new
          <br />
          is on the way.
        </h1>

        {/* Description */}
        <p className="max-w-md text-base font-light leading-relaxed text-zinc-500 sm:text-lg">
          We&apos;re building something worth the wait. Stay tuned for updates.
        </p>

        {/* Subtle divider */}
        <div className="h-px w-16 bg-zinc-800" />

        {/* Contact hint */}
        <p className="text-sm font-light text-zinc-600">
          Get in touch&nbsp;&mdash;&nbsp;
          <a
            href="mailto:hello@example.com"
            className="text-[#bfdbfe] transition-colors hover:text-white"
          >
            kojoforex@gmail.com
          </a>
        </p>
      </main>
    </div>
  );
}
