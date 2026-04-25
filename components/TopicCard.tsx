import Link from "next/link";
import type { Topic } from "@/lib/quizData";
import type { TopicProgress } from "@/lib/progress";

type Props = {
  topic: Topic;
  progress?: TopicProgress;
};

export default function TopicCard({ topic, progress }: Props) {
  const completed = progress?.completed;
  const score = progress?.score;
  return (
    <Link href={`/quiz/${topic.id}`} className="topic-card">
      <div className="topic-card__ring" aria-hidden="true">
        <div className="topic-card__ring-outer" />
        <div className="topic-card__ring-mid" />
        <div className="topic-card__ring-inner" />
        <div className="topic-card__glyph">{topic.glyph}</div>
        <div className="topic-card__tick topic-card__tick--n" />
        <div className="topic-card__tick topic-card__tick--e" />
        <div className="topic-card__tick topic-card__tick--s" />
        <div className="topic-card__tick topic-card__tick--w" />
      </div>
      <div className="topic-card__meta">
        <div className="topic-card__title">{topic.title}</div>
        <div className="topic-card__sub">{topic.subtitle}</div>
      </div>
      <div className="topic-card__foot">
        <span className="topic-card__count">10 · MCQ</span>
        {completed ? (
          <span className="topic-card__score">
            {score}/10 <span className="topic-card__check">●</span>
          </span>
        ) : (
          <span className="topic-card__cta">ENTER →</span>
        )}
      </div>
    </Link>
  );
}
