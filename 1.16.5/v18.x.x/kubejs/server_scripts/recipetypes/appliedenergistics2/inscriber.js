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
	inscriberRecipe('appliedenergistics2:logic_processor', 'appliedenergistics2:printed_logic_processor', 'extendedcrafting:redstone_component', '#forge:gems/silicon')
	inscriberRecipe('appliedenergistics2:calculation_processor', 'appliedenergistics2:printed_calculation_processor', 'extendedcrafting:redstone_component', '#forge:gems/silicon')
	inscriberRecipe('appliedenergistics2:engineering_processor', 'appliedenergistics2:printed_engineering_processor', 'extendedcrafting:redstone_component', '#forge:gems/silicon')
	inscriberRecipe('appliedenergistics2:printed_engineering_processor', 'appliedenergistics2:engineering_processor_press', '#forge:plates/enderium', '#forge:gems/silicon')
	inscriberRecipe('appliedenergistics2:printed_logic_processor', 'appliedenergistics2:logic_processor_press', '#forge:plates/electrum', '#forge:gems/silicon')
	inscriberRecipe('appliedenergistics2:printed_calculation_processor', 'appliedenergistics2:calculation_processor_press', '#appliedenergistics2:crystals/certus', '#forge:gems/silicon')

	// Extra Disks
	inscriberRecipe('extradisks:withering_processor', 'extradisks:raw_withering_processor', 'extendedcrafting:redstone_component', '#forge:gems/silicon')

	// Extra Storage
	inscriberRecipe('extrastorage:neural_processor', 'extrastorage:raw_neural_processor', 'extendedcrafting:redstone_component', '#forge:gems/silicon')

	// Refined Storage
	inscriberRecipe('refinedstorage:advanced_processor', 'refinedstorage:raw_advanced_processor', 'extendedcrafting:redstone_component', '#forge:gems/silicon')
	inscriberRecipe('refinedstorage:basic_processor', 'refinedstorage:raw_basic_processor', 'extendedcrafting:redstone_component', '#forge:gems/silicon')
	inscriberRecipe('refinedstorage:improved_processor', 'refinedstorage:raw_improved_processor', 'extendedcrafting:redstone_component', '#forge:gems/silicon')
})
