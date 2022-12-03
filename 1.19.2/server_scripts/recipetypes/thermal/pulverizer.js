ServerEvents.recipes(e => {
  e.custom({
    type: 'thermal:pulverizer',
    ingredients: [
      Ingredient.of('#forge:end_stones').toJson()
    ],
    results: [Item.of('occultism:crushed_end_stone', 4).toJson()]
  }).id('monumentalexperience:thermal/pulverizer/occultism/crushed_end_stone')

  e.custom({
    type: 'thermal:pulverizer',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:black_iron_slate').toJson()]
  }).id('monumentalexperience:thermal/pulverizer/kubejs/black_iron_slate')
})