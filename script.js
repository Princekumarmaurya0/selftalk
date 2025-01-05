function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatWindow = document.getElementById('chatWindow');
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        const chatBubble = document.createElement('div');
        chatBubble.className = 'chat-bubble';
        chatBubble.textContent = messageText;

        chatWindow.appendChild(chatBubble);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        messageInput.value = '';

        saveMessage(messageText);
    }
}

function saveMessage(message) {
    let chatHistory = localStorage.getItem('chatHistory');
    chatHistory = chatHistory ? JSON.parse(chatHistory) : [];
    chatHistory.push(message);
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadChatHistory() {
    const chatWindow = document.getElementById('chatWindow');
    let chatHistory = localStorage.getItem('chatHistory');
    chatHistory = chatHistory ? JSON.parse(chatHistory) : [];

    chatHistory.forEach(message => {
        const chatBubble = document.createElement('div');
        chatBubble.className = 'chat-bubble';
        chatBubble.textContent = message;
        chatWindow.appendChild(chatBubble);
    });

    chatWindow.scrollTop = chatWindow.scrollHeight;
}

window.onload = loadChatHistory;
