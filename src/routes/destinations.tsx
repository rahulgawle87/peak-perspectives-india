import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations } from "@/lib/destinations";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best time to visit Ladakh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main season for Ladakh is June to September. Plan for two days of acclimatisation in Leh (about 3,500 m) before high passes like Khardung La or drives to Nubra and Pangong.",
      },
    },
    {
      "@type": "Question",
      name: "How many days for a Himachal Pradesh or Spiti trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 6–7 days for Shimla and Manali. Full Spiti or Kinnaur circuits typically need 10–12 days depending on roads and pace.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mountain Delights offer small-group mountain travel in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Small groups of around six travellers with two guides, plus private itineraries across the Indian Himalaya and Western Ghats.",
      },
    },
  ],
};

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      {
        title:
          "Indian Mountain Destinations – Ladakh, Himachal, Sikkim & More | Mountain Delights",
      },
      {
        name: "description",
        content:
          "Field guides to Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Kashmir and Kerala Western Ghats. Best seasons, altitudes, and real routes for small-group Indian Himalaya travel.",
      },
      {
        property: "og:title",
        content:
          "Indian Mountain Destinations – When to Go & Real Routes",
      },
      {
        property: "og:description",
        content:
          "Eight mountain regions of India — seasons, altitudes, and what people actually travel there for.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.mountaindelights.in/destinations",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.mountaindelights.in/destinations",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-16 md:pt-28 md:pb-20">
        <span className="eyebrow">Destinations</span>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl max-w-3xl leading-tight">
          Eight mountain regions, each on its own clock.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          The Indian mountains aren't one trip. The Trans-Himalaya is a cold
          desert; the Western Ghats are a rainforest. Below is what we know
          about each region — when to go, how high you'll be, and what people
          actually travel there for.
        </p>
      </section>

      <section className="container-prose pb-24 space-y-20">
        {destinations.map((d, i) => (
          <article
            key={d.slug}
            id={d.slug}
            className="grid md:grid-cols-12 gap-8 md:gap-10 items-start"
          >
            <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.short}`}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="w-full h-72 md:h-[28rem] object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {d.region}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">{d.name}</h2>
              <p className="mt-4 text-foreground/85 leading-relaxed">{d.long}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-border pt-4">
                <div>
                  <dt className="text-muted-foreground">Altitude</dt>
                  <dd className="mt-1 font-medium">{d.altitude}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Best season</dt>
                  <dd className="mt-1 font-medium">{d.bestSeason}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {d.knownFor.map((k) => (
                  <span
                    key={k}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {k}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-7 inline-block text-sm underline underline-offset-4 hover:text-[var(--color-pine)]"
              >
                Plan a {d.name} trip →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="container-prose pb-24 border-t border-border pt-16">
        <h2 className="font-serif text-2xl md:text-3xl">Common questions</h2>
        <dl className="mt-8 space-y-6 max-w-2xl">
          <div>
            <dt className="font-medium">Best time for Ladakh?</dt>
            <dd className="mt-1 text-sm text-foreground/80">
              June–September. Acclimatise two days in Leh before high passes.
            </dd>
          </div>
          <div>
            <dt className="font-medium">How long for Himachal or Spiti?</dt>
            <dd className="mt-1 text-sm text-foreground/80">
              6–7 days for Shimla–Manali; 10–12 days for a full Spiti circuit.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Small groups only?</dt>
            <dd className="mt-1 text-sm text-foreground/80">
              About six travellers with two guides, or private itineraries.
            </dd>
          </div>
        </dl>
        <Link to="/contact" className="btn-primary mt-10 inline-flex">
          Plan your mountain trip →
        </Link>
      </section>
    </SiteLayout>
  );
}
