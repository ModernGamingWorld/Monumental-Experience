//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//CHUNKS TO GEMS.
//BY NEEPNOOP & ANOKKA / 2021
//

/*
PLEASE NOTE:
IF YOU WISH NOT TO USE THIS FEATURE, YOU WILL HAVE TO ENABLE SOME RECIPES IN OTHER .JS FILES:
thermal.js
assorted_recipes.js
*/
onEvent('recipes', event => {

	//COAL
	event.remove({id: 'emendatusenigmatica:gem_from_ore/blasting/coal'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/blasting/coal'})
	event.remove({id: 'minecraft:coal_from_blasting'})
	event.remove({id: 'emendatusenigmatica:gem_from_ore/smelting/coal'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/smelting/coal'})
	event.remove({id: 'minecraft:coal_from_smelting'})
	event.stonecutting('minecraft:coal', 'emendatusenigmatica:coal_chunk').id('AVSP:chunks_to_gems/stonecutting/coal')

	//DIAMOND
	event.remove({id: 'emendatusenigmatica:gem_from_ore/blasting/diamond'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/blasting/diamond'})
	event.remove({id: 'minecraft:diamond_from_blasting'})
	event.remove({id: 'emendatusenigmatica:gem_from_ore/smelting/diamond'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/smelting/diamond'})
	event.remove({id: 'minecraft:diamond_from_smelting'})
	event.stonecutting('minecraft:diamond', 'emendatusenigmatica:diamond_chunk').id('AVSP:chunks_to_gems/stonecutting/diamond')

	//EMERALD
	event.remove({id: 'emendatusenigmatica:gem_from_ore/blasting/emerald'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/blasting/emerald'})
	event.remove({id: 'minecraft:emerald_from_blasting'})
	event.remove({id: 'emendatusenigmatica:gem_from_ore/smelting/emerald'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/smelting/emerald'})
	event.remove({id: 'minecraft:emerald_from_smelting'})
	event.stonecutting('minecraft:emerald', 'emendatusenigmatica:emerald_chunk').id('AVSP:chunks_to_gems/stonecutting/emerald')

	//LAPIS
	event.remove({id: 'emendatusenigmatica:gem_from_ore/blasting/lapis'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/blasting/lapis'})
	event.remove({id: 'minecraft:lapis_from_blasting'})
	event.remove({id: 'emendatusenigmatica:gem_from_ore/smelting/lapis'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/smelting/lapis'})
	event.remove({id: 'minecraft:lapis_from_smelting'})
	event.stonecutting('6x minecraft:lapis_lazuli', 'emendatusenigmatica:lapis_chunk').id('AVSP:chunks_to_gems/stonecutting/lapis')

	//REDSTONE
	event.remove({id: 'emendatusenigmatica:gem_from_ore/blasting/redstone'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/blasting/redstone'})
	event.remove({id: 'minecraft:redstone_from_blasting'})
	event.remove({id: 'emendatusenigmatica:gem_from_ore/smelting/redstone'})
	event.remove({id: 'emendatusenigmatica:gem_from_chunk/smelting/redstone'})
	event.remove({id: 'minecraft:redstone_from_smelting'})
	event.stonecutting('6x minecraft:redstone', 'emendatusenigmatica:redstone_chunk').id('AVSP:chunks_to_gems/stonecutting/redstone')

	//FLUORITE
	event.stonecutting('4x emendatusenigmatica:fluorite_gem', 'emendatusenigmatica:fluorite_chunk').id('AVSP:chunks_to_gems/stonecutting/fluorite')

	//CINNABAR
	event.stonecutting('emendatusenigmatica:cinnabar_gem', 'emendatusenigmatica:cinnabar_chunk').id('AVSP:chunks_to_gems/stonecutting/cinnabar')

	//APATITE
	event.stonecutting('4x emendatusenigmatica:apatite_gem', 'emendatusenigmatica:apatite_chunk').id('AVSP:chunks_to_gems/stonecutting/apatite')

	//SULFUR
	event.stonecutting('3x emendatusenigmatica:sulfur_gem', 'emendatusenigmatica:sulfur_chunk').id('AVSP:chunks_to_gems/stonecutting/sulfur')

	//POTASSIUM NITRATE
	event.stonecutting('3x emendatusenigmatica:potassium_nitrate_gem', 'emendatusenigmatica:potassium_nitrate_chunk').id('AVSP:chunks_to_gems/stonecutting/potassium_nitrate-niter')

	//DIMENSIONAL
	event.stonecutting('emendatusenigmatica:dimensional_gem', 'emendatusenigmatica:dimensional_chunk').id('AVSP:chunks_to_gems/stonecutting/dimensional')
//
//fin
//
})