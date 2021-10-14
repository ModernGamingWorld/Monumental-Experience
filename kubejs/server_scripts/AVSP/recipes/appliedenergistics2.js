//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//APPLIED ENERGISTICS 2 RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	event.remove({id: 'appliedenergistics2:smelting/silicon'})
	event.replaceInput({type: 'appliedenergistics2:inscriber'}, 'appliedenergistics2:silicon', '#forge:silicon')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'appliedenergistics2:silicon', '#forge:silicon')
	event.replaceInput({type: 'appliedenergistics2:grinder'}, 'appliedenergistics2:fluix_crystal', '#forge:gems/fluix')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'appliedenergistics2:charged_certus_quartz_crystal', '#forge:gems/charged_certus_quartz')

//Adding grinder support for all emendatus enigmatica chunks
//
	//COAL
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/coal').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:coal_dust', 2).toResultJson(),
		},
		turns: 2
	})

	//DIAMOND
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/diamond').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:diamond_dust', 2).toResultJson(),
		},
		turns: 10
	})
	//EMERALD
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/emerald').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:emerald_dust', 2).toResultJson(),
		},
		turns: 10
	})

	//LAPIS
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/lapis').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:lapis_dust', 6).toResultJson(),
		},
		turns: 4
	})

	//REDSTONE
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/redstone').toJson(),
		result: {
			primary: item.of('minecraft:redstone', 6).toResultJson(),
		},
		turns: 3
	})

	//COPPER
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/copper').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:copper_dust', 2).toResultJson(),
		},
		turns: 4
	})

	//ALUMINUM
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/aluminum').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:aluminum_dust', 2).toResultJson(),
		},
		turns: 4
	})

	//SILVER
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/silver').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:silver_dust', 2).toResultJson(),
		},
		turns: 5
	})

	//LEAD
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/lead').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:lead_dust', 2).toResultJson(),
		},
		turns: 6
	})

	//NICKEL
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/nickel').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:nickel_dust', 2).toResultJson(),
		},
		turns: 4
	})

	//URANIUM
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/uranium').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:uranium_dust', 2).toResultJson(),
		},
		turns: 6
	})

	//OSMIUM
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/osmium').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:osmium_dust', 2).toResultJson(),
		},
		turns: 5
	})

	//TIN
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/tin').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:tin_dust', 2).toResultJson(),
		},
		turns: 3
	})

	//ZINC
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/zinc').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:zinc_dust', 2).toResultJson(),
		},
		turns: 4
	})

	//COPPER
	event.custom({
		type: 'appliedenergistics2:grinder',
		input: ingredient.of('#forge:ores/cobalt').toJson(),
		result: {
			primary: item.of('emendatusenigmatica:cobalt_dust', 2).toResultJson(),
		},
		turns: 6
	})

//
//fin
//
})