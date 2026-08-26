const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// greet event
myEmitter.on('greet', () => {
    console.log("Hello! Welcome to Node.js");
});

// exit event
myEmitter.on('exit', () => {
    console.log("Goodbye! Exiting program...");
});

// Trigger events
myEmitter.emit('greet');
myEmitter.emit('exit');