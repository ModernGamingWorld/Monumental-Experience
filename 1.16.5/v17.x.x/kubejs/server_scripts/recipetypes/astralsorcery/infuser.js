onEvent('recipes', (event) => {
	function infuse(inputID, fluidID, outputID) {
		event.custom({
			type: 'astralsorcery:infuser',
			fluidInput: fluidID,
			input: Item.of(inputID).toJson(),
			output: outputID,
			consumptionChance: 0.1,
			duration: 100,
			consumeMultipleFluids: false,
			acceptChaliceInput: true,
			copyNBTToOutputs: false
		})
	}

	infuse('immersiveengineering:treated_wood_horizontal', 'astralsorcery:liquid_starlight', 'astralsorcery:infused_wood')
	infuse('#forge:dusts/iron', 'astralsorcery:liquid_starlight', 'astralsorcery:stardust')
	infuse('#forge:storage_blocks/compressed_iron', 'astralsorcery:liquid_starlight', 'naturesaura:infused_iron')
})
