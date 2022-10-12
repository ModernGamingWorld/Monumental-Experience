onEvent('recipes', e => {
	e.custom({
		type: 'immersivepetroleum:hydrotreater',
		time: 1,
		energy: 512,
		result: Fluid.of('immersivepetroleum:diesel', 7).toJson(),
		input: Fluid.of('#forge:diesel_sulfur', 7).toJson(),
		secondary_input: Fluid.of('minecraft:water', 7).toJson(),
		secondary_result: Item.of('emendatusenigmatica:sulfur_dust').withChance(0.02).toJson()
	}).id('immersivepetroleum:hydrotreater/sulfur_recovery')
})
