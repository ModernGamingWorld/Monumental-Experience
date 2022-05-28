onEvent('recipes', e => {
	function compressorRecipe(input, output) {
		e.custom({
			type: 'extendedcrafting:compressor',
			powerCost: 31250,
			inputCount: 12000,
			ingredient: Item.of(input).toJson(),
			catalyst: Item.of('extendedcrafting:the_ultimate_catalyst').toJson(),
			result: Item.of(output).toResultJson()
		})
	}

	compressorRecipe('mysticalagradditions:insanium_essence', 'mysticalagradditions:creative_essence')
	compressorRecipe('ae2extras:16m_storage_cell', 'appliedenergistics2:creative_storage_cell')
	compressorRecipe('immersiveengineering:capacitor_hv', 'immersiveengineering:capacitor_creative')
	compressorRecipe('botania:fabulous_pool', 'botania:creative_pool')
	compressorRecipe('rftoolspower:dimensionalcell_advanced', 'rftoolspower:dimensionalcell_creative')
})
