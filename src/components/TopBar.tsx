import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    "h-10 px-4 sm:px-6 flex items-center justify-center rounded-md border border-[var(--border)] dark:border-[var(--border-dark)] " +
    "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition text-sm font-bold tracking-wide";

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] dark:border-[var(--border-dark)] bg-[var(--bg)]/80 dark:bg-[var(--bg-dark)]/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="text-lg sm:text-2xl font-bold leading-none truncate"
        >
          Killian Marcantei
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
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
              onClick={() => {
                closeMobileMenu();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 font-bold"
            >
              ← Back to Home
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="mailto:k.marcantei@hotmail.com?subject=Contact%20portfolio"
            className={`${pillBtnClass} hidden sm:inline-flex`}
            title="Email"
          >
            Email
          </a>

          <a
            href="/MARCANTEI_KILLIAN_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${pillBtnClass} hidden sm:inline-flex`}
          >
            CV
          </a>

          <a
            href="https://www.linkedin.com/in/killian-marcantei/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconBtnClass} hidden sm:flex`}
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
            className={`${iconBtnClass} hidden sm:flex`}
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

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`${iconBtnClass} lg:hidden`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border)] dark:border-[var(--border-dark)] bg-[var(--bg)]/95 dark:bg-[var(--bg-dark)]/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            {isHomePage && (
              <>
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="text-sm font-bold py-2"
                >
                  About
                </a>
                <a
                  href="#experience"
                  onClick={closeMobileMenu}
                  className="text-sm font-bold py-2"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  onClick={closeMobileMenu}
                  className="text-sm font-bold py-2"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  onClick={closeMobileMenu}
                  className="text-sm font-bold py-2"
                >
                  Skills
                </a>
                <a
                  href="#recommendation"
                  onClick={closeMobileMenu}
                  className="text-sm font-bold py-2"
                >
                  Recommendation
                </a>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="text-sm font-bold py-2"
                >
                  Contact
                </a>
              </>
            )}

            {isProjectsPage && (
              <Link
                to="/"
                onClick={() => {
                  closeMobileMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-sm font-bold py-2"
              >
                ← Back to Home
              </Link>
            )}

            <div className="pt-3 mt-2 border-t border-[var(--border)] dark:border-[var(--border-dark)] grid grid-cols-2 gap-3">
              <a
                href="mailto:k.marcantei@hotmail.com?subject=Contact%20portfolio"
                className={`${pillBtnClass} w-full`}
                title="Email"
              >
                Email
              </a>

              <a
                href="/MARCANTEI_KILLIAN_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${pillBtnClass} w-full`}
              >
                CV
              </a>

              <a
                href="https://www.linkedin.com/in/killian-marcantei/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconBtnClass} w-full`}
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
                className={`${iconBtnClass} w-full`}
                title="itch.io"
              >
                <img
                  src="/itchiologo.svg"
                  alt="itch.io"
                  className={itchImgClass}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
