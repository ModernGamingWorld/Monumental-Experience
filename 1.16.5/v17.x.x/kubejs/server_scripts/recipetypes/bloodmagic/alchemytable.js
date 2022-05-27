onEvent('recipes', e => {
	function alchemyTableRecipe(inputs, output, syphon, ticks, orbLevel, id) {
		e.recipes.bloodmagic
			.alchemytable(Item.of(output), inputs)
			.syphon(syphon)
			.ticks(ticks)
			.upgradeLevel(orbLevel)
			.id(`bloodmagic:alchemytable/${id}`)
	}

	alchemyTableRecipe(['#forge:crops/potato', '#forge:crops/potato', '#forge:crops/potato', '#forge:fertilizer'], 'bloodmagic:plantoil', 100, 100, 1, 'plantoil_from_taters')
	alchemyTableRecipe(['#forge:crops/wheat', '#forge:crops/wheat', '#forge:crops/wheat', '#forge:fertilizer'], 'bloodmagic:plantoil', 100, 100, 1, 'plantoil_from_wheat')
	alchemyTableRecipe(['minecraft:coal', 'minecraft:coal'], '2x emendatusenigmatica:coal_dust', 400, 200, 1, 'sand_coal')
	alchemyTableRecipe(['#forge:gravel', '#forge:gravel', '#forge:gravel'], '3x minecraft:flint', 50, 20, 0, 'flint_from_gravel')
	alchemyTableRecipe(['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'], '4x minecraft:leather', 100, 200, 1, 'leather_from_flesh')
	alchemyTableRecipe(['#forge:sand', '#forge:sand', '#forge:buckets/water'], '2x minecraft:clay', 50, 100, 2, 'clay_from_sand')
	alchemyTableRecipe(['#forge:rods/blaze'], '4x minecraft:blaze_powder', 50, 20, 1, 'blaze_powder_from_rods')
	alchemyTableRecipe(['#forge:dirt', '#forge:fertilizer', '#forge:mushrooms'], 'minecraft:mycelium', 200, 200, 1, 'dirt_from_mushrooms')
	alchemyTableRecipe(['#forge:dirt', '#forge:fertilizer', '#minecraft:leaves'], 'minecraft:podzol', 200, 200, 1, 'dirt_from_leaves')
})
