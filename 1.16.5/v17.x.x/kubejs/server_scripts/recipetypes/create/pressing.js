onEvent('recipes', e => {
	let ingots = ['enderium', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'osmium', 'tin', 'cobalt', 'bronze', 'constantan', 'cobalt', 'electrum', 'steel', 'invar', 'signalum', 'lumium', 'iridium', 'cast_iron']
	let gems = ['diamond', 'lapis', 'emerald', 'ruby', 'sapphire', 'peridot']

	ingots.forEach(ingot => e.recipes.create.pressing(`emendatusenigmatica:${ingot}_plate`, `#forge:ingots/${ingot}`))
	gems.forEach(gem => e.recipes.create.pressing(`emendatusenigmatica:${gem}_plate`, `#forge:gems/${gem}`))

	e.recipes.create.pressing('mekanism:hdpe_sheet', 'mekanism:hdpe_pellet')
	e.recipes.create.pressing('kubejs:compressed_iron_plate', '#forge:ingots/compressed_iron')
})
