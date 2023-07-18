ServerEvents.recipes(e => {

  removeRecipeByID(e, [
    'waystones:bound_scroll',
    'waystones:return_scroll',
    'waystones:warp_scroll',
    'waystones:warp_stone',
    'waystones:waystone',
    'waystones:warp_dust'
  ])
})
