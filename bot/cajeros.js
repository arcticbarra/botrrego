module.exports = function(bp) {

  bp.hear(/cajero/i, (event, next) => {
    const cajeroPayload = {
      template_type: "button",
          text: "Qué cajero estás buscando?",
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
            },
            {
              type: "postback",
              title: "Más cajeros",
              payload: "MORE_PAYLOAD"
            }
          ]
    }
    bp.messenger.sendTemplate(event.user.id, cajeroPayload);
  });

  bp.hear(/MORE_PAYLOAD/i, (event, next) => {
    const cajeroPayload = {
      template_type: "button",
          text: "O quizás alguno de estos?",
          buttons: [
            {
              type: "postback",
              title: "Banorte",
              payload: "BANORTE"
            },
            {
              type: "postback",
              title: "Afirme",
              payload: "AFIRME"
            },
            {
              type: "postback",
              title: "Banamex",
              payload: "BANAMEX"
            }
          ]
    }
    bp.messenger.sendTemplate(event.user.id, cajeroPayload);
  });

  bp.hear(/BANORTE/i, (event, next) => {
    const banortePayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Banorte",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.648863,-100.290277&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
          "subtitle":"Se encuentra en el sótano de Centro Estudiantil.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/mQ92dv6uhAk",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Abierto las 24 horas.")
    bp.messenger.sendTemplate(event.user.id, banortePayload);
  });

  bp.hear(/afirme/i, (event, next) => {
    const afirmePayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Afirme",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid|color:0xff0000|label:|25.648857,-100.290270|25.652170,-100.289990",
          "subtitle":"Se encuentran en el sótano de Centro Estudiantil y por el Starbucks.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/mQ92dv6uhAk",
                title: "Centro Estudiantil"
            },
            {
                type: "web_url",
                url: "https://goo.gl/maps/4FdXLyve2B52",
                title: "Starbucks"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Hay dos cajeros. Abiertos las 24 horas.")
    bp.messenger.sendTemplate(event.user.id, afirmePayload);
  });

  bp.hear(/banamex/i, (event, next) => {
    const banamexPayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Banamex",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid|color:0xff0000|label:|25.6514569435194,-100.28904765844345|25.648857,-100.290270",
          "subtitle":"Se encuentran en el sótano de Centro Estudiantil y en Centrales",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/mQ92dv6uhAk",
                title: "Centro Estudiantil"
            },
            {
                type: "web_url",
                url: "https://goo.gl/maps/2aM8dBceHcP2",
                title: "Centrales"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Hay dos cajeros. Abiertos las 24 horas.")
    bp.messenger.sendTemplate(event.user.id, banamexPayload);
  });

};
