export default function DashboardMock() {
  return (
    <div
      className="rounded-2xl border border-graphite/10 bg-white p-6 shadow-sm md:p-8"
      role="img"
      aria-label="TheHomie dashboard preview"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-graphite/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-green" />
          </div>
          <span className="text-xs font-medium text-slate/60">TheHomie OS</span>
        </div>
        <span className="text-xs text-slate/40">Mode: Executive</span>
      </div>

      {/* Dashboard grid */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {/* Status card */}
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-xs font-medium text-slate/60 uppercase tracking-wider">Status</p>
          <p className="mt-2 text-sm font-medium text-graphite">Aligned</p>
          <div className="mt-3 h-1.5 w-full rounded-full bg-graphite/5">
            <div className="h-full w-4/5 rounded-full bg-green" />
          </div>
        </div>

        {/* Active guardrails */}
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-xs font-medium text-slate/60 uppercase tracking-wider">Active Guardrails</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 text-xs text-graphite">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Spending limit: $150/day
            </div>
            <div className="flex items-center gap-2 text-xs text-graphite">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              No social after 11pm
            </div>
            <div className="flex items-center gap-2 text-xs text-graphite">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Sleep goal: 7h minimum
            </div>
          </div>
        </div>

        {/* Context engine */}
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-xs font-medium text-slate/60 uppercase tracking-wider">Context Engine</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-xs text-graphite">
              <span>Location</span>
              <span className="text-slate/60">Home</span>
            </div>
            <div className="flex items-center justify-between text-xs text-graphite">
              <span>Energy</span>
              <span className="text-slate/60">Moderate</span>
            </div>
            <div className="flex items-center justify-between text-xs text-graphite">
              <span>Risk Level</span>
              <span className="text-green">Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
