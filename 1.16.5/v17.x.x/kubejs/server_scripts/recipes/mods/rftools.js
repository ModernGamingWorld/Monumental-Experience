onEvent('recipes', e => {
  e.shaped('rftoolsbase:filter_module', [' h ', 'rir', ' p '], {
    h: '#forge:hopper',
    r: '#forge:dusts/redstone',
    p: '#forge:paper',
    i: 'modularrouters:blank_module'
  })
  e.shaped('rftoolsbuilder:shape_card_def', ['pBp', 'rir', 'pBp'], {
    p: 'modularrouters:blank_module',
    B: 'immersiveengineering:alloybrick',
    r: 'extendedcrafting:redstone_catalyst',
    i: 'pneumaticcraft:compressed_iron_gear'
  })
  e.shaped('rftoolscontrol:console_module', ['PMP', 'rir', 'PzP'], {
    M: 'rftoolscontrol:card_base',
    P: '#forge:glass_panes',
    z: '#forge:dyes/black',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module'
  })
  e.shaped('rftoolscontrol:craftingstation', ['rMr', 'CFC', 'rMr'], {
    M: 'rftoolscontrol:card_base',
    C: 'immersiveengineering:craftingtable',
    r: 'immersiveengineering:wirecoil_redstone',
    F: 'immersiveengineering:heavy_engineering'
  })
  e.shaped('rftoolscontrol:interaction_module', ['PMP', 'rir', ' z '], {
    M: 'rftoolscontrol:card_base',
    z: '#forge:dyes/black',
    P: 'minecraft:stone_pressure_plate',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module'
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
  e.shaped('rftoolscontrol:variable_module', [' M ', 'rir', ' z '], {
    M: 'rftoolscontrol:card_base',
    z: '#forge:dyes/black',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module'
  })
  e.shaped('rftoolscontrol:vectorart_module', ['PMP', 'rIr', 'PzP'], {
    M: 'rftoolscontrol:card_base',
    z: '#forge:dyes/black',
    P: '#forge:glass_panes',
    I: 'modularrouters:blank_module',
    r: '#forge:dusts/redstone'
  })
  e.shaped('rftoolspower:dimensionalcell', ['RdR', 'PFP', 'ReR'], {
    P: '#forge:dusts/prismarine',
    R: 'extendedcrafting:redstone_catalyst',
    d: '#forge:gears/diamond',
    e: '#forge:gears/emerald',
    F: 'rftoolspower:dimensionalcell_simple'
  })
  e.shaped('rftoolspower:dimensionalcell_advanced', ['RdR', 'dKd', 'RdR'], {
    K: 'rftoolspower:dimensionalcell',
    R: 'extendedcrafting:redstone_catalyst',
    d: 'rftoolsbase:infused_diamond'
  })
  e.shaped('rftoolspower:powercell_card', ['rgr', 'gpg', 'rgr'], {
    g: 'immersiveengineering:wirecoil_electrum',
    p: 'modularrouters:blank_module',
    r: 'extendedcrafting:redstone_component'
  })
  e.shaped('rftoolspower:dimensionalcell_simple', ['RdR', 'qFq', 'RdR'], {
    R: 'extendedcrafting:redstone_catalyst',
    d: '#forge:gears/diamond',
    q: 'create:polished_rose_quartz',
    F: 'rftoolsbase:machine_frame'
  })
  e.shaped('rftoolsstorage:storage_control_module', [' X ', 'rir', ' X '], {
    X: '#forge:workbenches',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module'
  })
  e.shaped('rftoolsstorage:dump_module', [' X ', 'rir', ' X '], {
    X: '#minecraft:wooden_buttons',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module'
  })
  e.shaped('rftoolsstorage:storage_module0', [' C ', 'gig', 'qrq'], {
    g: '#forge:nuggets/gold',
    q: '#forge:gems/quartz',
    r: '#forge:dusts/redstone',
    C: '#forge:chests',
    i: 'modularrouters:blank_module'
  })
  e.shaped('rftoolsutility:fluid_module', [' X ', 'rir', ' Z '], {
    X: '#forge:tools/bucket',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
  })
  e.shaped('rftoolsutility:energy_module', [' r ', 'rir', ' Z '], {
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
  })
  e.shaped('rftoolsutility:redstone_information', ['ror', 'rRr', 'rrr'], {
    r: '#forge:dusts/redstone',
    R: 'modularrouters:blank_module',
    o: '#forge:ender_pearls'
  })
  e.shaped('rftoolsutility:redstone_module', [' X ', 'rir', ' Z '], {
    X: 'minecraft:repeater',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
  })
  e.shaped('rftoolsutility:text_module', [' p ', 'rir', ' Z '], {
    p: '#forge:paper',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
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
  e.shaped('rftoolsutility:button_module', [' X ', 'rir', ' Z '], {
    X: 'minecraft:stone_button',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
  })
  e.shaped('rftoolsutility:clock_module', [' X ', 'rir', ' Z '], {
    X: '#forge:clock',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
  })
  e.shaped('rftoolsutility:inventory_module', [' X ', 'rir', ' Z '], {
    X: '#forge:chests',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
  })
  e.shaped('rftoolsutility:machineinformation_module', [' X ', 'rir', ' Z '], {
    X: '#forge:furnace',
    r: '#forge:dusts/redstone',
    i: 'modularrouters:blank_module',
    Z: '#forge:dyes/black'
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
