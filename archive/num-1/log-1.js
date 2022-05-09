const EventEmitter = require('events');


class Logger extends EventEmitter {
  log = (msg) => {
    console.log(msg);
    this.emit("logiruemsya", { id: 5, text: 'Den, Den-Den Denyok!!!' });
  }
}


module.exports = Logger;
