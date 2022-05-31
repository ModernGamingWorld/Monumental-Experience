onEvent('recipes', e => {
  e.shapeless('minecraft:chest', '#forge:chests/wooden')
  e.shapeless('minecraft:crafting_table', '#forge:workbenches')

  e.shaped('2x minecraft:torch', ['A', 'B'], {
    A: '#forge:chunks/coal',
    B: '#forge:rods/wooden'
  })
  e.shaped('2x minecraft:redstone_torch', ['A', 'B'], {
    A: '#forge:chunks/redstone',
    B: '#forge:rods/wooden'
  })
  e.shaped('2x minecraft:soul_torch', ['A', 'B', 'C'], {
    A: '#forge:chunks/coal',
    B: '#forge:rods/wooden',
    C: '#minecraft:soul_fire_base_blocks'
  })
  e.shaped('minecraft:piston', ['TTT', 'PXP', 'PRP'], {
    R: 'extendedcrafting:redstone_ingot',
    P: 'immersiveengineering:concrete',
    T: '#forge:plates/wooden',
    X: '#forge:gears/iron',
  })
  e.shaped('minecraft:sticky_piston', ['TTT', 'PXP', 'PRP'], {
    R: 'extendedcrafting:redstone_ingot',
    P: 'immersiveengineering:concrete',
    T: '#forge:plates/wooden',
    X: '#forge:slimeballs',
  })
  e.shaped('minecraft:compass', [' S ', 'SQS', ' S '], {
    Q: 'extendedcrafting:redstone_ingot',
    S: '#forge:plates/iron',
  })
  e.shaped('minecraft:hopper', ['L L', 'LXL', ' L '], {
    X: 'woodenutilities:wooden_hopper',
    L: '#forge:plates/iron'
  })

  e.remove({ output: /minecraft:.*bed/ })
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
