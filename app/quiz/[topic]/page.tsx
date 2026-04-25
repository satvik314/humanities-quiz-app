import { notFound } from "next/navigation";
import Link from "next/link";
import { topicBySlug, topics } from "@/lib/quizData";
import QuizClient from "@/components/QuizClient";

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}

export default function QuizPage({ params }: { params: { topic: string } }) {
  const topic = topicBySlug(params.topic);
  if (!topic) notFound();

  return (
    <main className="relative mx-auto max-w-3xl px-5 py-10 md:py-16">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.35em] text-pink-200/70 hover:text-white"
        >
          ← All topics
        </Link>
        <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neon-pink/80">
          Humanities Arcade
        </span>
      </div>

      <header className="mt-8 flex items-center gap-4">
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
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {topic.title}
          </h1>
          <p className="text-sm text-pink-100/70">{topic.blurb}</p>
        </div>
      </header>

      <section className="mt-10">
        <QuizClient topic={topic} />
      </section>
    </main>
  );
}
