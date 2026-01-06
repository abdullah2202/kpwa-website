import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { SITE } from "../lib/config";

export default function About() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="About"
            title="Who we are"
            subtitle="A simple overview page — adjust text to match KPWA’s mission and objectives."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            <div className="prose max-w-none prose-slate dark:prose-invert">
              <p>
                <strong>{SITE.name} (KPWA)</strong> is a community association focused
                on welfare, community support, and engagement. This website provides
                quick access to official documents and forms and keeps members informed
                about events and activities.
              </p>
              <p>
                You can download the constitution, meeting minutes, and membership forms
                from the Documents section. Upcoming events are listed in the Events
                section.
              </p>
              <p>
                Today the site is static (fast, reliable, and easy to maintain). In the
                future, it can integrate with an API backend for member-only areas,
                event registration, or secure document management.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
