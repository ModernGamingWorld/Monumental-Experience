onEvent('recipes', e => {
  e.shaped('dis_enchanting_book:dis_enchanting_book', [' R ', 'PXP', ' P '], {
    R: 'ars_nouveau:blaze_fiber',
    P: 'mysticalagriculture:gold_essence',
    X: '#forge:bookshelves',
  })

  removeRecipeByID(e, [
    'dis_enchanting_book:items/dis_enchanting_book'
  ])
})
