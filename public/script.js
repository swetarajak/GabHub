// for connecting the user
const socket = io('http://localhost:5000');

// disconnecting the user
const chatMessage = document.querySelector('.chat-messages');
const inputBox = document.querySelector('.input-box');
const sendBtn = document.querySelector('.send-btn')

// Function to append messages to the chat
function appendMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = message;
    chatMessage.appendChild(messageDiv);
    chatMessage.scrollTop = chatMessage.scrollHeight; // Auto-scroll to the latest message
  }

sendBtn.addEventListener('click', ()=> {
    const message = inputBox.value.trim();
    if(message){
        appendMessage(message, 'sent');
        socket.emit('chat message', message);
        inputBox.value = '';
    }
});

// Send message on Enter key press
inputBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      sendBtn.click();
    }
  });


// Listen for incoming messages
socket.on('chat message', (msg) => {
    appendMessage(msg, 'received'); // Append message as 'received'
  });