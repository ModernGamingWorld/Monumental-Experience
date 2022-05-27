onEvent('recipes', e => {
	function blockTransmutation(inputTag, output, starlight) {
		Ingredient.of(inputTag).itemIds.forEach(input => {
			if (!input.includes('chunk')) {
				e.recipes.astralsorcery.block_transmutation({
					type: 'astralsorcery.block_transmutation',
					input: { block: input },
					output: { block: output },
					starlight: starlight
				})
			}
		})
	}

	blockTransmutation('#forge:ores/iron', 'astralsorcery:starmetal_ore', 100)
	blockTransmutation('#forge:ores/diamond', 'emendatusenigmatica:emerald_ore', 1000)
	blockTransmutation('compressium:netherrack_6', 'gobber2:gobber2_ore_nether', 2000)
	blockTransmutation('#forge:workbenches', 'astralsorcery:altar_discovery', 60)
	blockTransmutation('twilightforest:uncrafting_table', 'astralsorcery:altar_discovery', 60)
	blockTransmutation('forbidden_arcanus:arcane_crystal_block', 'naturesaura:infused_stone', 2500)
	blockTransmutation('#forge:storage_blocks/compressed_iron', 'naturesaura:infused_iron', 2500)
})
