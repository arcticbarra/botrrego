const comida = require('./bot/comida');
const bancos = require('./bot/bancos');
const cajeros = require('./bot/cajeros');

module.exports = function(bp) {

  bp.middlewares.load();
  bancos(bp);
  comida(bp);
  cajeros(bp);
  bp.botDefaultResponse = event => {
     return bp.messenger.sendText(event.user.id, "Lo lamento, no entendí eso. Intenta preguntarme algo diferente")
   }

}
