const comida = require('./bot/comida');
const bancos = require('./bot/bancos');

module.exports = function(bp) {

  bp.middlewares.load();
  bancos(bp)
  comida(bp);
  bp.botDefaultResponse = event => {
     return bp.messenger.sendText(event.user.id, "Lo lamento, no entendí eso. Intenta preguntarme algo diferente")
   }

}
