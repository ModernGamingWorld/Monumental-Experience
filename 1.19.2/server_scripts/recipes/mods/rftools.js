ServerEvents.recipes(e => {
  e.shaped('rftoolscontrol:craftingstation', ['rMr', 'CFC', 'rMr'], {
    M: 'rftoolscontrol:card_base',
    C: 'immersiveengineering:craftingtable',
    r: 'immersiveengineering:wirecoil_redstone',
    F: 'immersiveengineering:heavy_engineering'
  })
  e.shaped('rftoolscontrol:node', ['ror', 'rFr', 'rMr'], {
    M: 'rftoolscontrol:card_base',
    r: 'immersiveengineering:wirecoil_redstone',
    F: 'immersiveengineering:heavy_engineering',
    o: '#forge:ender_pearls'
  })
  e.shaped('rftoolscontrol:processor', ['rqr', 'MFM', 'rqr'], {
    M: 'rftoolscontrol:card_base',
    q: 'create:polished_rose_quartz',
    r: 'immersiveengineering:wirecoil_redstone',
    F: 'immersiveengineering:heavy_engineering'
  })
  e.shaped('rftoolscontrol:programmer', ['rqr', 'pFp', 'rsr'], {
    q: 'create:polished_rose_quartz',
    p: 'pneumaticcraft:plastic',
    r: 'immersiveengineering:wirecoil_redstone',
    F: 'immersiveengineering:heavy_engineering',
    s: 'immersiveengineering:circuit_board'
  })
  e.shaped('rftoolspower:dimensionalcell', ['RdR', 'PFP', 'ReR'], {
    P: '#forge:dusts/prismarine',
    R: 'extendedcrafting:redstone_catalyst',
    d: '#forge:gears/diamond',
    e: '#forge:gems/emerald',
    F: 'rftoolspower:dimensionalcell_simple'
  })
  e.shaped('rftoolspower:dimensionalcell_advanced', ['RdR', 'dKd', 'RdR'], {
    K: 'rftoolspower:dimensionalcell',
    R: 'extendedcrafting:redstone_catalyst',
    d: 'rftoolsbase:infused_diamond'
  })
  e.shaped('rftoolspower:dimensionalcell_simple', ['RdR', 'qFq', 'RdR'], {
    R: 'extendedcrafting:redstone_catalyst',
    d: '#forge:gears/diamond',
    q: 'create:polished_rose_quartz',
    F: 'rftoolsbase:machine_frame'
  })
  e.shaped('rftoolsutility:crafter1', ['QTQ', 'CMC', 'QTQ'], {
    C: 'immersiveengineering:craftingtable',
    M: 'immersiveengineering:heavy_engineering',
    T: '#forge:plates/steel',
    Q: 'immersiveengineering:wirecoil_redstone'
  })
  e.shaped('rftoolsutility:crafter2', ['QTQ', 'CMC', 'QTQ'], {
    C: 'immersiveengineering:craftingtable',
    M: 'rftoolsutility:crafter1',
    T: '#forge:plates/steel',
    Q: 'immersiveengineering:wirecoil_redstone'
  })
  e.shaped('rftoolsutility:crafter3', ['QTQ', 'CMC', 'QTQ'], {
    C: 'immersiveengineering:craftingtable',
    M: 'rftoolsutility:crafter2',
    T: '#forge:plates/steel',
    Q: 'immersiveengineering:wirecoil_redstone'
  })

  removeRecipeByID(e, [
    'rftoolsbuilder:shape_card_def',
    'rftoolsbuilder:builder',
    'rftoolsbase:filter_module',
    'rftoolsbase:machine_base',
    'rftoolsbase:machine_frame',
    'rftoolsbase:machine_infuser',
    'rftoolscontrol:card_base',
    'rftoolscontrol:cpu_core_500',
    'rftoolscontrol:cpu_core_1000',
    'rftoolscontrol:cpu_core_2000',
    'rftoolscontrol:graphics_card',
    'rftoolscontrol:network_card',
    'rftoolscontrol:advanced_network_card',
    'rftoolscontrol:ram_chip',
    'rftoolscontrol:vectorart_module',
    'rftoolscontrol:variable_module',
    'rftoolscontrol:node',
    'rftoolscontrol:processor',
    'rftoolscontrol:programmer',
    'rftoolscontrol:interaction_module',
    'rftoolscontrol:craftingstation',
    'rftoolscontrol:console_module',
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_advanced',
    'rftoolspower:dimensionalcell_simple',
    'rftoolspower:powercell_card',
    'rftoolspower:blazing_generator',
    'rftoolspower:blazing_infuser',
    'rftoolspower:power_core1',
    'rftoolspower:power_core2',
    'rftoolspower:power_core3',
    'rftoolspower:cell1',
    'rftoolspower:cell2',
    'rftoolspower:cell3',
    'rftoolsstorage:storage_module0',
    'rftoolsstorage:dump_module',
    'rftoolsstorage:storage_control_module',
    'rftoolsstorage:modular_storage',
    'rftoolsstorage:storage_scanner',
    'rftoolsutility:advanced_charged_porter',
    'rftoolsutility:charged_porter',
    'rftoolsutility:dialing_device',
    'rftoolsutility:matter_beamer',
    'rftoolsutility:matter_booster',
    'rftoolsutility:matter_receiver',
    'rftoolsutility:matter_transmitter',
    'rftoolsutility:simple_dialer',
    'rftoolsutility:spawner',
    'rftoolsutility:tank',
    'rftoolsutility:machineinformation_module',
    'rftoolsutility:inventory_module',
    'rftoolsutility:clock_module',
    'rftoolsutility:button_module',
    'rftoolsutility:crafter1',
    'rftoolsutility:crafter2',
    'rftoolsutility:crafter3',
    'rftoolsutility:text_module',
    'rftoolsutility:redstone_module',
    'rftoolsutility:redstone_information',
    'rftoolsutility:energy_module',
    'rftoolsutility:fluid_module'
  ])
})
