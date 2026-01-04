export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-slate-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
