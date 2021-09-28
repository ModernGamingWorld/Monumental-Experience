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
//
//fin
//
})