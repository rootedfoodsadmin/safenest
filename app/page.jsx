"use client";
import React from "react";

const BRAND = {
  blue: "#0D47A1",
  green: "#4CAF50",
};

function Icon({ name, className = "h-6 w-6", color = "currentColor" }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  const icons = {
    home: (
      <svg {...common}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10.5V20h14v-9.5" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    map: (
      <svg {...common}>
        <path d="M12 21s7-5.3 7-12a7 7 0 0 0-14 0c0 6.7 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    car: (
      <svg {...common}>
        <path d="M7 17h10" />
        <path d="M5 17H3v-5l2-5h14l2 5v5h-2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M6 12h12" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6.25 6.25l1.29-1.29a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    lock: (
      <svg {...common}>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    badge: (
      <svg {...common}>
        <path d="M12 2 15 8l6 .9-4.5 4.3 1.1 6.1L12 16.3 6.4 19.3l1.1-6.1L3 8.9 9 8Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

function Button({ children, variant = "primary", className = "", href = "#contact" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-800 hover:border-[#0D47A1] hover:text-[#0D47A1]"
      : "bg-[#0D47A1] text-white hover:bg-[#08377d] shadow-sm";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-slate-100 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D47A1] shadow-sm">
        <Icon name="home" className="h-7 w-7 text-white" />
        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <Icon name="check" className="h-4 w-4 text-[#4CAF50]" />
        </div>
      </div>
      {!compact && (
        <div>
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-[#0D47A1]">Safe</span>
            <span className="text-[#4CAF50]">Nest</span>
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Know who you trust</div>
        </div>
      )}
    </div>
  );
}

export default function SafeNestLandingPage() {
  const plans = [
    {
      name: "SafeNest Basic",
      price: "₹699",
      subtitle: "Quick identity & contact verification",
      features: ["Aadhaar / ID check", "Phone verification", "Basic address confirmation", "48-hour report"],
      highlight: false,
    },
    {
      name: "SafeNest Secure",
      price: "₹1,999",
      subtitle: "Complete background & reference check",
      features: ["Everything in Basic", "Previous employer check", "Reference verification", "Criminal record screening", "Risk score report"],
      highlight: true,
    },
    {
      name: "SafeNest Premium",
      price: "₹4,999",
      subtitle: "Full home visit + police + risk profiling",
      features: ["Everything in Secure", "Physical address visit", "Neighbor confirmation", "Police verification support", "Driver-specific checks", "Premium safety report"],
      highlight: false,
    },
  ];

  const checks = [
    ["shield", "Identity Verified", "Aadhaar, PAN, DL and selfie match checks"],
    ["map", "Address Verified", "Current address confirmation with geo-tagged field visit"],
    ["file", "Background Check", "Criminal, employment and reference screening"],
    ["car", "Driver Check", "Driving license, challans and accident history where applicable"],
    ["users", "Reference Check", "Previous employer and personal reference calls"],
    ["badge", "Report Ready", "Simple Green / Yellow / Red risk score report"],
  ];

  const steps = [
    "Send maid, driver or staff details on WhatsApp",
    "We collect documents and consent",
    "SafeNest runs digital + field verification",
    "You receive a clean PDF report with risk score",
  ];

  const simpleAssertions = [
    plans.length === 3,
    checks.length === 6,
    steps.length === 4,
    plans.some((plan) => plan.highlight && plan.name === "SafeNest Secure"),
  ];

  if (simpleAssertions.some((passed) => !passed)) {
    throw new Error("SafeNest landing page data failed validation checks.");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#checks" className="hover:text-[#0D47A1]">Checks</a>
            <a href="#plans" className="hover:text-[#0D47A1]">Plans</a>
            <a href="#process" className="hover:text-[#0D47A1]">Process</a>
            <a href="#contact" className="hover:text-[#0D47A1]">Contact</a>
          </nav>
          <Button className="hidden sm:inline-flex">Verify Now</Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-[#0D47A1] shadow-sm">
              <Icon name="badge" className="h-4 w-4" /> Backed by UrbanMed Tech Pvt Ltd
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Verify maids, drivers & home staff before you hire.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              SafeNest helps families in Hyderabad know who they are bringing into their homes through identity, address, police, employment and reference verification.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="px-7 py-4 text-base">Start Verification on WhatsApp <Icon name="arrow" className="h-5 w-5" /></Button>
              <Button variant="outline" href="#plans" className="px-7 py-4 text-base">View Plans</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#4CAF50]" /> 24–48 hr reports</span>
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#4CAF50]" /> Field verification</span>
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#4CAF50]" /> Privacy focused</span>
            </div>
          </div>

          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="bg-[#0D47A1] p-8 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-widest text-blue-100">Sample Report</div>
                  <h3 className="mt-2 text-2xl font-bold">Domestic Help Verification</h3>
                </div>
                <div className="rounded-2xl bg-[#4CAF50] px-4 py-2 font-bold">LOW RISK</div>
              </div>
            </div>
            <div className="space-y-5 bg-white p-8">
              {["Identity Verified", "Address Visit Completed", "Reference Check Completed", "No adverse record found"].map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-medium">{item}</span>
                  <Icon name="check" className="h-5 w-5 text-[#4CAF50]" />
                </div>
              ))}
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="mb-2 text-sm text-slate-500">Overall Trust Score</div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold text-[#0D47A1]">82</span>
                  <span className="pb-2 text-slate-500">/100</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="checks" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-bold">A complete home safety verification checklist</h2>
          <p className="mt-4 text-lg text-slate-600">Built specifically for maids, drivers, cooks, caretakers and other home help staff.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checks.map(([iconName, title, desc]) => (
            <Card key={title} className="transition-shadow hover:shadow-md">
              <div className="p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon name={iconName} className="h-6 w-6 text-[#0D47A1]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="leading-7 text-slate-600">{desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="plans" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-4xl font-bold">Simple plans for every household</h2>
            <p className="mt-4 text-lg text-slate-600">Start affordable. Upgrade when you need deeper confidence.</p>
          </div>
          <div className="grid gap-7 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={plan.highlight ? "scale-[1.02] border-[#0D47A1] shadow-xl" : ""}>
                <div className="p-8">
                  {plan.highlight && <div className="mb-4 inline-block rounded-full bg-[#4CAF50] px-4 py-1 text-sm font-semibold text-white">Most Popular</div>}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 min-h-[52px] text-slate-600">{plan.subtitle}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-[#0D47A1]">{plan.price}</span>
                    <span className="text-slate-500"> / check</span>
                  </div>
                  <div className="mt-7 space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#4CAF50]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`mt-8 w-full py-4 ${plan.highlight ? "" : "bg-slate-900 hover:bg-slate-800"}`}>Choose Plan</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="report" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Clean PDF report with risk score</h2>
          <p className="mt-4 text-lg text-slate-600">
            Every SafeNest verification ends with a simple customer-ready PDF report that clearly shows the worker profile, completed checks, risk level and hiring recommendation.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="bg-[#0D47A1] p-7 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-blue-100">SafeNest Report</div>
                  <h3 className="mt-2 text-2xl font-bold">Domestic Help Background Verification</h3>
                  <p className="mt-2 text-sm text-blue-100">Report ID: SN-HYD-0001 • Role: Maid / Cook</p>
                </div>
                <Logo compact />
              </div>
            </div>

            <div className="bg-white p-7">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-green-50 p-5 text-center">
                  <div className="text-sm font-medium text-slate-600">Trust Score</div>
                  <div className="mt-2 text-5xl font-bold text-[#4CAF50]">82</div>
                  <div className="text-sm text-slate-500">/100</div>
                </div>
                <div className="rounded-2xl bg-green-50 p-5 text-center">
                  <div className="text-sm font-medium text-slate-600">Risk Level</div>
                  <div className="mt-4 rounded-full bg-[#4CAF50] px-4 py-2 text-sm font-bold text-white">LOW RISK</div>
                </div>
                <div className="rounded-2xl bg-blue-50 p-5 text-center">
                  <div className="text-sm font-medium text-slate-600">Decision</div>
                  <div className="mt-4 rounded-full bg-[#0D47A1] px-4 py-2 text-sm font-bold text-white">RECOMMENDED</div>
                </div>
              </div>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-100">
                {[
                  ["Identity Verification", "Verified", "Aadhaar / ID and face match completed"],
                  ["Address Verification", "Verified", "Current address confirmed"],
                  ["Reference Check", "Clear", "Previous employer feedback collected"],
                  ["Criminal Screening", "No adverse record", "No issue found in available checks"],
                  ["Behavior Notes", "Low concern", "No major red flags reported"],
                ].map(([label, status, note]) => (
                  <div key={label} className="grid gap-3 border-b border-slate-100 p-4 last:border-b-0 sm:grid-cols-3">
                    <div className="font-semibold text-slate-900">{label}</div>
                    <div className="flex items-center gap-2 font-medium text-[#4CAF50]"><Icon name="check" className="h-4 w-4" /> {status}</div>
                    <div className="text-sm text-slate-600">{note}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-500">Final Recommendation</div>
                <p className="leading-7 text-slate-700">
                  Candidate is recommended for hiring. SafeNest suggests keeping standard onboarding controls such as ID copy, emergency contact and first 30-day observation.
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-5">
            <Card>
              <div className="p-7">
                <h3 className="text-2xl font-bold">What the customer sees</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Worker profile: name, role, photo and contact details",
                    "Completed checks: identity, address, reference, employment and police support",
                    "Trust Score: 0–100 rating with Green / Yellow / Red risk band",
                    "Clear recommendation: Recommended, Recommended with Caution, or Not Recommended",
                    "Disclaimer and consent confirmation for privacy compliance",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#4CAF50]" />
                      <span className="leading-7 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="bg-slate-50">
              <div className="p-7">
                <h3 className="text-2xl font-bold">Risk score bands</h3>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4"><span className="font-semibold">80–100</span><span className="rounded-full bg-[#4CAF50] px-3 py-1 text-sm font-bold text-white">Low Risk</span></div>
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4"><span className="font-semibold">50–79</span><span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-white">Medium Risk</span></div>
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4"><span className="font-semibold">0–49</span><span className="rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">High Risk</span></div>
                </div>
              </div>
            </Card>

            <Button href="#contact" className="w-full py-4 text-base">Request Sample PDF Report</Button>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">WhatsApp-first, fast and simple</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              No complicated app required. Families can submit staff details, documents and payment through WhatsApp, and receive a verified PDF report.
            </p>
            <div className="mt-8 space-y-5">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0D47A1] font-bold text-white">{index + 1}</div>
                  <div className="pt-1 text-lg font-medium">{step}</div>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-0 bg-[#0D47A1] text-white shadow-xl">
            <div className="p-8">
              <Icon name="phone" className="mb-5 h-10 w-10" />
              <h3 className="mb-5 text-3xl font-bold">Sample WhatsApp Flow</h3>
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">Hi 👋 Welcome to SafeNest. We verify maids, drivers & home staff in 48 hours.</div>
                <div className="rounded-2xl bg-white/10 p-4">Please share: name, role, phone number and ID proof.</div>
                <div className="rounded-2xl bg-white/10 p-4">✅ Verification started. Report will be ready in 24–48 hours.</div>
                <div className="rounded-2xl bg-[#4CAF50] p-4 font-semibold">✅ Your SafeNest report is ready. Summary: LOW RISK.</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-[#0D47A1] py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold">Built for Hyderabad families, apartments and RWAs</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              SafeNest helps gated communities, working couples, NRI families and senior citizens reduce hiring risk with structured verification and easy-to-understand reports.
            </p>
          </div>
          <Card className="border-0 bg-white text-slate-900">
            <div className="p-7">
              <Icon name="lock" className="mb-4 h-9 w-9 text-[#4CAF50]" />
              <h3 className="text-2xl font-bold">Privacy-first promise</h3>
              <p className="mt-3 leading-7 text-slate-600">Every verification requires consent. Data is handled securely and shared only with the requesting customer.</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Ready to verify your home help?</h2>
        <p className="mt-4 text-lg text-slate-600">Start with one verification or partner with us for your apartment community.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button className="px-8 py-4 text-base">Start on WhatsApp</Button>
          <Button variant="outline" className="px-8 py-4 text-base">RWA Partnership</Button>
        </div>
        <div className="mt-10 text-sm text-slate-500">SafeNest by UrbanMed Tech Pvt Ltd • Hyderabad, India</div>
      </section>
    </div>
  );
}
