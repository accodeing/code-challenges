class Chatter
  MESSAGE_HISTORY = [] of String
  CHATTERS =

  MESSAGE_HISTORY << "Welcome to awesomechat!"

  @current_user : UInt64 | Nil

  def initialize()
    @message_history = Array(String).new
    @chatters = Hash(UInt64, Hash(String,HTTP::WebSocket | String)).new
    @current_user = nil
  end

  def with_current_user

  end

  def add( socket : HTTP::WebSocket )
    id = socket.object_id

    @chatters[ id ] = {
      "name" => "",
      "color" => "",
      "socket" => socket
    }

    socket.on_message do |message|
      @current_user = id
      router( message )
      @current_user = nil
    end

    socket.on_close do
      @current_user = id
      logout
      @current_user = nil
    end
  end

  def router( message : String )
    case message
    when .starts_with?( "login:" )
      name = message.split(':')[1..-1].join(':').strip()
      login( name )
    else
      send_message( message )
    end
  end

  def login( name : String )
    existing_user = @chatters.find{|id,hash| puts "#{hash["name"]} == #{name}"; hash["name"] == name }
    if( existing_user )
      @current_user = existing_user[0]
    end
    @chatters[ @current_user ]["name"] = name
    r = Random.rand(256)
    g = Random.rand(256)
    b = Random.rand(256)
    @chatters[ @current_user ]["color"] = sprintf("#%X%X%X", r, g, b)
    socket = @chatters[ @current_user ]["socket"]
    if socket.is_a? HTTP::WebSocket
      @message_history.each do |message|
        socket.send message
      end
    end
  end

  def logout
    #@chatters.delete( @current_user )
  end

  def create_message( text : String )
    name = @chatters[ @current_user ]["name"]
    color = @chatters[ @current_user ]["color"]
    time = Time.now.to_s("%s")
    "#{name}:#{color}:#{time}:#{text}"
  end

  def send_message( text : String )
    message = create_message( text )
    @message_history << message
    @chatters.each do |_, hash|
      socket = hash["socket"]
      if socket.is_a? HTTP::WebSocket
        socket.send message
      end
    end
  end
end
