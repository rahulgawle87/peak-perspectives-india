import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/blog", label: "Field Notes" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="container-prose flex items-center justify-between h-16">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-serif text-xl tracking-tight text-foreground">Mountain Delights</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {nav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-foreground/75 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="btn-primary text-xs px-4 py-2">Plan a trip</Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-border/70 bg-[oklch(0.94_0.022_75)]">
        <div className="container-prose py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 max-w-sm">
            <div className="font-serif text-xl">Mountain Delights</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Small-group journeys and self-planned routes across the Indian
              mountains — from the Trans-Himalaya to the Western Ghats.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Explore</div>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-foreground text-foreground/75">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground text-foreground/75">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-foreground text-foreground/75">YouTube</a></li>
              <li><a href="mailto:mountaindelights05@gmail.com" className="hover:text-foreground text-foreground/75">mountaindelights05@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70">
          <div className="container-prose py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Mountain Delights. Made in the hills.</span>
            <span>Travel responsibly. Pack out what you pack in.</span>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/917977958220?text=Hi%20Mountain%20Delights%2C%20I%27d%20like%20to%20plan%20a%20trip."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Mountain Delights on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
          <path d="M16.04 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.27 1.63h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06a12.72 12.72 0 0 0-9.06-3.65Zm0 23.04h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.58 10.58 0 0 1-1.62-5.66c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.12 7.53c0 5.87-4.78 10.63-10.67 10.63Zm5.84-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.29.16.21 2.24 3.42 5.43 4.79.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </div>
  );
}

