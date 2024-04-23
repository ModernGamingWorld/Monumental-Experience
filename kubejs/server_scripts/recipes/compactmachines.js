ServerEvents.recipes(e => {
  e.shaped(Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:item' } }), ['ABA', 'BCB', 'DBD'], {
    A: '#modernrecipes:hoppers',
    B: 'rftoolsbase:dimensionalshard',
    C: 'occultism:wormhole_frame',
    D: '#forge:chests'
  })
  removeRecipeByID(e, [
    'compactmachines:tunnels/item',
  ])
})
