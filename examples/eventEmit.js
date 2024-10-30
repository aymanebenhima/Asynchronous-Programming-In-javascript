const EventEmitter = require('events');
const event = new EventEmitter();
event.on('message', (data) => {
    console.log('Message received:', data);
})

event.emit('message', 'Hello this is my first event');