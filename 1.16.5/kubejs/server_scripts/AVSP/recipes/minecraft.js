//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//Minecraft RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	event.replaceInput({type: 'minecraft:blasting'}, 'minecraft:nether_quartz_ore', '#forge:ores/quartz')
	event.replaceInput({type: 'minecraft:smelting'}, 'minecraft:nether_quartz_ore', '#forge:ores/quartz')
//
//fin
//
})