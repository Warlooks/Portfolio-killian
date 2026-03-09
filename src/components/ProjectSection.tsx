import { useState } from "react";

type ProjectSectionProps = {
  id: string;
  title: string;
  role: string;
  meta: string;
  images: string[];
  videoUrl?: string;
  overview: string[];
  keyContribution: string;
  details: string[];
  reverse?: boolean;
  altBackground?: boolean;
};

export default function ProjectSection({
  id,
  title,
  role,
  meta,
  images,
  videoUrl,
  overview,
  keyContribution,
  details,
  reverse = false,
  altBackground = false,
}: ProjectSectionProps) {
  const sectionBg = altBackground
    ? "bg-black/5 dark:bg-white/[0.03]"
    : "bg-[var(--bg)] dark:bg-[var(--bg-dark)]";

  const safeImages = images.length > 0 ? images : ["/vite.svg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? safeImages.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    setCurrentImageIndex((prev) =>
      prev === safeImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section id={id} className={`w-full py-12 ${sectionBg}`}>
      <div className="max-w-[1850px] mx-auto px-6 xl:px-8">
        <div
          className={`grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-start ${
            reverse
              ? "xl:[&>*:first-child]:order-2 xl:[&>*:last-child]:order-1"
              : ""
          }`}
        >
          {/* IMAGE / GALLERY */}
          <div className="xl:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 group">
              {safeImages[currentImageIndex].toLowerCase().endsWith(".mp4") ? (
                <video
                  src={safeImages[currentImageIndex]}
                  className="w-full h-auto object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <img
                  src={safeImages[currentImageIndex]}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-auto object-cover transition duration-500 ease-out group-hover:scale-[1.01] group-hover:brightness-105"
                />
              )}

              {/* LEFT ARROW */}
              {safeImages.length > 1 && (
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition hover:bg-black/60"
                  aria-label={`Previous image for ${title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M15.53 3.47a.75.75 0 010 1.06L8.06 12l7.47 7.47a.75.75 0 11-1.06 1.06l-8-8a.75.75 0 010-1.06l8-8a.75.75 0 011.06 0z" />
                  </svg>
                </button>
              )}

              {/* RIGHT ARROW */}
              {safeImages.length > 1 && (
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition hover:bg-black/60"
                  aria-label={`Next image for ${title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M8.47 20.53a.75.75 0 010-1.06L15.94 12 8.47 4.53a.75.75 0 111.06-1.06l8 8a.75.75 0 010 1.06l-8 8a.75.75 0 01-1.06 0z" />
                  </svg>
                </button>
              )}

              {/* PLAY BUTTON */}
              {videoUrl && currentImageIndex === 0 && (
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center"
                  aria-label={`Watch presentation for ${title}`}
                >
                  <div className="relative flex items-center justify-center pointer-events-none">
                    <div className="absolute h-20 w-20 rounded-full border border-white/20 opacity-60 transition duration-300 group-hover:scale-110" />

                    <div
                      className="
              relative
              h-16 w-16
              rounded-full
              bg-black/45
              backdrop-blur-md
              border border-white/30
              flex items-center justify-center
              transition duration-300
              group-hover:scale-105
              group-hover:bg-black/55
            "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-7 h-7 translate-x-[2px]"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              )}

              {/* COUNTER */}
              {safeImages.length > 1 && (
                <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
                  {currentImageIndex + 1} / {safeImages.length}
                </div>
              )}
            </div>
          </div>

          {/* TEXT */}
          <div className="xl:col-span-6">
            <h2 className="text-[2.55rem] xl:text-[2.9rem] font-black leading-[0.95] tracking-[-0.04em] uppercase text-amber-400">
              {title}
            </h2>

            <p className="mt-1 text-[0.98rem] font-semibold text-black dark:text-white">
              {role}
            </p>

            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-black dark:text-white/85">
              {meta}
            </p>

            <div className="mt-4 h-px w-full bg-black/10 dark:bg-white/10" />

            <div className="mt-5 space-y-3 text-[0.98rem] leading-[1.55] text-gray-700 dark:text-gray-300">
              {overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-5 pl-4 pr-4 py-3 border-l-[3px] border-amber-400 bg-black/5 dark:bg-white/[0.04] rounded-r-lg">
              <p className="text-[1.05rem] font-bold text-black dark:text-white">
                Key Contribution
              </p>

              <p className="mt-2 text-[0.97rem] leading-[1.55] text-gray-700 dark:text-gray-300 font-semibold">
                {keyContribution}
              </p>
            </div>

            <div className="mt-5 space-y-3 text-[0.97rem] leading-[1.55] text-gray-700 dark:text-gray-300">
              {details.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
