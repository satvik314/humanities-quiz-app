import Link from "next/link";
import { topics } from "@/lib/quizData";

export default function HomePage() {
  return (
    <main className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-neon-pink/80">
          Humanities Arcade
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-glow-pink">Quiz</span>{" "}
          <span className="text-white">the</span>{" "}
          <span className="text-glow-red text-neon-red">Liberal Arts</span>
        </h1>
        <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-pink-100/80">
          Six topics. Ten MCQs each. Pick a discipline, test your instincts, and
          learn the why behind every answer.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-pink-200/70">
          <span className="kbd">6</span>
          topics
          <span className="mx-3 h-1 w-1 rounded-full bg-neon-pink/70" />
          <span className="kbd">60</span>
          questions
          <span className="mx-3 h-1 w-1 rounded-full bg-neon-pink/70" />
          <span className="kbd">∞</span>
          curiosity
        </div>
      </header>

      <section className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/quiz/${topic.slug}`}
            className="topic-card group"
          >
            <div className="flex items-start justify-between">
              <span
                className={
                  "topic-symbol " +
                  (topic.accent === "red" || topic.accent === "crimson"
                    ? "text-glow-red text-neon-red"
                    : "text-glow-pink text-neon-pink")
                }
              >
                {topic.symbol}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-pink-200/60">
                {topic.questions.length} Qs
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{topic.title}</h2>
            <p className="text-sm text-pink-100/70 leading-relaxed">
              {topic.blurb}
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-pink/90">
              <span>Start quiz</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </section>

      <footer className="mt-20 text-center text-[0.7rem] uppercase tracking-[0.4em] text-pink-200/40">
        Built with Next.js · Tailwind · neon-coloured curiosity
      </footer>
    </main>
  );
}
