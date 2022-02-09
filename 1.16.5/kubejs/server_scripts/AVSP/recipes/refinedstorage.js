//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//REFINED STORAGE RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	event.replaceInput({type: 'refinedstorage'}, 'refinedstorage:silicon', '#forge:silicon')
	event.replaceInput({type: 'refinedstorage:*'}, 'refinedstorage:silicon', '#forge:silicon')
//
//fin
//
})