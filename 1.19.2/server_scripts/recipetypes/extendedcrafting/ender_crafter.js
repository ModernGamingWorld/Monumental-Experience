ServerEvents.recipes(e => {
	//Ae2
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', '  A', '  B'],
		key: {
			A: Item.of('#forge:rods/wooden').toJson(),
			B: Item.of('#forge:ingots/copper').toJson()
		},
		result: Item.of('ae2:crank').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AB ', 'CDB', 'AB '],
		key: {
			A: Item.of('#forge:plates/electrum').toJson(),
			B: Item.of('kubejs:compressed_iron_plate').toJson(),
			C: Item.of('extendedcrafting:redstone_component').toJson(),
			D: Item.of('ae2:calculation_processor').toJson()
		},
		result: Item.of('ae2:basic_card').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['ABA', 'BCB', 'ABA'],
		key: {
			A: Item.of('pneumaticcraft:plastic').toJson(),
			B: Item.of('kubejs:compressed_iron_plate').toJson(),
			C: Item.of('#forge:gems/certus_quartz').toJson()
		},
		result: Item.of('ae2:meteorite_compass').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['ABA', 'BCB', 'DDD'],
		key: {
			A: Item.of('#forge:plates/enderium').toJson(),
			B: Item.of('kubejs:compressed_iron_plate').toJson(),
			C: Item.of('ae2:engineering_processor').toJson(),
			D: Item.of('#forge:gems/fluix').toJson()
		},
		result: Item.of('ae2:me_p2p_tunnel').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AB ', 'CDB', 'AB '],
		key: {
			A: Item.of('#forge:plates/diamond').toJson(),
			B: Item.of('kubejs:compressed_iron_plate').toJson(),
			C: Item.of('extendedcrafting:redstone_component').toJson(),
			D: Item.of('ae2:calculation_processor').toJson()
		},
		result: Item.of('ae2:advanced_card').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('ae2:cell_component_1k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:item_storage_cell_1k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('ae2:spatial_cell_component_128').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:spatial_storage_cell_128').toJson(),
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('ae2:spatial_cell_component_16').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:spatial_storage_cell_16').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('ae2:spatial_cell_component_2').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:spatial_storage_cell_2').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('#forge:gems/certus_quartz').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:view_cell').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('ae2:cell_component_4k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:item_storage_cell_4k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('ae2:cell_component_16k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:item_storage_cell_16k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('ae2:cell_component_64k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:item_storage_cell_64k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/compressed_iron').toJson(),
			B: Item.of('ae2:cell_component_256k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:item_storage_cell_256k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/copper').toJson(),
			B: Item.of('ae2:cell_component_1k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:fluid_storage_cell_1k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/copper').toJson(),
			B: Item.of('ae2:cell_component_4k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:fluid_storage_cell_4k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/copper').toJson(),
			B: Item.of('ae2:cell_component_16k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:fluid_storage_cell_16k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/copper').toJson(),
			B: Item.of('ae2:cell_component_64k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:fluid_storage_cell_64k').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['XDX', 'DBD', 'AAA'],
		key: {
			X: Item.of('ae2:quartz_glass').toJson(),
			A: Item.of('#forge:ingots/copper').toJson(),
			B: Item.of('ae2:cell_component_256k').toJson(),
			D: Item.of('extendedcrafting:redstone_component').toJson()
		},
		result: Item.of('ae2:fluid_storage_cell_256k').toJson()
	})
	//Computer Craft
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'ACA'],
		key: {
			A: Item.of('#forge:plates/electrum').toJson(),
			B: Item.of('computercraft:computer_normal').toJson(),
			C: Item.of('#forge:gears/electrum').toJson()
		},
		result: Item.of('computercraft:computer_advanced').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'ACA'],
		key: {
			A: Item.of('#forge:plates/electrum').toJson(),
			B: Item.of('computercraft:turtle_normal').toJson(),
			C: Item.of('#forge:gears/electrum').toJson()
		},
		result: Item.of('computercraft:turtle_advanced').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'ACA'],
		key: {
			A: Item.of('#forge:plates/steel').toJson(),
			B: Item.of('computercraft:computer_normal').toJson(),
			C: Item.of('immersiveengineering:reinforced_crate').toJson()
		},
		result: Item.of('computercraft:turtle_advanced').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'BBB', 'AAA'],
		key: {
			A: Item.of('pneumaticcraft:reinforced_stone').toJson(),
			B: Item.of('immersiveengineering:wirecoil_redstone').toJson()
		},
		result: Item.of('computercraft:cable', 3).toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'ACA'],
		key: {
			A: Item.of('pneumaticcraft:reinforced_stone').toJson(),
			B: Item.of('immersiveengineering:insulating_glass').toJson(),
			C: Item.of('immersiveengineering:circuit_board').toJson()
		},
		result: Item.of('computercraft:computer_normal').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'AAA'],
		key: {
			A: Item.of('pneumaticcraft:plastic').toJson(),
			B: Item.of('immersiveengineering:wirecoil_redstone').toJson()
		},
		result: {
			item: 'computercraft:disk',
			nbt: '{Color:1118481}',
			count: 1
		}
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'AAA'],
		key: {
			A: Item.of('#forge:plates/gold').toJson(),
			B: Item.of('computercraft:monitor_normal').toJson()
		},
		result: Item.of('computercraft:monitor_advanced', 2).toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'AAA'],
		key: {
			A: Item.of('#forge:plates/gold').toJson(),
			B: Item.of('immersiveengineering:insulating_glass').toJson()
		},
		result: Item.of('computercraft:monitor_normal', 2).toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'ACA'],
		key: {
			A: Item.of('pneumaticcraft:reinforced_stone').toJson(),
			B: Item.of('#forge:paper').toJson(),
			C: Item.of('immersiveengineering:wirecoil_redstone').toJson()
		},
		result: Item.of('computercraft:printer').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'ACA'],
		key: {
			A: Item.of('pneumaticcraft:reinforced_stone').toJson(),
			B: Item.of('inventorypets:pet_dubstep').toJson(),
			C: Item.of('immersiveengineering:wirecoil_redstone').toJson()
		},
		result: Item.of('computercraft:speaker').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'AAA'],
		key: {
			A: Item.of('pneumaticcraft:reinforced_stone').toJson(),
			B: Item.of('#forge:ender_pearls').toJson()
		},
		result: Item.of('computercraft:wired_modem').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'ABA', 'AAA'],
		key: {
			A: Item.of('pneumaticcraft:reinforced_stone').toJson(),
			B: Item.of('immersiveengineering:wirecoil_redstone').toJson()
		},
		result: Item.of('computercraft:wireless_modem_advanced').toJson()
	})
	//Extra Disc
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['GEG', 'EWE', 'IAI'],
		key: {
			G: Item.of('ae2:quartz_vibrant_glass').toJson(),
			E: Item.of('refinedstorage:quartz_enriched_iron').toJson(),
			I: Item.of('refinedstorage:improved_processor').toJson(),
			A: Item.of('refinedstorage:advanced_processor').toJson(),
			W: Item.of('refinedstorage:storage_housing').toJson()
		},
		result: Item.of('extradisks:advanced_storage_housing').toJson()
	})
	//Forbidden
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: [' A ', 'ACA', ' A '],
		key: {
			A: Item.of('forbidden_arcanus:xpetrified_orb').toJson(),
			C: Item.of('gobber2:gobber2_globette_end').toJson()
		},
		result: Item.of('forbidden_arcanus:eternal_stella').toJson()
	})
	//Industrial Foregoing
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['ABA', 'CDC', 'AEA'],
		key: {
			A: Item.of('kubejs:compressed_iron_plate').toJson(),
			B: Item.of('#forge:gears/electrum').toJson(),
			C: Item.of('#forge:piston').toJson(),
			D: Item.of('#industrialforegoing:machine_frame/pity').toJson(),
			E: Item.of('immersiveengineering:fluid_pump').toJson()
		},
		result: Item.of('industrialforegoing:fluid_extractor').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'industrialforegoing:fluid_extractor',
		pattern: ['ABA', 'CDC', 'AEA'],
		key: {
			A: Item.of('kubejs:compressed_iron_plate').toJson(),
			B: Item.of('thermal:rf_coil').toJson(),
			C: Item.of('pneumaticcraft:plastic').toJson(),
			D: Item.of('#industrialforegoing:machine_frame/pity').toJson(),
			E: Item.of('#forge:furnaces').toJson()
		},
		result: Item.of('industrialforegoing:latex_processing_unit').toJson()
	})
	//Rftools Control
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['QSQ', 'TWT', 'QQQ'],
		key: {
			W: Item.of('rftoolscontrol:card_base').toJson(),
			T: Item.of('#forge:nuggets/electrum').toJson(),
			Q: Item.of('immersiveengineering:wirecoil_redstone').toJson(),
			S: Item.of('#forge:ender_pearls').toJson()
		},
		result: Item.of('rftoolscontrol:network_card').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['QQQ', 'TTT', 'WWW'],
		key: {
			Q: Item.of('immersiveengineering:wirecoil_redstone').toJson(),
			T: Item.of('#forge:dyes/green').toJson(),
			W: Item.of('#forge:nuggets/electrum').toJson()
		},
		result: Item.of('rftoolscontrol:card_base').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['QWQ', 'TST', 'QWQ'],
		key: {
			Q: Item.of('immersiveengineering:wirecoil_redstone').toJson(),
			T: Item.of('#forge:paper').toJson(),
			W: Item.of('#forge:nuggets/electrum').toJson(),
			S: Item.of('rftoolscontrol:card_base').toJson()
		},
		result: Item.of('rftoolscontrol:cpu_core_500').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['QQQ', 'TST', 'QQQ'],
		key: {
			Q: Item.of('immersiveengineering:wirecoil_redstone').toJson(),
			T: Item.of('#forge:paper').toJson(),
			S: Item.of('rftoolscontrol:card_base').toJson()
		},
		result: Item.of('rftoolscontrol:ram_chip').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['QWQ', 'WSW', 'QWQ'],
		key: {
			Q: Item.of('immersiveengineering:wirecoil_redstone').toJson(),
			W: Item.of('#forge:gems/dimensional').toJson(),
			S: Item.of('rftoolscontrol:cpu_core_1000').toJson()
		},
		result: Item.of('rftoolscontrol:cpu_core_2000').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['QQQ', 'WSW', 'QCQ'],
		key: {
			W: Item.of('immersiveengineering:wirecoil_redstone').toJson(),
			Q: Item.of('#forge:gems/quartz').toJson(),
			S: Item.of('rftoolscontrol:card_base').toJson(),
			C: Item.of('#chipped:glowstone').toJson()
		},
		result: Item.of('rftoolscontrol:graphics_card').toJson()
	})
	//Xnet
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['ICI', 'rFr', 'jgj'],
		key: {
			I: Item.of('#forge:sheetmetals/steel').toJson(),
			C: Item.of('immersiveengineering:coil_mv').toJson(),
			g: Item.of('pneumaticcraft:printed_circuit_board').toJson(),
			r: Item.of('extendedcrafting:redstone_component').toJson(),
			F: Item.of('rftoolsbase:machine_frame').toJson(),
			j: Item.of('kubejs:compressed_iron_plate').toJson()
		},
		result: Item.of('xnet:controller').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['AAA', 'BCB', 'AAA'],
		key: {
			A: Item.of('#thermal:rockwool').toJson(),
			B: Item.of('extendedcrafting:redstone_ingot').toJson(),
			C: Item.of('computercraft:cable').toJson()
		},
		result: Item.of('16x xnet:netcable_routing').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['ABA', 'CDC', 'EFE'],
		key: {
			A: Item.of('immersiveengineering:steel_fence').toJson(),
			B: Item.of('immersiveengineering:electron_tube').toJson(),
			C: Item.of('extendedcrafting:redstone_component').toJson(),
			D: Item.of('rftoolsbase:machine_frame').toJson(),
			E: Item.of('kubejs:compressed_iron_plate').toJson(),
			F: Item.of('minecraft:ender_eye').toJson()
		},
		result: Item.of('xnet:router').toJson()
	})
	e.recipes.extendedcrafting.shaped_ender_crafter({
		type: 'extendedcrafting:shaped_ender_crafter',
		pattern: ['ABA', 'CDC', 'ACA'],
		key: {
			A: Item.of('kubejs:compressed_iron_plate').toJson(),
			B: Item.of('cyclic:wireless_transmitter').toJson(),
			C: Item.of('minecraft:ender_eye').toJson(),
			D: Item.of('xnet:router').toJson()
		},
		result: Item.of('xnet:wireless_router').toJson()
	})
})
