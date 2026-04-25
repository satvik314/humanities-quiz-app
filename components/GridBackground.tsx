export default function GridBackground() {
  return (
    <div className="grid-bg" aria-hidden="true">
      <div className="grid-plane" />
      <div className="grid-plane grid-plane--top" />
      <div className="grid-vignette" />
      <div className="grid-scanlines" />
    </div>
  );
}
