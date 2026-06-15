"use client";

import React from "react";

function srcOf(img: any) {
	return typeof img === "string" ? img : img?.src || img?.default || "";
}

export default function Vekin_Home_Segment3() {

	return (
		<section className="w-full">
			<div className="relative w-full">
				<img src="/VEKIN Resource all Product/VEKIN 5/Home_BG3.png" alt="DAP background" className="block h-auto w-full object-contain" />

				<div className="absolute left-[80%] top-[10%] z-40 w-[40%] -translate-x-1/2">
					<a href="/auditor" target="_blank" rel="noopener noreferrer" className="block border-none bg-transparent p-0 cursor-pointer">
						<img src="/VEKIN Resource all Product/VEKIN 5/3D_Energy_Auditor.png" alt="One Click" className=" h-auto w-full object-contain transition-all duration-300 hover:scale-110"/>
					</a>
				</div>


			</div>
		</section>
	);
}
