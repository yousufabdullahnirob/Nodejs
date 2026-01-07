const EventEmitter = require('events');

const emitter = new EventEmitter();

setTimeout(() => {
    emitter.emit('messageLogged');
}, 1000);


emitter.on('messageLogged', () => {
    console.log('Listener called');
});


setTimeout(() => {
    emitter.emit('messageLogged', { period: 'daily', message: 'Hello World'
      
     }

    );
}, 1000);


//mitter.emit('messageLogged');






