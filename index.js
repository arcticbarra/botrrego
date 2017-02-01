module.exports = function(bp) {
  bp.middlewares.load();
  bp.hear(/hola/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name

    bp.messenger.sendText(event.user.id, 'Hola, ' + first_name, { typing: true })
  });
}
