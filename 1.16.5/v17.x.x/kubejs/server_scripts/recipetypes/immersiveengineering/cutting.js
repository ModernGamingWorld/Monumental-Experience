onEvent('recipes', e => {
	e.recipes.immersiveengineering.sawmill('6x minecraft:stick', '#minecraft:planks', [{
		stripping: false,
		output: Item.of('emendatusenigmatica:wood_dust').chance(0.25)
	}])
	e.recipes.immersiveengineering.sawmill('6x minecraft:stick', '#minecraft:signs', [{
		stripping: false,
		output: Item.of('emendatusenigmatica:wood_dust').chance(0.25)
	}])
	e.recipes.immersiveengineering.sawmill('3x minecraft:stick', '#minecraft:wooden_slabs', [{
		stripping: false,
		output: Item.of('emendatusenigmatica:wood_dust').chance(0.125)
	}])
	e.recipes.immersiveengineering.sawmill('9x minecraft:stick', '#minecraft:wooden_stairs', [{
		stripping: false,
		output: Item.of('emendatusenigmatica:wood_dust').chance(0.375)
	}])
})
