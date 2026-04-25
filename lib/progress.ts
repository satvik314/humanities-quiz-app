export type TopicProgress = { completed: boolean; score: number };
export type ProgressMap = Record<string, TopicProgress>;

const KEY = "hg_progress";

export function readProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function writeProgress(p: ProgressMap) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(p));
}

export function recordScore(topicId: string, score: number) {
  const p = readProgress();
  const prev = p[topicId];
  const best = prev ? Math.max(prev.score, score) : score;
  const next: ProgressMap = {
    ...p,
    [topicId]: { completed: true, score: best },
  };
  writeProgress(next);
  return next;
}
