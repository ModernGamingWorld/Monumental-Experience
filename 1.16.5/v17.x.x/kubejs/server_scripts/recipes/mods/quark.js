onEvent('recipes', e => {
  removeRecipeByID(e, [
    'quark:automation/crafting/obsidian_pressure_plate',
    'quark:building/crafting/chests/chest_revert',
    'quark:tweaks/crafting/utility/tools/stone_axe'
  ])
})
