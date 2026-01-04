export default function DocumentCard({ title, description, href, tag = "PDF" }) {
  return (
    <a
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900 group-hover:underline">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {tag}
        </span>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-700">
        Open / Download →
      </p>
    </a>
  );
}
