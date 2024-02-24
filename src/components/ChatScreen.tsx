"use client";

import React from "react";

const ChatScreen = ({
	messages,
}: {
	messages: { text: string; sender: "user" | "bot"; time: string }[];
}) => {
	return (
		<div className="chat-screen">
			{messages.map((message, index) => (
				<>
					<div key={index} className={`message ${message.sender}`}>
						{message.text}
						<span>
							{message.sender === "user" ? "You" : "BitBot"} •{" "}
							{new Date(message.time).toLocaleTimeString()}
						</span>
					</div>
					{index === messages.length - 1 && (
						<div ref={(el) => el?.scrollIntoView()} />
					)}
				</>
			))}
		</div>
	);
};

export default ChatScreen;
