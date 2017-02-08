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

const bancos = [
  {
    "title":"Bancos",
    "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.649508131221285,-100.29040217399597&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
    "subtitle":"Se encuentran entre Foodbox y el Centro Estudiantil",
    buttons: [
      {
          type: "web_url",
          url: "https://goo.gl/maps/uo5VUqKSbu92",
          title: "Santander"
      },
      {
        type: "web_url",
        url: "https://goo.gl/maps/GL9VGtdkAa72",
        title: "Bancomer"
      }
    ]
  }
]

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

const comerPayload = {
  template_type: "button",
      text: "Dónde te gustaría comer?",
      buttons: [
        {
            type: "postback",
            payload: "CENTRALES",
            title: "Centrales"
        },
        {
            type: "postback",
            payload: "JUBILEO",
            title: "Jubileo"
        },
        {
            type: "postback",
            payload: "FOODBOX",
            title: "Foodbox"
        }
  ]
}

module.exports = function(bp) {

  bp.middlewares.load();

// Bancos
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
    bp.messenger.sendText(event.user.id, 'Los bancos están abiertos de 8:30 a 16:00. Cuentan con un cajero automático que está abierto de lunes a domingo hasta las 23:30 horas.');
    bancoPayload.elements = bancos;
    bp.messenger.sendTemplate(event.user.id, bancoPayload);
  });

// Comida
  bp.hear(/centrales/i, (event,next) => {
    bp.messenger.sendText(event.user.id, 'Abierto las 24 horas, comida de cafetería.')
    const centralesPayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Centrales",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.6514569435194,-100.28904765844345&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
          "subtitle":"Centrales se encuentra entre aulas 1 y 2, frente al domo acuático.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/KrXCFwqPEqP2",
                title: "Cómo llegar"
            }
          ]
        }
      ]
    }
    bp.messenger.sendTemplate(event.user.id, centralesPayload)
  });

  bp.hear(/jubileo/i, (event,next) => {
    bp.messenger.sendText(event.user.id, 'Abierto de 07:00 - 16:30 hrs de lunes a viernes, comida de cafetería.')
    const jubileoPayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Jubileo",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.648863,-100.290277&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
          "subtitle":"Jubileo está en el sótano de Centro Estudiantil.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/mQ92dv6uhAk",
                title: "Cómo llegar"
            }
          ]
        }
      ]
    }
    bp.messenger.sendTemplate(event.user.id, jubileoPayload)
  });

  bp.hear(/comer/i, (event, next) => {
    bp.messenger.sendTemplate(event.user.id, comerPayload);
  });

  bp.botDefaultResponse = event => {
     return bp.messenger.sendText(event.user.id, "Lo lamento, no entendí eso. Intenta preguntarme algo diferente")
   }

}
