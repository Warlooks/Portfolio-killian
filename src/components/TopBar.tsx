import { Link, useLocation } from "react-router-dom";

type TopBarProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
};

const linkedInImgClass = "w-5 h-5 object-contain invert dark:invert-0";
const itchImgClass = "w-6 h-6 object-contain dark:invert";

export default function TopBar({ darkMode, onToggleTheme }: TopBarProps) {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";
  const isHomePage = location.pathname === "/";

  const navLinkClass =
    "relative font-bold transition-opacity hover:opacity-90 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-2 " +
    "after:h-[2px] after:w-full after:bg-current after:rounded " +
    "after:scale-x-0 after:origin-left after:transition-transform after:duration-200 " +
    "hover:after:scale-x-100";

  const iconBtnClass =
    "h-10 w-10 flex items-center justify-center rounded-md border border-[var(--border)] dark:border-[var(--border-dark)] " +
    "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition";

  const pillBtnClass =
    "h-10 px-6 flex items-center justify-center rounded-md border border-[var(--border)] dark:border-[var(--border-dark)] " +
    "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition text-sm font-bold tracking-wide";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] dark:border-[var(--border-dark)] bg-[var(--bg)]/80 dark:bg-[var(--bg-dark)]/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Killian Marcantei
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {isHomePage && (
            <>
              <a href="#about" className={navLinkClass}>
                About
              </a>
              <a href="#experience" className={navLinkClass}>
                Experience
              </a>
              <a href="#projects" className={navLinkClass}>
                Projects
              </a>
              <a href="#skills" className={navLinkClass}>
                Skills
              </a>
              <a href="#recommendation" className={navLinkClass}>
                Recommendation
              </a>
              <a href="#contact" className={navLinkClass}>
                Contact
              </a>
            </>
          )}

          {isProjectsPage && (
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:k.marcantei@hotmail.com?subject=Contact%20portfolio"
            className={pillBtnClass}
            title="Email"
          >
            Email
          </a>

          <a
            href="/MARCANTEI_KILLIAN_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={pillBtnClass}
          >
            CV
          </a>

          <a
            href="https://www.linkedin.com/in/killian-marcantei/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconBtnClass}
            title="LinkedIn"
          >
            <img
              src="/linkedinlogo.svg"
              alt="LinkedIn"
              className={linkedInImgClass}
            />
          </a>

          <a
            href="https://killianm.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconBtnClass}
            title="itch.io"
          >
            <img src="/itchiologo.svg" alt="itch.io" className={itchImgClass} />
          </a>

          <button
            onClick={onToggleTheme}
            className={iconBtnClass}
            title={darkMode ? "Mode clair" : "Mode sombre"}
            type="button"
          >
            {darkMode ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364 6.364l-1.414-1.414M8.05 8.05 6.636 6.636m12.728 0-1.414 1.414M8.05 15.95l-1.414 1.414"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
