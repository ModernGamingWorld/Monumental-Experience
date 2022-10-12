onEvent('recipes', e => {
  e.shaped('extendedcrafting:basic_table', ['CDC', 'ABA', 'CDC'], {
    A: '#forge:plates/iron',
    B: 'immersiveengineering:craftingtable',
    C: 'extendedcrafting:basic_component',
    D: 'extendedcrafting:basic_catalyst'
  })
  e.shaped('extendedcrafting:advanced_table', ['CDC', 'ABA', 'CDC'], {
    A: '#forge:plates/gold',
    B: 'extendedcrafting:basic_table',
    C: 'extendedcrafting:advanced_component',
    D: 'extendedcrafting:advanced_catalyst'
  })
  e.shaped('extendedcrafting:elite_table', ['CDC', 'ABA', 'CDC'], {
    A: '#forge:plates/diamond',
    B: 'extendedcrafting:advanced_table',
    C: 'extendedcrafting:elite_component',
    D: 'extendedcrafting:elite_catalyst'
  })
  e.shaped('extendedcrafting:ultimate_table', ['CDC', 'BAB', 'CDC'], {
    A: 'extendedcrafting:elite_table',
    B: '#forge:gems/emerald',
    C: 'extendedcrafting:ultimate_component',
    D: 'extendedcrafting:ultimate_catalyst'
  })

  removeRecipeByID(e, [
    'extendedcrafting:basic_table',
    'extendedcrafting:advanced_table',
    'extendedcrafting:elite_table',
    'extendedcrafting:ultimate_table',
    'extendedcrafting:black_iron_slate',
    'extendedcrafting:advanced_catalyst',
    'extendedcrafting:advanced_component',
    'extendedcrafting:basic_catalyst',
    'extendedcrafting:basic_component',
    'extendedcrafting:black_iron_ingot',
    'extendedcrafting:elite_catalyst',
    'extendedcrafting:elite_component',
    'extendedcrafting:ender_ingot',
    'extendedcrafting:enhanced_ender_catalyst',
    'extendedcrafting:crystaltine_catalyst',
    'extendedcrafting:luminessence',
    'extendedcrafting:redstone_catalyst',
    'extendedcrafting:redstone_ingot',
    'extendedcrafting:redstone_component',
    'extendedcrafting:ender_component',
    'extendedcrafting:enhanced_ender_component',
    'extendedcrafting:crystaltine_component',
    'extendedcrafting:the_ultimate_component',
    'extendedcrafting:the_ultimate_catalyst',
    'extendedcrafting:ultimate_catalyst',
    'extendedcrafting:ender_catalyst',
    'extendedcrafting:ultimate_component',
    'extendedcrafting:enhanced_ender_ingot'
  ])
})
