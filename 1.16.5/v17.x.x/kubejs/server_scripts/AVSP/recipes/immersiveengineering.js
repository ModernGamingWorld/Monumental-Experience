//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//IMMERSIVE ENGINEERING RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//THIS IS NOT REALLY EMENDATUS ENIGMATICA, BUT WE REALISE SOME PEOPLE MIGHT WANT THIS.
	event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag')
	//this is emendatus enigmatica.
	event.replaceInput({}, 'immersiveengineering:coal_coke', '#forge:gems/coal_coke')
	event.replaceInput({}, '#forge:coal_coke', '#forge:gems/coal_coke')

	//REMOVAL OF DUST FROM SHAPED CRAFTING.
	//If you want to keep this feature. Just comment out this entire section.
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_osmium'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_silver'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_cobalt'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_uranium'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_aluminum'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_iron'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_gold'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_copper'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_zinc'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_nickel'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_lead'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_tin'})

//
//fin
//
})