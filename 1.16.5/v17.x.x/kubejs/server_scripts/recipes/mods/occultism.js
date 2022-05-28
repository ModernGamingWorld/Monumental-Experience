onEvent('recipes', e => {
  removeRecipeByID(e, [
    'occultism:crafting/iesnium_pickaxe',
    'occultism:crafting/copper_ingot_from_nuggets',
    'occultism:crafting/copper_ingot_from_block',
    'occultism:crafting/silver_ingot_from_nuggets',
    'occultism:crafting/silver_ingot_from_block',
    'occultism:blasting/copper_ingot',
    'occultism:blasting/copper_ingot_from_dust',
    'occultism:smelting/copper_ingot',
    'occultism:smelting/copper_ingot_from_dust'
  ])
})
