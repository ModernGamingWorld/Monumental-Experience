ServerEvents.recipes(e => {
  e.shaped('ae2:silicon_press', ['BBB', 'BCB', 'BBB'], {
    B: 'mysticalagriculture:certus_quartz_essence',
    C: 'mysticalagriculture:silicon_essence'
  })
  e.shaped('ae2:logic_processor_press', ['BBB', 'BCB', 'BBB'], {
    B: 'mysticalagriculture:certus_quartz_essence',
    C: '#forge:ingots/electrum'
  })
  e.shaped('ae2:quartz_growth_accelerator', ['aba', 'cdc', 'aba'], {
    c: 'ae2:quartz_glass',
    a: 'kubejs:compressed_iron_plate',
    b: 'ae2:fluix_glass_cable',
    d: 'ae2:fluix_block'
  })
  e.shaped('ae2:quantum_ring', ['aba', 'cde', 'aba'], {
    c: 'ae2:engineering_processor',
    e: 'ae2:fluix_smart_dense_cable',
    a: 'kubejs:compressed_iron_plate',
    d: 'ae2:energy_cell',
    b: 'ae2:logic_processor'
  })
  e.shaped('ae2:crafting_unit', ['aba', 'cdc', 'aba'], {
    a: 'kubejs:compressed_iron_plate',
    d: 'ae2:logic_processor',
    c: 'ae2:fluix_glass_cable',
    b: 'ae2:calculation_processor'
  })
  e.shaped('2x ae2:blank_pattern', ['ABA', 'BCB', 'DDD'], {
    A: 'ae2:quartz_glass',
    B: '#forge:ingots/refined_glowstone',
    C: '#forge:gems/certus_quartz',
    D: 'kubejs:compressed_iron_plate'
  })
  e.shaped('ae2:import_bus', [' a ', 'bcb'], {
    a: 'ae2:annihilation_core',
    b: 'kubejs:compressed_iron_plate',
    c: '#forge:piston'
  })
  e.shaped('ae2:annihilation_plane', ['aaa', 'bcb'], {
    a: '#forge:gems/fluix',
    b: 'kubejs:compressed_iron_plate',
    c: 'ae2:annihilation_core'
  })
  e.shaped('ae2:annihilation_plane', ['ab', 'cb', 'ab'], {
    a: '#forge:gems/fluix',
    b: 'kubejs:compressed_iron_plate',
    c: 'ae2:annihilation_core'
  })
  e.shaped('ae2:formation_plane', ['aaa', 'bcb'], {
    a: '#forge:gems/fluix',
    b: '#forge:plates/enderium',
    c: 'ae2:formation_core'
  })
  e.shaped('ae2:formation_plane', ['ab', 'cb', 'ab'], {
    a: '#forge:gems/fluix',
    b: '#forge:plates/enderium',
    c: 'ae2:formation_core'
  })
  e.shaped('ae2:export_bus', ['aba', ' c '], {
    a: 'kubejs:compressed_iron_plate',
    b: 'ae2:formation_core',
    c: '#forge:piston'
  })

  removeRecipeByID(e, [
    'ae2:misc/meteors_sky_compass',
    'ae2:misc/grindstone_crank',
    'ae2:misc/grindstone_woodengear',
    'ae2:misc/grindstone',
    'ae2:inscriber/logic_processor_press',
    'ae2:inscriber/calculation_processor_print',
    'ae2:inscriber/logic_processor_print',
    'ae2:inscriber/engineering_processor_print',
    'ae2:tools/certus_quartz_pickaxe',
    'ae2:tools/certus_quartz_axe',
    'ae2:tools/certus_quartz_shovel',
    'ae2:tools/certus_quartz_hoe',
    'ae2:tools/certus_quartz_sword',
    'ae2:tools/nether_quartz_pickaxe',
    'ae2:tools/nether_quartz_axe',
    'ae2:tools/nether_quartz_shovel',
    'ae2:tools/nether_quartz_hoe',
    'ae2:tools/nether_quartz_sword',
    'ae2:inscriber/engineering_processor',
    'ae2:inscriber/silicon_press',
    'ae2:inscriber/calculation_processor',
    'ae2:inscriber/logic_processor',
    'ae2:network/blocks/crystal_processing_quartz_growth_accelerator',
    'ae2:network/blocks/quantum_ring',
    'ae2:network/crafting/cpu_crafting_unit',
    'ae2:network/crafting/patterns_blank',
    'ae2:network/parts/import_bus',
    'ae2:network/parts/export_bus',
    'ae2:network/parts/planes_annihilation',
    'ae2:network/parts/planes_annihilation_alt',
    'ae2:network/parts/planes_formation',
    'ae2:network/parts/planes_formation_alt',
    'ae2:network/parts/planes_formation_fluid_alt',
    'ae2:network/parts/planes_formation_fluid',
    'ae2:network/parts/quartz_fiber_part',
    'ae2:network/parts/panels_semi_dark_monitor',
    'ae2:network/parts/tunnels_me',
    'ae2:decorative/quartz_glass',
    'ae2:decorative/quartz_vibrant_glass',
    'ae2:materials/formationcore',
    'ae2:materials/annihilationcore',
    'ae2:materials/basiccard',
    'ae2:materials/advancedcard',
    'ae2:network/blocks/inscribers',
    'ae2:network/blocks/interfaces_interface',
    'ae2:network/blocks/storage_drive',
    'ae2:network/blocks/io_port',
    'ae2:network/blocks/io_condenser',
    'ae2:network/blocks/security_station',
    'ae2:network/blocks/storage_chest',
    'ae2:network/crafting/molecular_assembler',
    'ae2:network/blocks/spatial_io_port',
    'ae2:network/blocks/cell_workbench',
    'ae2:network/blocks/energy_energy_acceptor',
    'ae2:network/blocks/crystal_processing_charger',
    'ae2:network/blocks/energy_vibration_chamber',
    'ae2:network/blocks/fluid_interfaces_interface',
    'ae2:network/cells/empty_storage_cell',
    'ae2:network/cells/spatial_components',
    'ae2:network/cells/spatial_components_0',
    'ae2:network/cells/spatial_components_1',
    'ae2:network/cells/storage_components_cell_64k_part',
    'ae2:network/cells/storage_components_cell_16k_part',
    'ae2:network/cells/storage_components_cell_4k_part',
    'ae2:network/cells/storage_components_cell_1k_part',
    'ae2:network/cells/fluid_storage_components_cell_64k_part',
    'ae2:network/cells/fluid_storage_components_cell_16k_part',
    'ae2:network/cells/fluid_storage_components_cell_4k_part',
    'ae2:network/cells/fluid_storage_components_cell_1k_part',
    'ae2:network/cells/view_cell',
    'ae2:network/cells/view_cell_storage',
    'ae2:network/cells/storage_cell_1k_storage',
    'ae2:network/cells/storage_cell_1k',
    'ae2:network/cells/storage_cell_4k_storage',
    'ae2:network/cells/storage_cell_4k',
    'ae2:network/cells/storage_cell_16k_storage',
    'ae2:network/cells/storage_cell_16k',
    'ae2:network/cells/storage_cell_64k_storage',
    'ae2:network/cells/storage_cell_64k',
    'ae2:network/cells/fluid_storage_cell_1k_storage',
    'ae2:network/cells/fluid_storage_cell_1k',
    'ae2:network/cells/fluid_storage_cell_4k_storage',
    'ae2:network/cells/fluid_storage_cell_4k',
    'ae2:network/cells/fluid_storage_cell_16k_storage',
    'ae2:network/cells/fluid_storage_cell_16k',
    'ae2:network/cells/fluid_storage_cell_64k_storage',
    'ae2:network/cells/fluid_storage_cell_64k',
    'ae2:network/cells/spatial_storage_cell_2_cubed',
    'ae2:network/cells/spatial_storage_cell_2_cubed_storage',
    'ae2:network/cells/spatial_storage_cell_16_cubed',
    'ae2:network/cells/spatial_storage_cell_16_cubed_storage',
    'ae2:network/cells/spatial_storage_cell_128_cubed',
    'ae2:network/cells/spatial_storage_cell_128_cubed_storage',
    'extradisks:advanced_storage_housing',
    'extradisks:raw_withering_processor',
    'extradisks:withering_processor',
    'extrastorage:neural_processor',
    'extrastorage:raw_neural_processor'
  ])
})
