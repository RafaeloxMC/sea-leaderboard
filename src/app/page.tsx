"use client";
import { LeaderboardEntry } from "@/components/LeaderboardEntry";
import { useEffect, useState } from "react";

interface LeaderboardData {
	rank: number;
	username: string;
	score: number;
	accuracy: number;
	date: string;
}

export default function Home() {
	const [entries, setEntries] = useState<LeaderboardData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/leaderboard")
			.then((res) => {
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				setEntries(data);
				setError(null);
			})
			.catch((err) => {
				console.error("Fetch error:", err);
				setError("Failed to load leaderboard data.");
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-tl from-neutral-600 to-neutral-300 bg-clip-text text-transparent text-center">
				Leaderboard
			</h1>
			<div className="w-full max-w-4xl">
				{loading && <p>Loading leaderboard...</p>}
				{error && <p className="text-red-500">{error}</p>}
				{!loading && !error && entries.length === 0 && (
					<p>No entries found.</p>
				)}
				{!loading && !error && entries.length > 0 && (
					<>
						{entries.length >= 1 && (
							<div className="mb-12">
								<div className="flex justify-center items-end gap-6 mb-8">
									{entries[1] && (
										<div className="text-center flex flex-col items-center">
											<div className="bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg p-4 h-24 w-24 flex items-center justify-center mb-4">
												<span className="text-2xl font-bold text-white">
													2
												</span>
											</div>
											<div className="border border-neutral-100 dark:border-neutral-800 rounded-lg p-4">
												<p className="font-semibold">
													{entries[1].username}
												</p>
												<p className="text-neutral-600 dark:text-neutral-400 text-sm">
													{entries[1].score.toLocaleString()}{" "}
													-{" "}
													{entries[1].accuracy * 100}%
												</p>
											</div>
										</div>
									)}

									{entries[0] && (
										<div className="text-center flex flex-col items-center">
											<div className="bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-lg p-4 h-32 w-32 flex items-center justify-center mb-4">
												<span className="text-3xl font-bold text-white">
													1
												</span>
											</div>
											<div className="border border-neutral-100 dark:border-neutral-800 rounded-lg p-4">
												<p className="font-bold">
													{entries[0].username}
												</p>
												<p className="text-neutral-600 dark:text-neutral-400 text-sm">
													{entries[0].score.toLocaleString()}{" "}
													-{" "}
													{entries[0].accuracy * 100}%
												</p>
											</div>
										</div>
									)}

									{entries[2] && (
										<div className="text-center flex flex-col items-center">
											<div className="bg-gradient-to-b from-orange-300 to-orange-600 rounded-lg p-4 h-20 w-20 flex items-center justify-center mb-4">
												<span className="text-xl font-bold text-white">
													3
												</span>
											</div>
											<div className="border border-neutral-100 dark:border-neutral-800 rounded-lg p-4">
												<p className="font-semibold">
													{entries[2].username}
												</p>
												<p className="text-neutral-600 dark:text-neutral-400 text-sm">
													{entries[2].score.toLocaleString()}{" "}
													-{" "}
													{entries[2].accuracy * 100}%
												</p>
											</div>
										</div>
									)}
								</div>
							</div>
						)}

						<h2 className="font-bold text-center mb-2">
							All players
						</h2>

						<div className="border border-neutral-100 dark:border-neutral-800 rounded-lg overflow-hidden">
							<table className="w-full border-collapse">
								<thead>
									<tr className="bg-neutral-100 dark:bg-neutral-800">
										<th className="border-r border-neutral-100 dark:border-neutral-800 px-4 py-2 first:border-l-0 last:border-r-0">
											Rank
										</th>
										<th className="border-r border-neutral-100 dark:border-neutral-800 px-4 py-2 last:border-r-0">
											Username
										</th>
										<th className="border-r border-neutral-100 dark:border-neutral-800 px-4 py-2 last:border-r-0">
											Score
										</th>
										<th className="border-r border-neutral-100 dark:border-neutral-800 px-4 py-2 last:border-r-0">
											Accuracy
										</th>
										<th className="border-r border-neutral-100 dark:border-neutral-800 px-4 py-2 last:border-r-0">
											Date
										</th>
									</tr>
								</thead>
								<tbody>
									{entries.map((entry, index) => (
										<LeaderboardEntry
											score={entry.score}
											rank={entry.rank}
											username={entry.username}
											accuracy={entry.accuracy}
											date={entry.date}
											key={index}
										/>
									))}
								</tbody>
							</table>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
