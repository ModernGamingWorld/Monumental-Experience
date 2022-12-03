ServerEvents.recipes(e => {

  e.custom({
    type: 'create:milling',
    ingredients: [
      Ingredient.of('#forge:end_stones').toJson(),
    ],
    processingTime: 150,
    results: [Item.of('occultism:crushed_end_stone', 4).toJson()],
  }).id('monumentalexperience:milling/occultism/crushed_end_stone')
})