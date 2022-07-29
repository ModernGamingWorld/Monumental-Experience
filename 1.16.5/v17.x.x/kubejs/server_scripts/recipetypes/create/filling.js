onEvent('recipes', e => {
	// Extended Crafting
	e.recipes.create.filling('extendedcrafting:luminessence', [Fluid.of('astralsorcery:liquid_starlight', 1000), 'astralsorcery:illumination_powder'])

	// Minecraft
	e.recipes.create.filling('minecraft:experience_bottle', [Fluid.of('industrialforegoing:essence', 250), 'minecraft:glass_bottle'])
	e.recipes.create.filling('minecraft:experience_bottle', [Fluid.of('pneumaticcraft:memory_essence', 250), 'minecraft:glass_bottle'])
	e.recipes.create.filling('minecraft:experience_bottle', [Fluid.of('cofh_core:experience', 250), 'minecraft:glass_bottle'])

	// Upgrade Aquatic
	e.recipes.create.filling('upgrade_aquatic:squid_bucket', [Fluid.of('astralsorcery:liquid_starlight', 250), 'upgrade_aquatic:squid_bucket'])
})
