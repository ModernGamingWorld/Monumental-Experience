//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//MYSTICAL AGRICULTURE RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/calculation_press'})
	event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/engineering_press'})
	event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/logic_press'})
	event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/silicon_press'})
//
//fin
//
})