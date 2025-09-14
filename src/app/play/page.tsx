"use client";
import React, { useRef } from "react";

function Play() {
	const iframeRef = useRef<HTMLIFrameElement>(null);

	const handleFullscreen = () => {
		if (iframeRef.current) {
			if (iframeRef.current.requestFullscreen) {
				iframeRef.current.requestFullscreen();
			}
		}
	};

	const handleReload = () => {
		if (iframeRef.current) {
			iframeRef.current.src = iframeRef.current.src;
		}
	};

	return (
		<div className="font-sans min-h-screen bg-white dark:bg-black text-black dark:text-white">
			<main className="px-8 sm:px-20 pb-20">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16 items-center justify-center">
						<h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent mb-6">
							Play Shoot &apos;Em All
						</h1>
						<div className="relative">
							<iframe
								ref={iframeRef}
								src="https://game.sea.xvcf.dev/"
								className="w-full h-[600px] md:h-[700px] lg:h-[800px] border-0 rounded-lg shadow-lg overflow-hidden"
								title="Shoot Em All Game"
							/>
							<div className="absolute top-4 right-4 flex gap-2">
								<button
									onClick={handleReload}
									className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
									title="Reload Game"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
										/>
									</svg>
								</button>
								<button
									onClick={handleFullscreen}
									className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
									title="Fullscreen"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
										/>
									</svg>
								</button>
							</div>
						</div>
						<p>
							NOTE: Quitting using the ingame options freezes the
							game. Reset with the dedicated button.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Play;
