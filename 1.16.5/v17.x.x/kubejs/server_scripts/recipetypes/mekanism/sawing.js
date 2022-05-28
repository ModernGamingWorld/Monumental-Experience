onEvent('recipes', e => {
	e.recipes.mekanism.sawing('emendatusenigmatica:wood_dust', '#forge:rods/wooden', Item.of('emendatusenigmatica:wood_dust').chance(0.05))
	e.recipes.mekanism.sawing('6x minecraft:stick', '#minecraft:planks', Item.of('emendatusenigmatica:wood_dust').chance(0.25)).id('mekanism:sawing/planks')
	e.recipes.mekanism.sawing('6x minecraft:stick', '#minecraft:signs', Item.of('emendatusenigmatica:wood_dust').chance(0.25)).id('mekanism:sawing/signs')
	e.recipes.mekanism.sawing('3x minecraft:stick', '#minecraft:wooden_slabs', Item.of('emendatusenigmatica:wood_dust').chance(0.125)).id('mekanism:sawing/slabs')
	e.recipes.mekanism.sawing('3x minecraft:stick', '#minecraft:wooden_doors', Item.of('emendatusenigmatica:wood_dust').chance(0.125)).id('mekanism:sawing/doors')
	e.recipes.mekanism.sawing('9x minecraft:stick', '#minecraft:wooden_stairs', Item.of('emendatusenigmatica:wood_dust').chance(0.375)).id('mekanism:sawing/stairs')
	e.recipes.mekanism.sawing('3x minecraft:stick', 'woodenutilities:crafting_slab', Item.of('emendatusenigmatica:wood_dust').chance(0.125)).id('mekanism:sawing/crafting_slab')
})
