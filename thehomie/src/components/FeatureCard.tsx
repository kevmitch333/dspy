interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-graphite/5 bg-white p-6 transition-shadow hover:shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-offwhite text-graphite">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-graphite">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}
