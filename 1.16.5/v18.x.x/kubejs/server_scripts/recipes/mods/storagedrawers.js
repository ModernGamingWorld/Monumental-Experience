onEvent('recipes', e => {
  e.shaped('storagedrawers:drawer_key', ['AB', ' B', ' C'], {
    A: '#forge:nuggets/gold',
    B: '#forge:ingots/gold',
    C: '#minecraft:signs',
  })

  removeRecipeByID(e, [
    'storagedrawers:drawer_key'
  ])
})
