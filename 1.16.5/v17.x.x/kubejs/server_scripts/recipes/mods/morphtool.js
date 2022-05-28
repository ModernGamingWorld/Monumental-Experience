onEvent('recipes', e => {
  e.shaped('morphtool:tool', ['AB ', 'CD ', '  D'], {
    A: '#forge:dyes/blue',
    B: '#forge:dyes/red',
    C: '#forge:dyes/green',
    D: '#forge:plates/iron'
  })
  e.shaped(Item.of('morphtool:tool', {
    'morphtool:data': {
      astralsorcery: { id: 'astralsorcery:wand', },
      pneumaticcraft: { id: 'pneumaticcraft:pneumatic_wrench', },
      immersiveengineering: { id: 'immersiveengineering:hammer', },
      transport: { id: 'transport:rail_breaker', },
      botania: { id: 'botania:twig_wand', tag: { color1: 0, color2: 0 } },
      mekanism: { id: 'mekanism:configurator', },
      bloodmagic: { id: 'bloodmagic:ritualtinkerer', },
      thermal: { id: 'thermal:wrench', },
      rftoolsbase: { id: 'rftoolsbase:smartwrench', },
      create: { id: 'create:wrench', },
      chiselsandbits: { id: 'chiselsandbits:wrench_wood', },
      refinedstorage: { id: 'refinedstorage:wrench', },
      storagedrawers: { id: 'storagedrawers:drawer_key', },
      fluxnetworks: { id: 'fluxnetworks:flux_configurator', },
      compactmachines: { id: 'compactmachines:personal_shrinking_device', }
    }
  }),
    ['ABA', 'CFD', 'AEA'], {
    A: '#forge:storage_blocks/redstone',
    B: '#forge:gears/gold',
    C: '#forge:gears/iron',
    D: '#forge:gears/silver',
    E: '#forge:gears/copper',
    F: 'morphtool:tool'
  })

  removeRecipeByID(e, [
    'morphtool:tool'
  ])
})
