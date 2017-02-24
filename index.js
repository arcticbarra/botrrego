const comida = require('./bot/comida');
const bancos = require('./bot/bancos');
const cajeros = require('./bot/cajeros');
const aulas = require('./bot/aulas');
const edificios = require('./bot/edificios');

module.exports = function(bp) {

  // NOTE: Agregar gym
  // Punto azul
  // Digital Hub
  // Tec Store

  bp.middlewares.load();
  bp.hear(/GET_STARTED/i, (event,next) => {
    bp.messenger.sendText(event.user.id, `Hola ${event.user.first_name}! Preguntame sobre lugares, horarios y otras cosas del Tec de Monterrey Campus Monterrey :)`);
  });
  bancos(bp);
  comida(bp);
  cajeros(bp);
  aulas(bp);
  edificios(bp);
  bp.botDefaultResponse = event => {
     return bp.messenger.sendText(event.user.id, "Lo lamento, no entendí eso. Intenta preguntarme algo diferente")
   }

}
