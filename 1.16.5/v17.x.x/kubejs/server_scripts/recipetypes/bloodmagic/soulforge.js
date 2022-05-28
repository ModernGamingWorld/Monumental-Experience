onEvent('recipes', e => {
	function soulforgeRecipe(i0, i1, i2, i3, output, minDrain, drain) {
		e.recipes.bloodmagic.soulforge({
			type: 'bloodmagic:soulforge',
			input0: Item.of(i0),
			input1: Item.of(i1),
			input2: Item.of(i2),
			input3: Item.of(i3),
			output: Item.of(output).toResultJson(),
			minimumDrain: minDrain,
			drain: drain
		})
	}

	soulforgeRecipe('bloodmagic:soulgemlesser', '#forge:gems/psigem', '#forge:ingots/psimetal', 'bloodmagic:infusedslate', 'bloodmagic:soulgemcommon', 240.0, 50.0)
	soulforgeRecipe('#forge:cauldron', 'quark:white_rune', '#forge:dusts/lapis', '#forge:gems/mana_diamond', 'bloodmagic:demoncrucible', 400.0, 100.0)
	soulforgeRecipe('bloodmagic:soulforge', 'quark:white_rune', '#forge:dusts/lapis', 'botania:mana_glass', 'bloodmagic:demoncrystallizer', 500.0, 100.0)
	soulforgeRecipe('bloodmagic:soulgempetty', 'occultism:spirit_attuned_gem', '#forge:gems/mana_diamond', 'cyclic:apple_lapis', 'bloodmagic:soulgemlesser', 60.0, 20.0)
	soulforgeRecipe('psi:psidust', 'naturesaura:tainted_gold', 'eidolon:lesser_soul_gem', '#forge:dusts/lapis', 'bloodmagic:soulgempetty', 1.0, 1.0)
})
