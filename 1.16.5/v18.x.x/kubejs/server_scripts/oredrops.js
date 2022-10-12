onEvent('block.loot_tables', e => {
	let resourceList = ['coal', 'iron', 'gold', 'diamond', 'emerald', 'lapis', 'redstone', 'copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'osmium', 'tin', 'zinc', 'certus_quartz', 'charged_certus_quartz', 'fluorite', 'cinnabar', 'apatite', 'sulfur', 'potassium_nitrate']

	let addBlockDrop = (selector, resource, type, min, max) => {
		if (min && max) {
			e.addBlock(selector, table => {
				table.addPool(pool => {
					pool.setUniformRolls(min, max)
					pool.survivesExplosion()
					pool.addEntry({ type: 'minecraft:item', name: `emendatusenigmatica:${resource}_${type}` })
				})
			})
		} else {
			e.addSimpleBlock(selector, `emendatusenigmatica:${resource}_${type}`)
		}
	}

	resourceList.forEach(r => {
		// Overworld
		addBlockDrop(`#forge:ores/${r}`, r, 'chunk')
		// Nether
		addBlockDrop(`emendatusenigmatica:${r}_netherrack_ore`, r, 'chunk', 1, 2)
		addBlockDrop(`emendatusenigmatica:${r}_soul_soil_ore`, r, 'chunk', 1, 2)
		addBlockDrop(`emendatusenigmatica:${r}_nylium_soul_soil_ore`, r, 'chunk', 1, 2)
		// End
		addBlockDrop(`emendatusenigmatica:${r}_end_stone_ore`, r, 'cluster')
	})
})
