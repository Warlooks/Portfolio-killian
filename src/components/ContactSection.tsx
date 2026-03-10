export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-14">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-widest mb-6 text-black dark:text-white">
          CONTACT
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-400 mb-10">
          K.marcantei@hotmail.com
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {/* EMAIL */}
          <a
            href="mailto:k.marcantei@hotmail.com"
            className="px-6 py-3 rounded-lg font-medium
    bg-amber-500 text-black
    transition hover:opacity-90"
          >
            Email me
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/killian-marcantei"
            target="_blank"
            className="p-3 rounded-lg border
    border-black/20 dark:border-white/20
    transition hover:opacity-70"
          >
            <img
              src="/linkedinlogo.svg"
              alt="LinkedIn"
              className="w-5 h-5 invert dark:invert-0"
            />
          </a>

          {/* ITCH.IO */}
          <a
            href="https://killianm.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-lg border border-black/20 dark:border-white/20 transition hover:opacity-70 flex items-center justify-center"
          >
            <img
              src="/itchiologo.svg"
              alt="Itch.io"
              className="w-6 h-6 dark:invert"
            />
          </a>

          {/* CV */}
          <a
            href="/MARCANTEI_KILLIAN_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-lg border border-black/20 dark:border-white/20 text-black dark:text-white font-semibold transition hover:opacity-70"
          >
            CV
          </a>
        </div>

        <div className="mt-16 text-sm text-gray-600 dark:text-gray-500">
          © 2026 Killian Marcantei · Portfolio
        </div>
      </div>
    </section>
  );
}
