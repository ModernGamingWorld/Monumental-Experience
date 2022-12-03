ServerEvents.recipes(e => {

  e.custom({
    type: 'create:filling',
    ingredients: [
      Fluid.of('industrialforegoing:essence', 250).toJson(),
      Ingredient.of('minecraft:glass_bottle').toJson()
    ],
    results: [Item.of('minecraft:experience_bottle').toJson()],
  }).id('monumentalexperience:filling/minecraft/experience_bottle')

  e.custom({
    type: 'create:filling',
    ingredients: [
      Fluid.of('pneumaticcraft:memory_essence', 250).toJson(),
      Ingredient.of('minecraft:glass_bottle').toJson()
    ],
    results: [Item.of('minecraft:experience_bottle').toJson()],
  }).id('monumentalexperience:filling/minecraft/experience_bottle2')

  e.custom({
    type: 'create:filling',
    ingredients: [
      Fluid.of('cofh_core:experience', 250).toJson(),
      Ingredient.of('minecraft:glass_bottle').toJson()
    ],
    results: [Item.of('minecraft:experience_bottle').toJson()],
  }).id('monumentalexperience:filling/minecraft/experience_bottle2')
})