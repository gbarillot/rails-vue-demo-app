import consumer from "../consumer";

export default function chat(emitter) {
  consumer.subscriptions.create({ channel: "ChatChannel" }, {
    received(data) {
      emitter.emit('chat', data)
    }
  });
}