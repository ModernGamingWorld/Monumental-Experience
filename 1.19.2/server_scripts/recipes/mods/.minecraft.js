ServerEvents.recipes(e => {
  e.shapeless('minecraft:chest', '#forge:chests/wooden')
  e.shapeless('minecraft:crafting_table', '#forge:workbenches')

  e.shaped('2x minecraft:torch', ['A', 'B'], {
    A: '#forge:chunks/coal',
    B: '#forge:rods/wooden'
  }).id(`monumentalexperience:minecraft/shaped/torch`)
  e.shaped('2x minecraft:redstone_torch', ['A', 'B'], {
    A: 'extendedcrafting:redstone_nugget',
    B: '#forge:rods/wooden'
  }).id(`monumentalexperience:minecraft/shaped/compass`)
  e.shaped('1x minecraft:stick', ['A', 'A'], {
    A: 'biomesoplenty:cattail'
  }).id(`monumentalexperience:minecraft/shaped/redstone_torch`)
  e.shaped('2x minecraft:soul_torch', ['A', 'B', 'C'], {
    A: '#forge:chunks/coal',
    B: '#forge:rods/wooden',
    C: '#minecraft:soul_fire_base_blocks'
  }).id(`monumentalexperience:minecraft/shaped/soul_torch`)
  e.shaped('minecraft:piston', ['TTT', 'PXP', 'PRP'], {
    R: 'extendedcrafting:redstone_ingot',
    P: 'immersiveengineering:concrete',
    T: '#minecraft:planks',
    X: '#forge:gears/iron',
  }).id(`monumentalexperience:minecraft/shaped/piston`)
  e.shaped('minecraft:sticky_piston', ['TTT', 'PXP', 'PRP'], {
    R: 'extendedcrafting:redstone_ingot',
    P: 'immersiveengineering:concrete',
    T: '#minecraft:planks',
    X: '#forge:slimeballs',
  }).id(`monumentalexperience:minecraft/shaped/sticky_piston`)
  e.shaped('minecraft:compass', [' S ', 'SQS', ' S '], {
    Q: 'extendedcrafting:redstone_ingot',
    S: '#forge:plates/iron',
  }).id(`monumentalexperience:minecraft/shaped/compass`)

  removeRecipeByID(e, [
    'minecraft:limestone_axe',
    'minecraft:limestone_pickaxe',
    'minecraft:limestone_sword',
    'minecraft:limestone_hoe',
    'minecraft:stone_pickaxe',
    'minecraft:stone_pressure_plate',
    'minecraft:oak_pressure_plate',
    'minecraft:spruce_pressure_plate',
    'minecraft:birch_pressure_plate',
    'minecraft:jungle_pressure_plate',
    'minecraft:acacia_pressure_plate',
    'minecraft:dark_oak_pressure_plate',
    'minecraft:crimson_pressure_plate',
    'minecraft:warped_pressure_plate',
    'minecraft:mangrove_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:light_weighted_pressure_plate',
    'minecraft:heavy_weighted_pressure_plate',
    'minecraft:stone_axe',
    'minecraft:stone_hoe',
    'minecraft:stone_shovel',
    'minecraft:stone_sword',
    'minecraft:golden_pickaxe',
    'minecraft:golden_axe',
    'minecraft:golden_hoe',
    'minecraft:golden_shovel',
    'minecraft:golden_sword',
    'minecraft:golden_leggings',
    'minecraft:golden_helmet',
    'minecraft:golden_chestplate',
    'minecraft:golden_boots',
    'minecraft:iron_pickaxe',
    'minecraft:iron_axe',
    'minecraft:iron_hoe',
    'minecraft:iron_shovel',
    'minecraft:iron_sword',
    'minecraft:iron_leggings',
    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_boots',
    'minecraft:diamond_pickaxe',
    'minecraft:diamond_helmet',
    'minecraft:diamond_axe',
    'minecraft:diamond_hoe',
    'minecraft:diamond_shovel',
    'minecraft:diamond_sword',
    'minecraft:diamond_leggings',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_boots',
    'minecraft:compass',
    'minecraft:shield',
    'minecraft:bow',
    'minecraft:crossbow',
    'minecraft:torch',
    'minecraft:torch_from_animal_oil_bottle',
    'minecraft:torch',
    'minecraft:soul_torch',
    'minecraft:redstone_torch',
    'minecraft:sticky_piston',
    'minecraft:piston',
    'minecraft:stone_pressure_plate',
    'minecraft:oak_pressure_plate',
    'minecraft:spruce_pressure_plate',
    'minecraft:birch_pressure_plate',
    'minecraft:jungle_pressure_plate',
    'minecraft:acacia_pressure_plate',
    'minecraft:dark_oak_pressure_plate',
    'minecraft:crimson_pressure_plate',
    'minecraft:warped_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:light_weighted_pressure_plate',
    'minecraft:heavy_weighted_pressure_plate',
    'minecraft:hopper',
    'minecraft:smithing_table',
    'minecraft:compass'
  ])
})
