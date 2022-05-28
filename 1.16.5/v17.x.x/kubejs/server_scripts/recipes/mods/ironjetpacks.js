onEvent('recipes', e => {
  e.shaped('ironjetpacks:basic_coil', [' AB', 'ACA', 'BA '], {
    A: 'kubejs:compressed_iron_plate',
    B: 'extendedcrafting:redstone_component',
    C: 'thermal:rf_coil'
  })
  e.shaped('ironjetpacks:advanced_coil', [' AB', 'ACA', 'BA '], {
    A: '#forge:plates/gold',
    B: 'extendedcrafting:redstone_component',
    C: 'thermal:rf_coil'
  })
  e.shaped('ironjetpacks:elite_coil', [' AB', 'ACA', 'BA '], {
    A: '#forge:plates/diamond',
    B: 'extendedcrafting:redstone_component',
    C: 'thermal:rf_coil'
  })
  e.shaped('ironjetpacks:ultimate_coil', [' AB', 'ACA', 'BA '], {
    A: '#forge:plates/emerald',
    B: 'extendedcrafting:redstone_component',
    C: 'thermal:rf_coil'
  })
  e.shaped('ironjetpacks:strap', ['AAA', 'BCB', 'AAA'], {
    A: '#forge:plates/iron',
    B: 'minecraft:tripwire_hook',
    C: 'minecraft:leather_chestplate'
  })

  removeRecipeByID(e, [
    'ironjetpacks:strap',
    'ironjetpacks:basic_coil',
    'ironjetpacks:advanced_coil',
    'ironjetpacks:elite_coil',
    'ironjetpacks:ultimate_coil'
  ])
})
