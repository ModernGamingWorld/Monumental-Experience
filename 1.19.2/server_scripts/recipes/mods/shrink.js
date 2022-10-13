ServerEvents.recipes(e => {
  e.shaped('shrink:shrinking_device', ['GDG', 'GEG', 'GPG'], {
    G: '#forge:ingots/steel',
    E: '#forge:glass',
    P: 'immersiveengineering:circuit_board',
    D: 'rftoolsbase:infused_enderpearl'
  })

  removeRecipeByID(e, [
    'shrink:shrinking_device'
  ])
})
