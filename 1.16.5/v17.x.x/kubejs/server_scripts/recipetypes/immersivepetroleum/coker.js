onEvent('recipes', e => {
	e.custom({
		type: 'immersivepetroleum:coker',
		result: Item.of('immersivepetroleum:petcoke').toResultJson(),
		resultfluid: Fluid.of('#forge:diesel_sulfur', 27).toJson(),
		input: Item.of('2x #forge:gems/bitumen').toJson(),
		inputfluid: Fluid.of('minecraft:water', 125).toJson(),
		time: 30,
		energy: 1024
	}).id('immersivepetroleum:coking/petcoke')
})
