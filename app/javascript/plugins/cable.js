import { createConsumer } from "@rails/actioncable"
import mitt from 'mitt';

const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
const consumer = createConsumer(`${protocol}://${window.location.host}/cable`);
const emitter = mitt();
let channel = null;

function Cable() {}

Cable.prototype.on = function(channel, callback) {
  return emitter.on(channel, callback);
};

Cable.prototype.send = function(message) {
  channel.send({message: message})
};

Cable.prototype.install = function(app) {
  app.plugin = this;
  app.config.globalProperties.$cable = this;
}

export function createCable(options) {
  channel = consumer.subscriptions.create({ channel: options.channel}, {
    received(data) {    
      emitter.emit('chat', data)
    }
  })

  return new Cable();
}