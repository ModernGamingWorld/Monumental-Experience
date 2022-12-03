ServerEvents.recipes(e => {
//Heated
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#thermal:glass/hardened').toJson(),
      Ingredient.of('#forge:dusts/certus_quartz').toJson(),
      Ingredient.of('#forge:dusts/quartz').toJson(),
      Ingredient.of('computercraft:cable').toJson()
    ],
    results: [Item.of('ae2:quartz_fiber').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/ae2/quartz_fiber')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('thermal:obsidian_glass').toJson(),
      Ingredient.of('#forge:dusts/certus_quartz').toJson(),
      Ingredient.of('#forge:dusts/quartz').toJson()
    ],
    results: [Item.of('ae2:quartz_glass').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/ae2/quartz_glass')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:dusts/lapis').toJson(),
      Ingredient.of('#forge:sand').toJson(),
      Ingredient.of('#forge:clay').toJson()
    ],
    results: [Item.of('buildinggadgets:construction_block_powder').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/buildinggadgets/construction_block_powder')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:gems/quartz').toJson(),
      Ingredient.of('#forge:dusts/redstone').toJson()
    ],
    results: [Item.of('create:rose_quartz').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/create/rose_quartz')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:ingots/compressed_iron').toJson(),
      Ingredient.of('#forge:dyes/black').toJson()
    ],
    results: [Item.of('extendedcrafting:black_iron_ingot').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/extendedcrafting/black_iron_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:ingots/enderium').toJson(),
      Ingredient.of('#forge:ingots/compressed_iron').toJson()
    ],
    results: [Item.of('extendedcrafting:ender_ingot').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/extendedcrafting/ender_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:dusts/redstone').toJson(),
      Ingredient.of('#forge:ingots/iron').toJson()
    ],
    results: [Item.of('extendedcrafting:redstone_ingot').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/extendedcrafting/redstone_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:dusts/redstone').toJson(),
      Ingredient.of('#forge:dusts/obsidian').toJson()
    ],
    results: [Item.of('fluxnetworks:flux_dust').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/fluxnetworks/flux_dust')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('forbidden_arcanus:mundabitur_dust').toJson(),
      Ingredient.of('#forge:ingots/gold').toJson(),
      Ingredient.of('#forge:charcoal').toJson(),
      Ingredient.of('#forge:charcoal').toJson(),
      Ingredient.of('#forge:charcoal').toJson(),
      Ingredient.of('forbidden_arcanus:mundabitur_dust').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:charcoal').toJson()
    ],
    results: [Item.of('forbidden_arcanus:deorum_ingot').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/forbidden_arcanus/deorum_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:obsidian').toJson(),
      Ingredient.of('create:andesite_alloy').toJson()
    ],
    results: [Item.of('forbidden_arcanus:obsidian_ingot').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/forbidden_arcanus/obsidian_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:crops/nether_wart').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:nuggets/ender_pearl').toJson(),
      Ingredient.of('#forge:ingots/obsidian').toJson(),
      Ingredient.of('minecraft:blaze_powder').toJson()
    ],
    results: [Item.of('forbidden_arcanus:corrupti_dust', 4).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/forbidden_arcanus/corrupti_dust')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('minecraft:bone_meal').toJson(),
      Ingredient.of('minecraft:phantom_membrane').toJson(),
      Ingredient.of('#forge:gunpowder').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:dusts/redstone').toJson(),
      Ingredient.of('minecraft:blaze_powder').toJson()
    ],
    results: [Item.of('forbidden_arcanus:mundabitur_dust', 4).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/forbidden_arcanus/mundabitur_dust')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('minecraft:ender_eye').toJson(),
      Ingredient.of('#forge:gems/diamond').toJson(),
      Ingredient.of('#forge:gems/emerald').toJson()
    ],
    results: [Item.of('greater_eye:greater_eye').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/greater_eye/greater_eye')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('greater_eye:greater_eye').toJson(),
      Ingredient.of('minecraft:chorus_fruit').toJson(),
    ],
    results: [Item.of('greater_eye:greater_eye_end').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/greater_eye/greater_eye_end')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('greater_eye:greater_eye').toJson(),
      Ingredient.of('#forge:gems/quartz').toJson(),
    ],
    results: [Item.of('greater_eye:greater_eye_end').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/greater_eye/greater_eye_nether')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:dyes/green').toJson(),
      Ingredient.of('#forge:dusts/iron').toJson(),
      Ingredient.of('#forge:sand').toJson()
    ],
    results: [Item.of('immersiveengineering:insulating_glass', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/immersiveengineering/insulating_glass')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:ingots/iron').toJson(),
      Ingredient.of('#minecraft:coals').toJson()
    ],
    results: [Item.of('ironcoals:iron_coal', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/ironcoals/iron_coal')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:ingots/gold').toJson(),
      Ingredient.of('ironcoals:iron_coal').toJson()
    ],
    results: [Item.of('ironcoals:gold_coal', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/ironcoals/gold_coal')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:gems/diamond').toJson(),
      Ingredient.of('ironcoals:gold_coal').toJson()
    ],
    results: [Item.of('ironcoals:diamond_coal', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/ironcoals/diamond_coal')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:gems/emerald').toJson(),
      Ingredient.of('ironcoals:diamond_coal').toJson()
    ],
    results: [Item.of('ironcoals:emerald_coal', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/ironcoals/emerald_coal')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#minecraft:planks').toJson(),
      Ingredient.of('#minecraft:planks').toJson(),
      Ingredient.of('#minecraft:planks').toJson(),
      Ingredient.of('#minecraft:planks').toJson(),
      Ingredient.of('#minecraft:planks').toJson(),
      {fluidTag:"forge:creosote", amount:500}
    ],
    results: [Item.of('immersiveengineering:treated_wood_horizontal', 4).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/immersiveengineering/treated_wood_horizontal')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('minecraft:light_gray_concrete_powder').toJson(),
      Ingredient.of('buildinggadgets:construction_block_powder').toJson(),
      Fluid.of('minecraft:water', 250).toJson()
    ],
    results: [Item.of('immersiveengineering:concrete').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/immersiveengineering/concrete3')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prosperity_shard').toJson(),
      Ingredient.of('mysticalagriculture:prosperity_shard').toJson(),
      Ingredient.of('#forge:gems/diamond').toJson()
    ],
    results: [Item.of('mysticalagriculture:prosperity_gemstone').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/prosperity_gemstone')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:soulium_dust').toJson(),
      Ingredient.of('mysticalagriculture:soulium_dust').toJson(),
      Ingredient.of('mysticalagriculture:prosperity_gemstone').toJson()
    ],
    results: [Item.of('mysticalagriculture:soulium_gemstone').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/soulium_gemstone')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prosperity_gemstone').toJson()
    ],
    results: [Item.of('mysticalagriculture:inferium_gemstone').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/inferium_gemstone')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prosperity_gemstone').toJson()
    ],
    results: [Item.of('mysticalagriculture:prudentium_gemstone').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/prudentium_gemstone')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prosperity_ingot').toJson(),
      Ingredient.of('mysticalagriculture:soulium_dust').toJson(),
      Ingredient.of('mysticalagriculture:soulium_dust').toJson()
    ],
    results: [Item.of('mysticalagriculture:soulium_ingot').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/soulium_ingot')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('forbidden_arcanus:purifying_soap').toJson(),
      Ingredient.of('mysticalagriculture:prosperity_shard').toJson(),
      Ingredient.of('mysticalagriculture:prosperity_shard').toJson()
    ],
    results: [Item.of('mysticalagriculture:prosperity_ingot', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/prosperity_ingot')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prosperity_ingot').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson()
    ],
    results: [Item.of('mysticalagriculture:inferium_ingot').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/inferium_ingot')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('#forge:tools/hoes').toJson(),
      Ingredient.of('#forge:dirt').toJson()
    ],
    results: [Item.of('mysticalagriculture:inferium_farmland', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/inferium_farmland')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('#forge:tools/hoes').toJson(),
      Ingredient.of('mysticalagriculture:inferium_farmland').toJson()
    ],
    results: [Item.of('mysticalagriculture:prudentium_farmland', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/prudentium_farmland')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('#forge:tools/hoes').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_farmland').toJson()
    ],
    results: [Item.of('mysticalagriculture:tertium_farmland', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/tertium_farmland')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('matc:inferium_crystal').toJson()
    ],
    results: [Item.of('mysticalagriculture:prudentium_essence', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/prudentium_essence')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('matc:inferium_crystal').toJson()
    ],
    results: [Item.of('mysticalagriculture:prudentium_crystal', 2).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/prudentium_crystal')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prosperity_ingot').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson()
    ],
    results: [Item.of('mysticalagriculture:prudentium_ingot').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/prudentium_ingot')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:inferium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:inferium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:inferium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:inferium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:watering_can').toJson()
    ],
    results: [Item.of('mysticalagriculture:inferium_watering_can').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/inferium_watering_can')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:inferium_watering_can').toJson()
    ],
    results: [Item.of('mysticalagriculture:prudentium_watering_can').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagriculture/prudentium_watering_can')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('minecraft:golden_apple').toJson()
    ],
    results: [Item.of('mysticalagradditions:inferium_apple').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagradditions/inferium_apple')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagradditions:inferium_apple').toJson()
    ],
    results: [Item.of('mysticalagradditions:prudentium_apple').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagradditions/prudentium_apple')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagradditions:prudentium_apple').toJson()
    ],
    results: [Item.of('mysticalagradditions:tertium_apple').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagradditions/tertium_apple')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('mysticalagriculture:inferium_essence').toJson(),
      Ingredient.of('#minecraft:coals').toJson()
    ],
    results: [Item.of('mysticalagradditions:inferium_coal').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagradditions/inferium_coal')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_essence').toJson(),
      Ingredient.of('mysticalagradditions:inferium_coal').toJson()
    ],
    results: [Item.of('mysticalagradditions:prudentium_coal').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/mysticalagradditions/prudentium_coal')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:ender_pearls').toJson(),
      Ingredient.of('minecraft:blaze_powder').toJson()
    ],
    results: [Item.of('minecraft:ender_eye').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/minecraft/ender_eye')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('industrialforegoing:latex_bucket').toJson(),
      Ingredient.of('#forge:slimeballs').toJson()
    ],
    results: [Item.of('thermal:rubber').toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/thermal/rubber')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:ender_pearls').toJson(),
      Ingredient.of('#forge:dyes/purple').toJson()
    ],
    results: [Item.of('waystones:warp_dust', 4).toJson()],
    heatRequirement: 'heated'
  }).id('monumentalexperience:mixing/heated/waystones/warp_dust')

