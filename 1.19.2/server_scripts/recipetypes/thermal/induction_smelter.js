ServerEvents.recipes(e => {

  e.custom({
    type: 'thermal:smelter',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('#forge:silicon').toJson()
    ],
    results: [Item.of('refinedstorage:quartz_enriched_iron', 2).toJson()]
  }).id('monumentalexperience:smelter/refinedstorage/quartz_enriched_iron')
})