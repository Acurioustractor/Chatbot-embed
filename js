// script.js

document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        displayUserMessage(userInput);

        // Simulating AI response for demonstration
        setTimeout(function() { // This simulates a delay as if waiting for an AI response
            displayAiMessage("This is a simulated response for now.");
        }, 1200);

        // Clear the input after sending
        document.getElementById('user-input').value = '';
    }
});

function displayUserMessage(message) {
    var chatBox = document.getElementById('chat-box');
    var userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    chatBox.appendChild(document.createElement('div')).className = 'clearfix';
    scrollChatToBottom();
}

function displayAiMessage(message) {
    var chatBox = document.getElementById('chat-box');
    var aiMessage = document.createElement('div');
    aiMessage.className = 'message ai-message';
    aiMessage.textContent = message;
    chatBox.appendChild(aiMessage);
    chatBox.appendChild(document.createElement('div')).className = 'clearfix';
    scrollChatToBottom();
}

function scrollChatToBottom() {
    var chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
}
