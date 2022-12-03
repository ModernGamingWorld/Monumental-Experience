ServerEvents.recipes(e => {

  e.custom({
    type: 'thermal:press',
    ingredients: [
      Ingredient.of('#forge:ingots/compressed_iron', 4).toJson(),
      Ingredient.of('thermal:press_packing_2x2_die').toJson()
    ],
    results: [Item.of('kubejs:compressed_iron_plate', 2).toJson()],
    energy: 600
  }).id('monumentalexperience:thermal/press/kubejs/compressed_iron_plate')
})