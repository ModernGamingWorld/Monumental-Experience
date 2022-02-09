//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//THERMAL RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//Emendatus Enigmatica cinnabar as a catalyst.
	event.recipes.thermal.smelter_catalyst('emendatusenigmatica:cinnabar_gem').primaryMod(3.0).secondaryMod(3.0).energyMod(2.5).minChance(0.0).useChance(0.8)

    //Custom catalysts
    event.recipes.thermal.pulverizer_catalyst('emendatusenigmatica:diamond_dust').primaryMod(1.75).secondaryMod(3.25).energyMod(0.20).minChance(0.0).useChance(0.5)

	//Changing some inputs.
	event.replaceInput({}, 'thermal:bitumen', '#forge:gems/bitumen')
	event.replaceInput({}, '#forge:bitumen', '#forge:gems/bitumen')
	event.replaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar')
    event.replaceInput({}, 'thermal:apatite', '#forge:gems/apatite')
    event.replaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur')
    event.replaceInput({}, 'thermal:niter', '#forge:gems/niter')
    event.replaceInput({}, 'thermal:coal_coke', '#forge:gems/coal_coke')
    event.replaceInput({}, '#forge:coal_coke', '#forge:gems/coal_coke')

    //Adding new recipes.
    event.recipes.thermal.pulverizer('4x emendatusenigmatica:obsidian_dust', 'minecraft:obsidian').id('AVSP:thermal/pulverizer/obsidian_dust')
    event.recipes.thermal.pulverizer('emendatusenigmatica:coal_dust', 'minecraft:coal').id('AVSP:thermal/pulverizer/coal_dust')
    event.recipes.thermal.pulverizer('emendatusenigmatica:fluorite_dust', 'emendatusenigmatica:fluorite_gem').id('AVSP:thermal/pulverizer/fluorite_dust')

//
//Removing recipes for the chunk to gem functions.
//Comment out this entire section if you don't wish to use this feature.
//
    //COAL
    event.remove({id: 'thermal:machine/smelter/smelter_coal_ore'})
    //DIAMOND
    event.remove({id: 'thermal:machine/smelter/smelter_diamond_ore'})
    //EMERALD
    event.remove({id: 'thermal:machine/smelter/smelter_emerald_ore'})
    //LAPIS
    event.remove({id: 'thermal:machine/smelter/smelter_lapis_ore'})
    //REDSTONE
    event.remove({id: 'thermal:machine/smelter/smelter_redstone_ore'})
    //CINNABAR
    event.remove({id: 'thermal:machine/smelter/smelter_cinnabar_ore'})
    //APATITE
    event.remove({id: 'thermal:machine/smelter/smelter_apatite_ore'})
    //SULFUR
    event.remove({id: 'thermal:machine/smelter/smelter_sulfur_ore'})
    //NITER / POTASSIUM NITRATE
    event.remove({id: 'thermal:machine/smelter/smelter_niter_ore'})


//
// CHUNKS TO DUST - DUST TO GEMS
//

//PULVERIZER RECIPES
//

    //COAL
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_coal_ore'}, '#minecraft:coals', 'emendatusenigmatica:coal_dust')
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_coal_ore'}, '#forge:gems/sulfur', 'emendatusenigmatica:sulfur_dust')

    //DIAMOND
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_diamond_ore'}, '#forge:gems/diamond', 'emendatusenigmatica:diamond_dust')

    //EMERALD
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_emerald_ore'}, '#forge:gems/emerald', 'emendatusenigmatica:emerald_dust')

    //LAPIS
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_lapis_ore'}, '#forge:gems/lapis', 'emendatusenigmatica:lapis_dust')
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_lapis_ore'}, '#forge:gems/sulfur', 'emendatusenigmatica:sulfur_dust')

    //REDSTONE
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_redstone_ore'}, '#forge:gems/cinnabar', 'emendatusenigmatica:cinnabar_dust')

    //FLUORITE
    event.replaceOutput({id:'thermal:compat/mekanism/pulverizer_mekanism_fluorite_ore'}, '#forge:gems/fluorite', 'emendatusenigmatica:fluorite_dust')

    //CINNABAR
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_cinnabar_ore'}, '#forge:gems/cinnabar', 'emendatusenigmatica:cinnabar_dust')

    //APATITE
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_apatite_ore'}, '#forge:gems/apatite', 'emendatusenigmatica:apatite_dust')

    //SULFUR
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_sulfur_ore'}, '#forge:gems/sulfur', 'emendatusenigmatica:sulfur_dust')

    //NITER / POTASSIUM NITRATE
    event.replaceOutput({id:'thermal:machine/pulverizer/pulverizer_niter_ore'}, '#forge:gems/niter', 'emendatusenigmatica:potassium_nitrate_dust')

    //DIMENSIONAL
    event.recipes.thermal.pulverizer('6x emendatusenigmatica:dimensional_dust', 'emendatusenigmatica:dimensional_chunk').id('AVSP:thermal/pulverizer/dimensional_chunk_to_gem')

    //CHARCOAL
    event.recipes.thermal.pulverizer('emendatusenigmatica:charcoal_dust', 'minecraft:charcoal').id('AVSP:thermal/pulverizer/charcoal_dust')

//MULTISERVO PRESS RECIPES
//

    //COAL
    event.recipes.thermal.press('minecraft:coal', 'emendatusenigmatica:coal_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/coal')

    //DIAMOND
    event.recipes.thermal.press('minecraft:diamond', 'emendatusenigmatica:diamond_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/diamond')

    //EMERALD
    event.recipes.thermal.press('minecraft:emerald', 'emendatusenigmatica:emerald_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/emerald')

    //LAPIS
    event.recipes.thermal.press('minecraft:lapis_lazuli', 'emendatusenigmatica:lapis_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/lapis')

    //FLUORITE
    event.recipes.thermal.press('emendatusenigmatica:fluorite_gem', 'emendatusenigmatica:fluorite_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/fluorite')

    //CINNABAR
    event.recipes.thermal.press('emendatusenigmatica:cinnabar_gem', 'emendatusenigmatica:cinnabar_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/cinnabar')

    //APATITE
    event.recipes.thermal.press('emendatusenigmatica:apatite_gem', 'emendatusenigmatica:apatite_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/apatite')

    //SULFUR
    event.recipes.thermal.press('emendatusenigmatica:sulfur_gem', 'emendatusenigmatica:sulfur_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/sulfur')

    //NITER POTASSIUM NITRATE
    event.recipes.thermal.press('emendatusenigmatica:potassium_nitrate_gem', 'emendatusenigmatica:potassium_nitrate_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/potassium_nitrate-niter')

    //DIMENSIONAl
    event.recipes.thermal.press('emendatusenigmatica:dimensional_gem', 'emendatusenigmatica:dimensional_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/dimensional')

    //CHARCOAL
    event.recipes.thermal.press('minecraft:charcoal', 'emendatusenigmatica:charcoal_dust').id('AVSP:thermal/multiservo_press/dust_to_gems/charcoal')

    //OBSIDIAN
    event.recipes.thermal.press('minecraft:obsidian', '4x emendatusenigmatica:obsidian_dust').id('AVSP:thermal/multiservo_press/obsidian_dust_to_block')

    //ENDERPEARL
    event.recipes.thermal.press('minecraft:ender_pearl', 'emendatusenigmatica:ender_dust').id('AVSP:thermal/multiservo_press/ender_pearl')

//
//fin
//
})