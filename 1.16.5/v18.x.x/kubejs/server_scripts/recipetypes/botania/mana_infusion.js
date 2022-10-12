onEvent('recipes', event => {
	function manaInfusionRecipe(input, output, mana) {
		event.custom({
			type: 'botania:mana_infusion',
			input: Item.of(input).toJson(),
			output: Item.of(output).toResultJson(),
			mana: mana
		})
	}

	manaInfusionRecipe('#forge:storage_blocks/manasteel', 'astralsorcery:starmetal', 27000)
	manaInfusionRecipe('forbidden_arcanus:chorus_pearl', 'botania:mana_pearl', 6000)
	manaInfusionRecipe('psi:psidust', 'botania:mana_powder', 6000)
	manaInfusionRecipe('create:polished_rose_quartz', 'botania:quartz_mana', 250)
	manaInfusionRecipe('naturesaura:infused_iron', 'botania:manasteel_ingot', 3000)
	manaInfusionRecipe('occultism:soul_gem', 'botania:mana_diamond', 10000)
	manaInfusionRecipe('compressium:netherrack_6', 'gobber2:gobber2_ore_nether', 2000)
	manaInfusionRecipe('forbidden_arcanus:arcane_crystal_block', 'naturesaura:infused_stone', 27000)
	manaInfusionRecipe('#forge:storage_blocks/compressed_iron', 'naturesaura:infused_iron', 27000)
})
