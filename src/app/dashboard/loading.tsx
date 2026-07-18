export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-5xl animate-pulse space-y-6">
      <div className="space-y-2">
        <div className="h-3 w-32 rounded-full bg-ink/10" />
        <div className="h-9 w-64 rounded-full bg-ink/10" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="paper-card h-32" />
        ))}
      </div>
      <div className="paper-card px-5 py-6">
        <div className="mb-4 h-6 w-48 rounded-full bg-ink/10" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-24 rounded-2xl bg-ink/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
