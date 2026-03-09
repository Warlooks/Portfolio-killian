export default function RecommendationSection() {
  return (
    <section id="recommendation" className="w-full py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-wide mb-12 text-left text-black dark:text-white">
          Recommendation
        </h2>

        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-8 md:p-10">
          <div className="text-5xl leading-none font-serif text-black/20 dark:text-white/20 mb-6">
            “
          </div>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I had the pleasure of supervising Killian Marcantei for two years
              on several real-time 3D projects related to industrial digital
              twins in the nuclear and defense sectors.
            </p>

            <p>
              During this time, Killian demonstrated strong autonomy and
              reliability, consistently delivering complex interactive systems
              on time. His ability to structure systems, prototype solutions,
              and adapt game technologies to industrial environments proved
              extremely valuable to our projects.
            </p>

            <p>
              Beyond his technical skills, Killian is a motivated and dependable
              collaborator who approaches challenges with curiosity and
              professionalism. I am confident his systems thinking and design
              capabilities would be a strong asset to any team.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-lg font-semibold text-black dark:text-white">
              Hervé Labarge
            </p>
            <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-400">
              Director of Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
