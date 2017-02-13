const santander = [
  {
    "title":"Santander",
    "image_url":"https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid|color:0xff0000|label:|25.648857,-100.290270|25.6514569435194,-100.28904765844345|25.649507,-100.2904",
    "subtitle":"El banco se encuentra entre Foodbox y el Centro Estudiantil",
    buttons: [
      {
          type: "web_url",
          url: "https://goo.gl/maps/uo5VUqKSbu92",
          title: "Santander"
      },
      {
          type: "web_url",
          url: "https://goo.gl/maps/2aM8dBceHcP2",
          title: "Cajero Centrales"
      },
      {
          type: "web_url",
          url: "https://goo.gl/maps/mQ92dv6uhAk",
          title: "Cajero Jubileo"
      }
    ]
  }
];

const bancomer = [
  {
    "title":"Bancomer",
    "image_url":"https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid|color:0xff0000|label:|25.652170,-100.289990|25.6514569435194,-100.28904765844345|25.64945,-100.2903",
    "subtitle":"El banco se encuentra entre Foodbox y el Centro Estudiantil",
    buttons: [
      {
          type: "web_url",
          url: "https://goo.gl/maps/GL9VGtdkAa72",
          title: "Bancomer"
      },
      {
          type: "web_url",
          url: "https://goo.gl/maps/4FdXLyve2B52",
          title: "Cajero CIAP"
      },
      {
          type: "web_url",
          url: "https://goo.gl/maps/2aM8dBceHcP2",
          title: "Cajero Centrales"
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

  bp.hear(/santander/i, (event, next) => {
    bp.messenger.sendText(event.user.id, 'Hay 3 cajeros. El banco está abierto de 8:30 a 16:00. Cuenta con un cajero automático que está abierto de lunes a domingo hasta las 23:30 horas. ');
    bancoPayload.elements = santander;
    bp.messenger.sendTemplate(event.user.id, bancoPayload);
  });

  bp.hear(/bancomer/i, (event, next) => {
    bp.messenger.sendText(event.user.id, 'Hay 3 cajeros. El banco está abierto de 8:30 a 16:00. Cuenta con un cajero automático que está abierto de lunes a domingo hasta las 23:30 horas. ');
    bancoPayload.elements = bancomer;
    bp.messenger.sendTemplate(event.user.id, bancoPayload);
  });

  bp.hear(/banco/i, (event, next) => {
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
