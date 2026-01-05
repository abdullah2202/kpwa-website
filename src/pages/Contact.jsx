import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { SITE } from "../lib/config";

export default function Contact() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="Contact"
            title="Get in touch"
            subtitle="Replace placeholders with official KPWA contact details."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-lg font-bold text-slate-900">Contact details</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Add an email address, phone number, and/or postal address here.
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div>
                  <span className="font-semibold">Website:</span> {SITE.domain}
                </div>
                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  <span className="text-slate-500 dark:text-slate-400">info@kpwa.co.uk (placeholder)</span>
                </div>
                <div>
                  <span className="font-semibold">Location:</span>{" "}
                  <span className="text-slate-500 dark:text-slate-400">United Kingdom</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-lg font-bold text-slate-900">Note</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                This static site doesn’t send messages yet. When you add a backend API,
                we can enable:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Contact form submissions</li>
                <li>Member authentication</li>
                <li>Private documents and announcements</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
