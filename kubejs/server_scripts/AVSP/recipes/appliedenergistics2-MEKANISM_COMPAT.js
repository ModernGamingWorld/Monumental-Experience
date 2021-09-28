//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//APPLIED ENERGISTICS 2 / MEKANISM RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//Remove broken mekanism crusher/enrichment recipes.
	event.remove({id: 'mekanism:compat/appliedenergistics2/fluix_crystal_to_dust'})
	event.remove({id: 'mekanism:compat/appliedenergistics2/certus_crystal_to_dust'})
	event.remove({id: 'mekanism:compat/appliedenergistics2/certus_crystal_purification'})
	event.remove({id: 'mekanism:compat/appliedenergistics2/fluix_crystal_purification'})
	//Adding new crusher recipes.
	event.recipes.mekanism.crushing('appliedenergistics2:certus_quartz_dust', '#forge:gems/certus_quartz')
	event.recipes.mekanism.crushing('appliedenergistics2:certus_quartz_dust', '#forge:gems/charged_certus_quartz')
	event.recipes.mekanism.crushing('appliedenergistics2:fluix_dust', '#forge:gems/fluix')
//
//fin
//
})