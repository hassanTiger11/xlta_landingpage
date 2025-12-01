import Image from "next/image";

const palette = {
  white: "#FFFFFF",
  gold: "#E6CB8E",
};

const slides = [
  {
    src: "/slide_1.png",
    alt: "XLTA pitch deck slide 1",
    caption:
      "Investors struggle to move quickly because available cash rarely matches opportunity timing.",
  },
  {
    src: "/slide_2.png",
    alt: "XLTA pitch deck slide 2",
    caption:
      "XLTA unlocks instant funds, so seizing the next market opportunity is never delayed.",
  },
  {
    src: "/slide_3.png",
    alt: "XLTA pitch deck slide 3",
    caption:
      "Invest Now, Pay Later: instant loans divided into four predictable payments.",
  },
  {
    src: "/slide_4.png",
    alt: "XLTA pitch deck slide 4",
    caption:
      "Competitive rates, automated repayment, and transparent dashboards keep investors confident.",
  },
];

const highlights = [
  "Invest now, pay later infrastructure for active investors.",
  "Instant approvals and same-day deployment of trading capital.",
  "Transparent repayment schedule across four installments.",
  "No other social channels – connect only via @xlta_ksa or email.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(230,203,142,0.3),_transparent_62%)] bg-[#fdfaf5] text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <header className="rounded-3xl border border-white/60 bg-white/80 p-10 shadow-2xl shadow-amber-100 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-700/70">
            XLTA
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Invest on your terms with XLTA’s{" "}
            <span className="text-amber-600">Invest Now, Pay Later</span>{" "}
            platform.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            We keep investors in the market even when liquidity dips. Request
            instant funds, deploy capital immediately, and repay across four
            predictable installments — all within a white & gold experience that
            mirrors our investor slides.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:xlta.startup@gmail.com"
              className="rounded-full bg-amber-500/90 px-8 py-3 text-center text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Talk to XLTA
            </a>
            <a
              href="https://x.com/xlta_ksa"
              className="rounded-full border border-slate-900/15 px-8 py-3 text-center text-base font-semibold text-slate-900 transition hover:border-slate-900/40"
              target="_blank"
              rel="noreferrer"
            >
              Follow @xlta_ksa
            </a>
          </div>
        </header>

        <section className="grid gap-6 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl shadow-amber-100 backdrop-blur lg:grid-cols-2">
          <div>
            <h2 className="text-sm uppercase tracking-[0.35em] text-amber-700/70">
              About XLTA
            </h2>
            <p className="mt-4 text-3xl font-semibold text-slate-900">
              Financing momentum, not just positions.
            </p>
            <p className="mt-4 text-slate-600">
              XLTA ensures investors can participate in every compelling
              opportunity by pairing instant capital with flexible repayment.
              Forget waiting for the next paycheck or navigating rigid bank
              loans — simply request funds, invest now, and settle across four
              structured payments.
            </p>
          </div>
          <ul className="space-y-4 rounded-2xl border border-amber-100/80 bg-[#fffdf8] p-6 text-slate-700">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-1 inline-block h-2 w-2 flex-none rounded-full"
                  style={{ background: palette.gold }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl shadow-amber-100 backdrop-blur">
          <div className="flex flex-col gap-3 border-l-4 border-amber-200 pl-6">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700/70">
              Business Problem
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Cash timing keeps investors sidelined.
            </h3>
            <p className="text-slate-600">
              Investors often miss momentum trades because freeing capital takes
              longer than the opportunity window. The status quo is waiting for
              liquidity, hoping for a windfall, or taking on cumbersome bank
              debt.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {slides.slice(0, 1).map((slide) => (
              <figure
                key={slide.src}
                className="overflow-hidden rounded-2xl border border-amber-100 bg-[#fffdf8]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
                <figcaption className="p-4 text-sm text-slate-600">
                  {slide.caption}
                </figcaption>
              </figure>
            ))}
            <div className="rounded-2xl border border-dashed border-amber-200 bg-[#fffaf3] p-6 text-slate-700">
              <p className="font-semibold text-slate-900">
                “Investors struggle to find enough funds to enter new positions,
                leaving them to lose the opportunity of making 💵🤑🤑”
              </p>
              <p className="mt-4">
                We translated the exact narrative from the XLTA slide deck so
                visitors immediately understand the pain our product eliminates.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl shadow-amber-100 backdrop-blur">
          <div className="flex flex-col gap-3 border-l-4 border-amber-200 pl-6">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700/70">
              Solution
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Instant funds. Four payments. Zero missed entries.
            </h3>
            <p className="text-slate-600">
              XLTA provides a streamlined Invest Now, Pay Later experience,
              ensuring capital is always on standby so serious investors never
              sit on the sidelines.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {slides.slice(1).map((slide) => (
              <figure
                key={slide.src}
                className="flex flex-col overflow-hidden rounded-2xl border border-amber-100 bg-[#fffdf8]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1200}
                  height={900}
                  className="h-64 w-full object-cover"
                />
                <figcaption className="flex flex-1 flex-col justify-between p-4 text-sm text-slate-600">
                  {slide.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/60 bg-white/95 p-8 text-slate-900 shadow-xl shadow-amber-100 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-700/70">
            Contact XLTA
          </p>
          <h3 className="mt-4 text-3xl font-semibold">
            Ready to keep every opportunity within reach?
          </h3>
          <p className="mt-4 max-w-3xl text-slate-600">
            For strategic partnerships, investor onboarding, or press inquiries,
            we currently respond only through our official X account and email.
            Please reach out via the channels below — we do not operate any
            other social media profiles.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="https://x.com/xlta_ksa"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-amber-100 bg-[#fffdf8] p-6 transition hover:border-amber-200"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700/70">
                X (formerly Twitter)
              </p>
              <p className="mt-3 text-2xl font-semibold">@xlta_ksa</p>
              <p className="mt-2 text-sm text-slate-600">
                Send a DM for quick collaboration.
              </p>
            </a>
            <a
              href="mailto:xlta.startup@gmail.com"
              className="rounded-2xl border border-amber-100 bg-[#fffdf8] p-6 transition hover:border-amber-200"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700/70">
                Email
              </p>
              <p className="mt-3 text-2xl font-semibold">
                xlta.startup@gmail.com
              </p>
              <p className="mt-2 text-sm text-slate-600">
                The fastest path to scheduling a call.
              </p>
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-amber-600">
            No other social media accounts exist for XLTA.
          </p>
        </section>
      </main>
    </div>
  );
}
