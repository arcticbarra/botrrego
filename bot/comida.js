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
            payload: "GORDITA",
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

    bp.hear(/tacos/i, (event, next) => {
      const tacosPayload = {
        template_type: "generic",
        elements: [
          {
          "title":"Tacos El Borrego",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid|color:0xff0000|label:|25.6526799,-100.290017|25.650728,-100.288149",
          "subtitle":"El banco se encuentra entre Foodbox y el Centro Estudiantil",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/PNZdpxzdQN52",
                title: "Jardin De Carreras"
            },
            {
                type: "web_url",
                url: "https://goo.gl/maps/PyuZ6TjrqP32",
                title: "CIAP"
            }
          ]
        }]
      };
      bp.messenger.sendText(event.user.id, "Tacos y Chilaquiles. Abierto de 8:00 a 16:00")
      bp.messenger.sendTemplate(event.user.id, tacosPayload);
    });

    bp.hear(/subway/i, (event, next) => {
      const subwayPayload = {
        template_type: "generic",
        elements: [
          {
            "title":"Subway",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.65151739004201,-100.28898060321808&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
            "subtitle":"Se encuentra dentro de Centrales",
            buttons: [
              {
                  type: "web_url",
                  url: "https://goo.gl/maps/MiJTnAhpNwL2",
                  title: "Direcciones"
              }
            ]
          }
        ]
      }
      bp.messenger.sendText(event.user.id, "Abierto de 9:00 - 22:30 todos los días.");
      bp.messenger.sendTemplate(event.user.id, subwayPayload);
    });

    bp.hear(/CupTime/i, (event, next) => {
      const cuptimePayload = {
        template_type: "generic",
        elements: [
          {
            "title":"CupTime",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.648857,-100.290270&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
            "subtitle":"En el sótano del Centro Estudiantil",
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
      bp.messenger.sendText(event.user.id, "Abierto de 6:00 - 22:00 los lunes, miércoles y viernes, de 6:00 - 23:00 martes y viernes y de 7:00 - 15:00 los sábados.");
      bp.messenger.sendTemplate(event.user.id, cuptimePayload);
    })

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
      bp.messenger.sendText(event.user.id, "Abierto de 7:00 a 20:00 de lunes a viernes. Los sábados de 7:00 a 12:00");
      bp.messenger.sendTemplate(event.user.id, starbucksPayload);
    });

    bp.hear(/comedor/i, (event, next) => {
      bp.messenger.sendText(event.user.id, 'Abierto de 07:00 a 16:30 hrs de lunes a viernes, comida de cafetería.')
      const cedesComedorPayload = {
        template_type: "generic",
        elements: [
          {
            "title":"Comedor Estudiantil",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.652733567570262,-100.29206648468971&zoom=17&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C25.652733567570262,-100.29206648468971",
            subtitle:"Se encuentra cerca de CEDES, pasando el puente subterráneo que se encuentra a un lado de rectoría.",
            buttons: [
              {
                  type: "web_url",
                  url: "https://goo.gl/maps/YfeuZqpH1ET2",
                  title: "Direcciones"
              }
            ]
          }
        ]
      }
      bp.messenger.sendTemplate(event.user.id, cedesComedorPayload);
    });

    bp.hear(/food/i, (event,next) => {
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

    bp.hear(/el camino/i, (event,next) => {
      bp.messenger.sendText(event.user.id, 'Hamburguesas. Abierto Martes y Jueves de 12:00 a 14:30 hrs.')
      const centralesPayload = {
        template_type: "generic",
        elements: [
          {
            "title":"El Camino Foodtruck",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.652651361130005,-100.28976514935493&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C25.652651361130005,-100.28976514935493",
            "subtitle":"Se encuentra a un lado del Centro de Biotecnología",
            buttons: [
              {
                  type: "web_url",
                  url: "https://goo.gl/maps/UDq9p2YkE522",
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
      bp.messenger.sendText(event.user.id, "Abierto de 7:00 a 21:00 de lunes a viernes.");
      bp.messenger.sendTemplate(event.user.id, oxxoPayload);
    });

    bp.hear(/gordita/i, (event, next) => {
      const gorditaPayload = {
        template_type: "generic",
        elements: [
          {
            "title":"Gorditas Doña Tota",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.651465406034394,-100.28895914554596&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
            "subtitle":"Se encuentra dentro de Centrales",
            buttons: [
              {
                  type: "web_url",
                  url: "https://goo.gl/maps/f5wXapyJcys",
                  title: "Direcciones"
              }
            ]
          }
        ]
      }
      bp.messenger.sendText(event.user.id, "Abierto de 7:00 a 19:00 de lunes a viernes.");
      bp.messenger.sendTemplate(event.user.id, gorditaPayload);
    });

    bp.hear(/wok/i, (event, next) => {
      const wokPayload = {
        template_type: "generic",
        elements: [
          {
            "title":"Fusion Wok",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.651514,-100.288867&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
            "subtitle":"Se encuentra dentro de Centrales",
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
      bp.messenger.sendText(event.user.id, "Wok. Abierto de 7:00 a 19:00 de lunes a viernes.");
      bp.messenger.sendTemplate(event.user.id, wokPayload);
    });

    bp.hear(/comer/i, (event, next) => {
      bp.messenger.sendTemplate(event.user.id, comerPayload);
    });

    bp.hear(/salad/i, (event, next) => {
      const superSaladspayload = {
        template_type: "generic",
        elements: [
          {
            "title":"Super Salads",
            "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.652281431447857,-100.28944730758667&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
            "subtitle":"Se encuentra bajando las escaleras que están a un lado de Aulas 1.",
            buttons: [
              {
                  type: "web_url",
                  url: "https://goo.gl/maps/915Jnki1mhx",
                  title: "Direcciones"
              }
            ]
          }
        ]
      }
      bp.messenger.sendText(event.user.id, "Abierto de 11:00 a 17:00 hrs de lunes a viernes");
      bp.messenger.sendTemplate(event.user.id, superSaladspayload);
    });

    bp.hear(/AUN_MAS_OPCIONES_COMIDA/i, (event, next) => {
      bp.messenger.sendTemplate(event.user.id, aunMasOpcionesPayload);
    });

    bp.hear(/MAS_OPCIONES_COMIDA/i, (event, next) => {
      bp.messenger.sendTemplate(event.user.id, masOpcionesPayload);
    });

    bp.hear(/cafeteria/i, (event, next) => {
      const cafeteriaPayload = {
        template_type: "button",
            text: "Tenemos estas opciones de cafetería",
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
                  payload: "COMEDOR",
                  title: "Comedor Estudiantil"
              }
        ]
      }
      bp.messenger.sendTemplate(event.user.id, cafeteriaPayload);
    });

    bp.hear(/hamburguesa/i, (event, next) => {
      const hamburguesasPayload = {
        template_type: "button",
            text: "Tenemos estas opciones de hamburguesas",
            buttons: [
              {
                  type: "postback",
                  payload: "foodbox",
                  title: "Foodbox"
              },
              {
                  type: "postback",
                  payload: "EL CAMINO",
                  title: "El Camino Foodtruck"
              }
        ]
      }
      bp.messenger.sendTemplate(event.user.id, hamburguesasPayload);
    });

    bp.hear(/sandwich/i, (event, next) => {
      const sandwichPayload = {
        template_type: "button",
            text: "Tenemos estas opciones de sandwiches",
            buttons: [
              {
                  type: "postback",
                  payload: "SUBWAY",
                  title: "Subway"
              },
              {
                  type: "postback",
                  payload: "STARBUCKS",
                  title: "Starbucks"
              },
              {
                  type: "postback",
                  payload: "CUPTIME",
                  title: "CupTime"
              }
        ]
      }
      bp.messenger.sendTemplate(event.user.id, sandwichPayload);
    });

};
