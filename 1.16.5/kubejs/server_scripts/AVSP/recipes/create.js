//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//CREATE RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//man have i not beeing looking forward to doing these.

//
//REMOVAL OF NOW UNUSED RECIPES
//
	//OBSIDIAN DUST
	event.remove({id: 'create:crushing/obsidian'})
	
	//COAL
	event.remove({id: 'create:crushing/coal_ore'})

	//DIAMOND
	event.remove({id: 'create:crushing/diamond_ore'})

	//EMERALD
	event.remove({id: 'create:crushing/emerald_ore'})

	//LAPIS
	event.remove({id: 'create:crushing/lapis_ore'})

	//REDSTONE
	event.remove({id: 'create:crushing/redstone_ore'})

//
//CHANGING SOME INPUTS
//
	event.replaceInput({}, 'create:powdered_obsidian', 'emendatusenigmatica:obsidian_dust')

//
//CRUSHING
//
	//OBSIDIAN
	event.recipes.createCrushing([
		'4x emendatusenigmatica:obsidian_dust',
		item.of('minecraft:crying_obsidian').withChance(0.001)],
		'minecraft:obsidian').id('AVSP:create/crushing/obsidian')

	//COAL
	event.recipes.createCrushing([
		'emendatusenigmatica:coal_crushed',
		item.of('2x emendatusenigmatica:coal_crushed').withChance(0.3),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/coal').id('AVSP:create/crushing/coal')

	//DIAMOND
	event.recipes.createCrushing([
		'2x emendatusenigmatica:diamond_crushed',
		item.of('emendatusenigmatica:diamond_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/diamond').id('AVSP:create/crushing/diamond')

	//EMERALD
	event.recipes.createCrushing([
		'2x emendatusenigmatica:emerald_crushed',
		item.of('emendatusenigmatica:emerald_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/emerald').id('AVSP:create/crushing/emerald')

	//LAPIS
	event.recipes.createCrushing([
		'12x emendatusenigmatica:lapis_crushed',
		item.of('8x emendatusenigmatica:lapis_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/lapis').id('AVSP:create/crushing/lapis')

	//REDSTONE
	event.recipes.createCrushing([
		'8x emendatusenigmatica:redstone_crushed',
		item.of('6x emendatusenigmatica:redstone_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/redstone').id('AVSP:create/crushing/redstone')

	//COBALT
	event.recipes.createCrushing([
		'emendatusenigmatica:cobalt_crushed',
		item.of('2x emendatusenigmatica:cobalt_crushed').withChance(0.3),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/cobalt').id('AVSP:create/crushing/cobalt')

	//FLUORITE
	event.recipes.createCrushing([
		'8x emendatusenigmatica:fluorite_crushed',
		item.of('6x emendatusenigmatica:fluorite_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/fluorite').id('AVSP:create/crushing/fluorite')

	//CINNABAR
	event.recipes.createCrushing([
		'2x emendatusenigmatica:cinnabar_crushed',
		item.of('emendatusenigmatica:cinnabar_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/cinnabar').id('AVSP:create/crushing/cinnabar')

	//APATITE
	event.recipes.createCrushing([
		'12x emendatusenigmatica:apatite_crushed',
		item.of('6x emendatusenigmatica:apatite_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/apatite').id('AVSP:create/crushing/apatite')

	//SULFUR
	event.recipes.createCrushing([
		'8x emendatusenigmatica:sulfur_crushed',
		item.of('6x emendatusenigmatica:sulfur_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/sulfur').id('AVSP:create/crushing/sulfur')

	//POTASSIUM NITRATE / NITER
	event.recipes.createCrushing([
		'8x emendatusenigmatica:potassium_nitrate_crushed',
		item.of('6x emendatusenigmatica:potassium_nitrate_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/potassium_nitrate').id('AVSP:create/crushing/potassium_nitrate-niter')

	//DIMENSIONAL
	event.recipes.createCrushing([
		'8x emendatusenigmatica:dimensional_crushed',
		item.of('6x emendatusenigmatica:dimensional_crushed').withChance(0.25),
		item.of('minecraft:cobblestone').withChance(0.12)],
		'#forge:ores/dimensional').id('AVSP:create/crushing/dimensional')

//
//MILLING
//
	//COBALT
	event.recipes.createMilling('emendatusenigmatica:cobalt_crushed', '#forge:ores/cobalt').id('AVSP:create/milling/cobalt')

//
//MIXING
//
	//BRONZE
	event.recipes.createMixing(
		'4x emendatusenigmatica:bronze_crushed',[
		'create:crushed_tin_ore',
		'3x create:crushed_copper_ore'
		]).heated().id('AVSP:create/mixing/bronze')

	//CONSTANTAN
	event.recipes.createMixing(
		'2x emendatusenigmatica:constantan_crushed',[
		'create:crushed_nickel_ore',
		'create:crushed_copper_ore'
		]).heated().id('AVSP:create/mixing/constantan')

	//ELECTRUM
	event.recipes.createMixing(
		'2x emendatusenigmatica:electrum_crushed',[
		'create:crushed_gold_ore',
		'create:crushed_silver_ore'
		]).heated().id('AVSP:create/mixing/electrum')

	//INVAR
	event.recipes.createMixing(
		'3x emendatusenigmatica:invar_crushed',[
		'2x create:crushed_iron_ore',
		'create:crushed_nickel_ore'
		]).heated().id('AVSP:create/mixing/invar')

	//SIGNALUM
	event.recipes.createMixing(
		'4x emendatusenigmatica:signalum_crushed',[
		'create:crushed_silver_ore',
		'3x create:crushed_copper_ore',
		'4x #forge:dusts/redstone'
		]).heated().id('AVSP:create/mixing/signalum')

	//LUMIUM
	event.recipes.createMixing(
		'4x emendatusenigmatica:lumium_crushed',[
		'create:crushed_silver_ore',
		'3x create:crushed_tin_ore',
		'2x #forge:dusts/glowstone'
		]).heated().id('AVSP:create/mixing/lumium')

	//ENDERIUM
	event.recipes.createMixing(
		'2x emendatusenigmatica:enderium_crushed',[
		'emendatusenigmatica:diamond_crushed',
		'3x create:crushed_lead_ore',
		'2x #forge:dusts/ender'
		]).heated().id('AVSP:create/mixing/enderium')

//
//BULK WASHING
//
	//LAPIS
	event.recipes.createSplashing([
		'minecraft:lapis_lazuli',
		item.of('minecraft:lapis_lazuli').withChance(0.2)],
		'emendatusenigmatica:lapis_crushed').id('AVSP:create/bulk_washing/lapis')

	//REDSTONE
	event.recipes.createSplashing([
		'minecraft:redstone',
		item.of('minecraft:redstone').withChance(0.2)],
		'emendatusenigmatica:redstone_crushed').id('AVSP:create/bulk_washing/redstone')

	//COBALT
	event.recipes.createSplashing([
		'10x emendatusenigmatica:cobalt_nugget',
		item.of('5x emendatusenigmatica:cobalt_nugget').withChance(0.5)],
		'emendatusenigmatica:cobalt_crushed').id('AVSP:create/bulk_washing/cobalt')

	//BRONZE
	event.recipes.createSplashing([
		'10x emendatusenigmatica:bronze_nugget',
		item.of('5x emendatusenigmatica:bronze_nugget').withChance(0.5)],
		'emendatusenigmatica:bronze_crushed').id('AVSP:create/bulk_washing/bronze')

	//CONSTANTAN
	event.recipes.createSplashing([
		'10x emendatusenigmatica:constantan_nugget',
		item.of('5x emendatusenigmatica:constantan_nugget').withChance(0.5)],
		'emendatusenigmatica:constantan_crushed').id('AVSP:create/bulk_washing/constantan')

	//ELECTRUM
	event.recipes.createSplashing([
		'10x emendatusenigmatica:electrum_nugget',
		item.of('5x emendatusenigmatica:electrum_nugget').withChance(0.5)],
		'emendatusenigmatica:electrum_crushed').id('AVSP:create/bulk_washing/electrum')

	//INVAR
	event.recipes.createSplashing([
		'10x emendatusenigmatica:invar_nugget',
		item.of('5x emendatusenigmatica:invar_nugget').withChance(0.5)],
		'emendatusenigmatica:invar_crushed').id('AVSP:create/bulk_washing/invar')

	//SIGNALUM
	event.recipes.createSplashing([
		'10x emendatusenigmatica:signalum_nugget',
		item.of('5x emendatusenigmatica:signalum_nugget').withChance(0.5)],
		'emendatusenigmatica:signalum_crushed').id('AVSP:create/bulk_washing/signalum')

	//LUMIUM
	event.recipes.createSplashing([
		'10x emendatusenigmatica:lumium_nugget',
		item.of('5x emendatusenigmatica:lumium_nugget').withChance(0.5)],
		'emendatusenigmatica:lumium_crushed').id('AVSP:create/bulk_washing/lumium')

	//ENDERIUM
	event.recipes.createSplashing([
		'10x emendatusenigmatica:enderium_nugget',
		item.of('5x emendatusenigmatica:enderium_nugget').withChance(0.5)],
		'emendatusenigmatica:enderium_crushed').id('AVSP:create/bulk_washing/enderium')

//
//SMELTING
//
	let multiSmelt = (output, input, includeBlasting, name) => {
    	event.smelting(output, input).xp(0.1).id(`AVSP:create/crushed_smelting/smelting/${name}`)
    
    if (includeBlasting) {
    	event.blasting(output, input).xp(0.1).id(`AVSP:create/crushed_smelting/blasting/${name}`)
    }
	}
	//COBALT
	multiSmelt('emendatusenigmatica:cobalt_ingot', 'emendatusenigmatica:cobalt_crushed', true, 'cobalt')

	//BRONZE
	multiSmelt('emendatusenigmatica:bronze_ingot', 'emendatusenigmatica:bronze_crushed', true, 'bronze')

	//CONSTANTAN
	multiSmelt('emendatusenigmatica:constantan_ingot', 'emendatusenigmatica:constantan_crushed', true, 'constantan')

	//ELECTRUM
	multiSmelt('emendatusenigmatica:electrum_ingot', 'emendatusenigmatica:electrum_crushed', true, 'electrum')
	
	//INVAR
	multiSmelt('emendatusenigmatica:invar_ingot', 'emendatusenigmatica:invar_crushed', true, 'invar')

	//SIGNALUM
	multiSmelt('emendatusenigmatica:signalum_ingot', 'emendatusenigmatica:signalum_crushed', true, 'signalum')

	//LUMIUM
	multiSmelt('emendatusenigmatica:lumium_ingot', 'emendatusenigmatica:lumium_crushed', true, 'lumium')

	//ENDERIUM
	multiSmelt('emendatusenigmatica:enderium_ingot', 'emendatusenigmatica:enderium_crushed', true, 'enderium')

//
//PRESSING
//
	/*
	I have this idea that all crushed 'gems' will have to be pressed to be made into gems again.
	I'll include compatibility scripts to include thermal, mekanism, etc. presses.
	*/
	
	//COAL
	event.recipes.createPressing('minecraft:coal', 'emendatusenigmatica:coal_crushed').id('AVSP:create/pressing/coal')

	//DIAMOND
	event.recipes.createPressing('minecraft:diamond', 'emendatusenigmatica:diamond_crushed').id('AVSP:create/pressing/diamond')

	//EMERALD
	event.recipes.createPressing('minecraft:emerald', 'emendatusenigmatica:emerald_crushed').id('AVSP:create/pressing/emerald')

	//CINNABAR
	event.recipes.createPressing('emendatusenigmatica:cinnabar_gem', 'emendatusenigmatica:cinnabar_crushed').id('AVSP:create/pressing/cinnabar')

	//APATITE
	event.recipes.createPressing('emendatusenigmatica:apatite_gem', 'emendatusenigmatica:apatite_crushed').id('AVSP:create/pressing/apatite')

	//SULFUR
	event.recipes.createPressing('emendatusenigmatica:sulfur_gem', 'emendatusenigmatica:sulfur_crushed').id('AVSP:create/pressing/sulfur')

	//POTASSIUM NITRATE / NITER
	event.recipes.createPressing('emendatusenigmatica:potassium_nitrate_gem', 'emendatusenigmatica:potassium_nitrate_crushed').id('AVSP:create/pressing/potassium_nitrate-niter')

	//DIMENSIONAL
	event.recipes.createPressing('emendatusenigmatica:dimensional_gem', 'emendatusenigmatica:dimensional_crushed').id('AVSP:create/pressing/dimensional')

//
//OVERALL DUST COMPATIBILITY
//
	let crushDaddy = (output, input, includeMilling, name) => {
    	event.recipes.createCrushing(output, input).id(`AVSP:create/material_to_dust/crushing/${name}`)
    
    if (includeMilling) {
    	event.recipes.createMilling(output, input).id(`AVSP:create/material_to_dust/milling/${name}`)
    }
	}
	//CHARCOAL
	crushDaddy('emendatusenigmatica:charcoal_dust', '#forge:charcoal', true, 'charcoal')

	//ENDERPEARL
	crushDaddy('emendatusenigmatica:ender_dust', 'minecraft:ender_pearl', true, 'enderpearl')

	//COAL
	crushDaddy('emendatusenigmatica:coal_dust', 'minecraft:coal', true, 'coal')

	//IRON
	crushDaddy('emendatusenigmatica:iron_dust', '#forge:ingots/iron', true, 'iron')

	//GOLD
	crushDaddy('emendatusenigmatica:gold_dust', '#forge:ingots/gold', true, 'gold')

	//DIAMOND
	crushDaddy('emendatusenigmatica:diamond_dust', '#forge:gems/diamond', true, 'diamond')

	//EMERALD
	crushDaddy('emendatusenigmatica:emerald_dust', '#forge:gems/emerald', true, 'emerald')

	//LAPIS
	crushDaddy('emendatusenigmatica:lapis_dust', '#forge:gems/lapis', true, 'lapis')

	//NETHER QUARTZ
	crushDaddy('emendatusenigmatica:quartz_dust', '#forge:gems/quartz', true, 'nether_quartz')

	//COPPER
	crushDaddy('emendatusenigmatica:copper_dust', '#forge:ingots/copper', true, 'copper')

	//ALUMINUM
	crushDaddy('emendatusenigmatica:aluminum_dust', '#forge:ingots/aluminum', true, 'aluminum')

	//SILVER
	crushDaddy('emendatusenigmatica:silver_dust', '#forge:ingots/silver', true, 'silver')

	//LEAD
	crushDaddy('emendatusenigmatica:lead_dust', '#forge:ingots/lead', true, 'lead')

	//NICKEL
	crushDaddy('emendatusenigmatica:nickel_dust', '#forge:ingots/nickel', true, 'nickel')

	//URANIUM
	crushDaddy('emendatusenigmatica:uranium_dust', '#forge:ingots/uranium', true, 'uranium')

	//OSMIUM
	crushDaddy('emendatusenigmatica:osmium_dust', '#forge:ingots/osmium', true, 'osmium')

	//TIN
	crushDaddy('emendatusenigmatica:tin_dust', '#forge:ingots/tin', true, 'tin')

	//ZINC
	crushDaddy('emendatusenigmatica:zinc_dust', '#forge:ingots/zinc', true, 'zinc')

	//COBALT
	crushDaddy('emendatusenigmatica:cobalt_dust', '#forge:ingots/cobalt', true, 'cobalt')

	//FLUORITE
	crushDaddy('emendatusenigmatica:fluorite_dust', '#forge:gems/fluorite', true, 'fluorite')

	//CINNABAR
	crushDaddy('emendatusenigmatica:cinnabar_dust', '#forge:gems/cinnabar', true, 'cinnabar')

	//APATITE
	crushDaddy('emendatusenigmatica:apatite_dust', '#forge:gems/apatite', true, 'apatite')

	//SULFUR
	crushDaddy('emendatusenigmatica:sulfur_dust', '#forge:gems/sulfur', true, 'sulfur')

	//POTASSIUM NITRATE
	crushDaddy('emendatusenigmatica:potassium_nitrate_dust', '#forge:gems/potassium_nitrate', true, 'potassium_nitrate-niter')

	//DIMENSIONAL
	crushDaddy('emendatusenigmatica:dimensional_dust', '#forge:gems/dimensional', true, 'dimensional')

	//BRONZE
	crushDaddy('emendatusenigmatica:bronze_dust', '#forge:ingots/bronze', true, 'bronze')

	//BRASS
	crushDaddy('emendatusenigmatica:brass_dust', '#forge:ingots/brass', true, 'brass')

	//CONSTANTAN
	crushDaddy('emendatusenigmatica:constantan_dust', '#forge:ingots/constantan', true, 'constantan')

	//ELECTRUM
	crushDaddy('emendatusenigmatica:electrum_dust', '#forge:ingots/electrum', true, 'electrum')

	//STEEL
	crushDaddy('emendatusenigmatica:steel_dust', '#forge:ingots/steel', false, 'steel') //I feel like steel is a hard it can't be milled.

	//INVAR
	crushDaddy('emendatusenigmatica:invar_dust', '#forge:ingots/invar', true, 'invar')

	//SIGNALUM
	crushDaddy('emendatusenigmatica:signalum_dust', '#forge:ingots/signalum', true, 'signalum')

	//LUMIUM
	crushDaddy('emendatusenigmatica:lumium_dust', '#forge:ingots/lumium', true, 'lumium')

	//ENDERIUM
	crushDaddy('emendatusenigmatica:lumium_dust', '#forge:ingots/lumium', true, 'enderium')
//
//fin
//
})