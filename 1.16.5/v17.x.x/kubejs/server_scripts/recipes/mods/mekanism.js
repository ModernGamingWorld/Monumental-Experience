onEvent('recipes', e => {
  e.shaped('mekanism:basic_chemical_tank', ['BAB', 'A A', 'BAB'], {
    A: 'kubejs:compressed_iron_plate',
    B: 'extendedcrafting:redstone_component'
  })
  e.shaped('mekanism:basic_energy_cube', ['DBD', 'CAC', 'DBD'], {
    A: 'mekanism:steel_casing',
    B: 'mekanism:energy_tablet',
    C: 'kubejs:compressed_iron_plate',
    D: 'extendedcrafting:redstone_component'
  })
  e.shaped('mekanism:advanced_energy_cube', ['DBD', 'CAC', 'DBD'], {
    A: 'mekanism:basic_energy_cube',
    B: 'mekanism:energy_tablet',
    C: '#forge:plates/osmium',
    D: '#mekanism:alloys/infused'
  })
  e.shaped('mekanism:elite_energy_cube', ['DBD', 'CAC', 'DBD'], {
    A: 'mekanism:advanced_energy_cube',
    B: 'mekanism:energy_tablet',
    C: '#forge:plates/electrum',
    D: '#mekanism:alloys/reinforced'
  })
  e.shaped('mekanism:ultimate_energy_cube', ['AEA', 'IPI', 'AEA'], {
    P: 'mekanism:elite_energy_cube',
    E: 'mekanism:energy_tablet',
    I: '#forge:plates/diamond',
    A: '#mekanism:alloys/atomic'
  })
  e.shaped('mekanism:basic_fluid_tank', ['BAB', 'ACA', 'BAB'], {
    A: 'extendedcrafting:redstone_ingot',
    B: '#forge:plates/iron',
    C: '#pneumaticcraft:fluid_tanks'
  })
  e.shaped('2x mekanism:thermal_evaporation_block', ['BAB', 'ACA', 'BAB'], {
    A: 'extendedcrafting:redstone_ingot',
    B: '#forge:plates/iron',
    C: '#pneumaticcraft:fluid_tanks'
  })
  e.shaped('mekanism:thermal_evaporation_controller', ['BDB', 'ACA', 'AAA'], {
    A: 'mekanism:thermal_evaporation_block',
    B: '#forge:circuits/advanced',
    C: '#pneumaticcraft:fluid_tanks',
    D: 'appliedenergistics2:quartz_vibrant_glass'
  })
  e.shaped('mekanism:basic_tier_installer', ['DBD', 'CAC', 'DBD'], {
    A: 'appliedenergistics2:smooth_sky_stone_block',
    B: '#forge:circuits/basic',
    C: 'pneumaticcraft:compressed_iron_gear',
    D: 'extendedcrafting:redstone_component'
  })
  e.shaped('mekanism:advanced_tier_installer', ['DBD', 'CAC', 'DBD'], {
    A: 'mekanism:basic_tier_installer',
    B: '#forge:circuits/advanced',
    C: '#forge:gears/osmium',
    D: '#mekanism:alloys/infused'
  })
  e.shaped('mekanism:elite_tier_installer', ['DBD', 'CAC', 'DBD'], {
    A: 'mekanism:advanced_tier_installer',
    B: '#forge:circuits/elite',
    C: '#forge:gears/electrum',
    D: '#mekanism:alloys/reinforced'
  })
  e.shaped('mekanism:ultimate_tier_installer', ['DBD', 'CAC', 'DBD'], {
    A: 'mekanism:elite_tier_installer',
    B: '#forge:circuits/ultimate',
    C: '#forge:gears/diamond',
    D: '#mekanism:alloys/atomic'
  })
  e.shaped('8x mekanism:basic_logistical_transporter', ['ACA', ' B '], {
    A: 'kubejs:compressed_iron_plate',
    B: '#forge:circuits/basic',
    C: 'refinedpipes:basic_item_pipe'
  })
  e.shaped('8x mekanism:basic_mechanical_pipe', ['ABA'], {
    A: 'kubejs:compressed_iron_plate',
    B: 'refinedpipes:basic_fluid_pipe'
  })
  e.shaped('8x mekanism:basic_pressurized_tube', [' A ', 'BCB', ' A '], {
    A: 'appliedenergistics2:quartz_glass',
    B: 'kubejs:compressed_iron_plate',
    C: 'mekanism:basic_mechanical_pipe'
  })
  e.shaped('8x mekanism:basic_universal_cable', ['ABA'], {
    A: 'kubejs:compressed_iron_plate',
    B: 'refinedpipes:basic_energy_pipe'
  })
  e.shaped('2x mekanism:diversion_transporter', [' B ', 'ACA', ' B '], {
    A: 'kubejs:compressed_iron_plate',
    B: 'extendedcrafting:redstone_ingot',
    C: 'mekanism:restrictive_transporter'
  })
  e.shaped('2x mekanism:restrictive_transporter', [' B ', 'ACA', ' B '], {
    A: 'kubejs:compressed_iron_plate',
    B: 'minecraft:iron_bars',
    C: 'mekanism:basic_logistical_transporter'
  })
  e.shaped('mekanism:upgrade_anchor', [' A ', 'CBC', ' A '], {
    A: 'appliedenergistics2:quartz_glass',
    B: '#forge:dusts/diamond',
    C: 'refinedpipes:basic_item_pipe'
  })
  e.shaped('2x mekanism:upgrade_energy', [' A ', 'CBC', ' A '], {
    A: 'appliedenergistics2:quartz_glass',
    B: '#forge:dusts/gold',
    C: '#mekanism:alloys/infused'
  })
  e.shaped('mekanism:upgrade_filter', [' A ', 'CBC', ' A '], {
    A: 'appliedenergistics2:quartz_glass',
    B: '#forge:dusts/tin',
    C: 'mekanism:basic_mechanical_pipe'
  })
  e.shaped('2x mekanism:upgrade_gas', [' A ', 'CBC', ' A '], {
    A: 'kubejs:compressed_iron_plate',
    B: '#forge:dusts/iron',
    C: 'mekanism:restrictive_transporter'
  })
  e.shaped('mekanism:upgrade_muffling', [' A ', 'CBC', ' A '], {
    A: 'kubejs:compressed_iron_plate',
    B: '#forge:dusts/steel',
    C: 'mekanism:restrictive_transporter'
  })
  e.shaped('2x mekanism:upgrade_speed', [' A ', 'CBC', ' A '], {
    A: 'kubejs:compressed_iron_plate',
    B: '#forge:dusts/osmium',
    C: 'mekanism:basic_logistical_transporter'
  })
  e.shaped('mekanism:chemical_injection_chamber', ['CBC', 'ADA', 'CBC'], {
    A: '#forge:plates/electrum',
    B: '#forge:circuits/elite',
    C: '#mekanism:alloys/reinforced',
    D: 'mekanism:purification_chamber'
  })
  e.shaped('mekanism:combiner', ['CBC', 'ADA', 'CBC'], {
    A: 'pneumaticcraft:reinforced_stone',
    B: '#forge:circuits/elite',
    C: '#mekanism:alloys/reinforced',
    D: 'mekanism:steel_casing'
  })
  e.shaped('mekanism:configurator', [' BC', ' AB', 'D  '], {
    A: 'mekanism:energy_tablet',
    B: '#mekanism:alloys/infused',
    C: '#forge:gears/lapis',
    D: '#forge:rods/steel'
  })
  e.shaped('mekanism:crusher', ['ABA', 'DCD', 'ABA'], {
    A: 'extendedcrafting:redstone_component',
    B: '#forge:circuits/basic',
    C: 'mekanism:steel_casing',
    D: 'minecraft:lava_bucket'
  })
  e.shaped('mekanism:electrolytic_separator', ['ABA', 'CDC', 'ABA'], {
    A: 'kubejs:compressed_iron_plate',
    B: 'extendedcrafting:redstone_component',
    C: '#mekanism:alloys/infused',
    D: 'mekanism:electrolytic_core'
  })
  e.shaped('mekanism:energized_smelter', ['CBC', 'ADA', 'CEC'], {
    A: 'appliedenergistics2:quartz_glass',
    B: '#forge:circuits/basic',
    C: 'extendedcrafting:redstone_component',
    D: 'mekanism:steel_casing',
    E: '#forge:furnace'
  })
  e.shaped('mekanism:energy_tablet', ['ABA', 'CDC', 'ABA'], {
    A: 'extendedcrafting:redstone_component',
    B: '#forge:gears/electrum',
    C: '#mekanism:alloys/infused',
    D: 'thermal:rf_coil'
  })
  e.shaped('mekanism:enrichment_chamber', ['CBC', 'ADA', 'CBC'], {
    A: 'kubejs:compressed_iron_plate',
    B: '#forge:circuits/basic',
    C: 'extendedcrafting:redstone_component',
    D: 'mekanism:steel_casing'
  })
  e.shaped('mekanism:fluidic_plenisher', ['CCC', 'BAB', 'CCC'], {
    A: 'mekanism:electric_pump',
    B: '#forge:circuits/basic',
    C: '#forge:plates/bronze'
  })
  e.shaped('mekanism:laser_amplifier', ['BBB', 'BCA', 'BBB'], {
    A: 'pneumaticcraft:assembly_laser',
    B: '#forge:ingots/steel',
    C: 'mekanism:basic_energy_cube'
  })
  e.shaped('2x mekanism:laser', ['CD ', 'CBA', 'CD '], {
    A: 'pneumaticcraft:assembly_program_laser',
    B: 'mekanism:steel_casing',
    C: '#mekanism:alloys/reinforced',
    D: 'mekanism:energy_tablet'
  })
  e.shaped('mekanism:logistical_sorter', ['ACA', 'ABA', 'AAA'], {
    A: 'kubejs:compressed_iron_plate',
    B: '#forge:circuits/basic',
    C: '#forge:piston'
  })
  e.shaped('mekanism:metallurgic_infuser', ['ABA', 'CEC', 'ADA'], {
    A: 'kubejs:compressed_iron_plate',
    B: '#forge:gears/osmium',
    C: 'extendedcrafting:redstone_component',
    D: '#forge:furnace',
    E: 'mekanism:steel_casing'
  })
  e.shaped('2x mekanism:module_base', ['BAB', 'ACA', 'BAB'], {
    A: 'modularrouters:blank_module',
    B: '#forge:plates/bronze',
    C: 'mekanism:hdpe_sheet'
  })
  e.shaped('mekanism:network_reader', [' A ', 'CDC', ' B '], {
    A: 'appliedenergistics2:quartz_glass',
    B: '#forge:plates/steel',
    C: '#mekanism:alloys/infused',
    D: 'mekanism:energy_tablet'
  })
  e.shaped('mekanism:nutritional_liquifier', ['RCR', 'DXD', 'RCR'], {
    C: '#forge:circuits/basic',
    X: 'mekanism:steel_casing',
    R: 'extendedcrafting:redstone_component',
    D: '#forge:bowls'
  })
  e.shaped('mekanism:osmium_compressor', ['ACA', 'BXB', 'ACA'], {
    B: 'create:mechanical_piston',
    C: '#forge:circuits/advanced',
    A: '#mekanism:alloys/infused',
    X: 'mekanism:steel_casing'
  })
  e.shaped('mekanism:personal_chest', ['CDC', 'ABA', 'DDD'], {
    A: '#forge:chests/wooden',
    B: '#forge:circuits/basic',
    C: '#forge:ingots/steel',
    D: 'appliedenergistics2:quartz_glass'
  })
  e.shaped('mekanism:precision_sawmill', ['ABA', 'CDC', 'ABA'], {
    A: 'kubejs:compressed_iron_plate',
    B: '#forge:circuits/basic',
    C: '#mekanism:alloys/infused',
    D: 'mekanism:steel_casing'
  })
  e.shaped('mekanism:qio_dashboard', ['IAI', 'AGA', 'ITI'], {
    G: 'appliedenergistics2:quartz_vibrant_glass',
    A: '#forge:pellets/polonium',
    T: 'mekanism:teleportation_core',
    I: '#forge:ingots/lead'
  })
  e.shaped('mekanism:resistive_heater', ['BAB', 'ADA', 'BCB'], {
    A: 'extendedcrafting:redstone_component',
    B: '#forge:ingots/tin',
    C: 'mekanism:energy_tablet',
    D: 'mekanism:steel_casing'
  })
  e.shaped('mekanism:rotary_condensentrator', ['GCG', 'TED', 'GCG'], {
    G: 'appliedenergistics2:quartz_glass',
    C: '#forge:circuits/basic',
    T: 'mekanism:basic_chemical_tank',
    D: 'mekanism:basic_fluid_tank',
    E: 'mekanism:energy_tablet'
  })
  e.shaped('mekanism:security_desk', ['CAC', 'BDB', 'CEC'], {
    A: 'appliedenergistics2:quartz_glass',
    B: '#forge:circuits/elite',
    C: '#forge:ingots/steel',
    D: 'mekanism:steel_casing',
    E: 'mekanism:teleportation_core'
  })
  e.shaped('mekanism:seismic_vibrator', ['CAC', 'BDB', 'CCC'], {
    A: '#forge:gears/lapis',
    B: '#forge:circuits/basic',
    C: '#forge:plates/bronze',
    D: 'mekanism:steel_casing'
  })
  e.shaped('mekanism:solar_neutron_activator', ['ABA', 'CXC', 'III'], {
    I: '#forge:plates/bronze',
    C: '#forge:circuits/elite',
    A: '#mekanism:alloys/reinforced',
    X: 'mekanism:steel_casing',
    B: 'mekanism:hdpe_sheet'
  })
  e.shaped('mekanism:steel_casing', ['CAC', 'ABA', 'CAC'], {
    A: 'extendedcrafting:black_iron_slate',
    B: '#forge:gears/osmium',
    C: 'kubejs:compressed_iron_plate'
  })
  e.shaped('mekanism:supercharged_coil', ['CCC', 'ABA', 'DDD'], {
    A: '#forge:circuits/ultimate',
    B: 'mekanism:laser',
    C: '#forge:plates/bronze',
    D: 'mekanism:pellet_polonium'
  })
  e.shaped('mekanism:superheating_element', ['BAB', 'ACA', 'BAB'], {
    A: '#forge:plates/bronze',
    B: 'extendedcrafting:redstone_component',
    C: 'mekanism:steel_casing'
  })
  e.shaped('mekanism:teleporter', ['BCB', 'CAC', 'BDB'], {
    A: 'mekanism:teleportation_core',
    B: '#forge:circuits/basic',
    C: 'kubejs:compressed_iron_plate',
    D: 'mekanism:steel_casing'
  })
  e.shaped('mekanism:flamethrower', ['GGG', 'GAR', 'OQO'], {
    G: '#forge:ingots/tin',
    O: '#forge:plates/bronze',
    R: 'tconstruct:flint_and_bronze',
    A: 'mekanism:basic_chemical_tank',
    Q: '#forge:circuits/advanced'
  })
  e.shaped('mekanismgenerators:solar_panel', ['GGG', 'RAR', 'OOO'], {
    G: 'appliedenergistics2:quartz_glass',
    O: '#forge:plates/osmium',
    R: 'extendedcrafting:redstone_ingot',
    A: '#mekanism:alloys/infused',
  })
  e.shaped('mekanismgenerators:electromagnetic_coil', ['SIS', 'IEI', 'SIS'], {
    S: '#forge:ingots/steel',
    I: '#forge:plates/electrum',
    E: 'mekanism:energy_tablet'
  })
  e.shaped('4x mekanismgenerators:reactor_glass', ['SIS', 'IEI', 'SIS'], {
    S: 'appliedenergistics2:quartz_glass',
    I: '#forge:ingots/lead',
    E: 'mekanism:enriched_iron'
  })
  e.shaped('mekanismgenerators:fusion_reactor_controller', ['CGC', 'FTF', 'FFF'], {
    C: '#forge:circuits/ultimate',
    G: 'appliedenergistics2:quartz_vibrant_glass',
    F: 'mekanismgenerators:fusion_reactor_frame',
    T: 'mekanism:basic_chemical_tank'
  })
  e.shaped('mekanismgenerators:bio_generator', ['RAR', 'BCB', 'IAI'], {
    R: 'extendedcrafting:redstone_component',
    A: '#mekanism:alloys/infused',
    I: 'kubejs:compressed_iron_plate',
    C: '#forge:circuits/basic',
    B: '#forge:fuels/bio'
  })

  removeRecipeByID(e, [
    'mekanism:processing/lead/ingot/from_dust_blasting',
    'mekanism:processing/copper/ingot/from_block',
    'mekanism:processing/copper/ingot/from_nuggets',
    'mekanism:processing/copper/ingot/from_dust_smelting',
    'mekanism:processing/copper/ingot/from_dust_blasting',
    'mekanism:fluid_tank/basic',
    'mekanism:chemical_tank/basic',
    'mekanism:energy_cube/basic',
    'mekanism:energy_cube/advanced',
    'mekanism:energy_cube/elite',
    'mekanism:energy_cube/ultimate',
    'mekanism:thermal_evaporation/controller',
    'mekanism:thermal_evaporation/block',
    'mekanism:tier_installer/basic',
    'mekanism:tier_installer/advance',
    'mekanism:tier_installer/elite',
    'mekanism:tier_installer/ultimate',
    'mekanism:transmitter/logistical_transporter/basic',
    'mekanism:transmitter/mechanical_pipe/basic',
    'mekanism:transmitter/pressurized_tube/basic',
    'mekanism:transmitter/universal_cable/basic',
    'mekanism:transmitter/diversion_transporter',
    'mekanism:transmitter/restrictive_transporter',
    'mekanism:upgrade/speed',
    'mekanism:upgrade/anchor',
    'mekanism:upgrade/energy',
    'mekanism:upgrade/filter',
    'mekanism:upgrade/muffling',
    'mekanism:chemical_injection_chamber',
    'mekanism:combiner',
    'mekanism:configurator',
    'mekanism:crusher',
    'mekanism:electrolytic_separator',
    'mekanism:energized_smelter',
    'mekanism:energy_tablet',
    'mekanism:enrichment_chamber',
    'mekanism:fluidic_plenisher',
    'mekanism:energy_tablet',
    'mekanism:laser',
    'mekanism:laser_amplifier',
    'mekanism:metallurgic_infuser/alloy/infused',
    'mekanism:logistical_sorter',
    'mekanism:metallurgic_infuser',
    'mekanism:module_base',
    'mekanism:network_reader',
    'mekanism:module_base',
    'mekanism:nutritional_liquifier',
    'mekanism:osmium_compressor',
    'mekanism:personal_chest',
    'mekanism:precision_sawmill',
    'mekanism:qio_dashboard',
    'mekanism:resistive_heater',
    'mekanism:rotary_condensentrator',
    'mekanism:security_desk',
    'mekanism:seismic_vibrator',
    'mekanism:solar_neutron_activator',
    'mekanism:steel_casing',
    'mekanism:supercharged_coil',
    'mekanism:superheating_element',
    'mekanism:teleporter',
    'mekanism:flamethrower',
    'mekanism:control_circuit/basic',
    'mekanism:processing/lead/ingot/from_block',
    'mekanism:processing/lead/ingot/from_nuggets',
    'mekanism:processing/lead/ingot/from_ore_blasting',
    'mekanism:processing/lead/ingot/from_dust_smelting',
    'mekanism:processing/lead/ingot/from_ore_smelting',
    'mekanism:processing/copper/ingot/from_ore_blasting',
    'mekanism:processing/copper/ingot/from_dust_smelting',
    'mekanism:processing/copper/ingot/from_ore_smelting',
    'mekanismgenerators:flamethrower',
    'mekanismgenerators:solar_panel',
    'mekanismgenerators:reactor_glass',
    'mekanismgenerators:fusion_reactor_controller',
    'mekanismgenerators:generator/bio',
    'mekanismgenerators:generator/advanceed_solar',
    'mekanismgenerators:generator/gas_burning',
    'mekanismgenerators:generator/solar'
  ])
})
