onEvent('recipes', e => {
	function bioFuelRecipe(inputs, output) {
		inputs.forEach(input => {
			e.recipes.mekanism.crushing(output, input).id(`mekanism:crushing/bio_fuel_from_${input.replace('#', '').replace(':', '_')}`)
		})
	}

	bioFuelRecipe([
		'#minecraft:leaves',
		'environmental:cattail',
	], '2x mekanism:bio_fuel')

	bioFuelRecipe([
		'#minecraft:small_flowers',
		'#minecraft:tall_flowers',
		'#forge:mushroom_stems',
		'#forge:mushrooms'
	], '5x mekanism:bio_fuel')

	bioFuelRecipe(['#forge:mushroom_caps'], '7x mekanism:bio_fuel')

	e.recipes.mekanism.crushing('minecraft:cobblestone', '#forge:stone').id('mekanism:processing/cobblestone')
	e.recipes.mekanism.crushing('3x buildinggadgets:construction_paste', 'buildinggadgets:construction_block_dense').id('mekanism:processing/construction_paste')
	e.recipes.mekanism.crushing('emendatusenigmatica:silicon_gem', '3x create:limesand').id('mekanism:processing/silicon_gem')
	e.recipes.mekanism.crushing('4x occultism:crushed_end_stone', '#forge:end_stones').id('mekanism:processing/crushed_end_stone')
	e.recipes.mekanism.crushing('3x mekanism:dirty_netherite_scrap', '#forge:ores/netherite_scrap').id('mekanism:processing/netherite/ancient_debris_to_dirty_scrap')
	e.recipes.mekanism.crushing('immersivepetroleum:petcoke_dust', '#forge:coal_petcoke').id('mekanism:processing/petcoke_dust')
	e.recipes.mekanism.crushing('9x immersivepetroleum:petcoke_dust', '#forge:storage_blocks/coal_petcoke').id('mekanism:processing/petcoke_dust_from_block')
	e.recipes.mekanism.crushing('9x emendatusenigmatica:coke_dust', '#forge:storage_blocks/coal_coke').id('mekanism:processing/coke_dust_from_block')
})
