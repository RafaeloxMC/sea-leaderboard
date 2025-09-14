import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Shoot 'Em All Leaderboard",
	description: "Look at the best players in the game!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<header className="p-8 sm:p-20 bg-white dark:bg-black">
					<nav className="flex justify-between items-center max-w-6xl mx-auto">
						<Link
							className="text-2xl font-bold bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent"
							href="/"
						>
							SEA
						</Link>
						<div className="flex flex-row gap-4">
							<Link
								href="https://game.sea.xvcf.dev/"
								className="px-6 py-3 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 font-medium"
							>
								Play
							</Link>
							<Link
								href="/leaderboard"
								className="px-6 py-3 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 font-medium"
							>
								View Leaderboard
							</Link>
						</div>
					</nav>
				</header>
				{children}
				<footer className="border-t border-neutral-200 dark:border-neutral-800 p-8 text-center">
					<p className="text-neutral-600 dark:text-neutral-400">
						&copy; {new Date().getFullYear()} - Built by xvcf
					</p>
				</footer>
			</body>
		</html>
	);
}
