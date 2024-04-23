ServerEvents.recipes(e => {
  removeRecipeByID(e, [
    'ironcoals:diamond_coal_from_chunk',
    'ironcoals:emerald_coal_from_chunk',
    'ironcoals:gold_coal_from_chunk',
    'ironcoals:iron_coal_from_chunk'
  ])
})
