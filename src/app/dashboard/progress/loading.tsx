export default function ProgressLoading() {
  return (
    <div className="mx-auto max-w-5xl animate-pulse space-y-6">
      <div className="h-9 w-56 rounded-full bg-ink/10" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="paper-card h-24" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="paper-card h-64" />
        <div className="paper-card h-64" />
      </div>
      <div className="paper-card h-40" />
    </div>
  );
}
