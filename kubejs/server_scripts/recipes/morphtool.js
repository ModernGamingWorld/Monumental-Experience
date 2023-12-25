ServerEvents.recipes(e => {
  e.shaped('morphtool:tool', ['AB ', 'CD ', '  D'], {
    A: '#forge:dyes/blue',
    B: '#forge:dyes/red',
    C: '#forge:dyes/green',
    D: '#forge:plates/iron'
  })
  e.shaped(Item.of('morphtool:tool', {
    'morphtool:data': {
      astralsorcery: { id: 'astralsorcery:wand', },
      ae2: { id: 'ae2:certus_quartz_wrench', },
      ad_astra: { id: 'ad_astra:wrench', },
      additionaladditions: { id: 'additionaladditions:wrench', tag: { Damage: 0 } },
      botania: { id: 'botania:twig_wand', tag: { color1: 0, color2: 0 } },
      bloodmagic: { id: 'bloodmagic:ritualtinkerer', },
      create: { id: 'create:wrench', },
      cyclic: { id: 'cyclic:cable_wrench', },
      chiselsandbits: { id: 'chiselsandbits:wrench', tag:{}} },
      fluxnetworks: { id: 'fluxnetworks:flux_configurator', },
      framedblocks: { id: 'framedblocks:framed_wrench', },
      immersiveengineering: { id: 'immersiveengineering:hammer', tag: { Damage: 0 } },
      laserio: { id: 'laserio:laser_wrench', },
      littlelogistics: { id: 'littlelogistics:conductors_wrench', },
      mekanism: { id: 'mekanism:configurator', },
      mcwroofs: { id: 'mcwroofs:roofing_hammer', },
      mcwwindows: { id: 'mcwwindows:roofing_hammer', },
      pneumaticcraft: { id: 'pneumaticcraft:pneumatic_wrench', },
      supplementaries: { id: 'supplementaries:wrench', tag: { Damage: 0 } },
      transport: { id: 'transport:rail_breaker', },
      thermal: { id: 'thermal:wrench', },
      rftoolsbase: { id: 'rftoolsbase:smartwrench', },
      refinedstorage: { id: 'refinedstorage:wrench', },
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
    'morphtool:tool',
  ])
})
