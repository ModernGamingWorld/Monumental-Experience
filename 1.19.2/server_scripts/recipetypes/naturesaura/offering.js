ServerEvents.recipes(e => {
	let armors = [`chestplate`, `helmet`, `leggings`, `boots`]
	let tools = [`pickaxe`, `sword`, `axe`, `shovel`, `hoe`, `watering_can`, `bow`, `crossbow`, `shears`, `fishing_rod`, `sickle`, `scythe`]
	let gobberTypes = [``, `_nether`, `_end`]
	let blueSkiesPlankTypes = [`cherry`, `maple`, `frostbright`, `dusk`, `starlit`, `lunar`, `bluebright`]

	function offeringRecipe(start, input, output) {
		e.custom({
			type: `naturesaura:offering`,
			input: Item.of(input).toJson(),
			start_item: Item.of(start).toJson(),
			output: Item.of(output).toJson()
		})
	}

	// Alex's Mobs
	offeringRecipe(`minecraft:iron_chestplate`, `alexsmobs:crocodile_scute`, `alexsmobs:crocodile_chestplate`)
	// AIOT
	//offeringRecipe(`minecraft:netherite_hoe`, `#forge:ingots/terrasteel`, `aiotbotania:terra_hoe`)
	//offeringRecipe(`minecraft:netherite_shovel`, `#forge:ingots/terrasteel`, `aiotbotania:terra_shovel`)
	//offeringRecipe(`minecraft:shears`, `#botania:livingwood`, `aiotbotania:livingwood_shears`)
	//offeringRecipe(`minecraft:shears`, `#botania:livingrock`, `aiotbotania:livingrock_shears`)
	// Aquaculture
	offeringRecipe(`#forge:string`, `#forge:ingots/neptunium`, `aquaculture:neptunium_bow`)
	// Atum
	//offeringRecipe(`minecraft:stone_sword`, `#forge:ingots/khnumite`, `atum:stoneguard_sword`)
	//offeringRecipe(`atum:stoneguard_sword`, `#forge:ingots/khnumite`, `atum:stoneguard_greatsword`)
	// Bettershields
	//offeringRecipe(`minecraft:shield`, `#forge:ingots/iron`, `bettershields:iron_shield`)
	//offeringRecipe(`bettershields:iron_shield`, `#forge:ingots/gold`, `bettershields:gold_shield`)
	//offeringRecipe(`bettershields:gold_shield`, `#forge:gems/diamond`, `bettershields:diamond_shield`)
	// Botania
	//offeringRecipe(`botania:mana_string`, `botania:livingwood_twig`, `botania:livingwood_bow`)
	//offeringRecipe(`botania:mana_tablet`, `#forge:ingots/manasteel`, `botania:mana_ring`)
	//offeringRecipe(`botania:rune_mana`, `#forge:ingots/manasteel`, `botania:aura_ring`)
	//offeringRecipe(`botania:lens_magnet`, `#forge:ingots/manasteel`, `botania:magnet_ring`)
	//offeringRecipe(`minecraft:heart_of_the_sea`, `#forge:ingots/manasteel`, `botania:water_ring`)
	//offeringRecipe(`botania:rune_air`, `#forge:ingots/manasteel`, `botania:dodge_ring`)
	//offeringRecipe(`botania:rune_earth`, `#forge:ingots/manasteel`, `botania:mining_ring`)
	//offeringRecipe(`botania:pixie_dust`, `#forge:ingots/elementium`, `botania:pixie_ring`)
	//offeringRecipe(`botania:rune_pride`, `#forge:ingots/elementium`, `botania:reach_ring`)
	//offeringRecipe(`#forge:storage_blocks/clay`, `#forge:ingots/manasteel`, `botania:swap_ring`)
	//offeringRecipe(`#forge:ingots/terrasteel`, `botania:aura_ring`, `botania:aura_ring_greater`)
	//offeringRecipe(`#forge:ingots/terrasteel`, `botania:mana_ring`, `botania:mana_ring_greater`)
	//offeringRecipe(`botania:magnet_ring`, `#forge:ingots/terrasteel`, `botania:magnet_ring_greater`)
	//offeringRecipe(`minecraft:wooden_pickaxe`, `#forge:ingots/manasteel`, `botania:glass_pickaxe`)
	//offeringRecipe(`minecraft:netherite_sword`, `#forge:ingots/terrasteel`, `botania:terra_sword`)
	// Druidcraft
	//offeringRecipe(`#minecraft:planks`, `#forge:bones`, `druidcraft:bone_shield`)
	//offeringRecipe(`#forge:nuggets/iron`, `druidcraft:chitin`, `druidcraft:chitin_shield`)
	//offeringRecipe(`#forge:nuggets/iron`, `#forge:gems/moonstone`, `druidcraft:moonstone_shield`)
	// Explorer`s Compass
	//offeringRecipe(`minecraft:compass`, `minecraft:cracked_stone_bricks`, `explorerscompass:explorerscompass`)
	// Forbidden Arcanus
	offeringRecipe(`minecraft:diamond_pickaxe`, `forbidden_arcanus:golden_feather`, `forbidden_arcanus:slimec_pickaxe`)
	//offeringRecipe(`minecraft:diamond_pickaxe`, `forbidden_arcanus:obsidian_skull`, `forbidden_arcanus:infernum_pickaxe`)
	offeringRecipe(`minecraft:diamond_helmet`, `#forge:ingots/obsidian`, `forbidden_arcanus:obsidian_helmet`)
	// Gobber 2
	offeringRecipe(`gobber2:gobber2_ring_nether`, `#forge:magma`, `gobber2:gobber2_ring_phoenix`)
	offeringRecipe(`gobber2:gobber2_paxel_end`, `gobber2:gobber2_staff_stars`, `gobber2:gobber2_paxel_stars`)
	offeringRecipe(`gobber2:gobber2_sword_end`, `gobber2:gobber2_staff_sniper`, `gobber2:gobber2_sword_sniper`)
	offeringRecipe(`gobber2:gobber2_sword_end`, `gobber2:gobber2_ring_traveler`, `gobber2:gobber2_sword_traveler`)
	gobberTypes.forEach(t => {
		//offeringRecipe(`botania:mana_string`, `gobber2:gobber2_rod`, `gobber2:gobber2_bow${t}`)
		offeringRecipe(`minecraft:netherite_axe`, `gobber2:gobber2_block`, `gobber2:gobber2_tree_axe${t}`)
		offeringRecipe(`minecraft:netherite_shovel`, `gobber2:gobber2_rod`, `gobber2:gobber2_excavator${t}`)
	})
	// Immersive Engineering
	offeringRecipe(`minecraft:shield`, `#forge:treated_wood`, `immersiveengineering:shield`)
	// Mekanism
	offeringRecipe(`minecraft:bow`, `mekanism:energy_tablet`, `mekanism:electric_bow`)
	// Minecraft
	offeringRecipe(`#minecraft:planks`, `#forge:ingots/iron`, `minecraft:shield`)
	offeringRecipe(`#forge:plates/iron`, `extendedcrafting:redstone_ingot`, `minecraft:compass`)
	offeringRecipe(`#forge:rods/wooden`, `#forge:string`, `minecraft:bow`)
	offeringRecipe(`minecraft:tripwire_hook`, `#forge:ingots/iron`, `minecraft:crossbow`)
	// Mystical Agriculture
	offeringRecipe(`#forge:furnace`, `mysticalagriculture:inferium_block`, `mysticalagriculture:inferium_furnace`)
	offeringRecipe(`mysticalagriculture:basic_reprocessor`, `mysticalagriculture:inferium_block`, `mysticalagriculture:inferium_reprocessor`)
	offeringRecipe(`mysticalagriculture:inferium_furnace`, `mysticalagriculture:prudentium_block`, `mysticalagriculture:prudentium_furnace`)
	offeringRecipe(`mysticalagriculture:inferium_reprocessor`, `mysticalagriculture:prudentium_block`, `mysticalagriculture:prudentium_reprocessor`)
	offeringRecipe(`mysticalagriculture:prudentium_furnace`, `mysticalagriculture:tertium_block`, `mysticalagriculture:tertium_furnace`)
	offeringRecipe(`mysticalagriculture:prudentium_reprocessor`, `mysticalagriculture:tertium_block`, `mysticalagriculture:tertium_reprocessor`)
	offeringRecipe(`mysticalagriculture:tertium_furnace`, `mysticalagriculture:imperium_block`, `mysticalagriculture:imperium_furnace`)
	offeringRecipe(`mysticalagriculture:tertium_reprocessor`, `mysticalagriculture:imperium_block`, `mysticalagriculture:imperium_reprocessor`)
	offeringRecipe(`mysticalagriculture:imperium_furnace`, `mysticalagriculture:supremium_block`, `mysticalagriculture:supremium_furnace`)
	offeringRecipe(`mysticalagriculture:imperium_reprocessor`, `mysticalagriculture:supremium_block`, `mysticalagriculture:supremium_reprocessor`)
	// Modular Routers
	//offeringRecipe(`modularrouters:blank_module`, `#forge:tools/pickaxe`, `modularrouters:breaker_module`)
	//offeringRecipe(`modularrouters:breaker_module`, `modularrouters:blank_module`, `modularrouters:extruder_module_1`)
	// Nature`s Compass
	offeringRecipe(`minecraft:compass`, `#minecraft:saplings`, `naturescompass:naturescompass`)
	// Occultism
	offeringRecipe(`minecraft:diamond_pickaxe`, `#forge:ingots/iesnium`, `occultism:iesnium_pickaxe`)
	// PSI
	//offeringRecipe(`#forge:string`, `#forge:gems/psigem`, `psipherals:psimetal_bow`)
	// Twilight Forest
	offeringRecipe(`#twilightforest:towerwood`, `#forge:ingots/knightmetal`, `twilightforest:knightmetal_shield`)
	offeringRecipe(`minecraft:diamond_sword`, `#forge:ingots/knightmetal`, `twilightforest:knightmetal_sword`)
	offeringRecipe(`minecraft:netherite_axe`, `#forge:ingots/knightmetal`, `twilightforest:knightmetal_axe`)
	offeringRecipe(`minecraft:diamond_pickaxe`, `#forge:ingots/knightmetal`, `twilightforest:knightmetal_pickaxe`)
	offeringRecipe(`minecraft:netherite_pickaxe`, `#forge:ingots/fiery`, `twilightforest:fiery_pickaxe`)
	offeringRecipe(`minecraft:netherite_sword`, `#forge:ingots/fiery`, `twilightforest:fiery_sword`)
	// Undergrden
	//offeringRecipe(`#minecraft:planks`, `#forge:ingots/cloggrum`, `undergarden:cloggrum_shield`)
	//offeringRecipe(`minecraft:iron_chestplate`, `undergarden:masticator_scales`, `undergarden:masticated_chestplate`)

	// TOOLS
	tools.forEach(t => {
		// AIOT
		//offeringRecipe(`minecraft:wooden_${t}`, `#botania:livingwood`, `aiotbotania:livingwood_${t}`)
		//offeringRecipe(`minecraft:stone_${t}`, `#botania:livingrock`, `aiotbotania:livingrock_${t}`)
		// Applied Energistics 2
		offeringRecipe(`minecraft:iron_${t}`, `#forge:gems/certus_quartz`, `ae2:certus_quartz_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, `#forge:gems/quartz`, `ae2:nether_quartz_${t}`)
		// Aquaculture
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/neptunium`, `aquaculture:neptunium_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/neptunium`, `aquaculture:neptunium_${t}`)
		// Atum
		//offeringRecipe(`minecraft:stone_${t}`, `atum:limestone_cracked`, `atum:limestone_${t}`)
		// Blue Skies
		blueSkiesPlankTypes.forEach(b => {
			offeringRecipe(`minecraft:wooden_${t}`, `blue_skies:${b}_planks`, `blue_skies:${b}_${t}`)
		})
		offeringRecipe(`minecraft:stone_${t}`, `blue_skies:lunar_cobblestone`, `blue_skies:lunar_stone_${t}`)
		offeringRecipe(`minecraft:stone_${t}`, `blue_skies:turquoise_cobblestone`, `blue_skies:turquoise_stone_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, `#blue_skies:gems/pyrope`, `blue_skies:pyrope_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#blue_skies:ingots/horizonite`, `blue_skies:horizonite_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#blue_skies:gems/charoite`, `blue_skies:charoite_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#blue_skies:gems/aquite`, `blue_skies:aquite_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#blue_skies:gems/diopside`, `blue_skies:diopside_${t}`)
		// Botania
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/manasteel`, `botania:manasteel_${t == `pickaxe` ? `pick` : t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/elementium`, `botania:elementium_${t}`)
		// Create Additions
		//offeringRecipe(`minecraft:diamond_${t}`, `#forge:ingots/brass`, `create_stuff_additions:brass_${t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/zinc`, `create_stuff_additions:zinc_${t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/copper`, `create_stuff_additions:copper_${t}`)
		// Cyclic
		//offeringRecipe(`minecraft:stone_${t}`, `#forge:sandstone`, `cyclic:sandstone_${t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:bricks/nether`, `cyclic:netherbrick_${t}`)
		//offeringRecipe(`minecraft:netherite_${t}`, `#forge:gems/diamond`, `cyclic:crystal_${t}`)
		//offeringRecipe(`minecraft:diamond_${t}`, `#forge:gems/emerald`, `cyclic:emerald_${t}`)
		// Druidcraft
		//offeringRecipe(`minecraft:netherite_${t}`, `#forge:gems/moonstone`, `druidcraft:moonstone_${t}`)
		//offeringRecipe(`minecraft:stone_${t}`, `#forge:bones`, `druidcraft:bone_${t}`)
		// Forbidden Arcanus
		offeringRecipe(`minecraft:netherite_${t}`, `forbidden_arcanus:edelwood_stick`, `forbidden_arcanus:reinforced_arcane_golden_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/arcane_gold`, `forbidden_arcanus:deorum_{t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:dragon_scales`, `forbidden_arcanus:draco_arcanus_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#forge:ingots/obsidian`, `forbidden_arcanus:obsidian_${t}`)
		// Gobber 2
		gobberTypes.forEach(g => offeringRecipe(`minecraft:netherite_${t}`, `gobber2:gobber2_ingot${g}`, `gobber2:gobber2_${t}${g}`))
		// Immersive Engineering
		offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/steel`, `immersiveengineering:${t}_steel`)
		// Minecraft
		offeringRecipe(`minecraft:wooden_${t}`, `#forge:stone`, `minecraft:stone_${t}`)
		offeringRecipe(`minecraft:stone_${t}`, `#forge:ingots/iron`, `minecraft:iron_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/gold`, `minecraft:golden_${t}`)
		offeringRecipe(`minecraft:golden_${t}`, `#forge:gems/diamond`, `minecraft:diamond_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#forge:ingots/netherite`, `minecraft:netherite_${t}`)
		// Mystical Agriculture
		offeringRecipe(`minecraft:diamond_${t}`, `mysticalagriculture:inferium_gemstone`, `mysticalagriculture:inferium_${t}`)
		offeringRecipe(`mysticalagriculture:inferium_${t}`, `mysticalagriculture:prudentium_gemstone`, `mysticalagriculture:prudentium_${t}`)
		offeringRecipe(`mysticalagriculture:prudentium_${t}`, `mysticalagriculture:tertium_gemstone`, `mysticalagriculture:tertium_${t}`)
		offeringRecipe(`mysticalagriculture:tertium_${t}`, `mysticalagriculture:imperium_gemstone`, `mysticalagriculture:imperium_${t}`)
		offeringRecipe(`mysticalagriculture:imperium_${t}`, `mysticalagriculture:supremium_gemstone`, `mysticalagriculture:supremium_${t}`)
		// Nature`s Aura
		offeringRecipe(`minecraft:iron_${t}`, `naturesaura:infused_iron`, `naturesaura:infused_iron_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `naturesaura:sky_ingot`, `naturesaura:sky_${t}`)
		// PSI
		if (t != `hoe`) offeringRecipe(`minecraft:diamond_${t}`, `#forge:gems/psigem`, `psi:psimetal_${t}`)
		// Twilight Forest
		offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/ironwood`, `twilightforest:ironwood_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#forge:ingots/steeleaf`, `twilightforest:steeleaf_${t}`)
		// Undergrden
		//offeringRecipe(`minecraft:stone_${t}`, `#forge:ingots/cloggrum`, `undergarden:cloggrum_${t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/froststeel`, `undergarden:froststeel_${t}`)
		//offeringRecipe(`minecraft:diamond_${t}`, `#forge:ingots/utherium`, `undergarden:utheric_${t}`)
	})

	// ARMORS
	armors.forEach(t => {
		// Aquaculture
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/neptunium`, `aquaculture:neptunium_${t}`)
		// Atum
		//offeringRecipe(`atum:wanderer_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : t)}`, `minecraft:iron_${t}`, `atum:desert_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : t)}_iron`)
		//offeringRecipe(`atum:wanderer_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : t)}`, `minecraft:golden_${t}`, `atum:desert_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : t)}_gold`)
		//offeringRecipe(`atum:wanderer_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : t)}`, `minecraft:diamond_${t}`, `atum:desert_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : t)}_diamond`)
		// Blue Skies
		offeringRecipe(`minecraft:iron_${t}`, `#blue_skies:gems/pyrope`, `blue_skies:pyrope_${t}`)
		offeringRecipe(`minecraft:golden_${t}`, `#forge:ingots/shadow_steel`, `blue_skies:shadow_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#blue_skies:ingots/horizonite`, `blue_skies:horizonite_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#blue_skies:gems/charoite`, `blue_skies:charoite_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#blue_skies:gems/aquite`, `blue_skies:aquite_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#blue_skies:gems/diopside`, `blue_skies:diopside_${t}`)
		// Botania
		//offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/terrasteel`, `botania:terrasteel_${t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/manasteel`, `botania:manasteel_${t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/elementium`, `botania:elementium_${t}`)
		// Cyclic
		//offeringRecipe(`minecraft:netherite_${t}`, `#forge:gems/diamond`, `cyclic:crystal_${t}`)
		//offeringRecipe(`minecraft:diamond_${t}`, `#forge:gems/emerald`, `cyclic:emerald_${t}`)
		// Druidcraft
		//offeringRecipe(`minecraft:netherite_${t}`, `#forge:gems/moonstone`, `druidcraft:moonstone_${t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `druidcraft:chitin`, `druidcraft:chitin_${t}`)
		//offeringRecipe(`minecraft:chainmail_${t}`, `#forge:bones`, `druidcraft:bone_${t}`)
		// Forbidden Arcanus
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/arcane_gold`, `forbidden_arcanus:deorum_{t}`)
		// Gobber 2
		gobberTypes.forEach(g => offeringRecipe(`minecraft:netherite_${t}`, `gobber2:gobber2_ingot${g}`, `gobber2:gobber2_${t}${g}`))
		// Immersive Engineering
		e.smithing(`minecraft:iron_${t}`, `#forge:plates/steel`, `immersiveengineering:armor_steel_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : (t == `helmet` ? `head` : `feet`))}`)
		e.smithing(`minecraft:leather_${t}`, `#forge:plates/aluminum`, `immersiveengineering:armor_faraday_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : (t == `helmet` ? `head` : `feet`))}`)
		// Minecraft
		offeringRecipe(`minecraft:leather_${t}`, `#forge:ingots/iron`, `minecraft:iron_${t}`)
		offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/gold`, `minecraft:golden_${t}`)
		offeringRecipe(`minecraft:golden_${t}`, `#forge:gems/diamond`, `minecraft:diamond_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#forge:ingots/netherite`, `minecraft:netherite_${t}`)
		// Mystical Agriculture
		offeringRecipe(`minecraft:diamond_${t}`, `mysticalagriculture:inferium_gemstone`, `mysticalagriculture:inferium_${t}`)
		offeringRecipe(`mysticalagriculture:inferium_${t}`, `mysticalagriculture:prudentium_gemstone`, `mysticalagriculture:prudentium_${t}`)
		offeringRecipe(`mysticalagriculture:prudentium_${t}`, `mysticalagriculture:tertium_gemstone`, `mysticalagriculture:tertium_${t}`)
		offeringRecipe(`mysticalagriculture:tertium_${t}`, `mysticalagriculture:imperium_gemstone`, `mysticalagriculture:imperium_${t}`)
		offeringRecipe(`mysticalagriculture:imperium_${t}`, `mysticalagriculture:supremium_gemstone`, `mysticalagriculture:supremium_${t}`)
		// Nature`s Aura
		offeringRecipe(`minecraft:iron_${t}`, `naturesaura:infused_iron`, `naturesaura:infused_iron_${t == `chestplate` ? `chest` : (t == `leggings` ? `pants` : (t == `boots` ? `shoes` : t))}`)
		offeringRecipe(`minecraft:diamond_${t}`, `naturesaura:sky_ingot`, `naturesaura:sky_${t == `chestplate` ? `chest` : (t == `leggings` ? `pants` : (t == `boots` ? `shoes` : t))}`)
		// Pneumaticcraft
		offeringRecipe(`minecraft:iron_${t}`, `kubejs:compressed_iron_plate`, `pneumaticcraft:compressed_iron_${t}`)
		// PSI
		//offeringRecipe(`minecraft:diamond_${t}`, `#forge:gems/psigem`, `psi:psimetal_exosuit_${t}`)
		// Twilight Forest
		offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/ironwood`, `twilightforest:ironwood_${t}`)
		offeringRecipe(`minecraft:diamond_${t}`, `#forge:ingots/steeleaf`, `twilightforest:steeleaf_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/fiery`, `twilightforest:fiery_${t}`)
		offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/knightmetal`, `twilightforest:knightmetal_${t}`)
		// Undergrden
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/cloggrum`, `undergarden:cloggrum_${t}`)
		//offeringRecipe(`minecraft:iron_${t}`, `#forge:ingots/froststeel`, `undergarden:froststeel_${t}`)
		//offeringRecipe(`minecraft:netherite_${t}`, `#forge:ingots/utherium`, `undergarden:utheric_${t}`)
	})
})
