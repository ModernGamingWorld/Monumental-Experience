ServerEvents.recipes(e => {
  e.shaped('fluxnetworks:flux_plug', ['xcx', 'cbc', 'xcx'], {
    c: 'fluxnetworks:flux_core',
    b: 'fluxnetworks:flux_block',
    x: 'pneumaticcraft:plastic'
  })
  e.shaped('fluxnetworks:flux_configurator', [' fe', ' of', 'o  '], {
    o: '#forge:ingots/obsidian',
    f: 'fluxnetworks:flux_dust',
    e: 'fluxnetworks:flux_core'
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
