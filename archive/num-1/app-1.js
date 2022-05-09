const Logger = require("./log");

const logger = new Logger()


logger.on("logiruemsya", (args) => {
  const {id, text} = args
  // console.log(id,text);
});

logger.log('OK! WERY VELL!')
