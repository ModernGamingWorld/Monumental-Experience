ServerEvents.recipes(e => {
  e.shaped('torchmaster:megatorch', ['TTT', 'GLG', 'DLD'], {
    T: 'reliquary:sojourner_staff',
    G: '#forge:storage_blocks/gold',
    D: '#forge:storage_blocks/diamond',
    L: '#minecraft:logs'
  })
  e.shaped('torchmaster:dreadlamp', ['TTT', 'GDG', 'TLT'], {
    T: '#forge:obsidian',
    G: '#forge:glass_panes',
    D: 'reliquary:lantern_of_paranoia',
    L: '#forge:dyes/black'
  })

  removeRecipeByID(e, [
    'torchmaster:megatorch',
    'torchmaster:dreadlamp'
  ])
})
