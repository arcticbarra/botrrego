const santander = [
  {
    "title":"Santander",
    "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.649508131221285,-100.29040217399597&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
    "subtitle":"Se encuentra entre Foodbox y el Centro Estudiantil",
    buttons: [
      {
          type: "web_url",
          url: "https://goo.gl/maps/uo5VUqKSbu92",
          title: "Direcciones"
      }
    ]
  }
];

const bancomer = [
  {
    "title":"Bancomer",
    "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.6494491,-100.2903053&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
    "subtitle":"Se encuentra entre Foodbox y el Centro Estudiantil",
    buttons: [
      {
          type: "web_url",
          url: "https://goo.gl/maps/GL9VGtdkAa72",
          title: "Direcciones"
      }
    ]
  }
]

let bancoPayload = {
  template_type: "generic",
  elements: [
    {
      "title":"Bancos",
      "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.649508131221285,-100.29040217399597&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
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

module.exports = function(bp){
  bp.hear(/santander/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, 'El banco está abierto de 8:30 a 16:00. Cuenta con un cajero automático que está abierto de lunes a domingo hasta las 23:30 horas. ');
    bancoPayload.elements = santander;
    bp.messenger.sendTemplate(event.user.id, bancoPayload);
  });

  bp.hear(/bancomer/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, 'El banco está abierto de 8:30 a 16:00. Cuenta con un cajero automático que está abierto de lunes a domingo hasta las 23:30 horas. ');
    bancoPayload.elements = bancomer;
    bp.messenger.sendTemplate(event.user.id, bancoPayload);
  });

  bp.hear(/banco/i, (event, next) => { // We use a regex instead of a hardcoded string
    const bancoPayload = {
      template_type: "button",
          text: "Qué banco estás buscando?",
          buttons: [
            {
                type: "postback",
                title: "Santander",
                payload: "SANTANDER"
            },
            {
              type: "postback",
              title: "Bancomer",
              payload: "BANCOMER"
            }
          ]
    }
    bp.messenger.sendTemplate(event.user.id, bancoPayload);
  });
};
