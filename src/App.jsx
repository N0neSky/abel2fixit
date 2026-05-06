
export default function Abel2FixITLandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Header */}
      <header className="border-b border-zinc-800 backdrop-blur sticky top-0 z-50 bg-zinc-950/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <span className="text-xl font-bold">A2F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Abel2FixIT</h1>
              <p className="text-sm text-zinc-400">IT Support & Computer Services</p>
            </div>
          </div>

          <a
            href="mailto:abel@abel2fixit.com"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300 mb-6">
            Miami Based IT Support
          </div>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
            Fast, Reliable
            <span className="text-blue-500"> IT Help</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Computer repair, troubleshooting, upgrades, networking, remote support,
            custom PCs, data migration, and home office setup for individuals and
            small businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:abel@abel2fixit.com"
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
            >
              Email Support
            </a>

            <a
              href="https://wa.me/17869069395"
              className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Logo / Graphic */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 rounded-[3rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-1 shadow-2xl shadow-blue-600/30">
            <div className="w-full h-full rounded-[2.8rem] bg-zinc-950 flex items-center justify-center flex-col">
              <div className="text-7xl font-black tracking-tight">A2F</div>
              <div className="mt-4 text-zinc-400 text-sm tracking-[0.3em] uppercase">
                Abel2FixIT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Services</h3>
          <p className="text-zinc-400 max-w-2xl">
            Professional support for computers, networking, software issues,
            upgrades, and remote assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "PC Repair & Troubleshooting",
              desc: "Diagnosing crashes, slow systems, hardware failures, and software issues.",
            },
            {
              title: "Custom PC Builds",
              desc: "Gaming PCs, workstation setups, upgrades, and optimization.",
            },
            {
              title: "Remote Support",
              desc: "Fast online support using secure remote desktop tools.",
            },
            {
              title: "Networking",
              desc: "WiFi optimization, routers, switches, printers, and office networking.",
            },
            {
              title: "Data Migration & Backup",
              desc: "Drive cloning, system transfers, and backup solutions.",
            },
            {
              title: "Home Office Setup",
              desc: "Monitors, email setup, software installs, and productivity systems.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-blue-500/50 transition"
            >
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[2rem] p-10 text-center">
          <h3 className="text-4xl font-bold mb-4">Need IT Help?</h3>

          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact Abel2FixIT for troubleshooting, repairs, upgrades, and remote support.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:abel@abel2fixit.com"
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
            >
              abel@abel2fixit.com
            </a>

            <a
              href="https://wa.me/13057726404"
              className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition font-semibold"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        © 2026 Abel2FixIT. All rights reserved.
      </footer>
    </div>
  );
}
