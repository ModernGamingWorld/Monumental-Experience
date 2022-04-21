//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//TINKERS CONSTRUCT INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
//
//SMELTERY
//

	//This function will change the default output of tinkers construct to emendatus enigmatica. It also allows for full customization of fluid amount, cooltimes, etc.
	//Scroll down for a lift of parameters.
	let tinkersComp = (material, mod, iAmount, iCoolingtime, block, bAmount, bCoolingtime, nugget, nAmount, nCoolingtime, plate, pAmount, pCoolingtime, rod, rAmount, rCoolingtime, gear, gAmount, gCoolingtime, removeRecipes) => {
		//don't change any of these unless you know what you are doing.
		event.custom({
			type: `tconstruct:casting_table`,
			cast: {
				tag: `tconstruct:casts/multi_use/ingot`
			},
			fluid: {
				tag: `${mod}:molten_${material}`,
				amount: iAmount
			},
			result: {
				item: `emendatusenigmatica:${material}_ingot`
			},
			cooling_time: iCoolingtime
		}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/ingot_gold_cast`)

		event.custom({
			type: `tconstruct:casting_table`,
			cast: {
				tag: `tconstruct:casts/single_use/ingot`
			},
			cast_consumed: true,
			fluid: {
				tag: `${mod}:molten_${material}`,
				amount: iAmount
			},
			result: {
				item: `emendatusenigmatica:${material}_ingot`
			},
			cooling_time: iCoolingtime
		}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/ingot_sand_cast`)

		//BLOCK
		if (block) {
			event.custom({
				type: `tconstruct:casting_basin`,
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: bAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_block`
				},
				cooling_time: bCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/block`)

		//NUGGET
		if (nugget) {
			event.custom({
				type: `tconstruct:casting_table`,
				cast: {
					tag: `tconstruct:casts/multi_use/nugget`
				},
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: nAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_nugget`
				},
				cooling_time: nCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/nugget_gold_cast`)

			event.custom({
				type: `tconstruct:casting_table`,
				cast: {
					tag: `tconstruct:casts/single_use/nugget`
				},
				cast_consumed: true,
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: nAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_nugget`
				},
				cooling_time: nCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/nugget_sand_cast`)

		//PLATE
		if (plate) {
			event.custom({
				type: `tconstruct:casting_table`,
				conditions: [
				{
					value: {
						tag: `forge:plates/${material}`,
						type: `forge:tag_empty`
					},
					type: `forge:not`
				}],
				cast: {
					tag: `tconstruct:casts/multi_use/plate`
				},
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: pAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_plate`
				},
				cooling_time: pCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/plate_gold_cast`)

			event.custom({
				type: `tconstruct:casting_table`,
				conditions: [
				{
					value: {
						tag: `forge:plates/${material}`,
						type: `forge:tag_empty`
					},
					type: `forge:not`
				}
				],
				cast: {
					tag: `tconstruct:casts/single_use/plate`
				},
				cast_consumed: true,
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: pAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_plate`
				},
				cooling_time: pCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/plate_sand_cast`)

		//ROD
		if (rod) {
			event.custom({
				type: `tconstruct:casting_table`,
				conditions: [
				{
					value: {
						tag: `forge:rods/${material}`,
						type: `forge:tag_empty`
					},
					type: `forge:not`
				}
				],
				cast: {
					tag: `tconstruct:casts/multi_use/rod`
				},
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: rAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_rod`
				},
				cooling_time: rCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/rod_gold_cast`)

			event.custom({
				type: `tconstruct:casting_table`,
				conditions: [
				{
					value: {
						tag: `forge:rods/${material}`,
						type: `forge:tag_empty`
					},
					type: `forge:not`
				}
				],
				cast: {
					tag: `tconstruct:casts/single_use/rod`
				},
				cast_consumed: true,
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: rAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_rod`
				},
				cooling_time: rCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/rod_sand_cast`)

		//GEAR
		if (gear) {
			event.custom({
				type: `tconstruct:casting_table`,
				conditions: [
				{
					value: {
						tag: `forge:gears/${material}`,
						type: "forge:tag_empty"
					},
					type: `forge:not`
				}
				],
				cast: {
					tag: `tconstruct:casts/multi_use/gear`
				},
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: gAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_gear`
				},
				cooling_time: gCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/gear_gold_cast`)

			event.custom({
				type: `tconstruct:casting_table`,
				conditions: [
				{
					value: {
						tag: `forge:gears/${material}`,
						type: `forge:tag_empty`
					},
					type: `forge:not`
				}
				],
				cast: {
					tag: `tconstruct:casts/single_use/gear`
				},
				cast_consumed: true,
				fluid: {
					tag: `${mod}:molten_${material}`,
					amount: gAmount
				},
				result: {
					item: `emendatusenigmatica:${material}_gear`
				},
				cooling_time: gCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/metal/${material}/gear_sand_cast`)


		//RECIPES
		if (removeRecipes) {
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/ingot_gold_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/ingot_sand_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/block`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/nugget_gold_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/nugget_sand_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/plate_gold_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/plate_sand_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/rod_gold_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/rod_sand_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/gear_gold_cast`})
			event.remove({id: `tconstruct:smeltery/casting/metal/${material}/gear_sand_cast`})

		}}}}}}}
//
//METALS - you can tweak this values as you please.
//

	tinkersComp(
		//materal
		'copper',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		50,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		150,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		17,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		50,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		35,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		100,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'aluminum',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		47,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		141,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		16,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		47,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		33,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		94,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'silver',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		60,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		179,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		20,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		60,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		42,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		120,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'lead',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		43,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		130,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		14,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		43,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		31,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		87,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'nickel',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		65,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		194,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		22,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		65,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		46,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		130,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'uranium',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		62,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		183,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		20,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		61,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		43,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		122,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'osmium',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		66,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		197,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		20,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		66,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		46,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		131,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'tin',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		39,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		117,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		13,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		39,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		28,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		78,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'zinc',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		48,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		141,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		16,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		47,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		33,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		94,
		//RemoveRecipes
		true)
	

//Alloyed metals.
	tinkersComp(
		//materal
		'bronze',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		57,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		171,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		19,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		57,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		40,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		144,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'brass',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		54,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		161,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		18,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		54,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		38,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		107,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'electrum',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		59,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		177,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		20,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		59,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		42,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		118,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'constantan',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		64,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		192,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		21,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		64,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		45,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		128,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'steel',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		65,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		194,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		22,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		65,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		46,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		130,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'invar',
		//mod
		'tconstruct',
		//iAmount
		144,
		//iCoolingtime
		63,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		190,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		21,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		63,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		45,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		127,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'lumium',
		//mod
		'forge', //eventually, this will be changed to tconstruct
		//iAmount
		144,
		//iCoolingtime
		68,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		203,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		23,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		68,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		48,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		136,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'signalum',
		//mod
		'forge', //eventually, this will be changed to tconstruct
		//iAmount
		144,
		//iCoolingtime
		70,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		210,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		23,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		70,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		49,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		140,
		//RemoveRecipes
		true)

	tinkersComp(
		//materal
		'enderium',
		//mod
		'forge', //eventually, this will be changed to tconstruct
		//iAmount
		144,
		//iCoolingtime
		76,
		//block
		true,
		//bAmount
		1296,
		//bCoolingtime
		229,
		//nugget
		true,
		//nAmount
		16,
		//nCoolingtime
		25,
		//plate
		true,
		//pAmount
		144,
		//pCoolingtime
		76,
		//rod
		true,
		//rAmount
		72,
		//rCoolingtime
		54,
		//gear
		true,
		//gAmount
		576,
		//gCoolingtime
		152,
		//RemoveRecipes
		true)

//GEMS
	//COAL - coal is just annoying.
		event.custom({
			type: `tconstruct:casting_table`,
			cast: {
				tag: `tconstruct:casts/multi_use/gem`
			},
			fluid: {
				tag: `forge:molten/coal`,
				amount: 144
			},
			result: {
				item: `minecraft:coal`
			},
			cooling_time: 40
		}).id(`AVSP:tconstruct/smeltery/casting/gem/coal/gem_gold_cast`)

		event.custom({
			type: `tconstruct:casting_table`,
			cast: {
				tag: `tconstruct:casts/single_use/gem`
			},
			cast_consumed: true,
			fluid: {
				tag: `forge:molten/coal`,
				amount: 144
			},
			result: {
				item: `minecraft:coal`
			},
			cooling_time: 40
		}).id(`AVSP:tconstruct/smeltery/casting/gem/coal/gem_sand_cast`)

		//BLOCK
			event.custom({
				type: `tconstruct:casting_basin`,
				fluid: {
					tag: `forge:molten/coal`,
					amount: 1296
				},
				result: {
					item: `minecraft:coal_block`
				},
				cooling_time: 300
			}).id(`AVSP:tconstruct/smeltery/casting/gem/coal/block`)
	
	//LAPIS - is annoying too, aperently.
		event.custom({
			type: `tconstruct:casting_table`,
			cast: {
				tag: `tconstruct:casts/multi_use/gem`
			},
			fluid: {
				tag: `forge:molten/lapis`,
				amount: 144
			},
			result: {
				item: `minecraft:lapis_lazuli`
			},
			cooling_time: 40
		}).id(`AVSP:tconstruct/smeltery/casting/gem/lapis/gem_gold_cast`)

		event.custom({
			type: `tconstruct:casting_table`,
			cast: {
				tag: `tconstruct:casts/single_use/gem`
			},
			cast_consumed: true,
			fluid: {
				tag: `forge:molten/lapis`,
				amount: 144
			},
			result: {
				item: `minecraft:lapis_lazuli`
			},
			cooling_time: 40
		}).id(`AVSP:tconstruct/smeltery/casting/gem/lapis/gem_sand_cast`)

		//BLOCK
			event.custom({
				type: `tconstruct:casting_basin`,
				fluid: {
					tag: `forge:molten/lapis`,
					amount: 1296
				},
				result: {
					item: `minecraft:lapis_block`
				},
				cooling_time: 300
			}).id(`AVSP:tconstruct/smeltery/casting/gem/lapis/block`)

//This function allows gems from other mods to me melted and cast at the smeltery.
	let tinkersGem = (material, gCoolingtime, block, bCoolingtime) => {
	//don't change any of these unless you know what you are doing.
		event.custom({
			type: `tconstruct:casting_table`,
			cast: {
				tag: `tconstruct:casts/multi_use/gem`
			},
			fluid: {
				tag: `forge:molten/${material}`,
				amount: 144
			},
			result: {
				item: `emendatusenigmatica:${material}_gem`
			},
			cooling_time: gCoolingtime
		}).id(`AVSP:tconstruct/smeltery/casting/gem/${material}/gem_gold_cast`)

		event.custom({
			type: `tconstruct:casting_table`,
			cast: {
				tag: `tconstruct:casts/single_use/gem`
			},
			cast_consumed: true,
			fluid: {
				tag: `forge:molten/${material}`,
				amount: 144
			},
			result: {
				item: `emendatusenigmatica:${material}_gem`
			},
			cooling_time: gCoolingtime
		}).id(`AVSP:tconstruct/smeltery/casting/gem/${material}/gem_sand_cast`)

		if (block) {
			event.custom({
				type: `tconstruct:casting_basin`,
				fluid: {
					tag: `forge:molten/${material}`,
					amount: 1296
				},
				result: {
					item: `emendatusenigmatica:${material}_block`
				},
				cooling_time: bCoolingtime
			}).id(`AVSP:tconstruct/smeltery/casting/gem/${material}/block`)
		}}

	//these values might have to be tweaked in the future.
		tinkersGem(`fluorite`, 40, true, 300)
		tinkersGem(`cinnabar`, 40, true, 300)
		tinkersGem(`apatite`, 40, true, 300)
		tinkersGem(`sulfur`, 40, true, 300)
		tinkersGem(`potassium_nitrate`, 40, true, 300)

//
//MELTING MATERIALS
//
	//don't change any of these unless you know what you are doing.
	let tinkersMelt = (material, type, mod, amount, temp, time) => {
		event.custom({
			type: `tconstruct:melting`,
			ingredient: {
				tag: `forge:${type}/${material}`
			},
			result: {
				fluid: `${mod}:molten_${material}`,
				amount: amount
			},
			temperature: temp,
			time: time
		}).id(`AVSP:tconstruct/smelting/${type}/${material}`)
	}

//Change this as you please.
	//COAL
		event.custom({
			type: `tconstruct:melting`,
			ingredient: {
				item: `minecraft:coal`
			},
			result: {
				fluid: `emendatusenigmatica:molten_coal`,
				amount: 144
			},
			temperature: 950,
			time: 40
		}).id(`AVSP:tconstruct/smelting/coal_gems`)

		event.custom({
			type: `tconstruct:melting`,
			ingredient: {
				item: `minecraft:coal_block`
			},
			result: {
				fluid: `emendatusenigmatica:molten_coal`,
				amount: 1296
			},
			temperature: 950,
			time: 360
		}).id(`AVSP:tconstruct/smelting/coal_block`)

	tinkersMelt(
		`coal`,
		`ores`,
		`emendatusenigmatica`,
		288,
		950,
		80)	

	tinkersMelt(
		`coal`,
		`clusters`,
		`emendatusenigmatica`,
		1152,
		950,
		320)

	tinkersMelt(
		`coal`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)

	//DIAMOND
	tinkersMelt(
		`diamond`,
		`clusters`,
		`tconstruct`,
		1152,
		1450,
		450)

	tinkersMelt(
		`diamond`,
		`dusts`,
		`tconstruct`,
		144,
		950,
		65)

	//EMERALD
	tinkersMelt(
		`emerald`,
		`clusters`,
		`tconstruct`,
		1152,
		934,
		348)

	tinkersMelt(
		`emerald`,
		`dusts`,
		`tconstruct`,
		144,
		934,
		80)

	//CERTUS QUARTZ
	tinkersMelt(
		`certus_quartz`,
		`ores`,
		`emendatusenigmatica`,
		288,
		1400,
		80)

	tinkersMelt(
		`certus_quartz`,
		`storage_blocks`,
		`emendatusenigmatica`,
		576,
		1400,
		400)

	tinkersMelt(
		`certus_quartz`,
		`clusters`,
		`emendatusenigmatica`,
		1152,
		1400,
		320)

	tinkersMelt(
		`certus_quartz`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)
/*
	tinkersMelt(
		`certus_quartz`,
		`gems`,
		`emendatusenigmatica`,
		144,
		1400,
		40)
*/
	//CHARGED CERTUS QUARTZ
	tinkersMelt(
		`charged_certus_quartz`,
		`ores`,
		`emendatusenigmatica`,
		288,
		1400,
		80)
/*this is broken for now
	tinkersMelt(
		`charged_certus_quartz`,
		`storage_blocks`,
		`emendatusenigmatica`,
		576,
		1400,
		40)

	tinkersMelt(
		`charged_certus_quartz`,
		`clusters`,
		`emendatusenigmatica`,
		1152,
		1400,
		320)

	tinkersMelt(
		`charged_certus_quartz`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)

	tinkersMelt(
		`charged_certus_quartz`,
		`gems`,
		`emendatusenigmatica`,
		144,
		1400,
		40)
*/
	//FLUIX
	tinkersMelt(
		`fluix`,
		`storage_blocks`,
		`emendatusenigmatica`,
		576,
		1400,
		40)

	tinkersMelt(
		`fluix`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)

	tinkersMelt(
		`fluix`,
		`gems`,
		`emendatusenigmatica`,
		144,
		1400,
		40)

	//LAPIS
	tinkersMelt(
		`lapis`,
		`ores`,
		`emendatusenigmatica`,
		1728,
		550,
		80)	

	tinkersMelt(
		`lapis`,
		`clusters`,
		`emendatusenigmatica`,
		6912,
		550,
		320)

	tinkersMelt(
		`lapis`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		550,
		40)

	tinkersMelt(
		`lapis`,
		`gems`,
		`emendatusenigmatica`,
		144,
		550,
		40)

	tinkersMelt(
		`lapis`,
		`storage_blocks`,
		`emendatusenigmatica`,
		1296,
		550,
		400)

	//REDSTONE
	tinkersMelt(
		`redstone`,
		`ores`,
		`emendatusenigmatica`,
		1728,
		550,
		80)	

	tinkersMelt(
		`redstone`,
		`clusters`,
		`emendatusenigmatica`,
		6912,
		550,
		320)

	tinkersMelt(
		`redstone`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		550,
		40)

	tinkersMelt(
		`redstone`,
		`storage_blocks`,
		`emendatusenigmatica`,
		1296,
		550,
		400)

	//FLUORITE
	tinkersMelt(
		`fluorite`,
		`gems`,
		`emendatusenigmatica`,
		144,
		950,
		80)	

	tinkersMelt(
		`fluorite`,
		`storage_blocks`,
		`emendatusenigmatica`,
		1296,
		950,
		80)

	tinkersMelt(
		`fluorite`,
		`ores`,
		`emendatusenigmatica`,
		976,
		950,
		80)	

	tinkersMelt(
		`fluorite`,
		`clusters`,
		`emendatusenigmatica`,
		4608,
		950,
		320)

	tinkersMelt(
		`fluorite`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)

	//CINNABAR
	tinkersMelt(
		`cinnabar`,
		`gems`,
		`emendatusenigmatica`,
		144,
		950,
		80)	

	tinkersMelt(
		`cinnabar`,
		`storage_blocks`,
		`emendatusenigmatica`,
		1296,
		950,
		80)

	tinkersMelt(
		`cinnabar`,
		`ores`,
		`emendatusenigmatica`,
		288,
		950,
		80)	

	tinkersMelt(
		`cinnabar`,
		`clusters`,
		`emendatusenigmatica`,
		1152,
		950,
		320)

	tinkersMelt(
		`cinnabar`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)

	//APATITE
	tinkersMelt(
		`apatite`,
		`gems`,
		`emendatusenigmatica`,
		144,
		950,
		80)	

	tinkersMelt(
		`apatite`,
		`storage_blocks`,
		`emendatusenigmatica`,
		1296,
		950,
		80)

	tinkersMelt(
		`apatite`,
		`ores`,
		`emendatusenigmatica`,
		976,
		950,
		80)	

	tinkersMelt(
		`apatite`,
		`clusters`,
		`emendatusenigmatica`,
		4608,
		950,
		320)

	tinkersMelt(
		`apatite`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)

	//SULFUR
	tinkersMelt(
		`sulfur`,
		`gems`,
		`emendatusenigmatica`,
		144,
		950,
		80)	

	tinkersMelt(
		`sulfur`,
		`storage_blocks`,
		`emendatusenigmatica`,
		1296,
		950,
		80)

	tinkersMelt(
		`sulfur`,
		`ores`,
		`emendatusenigmatica`,
		864,
		950,
		80)	

	tinkersMelt(
		`sulfur`,
		`clusters`,
		`emendatusenigmatica`,
		3456,
		950,
		320)

	tinkersMelt(
		`sulfur`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)

	//POTASSIUM NITRATE / NITER
	tinkersMelt(
		`potassium_nitrate`,
		`gems`,
		`emendatusenigmatica`,
		144,
		950,
		80)	

	tinkersMelt(
		`potassium_nitrate`,
		`storage_blocks`,
		`emendatusenigmatica`,
		1296,
		950,
		80)

	tinkersMelt(
		`potassium_nitrate`,
		`ores`,
		`emendatusenigmatica`,
		864,
		950,
		80)	

	tinkersMelt(
		`potassium_nitrate`,
		`clusters`,
		`emendatusenigmatica`,
		3456,
		950,
		320)

	tinkersMelt(
		`potassium_nitrate`,
		`dusts`,
		`emendatusenigmatica`,
		144,
		950,
		40)

	//Glowstone - fluid by AVSP
		event.custom({
			type: `tconstruct:melting`,
			ingredient: {
				item: `minecraft:glowstone_dust`
			},
			result: {
				fluid: `avsp:molten_glowstone`,
				amount: 144
			},
			temperature: 1300,
			time: 45
		}).id(`AVSP:tconstruct/smelting/glowstone_dust`)

		event.custom({
			type: `tconstruct:melting`,
			ingredient: {
				item: `minecraft:glowstone`
			},
			result: {
				fluid: `avsp:molten_glowstone`,
				amount: 576
			},
			temperature: 1300,
			time: 120
		}).id(`AVSP:tconstruct/smelting/glowstone_block`)

//
//MELTING CLUSTERS
//
	let clusterMelt = (material, amount, heat, time) => {
		event.custom({
			type: "tconstruct:melting",
			conditions: [],
			ingredient: {
				tag: `forge:clusters/${material}`
			},
			result: {
				fluid: `tconstruct:molten_${material}`,
				amount: amount
			},
			temperature: heat,
			time: time
		}).id(`AVSP:tconstruct/smelting/clusters/${material}`)
	}

	clusterMelt(`iron`, 1152, 800, 360)
	clusterMelt(`gold`, 1152, 700, 340)
	clusterMelt(`copper`, 1152, 500, 300)
	clusterMelt(`aluminum`, 1152, 425, 284)
	clusterMelt(`silver`, 1152, 790, 360)
	clusterMelt(`lead`, 1152, 330, 260)
	clusterMelt(`nickel`, 1152, 950, 388)
	clusterMelt(`uranium`, 1152, 830, 368)
	clusterMelt(`osmium`, 1152, 975, 392)
	clusterMelt(`tin`, 1152, 225, 236)
	clusterMelt(`zinc`, 1152, 420, 280)

//
//fin
//
})