class Chatter

  class User
    property id, name, socket, color

    def initialize( @id : UInt64, @name : String, @color : String, @socket : HTTP::WebSocket )
    end

    def send_message( message : Message )
      @socket.send( message.to_s )
    end
  end

  SERVER = User.new( 0, "Server", "#f00", HTTP::WebSocket.new( IO::Memory.new("") ) )

  class Message
    property room, user, color, text

    @time : Int32

    def initialize( @room : Room, @user : User, @text : String )
      @time = Time.now.to_s("%s").to_i
    end

    def to_s
      "#{ @room.name }:#{ @user.name }:#{ @user.color }:#{ @time }:#{ @text }"
    end
  end

  class Room
    property name, users, history

    def initialize( @name : String, @users = Array( User ).new, @history = Array( Message ).new )
    end

    def add_user( user : User )
      @users << user
    end

    def join( user : User )
      add_user( user )
      @history << Message.new( "Server", "#f00", "#{ user.name } joined" )
    end

    def remove_user( user : User )
      @users.delete( user )
    end

    def leave( user : User )
      remove_user( user )
      @history << Message.new( "Server", "#f00", "#{ user.name } left" )
    end

    def send_message( user : User, text : String )
      message = Message.new( self, user, text )
      @history << message
      @users.each do |user|
        user.send_message( message )
      end
    end
  end

  BANNER = [
    "Welcome to Awesomechat!",
    "-----------------------",
    "Here are some commands you can try out:",
    "/join [room] - Join a chatroom",
    "/leave [room] - Leave a named room, or current room if name is omitted",
    "",
  ]

  @@rooms = Hash( String, Room ).new

  @current_user : User
  @current_room : Room

  def initialize()
    time = Time.now.to_s("%s")
    @message_history = [
      "Server:#f00:#{ time }:Welcome to Awesomechat!",
      "Server:#f00:#{ time }:-----------------------",
      "Server:#f00:#{ time }:Here are some commands you can try out:",
      "Server:#f00:#{ time }:/join [room] - Join a chatroom",
      "Server:#f00:#{ time }:/leave [room] - Leave a named room, or current room if name is omitted",
      "Server:#f00:#{ time }:",
    ]

    @current_room = Room.new("Lobby")
    @current_user = SERVER
  end

  def name_to_id( name : String )
    name.downcase.gsub(/[^\w]/,"_")
  end

  def random_color
    r = Random.rand(256)
    g = Random.rand(256)
    b = Random.rand(256)
    sprintf("#%X%X%X", r, g, b)
  end

  def add( name : String, socket : HTTP::WebSocket )
    id = socket.object_id
    user = User.new( id, name, random_color, socket )
    lobby = Room.new("Lobby")

    lobby.add_user( user )

    BANNER.each do |message|
      lobby.send_message( SERVER, message )
    end

    socket.on_message do |message|
      puts "message: #{ message }"

      room, text = message.split( ":", 2 )

      puts "room: #{ room }"
      puts "text: #{ text }"

      @current_user = user
      @current_room = @@rooms.fetch( name_to_id( room ), lobby )
      router( text )
    end

    socket.on_close do
      @current_user = user
    end
  end

  def router( message : String )
    case message
    when .starts_with?( "/" )
      process_command( message )
    else
      @current_room.send_message( @current_user, message )
    end
  end

  def process_command( message )
    parts = message.split(' ')
    command = parts[0].strip()
    rest = parts[1..-1].join(' ').strip()

    case command
    when "/join"
      join_room( rest )
    when "/leave"
      leave_room( rest )
    else
      @current_room.send_message( SERVER, "Command #{command} not recognized" )
    end
  end

  def join_room( room : String )
    room_id = name_to_id( room )
    if @@rooms.has_key?( room_id )
      # Joining existing room
      p "#{ @current_user.name } is joining #{ room }"
      @@rooms[ room_id ].users << @current_user
      @@rooms[ room_id ].history.each do |message|
        @current_user.send_message( message )
      end
      @@rooms[ room_id ].send_message( SERVER, "#{ @current_user.name } entered room!")
    else
      # Creating new room
      p "#{ @current_user.name } created #{ room }"
      @@rooms[ room_id ] = Room.new( room )
      @@rooms[ room_id ].users << @current_user
      @@rooms[ room_id ].send_message( SERVER, "#{ @current_user.name } created room!")
    end
  end

  def leave_room( room : String )

  end

end
