require "kemal"
require "kilt/slang"

require "./chatter"

module Server
  VERSION = "0.1.0"

  chatter = Chatter.new

  static_headers do |response, filepath, filestat|
    if filepath =~ /\.html$/
      response.headers.add("Access-Control-Allow-Origin", "*")
    end
    response.headers.add("Content-Size", filestat.size.to_s)
  end

  before_all "/api/*path" do |env|
    env.response.content_type = "application/json"
  end

  get "/api/users/:id" do |env|
    id = env.params.url["id"]
    {"id": id, "name": "Kemal"}.to_json
  end

  ws "/socket" do |socket|

    chatter.add( socket )

  end

  get "/" do
    render "src/views/index.slang"
  end

  get "/*all" do
    render "src/views/index.slang"
  end

  Kemal.run
end
