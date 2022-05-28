onEvent('recipes', e => {
  e.shaped('thermal:rf_coil', ['WPQ', 'PXP', 'QPW'], {
    P: 'extendedcrafting:redstone_component',
    X: '#forge:gears/electrum',
    W: 'immersiveengineering:wirecoil_redstone',
    Q: '#forge:rods/electrum'
  })
  e.shaped('thermal:redstone_servo', ['WRW', 'EIE', 'WRW'], {
    I: '#forge:gears/iron',
    R: '#forge:plates/steel',
    E: 'immersiveengineering:wirecoil_redstone',
    W: 'extendedcrafting:redstone_component'
  })
  e.shaped('thermal:energy_cell_frame', ['IGI', 'GEG', 'IGI'], {
    G: '#thermal:glass/hardened',
    I: '#forge:plates/lead',
    E: '#forge:gears/electrum'
  })
  e.shaped('thermal:fluid_cell_frame', ['IGI', 'GEG', 'IGI'], {
    G: '#thermal:glass/hardened',
    I: '#forge:plates/bronze',
    E: '#forge:gears/bronze'
  })
  e.shaped('thermal:energy_cell', ['RXR', 'ICI', 'RPR'], {
    C: 'thermal:energy_cell_frame',
    I: '#forge:sheetmetals/steel',
    P: 'thermal:rf_coil',
    R: 'thermal:cured_rubber',
    X: 'extendedcrafting:redstone_catalyst'
  })
  e.shaped('thermal:fluid_cell', ['RXR', 'ICI', 'RPR'], {
    C: 'thermal:energy_cell_frame',
    I: '#forge:sheetmetals/steel',
    P: 'thermal:redstone_servo',
    R: 'thermal:cured_rubber',
    X: '#thermal:glass/hardened'
  })
  e.shaped('thermal:press_gear_die', [' P ', 'PXP', ' P '], {
    P: '#forge:plates/invar',
    X: '#forge:plates/bronze'
  })
  e.shaped('thermal:upgrade_augment_1', ['IGI', 'RXR', 'IGI'], {
    G: '#thermal:glass/hardened',
    I: '#forge:plates/invar',
    R: 'extendedcrafting:redstone_catalyst',
    X: '#forge:gears/electrum'
  })
  e.shaped('thermal:upgrade_augment_2', ['IGI', 'RXR', 'IGI'], {
    G: 'create:polished_rose_quartz',
    I: '#forge:plates/electrum',
    R: '#forge:gears/signalum',
    X: 'thermal:upgrade_augment_1'
  })
  e.shaped('thermal:upgrade_augment_3', ['IGI', 'RXR', 'IGI'], {
    G: 'thermal:enderium_glass',
    I: '#forge:plates/electrum',
    R: '#forge:gears/lumium',
    X: 'thermal:upgrade_augment_2'
  })

  removeRecipeByID(e, [
    'thermal:parts/iron_gear',
    'thermal:parts/gold_gear',
    'thermal:parts/diamond_gear',
    'thermal:parts/lapis_gear',
    'thermal:parts/copper_gear',
    'thermal:parts/silver_gear',
    'thermal:parts/lead_gear',
    'thermal:parts/emerald_gear',
    'thermal:parts/quartz_gear',
    'thermal:parts/nickel_gear',
    'thermal:parts/tin_gear',
    'thermal:parts/bronze_gear',
    'thermal:parts/constantan_gear',
    'thermal:parts/electrum_gear',
    'thermal:parts/enderium_gear',
    'thermal:parts/invar_gear',
    'thermal:parts/signalum_gear',
    'thermal:parts/lumium_gear',
    'thermal:storage/copper_ingot_from_block',
    'thermal:storage/copper_ingot_from_ingot',
    'thermal:storage/copper_ingot_from_nuggets',
    'thermal:storage/silver_ingot_from_nuggets',
    'thermal:storage/silver_ingot_from_block',
    'thermal:storage/lead_ingot_from_block',
    'thermal:storage/lead_ingot_from_nuggets',
    'thermal:smelting/lead_ingot_from_ore_blasting',
    'thermal:smelting/lead_ingot_from_dust_blasting',
    'thermal:smelting/lead_ingot_from_dust_smelting',
    'thermal:smelting/lead_ingot_from_ore_smelting',
    'thermal:smelting/copper_ingot_from_ore_blasting',
    'thermal:smelting/copper_ingot_from_dust_blasting',
    'thermal:smelting/copper_ingot_from_dust_smelting',
    'thermal:smelting/copper_ingot_from_ore_smelting',
    'thermal:rf_coil',
    'thermal:dynamo_lapidary',
    'thermal:dynamo_compression',
    'thermal:dynamo_magmatic',
    'thermal:dynamo_stirling',
    'thermal:dynamo_numismatic',
    'thermal:machine_smelter',
    'thermal:machine_bottler',
    'thermal:machine_sawmill',
    'thermal:machine_refinery',
    'thermal:machine_pyrolyzer',
    'thermal:machine_pulverizer',
    'thermal:machine_frame',
    'thermal:machine_furnace',
    'thermal:machine_crafter',
    'thermal:machine_chiller',
    'thermal:machine_centrifuge',
    'thermal:machine_insolator',
    'thermal:machine_brewer',
    'thermal:machine_press',
    'thermal:machine_crucible',
    'thermal:redstone_servo',
    'thermal:energy_cell_frame',
    'thermal:fluid_cell_frame',
    'thermal:energy_cell',
    'thermal:fluid_cell',
    'thermal:press_gear_die',
    'thermal:augments/upgrade_augment_1',
    'thermal:augments/upgrade_augment_2',
    'thermal:augments/upgrade_augment_3',
    'thermal:fire_charge/obsidian_glass_2',
    'thermal:fire_charge/signalum_glass_2',
    'thermal:fire_charge/lumium_glass_2',
    'thermal:fire_charge/enderium_glass_2',
    'thermal:smelting/lead_from_dust_from_blasting'
  ])
})
