ServerEvents.recipes(e => {
	function altarRecipe(input, output, auraType, aura, time, id) {
		e.custom({
			type: 'naturesaura:altar',
			input: Item.of(input).toJson(),
			output: Item.of(output).toJson(),
			aura_type: auraType,
			aura: aura,
			time: time
		}).id(`naturesaura:altar/${id}`)
	}

	altarRecipe('forbidden_arcanus:arcane_crystal_block', 'naturesaura:infused_stone', 'naturesaura:overworld', 7500, 40, 'infused_stone')
	//altarRecipe('alltheores:iron_dust', 'astralsorcery:stardust', 'naturesaura:overworld', 3000, 40, 'infused_stone')
	//altarRecipe('#forge:storage_blocks/psimetal', 'naturesaura:tainted_gold_block', 'naturesaura:nether', 30000, 250, 'tainted_gold_block')
	//altarRecipe('#forge:ingots/psimetal', 'naturesaura:tainted_gold', 'naturesaura:nether', 30000, 250, 'tainted_gold')
})
