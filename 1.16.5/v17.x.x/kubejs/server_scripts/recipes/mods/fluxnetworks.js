onEvent('recipes', e => {
  e.shaped('fluxnetworks:flux_plug', ['xcx', 'cbc', 'xcx'], {
    c: 'fluxnetworks:flux_core',
    b: 'fluxnetworks:flux_block',
    x: 'pneumaticcraft:plastic'
  })
  e.shaped('fluxnetworks:basic_flux_storage', ['bbb', 'g g', 'bbb'], {
    g: 'fluxnetworks:flux_block',
    b: '#thermal:glass/hardened'
  })
  e.shaped('fluxnetworks:flux_configurator', [' fe', ' of', 'o  '], {
    o: '#forge:ingots/obsidian',
    f: 'fluxnetworks:flux_dust',
    e: 'fluxnetworks:flux_core'
  })
  e.shaped('fluxnetworks:flux_controller', ['bxb', 'cac', 'bbb'], {
    c: 'fluxnetworks:flux_core',
    b: 'fluxnetworks:flux_block',
    x: '#thermal:glass/hardened',
    a: 'pneumaticcraft:printed_circuit_board'
  })
  e.shaped('4x fluxnetworks:flux_core', ['fof', 'oeo', 'fof'], {
    o: '#forge:ingots/obsidian',
    f: 'fluxnetworks:flux_dust',
    e: 'cyclic:ender_eye_reuse'
  })
  e.shaped('fluxnetworks:gargantuan_flux_storage', ['bbb', 'g g', 'bbb'], {
    b: 'fluxnetworks:herculean_flux_storage',
    g: '#thermal:glass/hardened'
  })
  e.shaped('fluxnetworks:herculean_flux_storage', ['bbb', 'g g', 'bbb'], {
    b: 'fluxnetworks:basic_flux_storage',
    g: '#thermal:glass/hardened'
  })
  e.shaped('fluxnetworks:flux_point', ['xcx', 'cbc', 'xcx'], {
    b: 'extendedcrafting:redstone_catalyst',
    c: 'fluxnetworks:flux_core',
    x: '#forge:plastic'
  })

  removeRecipeByID(e, [
    'fluxnetworks:basicfluxstorage',
    'fluxnetworks:gargantuanfluxstorage',
    'fluxnetworks:herculeanfluxstorage',
    'fluxnetworks:fluxconfigurator',
    'fluxnetworks:fluxcontroller',
    'fluxnetworks:fluxcore',
    'fluxnetworks:fluxplug',
    'fluxnetworks:fluxpoint'
  ])
})
