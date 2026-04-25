"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Topic } from "@/lib/quizData";
import { recordScore } from "@/lib/progress";

type Props = { topic: Topic };

type Answer = { picked: number; correct: boolean };

export default function QuizClient({ topic }: Props) {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [done, setDone] = useState(false);

  const total = topic.questions.length;
  const q = topic.questions[idx];
  const score = answers.filter((a) => a.correct).length;

  const onExit = () => router.push("/");

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === q.answer;
    setAnswers((a) => [...a, { picked: i, correct }]);
  }

  function next() {
    if (idx + 1 >= total) {
      const finalScore = answers.filter((a) => a.correct).length;
      recordScore(topic.id, finalScore);
      setDone(true);
    } else {
      setIdx(idx + 1);
      setPicked(null);
    }
  }

  function restart() {
    setIdx(0);
    setPicked(null);
    setAnswers([]);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / total) * 100);
    const grade =
      pct >= 90
        ? "MASTERED"
        : pct >= 70
        ? "STRONG"
        : pct >= 50
        ? "PASSING"
        : "REVIEW NEEDED";
    return (
      <div className="quiz">
        <QuizHeader
          topic={topic}
          idx={total}
          total={total}
          score={score}
          onExit={onExit}
        />
        <div className="result">
          <div className="result__glyph">{topic.glyph}</div>
          <div className="result__label">{grade}</div>
          <div className="result__score">
            <span className="result__score-num">{score}</span>
            <span className="result__score-den">/{total}</span>
          </div>
          <div className="result__bar">
            <div
              className="result__bar-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="result__pct">{pct}% CORRECT</div>
          <div className="result__breakdown">
            {answers.map((a, i) => (
              <div
                key={i}
                className={
                  "result__pip " +
                  (a.correct ? "result__pip--ok" : "result__pip--bad")
                }
                title={`Q${i + 1}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="result__actions">
            <button className="btn btn--ghost" onClick={onExit}>
              ← ALL TOPICS
            </button>
            <button className="btn btn--primary" onClick={restart}>
              RETRY ROUND ↻
            </button>
          </div>
        </div>
      </div>
    );
  }

  const reveal = picked !== null;

  return (
    <div className="quiz">
      <QuizHeader
        topic={topic}
        idx={idx}
        total={total}
        score={score}
        onExit={onExit}
      />

      <div className="question">
        <div className="question__num">
          QUESTION {String(idx + 1).padStart(2, "0")} / {total}
        </div>
        <h2 className="question__text">{q.q}</h2>

        <div className="options">
          {q.options.map((opt, i) => {
            const isCorrect = i === q.answer;
            const isPicked = i === picked;
            let cls = "option";
            if (reveal && isCorrect) cls += " option--correct";
            else if (reveal && isPicked && !isCorrect) cls += " option--wrong";
            else if (reveal) cls += " option--dim";
            return (
              <button
                key={i}
                className={cls}
                disabled={reveal}
                onClick={() => pick(i)}
              >
                <span className="option__key">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="option__text">{opt}</span>
                {reveal && isCorrect && (
                  <span className="option__mark">✓</span>
                )}
                {reveal && isPicked && !isCorrect && (
                  <span className="option__mark">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {reveal && (
          <div
            className={
              "explain " + (picked === q.answer ? "explain--ok" : "explain--bad")
            }
          >
            <div className="explain__head">
              {picked === q.answer ? "CORRECT" : "INCORRECT"}
              <span className="explain__divider">//</span>
              <span className="explain__sub">
                {picked === q.answer
                  ? "Well played."
                  : `Answer: ${String.fromCharCode(65 + q.answer)}`}
              </span>
            </div>
            <p className="explain__body">{q.explain}</p>
            <button className="btn btn--primary explain__next" onClick={next}>
              {idx + 1 >= total ? "SEE RESULTS" : "NEXT QUESTION"} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function QuizHeader({
  topic,
  idx,
  total,
  score,
  onExit,
}: {
  topic: Topic;
  idx: number;
  total: number;
  score: number;
  onExit: () => void;
}) {
  const pct = (idx / total) * 100;
  return (
    <header className="quiz__header">
      <button className="quiz__exit" onClick={onExit}>
        ← <span>EXIT</span>
      </button>
      <div className="quiz__topic">
        <span className="quiz__topic-glyph">{topic.glyph}</span>
        <span className="quiz__topic-title">{topic.title.toUpperCase()}</span>
      </div>
      <div className="quiz__meter">
        <div className="quiz__meter-bar">
          <div className="quiz__meter-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="quiz__meter-text">
          <span>
            {idx}/{total}
          </span>
          <span className="quiz__meter-score">● {score}</span>
        </div>
      </div>
    </header>
  );
}
