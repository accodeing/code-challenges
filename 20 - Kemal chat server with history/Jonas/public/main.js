const chat = document.querySelector("#chat pre");
const name = document.getElementById("name");
const msg = document.getElementById("msg");
const login_form = document.querySelector("#login form");
const chat_form = document.querySelector("#chat form");
let websocket;

const onmessage = e => {
  const [name, color, time, text] = e.data.split(":");
  var message = document.createElement("div");
  message.style.color = color;
  var date = new Date(time * 1000);
  var content = document.createTextNode(
    `[${name} ${date.toISOString()}] - ${text}`
  );
  message.appendChild(content);
  chat.appendChild(message);
};

login_form.addEventListener("submit", e => {
  websocket = new WebSocket("ws://" + location.host + "/socket");
  websocket.onmessage = onmessage;
  websocket.onopen = () => {
    console.log("Open");
    websocket.send("login:" + name.value);
  };
  document.getElementById("login").style.display = "none";
  document.getElementById("chat").style.display = "block";
  e.preventDefault();
});

chat_form.addEventListener("submit", e => {
  websocket.send(msg.value);
  msg.value = "";
  msg.focus();
  e.preventDefault();
});

window.onbeforeunload = () => {
  if (!websocket) {
    return;
  }
  websocket.onclose = function() {}; // disable onclose handler first
  websocket.close();
};
