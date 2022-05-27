onEvent('recipes', e => {
  let ladders = ['diamond', 'gold', 'iron', 'stone']

  for (let i = 0; i < ladders.length - 1; i++) {
    e.shaped(`2x speedyladders:${ladders[i]}_ladder`, ['NLN', 'NLN', 'NLN'], {
      L: `speedyladders:${ladders[i + 1]}_ladder`,
      N: `#forge:rods/${ladders[i]}`
    })
  }

  removeRecipeByID(e, [
    'speedyladders:iron_ladder',
    'speedyladders:gold_ladder',
    'speedyladders:diamond_ladder'
  ])
})
