"use client";

import React from "react";

const contactItems = [
  {
    label: "Phone",
    value: "+66 2 714 2490",
    href: "tel:+6627142490",
  },
  {
    label: "Email",
    value: "contact@vekin.co.th",
    href: "mailto:contact@vekin.co.th",
  },
  {
    label: "Address",
    value:
      "89 AIA Capital Center, 12th Floor, Ratchadapisek Road, Din Daeng, Bangkok 10400",
  },
];

const companyLinks = [
  { label: "Solutions", href: "/vekin_home" },
  { label: "AI Energy Auditor", href: "/auditor" },
  { label: "E-Carbon Receipt", href: "/new_ec" },
  { label: "DAP Main", href: "/dap_new" },
  { label: "Packages", href: "/package" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { label: "LINE", src: "/Vekin_Footer/Line.png", href: "#" },
  { label: "WhatsApp", src: "/Vekin_Footer/Whatsapp.png", href: "#" },
  { label: "LinkedIn", src: "/Vekin_Footer/Linkedin.png", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden bg-gradient-to-r from-[#00464E] to-[#3BB97B] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_38%,rgba(0,70,78,0.18))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.75fr_1.15fr] lg:gap-14">
          <div className="md:col-span-2 lg:col-span-1">
            <img
              src="/Vekin_Footer/Logo.png"
              alt="Vekin"
              className="h-11 w-auto object-contain"
            />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
              Sustainable logistics, energy intelligence, and ESG data
              solutions for organizations building measurable climate
              performance.
            </p>

            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <img
                    src={social.src}
                    alt=""
                    className="h-[18px] w-[18px] object-contain opacity-95"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BDF4D7]">
              Explore
            </h2>
            <nav className="mt-5 space-y-3.5" aria-label="Footer navigation">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm font-medium text-white/78 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="h-px w-0 bg-[#BDF4D7] transition-all duration-300 group-hover:w-3" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BDF4D7]">
              Contact
            </h2>
            <div className="mt-5 space-y-3.5">
              {contactItems.map((item) => {
                const content = (
                  <span className="grid gap-1 text-sm leading-relaxed sm:grid-cols-[76px_1fr]">
                    <span className="font-semibold text-white">
                      {item.label}:
                    </span>
                    <span className="text-white/78">{item.value}</span>
                  </span>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-md transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-5 text-xs text-white/62 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Vekin (Thailand) Co., Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
