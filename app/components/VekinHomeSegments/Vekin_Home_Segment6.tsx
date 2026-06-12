"use client";

import React from "react";

function srcOf(img: any) {
	return typeof img === "string" ? img : img?.src || img?.default || "";
}

export default function Vekin_Home_Segment6() {

	return (
		<section className="w-full">
			<div className="relative w-full">
				<img src="/VEKIN Resource all Product/VEKIN 5/Home_BG6.png" alt="DAP background" className="block h-auto w-full object-contain" />

				<div className="absolute left-[15%] top-[5%] z-40 w-[24%] -translate-x-1/2">
					<a href="/dap_new" target="_blank" rel="noopener noreferrer" className="block border-none bg-transparent p-0 cursor-pointer">
						<img src="/VEKIN Resource all Product/VEKIN 5/3D_DAP_Main.png" alt="One Click" className="h-auto w-full object-contain" />
					</a>
				</div>


			</div>
		</section>
	);
}
