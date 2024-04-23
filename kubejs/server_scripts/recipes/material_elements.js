ServerEvents.recipes(e => {
  e.shapeless(Item.of('material_elements:leather_sheet'), ['#forge:leather', '#forge:leather', '#forge:string', '#material_elements:leather_cutters'])

  removeRecipeByID(e, [
    'material_elements:leather/leather_sheet_from_leather',
    'material_elements:leather/leather_shears'
  ])
})
