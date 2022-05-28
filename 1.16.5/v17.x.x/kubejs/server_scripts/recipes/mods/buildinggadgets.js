onEvent('recipes', e => {
  e.shaped('buildinggadgets:gadget_building', ['AEA', 'DBD', 'ACA'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis',
    D: '#forge:gears/diamond',
    E: 'create:electron_tube'
  })
  e.shaped('buildinggadgets:gadget_copy_paste', ['AEA', 'DBD', 'ACA'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis',
    D: '#forge:gears/emerald',
    E: 'create:electron_tube'
  })
  e.shaped('buildinggadgets:gadget_destruction', ['AEA', 'DBD', 'ACA'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis',
    D: '#forge:dusts/ender_pearl',
    E: 'create:electron_tube'
  })
  e.shaped('buildinggadgets:gadget_exchanging', ['AEA', 'DBD', 'ACA'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis',
    D: '#forge:gears/diamond',
    E: 'create:electron_tube'
  })

  removeRecipeByID(e, [
    'buildinggadgets:construction_block_powder',
    'buildinggadgets:construction_paste_powder',
    'buildinggadgets:gadget_building',
    'buildinggadgets:gadget_copy_paste',
    'buildinggadgets:gadget_destruction',
    'buildinggadgets:gadget_exchanging'
  ])
})
