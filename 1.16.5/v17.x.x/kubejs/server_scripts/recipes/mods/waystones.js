onEvent('recipes', e => {
  e.shaped('3x waystones:return_scroll', ['GEG', 'PPP'], {
    G: 'naturesaura:tainted_gold',
    E: '#forge:dyes/purple',
    P: '#forge:paper'
  })
  e.shaped('3x waystones:bound_scroll', ['DDD', 'GEG', 'PPP'], {
    D: '#forge:dyes/purple',
    G: 'naturesaura:tainted_gold',
    E: 'botania:mana_pearl',
    P: '#forge:paper'
  })
  e.shaped('3x waystones:warp_scroll', ['GDG', 'GEG', 'PPP'], {
    G: 'naturesaura:tainted_gold',
    E: 'botania:mana_pearl',
    P: '#forge:paper',
    D: '#forge:dyes/purple'
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
