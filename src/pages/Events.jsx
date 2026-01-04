import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";
import { upcomingEvents } from "../data/events";

export default function Events() {
  const sorted = [...upcomingEvents].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="Calendar"
            title="Upcoming Events"
            subtitle="Update events in src/data/events.js. Later this can come from an API."
          />

          {sorted.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {sorted.map((e) => (
                <EventCard key={`${e.title}-${e.date}`} {...e} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-soft">
              No upcoming events listed yet.
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-soft">
            <p className="font-semibold text-slate-900">Future enhancement ideas</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Event RSVP / registrations (API-backed)</li>
              <li>Google Calendar embed or ICS downloads</li>
              <li>Admin-only event management (auth + API)</li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
