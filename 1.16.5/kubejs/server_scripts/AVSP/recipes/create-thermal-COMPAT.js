//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//CREATE/THERMAL RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
//
//REMOVAL OF NOW UNUSED RECIPES
//
	//CINNABAR
	event.remove({id: 'create:compat/thermal/crushing/cinnabar_ore'})

	//APATITE
	event.remove({id: 'create:compat/thermal/crushing/apatite_ore'})

	//SULFUR
	event.remove({id: 'create:compat/thermal/crushing/sulfur_ore'})

	//POTASSIUM NITRATE
	event.remove({id: 'create:compat/thermal/crushing/niter_ore'})

//
//MULTISERVO PRESS
//
	//COAL
	event.recipes.thermal.press('minecraft:coal', 'emendatusenigmatica:coal_crushed').id('AVSP:create_thermal_compat/multiservo_press/coal')
	
	//DIAMOND
	event.recipes.thermal.press('minecraft:diamond', 'emendatusenigmatica:diamond_crushed').id('AVSP:create_thermal_compat/multiservo_press/diamond')

	//EMERALD
	event.recipes.thermal.press('minecraft:emerald', 'emendatusenigmatica:emerald_crushed').id('AVSP:create_thermal_compat/multiservo_press/emerald')

	//CINNABAR
	event.recipes.thermal.press('emendatusenigmatica:cinnabar_gem', 'emendatusenigmatica:cinnabar_crushed').id('AVSP:create_thermal_compat/multiservo_press/cinnabar')

	//APATITE
	event.recipes.thermal.press('emendatusenigmatica:apatite_gem', 'emendatusenigmatica:apatite_crushed').id('AVSP:create_thermal_compat/multiservo_press/apatite')

	//SULFUR
	event.recipes.thermal.press('emendatusenigmatica:sulfur_gem', 'emendatusenigmatica:sulfur_crushed').id('AVSP:create_thermal_compat/multiservo_press/sulfur')

	//POTASSIUM NITRATE / NITER
	event.recipes.thermal.press('emendatusenigmatica:potassium_nitrate_gem', 'emendatusenigmatica:potassium_nitrate_crushed').id('AVSP:create_thermal_compat/multiservo_press/potassium_nitrate-niter')

	//DIMENSIONAL
	event.recipes.thermal.press('emendatusenigmatica:dimensional_gem', 'emendatusenigmatica:dimensional_crushed').id('AVSP:create_thermal_compat/multiservo_press/dimensional')

//
//DUST FOR PRESSING
//

	//COAL
	event.recipes.createPressing('minecraft:coal', 'emendatusenigmatica:coal_dust').id('AVSP:create_thermal_compat/pressing/coal')

	//DIAMOND
	event.recipes.createPressing('minecraft:diamond', 'emendatusenigmatica:diamond_dust').id('AVSP:create_thermal_compat/pressing/diamond')

	//EMERALD
	event.recipes.createPressing('minecraft:emerald', 'emendatusenigmatica:emerald_dust').id('AVSP:create_thermal_compat/pressing/emerald')

	//LAPIS
	event.recipes.createPressing('minecraft:lapis_lazuli', 'emendatusenigmatica:lapis_dust').id('AVSP:create_thermal_compat/pressing/lapis')

	//FLUORITE
	event.recipes.createPressing('emendatusenigmatica:fluorite_gem', 'emendatusenigmatica:fluorite_dust').id('AVSP:create_thermal_compat/pressing/fluorite')

	//CINNABAR
	event.recipes.createPressing('emendatusenigmatica:cinnabar_gem', 'emendatusenigmatica:cinnabar_dust').id('AVSP:create_thermal_compat/pressing/cinnabar')

	//APATITE
	event.recipes.createPressing('emendatusenigmatica:apatite_gem', 'emendatusenigmatica:apatite_dust').id('AVSP:create_thermal_compat/pressing/apatite')

	//SULFUR
	event.recipes.createPressing('emendatusenigmatica:sulfur_gem', 'emendatusenigmatica:sulfur_dust').id('AVSP:create_thermal_compat/pressing/sulfur')

	//POTASSIUM NITRATE / NITER
	event.recipes.createPressing('emendatusenigmatica:potassium_nitrate_gem', 'emendatusenigmatica:potassium_nitrate_dust').id('AVSP:create_thermal_compat/pressing/potassium_nitrate')

	//DIMENSIONAL
	event.recipes.createPressing('emendatusenigmatica:dimensional_gem', 'emendatusenigmatica:dimensional_dust').id('AVSP:create_thermal_compat/pressing/dimensional')

	//CHARCOAL
	event.recipes.createPressing('minecraft:charcoal', 'emendatusenigmatica:charcoal_dust').id('AVSP:create_thermal_compat/pressing/charcoal')

	//OBSIDIAN
	//event.recipes.createPressing('minecraft:obsidian', '4x emendatusenigmatica:obsidian_dust').id('AVSP:create_thermal_compat/pressing/obsidian_dust')

	//ENDERPEARL
	event.recipes.createPressing('minecraft:ender_pearl', 'emendatusenigmatica:ender_dust').id('AVSP:create_thermal_compat/pressing/ender_pearl')
//
//fin
//
})