module.exports = function(bp) {
    // CETEC
    bp.hear(/cetec/i, (event, next) => {
        bp.messenger.sendText(event.user.id, 'Es el edificio ubicado enfrente de la biblioteca. Es conocido como el servilletero.')
        const cetecPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "CETEC",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.6504462732722,-100.29093712588292&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    subtitle: "Aquí se encuentra el Punto Azul, Innovaction Gym y hay salas de cómputo.",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://goo.gl/maps/yRuQbH4tvMt",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendTemplate(event.user.id, cetecPayload)
    });

    bp.hear(/Centro Estudiantil/i, (event, next) => {
        const CentroEstudiantilPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "Centro Estudiantil",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.64873802726484,-100.2897919714450&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Centro de eventos y oficinas de la DAE",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://goo.gl/maps/8NhXuUoHHYm",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendText("Es el edificio que se encuentra enfrente de Aulas 3.");
        bp.messenger.sendTemplate(event.user.id, CentroEstudiantilPayload);
    });

    bp.hear(/Store/i, (event, next) => {
        bp.messenger.sendText(event.user.id, 'Tienda del artículos del tec. Abierto de 9:00 a 19:00 entre semana, los sábados de 9:00 a 14:00.')
        const tecstoresPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "TecStore",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.652153,-100.289965&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Se encuentra en el sótano de la explanada del CIAP.",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://www.google.com.mx/maps/place/25%C2%B039'07.8%22N+100%C2%B017'23.9%22W/@25.652153,-100.2905122,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d25.652153!4d-100.289965",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendTemplate(event.user.id, tecstoresPayload)
    });

    bp.hear(/Cat/i, (event, next) => {
        bp.messenger.sendText(event.user.id, 'Departamento de prevención. Se encuentra en el primer piso de Centrales.')
        const catPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "CAT- Departamento de prevención",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.651258,-100.289348&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Se encuentra entre Centrales y Rectoría",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://www.google.com.mx/maps/place/25%C2%B039'04.5%22N+100%C2%B017'21.6%22W/@25.6511913,-100.2894661,19.25z/data=!4m5!3m4!1s0x0:0x0!8m2!3d25.651258!4d-100.289348",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendTemplate(event.user.id, catPayload)
    });

    bp.hear(/DAF/i, (event, next) => {
        const EdificioDafPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "Edificio DAF",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.651253842979095,-100.28780311346054&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Se encuentra a un lado del Domo Acuático, al final del Jardín de las Carreras.",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://www.google.com.mx/maps/place/25%C2%B039'04.5%22N+100%C2%B017'21.6%22W/@25.6511913,-100.2894661,19.25z/data=!4m5!3m4!1s0x0:0x0!8m2!3d25.651258!4d-100.289348",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendText("Aquí hay oficinas de maestros.");
        bp.messenger.sendTemplate(event.user.id, EdificioDafPayload);
    });

    bp.hear(/ale/i, (event, next) => {
        bp.messenger.sendText(event.user.id, 'Auditorio del Tec')
        const AuditorioLuisElizondoPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "Auditorio Luis Elizondo.",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.6505922,-100.2857314&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Se encuentra ubicado en Av. Luis Elizondo.",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://goo.gl/maps/HM4EaNxqAyK2",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendTemplate(event.user.id, AuditorioLuisElizondoPayload)
    });

    bp.hear(/Biblioteca/i, (event, next) => {
        bp.messenger.sendText(event.user.id, 'Biblioteca dentro del Tec de Mty, abierta 24 horas')
        const bibliotecaPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "Biblioteca",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.65039549759192,-100.28971552848816&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Se encuentra frente a CETEC.",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://goo.gl/maps/GCHt7AgkLny",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendTemplate(event.user.id, BibliotecaPayload)
    });

    bp.hear(/Rectoria/i, (event, next) => {
        bp.messenger.sendText(event.user.id, 'Es el edificio con el mural. Se encuentra enfrente del Pabellón la Carreta y da vista a AV. Garza Sada')
        const RectoriaPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "Biblioteca",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.65146661511264,-100.29090493937474&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Frente a la rotonda del tec",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://www.google.com.mx/maps/place/25%C2%B039'05.3%22N+100%C2%B017'27.3%22W/@25.6512175,-100.2913367,19z/data=!4m5!3m4!1s0x0:0x0!8m2!3d25.6514666!4d-100.2909049",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendTemplate(event.user.id, RectoriaPayload)

    });

    bp.hear(/CEDES/i, (event, next) => {
        bp.messenger.sendText(event.user.id, 'Es el edificio que se encuentra por residencias dentro del Tec. ')
        const CEDESPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "CEDES",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.6536528,-100.2926095&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Centro de estudios para el desarrollo sustenible ",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://goo.gl/maps/gYdGdUAucXw",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendTemplate(event.user.id, CEDESPayload)
    });

    bp.hear(/LocaTec/i, (event, next) => {
        bp.messenger.sendText(event.user.id, 'Esta ubicado en el primer piso de Aulas 1 - 112. Te puedes comunicar a la ext. 3742 ó ingresar a la página de internet (http://locatec.mty.itesm.mx).');
        const LocaTecPayload = {
            template_type: "generic",
            elements: [
                {
                    "title": "LocaTec",
                    "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.651933261435023,-100.29022365812125&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                    "subtitle": "Si perdiste algo. Búscalo!",
                    buttons: [
                        {
                            type: "web_url",
                            url: "https://goo.gl/maps/P1xMWmo73Ar",
                            title: "Direcciones"
                        }
                    ]
                }
            ]
        }
        bp.messenger.sendTemplate(event.user.id, LocaTecPayload);
    });

    bp.hear(/Punto Azul/i, (event, next) => {
      bp.messenger.sendText(event.user.id, 'Está ubicado en el sótano de CETEC, aquí podrás realizar tus trámites administrativos.');
      const PuntoazulPayload = {
          template_type: "generic",
          elements: [
              {
                  "title": "Punto Azul",
                  "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.6504462732722,-100.29093712588292&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
                  "subtitle": "Se encuentra en el sótano de CETEC",
                  buttons: [
                      {
                          type: "web_url",
                          url: "https://goo.gl/maps/KB1SgFpZB6C2",
                          title: "Direcciones"
                      }
                  ]
                }
              ]
            }
          bp.messenger.sendTemplate(event.user.id, PuntoazulPayload);
      });

    // Broken

    // const cetecPayload = {
    //     template_type: "button",
    //     text: "Otros servicios",
    //     buttons: [
    //         {
    //             type: "postback",
    //             payload: "PUNTO_AZUL",
    //             title: "Punto Azul"
    //         }, {
    //             type: "postback",
    //             payload: "AREAS_DE_COMPUTO",
    //             title: "Áreas de computo"
    //         }, {
    //             type: "postback",
    //             payload: "INNOVACTION_GYM",
    //             title: "Innovation Gym"
    //         }
    //     ]
    // }

    //
    //
    //                         bp.hear(/Áreas de computo/i, (event, next) => {
    //                             const aEPayload = {
    //                                 template_type: "generic",
    //                                 elements: [
    //                                     {
    //                                         "title": "Punto Azul",
    //                                         "image_url": "https://maps.googleapis.com/maps/api/staticmap?center=25.6504462732722,-100.29093712588292&zoom=19&scale=false&size=600x300&maptype=roadmap&key=AIzaSyBOYAfqdxetXof7_OcKXUs-mwr6q9IX2Ck&format=png&visual_refresh=true",
    //                                         "subtitle": "Se encuentra en el sótano de CETEC",
    //                                         buttons: [
    //                                             {
    //                                                 type: "web_url",
    //                                                 url: "https://goo.gl/maps/KB1SgFpZB6C2",
    //                                                 title: "Direcciones"

};
