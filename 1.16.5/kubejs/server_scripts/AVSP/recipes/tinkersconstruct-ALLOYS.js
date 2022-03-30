//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//TINKERS CONSTRUCT MODDED ALLOYS INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
/*
	NOTE:
	A newer version of tinkers construct already have supported for these alloys, and therefore you should not need this script.
	If you are using an older version, then you should use this script.
*/
onEvent('recipes', event => {
//LUMIUM
	event.custom({
		type: `tconstruct:alloy`,
		conditions: [],
		inputs: [
		{
			tag: `tconstruct:molten_tin`,
			amount: 432
		},
		{
			tag: `tconstruct:molten_silver`,
			amount: 144
		},
		{
			tag: `forge:molten_glowstone`,
			amount: 500
		}
		],
		result: {
			fluid: `emendatusenigmatica:molten_lumium`,
			amount: 576
		},
		temperature: 1050
	}).id(`AVSP:tconstruct/smeltery/alloys/metal/lumium`)
	
//SIGNALUM
	event.custom({
		type: `tconstruct:alloy`,
		conditions: [],
		inputs: [
		{
			tag: `tconstruct:molten_copper`,
			amount: 432
		},
		{
			tag: `tconstruct:molten_silver`,
			amount: 144
		},
		{
			tag: `forge:molten_redstone`,
			amount: 400
		}
		],
		result: {
			fluid: `emendatusenigmatica:molten_signalum`,
			amount: 576
		},
		temperature: 1125
	}).id(`AVSP:tconstruct/smeltery/alloys/metal/signalum`)

//ENDERIUM
	event.custom({
		type: `tconstruct:alloy`,
		conditions: [],
		inputs: [
		{
			tag: `tconstruct:molten_lead`,
			amount: 432
		},
		{
			tag: `tconstruct:molten_diamond`,
			amount: 144
		},
		{
			tag: `tconstruct:molten_ender`,
			amount: 500
		}
		],
		result: {
			fluid: `emendatusenigmatica:molten_enderium`,
			amount: 288
		},
		temperature: 1350
	}).id(`AVSP:tconstruct/smeltery/alloys/metal/enderium`)

//
//MELTING
//
	let alloyMelt = (material, type, amount, heat, time) =>{
		event.custom({
			type: "tconstruct:melting",
			conditions: [],
			ingredient: {
				tag: `forge:${type}/${material}`
			},
			result: {
				fluid: `emendatusenigmatica:molten_${material}`,
				amount: amount
			},
			temperature: heat,
			time: time
		}).id(`AVSP:tconstruct/smelting/${type}/${material}`)
	}

	//LUMIUM
	alloyMelt(`lumium`, `ingots`, 144, 1125, 68)
	alloyMelt(`lumium`, `dusts`, 144, 1125, 51)
	alloyMelt(`lumium`, `storage_blocks`, 1296, 1125, 203)
	alloyMelt(`lumium`, `nuggets`, 16, 1125, 23)
	alloyMelt(`lumium`, `plates`, 144, 1125, 68)
	alloyMelt(`lumium`, `rods`, 72, 1125, 14)
	alloyMelt(`lumium`, `gears`, 576, 1125, 163)

	//SIGNALUM
	alloyMelt(`signalum`, `ingots`, 144, 1125, 70)
	alloyMelt(`signalum`, `dusts`, 144, 1125, 52)
	alloyMelt(`signalum`, `storage_blocks`, 1296, 1125, 210)
	alloyMelt(`signalum`, `nuggets`, 16, 1125, 23)
	alloyMelt(`signalum`, `plates`, 144, 1125, 70)
	alloyMelt(`signalum`, `rods`, 72, 1125, 14)
	alloyMelt(`signalum`, `gears`, 576, 1125, 140)

	//ENDERIUM
	alloyMelt(`enderium`, `ingots`, 144, 1125, 76)
	alloyMelt(`enderium`, `dusts`, 144, 1125, 57)
	alloyMelt(`enderium`, `storage_blocks`, 1296, 1125, 229)
	alloyMelt(`enderium`, `nuggets`, 16, 1125, 25)
	alloyMelt(`enderium`, `plates`, 144, 1125, 76)
	alloyMelt(`enderium`, `rods`, 72, 1125, 15)
	alloyMelt(`enderium`, `gears`, 576, 1125, 152)

//
//fin
//
})