//Misc
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:clay').toJson(),
      Ingredient.of('#forge:gravel').toJson(),
      Ingredient.of('#forge:sand').toJson(),
      Ingredient.of('#forge:sand').toJson(),
      Fluid.of('minecraft:water', 500).toJson()
    ],
    results: [Fluid.of('immersiveengineering:concrete', 500).toJson()]
  }).id('monumentalexperience:mixing/noheat/immersiveengineering/concrete')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:clay').toJson(),
      Ingredient.of('#forge:gravel').toJson(),
      Ingredient.of('#forge:slag').toJson(),
      Ingredient.of('#forge:slag').toJson(),
      Fluid.of('minecraft:water', 750).toJson()
    ],
    results: [Fluid.of('immersiveengineering:concrete', 750).toJson()]
  }).id('monumentalexperience:mixing/noheat/immersiveengineering/concrete2')

//Super Heated
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:gems/quartz').toJson(),
      Ingredient.of('#forge:dusts/fluix').toJson(),
      Ingredient.of('ae2:logic_processor').toJson()
    ],
    results: [Item.of('ae2:annihilation_core').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/ae2/annihilation_core')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:gems/certus_quartz').toJson(),
      Ingredient.of('#forge:dusts/fluix').toJson(),
      Ingredient.of('ae2:logic_processor').toJson()
    ],
    results: [Item.of('ae2:formation_core').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/ae2/formation_core')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:ingots/enderium').toJson(),
      Ingredient.of('#forge:ingots/enderium').toJson(),
      Ingredient.of('#forge:ingots/enderium').toJson(),
      Ingredient.of('#forge:ingots/enderium').toJson(),
      Ingredient.of('extendedcrafting:ender_star').toJson()
    ],
    results: [Item.of('extendedcrafting:enhanced_ender_ingot').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/extendedcrafting/enhanced_ender_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      Ingredient.of('extendedcrafting:ender_ingot').toJson(),
      Ingredient.of('extendedcrafting:ender_ingot').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_ingot').toJson(),
      Ingredient.of('extendedcrafting:enhanced_ender_ingot').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_ingot').toJson(),
      Ingredient.of('extendedcrafting:crystaltine_ingot').toJson()
    ],
    results: [Item.of('extendedcrafting:the_ultimate_ingot').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/extendedcrafting/the_ultimate_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:nether_stars').toJson(),
      Ingredient.of('#forge:silicon').toJson(),
      Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      Ingredient.of('refinedstorage:processor_binding').toJson(),
    ],
    results: [Item.of('extradisks:raw_withering_processor').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/extradisks/raw_withering_processor')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:workbenches').toJson(),
      Ingredient.of('#forge:gems/quartz').toJson(),
      Ingredient.of('#forge:obsidian').toJson(),
      Ingredient.of('refinedstorage:processor_binding').toJson(),
    ],
    results: [Item.of('extradisks:raw_neural_processor').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/extradisks/raw_neural_processor')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:slimeballs').toJson(),
      Ingredient.of('#forge:gems/prismarine').toJson(),
      Ingredient.of('#minecraft:small_flowers').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('forbidden_arcanus:wax').toJson()
    ],
    results: [Item.of('forbidden_arcanus:purifying_soap').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/forbidden_arcanus/purifying_soap')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:dusts/prismarine').toJson(),
      Ingredient.of('#forge:dusts/prismarine').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('forbidden_arcanus:dragon_scale').toJson()
    ],
    results: [Item.of('forbidden_arcanus:aquatic_dragon_scale').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/forbidden_arcanus/aquatic_dragon_scale')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:ingots/gold').toJson(),
      Ingredient.of('#forge:ingots/gold').toJson(),
      Ingredient.of('#forge:ingots/gold').toJson(),
      Ingredient.of('forbidden_arcanus:dragon_scale').toJson()
    ],
    results: [Item.of('forbidden_arcanus:golden_dragon_scale').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/forbidden_arcanus/golden_dragon_scale')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:dusts/arcane_crystal').toJson(),
      Ingredient.of('#forge:ingots/silver').toJson(),
      Ingredient.of('#forge:ingots/silver').toJson(),
      Ingredient.of('#forge:ingots/silver').toJson(),
      Ingredient.of('forbidden_arcanus:dragon_scale').toJson()
    ],
    results: [Item.of('forbidden_arcanus:silver_dragon_scale').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/forbidden_arcanus/silver_dragon_scale')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('gobber2:gobber2_glob_end').toJson(),
      Ingredient.of('gobber2:gobber2_ingot_nether').toJson(),
      Ingredient.of('gobber2:gobber2_ingot_nether').toJson(),
      Ingredient.of('minecraft:chorus_flower').toJson()
    ],
    results: [Item.of('gobber2:gobber2_ingot_end').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/gobber2/gobber2_ingot_end')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('gobber2:gobber2_glob_nether').toJson(),
      Ingredient.of('gobber2:gobber2_ingot').toJson(),
      Ingredient.of('gobber2:gobber2_ingot').toJson(),
      Ingredient.of('minecraft:netherite_scrap').toJson()
    ],
    results: [Item.of('gobber2:gobber2_ingot_nether').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/gobber2/gobber2_ingot_nether')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:prudentium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson()
    ],
    results: [Item.of('mysticalagriculture:tertium_ingot').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/tertium_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:tertium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson()
    ],
    results: [Item.of('mysticalagriculture:imperium_ingot').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/imperium_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_gemstone').toJson()
    ],
    results: [Item.of('mysticalagriculture:tertium_gemstone').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/tertium_gemstone')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_gemstone').toJson()
    ],
    results: [Item.of('mysticalagriculture:imperium_gemstone').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/imperium_gemstone')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_gemstone').toJson()
    ],
    results: [Item.of('mysticalagriculture:supremium_gemstone').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/supremium_gemstone')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:imperium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson()
    ],
    results: [Item.of('mysticalagriculture:supremium_ingot').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/supremium_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('#forge:tools/hoes').toJson(),
      Ingredient.of('#forge:dirt').toJson()
    ],
    results: [Item.of('mysticalagriculture:imperium_farmland').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/imperium_farmland')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('#forge:tools/hoes').toJson(),
      Ingredient.of('mysticalagriculture:imperium_farmland').toJson()
    ],
    results: [Item.of('mysticalagriculture:supremium_farmland', 2).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/supremium_farmland')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('matc:tertium_crystal').toJson()
    ],
    results: [Item.of('mysticalagriculture:imperium_essence', 2).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/imperium_essence')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('matc:imperium_crystal').toJson()
    ],
    results: [Item.of('mysticalagriculture:supremium_essence', 2).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/supremium_essence')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:tertium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:tertium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:tertium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:tertium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:prudentium_watering_can').toJson()
    ],
    results: [Item.of('mysticalagriculture:tertium_watering_can').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/tertium_watering_can')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:imperium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:imperium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:imperium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:imperium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:tertium_watering_can').toJson()
    ],
    results: [Item.of('mysticalagriculture:imperium_watering_can').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/imperium_watering_can')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:mystical_fertilizer').toJson(),
      Ingredient.of('mysticalagriculture:supremium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:supremium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:supremium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:supremium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:imperium_watering_can').toJson()
    ],
    results: [Item.of('mysticalagriculture:supremium_watering_can').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/supremium_watering_can')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:supremium_ingot').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson()
    ],
    results: [Item.of('mysticalagradditions:insanium_ingot').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/insanium_ingot')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('matc:supremium_crystal').toJson()
    ],
    results: [Item.of('mysticalagradditions:insanium_essence', 2).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/insanium_essence')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_gemstone').toJson()
    ],
    results: [Item.of('mysticalagradditions:insanium_gemstone').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/insanium_gemstone')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('#forge:tools/hoes').toJson(),
      Ingredient.of('mysticalagriculture:supremium_farmland').toJson()
    ],
    results: [Item.of('mysticalagradditions:insanium_farmland', 2).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagriculture/supremium_farmland')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagradditions:tertium_apple').toJson()
    ],
    results: [Item.of('mysticalagradditions:imperium_apple').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/imperium_apple')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagradditions:imperium_apple').toJson()
    ],
    results: [Item.of('mysticalagradditions:supremium_apple').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/supremium_apple')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:supremium_apple').toJson()
    ],
    results: [Item.of('mysticalagradditions:insanium_apple').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/insanium_apple')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagriculture:tertium_essence').toJson(),
      Ingredient.of('mysticalagradditions:prudentium_coal').toJson()
    ],
    results: [Item.of('mysticalagradditions:tertium_coal').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/tertium_coal')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagriculture:imperium_essence').toJson(),
      Ingredient.of('mysticalagradditions:tertium_coal').toJson()
    ],
    results: [Item.of('mysticalagradditions:imperium_coal').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/imperium_coal')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagriculture:supremium_essence').toJson(),
      Ingredient.of('mysticalagradditions:imperium_coal').toJson()
    ],
    results: [Item.of('mysticalagradditions:supremium_coal').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/supremium_coal')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:insanium_essence').toJson(),
      Ingredient.of('mysticalagradditions:supremium_coal').toJson()
    ],
    results: [Item.of('mysticalagradditions:insanium_coal').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/mysticalagradditions/supremium_coal')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:silicon').toJson(),
      Ingredient.of('#forge:silicon').toJson(),
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson()
    ],
    results: [Item.of('refinedstorage:quartz_enriched_iron', 4).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/refinedstorage/quartz_enriched_iron')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('refinedstorage:basic_processor').toJson(),
      Ingredient.of('#forge:dusts/glowstone').toJson(),
    ],
    results: [Item.of('refinedstorage:construction_core').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/refinedstorage/construction_core')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('refinedstorage:basic_processor').toJson(),
      Ingredient.of('#forge:gems/quartz').toJson(),
    ],
    results: [Item.of('refinedstorage:destruction_core').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/refinedstorage/destruction_core')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('extendedcrafting:black_iron_ingot').toJson(),
      Ingredient.of('#forge:silicon').toJson(),
      Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      Ingredient.of('refinedstorage:processor_binding').toJson(),
    ],
    results: [Item.of('refinedstorage:raw_basic_processor').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/refinedstorage/raw_basic_processor')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('#forge:gears/diamond').toJson(),
      Ingredient.of('#forge:silicon').toJson(),
      Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      Ingredient.of('refinedstorage:processor_binding').toJson(),
    ],
    results: [Item.of('refinedstorage:raw_advanced_processor').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/refinedstorage/raw_advanced_processor')
  
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('immersiveengineering:wirecoil_electrum').toJson(),
      Ingredient.of('#forge:silicon').toJson(),
      Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      Ingredient.of('refinedstorage:processor_binding').toJson(),
      Ingredient.of('immersiveengineering:wirecoil_electrum').toJson(),
    ],
    results: [Item.of('refinedstorage:raw_improved_processor').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/refinedstorage/raw_improved_processor')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('thermal:obsidian_glass').toJson(),
      Ingredient.of('thermal:obsidian_glass').toJson(),
      Ingredient.of('#forge:ingots/enderium').toJson()
    ],
    results: [Item.of('thermal:enderium_glass', 2).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/thermal/enderium_glass')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('thermal:obsidian_glass').toJson(),
      Ingredient.of('thermal:obsidian_glass').toJson(),
      Ingredient.of('#forge:ingots/lumium').toJson()
    ],
    results: [Item.of('thermal:lumium_glass', 2).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/thermal/lumium_glass')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('thermal:obsidian_glass').toJson(),
      Ingredient.of('thermal:obsidian_glass').toJson(),
      Ingredient.of('#forge:ingots/signalum').toJson()
    ],
    results: [Item.of('thermal:signalum_glass', 2).toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/thermal/signalum_glass')
  
  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('immersiveengineering:insulating_glass').toJson(),
      Ingredient.of('create:polished_rose_quartz').toJson(),
      Ingredient.of('#forge:ingots/obsidian').toJson()
    ],
    results: [Item.of('thermal:obsidian_glass').toJson()],
    heatRequirement: 'superheated'
  }).id('monumentalexperience:mixing/superheated/thermal/obsidian_glass')
})