onEvent('recipes', e => {
  e.shaped('pneumaticcraft:compressed_iron_gear', [' C ', 'CIC', ' C '], {
    C: '#forge:ingots/compressed_iron',
    I: 'create:andesite_alloy'
  })
  e.shaped('pneumaticcraft:air_compressor', ['III', 'ITI', 'IFI'], {
    I: '#pneumaticcraft:reinforced_stone_bricks',
    T: 'pneumaticcraft:pressure_tube',
    F: 'routerreborn:furnace'
  })
  e.shaped('pneumaticcraft:gps_tool', ['SRS', 'PGP', 'PDP'], {
    R: 'extendedcrafting:redstone_ingot',
    P: '#forge:paper',
    G: 'immersiveengineering:insulating_glass',
    D: '#forge:gears/diamond',
    S: 'immersiveengineering:wirecoil_redstone'
  })
  e.shaped('pneumaticcraft:heat_sink', ['BBB', 'IGI'], {
    B: 'immersiveengineering:toolupgrade_railgun_capacitors',
    I: '#forge:ingots/compressed_iron',
    G: '#forge:gears/electrum'
  })
  e.shaped('pneumaticcraft:pressure_gauge', [' G ', 'GIG', ' G '], {
    I: '#forge:plates/gold',
    G: '#forge:ingots/compressed_iron'
  })
  e.shaped('8x pneumaticcraft:pressure_tube', ['IGI'], {
    I: 'pneumaticcraft:compressed_iron_gear',
    G: '#forge:glass'
  })
  e.shaped('pneumaticcraft:refinery', ['SXS', 'XTX', 'SAS'], {
    S: '#forge:ingots/compressed_iron',
    T: '#forge:tanks/ender',
    A: 'thermal:upgrade_augment_2',
    X: 'extendedcrafting:redstone_component'
  })
  e.shaped('pneumaticcraft:refinery_output', ['SSS', 'GDG', 'SSS'], {
    S: 'pneumaticcraft:reinforced_stone_slab',
    G: 'immersiveengineering:insulating_glass',
    D: '#forge:gears/diamond'
  })
  e.shaped('pneumaticcraft:small_tank', ['BIB', 'IGI', 'BIB'], {
    B: '#forge:ingots/obsidian',
    I: '#forge:ingots/compressed_iron',
    G: 'cyclic:tank'
  })
  e.shaped('pneumaticcraft:vortex_tube', ['ITI', 'GSG', 'ITI'], {
    I: '#forge:ingots/compressed_iron',
    T: 'pneumaticcraft:pressure_tube',
    G: '#forge:plates/gold',
    S: 'pneumaticcraft:compressed_iron_gear'
  })

  removeRecipeByID(e, [
    'pneumaticcraft:reinforced_stone',
    'pneumaticcraft:compressed_iron_helmet',
    'pneumaticcraft:compressed_iron_chestplate',
    'pneumaticcraft:compressed_iron_leggings',
    'pneumaticcraft:compressed_iron_boots',
    'pneumaticcraft:pressure_chamber/capacitor',
    'pneumaticcraft:pressure_chamber/empty_pcb',
    'pneumaticcraft:pressure_chamber/transistor',
    'pneumaticcraft:pressure_chamber/compressed_iron_ingot',
    'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
    'pneumaticcraft:empty_pcb_from_failed_pcb',
    'pneumaticcraft:compressed_iron_gear',
    'pneumaticcraft:air_compressor',
    'pneumaticcraft:gps_tool',
    'pneumaticcraft:heat_sink',
    'pneumaticcraft:pressure_gauge',
    'pneumaticcraft:pressure_tube',
    'pneumaticcraft:refinery',
    'pneumaticcraft:refinery_output',
    'pneumaticcraft:vortex_tube',
    'pneumaticcraft:small_tank'
  ])
})
