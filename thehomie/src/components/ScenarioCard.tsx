interface ScenarioCardProps {
  category: string;
  categoryColor: string;
  title: string;
  scenario: string;
  response: string;
}

export default function ScenarioCard({
  category,
  categoryColor,
  title,
  scenario,
  response,
}: ScenarioCardProps) {
  return (
    <div className="rounded-xl border border-graphite/5 bg-white p-6">
      <span
        className="inline-block rounded-full px-3 py-1 text-xs font-medium"
        style={{ backgroundColor: categoryColor + "15", color: categoryColor }}
      >
        {category}
      </span>
      <h3 className="mt-4 text-base font-semibold text-graphite">{title}</h3>
      <div className="mt-4 space-y-3">
        <div className="rounded-lg bg-offwhite p-3">
          <p className="text-xs font-medium text-slate/60 uppercase tracking-wider">Scenario</p>
          <p className="mt-1 text-sm text-graphite">{scenario}</p>
        </div>
        <div className="rounded-lg bg-cyan/5 p-3">
          <p className="text-xs font-medium text-cyan uppercase tracking-wider">TheHomie Response</p>
          <p className="mt-1 text-sm text-graphite">{response}</p>
        </div>
      </div>
    </div>
  );
}
