"use client";

import React, { FormEvent, useState } from "react";

const ChatInput = ({
	onSendMessage,
}: {
	onSendMessage: (input: string) => void;
}) => {
	const [inputValue, setInputValue] = useState("");
	const [height, setHeight] = useState("60px");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (inputValue.trim()) {
			onSendMessage(inputValue);
			setInputValue("");
		}
		setHeight("60px");
	};

	return (
		<form onSubmit={handleSubmit} className="chat-input">
			<textarea
				cols={60}
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
				placeholder="Type your message here..."
				style={{ height }}
			/>
			<button type="submit">Send</button>
		</form>
	);
};

export default ChatInput;
