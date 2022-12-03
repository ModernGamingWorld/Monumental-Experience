ServerEvents.recipes(e => {

  e.custom({
    type: 'create:splashing',
    ingredients: [
      Ingredient.of('cyclic:peat_unbaked').toJson(),
    ],
    results: [Item.of('cyclic:peat_baked').toJson()],
  }).id('monumentalexperience:splashing/cyclic/hdpe_sheet')

  e.custom({
    type: 'create:splashing',
    ingredients: [
      Ingredient.of('buildinggadgets:construction_block_powder').toJson(),
    ],
    results: [Item.of('buildinggadgets:construction_block_dense').toJson()],
  }).id('monumentalexperience:splashing/buildinggadgets/construction_block_dense')
})