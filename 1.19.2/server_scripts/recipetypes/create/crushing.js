ServerEvents.recipes(e => {

  e.custom({
    type: 'create:crushing',
    ingredients: [
      Ingredient.of('buildinggadgets:construction_block_dense').toJson(),
    ],
    results: [Item.of('buildinggadgets:construction_paste', 3).toJson()],
  }).id('monumentalexperience:crushing/buildinggadgets/construction_paste')
})