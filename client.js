// client.js
const socket = io()oi
ìvar messages = ì
  if (input.value) ì
  }
});

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

input.addEventListener("input", () => {
  socket.emit("typing");
});

socket.on("typing", (username) => {
  typingDiv.innerText = `${username} is typing...`;
  setTimeout(() => typingDiv.innerText = "", 2000);
});
