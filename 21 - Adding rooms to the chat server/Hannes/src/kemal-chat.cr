require "kemal"

logging false
serve_static false

SOCKETS = [] of HTTP::WebSocket

MESSAGES = [] of String

ROOMS = {} of String => Array(String)

get "/" do
  render "views/index.ecr"
end

ws "/chat" do |socket|
  # Add the client to SOCKETS list
  SOCKETS << socket

  # Broadcast each message to all clients
  socket.on_message do |message|
    MESSAGES << message
    SOCKETS.each { |socket| socket.send message}
  end

  # Remove clients from the list when it's closed
  socket.on_close do
    SOCKETS.delete socket
  end
end

get "/history" do
  MESSAGES.to_json
end

post "/create-room" do |env|
  # TODO: Use web sockets instead!
  room = env.params.json["name"].as(String)
  ROOMS[room] = [] of String
end

Kemal.run
