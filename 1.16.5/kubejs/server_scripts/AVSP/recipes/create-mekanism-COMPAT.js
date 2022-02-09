//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//CREATE/MEKANISM RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {

//
//ENRICHMENT
//
	//COAL
	  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				item: 'emendatusenigmatica:coal_crushed'
  			}
  		},
  		output: {
  			item: 'minecraft:coal'
  		}
  	}).id('AVSP:create_mekanism_compat/enriching/coal')

	//DIAMOND
	  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				item: 'emendatusenigmatica:diamond_crushed'
  			}
  		},
  		output: {
  			item: 'minecraft:diamond'
  		}
  	}).id('AVSP:create_mekanism_compat/enriching/diamond')

	//EMERALD
		event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				item: 'emendatusenigmatica:emerald_crushed'
  			}
  		},
  		output: {
  			item: 'minecraft:emerald'
  		}
  	}).id('AVSP:create_mekanism_compat/enriching/emerald')

	//CINNABAR
	  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				item: 'emendatusenigmatica:cinnabar_crushed'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_gem'
  		}
  	}).id('AVSP:create_mekanism_compat/enriching/cinnabar')

	//APATITE
	  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				item: 'emendatusenigmatica:apatite_crushed'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_gem'
  		}
  	}).id('AVSP:create_mekanism_compat/enriching/apatite')
	  
	//SULFUR
	  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				item: 'emendatusenigmatica:sulfur_crushed'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_gem'
  		}
  	}).id('AVSP:create_mekanism_compat/enriching/sulfur')

	//POTASSIUM NITRATE / NITER
	  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				item: 'emendatusenigmatica:potassium_nitrate_crushed'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_gem'
  		}
  	}).id('AVSP:create_mekanism_compat/enriching/potassium_nitrate-niter')

	//DIMENSIONAL
	  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				item: 'emendatusenigmatica:dimensional_crushed'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_gem'
  		}
  	}).id('AVSP:create_mekanism_compat/enriching/dimensional')

//
//fin
//
})