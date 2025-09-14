"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Footer() {
	const router = useRouter();
	return (
		<footer className="border-t border-neutral-200 dark:border-neutral-800 p-8 text-center">
			<p className="text-neutral-600 dark:text-neutral-400">
				&copy; {new Date().getFullYear()} - Built by xvcf -{" "}
				<span
					className="hover:cursor-pointer hover:underline"
					onClick={() => router.push("/privacy-policy")}
				>
					Privacy Policy
				</span>
			</p>
		</footer>
	);
}

export default Footer;
