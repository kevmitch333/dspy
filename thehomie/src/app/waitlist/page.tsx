import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist — TheHomie",
  description: "Request early access to TheHomie — your personal operating system.",
};

export default function WaitlistPage() {
  return (
    <section className="px-6 pb-24 pt-24">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
          Request Early Access
        </h1>
        <p className="mt-4 text-base text-slate">
          Join the waitlist to be among the first to experience TheHomie.
          We&apos;ll reach out when your spot is ready.
        </p>
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
