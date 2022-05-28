onEvent('recipes', e => {
  e.shaped('2x modularrouters:blank_module', ['SRS', 'PPP', 'GGG'], {
    R: 'extendedcrafting:redstone_ingot',
    P: '#forge:paper',
    G: '#forge:plates/gold',
    S: 'create:andesite_alloy',
  })
  e.shaped('2x modularrouters:blank_upgrade', ['PPG', 'PLG', 'SPG'], {
    P: '#forge:paper',
    L: '#forge:gears/lapis',
    G: '#forge:plates/gold',
    S: 'create:andesite_alloy',
  })
  e.shaped('4x modularrouters:item_router', ['IBI', 'BMB', 'IBI'], {
    I: '#forge:plates/steel',
    M: 'modularrouters:blank_module',
    B: '#forge:sheetmetals/steel'
  })

  removeRecipeByID(e, [
    'modularrouters:breaker_module',
    'modularrouters:extruder_module_1',
    'modularrouters:fluid_module_2',
    'modularrouters:blank_module',
    'modularrouters:blank_upgrade',
    'modularrouters:item_router'
  ])
})
