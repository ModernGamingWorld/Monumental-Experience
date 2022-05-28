onEvent('recipes', e => {
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
