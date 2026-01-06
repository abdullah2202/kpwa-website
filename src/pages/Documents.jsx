import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import DocumentCard from "../components/DocumentCard";
import { documentSections } from "../data/documents";

export default function Documents() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <SectionTitle
            eyebrow="Library"
            title="Documents & Forms"
            subtitle="Click to open or download PDFs. Add files into public/pdfs and update src/data/documents.js."
          />

          <div className="space-y-10">
            {documentSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-600">
                  {section.title}
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((doc) => (
                    <DocumentCard key={doc.href} {...doc} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
