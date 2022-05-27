onEvent('recipes', e => {
	function pyrolyzerRecipe(input, outputs, xp, energy, id) {
		e.custom({
			type: 'thermal:pyrolyzer',
			ingredient: input,
			result: outputs,
			experience: xp,
			energy: energy
		}).id(`thermal:machine/pyrolyzer/pyrolyzer_${id}`)
	}

	pyrolyzerRecipe('#minecraft:logs', [Item.of('minecraft:charcoal'), Fluid.of('immersiveengineering:creosote', 125).toJson()], 0.15, 2000, 'logs')
	pyrolyzerRecipe('#forge:gems/bitumen', [Item.of('emendatusenigmatica:coke_gem'), Item.of('thermal:tar').withChance(0.5).toJson(), Fluid.of('thermal:heavy_oil', 50).toJson()], 0.15, 4000, 'bitumen')
	pyrolyzerRecipe('#forge:gems/coal', [Item.of('emendatusenigmatica:coke_gem'), Item.of('thermal:tar').withChance(0.25).toJson(), Fluid.of('immersiveengineering:creosote', 250).toJson()], 0.15, 4000, 'coal')
})
