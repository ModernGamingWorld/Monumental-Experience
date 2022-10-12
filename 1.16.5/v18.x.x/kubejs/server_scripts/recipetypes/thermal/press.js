onEvent('recipes', e => {
	let gems = ['diamond', 'emerald', 'lapis', 'peridot']
	let ingots = ['aluminum', 'brass', 'cobalt', 'iridium', 'osmium', 'steel', 'zinc']

	gems.forEach(gem => {
		e.recipes.thermal.press(`emendatusenigmatica:${gem}_plate`, [`#forge:gems/${gem}`, 'thermal:press_packing_2x2_die']).energy(600)
		e.recipes.thermal.press(`2x emendatusenigmatica:${gem}_gear`, [`4x #forge:gems/${gem}`, 'thermal:press_gear_die']).energy(600)
	})

	ingots.forEach(ingot => {
		e.recipes.thermal.press(`emendatusenigmatica:${ingot}_plate`, [`#forge:ingots/${ingot}`, 'thermal:press_packing_2x2_die']).energy(600)	
		e.recipes.thermal.press(`2x emendatusenigmatica:${ingot}_gear`, [`4x #forge:ingots/${ingot}`, 'thermal:press_gear_die']).energy(600)
	})

	e.recipes.thermal.press('2x kubejs:compressed_iron_plate', ['4x #forge:ingots/compressed_iron', 'thermal:press_packing_2x2_die']).energy(600)
	e.recipes.thermal.press('1x libraryferret:iron_coins_jtl', ['4x #forge:ingots/iron', 'thermal:press_coin_die']).energy(600)
	e.recipes.thermal.press('1x libraryferret:gold_coins_jtl', ['4x #forge:ingots/gold', 'thermal:press_coin_die']).energy(600)
	e.recipes.thermal.press('1x libraryferret:emerald_coins_jtl', ['4x #forge:gems/emerald', 'thermal:press_coin_die']).energy(600)
	e.recipes.thermal.press('1x libraryferret:diamond_coins_jtl', ['4x #forge:gems/diamond', 'thermal:press_coin_die']).energy(600)
	e.recipes.thermal.press('1x libraryferret:netherite_coins_jtl', ['4x #forge:ingots/netherite', 'thermal:press_coin_die']).energy(600)
	e.recipes.thermal.press('appliedenergistics2:wooden_gear', ['4x #forge:rods/wooden', 'thermal:press_gear_die']).energy(600)
	e.recipes.thermal.press('mekanism:hdpe_sheet', ['mekanism:hdpe_pellet', 'thermal:press_packing_2x2_die']).energy(2400)
})
