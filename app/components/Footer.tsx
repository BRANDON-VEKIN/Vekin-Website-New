"use client";

import React from "react";

export default function Footer() {
	return (
<footer className="bg-black text-white">
    <div className="mx-auto max-w-7xl px-6 py-16">

        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>
                <img
                    src="/Vekin_Footer/Logo.png"
                    alt="Vekin Logo"
                    className="h-14 w-auto"
                />

                <p className="mt-6 max-w-md text-white/70 leading-relaxed">
                    Delivering sustainable logistics, energy solutions, and
                    ESG-driven innovation for organizations across Thailand.
                </p>

                <div className="mt-8 flex gap-4">
                    <a href="#">
                        <img
                            src="/Vekin_Footer/Line.png"
                            alt="Line"
                            className="h-11 w-11 rounded-full border border-white/20 p-2 hover:border-[#258974] transition"
                        />
                    </a>

                    <a href="#">
                        <img
                            src="/Vekin_Footer/Whatsapp.png"
                            alt="Whatsapp"
                            className="h-11 w-11 rounded-full border border-white/20 p-2 hover:border-[#258974] transition"
                        />
                    </a>

                    <a href="#">
                        <img
                            src="/Vekin_Footer/Linkedin.png"
                            alt="LinkedIn"
                            className="h-11 w-11 rounded-full border border-white/20 p-2 hover:border-[#258974] transition"
                        />
                    </a>
                </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-6 sm:grid-cols-1">

                <div>
                    <h3 className="mb-4 text-lg font-semibold text-white">
                        Contact
                    </h3>

                    <div className="space-y-4 text-white/70">

						<div className="text-white/70">
							<span className="font-semibold text-white">Phone:</span>{" "}
							+66 2 714 2490
						</div>

						<div className="text-white/70">
							<span className="font-semibold text-white">Email:</span>{" "}
							contact@vekin.co.th
						</div>

						<div className="text-white/70">
							<span className="font-semibold text-white">Address:</span>{" "}
							89 AIA Capital Center, 12th Floor, Ratchadapisek Road, Din Daeng, Bangkok 10400
						</div>


                    </div>
                </div>

            </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
            <div>
                © 2026 Vekin (Thailand) Co., Ltd. All rights reserved.
            </div>

            <div className="flex gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>

    </div>
</footer>
	);
}
