ServerEvents.recipes(e => {
	function heatPropertiesRecipe(block, temperature, thermalResistance, transformCold, heatCapacity) {
		e.custom({
			type: 'pneumaticcraft:heat_properties',
			block: block,
			temperature: temperature,
			thermalResistance: thermalResistance,
			transformCold: { block: transformCold },
			heatCapacity: heatCapacity
		})
	}

	heatPropertiesRecipe('alltheores:uranium_block', 438, 500, 'alltheores:lead_block', 500000)
	heatPropertiesRecipe('quark:magma_bricks', 1300, 500, 'minecraft:magma_block', 10000)
})
