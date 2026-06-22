import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Plan an Indian mountain trip | Mountain Delights" },
      { name: "description", content: "Tell us where you'd like to go and when. We reply within two working days with a draft route, homestays and a fair price." },
      { property: "og:title", content: "Plan a trip with Mountain Delights" },
      { property: "og:description", content: "Honest, unhurried mountain trips across India." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-16 md:pt-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Where would you like to go?
          </h1>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Send us a rough idea — a region, a window of dates, who's
            travelling. A real person reads every message and replies within
            two working days with a draft route and honest pricing.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div>
              <div className="eyebrow mb-1">Write</div>
              <a href="mailto:hello@mountaindelights.in" className="text-foreground hover:text-[var(--color-pine)]">hello@mountaindelights.in</a>
            </div>
            <div>
              <div className="eyebrow mb-1">WhatsApp</div>
              <a href="tel:+919876543210" className="text-foreground hover:text-[var(--color-pine)]">+91 98765 43210</a>
            </div>
            <div>
              <div className="eyebrow mb-1">Office</div>
              <p>Old Manali, near Manu Temple — Himachal Pradesh 175131</p>
            </div>
          </div>
        </div>

        <form
          className="md:col-span-7 rounded-lg border border-border bg-card p-6 md:p-8 space-y-5"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          {sent ? (
            <div className="py-10 text-center">
              <div className="font-serif text-2xl">Got it — talk soon.</div>
              <p className="mt-2 text-muted-foreground">We'll reply from hello@mountaindelights.in within two working days.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name"><input required className="input" placeholder="Aanya Sharma" /></Field>
                <Field label="Email"><input required type="email" className="input" placeholder="you@example.com" /></Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Where to?">
                  <select className="input" defaultValue="">
                    <option value="" disabled>Pick a region</option>
                    <option>Ladakh</option>
                    <option>Himachal Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>Sikkim</option>
                    <option>Kerala — Western Ghats</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
                <Field label="Rough dates"><input className="input" placeholder="e.g. last 2 weeks of June" /></Field>
              </div>
              <Field label="Tell us about the trip">
                <textarea rows={5} className="input" placeholder="Who's travelling, how slow you want to go, what you're hoping to see…" />
              </Field>
              <button type="submit" className="btn-primary">Send enquiry →</button>
              <p className="text-xs text-muted-foreground">We don't share your details. No newsletter spam.</p>
            </>
          )}
        </form>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          font-family: inherit;
        }
        .input:focus { outline: 2px solid var(--color-ring); outline-offset: 1px; }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      {children}
    </label>
  );
}
