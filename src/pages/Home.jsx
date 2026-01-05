import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import DocumentCard from "../components/DocumentCard";
import EventCard from "../components/EventCard";
import { documentSections } from "../data/documents";
import { upcomingEvents } from "../data/events";
import { Link } from "react-router-dom";
import { SITE } from "../lib/config";

export default function Home() {
  const featuredDocs = documentSections
    .flatMap((s) => s.items)
    .slice(0, 3);

  const featuredEvents = upcomingEvents.slice(0, 2);

  return (
    <main>
      <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <Container>
          <div className="py-12 sm:py-16">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700">
                  {SITE.domain}
                </p>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-600">
                  Khyber Pukhtoon Welfare Association
                </h1>
                <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
                  A community association supporting welfare initiatives, engagement,
                  and collaboration. Access the constitution, meeting minutes, and
                  membership forms — and stay updated on upcoming events.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/documents"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
                  >
                    View Documents
                  </Link>
                  <Link
                    to="/events"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                  >
                    Upcoming Events
                  </Link>
                </div>

                <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                  This site is static today, and ready to connect to an API later.
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
                <SectionTitle
                  eyebrow="Quick Links"
                  title="Most requested documents"
                  subtitle="Add or update PDFs anytime in the /public/pdfs folder."
                />
                <div className="grid gap-4">
                  {featuredDocs.map((d) => (
                    <DocumentCard key={d.href} {...d} />
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    to="/documents"
                    className="text-sm font-semibold text-slate-800 hover:underline dark:text-slate-500"
                  >
                    See all documents →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="Events"
            title="Upcoming"
            subtitle="Dates/venues can be updated in one place (src/data/events.js)."
          />
          {featuredEvents.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {featuredEvents.map((e) => (
                <EventCard key={`${e.title}-${e.date}`} {...e} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-soft">
              No upcoming events listed yet.
            </div>
          )}

          <div className="mt-4">
            <Link
              to="/events"
              className="text-sm font-semibold text-slate-800 hover:underline"
            >
              View all events →
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
