import { notFound } from "next/navigation";
import { topicById, topics } from "@/lib/quizData";
import QuizClient from "@/components/QuizClient";

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.id }));
}

export default function QuizPage({ params }: { params: { topic: string } }) {
  const topic = topicById(params.topic);
  if (!topic) notFound();
  return <QuizClient topic={topic} />;
}
