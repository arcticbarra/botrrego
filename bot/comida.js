const comerPayload = {
  template_type: "button",
      text: "Qué se te antoja?",
      buttons: [
        {
            type: "postback",
            payload: "CAFETERIA",
            title: "Cafetería"
        },
        {
            type: "postback",
            payload: "HAMBURGUESA",
            title: "Hamburguesas"
        },
        {
            type: "postback",
            payload: "MAS_OPCIONES_COMIDA",
            title: "Más opciones"
        }
  ]
}

const masOpcionesPayload = {
  template_type: "button",
      text: "Qué tal estas opciones?",
      buttons: [
        {
            type: "postback",
            payload: "ENSALADA",
            title: "Ensalada"
        },
        {
            type: "postback",
            payload: "SANDWICH",
            title: "Sándwiches"
        },
        {
            type: "postback",
            payload: "AUN_MAS_OPCIONES_COMIDA",
            title: "Más opciones"
        }
  ]
}

const aunMasOpcionesPayload = {
  template_type: "button",
      text: "Quizás alguna de éstas?",
      buttons: [
        {
            type: "postback",
            payload: "WOK",
            title: "Wok"
        },
        {
            type: "postback",
            payload: "GORDITAS",
            title: "Gorditas"
        },
        {
            type: "postback",
            payload: "TACO",
            title: "Tacos"
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
            subtitle:"Centrales se encuentra entre aulas 1 y 2, frente al domo acuático.",
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

    bp.hear(/starbucks/i, (event, next) => {
      const starbucksPayload = {
        template_type: "generic",
        elements: [
          {
            "title":"Starbucks",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.652150867756774,-100.29005348682404&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
            "subtitle":"Se encuentra bajando las escaleras que están a un lado de Aulas 1.",
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
      bp.messenger.sendText("Abierto de 7:00 a 20:00 de lunes a viernes. Los sábados de 7:00 a 12:00");
      bp.messenger.sendTemplate(event.user.id, starbucksPayload);
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

    bp.hear(/oxxo/i, (event, next) => {
      const oxxoPayload = {
        template_type: "generic",
        elements: [
          {
            "title":"OXXO",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.648863,-100.290277&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
            "subtitle":"El OXXO está en el sótano de Centro Estudiantil.",
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
      bp.messenger.sendText("Abierto de 7:00 a 21:00 de lunes a viernes.");
      bp.messenger.sendTemplate(event.user.id, oxxoPayload);
    });

    bp.hear(/comer/i, (event, next) => {
      bp.messenger.sendTemplate(event.user.id, comerPayload);
    });

    bp.hear(/AUN_MAS_OPCIONES_COMIDA/i, (event, next) => {
      bp.messenger.sendTemplate(event.user.id, aunMasOpcionesPayload);
    });

    bp.hear(/MAS_OPCIONES_COMIDA/i, (event, next) => {
      bp.messenger.sendTemplate(event.user.id, masOpcionesPayload);
    });

    bp.hear(/cafeteria/i, (event, next) => {
      const cafeteriaPayload = {
            template_type: "list",
            top_element_style: "compact",
            elements: [
                {
                    title: "Centrales",
                    image_url: "https://maps.googleapis.com/maps/api/staticmap?center=25.6514569435194,-100.28904765844345&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    subtitle: "Centrales se encuentra entre aulas 1 y 2, frente al domo acuático.",
                    default_action: {
                        type: "web_url",
                        url: "",
                        messenger_extensions: true,
                        webview_height_ratio: "tall",
                        fallback_url: "https://goo.gl/maps/KrXCFwqPEqP2"
                    },
                    buttons: [
                        {
                            title: "Direcciones",
                            type: "web_url",
                            url: "https://goo.gl/maps/KrXCFwqPEqP2",
                            messenger_extensions: true,
                            webview_height_ratio: "tall",
                            fallback_url: "https://goo.gl/maps/KrXCFwqPEqP2"
                        }
                    ]
              },
              {
                  title: "Centrales",
                  image_url: "https://maps.googleapis.com/maps/api/staticmap?center=25.6514569435194,-100.28904765844345&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                  subtitle: "Centrales se encuentra entre aulas 1 y 2, frente al domo acuático.",
                  default_action: {
                      type: "web_url",
                      url: "",
                      messenger_extensions: true,
                      webview_height_ratio: "tall",
                      fallback_url: "https://goo.gl/maps/KrXCFwqPEqP2"
                  },
                  buttons: [
                      {
                          title: "Direcciones",
                          type: "web_url",
                          url: "https://goo.gl/maps/KrXCFwqPEqP2",
                          messenger_extensions: true,
                          webview_height_ratio: "tall",
                          fallback_url: "https://goo.gl/maps/KrXCFwqPEqP2"
                      }
                  ]
            },
            {
                title: "Centrales",
                image_url: "https://maps.googleapis.com/maps/api/staticmap?center=25.6514569435194,-100.28904765844345&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                subtitle: "Centrales se encuentra entre aulas 1 y 2, frente al domo acuático.",
                default_action: {
                    type: "web_url",
                    url: "",
                    messenger_extensions: true,
                    webview_height_ratio: "tall",
                    fallback_url: "https://goo.gl/maps/KrXCFwqPEqP2"
                },
                buttons: [
                    {
                        title: "Direcciones",
                        type: "web_url",
                        url: "https://goo.gl/maps/KrXCFwqPEqP2",
                        messenger_extensions: true,
                        webview_height_ratio: "tall",
                        fallback_url: "https://goo.gl/maps/KrXCFwqPEqP2"
                    }
                ]
          }
            ]
          }
          bp.messenger.sendTemplate(event.user.id, cafeteriaPayload);
    });
};
