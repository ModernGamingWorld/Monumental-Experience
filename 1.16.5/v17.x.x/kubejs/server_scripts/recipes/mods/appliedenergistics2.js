onEvent('recipes', e => {
  e.shaped('appliedenergistics2:engineering_processor_press', ['BBB', 'BCB', 'BBB'], {
    B: 'mysticalagriculture:certus_quartz_essence',
    C: '#forge:gems/mana_diamond'
  })
  e.shaped('appliedenergistics2:silicon_press', ['BBB', 'BCB', 'BBB'], {
    B: 'mysticalagriculture:certus_quartz_essence',
    C: 'mysticalagriculture:silicon_essence'
  })
  e.shaped('appliedenergistics2:calculation_processor_press', ['BBB', 'BCB', 'BBB'], {
    B: 'mysticalagriculture:certus_quartz_essence',
    C: 'rsgauges:industrial_day_timer'
  })
  e.shaped('appliedenergistics2:logic_processor_press', ['BBB', 'BCB', 'BBB'], {
    B: 'mysticalagriculture:certus_quartz_essence',
    C: '#forge:ingots/electrum'
  })
  e.shaped('appliedenergistics2:quartz_growth_accelerator', ['aba', 'cdc', 'aba'], {
    c: 'appliedenergistics2:quartz_glass',
    a: 'kubejs:compressed_iron_plate',
    b: 'appliedenergistics2:fluix_glass_cable',
    d: '#forge:storage_blocks/fluix'
  })
  e.shaped('appliedenergistics2:quantum_ring', ['aba', 'cde', 'aba'], {
    c: 'appliedenergistics2:engineering_processor',
    e: 'appliedenergistics2:fluix_smart_dense_cable',
    a: 'kubejs:compressed_iron_plate',
    d: 'appliedenergistics2:energy_cell',
    b: 'appliedenergistics2:logic_processor'
  })
  e.shaped('appliedenergistics2:crafting_unit', ['aba', 'cdc', 'aba'], {
    a: 'kubejs:compressed_iron_plate',
    d: 'appliedenergistics2:logic_processor',
    c: 'appliedenergistics2:fluix_glass_cable',
    b: 'appliedenergistics2:calculation_processor'
  })
  e.shaped('2x appliedenergistics2:blank_pattern', ['ABA', 'BCB', 'DDD'], {
    A: 'appliedenergistics2:quartz_glass',
    B: '#forge:ingots/refined_glowstone',
    C: 'appliedenergistics2:charged_certus_quartz_crystal',
    D: 'kubejs:compressed_iron_plate'
  })
  e.shaped('appliedenergistics2:fluid_export_bus', ['aca', 'lbl'], {
    a: 'kubejs:compressed_iron_plate',
    b: 'appliedenergistics2:formation_core',
    c: '#forge:piston',
    l: '#pneumaticcraft:fluid_tanks'
  })
  e.shaped('appliedenergistics2:import_bus', [' a ', 'bcb'], {
    a: 'appliedenergistics2:annihilation_core',
    b: 'kubejs:compressed_iron_plate',
    c: '#forge:piston'
  })
  e.shaped('appliedenergistics2:fluid_import_bus', ['lal', 'bcb'], {
    a: 'appliedenergistics2:annihilation_core',
    b: 'kubejs:compressed_iron_plate',
    c: '#forge:piston',
    l: '#pneumaticcraft:fluid_tanks'
  })
  e.shaped('appliedenergistics2:annihilation_plane', ['aaa', 'bcb'], {
    a: '#forge:gems/fluix',
    b: 'kubejs:compressed_iron_plate',
    c: 'appliedenergistics2:annihilation_core'
  })
  e.shaped('appliedenergistics2:annihilation_plane', ['ab', 'cb', 'ab'], {
    a: '#forge:gems/fluix',
    b: 'kubejs:compressed_iron_plate',
    c: 'appliedenergistics2:annihilation_core'
  })
  e.shaped('appliedenergistics2:formation_plane', ['aaa', 'bcb'], {
    a: '#forge:gems/fluix',
    b: '#forge:plates/enderium',
    c: 'appliedenergistics2:formation_core'
  })
  e.shaped('appliedenergistics2:formation_plane', ['ab', 'cb', 'ab'], {
    a: '#forge:gems/fluix',
    b: '#forge:plates/enderium',
    c: 'appliedenergistics2:formation_core'
  })
  e.shaped('appliedenergistics2:export_bus', ['aba', ' c '], {
    a: 'kubejs:compressed_iron_plate',
    b: 'appliedenergistics2:formation_core',
    c: '#forge:piston'
  })

  removeRecipeByID(e, [
    'appliedenergistics2:misc/meteors_sky_compass',
    'appliedenergistics2:inscriber/calculation_processor_print',
    'appliedenergistics2:inscriber/logic_processor_print',
    'appliedenergistics2:inscriber/engineering_processor_print',
    'appliedenergistics2:tools/certus_quartz_pickaxe',
    'appliedenergistics2:tools/certus_quartz_axe',
    'appliedenergistics2:tools/certus_quartz_shovel',
    'appliedenergistics2:tools/certus_quartz_hoe',
    'appliedenergistics2:tools/certus_quartz_sword',
    'appliedenergistics2:tools/nether_quartz_pickaxe',
    'appliedenergistics2:tools/nether_quartz_axe',
    'appliedenergistics2:tools/nether_quartz_shovel',
    'appliedenergistics2:tools/nether_quartz_hoe',
    'appliedenergistics2:tools/nether_quartz_sword',
    'appliedenergistics2:inscriber/engineering_processor',
    'appliedenergistics2:inscriber/silicon_press',
    'appliedenergistics2:inscriber/calculation_processor',
    'appliedenergistics2:inscriber/logic_processor',
    'appliedenergistics2:network/blocks/crystal_processing_quartz_growth_accelerator',
    'appliedenergistics2:network/blocks/quantum_ring',
    'appliedenergistics2:network/crafting/cpu_crafting_unit',
    'appliedenergistics2:network/crafting/patterns_blank',
    'appliedenergistics2:network/parts/import_bus',
    'appliedenergistics2:network/parts/export_bus',
    'appliedenergistics2:network/parts/export_bus_fluid',
    'appliedenergistics2:network/parts/import_bus_fluid',
    'appliedenergistics2:network/parts/planes_annihilation',
    'appliedenergistics2:network/parts/planes_annihilation_alt',
    'appliedenergistics2:network/parts/planes_formation',
    'appliedenergistics2:network/parts/quartz_fiber_part',
    'appliedenergistics2:decorative/quartz_glass',
    'appliedenergistics2:decorative/quartz_vibrant_glass',
    'appliedenergistics2:materials/formationcore',
    'appliedenergistics2:materials/annihilationcore',
    'appliedenergistics2:materials/basiccard',
    'appliedenergistics2:materials/advancedcard',
    'appliedenergistics2:network/blocks/inscribers',
    'appliedenergistics2:network/blocks/interfaces_interface',
    'appliedenergistics2:network/blocks/storage_drive',
    'appliedenergistics2:network/blocks/io_port',
    'appliedenergistics2:network/blocks/io_condenser',
    'appliedenergistics2:network/blocks/security_station',
    'appliedenergistics2:network/blocks/storage_chest',
    'appliedenergistics2:network/crafting/molecular_assembler',
    'appliedenergistics2:network/blocks/spatial_io_port',
    'appliedenergistics2:network/blocks/cell_workbench',
    'appliedenergistics2:network/blocks/energy_energy_acceptor',
    'appliedenergistics2:network/blocks/crystal_processing_charger',
    'appliedenergistics2:network/blocks/energy_vibration_chamber',
    'appliedenergistics2:network/blocks/fluid_interfaces_interface',
    'appliedenergistics2:network/cells/empty_storage_cell',
    'appliedenergistics2:network/cells/spatial_components',
    'appliedenergistics2:network/cells/spatial_components_0',
    'appliedenergistics2:network/cells/spatial_components_1',
    'appliedenergistics2:network/cells/storage_components_cell_64k_part',
    'appliedenergistics2:network/cells/storage_components_cell_16k_part',
    'appliedenergistics2:network/cells/storage_components_cell_4k_part',
    'appliedenergistics2:network/cells/storage_components_cell_1k_part',
    'appliedenergistics2:network/cells/fluid_storage_components_cell_64k_part',
    'appliedenergistics2:network/cells/fluid_storage_components_cell_16k_part',
    'appliedenergistics2:network/cells/fluid_storage_components_cell_4k_part',
    'appliedenergistics2:network/cells/fluid_storage_components_cell_1k_part',
    'appliedenergistics2:network/cells/view_cell',
    'appliedenergistics2:network/cells/view_cell_storage',
    'appliedenergistics2:network/cells/storage_cell_1k_storage',
    'appliedenergistics2:network/cells/storage_cell_1k',
    'appliedenergistics2:network/cells/storage_cell_4k_storage',
    'appliedenergistics2:network/cells/storage_cell_4k',
    'appliedenergistics2:network/cells/storage_cell_16k_storage',
    'appliedenergistics2:network/cells/storage_cell_16k',
    'appliedenergistics2:network/cells/storage_cell_64k_storage',
    'appliedenergistics2:network/cells/storage_cell_64k',
    'appliedenergistics2:network/cells/fluid_storage_cell_1k_storage',
    'appliedenergistics2:network/cells/fluid_storage_cell_1k',
    'appliedenergistics2:network/cells/fluid_storage_cell_4k_storage',
    'appliedenergistics2:network/cells/fluid_storage_cell_4k',
    'appliedenergistics2:network/cells/fluid_storage_cell_16k_storage',
    'appliedenergistics2:network/cells/fluid_storage_cell_16k',
    'appliedenergistics2:network/cells/fluid_storage_cell_64k_storage',
    'appliedenergistics2:network/cells/fluid_storage_cell_64k',
    'appliedenergistics2:network/cells/spatial_storage_cell_2_cubed',
    'appliedenergistics2:network/cells/spatial_storage_cell_2_cubed_storage',
    'appliedenergistics2:network/cells/spatial_storage_cell_16_cubed',
    'appliedenergistics2:network/cells/spatial_storage_cell_16_cubed_storage',
    'appliedenergistics2:network/cells/spatial_storage_cell_128_cubed',
    'appliedenergistics2:network/cells/spatial_storage_cell_128_cubed_storage',
    'ae2extras:network/cells/storage_components_cell_256k_part',
    'ae2extras:network/cells/storage_components_cell_1m_part',
    'ae2extras:network/cells/storage_components_cell_4m_part',
    'ae2extras:network/cells/storage_components_cell_16m_part',
    'ae2extras:network/cells/fluid_storage_components_cell_256k_part',
    'ae2extras:network/cells/fluid_storage_components_cell_1m_part',
    'ae2extras:network/cells/fluid_storage_components_cell_4m_part',
    'ae2extras:network/cells/fluid_storage_components_cell_16m_part',
    'ae2extras:network/cells/storage_cell_256k',
    'ae2extras:network/cells/storage_cell_256k_storage',
    'ae2extras:network/cells/storage_cell_1m',
    'ae2extras:network/cells/storage_cell_1m_storage',
    'ae2extras:network/cells/storage_cell_4m',
    'ae2extras:network/cells/storage_cell_4m_storage',
    'ae2extras:network/cells/storage_cell_16m',
    'ae2extras:network/cells/storage_cell_16m_storage',
    'ae2extras:network/cells/fluid_storage_cell_256k',
    'ae2extras:network/cells/fluid_storage_cell_256k_storage',
    'ae2extras:network/cells/fluid_storage_cell_1m',
    'ae2extras:network/cells/fluid_storage_cell_1m_storage',
    'ae2extras:network/cells/fluid_storage_cell_4m',
    'ae2extras:network/cells/fluid_storage_cell_4m_storage',
    'ae2extras:network/cells/fluid_storage_cell_16m',
    'ae2extras:network/cells/fluid_storage_cell_16m_storage',
    'extradisks:advanced_storage_housing',
    'extradisks:raw_withering_processor'
  ])
})
