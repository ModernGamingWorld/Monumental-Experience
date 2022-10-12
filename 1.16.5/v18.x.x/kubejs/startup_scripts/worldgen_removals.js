onEvent('worldgen.remove', e => {
	let ores = ['minecraft:iron_ore', 'minecraft:gold_ore', 'minecraft:coal_ore', 'minecraft:nether_gold_ore', 'minecraft:nether_quartz_ore', 'minecraft:diamond_ore', 'minecraft:emerald_ore', 'minecraft:redstone_ore', 'minecraft:lapis_ore', 'atum:gold_ore']
	e.removeOres(o => o.blocks = ores)

	// ores.blocks = ['tmechworks:copper_ore', 'mysticalworld:copper_ore', 'silents_mechanisms:copper_ore', 'occultism:copper_ore', 'routerreborn:copper_ore'];
	// ores.blocks = ['tmechworks:aluminum_ore', 'silents_mechanisms:bauxite_ore'];
	// ores.blocks = ['mysticalworld:silver_ore', 'silents_mechanisms:silver_ore', 'occultism:silver_ore'];
	// ores.blocks = ['mysticalworld:lead_ore', 'silents_mechanisms:lead_ore', 'eidolon:lead_ore'];
	// ores.blocks = ['silents_mechanisms:nickel_ore'];
	// ores.blocks = ['silents_mechanisms:uranium'];
	// ores.blocks = ['mysticalworld:tin_ore', 'silents_mechanisms:tin_ore'];
	// ores.blocks = ['silents_mechanisms:zin_ore'];
})
