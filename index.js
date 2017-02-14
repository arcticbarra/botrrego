const comida = require('./bot/comida');
const bancos = require('./bot/bancos');
const cajeros = require('./bot/cajeros');

module.exports = function(bp) {

  bp.middlewares.load();
  bp.hear(/GET_STARTED/i, (event,next) => {
    bp.messenger.sendText(event.user.id, `Hola ${event.user.first_name}!, Preguntame sobre lugares, horarios y otras cosas del Tec de Monterrey Campus Monterrey y haré mi mejor esfuerzo por responderte :)`)
  })
  bancos(bp);
  comida(bp);
  cajeros(bp);
  bp.botDefaultResponse = event => {
     return bp.messenger.sendText(event.user.id, "Lo lamento, no entendí eso. Intenta preguntarme algo diferente")
   }

}
