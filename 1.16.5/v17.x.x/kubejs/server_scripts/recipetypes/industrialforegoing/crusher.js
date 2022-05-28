onEvent('recipes', e => {
	e.custom({
		type: 'industrialforegoing:crusher',
		input: Item.of('create:limesand').toJson(),
		output: Item.of('emendatusenigmatica:silicon_gem').toJson()
	}).id('industrialforegoing:crusher/silicon_gem')

	e.custom({
		type: 'industrialforegoing:crusher',
		input: Item.of('#forge:cobblestone').toJson(),
		output: Item.of('minecraft:gravel').toJson()
	}).id('industrialforegoing:crusher/cobble_gravel')

	e.custom({
		type: 'industrialforegoing:crusher',
		input: Item.of('#forge:gravel').toJson(),
		output: Item.of('minecraft:sand').toJson()
	}).id('industrialforegoing:crusher/gravel_sand')

	e.custom({
		type: 'industrialforegoing:crusher',
		input: Item.of('minecraft:red_sandstone').toJson(),
		output: Item.of('minecraft:red_sand').toJson()
	}).id('industrialforegoing:crusher/red_sandstone_sand')

	e.custom({
		type: 'industrialforegoing:crusher',
		input: Item.of('minecraft:sandstone').toJson(),
		output: Item.of('minecraft:sand').toJson()
	}).id('industrialforegoing:crusher/sandstone_sand')
})
