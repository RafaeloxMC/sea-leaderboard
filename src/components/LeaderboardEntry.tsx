interface LeaderboardEntryProps {
	username: string;
	score: number;
	accuracy: number;
	date: string;
	rank: number;
}

export const LeaderboardEntry = ({
	username,
	score,
	accuracy,
	date,
	rank,
}: LeaderboardEntryProps) => {
	return (
		<tr className="border-b border-neutral-200 dark:border-neutral-800 text-center">
			<td className="p-4 border-neutral-200 dark:border-r-neutral-800 border-r-2">
				#{rank}
			</td>
			<td className="p-4 border-neutral-200 dark:border-r-neutral-800 border-r-2">
				{username}
			</td>
			<td className="p-4 border-neutral-200 dark:border-r-neutral-800 border-r-2">
				{score}
			</td>
			<td className="p-4 border-neutral-200 dark:border-r-neutral-800 border-r-2">
				{(accuracy * 100).toFixed(2)}%
			</td>
			<td className="p-4 border-neutral-200 dark:border-r-neutral-800 border-r-0">
				{new Date(date).toLocaleDateString()}
			</td>
		</tr>
	);
};
