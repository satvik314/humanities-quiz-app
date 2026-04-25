"use client";

import { useEffect, useState } from "react";
import { topics } from "@/lib/quizData";
import { readProgress, type ProgressMap } from "@/lib/progress";
import TopicCard from "@/components/TopicCard";

const TOTAL_TOPICS = topics.length;
const TOTAL_QUESTIONS = topics.reduce((n, t) => n + t.questions.length, 0);

export default function HomePage() {
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    setProgress(readProgress());
    const onStorage = () => setProgress(readProgress());
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onStorage);
    };
  }, []);

  const completedTopics = Object.values(progress).filter((p) => p.completed)
    .length;
  const totalScore = Object.values(progress).reduce(
    (s, p) => s + (p.score || 0),
    0
  );

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__brand">
          <span className="home__brand-mark">◢◤</span>
          <span className="home__brand-text">HUMANITIES//GRID</span>
        </div>
        <div className="home__stats">
          <div className="stat">
            <div className="stat__label">TOPICS</div>
            <div className="stat__value">
              {completedTopics}
              <span className="stat__total">/{TOTAL_TOPICS}</span>
            </div>
          </div>
          <div className="stat">
            <div className="stat__label">SCORE</div>
            <div className="stat__value">
              {totalScore}
              <span className="stat__total">/{TOTAL_QUESTIONS}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="home__hero">
        <h1 className="home__title">
          <span className="home__title-line">Six disciplines.</span>
          <span className="home__title-line home__title-line--accent">
            Sixty questions.
          </span>
          <span className="home__title-line">Learn by playing.</span>
        </h1>
        <p className="home__lede">
          Pick a topic. Each round runs ten multiple-choice questions, with a
          short explainer after every answer so the concept actually sticks.
        </p>
      </div>

      <div className="topic-grid">
        {topics.map((t) => (
          <TopicCard key={t.id} topic={t} progress={progress[t.id]} />
        ))}
      </div>

      <footer className="home__foot">
        <span>v1.0 // 06 TOPICS // 60 ITEMS</span>
        <span className="home__foot-pulse">● LIVE</span>
      </footer>
    </div>
  );
}
