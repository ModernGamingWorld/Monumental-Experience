onEvent('recipes', e => {
	let temp
	let gobber2Types = ['', '_nether', '_end']

	function offeringRecipe(start, input, output) {
		e.custom({
			type: 'naturesaura:offering',
			input: Item.of(input).toJson(),
			start_item: Item.of(start).toJson(),
			output: Item.of(output).toResultJson()
		})
	}

	// Atum
	offeringRecipe('minecraft:stone_hoe', 'atum:limestone_cracked', 'atum:limestone_hoe')
	offeringRecipe('minecraft:stone_sword', 'atum:limestone_cracked', 'atum:limestone_sword')
	offeringRecipe('atum:stoneguard_sword', '#forge:ingots/khnumite', 'atum:stoneguard_greatsword')
	// Aquaculture
	offeringRecipe('#forge:string', '#forge:ingots/neptunium', 'aquaculture:neptunium_bow')
	// Bettershields
	offeringRecipe('minecraft:shield', '#forge:ingots/iron', 'bettershields:iron_shield')
	offeringRecipe('bettershields:iron_shield', '#forge:ingots/gold', 'bettershields:gold_shield')
	offeringRecipe('bettershields:gold_shield', '#forge:gems/diamond', 'bettershields:diamond_shield')
	// Botania
	offeringRecipe('minecraft:shears', '#botania:livingwood', 'aiotbotania:livingwood_shears')
	offeringRecipe('minecraft:shears', '#botania:livingrock', 'aiotbotania:livingrock_shears')
	offeringRecipe('minecraft:netherite_hoe', '#forge:ingots/terrasteel', 'aiotbotania:terra_hoe')
	offeringRecipe('minecraft:netherite_shovel', '#forge:ingots/terrasteel', 'aiotbotania:terra_shovel')
	offeringRecipe('minecraft:netherite_sword', '#forge:ingots/terrasteel', 'botania:terra_sword')
	offeringRecipe('botania:mana_string', 'botania:livingwood_twig', 'botania:livingwood_bow')
	offeringRecipe('botania:mana_tablet', '#forge:ingots/manasteel', 'botania:mana_ring')
	offeringRecipe('botania:rune_mana', '#forge:ingots/manasteel', 'botania:aura_ring')
	offeringRecipe('botania:lens_magnet', '#forge:ingots/manasteel', 'botania:magnet_ring')
	offeringRecipe('minecraft:heart_of_the_sea', '#forge:ingots/manasteel', 'botania:water_ring')
	offeringRecipe('botania:rune_air', '#forge:ingots/manasteel', 'botania:dodge_ring')
	offeringRecipe('botania:rune_earth', '#forge:ingots/manasteel', 'botania:mining_ring')
	offeringRecipe('botania:pixie_dust', '#forge:ingots/elementium', 'botania:pixie_ring')
	offeringRecipe('botania:rune_pride', '#forge:ingots/elementium', 'botania:reach_ring')
	offeringRecipe('#forge:storage_blocks/clay', '#forge:ingots/manasteel', 'botania:swap_ring')
	offeringRecipe('#forge:ingots/terrasteel', 'botania:aura_ring', 'botania:aura_ring_greater')
	offeringRecipe('#forge:ingots/terrasteel', 'botania:mana_ring', 'botania:mana_ring_greater')
	offeringRecipe('minecraft:wooden_pickaxe', '#forge:ingots/manasteel', 'botania:glass_pickaxe')
	// Druidcraft
	offeringRecipe('#minecraft:planks', '#forge:bones', 'druidcraft:bone_shield')
	offeringRecipe('#forge:nuggets/iron', 'druidcraft:chitin', 'druidcraft:chitin_shield')
	offeringRecipe('#forge:nuggets/iron', '#forge:gems/moonstone', 'druidcraft:moonstone_shield')
	// Ice and Fire
	offeringRecipe('botania:mana_string', '#forge:bones/wither', 'iceandfire:dragonbone_bow')
	offeringRecipe('iceandfire:dragonbone_sword', 'iceandfire:lightning_dragon_blood', 'iceandfire:dragonbone_sword_lightning')
	offeringRecipe('iceandfire:dragonbone_sword', 'iceandfire:ice_dragon_blood', 'iceandfire:dragonbone_sword_ice')
	offeringRecipe('iceandfire:dragonbone_sword', 'iceandfire:fire_dragon_blood', 'iceandfire:dragonbone_sword_fire')
	offeringRecipe('minecraft:netherite_sword', 'iceandfire:hippogryph_talon', 'iceandfire:hippogryph_sword')
	// Forbidden Arcanus
	offeringRecipe('minecraft:diamond_pickaxe', 'forbidden_arcanus:golden_feather', 'forbidden_arcanus:slimec_pickaxe')
	offeringRecipe('minecraft:diamond_pickaxe', 'forbidden_arcanus:obsidian_skull', 'forbidden_arcanus:infernum_pickaxe')
	offeringRecipe('minecraft:diamond_helmet', '#forge:ingots/obsidian', 'forbidden_arcanus:obsidian_helmet')
	// Gobber 2
	offeringRecipe('gobber2:gobber2_paxel_end', 'gobber2:gobber2_staff_stars', 'gobber2:gobber2_paxel_stars')
	offeringRecipe('gobber2:gobber2_ring_nether', '#forge:magma', 'gobber2:gobber2_ring_phoenix')
	offeringRecipe('gobber2:gobber2_sword_end', 'gobber2:gobber2_staff_sniper', 'gobber2:gobber2_sword_sniper')
	offeringRecipe('gobber2:gobber2_sword_end', 'gobber2:gobber2_ring_traveler', 'gobber2:gobber2_sword_traveler')
	gobber2Types.forEach(t => {
		offeringRecipe(`botania:mana_string`, 'gobber2:gobber2_rod', `gobber2:gobber2_bow${t}`)
		offeringRecipe(`minecraft:netherite_axe`, 'gobber2:gobber2_block', `gobber2:gobber2_tree_axe${t}`)
		offeringRecipe(`minecraft:netherite_shovel`, 'gobber2:gobber2_rod', `gobber2:gobber2_excavator${t}`)
	})
	// Mekanism
	offeringRecipe('minecraft:bow', 'mekanism:energy_tablet', 'mekanism:electric_bow')
	// Modular Routers
	offeringRecipe('modularrouters:blank_module', '#forge:tools/pickaxe', 'modularrouters:breaker_module')
	offeringRecipe('modularrouters:breaker_module', 'modularrouters:blank_module', 'modularrouters:extruder_module_1')

	// ARMORS
	temp = ['chestplate', 'helmet', 'leggings', 'boots']
	temp.forEach(t => {
		// Atum
		offeringRecipe(`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:iron_${t}`, `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_iron`)
		offeringRecipe(`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:golden_${t}`, `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_gold`)
		offeringRecipe(`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:diamond_${t}`, `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_diamond`)
		// Aquaculture
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:ingots/neptunium', `aquaculture:neptunium_${t}`)
		// Botania
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:ingots/terrasteel', `botania:terrasteel_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, '#forge:ingots/manasteel', `botania:manasteel_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, '#forge:ingots/elementium', `botania:elementium_${t}`)
		// Cyclic
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:gems/diamond', `cyclic:crystal_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, '#forge:gems/emerald', `cyclic:emerald_${t}`)
		// Druidcraft
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:gems/moonstone', `druidcraft:moonstone_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, 'druidcraft:chitin', `druidcraft:chitin_${t}`)
		offeringRecipe(`minecraft:chainmail_${t}`, '#forge:bones', `druidcraft:bone_${t}`)
		// Ice and Fire
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_lightning`, `iceandfire:dragonsteel_lightning_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_ice`, `iceandfire:dragonsteel_ice_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_fire`, `iceandfire:dragonsteel_fire_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, `iceandfire:myrmex_jungle_chitin`, `iceandfire:myrmex_jungle_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, `iceandfire:myrmex_desert_chitin`, `iceandfire:myrmex_desert_${t}`)
		// Forbidden Arcanus
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:ingots/arcane_gold', `forbidden_arcanus:arcane_gold_${t}`)
		// Gobber 2
		offeringRecipe(`minecraft:netherite_${t}`, 'gobber2:gobber2_ingot', `gobber2:gobber2_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, 'gobber2:gobber2_ingot_nether', `gobber2:gobber2_${t}_nether`)
		offeringRecipe(`minecraft:netherite_${t}`, 'gobber2:gobber2_ingot_end', `gobber2:gobber2_${t}_end`)
	})

	// TOOLS
	temp = ['pickaxe', 'sword', 'axe', 'shovel', 'hoe']
	temp.forEach(t => {
		// Aquaculture
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:ingots/neptunium', `aquaculture:neptunium_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:ingots/neptunium', `aquaculture:neptunium_${t}`)
		// AIOT
		offeringRecipe(`minecraft:wooden_${t}`, '#botania:livingwood', `aiotbotania:livingwood_${t}`)
		offeringRecipe(`minecraft:stone_${t}`, '#botania:livingrock', `aiotbotania:livingrock_${t}`)
		// Applied Energistics 2
		offeringRecipe(`minecraft:iron_${t}`, '#forge:gems/certus_quartz', `appliedenergistics2:certus_quartz_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, '#forge:gems/quartz', `appliedenergistics2:nether_quartz_${t}`)
		// Botania
		offeringRecipe(`minecraft:iron_${t}`, '#forge:ingots/manasteel', `botania:manasteel_${t == 'pickaxe' ? 'pick' : t}`)
		offeringRecipe(`minecraft:iron_${t}`, '#forge:ingots/elementium', `botania:elementium_${t}`)
		// Cyclic
		offeringRecipe(`minecraft:stone_${t}`, '#forge:sandstone', `cyclic:sandstone_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, '#forge:bricks/nether', `cyclic:netherbrick_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:gems/diamond', `cyclic:crystal_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, '#forge:gems/emerald', `cyclic:emerald_${t}`)
		// Druidcraft
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:gems/moonstone', `druidcraft:moonstone_${t}`)
		offeringRecipe(`minecraft:stone_${t}`, '#forge:bones', `druidcraft:bone_${t}`)
		// Ice and Fire
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_lightning`, `iceandfire:dragonsteel_lightning_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_ice`, `iceandfire:dragonsteel_ice_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_fire`, `iceandfire:dragonsteel_fire_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:bones/dragon`, `iceandfire:dragonbone_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, `iceandfire:myrmex_jungle_chitin`, `iceandfire:myrmex_jungle_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, `iceandfire:myrmex_desert_chitin`, `iceandfire:myrmex_desert_${t}`)
		// Immersive Engineering
		offeringRecipe(`minecraft:iron_${t}`, '#forge:ingots/steel', `immersiveengineering:${t}_steel`)
		// Forbidden Arcanus
		offeringRecipe(`minecraft:netherite_${t}`, 'forbidden_arcanus:edelwood_stick', `forbidden_arcanus:reinforced_arcane_golden_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:ingots/arcane_gold', `forbidden_arcanus:arcane_golden_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, '#forge:dragon_scales', `forbidden_arcanus:draco_arcanus_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, '#forge:ingots/obsidian', `forbidden_arcanus:obsidian_${t}`)
		// Gobber 2
		offeringRecipe(`minecraft:netherite_${t}`, 'gobber2:gobber2_ingot', `gobber2:gobber2_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, 'gobber2:gobber2_ingot_end', `gobber2:gobber2_${t}_end`)
		offeringRecipe(`minecraft:netherite_${t}`, 'gobber2:gobber2_ingot_nether', `gobber2:gobber2_${t}_nether`)
	})
})
