class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_from "ChatChannel"
  end

  def receive(data)
    ActionCable.server.broadcast("ChatChannel", {
      message: data['message'].upcase
    })
  end
end