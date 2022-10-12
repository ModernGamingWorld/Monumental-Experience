onEvent('recipes', e => {
	e.recipes.mekanism.enriching('create:wheat_flour', '#forge:grain')
	e.recipes.mekanism.enriching('3x druidcraft:amber', '#forge:ores/amber')
	e.recipes.mekanism.enriching('2x minecraft:sugar', 'minecraft:sugar_cane')
	e.recipes.mekanism.enriching('4x minecraft:blaze_powder', 'minecraft:blaze_rod')
	e.recipes.mekanism.enriching('3x minecraft:quartz', '#forge:ores/quartz').id('mekanism:processing/quartz/from_ore')
	e.recipes.mekanism.enriching('mekanism:hdpe_sheet', 'mekanism:hdpe_pellet').id('mekanism:enriching/hdpe_sheet')
	e.recipes.mekanism.enriching('minecraft:netherite_scrap', 'mekanism:dirty_netherite_scrap').id('mekanism:processing/netherite/from_dirty_scrap')
})
