import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mountain Delights — Personalized Indian Holiday Experiences" },
      { name: "description", content: "Mountain Delights creates personalized holiday packages across India — Kashmir, Kerala, Himachal Pradesh, Andaman, Sikkim and Shimla. Customized tours, honeymoons, group trips and corporate travel." },
      { property: "og:title", content: "About Mountain Delights" },
      { property: "og:description", content: "Personalized holiday experiences across India — from mountains to backwaters." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-12 md:pt-28">
        <h2 className="font-serif text-4xl md:text-6xl max-w-4xl leading-tight">
          Mountain Delights — Explore More. Without Limits.
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-foreground/80 leading-relaxed">
          Mountain Delights is a travel company creating personalized holiday experiences
          across India — from the snow-capped valleys of Kashmir and Himachal Pradesh to
          the backwaters of Kerala, the islands of Andaman, and the hills of Sikkim and
          Shimla.
        </p>
        <p className="mt-4 max-w-3xl text-lg text-foreground/80 leading-relaxed">
          We plan customized holiday packages, honeymoon packages, group tours, corporate
          travel, and adventure and nature trips, built around your destination, budget,
          and schedule rather than a fixed template. Every itinerary is planned to be
          simple to book, comfortable to travel, and easy to remember.
        </p>
      </section>

      <section className="container-prose pb-20">
        <div className="border-t border-border pt-12">
          <span className="eyebrow">Our Mission</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-black leading-tight">
            Our Mission
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-foreground/80 leading-relaxed">
            We take the time to understand what you want from a trip — the destination,
            the pace, the people you're traveling with — before we plan anything. Whether
            that means a Kashmir honeymoon package, a Kerala backwaters family holiday, a
            Himachal Pradesh adventure trip, or a corporate offsite in the hills, we
            handle the transportation, accommodation, and on-ground travel assistance so
            you don't have to.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-[oklch(0.945_0.02_78)]">
        <div className="container-prose py-20 md:py-28">
          <span className="eyebrow">What We Offer</span>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customized Holiday Packages",
                text: "Personalized India tour packages designed around your chosen destination, travel dates, and budget.",
              },
              {
                title: "Honeymoon Packages",
                text: "Romantic getaways to Kashmir, Kerala, Andaman, and Himachal Pradesh, planned for couples who want the details handled.",
              },
              {
                title: "Group Tours",
                text: "Well-organized group travel packages with comfortable transport and stay arrangements.",
              },
              {
                title: "Corporate Travel",
                text: "Business travel and MICE arrangements for corporate groups, meetings, and offsites.",
              },
              {
                title: "Adventure & Nature Trips",
                text: "Trekking, valley, and forest experiences across the Himalayas, Sikkim, and Himachal Pradesh.",
              },
              {
                title: "Transportation & Accommodation",
                text: "End-to-end travel and stay arrangements across all our destinations.",
              },
              {
                title: "Complete Travel Assistance",
                text: "Planning support from booking through on-trip help.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20 md:py-28">
        <span className="eyebrow">Why Choose Mountain Delights</span>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Planning",
              text: "We design trips around your destination, dates, and travel style — not a one-size-fits-all package.",
            },
            {
              title: "Transparent Pricing",
              text: "Clear costs with no hidden charges, so you know exactly what you're paying for.",
            },
            {
              title: "On-ground Support",
              text: "Reliable travel assistance across Kashmir, Kerala, Himachal Pradesh, Andaman, Sikkim, and Shimla.",
            },
            {
              title: "Flexible Itineraries",
              text: "Plans tailored for families, couples, groups, and corporate travelers alike.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-foreground/80">
          Whether you're planning a Kerala family holiday, a Kashmir honeymoon, a Himachal
          adventure trip, or a corporate group tour, Mountain Delights helps you plan it
          with confidence.
        </p>
      </section>

      <section className="border-t border-border bg-[oklch(0.945_0.02_78)]">
        <div className="container-prose py-20 md:py-28 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Meet the Founder</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Rohan Pawar</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
              Founder & Director, Mountain Delights
            </p>
          </div>
          <div className="space-y-4 text-foreground/85 leading-relaxed">
            <p>
              Rohan Pawar, Founder of Mountain Delights, believes that travel is more than
              just a destination — it's about the experiences, connections, and memories you
              take back with you.
            </p>
            <p>
              Driven by a passion for exploration and discovering new places, his vision for
              Mountain Delights is simple:
            </p>
            <p className="font-serif text-2xl text-[var(--color-pine)]">
              Explore More. Without Limits.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Your journey. Our commitment.</h2>
        <p className="mt-3 text-foreground/70">Mountain Delights — Where Every Journey Meets the Mountains.</p>
        <Link to="/contact" className="btn-primary mt-8">Plan your trip →</Link>
      </section>
    </SiteLayout>
  );
}
