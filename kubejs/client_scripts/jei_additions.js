JEIEvents.addItems( e => {
  let itemsToAdd = [
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:mechanist_workbench',
    'earthmobsmod:mud_bucket',
    'forcecraft:fluid_force_source',

    'immersiveengineering:dust_hop_graphite',
    'immersiveengineering:ingot_hop_graphite',
    'immersiveengineering:stick_treated',

    'ftbquests:book',
    'mcwfurnitures:cabinet_drawer',

    'mekanism:ingot_refined_obsidian',
    'mekanism:ingot_refined_glowstone',
    'mekanism:nugget_refined_obsidian',
    'mekanism:nugget_refined_glowstone',
    'mekanism:block_refined_obsidian',
    'mekanism:block_refined_glowstone',
    'minecraft:bucket',

    'rechiseled:chisel',

    'structurize:plain_oak_oak_timber_frame',
    'structurize:double_crossed_oak_oak_timber_frame',
    'structurize:framed_oak_oak_timber_frame',
    'structurize:side_framed_oak_oak_timber_frame',
    'structurize:up_gated_oak_oak_timber_frame',
    'structurize:down_gated_oak_oak_timber_frame',
    'structurize:one_crossed_lr_oak_oak_timber_frame',
    'structurize:one_crossed_rl_oak_oak_timber_frame',
    'structurize:horizontal_plain_oak_oak_timber_frame',
    'structurize:side_framed_horizontal_oak_oak_timber_frame',
    'structurize:clay_oak_shingle',
    'structurize:clay_shingle_slab',
    'skilltree:copper_ring',
    'skilltree:iron_ring',
    'skilltree:golden_ring'
  ]

  itemsToAdd.forEach(i => e.add(i))

  // Ingredient.of(/^mcwbridges:.*spruce_(log_bridge_middle|bridge|bridge_pier|bridge_stair)$/).stacks.forEach(s => e.add(s))
})
