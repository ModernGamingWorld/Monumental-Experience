onEvent('recipes', e => {
	e.recipes.extendedcrafting.shaped_table('refinedstorage:controller', ['ABCBA', 'BDDDB', 'CDEDC', 'BDDDB', 'ABCBA'], {
		A: '#forge:gems/silicon',
		B: 'appliedenergistics2:smooth_sky_stone_block',
		C: 'refinedstorage:advanced_processor',
		D: 'refinedstorage:quartz_enriched_iron',
		E: 'refinedstorage:machine_casing'
	})
	e.recipes.extendedcrafting.shaped_table('storagenetwork:master', ['AABAA', 'ABCBA', 'BCDCB', 'ABCBA', 'AABAA'], {
		A: '#forge:sheetmetals/steel',
		B: 'storagenetwork:kabel',
		C: 'immersiveengineering:circuit_board',
		D: '#forge:gears/diamond'
	})
})
