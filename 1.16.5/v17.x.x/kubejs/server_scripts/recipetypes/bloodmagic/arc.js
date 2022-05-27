onEvent('recipes', e => {
	function arcRecipe(outputID, inputID, recipeID) {
		e.recipes.bloodmagic.arc(outputID, inputID, '#bloodmagic:arc/explosive', []).consumeIngredient(false).id(`monumental:base/bloodmagic/arc/${recipeID}`)
	}

	arcRecipe(Item.of('9x emendatusenigmatica:coke_dust'), '#forge:storage_blocks/coal_coke', 'coke_dust_from_block')
	arcRecipe('immersivepetroleum:petcoke_dust', '#forge:coal_petcoke', 'petcoke_dust')
	arcRecipe(Item.of('9x immersivepetroleum:petcoke_dust'), '#forge:storage_blocks/coal_petcoke', 'petcoke_dust_from_block')
})
