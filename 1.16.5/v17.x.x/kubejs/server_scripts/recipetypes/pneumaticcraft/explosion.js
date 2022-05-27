onEvent('recipes', e => {
	function explosionRecipe(input, outputs, lossRate, id) {
		e.custom({
			type: 'pneumaticcraft:explosion_crafting',
			input: Item.of(input).toJson(),
			results: outputs.map(o => { return Item.of(o).toResultJson() }),
			loss_rate: lossRate
		}).id(`pneumaticcraft:explosion_crafting/${id}`)
	}

	explosionRecipe('#forge:ingots/steel', ['pneumaticcraft:ingot_iron_compressed'], 20, 'ingot_iron_compressed')
})
