const chat = document.querySelector("#chat pre");
const name = document.getElementById("name");
const msg = document.getElementById("msg");
const login_form = document.querySelector("#login form");
const chat_form = document.querySelector("#chat form");
const rooms = document.querySelector("#rooms ul");
const tabs = document.querySelector("#tabs ul");

let websocket;
let current_room = "lobby";
let room_list = {};

const room_id = name => name.toLowerCase().replace(/[^\w]/g, "_");

const add_room = name => {
  const _name = room_id(name);

  var room = document.createElement("li");
  room.dataset.name = _name;
  room.classList.add("current");
  var pre = document.createElement("pre");
  room.appendChild(pre);
  rooms.appendChild(room);

  var tab = document.createElement("li");
  tab.dataset.name = _name;
  tab.classList.add("current");
  tab.textContent = name;
  tabs.appendChild(tab);

  room_list[_name] = {
    name: name,
    tab: tab,
    room: room
  };
};

const switch_to_room = id => {
  document.querySelector("#rooms .current").classList.remove("current");
  document.querySelector("#tabs .current").classList.remove("current");
  current_room = id;
  document.querySelector(`#rooms [data-name=${id}]`).classList.add("current");
  document.querySelector(`#tabs [data-name=${id}]`).classList.add("current");
};

const onmessage = e => {
  const [room, name, color, time, text] = e.data.split(":");
  const id = room_id(room);

  if (room_list.hasOwnProperty(id)) {
    console.log(
      "Message to registered channel:",
      room,
      name,
      color,
      time,
      text
    );
    const message = document.createElement("div");
    message.style.color = color;
    const date = new Date(time * 1000);
    const content = document.createTextNode(
      `[${name} ${date.toISOString()}] - ${text}`
    );

    message.appendChild(content);

    room_list[id].room.querySelector("pre").appendChild(message);
  } else {
    console.log("Message to unknown channel:", room, name, color, time, text);
  }
};

login_form.addEventListener("submit", e => {
  websocket = new WebSocket("ws://" + location.host + "/socket/" + name.value);
  websocket.onmessage = onmessage;
  document.getElementById("login").style.display = "none";
  document.getElementById("chat").style.display = "block";
  chat_form.querySelector("input").focus();
  e.preventDefault();
});

chat_form.addEventListener("submit", e => {
  if (msg.value.startsWith("/join ")) {
    const [_, name] = msg.value.split(" ", 2);
    const id = room_id(name);
    document.querySelector("#rooms .current").classList.remove("current");
    document.querySelector("#tabs .current").classList.remove("current");
    add_room(name);
    current_room = id;
  }

  console.log("Message from registered channel:", current_room, msg.value);
  websocket.send(current_room + ":" + msg.value);

  msg.value = "";
  msg.focus();
  e.preventDefault();
});

tabs.addEventListener("click", e => {
  switch_to_room(e.target.dataset.name);
});

window.onbeforeunload = () => {
  if (!websocket) {
    return;
  }
  websocket.onclose = function() {}; // disable onclose handler first
  websocket.close();
};

add_room("Lobby");

login_form.querySelector("input").focus();
