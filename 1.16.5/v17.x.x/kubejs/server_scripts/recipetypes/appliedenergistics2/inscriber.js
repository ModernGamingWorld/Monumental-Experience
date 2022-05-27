onEvent('recipes', e => {
	function inscriberRecipe(output, top, middle, bottom) {
		e.recipes.appliedenergistics2.inscriber({
			type: 'appliedenergistics2:inscriber',
			mode: 'press',
			result: Item.of(output).toJson(),
			ingredients: {
				top: Item.of(top),
				middle: Item.of(middle),
				bottom: Item.of(bottom)
			}
		})
	}

	// Applied Energistics 2
	inscriberRecipe('appliedenergistics2:printed_engineering_processor', 'appliedenergistics2:engineering_processor_press', '#forge:plates/enderium', 'appliedenergistics2:printed_silicon')
	inscriberRecipe('appliedenergistics2:printed_logic_processor', 'appliedenergistics2:logic_processor_press', '#forge:plates/electrum', 'appliedenergistics2:printed_silicon')
	inscriberRecipe('appliedenergistics2:printed_calculation_processor', 'appliedenergistics2:calculation_processor_press', '#appliedenergistics2:crystals/certus', 'appliedenergistics2:printed_silicon')

	// Extra Disks
	inscriberRecipe('extradisks:withering_processor', 'extradisks:raw_withering_processor', '#forge:dusts/redstone', 'appliedenergistics2:printed_silicon')

	// Refined Storage
	inscriberRecipe('refinedstorage:advanced_processor', 'refinedstorage:raw_advanced_processor', '#forge:dusts/redstone', '#forge:gems/silicon')
	inscriberRecipe('refinedstorage:basic_processor', 'refinedstorage:raw_basic_processor', '#forge:dusts/redstone', '#forge:gems/silicon')
})
