module.exports = function(bp) {

  bp.hear(/atli/i, (event, next) => {
    const atliPayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Escuela de Arte",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.6520036,-100.2886707&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C25.6520036,-100.2886707",
          "subtitle":"Se encuentra atras de Centrales a un lado de Aulas 6.",
          buttons: [
            {
                type: "web_url",
                url: "https://www.google.com.mx/maps/place/ATLI-+Escuela+de+Arte/@25.6520036,-100.2886707,21z/data=!4m13!1m7!3m6!1s0x0:0x0!2zMjXCsDM5JzExLjUiTiAxMDDCsDE3JzIxLjEiVw!3b1!8m2!3d25.653182!4d-100.28919!3m4!1s0x8662bfb8b8037971:0x7f0f3ff685a7ab8f!8m2!3d25.652007!4d-100.2886247",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendTemplate(event.user.id, atliPayload);
  });

  bp.hear(/ciap/i, (event, next) => {
    const ciapPayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Centro Internacional de Aprendizaje Avanzado",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.652885891266244,-100.28982400897803&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C25.652885891266244,-100.28982400897803",
          "subtitle":"Frente a el edificio de biotecnología, por el lago de los patos.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/hKwmtSZtv4p",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendTemplate(event.user.id, ciapPayload);
  });

  bp.hear(/biotec/i, (event, next) => {
    const biotecPayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Centro de Biotecnología",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.652387816572002,-100.28941914439201&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C25.652387816572002,-100.28941914439201",
          "subtitle":"Se encuentra a lado de CIAP y está enfrente del Estacionamiento E1.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/gpUGM4jYsp52",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendTemplate(event.user.id, biotecPayload);
  });

  bp.hear(/arizona/i, (event, next) => {
    const biotecPayload = {
      template_type: "generic",
      elements: [
        {
          "title":"Edificio de Arquitectura",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.653182,-100.289190&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C25.653182,-100.289190",
          "subtitle":"Edificio que se encuentra a un lado del estacionamiento E1. Ubicado en Av. Junco de la Vega.",
          buttons: [
            {
                type: "web_url",
                url: "https://www.google.com.mx/maps/place/25%C2%B039'11.5%22N+100%C2%B017'21.1%22W/@25.653182,-100.2897372,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d25.653182!4d-100.28919",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendTemplate(event.user.id, biotecPayload);
  });

  bp.hear(/\D1/i, (event, next) => {
    const aulas1Payload = {
      template_type: "generic",
      elements: [
        {
          "title":"Aulas 1",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.6519259,-100.2902057&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C25.6519259,-100.2902057",
          "subtitle":"Está ubicada a lado del edificio de Rectoría.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/hZbDTDRzvnk",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Para entender dónde está tu salón recuerda que el segundo dígito es el piso y los siguentes dos son el número del salón");
    bp.messenger.sendTemplate(event.user.id, aulas1Payload);
  });

  bp.hear(/\D2/i, (event, next) => {
    const aulas2Payload = {
      template_type: "generic",
      elements: [
        {
          "title":"Aulas 2",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.65092,-100.2902057&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C25.65092,-100.2902057",
          "subtitle":"Enfrente de aulas 1, cerca de rectoría.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/gov4YryvLyp",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Para entender dónde está tu salón recuerda que el segundo dígito es el piso y los siguentes dos son el número del salón");
    bp.messenger.sendTemplate(event.user.id, aulas2Payload);
  });

  bp.hear(/\D3/i, (event, next) => {
    const aulas3Payload = {
      template_type: "generic",
      elements: [
        {
          "title":"Aulas 3",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.649943352609153,-100.29021292928519&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C25.649943352609153,-100.29021292928519",
          "subtitle":"Se encuentra a un lado de la biblioteca, enfrente de Food box.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/Nh9mFbKEmNu",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Para entender dónde está tu salón recuerda que el segundo dígito es el piso y los siguentes dos son el número del salón");
    bp.messenger.sendTemplate(event.user.id, aulas3Payload);
  });

  bp.hear(/\D4/i, (event, next) => {
    const aulas4Payload = {
      template_type: "generic",
      elements: [
        {
          "title":"Aulas 4",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.649636279905955,-100.28904631733894&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C25.649636279905955,-100.28904631733894",
          "subtitle":"A un lado de Aulas 3. Enfrente del Centro Estudiantil",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/XcPFR1sM74z",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Para entender dónde está tu salón recuerda que el segundo dígito es el piso y los siguentes dos son el número del salón");
    bp.messenger.sendTemplate(event.user.id, aulas4Payload);
  });

  bp.hear(/\D6/i, (event, next) => {
    const aulas6Payload = {
      template_type: "generic",
      elements: [
        {
          "title":"Aulas 6",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.651524643770223,-100.28792232278647&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C25.651524643770223,-100.28792232278647",
          "subtitle":"Se encuentra a un lado del Domo Acuático.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/XcPFR1sM74z",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Para entender dónde está tu salón recuerda que el segundo dígito es el piso y los siguentes dos son el número del salón");
    bp.messenger.sendTemplate(event.user.id, aulas6Payload);
  });

  bp.hear(/\D7/i, (event, next) => {
    const aulas7Payload = {
      template_type: "generic",
      elements: [
        {
          "title":"Aulas 7",
          "image_url":"https://maps.googleapis.com/maps/api/staticmap?center=25.6495448,-100.2883211&zoom=18&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C25.6495448,-100.2883211",
          "subtitle":"Es el edificio que se encuentra terminando el pasillo de Jardín de las Carreras.",
          buttons: [
            {
                type: "web_url",
                url: "https://goo.gl/maps/hZbDTDRzvnk",
                title: "Direcciones"
            }
          ]
        }
      ]
    }
    bp.messenger.sendText(event.user.id, "Para entender dónde está tu salón recuerda que el segundo dígito es el piso y los siguentes dos son el número del salón");
    bp.messenger.sendTemplate(event.user.id, aulas7Payload);
  });

};
