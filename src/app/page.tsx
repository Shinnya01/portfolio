"use client";
import { SeasonEffects } from "@/components/portfolio/SeasonEffects";
import { ThemeProvider, useTheme } from "@/components/portfolio/theme";
import { cn } from "@/components/portfolio/utils";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
// create these next (Skills, Projects, Contact, Footer) same as before
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

function Content() {
  const { theme } = useTheme();
  return (
    <div className={cn("relative min-h-screen", theme.bg)}>
      <SeasonEffects />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function Page() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
