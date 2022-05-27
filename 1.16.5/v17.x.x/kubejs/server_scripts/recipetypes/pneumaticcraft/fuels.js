onEvent('recipes', e => {
	function fuelQualityRecipe(fluid, airAmount, burnRate) {
		e.custom({
			type: 'pneumaticcraft:fuel_quality',
			fluid: {
				type: 'pneumaticcraft:fluid',
				fluid: fluid,
				amount: 1000
			},
			air_per_bucket: airAmount * 1000,
			burn_rate: burnRate
		})
	}

	fuelQualityRecipe('mekanismgenerators:bioethanol', 400, 1)
	fuelQualityRecipe('industrialforegoing:biofuel', 400, 1)
	fuelQualityRecipe('immersiveengineering:creosote', 50, 0.25)
})
