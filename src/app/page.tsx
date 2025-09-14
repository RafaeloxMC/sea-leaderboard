"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Home() {
	const [totalPlayers, setTotalPlayers] = useState(0);
	const [bestAccuracy, setBestAccuracy] = useState(0);
	const [highScore, setHighScore] = useState(0);

	useEffect(() => {
		fetch("/api/stats").then(async (res) => {
			const json = await res.json();
			if (res.status == 200) {
				setTotalPlayers(json.size);
				setBestAccuracy(json.best_accuracy.accuracy * 100);
				setHighScore(json.high_score.score);
			}
		});
	}, []);

	return (
		<div className="font-sans min-h-screen bg-white dark:bg-black text-black dark:text-white">
			<main className="px-8 sm:px-20 pb-20">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent mb-6">
							Shoot &apos;Em All
						</h1>
						<p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
							A Godot aim trainer to sharpen your reflexes and
							precision. Compete globally and climb the
							leaderboard. 100% Online.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
						<Link
							href="/leaderboard"
							className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg text-lg font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 text-center"
						>
							View Leaderboard
						</Link>
						<Link
							href="/play"
							className="px-8 py-4 border border-neutral-200 dark:border-neutral-800 rounded-lg text-lg font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200"
						>
							Play
						</Link>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-20">
						<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 text-center">
							<div className="text-4xl mb-4">🎯</div>
							<h3 className="text-xl font-semibold mb-3 bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent">
								Precision Training
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Improve your aim with random target patterns
								designed to enhance your accuracy in real games.
							</p>
						</div>
						<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 text-center">
							<div className="text-4xl mb-4">🏆</div>
							<h3 className="text-xl font-semibold mb-3 bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent">
								Global Rankings
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Compete with other players worldwide, track your
								progress, and see how you rank against the best.
							</p>
						</div>{" "}
						<div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 text-center">
							<div className="text-4xl mb-4">⚡</div>
							<h3 className="text-xl font-semibold mb-3 bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent">
								Fast-Paced Action
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Quick 60-second-based rounds perfect for warming
								up before matches.
							</p>
						</div>
					</div>
					<div className="text-center border border-neutral-200 dark:border-neutral-800 rounded-lg p-8">
						<h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent">
							Game Statistics
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div>
								<div className="text-3xl sm:text-4xl font-bold text-neutral-600 dark:text-neutral-400 mb-2">
									{totalPlayers.toString() ?? "0"}
								</div>
								<div className="text-sm text-neutral-500">
									Total Players
								</div>
							</div>
							<div>
								<div className="text-3xl sm:text-4xl font-bold text-neutral-600 dark:text-neutral-400 mb-2">
									{bestAccuracy.toFixed(2) ?? "0"}%
								</div>
								<div className="text-sm text-neutral-500">
									Best Accuracy
								</div>
							</div>
							<div>
								<div className="text-3xl sm:text-4xl font-bold text-neutral-600 dark:text-neutral-400 mb-2">
									{highScore.toString() ?? "0"}
								</div>
								<div className="text-sm text-neutral-500">
									High Score
								</div>
							</div>
							<div>
								<div className="text-3xl sm:text-4xl font-bold text-neutral-600 dark:text-neutral-400 mb-2">
									24/7
								</div>
								<div className="text-sm text-neutral-500">
									Online
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
