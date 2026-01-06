import Container from "./Container";
import { SITE } from "../lib/config";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <div className="flex flex-col gap-2 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} ({SITE.shortName})
          </p>
          <p className="text-slate-500">
            Static site • Documents hosted as PDFs • Domain: {SITE.domain}
          </p>
        </div>
      </Container>
    </footer>
  );
}
