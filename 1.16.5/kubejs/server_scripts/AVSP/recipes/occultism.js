//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//OCCULTISM INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
//REMOVAL OF UNUSED RECIPES
	event.remove({id: 'occultism:miner/ores/niter_ore'})

//
//Gonna make this real easy

//mw = Miner weight, cc = Crusher output count, ct = Crusher time, withC = With crusher recipe, removeRecipe = removes the old miner recipe that creates ores, not chunks.
	let occultComp = (material, mw, cc, ct, withC, removeRecipe, isIngot) => {
		event.custom({
			type: 'occultism:miner',
			ingredient: {
				tag: 'occultism:miners/ores'
			},
			result: {
				item: `emendatusenigmatica:${material}_chunk`
			},
			weight: mw
		}).id(`AVSP:occultism/miner/chunks/${material}_chunk`)

	if (withC) {
		event.custom({
			type: 'occultism:crushing',
			ingredient: {
				item: `emendatusenigmatica:${material}_chunk`
			},
			result: {
				item: `emendatusenigmatica:${material}_dust`,
				count: cc
			},
			crushing_time: ct,
			ignore_crushing_multiplier: true
		}).id(`AVSP:occultism/crushing/${material}_dust`)

	if (removeRecipe) {
		event.remove({id: `occultism:miner/ores/${material}_ore`})
		event.remove({id: `occultism:crushing/${material}_dust`})
		event.remove({id: `occultism:crushing/${material}_dust_from_ingot`})

	if (isIngot) {
		event.custom({
			type: 'occultism:crushing',
			ingredient: {
				tag: `forge:ingots/${material}`
			},
			result: {
				item: `emendatusenigmatica:${material}_dust`,
				count: 1
			},
			crushing_time: 100,
			ignore_crushing_multiplier: true
		}).id(`AVSP:occultism/crushing/${material}_dust_from_ingot`)
}}}}

//
//HERE WE DO THE ACTUAL MATERIALS
//
	occultComp('coal', 2500, 2, 100, true, true, false)
	occultComp('iron', 2000, 2, 100, true, true, true)
	occultComp('gold', 550, 2, 100, true, true, true)
	occultComp('diamond', 400, 2, 100, true, true, false)
	occultComp('emerald', 350, 2, 100, true, true, false)
	occultComp('lapis', 500, 6, 100, true, true, false)
	occultComp('redstone', 7000, 6, 100, false, true, false) //redstone needs its own recipe for crushing.
	occultComp('copper', 2000, 2, 100, true, true, true)
	occultComp('aluminum', 1200, 2, 100, true, true, true)
	occultComp('silver', 1000, 2, 100, true, true, true)
	occultComp('lead', 1500, 2, 100, true, true, true)
	occultComp('nickel', 1000, 2, 100, true, true, true)
	occultComp('uranium', 500, 2, 100, true, true, true)
	occultComp('osmium', 1500, 2, 100, true, true, true)
	occultComp('tin', 1800, 2, 100, true, true, true)
	occultComp('zinc', 1000, 2, 100, true, true, true)
	occultComp('fluorite', 450, 6, 100, true, true, false)
	occultComp('cinnabar', 500, 2, 100, true, true, false)
	occultComp('apatite', 700, 8, 100, true, true, false)
	occultComp('sulfur', 2000, 4, 100, true, true, false)
	occultComp('potassium_nitrate', 400, 6, 100, true, true, false)
	occultComp('dimensional', 200, 4, 100, true, true, false)
	occultComp('cobalt', 200, 2, 100, true, true, true, false)

//
//Redstone being redstone
	event.custom({
		type: 'occultism:crushing',
		ingredient: {
			item: `emendatusenigmatica:redstone_chunk`
		},
		result: {
				item: `minecraft:redstone`,
				count: 6
		},
		crushing_time: 100,
		ignore_crushing_multiplier: true
	}).id(`AVSP:occultism/crushing/redstone_dust`)
	event.remove({id: `occultism:miner/ores/redstone_ore`})
//
//fin
//
})