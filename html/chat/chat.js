import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQSJUfzP-PGt0tx6WCs_U4SY5TXUP-iqk",
  authDomain: "chat-magic-x-logi.firebaseapp.com",
  databaseURL: "https://chat-magic-x-logi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-magic-x-logi",
  storageBucket: "chat-magic-x-logi.firebasestorage.app",
  messagingSenderId: "161962777336",
  appId: "1:161962777336:web:a8ef6db4254df183eb390d"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const usernameInput = document.getElementById('username-input');

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  const username = usernameInput.value.trim() || 'Anónimo';

  if (messageText !== '') {
    const newMessageRef = push(ref(database, 'messages'));
    set(newMessageRef, {
      username: username,
      message: messageText,
      timestamp: Date.now()
    });

    messageInput.value = '';
  }
});

function displayMessage(username, message, timestamp) {
  const messageElement = document.createElement('li');
  const time = new Date(timestamp).toLocaleTimeString();
  messageElement.innerHTML = `<strong>${username} (${time}):</strong> ${message}`;
  messageList.appendChild(messageElement);

  messageList.scrollTop = messageList.scrollHeight;
}

const messagesRef = ref(database, 'messages');
onChildAdded(messagesRef, (snapshot) => {
  const messageData = snapshot.val();
  displayMessage(messageData.username, messageData.message, messageData.timestamp);
});
