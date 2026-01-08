// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   script.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: aelison <aelison@student.42antananarivo.m  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2025/12/29 09:07:14 by aelison           #+#    #+#             //
//   Updated: 2025/12/29 09:07:16 by aelison          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const loading = document.getElementById('loading');

// Send message on button click
sendBtn.addEventListener('click', sendMessage);

// Send message on Enter key
userInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		sendMessage();
	}
});

async function sendMessage() {
	const user_mssg = userInput.value.trim();

	// Don't send empty messages
	if (!user_mssg) return;

	// Display user message
	addMessage(user_mssg, 'user');

	// Clear input
	userInput.value = '';

	// Disable input while waiting
	setLoading(true);

	try {
		// Call backend API
		const response = await fetch('/api/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: user_mssg })
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();

		// Display bot response
		addMessage(data.reply, 'bot');

	} catch (error) {
		console.error('Error:', error);
		addMessage('Sorry, something went wrong. Please try again.', 'bot');
	} finally {
		setLoading(false);
	}
}

function addMessage(text, sender) {
	const messageDiv = document.createElement('div');
	messageDiv.className = `message ${sender}-message`;

	if (sender === 'bot') {
		messageDiv.innerHTML = marked.parse(text);
	}
	else {
		messageDiv.textContent = text;
	}

	chatMessages.appendChild(messageDiv);

	// Scroll to bottom
	chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setLoading(isLoading) {
	loading.style.display = isLoading ? 'block' : 'none';
	sendBtn.disabled = isLoading;
	userInput.disabled = isLoading;
}
