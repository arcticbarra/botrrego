module.exports = function(bp) {
  let lat =  0;
  let long = 0;
  let bancoPayload = {
    template_type: "generic",
    elements: [
      {
        "title":"Santander",
        "image_url":"https://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lon+"&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
        "subtitle":"Cómo llegar",
        buttons: [
          {
              type: "web_url",
              url: "https://goo.gl/maps/GL9VGtdkAa72",
              title: "Direcciones"
          }
        ]
      }
    ]
  }

  bp.middlewares.load();

// Bancos
  bp.hear(/santander/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, 'El banco Santander se encuentra dentro del tec entre el restaurante Foodbox y el Centro estudiantil. Cuenta con un cajero automático que está abierto de lunes a domingo hasta las 23:30 horas. El banco está abierto de 8:30 a 16:00');
    lat =  25.649508131221285;
    long = -100.29040217399597;
    bancoPayload.elements[0].title = "Santander";
    bancoPayload.elements[0].image_url = ;
    bancoPayload.elements[0].buttons.url = "https://goo.gl/maps/uo5VUqKSbu92";
    bp.messenger.sendTemplate(event.user.id, bancoPayload);
  });

  bp.hear(/bancomer/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, 'El banco Bancomer se encuentra dentro del tec entre el restaurante Foodbox y el Centro estudiantil. Cuenta con un cajero automático que está abierto de lunes a domingo hasta las 23:30 horas. El banco está abierto de 8:30 a 16:00');
    bancoPayload.elements[0].title = "Bancomer";
    bancoPayload.elements[0].image_url = "https://maps.googleapis.com/maps/api/staticmap?center=bancomer+itesm+mty&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true";
    bancoPayload.elements[0].buttons.url = "https://goo.gl/maps/GL9VGtdkAa72";
    bp.messenger.sendTemplate(event.user.id, bancoPayload);
  });

  bp.hear(/banco/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, 'Los bancos Santander y Bancomer se encuentran dentro del tec entre el restaurante Foodbox y el Centro estudiantil. Cuentan con un cajero automático que está abierto de lunes a domingo hasta las 23:30 horas. Los bancos están abiertos de 8:30 a 16:00');
  });

  bp.botDefaultResponse = event => {
     return bp.messenger.sendText(event.user.id, "Lo lamento, no entendí eso. Intenta preguntarme algo diferente")
   }

}
