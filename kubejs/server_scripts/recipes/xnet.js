ServerEvents.recipes(e => {
  let XNetColors = ['blue', 'green', 'red', 'yellow']
  let XNetItems = ['advanced_connector', 'connector', 'netcable']

  XNetColors.forEach(color => {
    XNetItems.forEach(item => {
      e.shaped(`xnet:${item}_${color}`, [' A ', 'ABA', ' A '], {
        A: `#forge:dyes/${color}`,
        B: `xnet:${item}_routing`
      })
    })
  })
})