onEvent('recipes', e => {
	function pressureChamberRecipe(inputs, outputs, pressure, id) {
		e.custom({
			type: 'pneumaticcraft:pressure_chamber',
			inputs: inputs.map(i => { return Item.of(i).toJson() }),
			pressure: pressure,
			results: outputs.map(o => { return Item.of(o).toResultJson() })
		}).id(`pneumaticcraft:pressure_chamber/${id}`)
	}

	pressureChamberRecipe(['#appliedenergistics2:crystals/nether', '#forge:dusts/fluix', 'appliedenergistics2:logic_processor',], ['2x appliedenergistics2:annihilation_core',], 4, 'annihilation_core')
	pressureChamberRecipe(['#appliedenergistics2:crystals/certus', '#forge:dusts/fluix', 'appliedenergistics2:logic_processor',], ['2x appliedenergistics2:formation_core',], 4, 'formation_core')
	pressureChamberRecipe(['#forge:grain',], ['2x create:wheat_flour',], 1.5, 'wheat_flour')
	pressureChamberRecipe(['#forge:plastic', 'createaddition:capacitor', 'immersiveengineering:wirecoil_electrum', '#forge:slimeballs',], ['pneumaticcraft:capacitor',], 1, 'pneumaticcraft_capacitor')
	pressureChamberRecipe(['immersiveengineering:wirecoil_electrum', 'immersiveengineering:wirecoil_redstone', '#forge:plastic', 'immersiveengineering:circuit_board',], ['2x pneumaticcraft:empty_pcb',], 1, 'pneumaticcraft_empty_pcb')
	pressureChamberRecipe(['immersiveengineering:wirecoil_redstone', 'immersiveengineering:wirecoil_electrum', 'create:electron_tube', '#forge:plastic',], ['pneumaticcraft:transistor',], 1, 'pneumaticcraft_transistor')
	pressureChamberRecipe(['#forge:ingots/steel',], ['pneumaticcraft:ingot_iron_compressed',], 1, 'ingot_iron_compressed')
	pressureChamberRecipe(['refinedstorage:basic_processor', '#forge:dusts/glowstone',], ['refinedstorage:construction_core',], 4, 'construction_core')
	pressureChamberRecipe(['refinedstorage:basic_processor', '#forge:gems/quartz',], ['refinedstorage:destruction_core',], 4, 'destruction_core')
	pressureChamberRecipe(['immersiveengineering:wirecoil_electrum', '#forge:gems/silicon', 'extendedcrafting:redstone_catalyst', 'refinedstorage:processor_binding', 'immersiveengineering:wirecoil_electrum',], ['refinedstorage:raw_improved_processor',], 4, 'raw_improved_processor')
	pressureChamberRecipe(['extendedcrafting:black_iron_ingot', '#forge:gems/silicon', 'extendedcrafting:redstone_catalyst', 'refinedstorage:processor_binding',], ['refinedstorage:raw_basic_processor',], 4, 'raw_basic_processor')
	pressureChamberRecipe(['#forge:gears/diamond', '#forge:gems/silicon', 'extendedcrafting:redstone_catalyst', 'refinedstorage:processor_binding',], ['refinedstorage:raw_advanced_processor',], 4, 'raw_advanced_processor')
	pressureChamberRecipe(['immersiveengineering:hemp_fiber', 'immersiveengineering:hemp_fiber', 'bloodmagic:reagentbinding', 'mysticalagriculture:pink_slime_essence', 'mysticalagriculture:pink_slime_essence',], ['refinedstorage:processor_binding',], 4, 'processor_binding')
})
