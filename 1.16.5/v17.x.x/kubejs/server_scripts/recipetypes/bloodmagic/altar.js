onEvent('recipes', e => {
	function altarRecipe(input, output, syphon, altarLevel, consumptionRate, drainRate) {
		e.recipes.bloodmagic.altar(output, input).upgradeLevel(altarLevel).altarSyphon(syphon).consumptionRate(consumptionRate).drainRate(drainRate)
	}

	altarRecipe('emendatusenigmatica:certus_quartz_gem', 'emendatusenigmatica:charged_certus_quartz_gem', 500, 0, 5, 1)
	altarRecipe('psi:psidust_block', 'bloodmagic:apprenticebloodorb', 5000, 1, 5, 5)
	altarRecipe('occultism:spirit_attuned_gem', 'bloodmagic:weakbloodorb', 2000, 0, 5, 1)
	altarRecipe('bloodmagic:sacrificialdagger', 'bloodmagic:daggerofsacrifice', 2500, 1, 5, 5)
	altarRecipe('#forge:storage_blocks/ivory_psimetal', 'bloodmagic:magicianbloodorb', 25000, 2, 20, 20)
	altarRecipe('quark:white_rune', 'bloodmagic:blankslate', 1000, 0, 5, 5)
	altarRecipe('botania:mana_string', 'bloodmagic:soulsnare', 500, 0, 5, 1)
	altarRecipe('forbidden_arcanus:arcane_crystal_block', 'naturesaura:infused_stone', 25000, 2, 20, 20)
	altarRecipe('#forge:dusts/coke', 'immersiveengineering:dust_hop_graphite', 2500, 0, 150, 150)
})
