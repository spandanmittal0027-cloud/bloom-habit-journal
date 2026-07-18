export default function JournalLoading() {
  return (
    <div className="mx-auto max-w-5xl animate-pulse space-y-5">
      <div className="h-9 w-48 rounded-full bg-ink/10" />
      <div className="paper-card h-20" />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_260px]">
        <div className="paper-card h-[420px]" />
        <div className="paper-card h-64" />
      </div>
      <div className="paper-card h-40" />
    </div>
  );
}
