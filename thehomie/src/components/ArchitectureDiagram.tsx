export default function ArchitectureDiagram() {
  const steps = [
    { label: "Data", sub: "Calendar, Location, Finance, Wearable" },
    { label: "Graph", sub: "Personal Intelligence Graph" },
    { label: "Context", sub: "Context Engine" },
    { label: "Interventions", sub: "Guardrails + Nudges" },
    { label: "Trust", sub: "Encrypted & User-Controlled" },
  ];

  return (
    <div className="rounded-xl border border-graphite/5 bg-white p-6 md:p-8" role="img" aria-label="TheHomie architecture flow">
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-graphite text-sm font-semibold text-offwhite">
                {step.label}
              </div>
              <p className="mt-2 max-w-[120px] text-xs text-slate/70">{step.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-3 hidden h-0.5 w-8 bg-graphite/15 md:block" aria-hidden="true" />
            )}
            {i < steps.length - 1 && (
              <div className="my-1 h-6 w-0.5 bg-graphite/15 md:hidden" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
