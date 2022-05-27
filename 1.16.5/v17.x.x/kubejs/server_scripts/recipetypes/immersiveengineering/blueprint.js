onEvent('recipes', e => {
	e.custom({
		type: 'immersiveengineering:blueprint',
		inputs: [{ count: 4, base_ingredient: { item: 'immersiveengineering:wirecoil_copper' } }],
		category: 'components',
		result: Item.of('routerreborn:coppercoil').toResultJson()
	}).id('immersiveengineering:blueprint/copper_coil')

	e.custom({
		type: 'immersiveengineering:blueprint',
		inputs: [
			{ base_ingredient: { item: 'immersiveengineering:wirecoil_redstone' } },
			{ tag: 'forge:dusts/ender' },
			{ tag: 'forge:plates/emerald' },
			{ item: 'rftoolscontrol:network_card' }
		],
		category: 'components',
		result: Item.of('rftoolscontrol:advanced_network_card').toResultJson()
	}).id('immersiveengineering:blueprint/advanced_network_card')
})
