//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//THERMAL RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//Emendatus Enigmatica cinnabar as a catalyst.
	event.recipes.thermal.smelter_catalyst('emendatusenigmatica:cinnabar_gem').primaryMod(3.0).secondaryMod(3.0).energyMod(2.5).minChance(0.0).useChance(0.8)

	//Emendatus Enigmatica bitumen in pyrolyzer.
	event.replaceInput({type: 'thermal:machines/pyrolyzer'}, 'thermal:bitumen', 'emendatusenigmatica:bitumen_gem')
//
//fin
//
})