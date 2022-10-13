onEvent('recipes', e => {
  e.shaped('rangedpumps:pump', ['OPO', 'LDL', 'OPO'], {
    O: '#forge:plates/steel',
    P: '#forge:tools/pickaxes',
    L: '#forge:ingots/obsidian',
    D: 'immersiveengineering:fluid_pump',
  })

  removeRecipeByID(e, [
    'rangedpumps:pump'
  ])
})
