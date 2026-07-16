import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWA } from "./FloatingWA";
import { SnakePreloader } from "../SnakePreloader";
import { RouteSnakeOverlay } from "./RouteSnakeOverlay";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink font-sans text-white antialiased">
      <SnakePreloader />
      <RouteSnakeOverlay />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingWA />
    </div>
  );
}