ServerEvents.recipes(e => {
	function explosionRecipe(input, outputs, lossRate, id) {
		e.custom({
			type: 'pneumaticcraft:explosion_crafting',
			input: Item.of(input).toJson(),
			results: outputs.map(o => { return Item.of(o).toJson() }),
			loss_rate: lossRate
		}).id(`pneumaticcraft:explosion_crafting/${id}`)
	}

	explosionRecipe('alltheores:steel_ingot', ['pneumaticcraft:ingot_iron_compressed'], 20, 'ingot_iron_compressed')
})
