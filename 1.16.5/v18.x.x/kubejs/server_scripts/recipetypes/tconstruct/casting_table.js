onEvent('recipes', e => {
	function castingTableRecipe(cast, consumeCast, fluid, fluidAmount, output, coolingTime) {
		e.custom({
			type: 'tconstruct:casting_table',
			cast: Item.of(cast).toJson(),
			cast_consumed: consumeCast,
			fluid: { name: fluid, amount: fluidAmount },
			result: output,
			cooling_time: coolingTime
		})
	}

	let rods = ['copper', 'gold', 'iron', 'diamond', 'lapis', 'emerald', 'steel', 'aluminum', 'brass']
	let plates = ['lumium', 'copper', 'gold', 'iron', 'diamond', 'lapis', 'enderium', 'emerald', 'silver', 'lead', 'nickel', 'steel', 'aluminum', 'tin', 'zinc', 'uranium', 'bronze', 'brass', 'electrum', 'signalum', 'constantan', 'invar']
	let gears = ['lumium', 'copper', 'gold', 'iron', 'diamond', 'lapis', 'quartz', 'emerald', 'silver', 'lead', 'nickel', 'steel', 'aluminum', 'tin', 'zinc', 'uranium', 'bronze', 'brass', 'electrum', 'signalum', 'constantan', 'invar']

	rods.forEach(rod => {
		castingTableRecipe('#tconstruct:casts/multi_use/rod', true, `emendatusenigmatica:molten_${rod}`, 144, `emendatusenigmatica:${rod}_rod`, 57)
		castingTableRecipe('#tconstruct:casts/single_use/rod', true, `emendatusenigmatica:molten_${rod}`, 144, `emendatusenigmatica:${rod}_rod`, 57)
	})
	plates.forEach(plate => {
		castingTableRecipe('#tconstruct:casts/multi_use/plate', true, `emendatusenigmatica:molten_${plate}`, 144, `emendatusenigmatica:${plate}_plate`, 57)
		castingTableRecipe('#tconstruct:casts/single_use/plate', true, `emendatusenigmatica:molten_${plate}`, 144, `emendatusenigmatica:${plate}_plate`, 57)
	})
	gears.forEach(gear => {
		castingTableRecipe('#tconstruct:casts/multi_use/gear', true, `emendatusenigmatica:molten_${gear}`, 144, `emendatusenigmatica:${gear}_gear`, 57)
		castingTableRecipe('#tconstruct:casts/single_use/gear', true, `emendatusenigmatica:molten_${gear}`, 144, `emendatusenigmatica:${gear}_gear`, 57)
	})
})
