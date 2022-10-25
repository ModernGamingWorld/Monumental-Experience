ServerEvents.recipes(e => {
  e.shaped('buildinggadgets:gadget_building', ['AEA', 'DBD', 'ACA'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:gems/lapis',
    D: '#forge:gears/diamond',
    E: 'create:electron_tube'
  }).id(`monumentalexperience:buildinggadgets/shaped/gadget_building`)
  e.shaped('buildinggadgets:gadget_copy_paste', ['AEA', 'DBD', 'ACA'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:gems/lapis',
    D: '#forge:gems/emerald',
    E: 'create:electron_tube'
  }).id(`monumentalexperience:buildinggadgets/shaped/gadget_copy_paste`)
  e.shaped('buildinggadgets:gadget_destruction', ['AEA', 'DBD', 'ACA'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:plates/lapis',
    D: '#forge:dusts/ender_pearl',
    E: 'create:electron_tube'
  }).id(`monumentalexperience:buildinggadgets/shaped/gadget_destruction`)
  e.shaped('buildinggadgets:gadget_exchanging', ['AEA', 'DBD', 'ACA'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:insulating_glass',
    C: '#forge:gems/arcane_crystal',
    D: '#forge:gems/diamond',
    E: 'create:electron_tube'
  }).id(`monumentalexperience:buildinggadgets/shaped/gadget_exchanging`)

  removeRecipeByID(e, [
    'buildinggadgets:construction_block_powder',
    'buildinggadgets:construction_paste_powder',
    'buildinggadgets:gadget_building',
    'buildinggadgets:gadget_copy_paste',
    'buildinggadgets:gadget_destruction',
    'buildinggadgets:gadget_exchanging'
  ])
})
