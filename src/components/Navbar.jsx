import { NavLink, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import logo from "../assets/khyber.jpg";
import { SITE } from "../lib/config";
import ThemeToggle from "./ThemeToggle";


const navItemBase =
  "rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800";
const navItemActive =
  "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100";
const navItemInactive = "text-slate-700 dark:text-slate-200";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/documents", label: "Documents" },
      { to: "/events", label: "Events" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" }
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt={`${SITE.shortName} logo`}
              className="h-10 w-10 rounded-full border border-slate-200 object-cover"
            />
            <div className="leading-tight">
              <div className="text-sm font-bold sm:text-base">{SITE.shortName}</div>
              <div className="hidden text-xs text-slate-600 sm:block">
                {SITE.domain}
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <nav className="flex items-center gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `${navItemBase} ${isActive ? navItemActive : navItemInactive}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          <button
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="pb-3 md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${navItemBase} ${isActive ? navItemActive : navItemInactive}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-2">
              <ThemeToggle className="w-full justify-center" />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
