//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//IMMERSIVE POSTS RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//REMOVAL OF IMMERSIVE POSTS INGOT TO ROD RECIPE IN SHAPED CRAFTING.
	//If you want to keep this feature. Just comment out this entire section.
	event.remove({id: 'immersiveposts:has_gold_rod'})
	event.remove({id: 'immersiveposts:has_copper_rod'})
	event.remove({id: 'immersiveposts:has_silver_rod'})
	event.remove({id: 'immersiveposts:has_lead_rod'})
	event.remove({id: 'immersiveposts:has_nickel_rod'})
	event.remove({id: 'immersiveposts:has_uranium_rod'})
	event.remove({id: 'immersiveposts:has_constantan_rod'})
	event.remove({id: 'immersiveposts:has_electrum_rod'})
//
//fin
//
})