class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_from "ChatChannel"
  end

  def unsubscribed
    stop_all_streams
  end

  def talk(data)
    ActionCable.server.broadcast "ChatChannel", data['message']
  end
end
