import { createConsumer } from "@rails/actioncable"

const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
const consumer = createConsumer(`${protocol}://${window.location.host}/cable`);

export default consumer;