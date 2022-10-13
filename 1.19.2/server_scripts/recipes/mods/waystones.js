ServerEvents.recipes(e => {
  e.shaped('3x waystones:return_scroll', ['GEG', 'PPP'], {
    G: 'naturesaura:tainted_gold',
    E: '#forge:dyes/purple',
    P: '#forge:paper'
  })

  removeRecipeByID(e, [
    'waystones:bound_scroll',
    'waystones:return_scroll',
    'waystones:warp_scroll',
    'waystones:warp_stone',
    'waystones:waystone',
    'waystones:warp_dust'
  ])
})
