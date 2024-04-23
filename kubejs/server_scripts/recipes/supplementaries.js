ServerEvents.recipes(e => {
  removeRecipeByID(e, [
    'supplementaries:soap/piston',
    'supplementaries:flint_block',
    'supplementaries:flax_block',
    'supplementaries:flax_block_uncrafting',
    'supplementaries:flax',
    'supplementaries:flax_seeds'
  ])
})
