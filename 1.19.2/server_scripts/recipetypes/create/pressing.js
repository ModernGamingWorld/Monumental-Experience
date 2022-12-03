ServerEvents.recipes(e => {

  e.custom({
    type: 'create:pressing',
    ingredients: [
      Ingredient.of('mekanism:hdpe_pellet').toJson(),
    ],
    results: [Item.of('mekanism:hdpe_sheet').toJson()],
  }).id('monumentalexperience:pressing/mekanism/hdpe_sheet')

  e.custom({
    type: 'create:pressing',
    ingredients: [
      Ingredient.of('#forge:ingots/compressed_iron').toJson(),
    ],
    results: [Item.of('kubejs:compressed_iron_plate').toJson()],
  }).id('monumentalexperience:pressing/kubejs/compressed_iron_plate')
})