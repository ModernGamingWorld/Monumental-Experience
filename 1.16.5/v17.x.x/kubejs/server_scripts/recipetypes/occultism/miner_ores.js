onEvent('recipes', e => {
	function minerRecipe(weight, output) {
		e.custom({
			type: 'occultism:miner',
			ingredient: Item.of('#occultism:miners/ores').toJson(),
			result: Item.of(output).toResultJson(),
			weight: weight
		})
	}

	minerRecipe(1200, 'emendatusenigmatica:aluminum_chunk')
	minerRecipe(700,  'emendatusenigmatica:apatite_chunk')
	minerRecipe(600,  'emendatusenigmatica:arcane_chunk')
	minerRecipe(1000, 'emendatusenigmatica:bitumen_chunk')
	minerRecipe(500,  'emendatusenigmatica:cinnabar_chunk')
	minerRecipe(2500, 'emendatusenigmatica:coal_chunk')
	minerRecipe(2000, 'emendatusenigmatica:copper_chunk')
	minerRecipe(400,  'emendatusenigmatica:diamond_chunk')
	minerRecipe(200,  'emendatusenigmatica:dimensional_chunk')
	minerRecipe(350,  'emendatusenigmatica:emerald_chunk')
	minerRecipe(450,  'emendatusenigmatica:fluorite_chunk')
	minerRecipe(550,  'emendatusenigmatica:gold_chunk')
	minerRecipe(2000, 'emendatusenigmatica:iron_chunk')
	minerRecipe(500,  'emendatusenigmatica:lapis_chunk')
	minerRecipe(1500, 'emendatusenigmatica:lead_chunk')
	minerRecipe(1000, 'emendatusenigmatica:nickel_chunk')
	minerRecipe(1500, 'emendatusenigmatica:osmium_chunk')
	minerRecipe(400,  'emendatusenigmatica:potassium_nitrate_chunk')
	minerRecipe(700,  'emendatusenigmatica:redstone_chunk')
	minerRecipe(1000, 'emendatusenigmatica:silver_chunk')
	minerRecipe(2000, 'emendatusenigmatica:sulfur_chunk')
	minerRecipe(1800, 'emendatusenigmatica:tin_chunk')
	minerRecipe(500,  'emendatusenigmatica:uranium_chunk')
	minerRecipe(1000, 'emendatusenigmatica:zinc_chunk')
	minerRecipe(100,  'occultism:iesnium_ore')
	minerRecipe(100,  'minecraft:glowstone')
	minerRecipe(400,  'emendatusenigmatica:quartz_chunk')
	minerRecipe(80,   'minecraft:ancient_debris')
	minerRecipe(80,   'gobber2:gobber2_ore_nether')
	minerRecipe(100,  'minecraft:ancient_debris')
	minerRecipe(100,  'gobber2:gobber2_ore_nether')
})
