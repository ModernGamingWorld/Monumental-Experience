ServerEvents.recipes(e => {
//heated
  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_slate').toJson(),
      Ingredient.of('extendedcrafting:luminessence').toJson(),
      Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      Ingredient.of('extendedcrafting:redstone_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:redstone_component').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/redstone_component')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:redstone_component').toJson(),
      Ingredient.of('extendedcrafting:redstone_component').toJson(),
      Ingredient.of('extendedcrafting:redstone_component').toJson(),
      Ingredient.of('extendedcrafting:redstone_component').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:redstone_catalyst').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/redstone_catalyst')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_slate').toJson(),
      Ingredient.of('extendedcrafting:luminessence').toJson(),
      Ingredient.of('#forge:ingots/steel').toJson(),
      Ingredient.of('#forge:ingots/steel').toJson(),
      Ingredient.of('#forge:ingots/steel').toJson()
    ],
    results: [Item.of('extendedcrafting:basic_component').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/basic_component')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:basic_component').toJson(),
      Ingredient.of('extendedcrafting:basic_component').toJson(),
      Ingredient.of('extendedcrafting:basic_component').toJson(),
      Ingredient.of('extendedcrafting:basic_component').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:basic_catalyst').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/basic_catalyst')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_slate').toJson(),
      Ingredient.of('extendedcrafting:luminessence').toJson(),
      Ingredient.of('#forge:ingots/gold').toJson(),
      Ingredient.of('#forge:ingots/gold').toJson(),
      Ingredient.of('#forge:ingots/gold').toJson()
    ],
    results: [Item.of('extendedcrafting:advanced_component').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/advanced_component')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:advanced_component').toJson(),
      Ingredient.of('extendedcrafting:advanced_component').toJson(),
      Ingredient.of('extendedcrafting:advanced_component').toJson(),
      Ingredient.of('extendedcrafting:advanced_component').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:advanced_catalyst').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/advanced_catalyst')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:ender_component').toJson(),
      Ingredient.of('extendedcrafting:ender_component').toJson(),
      Ingredient.of('extendedcrafting:ender_component').toJson(),
      Ingredient.of('extendedcrafting:ender_component').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:ender_catalyst').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/ender_catalyst')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_slate').toJson(),
      Ingredient.of('extendedcrafting:luminessence').toJson(),
      Ingredient.of('extendedcrafting:ender_ingot').toJson(),
      Ingredient.of('extendedcrafting:ender_ingot').toJson(),
      Ingredient.of('extendedcrafting:ender_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:ender_component').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/ender_component')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('#forge:sandstone').toJson(),
      Ingredient.of('#forge:sandstone').toJson(),
      Ingredient.of('#forge:sandstone').toJson(),
      Ingredient.of('#forge:sandstone').toJson(),
      Ingredient.of('compressium:sand_2').toJson(),
      Ingredient.of('#engineersdecor:brick_blocks').toJson()
    ],
    results: [Item.of('immersiveengineering:alloybrick', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/immersiveengineering/alloybrick')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('immersiveengineering:alloybrick').toJson(),
      Ingredient.of('immersiveengineering:alloybrick').toJson(),
      Ingredient.of('immersiveengineering:alloybrick').toJson(),
      Ingredient.of('immersiveengineering:alloybrick').toJson(),
      Ingredient.of('#forge:sandstone').toJson(),
      Ingredient.of('#forge:storage_blocks/concrete').toJson()
    ],
    results: [Item.of('immersiveengineering:cokebrick', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/immersiveengineering/cokebrick')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('immersiveengineering:cokebrick').toJson(),
      Ingredient.of('#forge:netherbricks/red').toJson(),
      Fluid.of('cyclic:magma', 250).toJson()
    ],
    results: [Item.of('immersiveengineering:blastbrick', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/immersiveengineering/blastbrick')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('minecraft:vine').toJson(),
    ],
    results: [Fluid.of('industrialforegoing:latex', 50).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/industrialforegoing/latex2')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('minecraft:dandelion').toJson(),
    ],
    results: [Fluid.of('industrialforegoing:latex', 50).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/industrialforegoing/latex')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      Ingredient.of('minecraft:smooth_stone').toJson()
    ],
    results: [Item.of('pneumaticcraft:reinforced_stone', 4).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/pneumaticcraft/reinforced_stone')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('#forge:silicon').toJson()
    ],
    results: [Item.of('refinedstorage:quartz_enriched_iron').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/refinedstorage/quartz_enriched_iron')

//Misc
  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('#forge:dusts/wood').toJson(),
      Ingredient.of('#forge:dusts/wood').toJson(),
      Ingredient.of('#forge:dusts/wood').toJson(),
      Ingredient.of('#forge:dusts/wood').toJson(),
      Fluid.of('minecraft:water', 500).toJson()
    ],
    results: [Item.of('minecraft:paper', 6).toJson()],
  }).id('monumentalexperience:compacting/minecraft/paper')

//Super Heated
  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:enhanced_ender_component').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_component').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_component').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_component').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:enhanced_ender_catalyst').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:compacting/superheated/extendedcrafting/enhanced_ender_catalyst')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_slate').toJson(),
      Ingredient.of('extendedcrafting:luminessence').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_ingot').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_ingot').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:enhanced_ender_component').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/enhanced_ender_component')
  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:crystaltine_component').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_component').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_component').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_component').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:crystaltine_catalyst').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:compacting/superheated/extendedcrafting/crystaltine_catalyst')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_slate').toJson(),
      Ingredient.of('extendedcrafting:luminessence').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_ingot').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_ingot').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:crystaltine_component').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/crystaltine_component')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:elite_component').toJson(),
      Ingredient.of('extendedcrafting:elite_component').toJson(),
      Ingredient.of('extendedcrafting:elite_component').toJson(),
      Ingredient.of('extendedcrafting:elite_component').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:elite_catalyst').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:compacting/superheated/extendedcrafting/elite_catalyst')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_slate').toJson(),
      Ingredient.of('extendedcrafting:luminessence').toJson(),
      Ingredient.of('#forge:gems/emerald').toJson(),
      Ingredient.of('#forge:gems/emerald').toJson(),
      Ingredient.of('#forge:gems/emerald').toJson()
    ],
    results: [Item.of('extendedcrafting:ultimate_component').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/ultimate_component')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:ultimate_component').toJson(),
      Ingredient.of('extendedcrafting:ultimate_component').toJson(),
      Ingredient.of('extendedcrafting:ultimate_component').toJson(),
      Ingredient.of('extendedcrafting:ultimate_component').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:ultimate_catalyst').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:compacting/superheated/extendedcrafting/ultimate_catalyst')

  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:basic_component').toJson(),
      Ingredient.of('extendedcrafting:redstone_component').toJson(),
      Ingredient.of('extendedcrafting:ender_component').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_component').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_component').toJson(),
      Ingredient.of('extendedcrafting:ultimate_component').toJson()
    ],
    results: [Item.of('extendedcrafting:the_ultimate_component').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:compacting/heated/extendedcrafting/the_ultimate_component')
  
  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('extendedcrafting:basic_catalyst').toJson(),
      Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      Ingredient.of('extendedcrafting:ender_catalyst').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_catalyst').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_catalyst').toJson(),
      Ingredient.of('extendedcrafting:ultimate_catalyst').toJson()
    ],
    results: [Item.of('extendedcrafting:the_ultimate_catalyst').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:compacting/superheated/extendedcrafting/the_ultimate_catalyst')
  
  e.custom({
    type: 'create:compacting',
    ingredients: [
      Ingredient.of('#forge:plates/steel').toJson(),
      Ingredient.of('immersiveengineering:blastbrick').toJson()
    ],
    results: [Item.of('immersiveengineering:blastbrick_reinforced').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:compacting/superheated/immersiveengineering/blastbrick_reinforced')
})