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

module.exports = function (bp) {
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
                  title: "Direcciones"
              }
            ]
          }
        ]
      }
      bp.messenger.sendTemplate(event.user.id, centralesPayload)
    });

    bp.hear(/foodbox/i, (event,next) => {
      bp.messenger.sendText(event.user.id, 'Hamburguesas, alitas y más. Abierto de 9:00 a 18:00 entre semana, los sábados de 8:00 a 16:00.')
      const centralesPayload = {
        template_type: "generic",
        elements: [
          {
            "title":"Foodbox",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.649628,-100.290382&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
            "subtitle":"Foodbox se encuentra entre aulas 3 y Centro Estudiantil",
            buttons: [
              {
                  type: "web_url",
                  url: "https://goo.gl/maps/KrXCFwqPEqP2",
                  title: "Direcciones"
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
                  title: "Direcciones"
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

};
