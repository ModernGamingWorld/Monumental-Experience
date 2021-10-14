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

//
//fin
//
})