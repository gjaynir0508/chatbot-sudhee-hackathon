"use client";

import React, { SetStateAction, useState } from "react";
import ChatScreen from "./ChatScreen";
import ChatInput from "./ChatInput";

import "./styles.css";

const ChatBotApp = () => {
	const [messages, setMessages] = useState([]);

	const handleSendMessage = (text: string) => {
		const newMessage = {
			sender: "user",
			text,
			time: new Date().toISOString(),
		};
		setMessages(((prevMessages) => [
			...prevMessages,
			newMessage,
		]) as SetStateAction<never[]>);

		// Simulate bot response
		setTimeout(() => {
			const botMessage = {
				sender: "bot",
				text: `You said: ${text}`,
				time: new Date().toISOString(),
			};
			setMessages(((prevMessages) => [
				...prevMessages,
				botMessage,
			]) as SetStateAction<never[]>);
		}, 1000);
	};

	return (
		<div className="app">
			<ChatScreen messages={messages} />
			<ChatInput onSendMessage={handleSendMessage} />
		</div>
	);
};

const loremText = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae voluptatibus sit facilis maiores, fugiat, esse qui dolores, odit deleniti atque. In corrupti enim ratione! Corrupti doloribus sapiente minima maxime?`;

export default ChatBotApp;
