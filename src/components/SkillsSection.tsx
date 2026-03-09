export default function SkillsSection() {
  const skills = [
    {
      title: "System Design",
      description:
        "Designing interconnected gameplay and interaction systems with a strong focus on clarity, scalability, and player readability. Ensuring mechanics connect coherently instead of existing as isolated features.",
      featured: true,
    },
    {
      title: "Progression & State Logic",
      description:
        "Structuring progression loops, behavioral states, and gameplay logic that support clear learning curves and meaningful player mastery across evolving systems.",
    },
    {
      title: "Prototyping",
      description:
        "Rapidly building playable prototypes in Unreal Engine and Unity to validate mechanics, pacing, and player feedback early in development.",
    },
    {
      title: "Modular Architecture",
      description:
        "Organizing features through reusable components, interfaces, and structured logic flows to keep gameplay systems maintainable, extensible, and production-ready.",
    },
    {
      title: "Balancing & Tuning",
      description:
        "Iterating on gameplay values, timings, and feedback loops to ensure mechanics feel responsive, readable, and consistent across different gameplay scenarios.",
    },
    {
      title: "Cross-Disciplinary Collaboration",
      description:
        "Working closely with art, engineering, and production teams to align constraints early and translate design intent into structured, implementable features.",
    },
  ];

  return (
    <section id="skills" className="w-full py-15">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-wide mb-16 text-left text-black dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`rounded-2xl p-7 transition-colors duration-200
                ${
                  skill.featured
                    ? "border border-amber-500/70 bg-amber-500/[0.04] dark:bg-amber-400/[0.03]"
                    : "border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03]"
                }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                {skill.title}
              </h3>

              <p className="text-base leading-8 text-gray-700 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
