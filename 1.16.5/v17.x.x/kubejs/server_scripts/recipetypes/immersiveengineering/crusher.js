onEvent('recipes', e => {
	e.recipes.immersiveengineering.crusher('emendatusenigmatica:obsidian_dust', '#forge:obsidian', [Item.of('minecraft:obsidian').chance(0.75)])
	e.recipes.immersiveengineering.crusher('2x minecraft:sugar', 'minecraft:sugar_cane', [Item.of('minecraft:sugar').chance(0.1)])
	e.recipes.immersiveengineering.crusher('4x occultism:crushed_end_stone', '#forge:end_stones', [Item.of('minecraft:obsidian').chance(0.75)])
})
