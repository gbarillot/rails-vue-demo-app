class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_from "ChatChannel"
  end

end