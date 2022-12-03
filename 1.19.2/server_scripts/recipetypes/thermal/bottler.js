ServerEvents.recipes(e => {

  e.custom({
    type: 'thermal:bottler',
    ingredients: [
      Ingredient.of('minecraft:glass_bottle').toJson(),
      Fluid.of('minecraft:water', 1000).toJson()
    ],
    results: [Item.of('buildinggadgets:construction_block_dense').toJson()]
  }).id('monumentalexperience:bottler/buildinggadgets/construction_block_dense')

  e.custom({
    type: 'thermal:bottler',
    ingredients: [
      Ingredient.of('minecraft:glass_bottle').toJson(),
      Fluid.of('pneumaticcraft:memory_essence', 250).toJson()
    ],
    results: [Item.of('minecraft:experience_bottle').toJson()]
  }).id('monumentalexperience:bottler/minecraft/experience_bottle')
})