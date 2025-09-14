import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch("https://api.sea.xvcf.dev/stats");
		const json = await response.json();

		return NextResponse.json(json, { status: 200 });
	} catch {
		return NextResponse.json(
			{ error: "An error ocurred while fetching data" },
			{ status: 500 }
		);
	}
}
