ServerEvents.recipes(e => {
	function inscriberRecipe(output, top, middle, bottom) {
		e.custom({
			type: 'ae2:inscriber',
			mode: 'press',
			result: Item.of(output).toJson(),
			ingredients: {
                top: Ingredient.of(top).toJson(),
                middle: Ingredient.of(middle).toJson(),
                bottom: Ingredient.of(bottom).toJson()
			}
		})
	}

	// Ae2
	inscriberRecipe('ae2:logic_processor', 'ae2:printed_logic_processor', 'extendedcrafting:redstone_component', '#forge:silicon')
	inscriberRecipe('ae2:calculation_processor', 'ae2:printed_calculation_processor', 'extendedcrafting:redstone_component', '#forge:silicon')
	inscriberRecipe('ae2:engineering_processor', 'ae2:printed_engineering_processor', 'extendedcrafting:redstone_component', '#forge:silicon')
	inscriberRecipe('ae2:printed_engineering_processor', 'ae2:engineering_processor_press', '#forge:plates/enderium', '#forge:silicon')
	inscriberRecipe('ae2:printed_logic_processor', 'ae2:logic_processor_press', '#forge:plates/electrum', '#forge:silicon')
	inscriberRecipe('ae2:printed_calculation_processor', 'ae2:calculation_processor_press', '#forge:gems/certus_quartz', '#forge:silicon')

	// Extra Disks
	inscriberRecipe('extradisks:withering_processor', 'extradisks:raw_withering_processor', 'extendedcrafting:redstone_component', '#forge:silicon')

	// Extra Storage
	inscriberRecipe('extrastorage:neural_processor', 'extrastorage:raw_neural_processor', 'extendedcrafting:redstone_component', '#forge:silicon')

	// Refined Storage
	inscriberRecipe('refinedstorage:advanced_processor', 'refinedstorage:raw_advanced_processor', 'extendedcrafting:redstone_component', '#forge:silicon')
	inscriberRecipe('refinedstorage:basic_processor', 'refinedstorage:raw_basic_processor', 'extendedcrafting:redstone_component', '#forge:silicon')
	inscriberRecipe('refinedstorage:improved_processor', 'refinedstorage:raw_improved_processor', 'extendedcrafting:redstone_component', '#forge:silicon')
})
