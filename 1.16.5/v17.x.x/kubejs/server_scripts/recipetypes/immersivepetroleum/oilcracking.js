onEvent('recipes', e => {
	e.custom({
		type: 'immersivepetroleum:distillation',
		byproducts: [Item.of('emendatusenigmatica:bitumen_gem').withChance(0.07).toJson()],
		results: [
			Fluid.of('immersivepetroleum:lubricant', 9).toJson(),
			Fluid.of('immersivepetroleum:diesel_sulfur', 14).toJson(),
			Fluid.of('immersivepetroleum:gasoline', 39).toJson()
		],
		input: Fluid.of('#forge:crude_oil', 75).toJson(),
		time: 1,
		energy: 2048
	}).id('immersivepetroleum:distillation/oilcracking')
})
