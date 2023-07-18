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

  removeRecipeByID(e, [
    'xnet:controller',
    'xnet:router',
    'xnet:wireless_router',
    'xnet:netcable_red_dye',
    'xnet:netcable_red',
    'xnet:netcable_green_dye',
    'xnet:netcable_green',
    'xnet:netcable_blue_dye',
    'xnet:netcable_blue',
    'xnet:netcable_yellow',
    'xnet:netcable_yellow_dye',
    'xnet:connector_red_dye',
    'xnet:connector_red',
    'xnet:connector_green_dye',
    'xnet:connector_green',
    'xnet:connector_blue_dye',
    'xnet:connector_blue',
    'xnet:connector_yellow_dye',
    'xnet:connector_yellow',
    'xnet:advanced_connector_red_dye',
    'xnet:advanced_connector_red',
    'xnet:advanced_connector_green_dye',
    'xnet:advanced_connector_green',
    'xnet:advanced_connector_blue_dye',
    'xnet:advanced_connector_blue',
    'xnet:advanced_connector_yellow_dye',
    'xnet:advanced_connector_yellow',
    'xnet:advanced_connector_routing',
    'xnet:connector_routing'
  ])
})
