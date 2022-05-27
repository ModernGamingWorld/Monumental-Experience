onEvent('recipes', e => {
	e.recipes.create.splashing('cyclic:peat_baked', 'cyclic:peat_unbaked')
	e.recipes.create.splashing('upgrade_aquatic:driftwood_log', '#minecraft:logs')
	e.recipes.create.splashing([Item.of('emendatusenigmatica:silicon_gem').chance(0.5), Item.of('emendatusenigmatica:silicon_gem').chance(0.25)], 'create:limesand')
	e.recipes.create.splashing('buildinggadgets:construction_block_dense', 'buildinggadgets:construction_block_powder')
})
