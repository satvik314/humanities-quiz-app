"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Topic } from "@/lib/quizData";

type Props = {
  topic: Topic;
};

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function QuizClient({ topic }: Props) {
  const total = topic.questions.length;
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = topic.questions[index];
  const progressPct = useMemo(
    () => Math.round(((index + (revealed ? 1 : 0)) / total) * 100),
    [index, revealed, total]
  );

  const onPick = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === question.answerIndex) setScore((s) => s + 1);
  };

  const onNext = () => {
    if (index + 1 >= total) {
      setFinished(true);
      return;
    }
    setIndex((n) => n + 1);
    setSelected(null);
    setRevealed(false);
  };

  const onRestart = () => {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const verdict =
      pct === 100
        ? "Flawless. The muses approve."
        : pct >= 80
        ? "Sharp instincts — almost too good."
        : pct >= 60
        ? "Solid run. A few footnotes to revisit."
        : pct >= 40
        ? "The seminar continues — keep digging."
        : "Fresh start, fresh syllabus. You've got this.";

    return (
      <div className="neon-border rounded-2xl bg-black/40 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-pink/80">
          Final Score
        </p>
        <div className="mt-3 text-6xl font-extrabold text-glow-pink">
          {score}
          <span className="text-pink-200/50 text-3xl font-bold">
            {" "}
            / {total}
          </span>
        </div>
        <p className="mt-3 text-pink-100/80">{verdict}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={onRestart} className="btn-neon">
            Replay {topic.title}
          </button>
          <Link href="/" className="btn-ghost">
            Pick another topic
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-pink-200/70">
        <span>
          Question{" "}
          <span className="text-white">
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          / {String(total).padStart(2, "0")}
        </span>
        <span>
          Score <span className="text-white">{score}</span>
        </span>
      </div>

      <div className="mt-3 progress-rail">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <h2 className="mt-7 text-xl md:text-2xl font-semibold leading-snug text-white">
        {question.prompt}
      </h2>

      <ul className="mt-6 grid gap-3">
        {question.options.map((opt, i) => {
          let state: "correct" | "wrong" | "reveal" | undefined;
          if (revealed) {
            if (i === question.answerIndex) {
              state = i === selected ? "correct" : "reveal";
            } else if (i === selected) {
              state = "wrong";
            }
          }
          return (
            <li key={i}>
              <button
                onClick={() => onPick(i)}
                disabled={revealed}
                data-state={state}
                className="option-card"
              >
                <span className="kbd">{LETTERS[i]}</span>
                <span>{opt}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {revealed && (
        <div className="mt-6 neon-border-red rounded-xl bg-black/45 p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-neon-red">
            {selected === question.answerIndex ? "Correct" : "Not quite"}
          </p>
          <p className="mt-2 text-sm md:text-base text-pink-100/90 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.3em] text-pink-200/60 hover:text-white"
        >
          Quit run
        </Link>
        <button
          onClick={onNext}
          disabled={!revealed}
          className="btn-neon disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {index + 1 >= total ? "See results" : "Next question →"}
        </button>
      </div>
    </div>
  );
}
