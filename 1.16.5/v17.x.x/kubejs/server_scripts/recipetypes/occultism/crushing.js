onEvent('recipes', e => {
	function crushingRecipe(input, output, time, id) {
		e.custom({
			type: 'occultism:crushing',
			ingredient: Item.of(input).toJson(),
			result: Item.of(output).toResultJson(),
			crushing_time: time
		}).id(id)
	}

	crushingRecipe('#forge:grain', 'create:wheat_flour', 400)
	crushingRecipe('#forge:obsidian', '4x emendatusenigmatica:obsidian_dust', 400).id('occultism:crushing/obsidian_dust')
	crushingRecipe('#forge:end_stones', '4x occultism:crushed_end_stone', 200).id('occultism:crushing/crushed_end_stone')
	crushingRecipe('minecraft:sugar_cane', '2x minecraft:sugar', 400)
})
