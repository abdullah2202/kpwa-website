export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-slate-100">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}
