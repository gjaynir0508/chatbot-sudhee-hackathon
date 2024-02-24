import React, { useEffect, useRef } from "react";

const Response = ({ model, prompt }) => {
	const streamRef = useRef();

	const outputRef = useRef();

	const handleStream = () => {
		const reader = streamRef.current.getReader();
		const pump = () => {
			reader.read().then(({ done, value }) => {
				if (done) {
					return;
				}

				outputRef.current.textContent += value;
				pump();
			});
		};

		pump();
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`http://localhost:11434/api/generate`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						model,
						prompt,
					}),
				}
			);

			const reader = response.body.getReader();
			const stream = new ReadableStream({
				start(controller) {
					function push() {
						reader.read().then(({ done, value }) => {
							if (done) {
								controller.close();
								return;
							}

							controller.enqueue(new TextDecoder().decode(value));
							push();
						});
					}

					push();
				},
			});

			streamRef.current = stream;
		};

		fetchData();
	}, [model, prompt]);

	return (
		<div>
			<h2>Response:</h2>
			<div>
				<output ref={outputRef}></output>
			</div>
			<button onClick={handleStream}>Stream Response</button>
		</div>
	);
};

export default Response;
