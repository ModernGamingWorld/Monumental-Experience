//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//ASSORTED RECIPE INTERGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//SAWDUST
	event.replaceInput({}, '#forge:dusts/wood', 'emendatusenigmatica:wood_dust')
    event.replaceInput({}, '#forge:sawdust', 'emendatusenigmatica:wood_dust')
    event.replaceInput({}, 'immersiveengineering:dust_wood', 'emendatusenigmatica:wood_dust')
    event.replaceInput({}, 'mekanism:sawdust', 'emendatusenigmatica:wood_dust')
    event.replaceInput({}, 'thermal:sawdust', 'emendatusenigmatica:wood_dust')

    //ENDER DUST
	event.replaceInput({}, '#forge:dusts/ender', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, '#forge:dusts/ender_pearl', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'appliedenergistics2:ender_dust', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'thermal:ender_pearl_dust', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'betterendforge:ender_dust', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'miniutilities:ender_dust', 'emendatusenigmatica:ender_dust')
	event.replaceInput({}, 'terraqueous:ender_dust', 'emendatusenigmatica:ender_dust')

	//GRAPHITE DUST
	event.replaceInput({}, '#forge:dusts/graphite', 'emendatusenigmatica:graphite_dust')
	event.replaceInput({}, 'biggerreactors:graphite_dust', 'emendatusenigmatica:graphite_dust')

	//DIAMOND DUST
	event.replaceInput({}, '#forge:dusts/diamond', 'emendatusenigmatica:diamond_dust')
	event.replaceInput({}, 'mekanism:dust_diamond', 'emendatusenigmatica:diamond_dust')
	event.replaceInput({}, 'thermal:diamond_dust', 'emendatusenigmatica:diamond_dust')
	event.replaceInput({}, 'terraqueous:diamond_dust', 'emendatusenigmatica:diamond_dust')

	//EMERALD DUST
	event.replaceInput({}, '#forge:dusts/emerald', 'emendatusenigmatica:emerald_dust')
	event.replaceInput({}, 'mekanism:dust_emerald', 'emendatusenigmatica:emerald_dust')
	event.replaceInput({}, 'thermal:emerald_dust', 'emendatusenigmatica:emerald_dust')
	event.replaceInput({}, 'terraqueous:emerald_dust', 'emendatusenigmatica:emerald_dust')

	//SOURCE GEM
	event.custom({
  		type: 'minecraft:smelting',
  		result: 'emendatusenigmatica:arcane_gem',
  		ingredient: {
  			tag: 'forge:ores/mana'
  		},
  		cookingtime: 250,
  		experience: 0.40
  	}).id('AVSP:assorted_recipes/smelting/mana')
	event.custom({
  		type: 'minecraft:smelting',
  		result: 'emendatusenigmatica:arcane_gem',
  		ingredient: {
  			tag: 'forge:ores/arcane'
  		},
  		cookingtime: 250,
  		experience: 0.40
  	}).id('AVSP:assorted_recipes/smelting/arcane')

	//DIMENSIONAL SHARD
	event.custom({
  		type: 'minecraft:smelting',
  		result: 'emendatusenigmatica:dimensional_gem',
  		ingredient: {
  			tag: 'forge:ores/dimensional'
  		},
  		cookingtime: 250,
  		experience: 0.40
  	})

	//REMOVAL OF RODS FROM SHAPED CRAFTING.
	//If you want to keep this feature. Just comment out this entire section.
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/iron'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/gold'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/copper'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/aluminum'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/silver'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/lead'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/nickel'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/uranium'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/osmium'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/tin'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/zinc'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/cobalt'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/bronze'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/brass'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/constantan'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/electrum'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/steel'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/invar'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/signalum'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/lumium'})
	event.remove({id: 'emendatusenigmatica:rod_from_ingot/enderium'})
	event.remove({id: 'emendatusenigmatica:rod_from_gem/diamond'})
	event.remove({id: 'emendatusenigmatica:rod_from_gem/emerald'})
	event.remove({id: 'emendatusenigmatica:rod_from_gem/lapis'})

	//REMOVAL OF DUSTS FROM SHAPED CRAFTING
	//If you want to keep this feature. Just comment out this entire section.
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/apatite'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/potassium_nitrate'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/lead'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/certus_quartz'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/cobalt'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/uranium'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/dimensional'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/coal'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/emerald'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/copper'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/quartz'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/gold'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/sulfur'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/fluorite'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/zinc'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/osmium'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/cinnabar'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/silver'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/lapis'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/iron'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/aluminum'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/quartz'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/diamond'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/tin'})
	event.remove({id: 'emendatusenigmatica:dust_from_chunk/nickel'})

	//REMOVAL OF PLATES FROM SHAPED CRAFTING.
	//If you want to keep this feature. Just comment out this entire section.
	event.remove({id: 'emendatusenigmatica:plate_from_gem/emerald'})
	event.remove({id: 'emendatusenigmatica:plate_from_gem/lapis'})
	event.remove({id: 'emendatusenigmatica:plate_from_gem/diamond'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/lead'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/enderium'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/silver'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/lumium'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/electrum'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/constantan'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/cobalt'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/gold'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/zinc'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/nickel'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/copper'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/signalum'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/osmium'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/bronze'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/steel'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/iron'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/tin'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/brass'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/uranium'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/aluminum'})
	event.remove({id: 'emendatusenigmatica:plate_from_ingot/invar'})

//
//fin
//
})