"use client";

import React, { FormEvent, useEffect, useState } from "react";

const ChatInput = ({
	onSendMessage,
}: {
	onSendMessage: (input: string) => void;
}) => {
	const [inputValue, setInputValue] = useState("");
	const [height, setHeight] = useState("60px");
	const [geo, setGeo] = useState<{ longitude?: number; latitude?: number }>(
		{}
	);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (inputValue.trim()) {
			onSendMessage(inputValue);
			setInputValue("");
		}
		setHeight("60px");
	};

	useEffect(() => {
		if (window.navigator) {
			window.navigator.geolocation.getCurrentPosition((position) => {
				setGeo({
					longitude: position.coords.longitude,
					latitude: position.coords.latitude,
				});
			});
		} else {
			console.log("Geolocation not supported");
		}
	}, []);

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
			<button
				type="button"
				style={{
					borderRadius: "4px",
					marginLeft: "8px",
					fontSize: "16px",
					backgroundColor: "gray",
					padding: "16px 24px",
				}}
				onClick={() => {
					setHeight(height === "60px" ? "200px" : "60px");
				}}
			>
				{height === "60px" ? "▲" : "▼"}
			</button>
			<span style={{ position: "absolute", bottom: 0, fontSize: 12 }}>
				Your detected location: Longitude{" "}
				<span style={{ fontWeight: "bold" }}>{geo.longitude}</span>{" "}
				Latitude{" "}
				<span style={{ fontWeight: "bold" }}>{geo.latitude}</span>
			</span>
		</form>
	);
};

export default ChatInput;
