import RecommendationSection from "../components/RecommendationSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* HERO */}
      <section id="about" className="pt-8 md:pt-14 pb-14 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-stretch">
          {/* PHOTO */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] dark:border-[var(--border-dark)] bg-black/5 dark:bg-white/5 lg:h-[560px]">
              <img
                src="/profile.jpg"
                alt="Portrait"
                className="w-full h-full object-cover contrast-[102%] saturate-[95%] aspect-[4/5] lg:aspect-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="lg:col-span-8 lg:h-[560px] flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
              KILLIAN MARCANTEI
            </h1>

            <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
              SYSTEM DESIGNER
            </p>

            <div className="mt-6 md:mt-8 space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Designing progression systems, player mechanics, and
                state-driven architectures with clarity, scalability, and
                production rigor.
              </p>

              <p>
                With 4+ years in real-time interactive development and
                structured production environments, I bring modular thinking,
                technical collaboration, and hands-on experience in Unreal
                Engine and Unity. I focus on building coherent systems that
                support both gameplay feel and long-term scalability.
              </p>

              <p>
                I approach systems design iteratively, prototyping mechanics
                early and refining them through testing and feedback. My goal is
                to create systems that feel intuitive to players at first
                contact while revealing depth through progression and mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO BANDEROLE */}
      <section className="pb-16 md:pb-20">
        <div className="rounded-2xl overflow-hidden border border-[var(--border)] dark:border-[var(--border-dark)] bg-black/5 dark:bg-white/5 shadow-sm">
          <video
            src="/showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full aspect-video object-cover"
          />
        </div>

        <p className="mt-4 text-sm opacity-70 text-center">
          Gameplay reel — Selection of student & professional projects
        </p>
      </section>

      <section id="experience" className="w-full pt-4 md:pt-6 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-wide mb-12 md:mb-20 text-left">
            Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 lg:gap-20 text-center">
            {/* DASSAULT */}
            <div className="flex flex-col items-center space-y-8">
              <div className="h-32 flex items-center justify-center">
                <img
                  src="/dassault.png"
                  alt="Dassault Systèmes"
                  className="h-24 md:h-28 object-contain opacity-85 hover:opacity-100 transition dark:invert"
                />
              </div>

              <div className="w-full">
                <h3 className="text-lg font-medium">Software Engineer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Dassault Systèmes — 2025 to 2025
                </p>

                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="leading-relaxed">
                    Contributed to large-scale interconnected 3D architecture
                  </li>
                  <li className="leading-relaxed">
                    Implemented state-synchronized front-end systems
                  </li>
                  <li className="leading-relaxed">
                    Delivered production-grade features via CI/CD
                  </li>
                </ul>

                <p className="mt-8 text-base font-semibold text-gray-800 dark:text-gray-200">
                  Project: <span className="font-bold">xHighlight</span>
                </p>
              </div>
            </div>

            {/* AXEAL */}
            <div className="flex flex-col items-center space-y-8">
              <div className="h-32 flex items-center justify-center">
                <img
                  src="/axeal.png"
                  alt="Axeal"
                  className="h-24 md:h-28 scale-[0.80] object-contain opacity-90 hover:opacity-100 transition dark:invert"
                />
              </div>

              <div className="w-full">
                <h3 className="text-lg font-medium">Systems Designer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Axeal — 2022 to 2025
                </p>

                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="leading-relaxed">
                    Designed modular interaction systems (UE5 / Unity)
                  </li>
                  <li className="leading-relaxed">
                    Structured state-driven behaviors & progression logic
                  </li>
                  <li className="leading-relaxed">
                    Delivered scalable real-time applications
                  </li>
                </ul>

                <p className="mt-8 text-base font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                  Projects: <span className="font-bold">Hagily</span>{" "}
                  <span className="opacity-60">•</span>{" "}
                  <span className="font-bold">Enginify</span>{" "}
                  <span className="opacity-60">•</span>{" "}
                  <span className="font-bold">TechTraining</span>
                </p>
              </div>
            </div>

            {/* DEATHSCAPE */}
            <div className="flex flex-col items-center space-y-8">
              <div className="h-32 flex items-center justify-center">
                <img
                  src="/deathscape.png"
                  alt="DeathScape"
                  className="h-24 md:h-28 scale-110 object-contain opacity-85 hover:opacity-100 transition dark:invert"
                />
              </div>

              <div className="w-full">
                <h3 className="text-lg font-medium">Game Designer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  DeathScape — 2019 to 2021
                </p>

                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="leading-relaxed">
                    Designed interconnected puzzle & progression systems
                  </li>
                  <li className="leading-relaxed">
                    Built Unity prototypes validating interaction logic
                  </li>
                  <li className="leading-relaxed">
                    Structured complete player experience flows
                  </li>
                </ul>

                <p className="mt-8 text-base font-semibold text-gray-800 dark:text-gray-200">
                  Projects:{" "}
                  <span className="font-bold">Escape Room Experiences</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-wide mb-12 md:mb-20 text-left text-black dark:text-white">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-20">
            {/* ESCALATION */}
            <Link
              to="/projects#escalation"
              className="group block cursor-pointer"
              style={{ "--img-scale": 1.0 } as React.CSSProperties}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] bg-black ring-1 ring-black/10 dark:ring-white/10">
                <img
                  src="/escalation.jpg"
                  alt="Escalation"
                  className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition duration-500 group-hover:scale-[1.05]"
                  style={{ transform: "scale(var(--img-scale))" }}
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition duration-300 flex items-center justify-center">
                  <span className="px-5 py-2 border border-white/90 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                    View Project
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Escalation | Unreal Engine
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  System-driven hack-and-slash prototype
                </p>
              </div>
            </Link>

            {/* LASER MASTER TOURNAMENT */}
            <Link
              to="/projects#lmt"
              className="group block cursor-pointer"
              style={{ "--img-scale": 1.0 } as React.CSSProperties}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] bg-black ring-1 ring-black/10 dark:ring-white/10">
                <img
                  src="/lmt.jpg"
                  alt="Laser Master Tournament"
                  className="absolute inset-0 w-full h-full object-cover object-[center_40%] transition duration-500 group-hover:scale-[1.05]"
                  style={{ transform: "scale(var(--img-scale))" }}
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition duration-300 flex items-center justify-center">
                  <span className="px-5 py-2 border border-white/90 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                    View Project
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Laser Master Tournament | Unreal Engine
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  First-person traversal gameplay prototype
                </p>
              </div>
            </Link>

            {/* TECHTRAINING */}
            <Link
              to="/projects#techtraining"
              className="group block cursor-pointer"
              style={{ "--img-scale": 1.0 } as React.CSSProperties}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] bg-black ring-1 ring-black/10 dark:ring-white/10">
                <img
                  src="/techTraining.jpg"
                  alt="TechTraining"
                  className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition duration-500 group-hover:scale-[1.05]"
                  style={{ transform: "scale(var(--img-scale))" }}
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition duration-300 flex items-center justify-center">
                  <span className="px-5 py-2 border border-white/90 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                    View Project
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  TechTraining | Unity
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Augmented reality training system
                </p>
              </div>
            </Link>

            {/* HAGILY */}
            <Link
              to="/projects#hagily"
              className="group block cursor-pointer"
              style={{ "--img-scale": 1.0 } as React.CSSProperties}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] bg-black ring-1 ring-black/10 dark:ring-white/10">
                <img
                  src="/hagily.jpg"
                  alt="Hagily"
                  className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition duration-500 group-hover:scale-[1.05]"
                  style={{ transform: "scale(var(--img-scale))" }}
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition duration-300 flex items-center justify-center">
                  <span className="px-5 py-2 border border-white/90 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                    View Project
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Hagily | Unity
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Industrial digital twin simulation
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center mt-16 md:mt-24">
            <p className="text-lg font-semibold text-black dark:text-white mb-6 text-center">
              Do you want to know more?
            </p>

            <Link
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative z-50 inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold border text-black border-black dark:text-white dark:border-white transition duration-200 hover:opacity-80"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <SkillsSection />
      <RecommendationSection />
      <ContactSection />
    </div>
  );
}
