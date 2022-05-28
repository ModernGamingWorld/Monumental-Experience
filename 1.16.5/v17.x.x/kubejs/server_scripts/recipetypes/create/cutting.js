onEvent('recipes', e => {
	e.recipes.create.cutting(['6x minecraft:stick', Item.of('emendatusenigmatica:wood_dust').chance(0.25), Item.of('mysticalagriculture:wood_essence').chance(0.020)], '#minecraft:planks')
	e.recipes.create.cutting(['6x minecraft:stick', Item.of('emendatusenigmatica:wood_dust').chance(0.25), Item.of('mysticalagriculture:wood_essence').chance(0.020)], '#minecraft:signs')
	e.recipes.create.cutting(['3x minecraft:stick', Item.of('emendatusenigmatica:wood_dust').chance(0.125), Item.of('mysticalagriculture:wood_essence').chance(0.020)], '#minecraft:wooden_slabs')
	e.recipes.create.cutting(['9x minecraft:stick', Item.of('emendatusenigmatica:wood_dust').chance(0.375), Item.of('mysticalagriculture:wood_essence').chance(0.020)], '#minecraft:wooden_stairs')
})
