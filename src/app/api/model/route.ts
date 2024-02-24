import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const formData = await request.formData();
	const prompt = formData.get("prompt") as string;

	console.log(prompt);
	console.log(request.geo);

	return new Response("OK");
}
