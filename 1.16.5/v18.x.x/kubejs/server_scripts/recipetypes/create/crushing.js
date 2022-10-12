onEvent('recipes', e => {
	let mats = ['copper', 'aluminum', 'silver', 'lead', 'nickel', 'osmium', 'uranium', 'tin', 'zinc', 'cobalt', 'iridium', 'bronze', 'brass', 'constantan', 'steel', 'invar', 'signalum', 'lumium', 'electrum']

	let ingotToDust = (material) => {
		e.recipes.create.crushing([
			`emendatusenigmatica:${material}_dust`,
		], `emendatusenigmatica:${material}_ingot`).id(`create:crushing/ingot_to_dust/${material}`)
	}

	mats.forEach(mat => ingotToDust(mat))

	e.recipes.create.crushing('emendatusenigmatica:emerald_dust', 'minecraft:emerald').id('create:crushing/gem_to_dust/emerald')
	e.recipes.create.crushing('emendatusenigmatica:lapis_dust', 'minecraft:lapis_lazuli').id('create:crushing/gem_to_dust/lapis')
	e.recipes.create.crushing('emendatusenigmatica:fluorite_dust', 'emendatusenigmatica:fluorite_gem').id('create:crushing/gem_to_dust/fluorite')
	e.recipes.create.crushing('emendatusenigmatica:cinnabar_dust', 'emendatusenigmatica:cinnabar_gem').id('create:crushing/gem_to_dust/cinnabar')
	e.recipes.create.crushing('emendatusenigmatica:apatite_dust', 'emendatusenigmatica:apatite_gem').id('create:crushing/gem_to_dust/apatite')
	e.recipes.create.crushing('emendatusenigmatica:sulfur_dust', 'emendatusenigmatica:sulfur_gem').id('create:crushing/gem_to_dust/sulfer')
	e.recipes.create.crushing('emendatusenigmatica:potassium_nitrate_dust', 'emendatusenigmatica:potassium_nitrate_gem').id('create:crushing/gem_to_dust/potassium_nitrate')
	e.recipes.create.crushing('emendatusenigmatica:dimensional_dust', 'emendatusenigmatica:dimensional_gem').id('create:crushing/gem_to_dust/dimensional')

	e.recipes.create.crushing([
		'3x buildinggadgets:construction_paste',
		Item.of('buildinggadgets:construction_paste').withChance(0.75),
		Item.of('buildinggadgets:construction_paste').withChance(0.5)
	], 'buildinggadgets:construction_block_dense').id('create:crushing/construction_paste')

	e.recipes.create.crushing([
		'atum:emmer_flour',
		Item.of('atum:emmer_flour', 2).withChance(0.25),
		Item.of('atum:emmer_seeds').withChance(0.25)
	], 'atum:emmer').id('create:crushing/emmer_flour')
})
