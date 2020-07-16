var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler
var myEventHandler = function() {
    console.log('I hear the scream !');

}

// Assign the event handler to an event

eventEmitter.on('scream', myEventHandler);

//Fier The scream event
eventEmitter.emit('scream');