//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//SCRIPT FOR RETAGGING ITEMS
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('item.tags', event => {
//SILICON
	event.add('appliedenergistics2:silicon', 'emendatusenigmatica:silicon_gem')
	event.add('refinedstorage:silicon', 'emendatusenigmatica:silicon_gem')
	event.add('forge:gems/certus_quartz', 'emendatusenigmatica:charged_certus_quartz_gem')
	event.add('forge:ores/niter', 'emendatusenigmatica:potassium_nitrate_chunk')

//
//fin
//
})