import { NextResponse } from "next/server";

interface APIEntry {
	name: string;
	score: number;
	accuracy: number;
	date: Date;
}

export async function GET() {
	try {
		const response = await fetch("https://api.sea.xvcf.dev/leaderboard");
		const data = await response.json();

		const sortedData = data
			.sort((a: APIEntry, b: APIEntry) => {
				if (b.score !== a.score) {
					return b.score - a.score;
				}
				return b.accuracy - a.accuracy;
			})
			.map((entry: APIEntry, index: number) => ({
				rank: index + 1,
				username: entry.name,
				score: entry.score,
				accuracy: entry.accuracy,
				date: entry.date,
			}));

		console.log(sortedData);

		return NextResponse.json(sortedData);
	} catch {
		return NextResponse.json(
			{ error: "Failed to fetch leaderboard data" },
			{ status: 500 }
		);
	}
}
