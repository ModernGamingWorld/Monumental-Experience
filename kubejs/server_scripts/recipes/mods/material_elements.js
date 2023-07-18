ServerEvents.recipes(e => {
  e.shapeless(Item.of('material_elements:leather_sheet'), ['#forge:leather', '#forge:leather', '#forge:string', '#material_elements:leather_cutters'])

  removeRecipeByID(e, [
    'material_elements:leather/leather_sheet_from_leather',
    'material_elements:leather/leather_shears',
    'material_elements:silver_rod_from_silver_ingot',
    'material_elements:iron_rod_from_iron_ingot',
    'material_elements:steel_rod_from_steel_ingot',
    'material_elements:gold_rod_from_gold_ingot',
    'material_elements:copper_rod_from_copper_ingot'
  ])
})
