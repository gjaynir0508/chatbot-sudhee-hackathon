import ChatBotApp from "@/components/Chat";

export default function Home() {
	return (
		<main className="w-screen h-screen grid place-items-center overflow-hidden sm:w-screen">
			<div className="w-screen relative min-w-96 h-full">
				<div className="bg-cyan-900 px-8 py-4 text-center">
					<h1 className="text-md font-bold">
						Emergency Registering Catbot
					</h1>
				</div>
				<ChatBotApp />
			</div>
		</main>
	);
}

