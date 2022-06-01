onEvent(`recipes`, e => {
	let tools = [`sword`, `shovel`, `pickaxe`, `axe`, `hoe`]
	let armors = [`helmet`, `chestplate`, `leggings`, `boots`]
	let gobberTypes = ['', '_nether', '_end']

	// Atum
	e.smithing(`atum:stoneguard_sword`, Item.of(`minecraft:stone_sword`).ignoreNBT(), `#forge:ingots/khnumite`)
	e.smithing(`atum:stoneguard_greatsword`, Item.of(`atum:stoneguard_sword`).ignoreNBT(), `#forge:ingots/khnumite`)
	// AIOT
	e.smithing(`aiotbotania:terra_hoe`, Item.of(`minecraft:netherite_hoe`).ignoreNBT(), `#forge:ingots/terrasteel`)
	// Aquaculture
	e.smithing(`aquaculture:neptunium_bow`, `#forge:string`, `#forge:ingots/neptunium`)
	// Botania
	e.smithing(`botania:livingwood_bow`, `botania:mana_string`, `botania:livingwood_twig`)
	e.smithing(`botania:mana_ring`, `botania:mana_tablet`, `#forge:ingots/manasteel`)
	e.smithing(`botania:aura_ring`, `botania:rune_mana`, `#forge:ingots/manasteel`)
	e.smithing(`botania:magnet_ring`, `botania:lens_magnet`, `#forge:ingots/manasteel`)
	e.smithing(`botania:water_ring`, `minecraft:heart_of_the_sea`, `#forge:ingots/manasteel`)
	e.smithing(`botania:dodge_ring`, `botania:rune_air`, `#forge:ingots/manasteel`)
	e.smithing(`botania:mining_ring`, `botania:rune_earth`, `#forge:ingots/manasteel`)
	e.smithing(`botania:pixie_ring`, `botania:pixie_dust`, `#forge:ingots/elementium`)
	e.smithing(`botania:reach_ring`, `botania:rune_pride`, `#forge:ingots/elementium`)
	e.smithing(`botania:swap_ring`, `#forge:storage_blocks/clay`, `#forge:ingots/manasteel`)
	e.smithing(`botania:aura_ring_greater`, `botania:aura_ring`, `#forge:ingots/terrasteel`)
	e.smithing(`botania:mana_ring_greater`, `botania:mana_ring`, `#forge:ingots/terrasteel`)
	e.smithing(`botania:magnet_ring_greater`, `botania:magnet_ring`, `#forge:ingots/terrasteel`)
	e.smithing(`botania:glass_pickaxe`, Item.of(`minecraft:wooden_pickaxe`).ignoreNBT(), `#forge:ingots/manasteel`)
	// Druidcraft
	e.smithing(`druidcraft:bone_shield`, `#minecraft:planks`, `#forge:bones`)
	e.smithing(`druidcraft:chitin_shield`, `#forge:nuggets/iron`, `druidcraft:chitin`)
	e.smithing(`druidcraft:moonstone_shield`, `#forge:ingots/iron`, `#forge:gems/moonstone`)
	// Explorer`s Compass
	e.smithing(`explorerscompass:explorerscompass`, `minecraft:compass`, `minecraft:cracked_stone_bricks`)
	// Forbidden Arcanus
	e.smithing(`forbidden_arcanus:infernum_pickaxe`, Item.of(`minecraft:diamond_pickaxe`).ignoreNBT(), `forbidden_arcanus:obsidian_skull`)
	e.smithing(`forbidden_arcanus:slimec_pickaxe`, Item.of(`minecraft:diamond_pickaxe`).ignoreNBT(), `forbidden_arcanus:golden_feather`)
	// Gobber 2
	e.smithing(`gobber2:gobber2_ring_phoenix`, `gobber2:gobber2_ring_nether`, `minecraft:magma_cream`)
	e.smithing(`gobber2:gobber2_paxel_stars`, `gobber2:gobber2_paxel_end`, `gobber2:gobber2_staff_stars`)
	e.smithing(`gobber2:gobber2_sword_sniper`, `gobber2:gobber2_sword_end`, `gobber2:gobber2_staff_sniper`)
	e.smithing(`gobber2:gobber2_sword_traveler`, `gobber2:gobber2_sword_end`, `gobber2:gobber2_ring_traveler`)
	gobberTypes.forEach(t => {
		e.smithing(`gobber2:gobber2_bow${t}`, `#forge:string`, `gobber2:gobber2_rod${t}`)
		e.smithing(`gobber2:gobber2_excavator${t}`, Item.of(`minecraft:netherite_shovel`).ignoreNBT(), `gobber2:gobber2_rod${t}`)
	})
	// Immersive Engineering
	e.smithing(`immersiveengineering:shield`, Item.of(`minecraft:shield`).ignoreNBT(), `#forge:treated_wood`)
	// Ice and Fire
	e.smithing(`iceandfire:dragonbone_sword_lightning`, Item.of(`iceandfire:dragonbone_sword`).ignoreNBT(), `iceandfire:lightning_dragon_blood`)
	e.smithing(`iceandfire:dragonbone_sword_ice`, Item.of(`iceandfire:dragonbone_sword`).ignoreNBT(), `iceandfire:ice_dragon_blood`)
	e.smithing(`iceandfire:dragonbone_sword_fire`, Item.of(`iceandfire:dragonbone_sword`).ignoreNBT(), `iceandfire:fire_dragon_blood`)
	e.smithing(`iceandfire:hippogryph_sword`, Item.of(`minecraft:netherite_sword`).ignoreNBT(), `iceandfire:hippogryph_talon`)
	e.smithing(`iceandfire:dragonbone_bow`, `#forge:string`, `#forge:bones/wither`)
	// Minecraft
	e.smithing(`minecraft:shield`, `#minecraft:planks`, `#forge:ingots/iron`)
	e.smithing(`minecraft:compass`, `#forge:plates/iron`, `extendedcrafting:redstone_ingot`)
	e.smithing(`minecraft:bow`, `#forge:rods/wooden`, `#forge:string`)
	e.smithing(`minecraft:crossbow`, `minecraft:tripwire_hook`, `#forge:ingots/iron`)
	// Mystical Agriculture
	e.smithing(`mysticalagriculture:inferium_furnace`, `#forge:furnace`, `mysticalagriculture:inferium_block`)
	e.smithing(`mysticalagriculture:prudentium_furnace`, `mysticalagriculture:inferium_furnace`, `mysticalagriculture:prudentium_block`)
	e.smithing(`mysticalagriculture:tertium_furnace`, `mysticalagriculture:prudentium_furnace`, `mysticalagriculture:tertium_block`)
	e.smithing(`mysticalagriculture:imperium_furnace`, `mysticalagriculture:tertium_furnace`, `mysticalagriculture:imperium_block`)
	e.smithing(`mysticalagriculture:supremium_furnace`, `mysticalagriculture:imperium_furnace`, `mysticalagriculture:supremium_block`)
	// Modular Routers
	e.smithing(`modularrouters:breaker_module`, `modularrouters:blank_module`, `#forge:tools/pickaxe`)
	e.smithing(`modularrouters:extruder_module_1`, `modularrouters:breaker_module`, `modularrouters:blank_module`)
	// Nature`s Compass
	e.smithing(`naturescompass:naturescompass`, `minecraft:compass`, `#minecraft:saplings`)
	// Occultism
	e.smithing(`occultism:iesnium_pickaxe`, Item.of(`minecraft:diamond_pickaxe`).ignoreNBT(), `#forge:ingots/iesnium`)
	// PSI
	e.smithing(`psipherals:psimetal_bow`, `#forge:string`, `#forge:gems/psigem`)
	// Twilight Forest
	e.smithing(`twilightforest:knightmetal_shield`, Item.of(`#twilightforest:towerwood`).ignoreNBT(), `#forge:ingots/knightmetal`)
	e.smithing(`twilightforest:knightmetal_sword`, Item.of(`minecraft:diamond_sword`).ignoreNBT(), `#forge:ingots/knightmetal`)
	e.smithing(`twilightforest:knightmetal_axe`, Item.of(`minecraft:netherite_axe`).ignoreNBT(), `#forge:ingots/knightmetal`)
	e.smithing(`twilightforest:knightmetal_pickaxe`, Item.of(`minecraft:diamond_pickaxe`).ignoreNBT(), `#forge:ingots/knightmetal`)
	e.smithing(`twilightforest:fiery_pickaxe`, Item.of(`minecraft:netherite_pickaxe`).ignoreNBT(), `#forge:ingots/fiery`)
	e.smithing(`twilightforest:fiery_sword`, Item.of(`minecraft:netherite_sword`).ignoreNBT(), `#forge:ingots/fiery`)
	// Undergrden
	e.smithing(`undergarden:cloggrum_shield`, `#minecraft:planks`, `#forge:ingots/cloggrum`)
	e.smithing(`undergarden:masticated_chestplate`, Item.of(`minecraft:iron_chestplate`).ignoreNBT(), `undergarden:masticator_scales`)

	// TOOLS
	tools.forEach(t => {
		// Atum
		e.smithing(`atum:limestone_${t}`, Item.of(`minecraft:stone_${t}`).ignoreNBT(), `atum:limestone_cracked`)
		// AIOT
		e.smithing(`aiotbotania:livingwood_${t}`, Item.of(`minecraft:wooden_${t}`).ignoreNBT(), `#botania:livingwood`)
		e.smithing(`aiotbotania:livingrock_${t}`, Item.of(`minecraft:stone_${t}`).ignoreNBT(), `#botania:livingrock`)
		// Aquaculture
		e.smithing(`aquaculture:neptunium_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:ingots/neptunium`)
		// Applied Energistics 2
		e.smithing(`appliedenergistics2:certus_quartz_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:gems/certus_quartz`)
		e.smithing(`appliedenergistics2:nether_quartz_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:gems/quartz`)
		// Botania
		e.smithing(`botania:manasteel_${t == `pickaxe` ? `pick` : t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:ingots/manasteel`)
		e.smithing(`botania:elementium_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:ingots/elementium`)
		// Create Additions
		e.smithing(`create_stuff_additions:brass_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `#forge:ingots/brass`)
		e.smithing(`create_stuff_additions:zinc_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:ingots/zinc`)
		e.smithing(`create_stuff_additions:copper_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:ingots/copper`)
		// Cyclic
		e.smithing(`cyclic:netherbrick_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:bricks/nether`)
		e.smithing(`cyclic:sandstone_${t}`, Item.of(`minecraft:stone_${t}`).ignoreNBT(), `#forge:sandstone`)
		e.smithing(`cyclic:emerald_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `#forge:gems/emerald`)
		e.smithing(`cyclic:crystal_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:gems/diamond`)
		// Druidcraft
		e.smithing(`druidcraft:moonstone_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:gems/moonstone`)
		e.smithing(`druidcraft:bone_${t}`, Item.of(`minecraft:stone_${t}`).ignoreNBT(), `#forge:bones`)
		// Forbidden Arcanus
		e.smithing(`forbidden_arcanus:reinforced_arcane_golden_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `forbidden_arcanus:edelwood_stick`)
		e.smithing(`forbidden_arcanus:arcane_golden_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:ingots/arcane_gold`)
		e.smithing(`forbidden_arcanus:draco_arcanus_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:dragon_scales`)
		e.smithing(`forbidden_arcanus:obsidian_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `#forge:ingots/obsidian`)
		// Gobber 2
		gobberTypes.forEach(g => {
			e.smithing(`gobber2:gobber2_${t}${g}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `gobber2:gobber2_ingot${g}`)
		})
		// Immersive Engineering
		e.smithing(`immersiveengineering:${t}_steel`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:ingots/steel`)
		// Ice and Fire
		e.smithing(`iceandfire:dragonsteel_lightning_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:ingots/dragonsteel_lightning`)
		e.smithing(`iceandfire:dragonsteel_ice_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:ingots/dragonsteel_ice`)
		e.smithing(`iceandfire:dragonsteel_fire_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:ingots/dragonsteel_fire`)
		e.smithing(`iceandfire:myrmex_jungle_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `iceandfire:myrmex_jungle_chitin`)
		e.smithing(`iceandfire:myrmex_desert_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `iceandfire:myrmex_desert_chitin`)
		e.smithing(`iceandfire:dragonbone_${t}`, Item.of(`minecraft:netherite_${t}`).ignoreNBT(), `#forge:bones/dragon`)
		// Minecraft
		e.smithing(`minecraft:stone_${t}`, Item.of(`minecraft:wooden_${t}`).ignoreNBT(), `#forge:stone`)
		e.smithing(`minecraft:iron_${t}`, Item.of(`minecraft:stone_${t}`).ignoreNBT(), `#forge:ingots/iron`)
		e.smithing(`minecraft:golden_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:ingots/gold`)
		e.smithing(`minecraft:diamond_${t}`, Item.of(`minecraft:golden_${t}`).ignoreNBT(), `#forge:gems/diamond`)
		// Mystical Agriculture
		e.smithing(`mysticalagriculture:inferium_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `mysticalagriculture:inferium_gemstone`)
		e.smithing(`mysticalagriculture:prudentium_${t}`, Item.of(`mysticalagriculture:inferium_${t}`).ignoreNBT(), `mysticalagriculture:prudentium_gemstone`)
		e.smithing(`mysticalagriculture:tertium_${t}`, Item.of(`mysticalagriculture:prudentium_${t}`).ignoreNBT(), `mysticalagriculture:tertium_gemstone`)
		e.smithing(`mysticalagriculture:imperium_${t}`, Item.of(`mysticalagriculture:tertium_${t}`).ignoreNBT(), `mysticalagriculture:imperium_gemstone`)
		e.smithing(`mysticalagriculture:supremium_${t}`, Item.of(`mysticalagriculture:imperium_${t}`).ignoreNBT(), `mysticalagriculture:supremium_gemstone`)
		// Nature`s Aura
		e.smithing(`naturesaura:infused_iron_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `naturesaura:infused_iron`)
		e.smithing(`naturesaura:sky_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `naturesaura:sky_ingot`)
		// PSI
		if (t != 'hoe') e.smithing(`psi:psimetal_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `#forge:gems/psigem`)
		// Twilight Forest
		e.smithing(`twilightforest:ironwood_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:ingots/ironwood`)
		e.smithing(`twilightforest:steeleaf_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `#forge:ingots/steeleaf`)
		// Undergrden
		e.smithing(`undergarden:cloggrum_${t}`, Item.of(`minecraft:stone_${t}`).ignoreNBT(), `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:froststeel_${t}`, Item.of(`minecraft:iron_${t}`).ignoreNBT(), `#forge:ingots/froststeel`)
		e.smithing(`undergarden:utheric_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `#forge:ingots/utherium`)
	})

	// ARMORS
	armors.forEach(a => {
		// Atum
		e.smithing(`atum:desert_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : a)}_iron`, Item.of(`atum:wanderer_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : a)}`).ignoreNBT(), `minecraft:iron_${a}`)
		e.smithing(`atum:desert_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : a)}_gold`, Item.of(`atum:wanderer_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : a)}`).ignoreNBT(), `minecraft:golden_${a}`)
		e.smithing(`atum:desert_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : a)}_diamond`, Item.of(`atum:wanderer_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : a)}`).ignoreNBT(), `minecraft:diamond_${a}`)
		// Aquaculture
		e.smithing(`aquaculture:neptunium_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/neptunium`)
		// Botania
		e.smithing(`botania:terrasteel_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/terrasteel`)
		e.smithing(`botania:manasteel_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `#forge:ingots/manasteel`)
		e.smithing(`botania:elementium_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `#forge:ingots/elementium`)
		// Cyclic
		e.smithing(`cyclic:emerald_${a}`, Item.of(`minecraft:diamond_${a}`).ignoreNBT(), `#forge:gems/emerald`)
		e.smithing(`cyclic:crystal_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:gems/diamond`)
		// Druidcraft
		e.smithing(`druidcraft:moonstone_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:gems/moonstone`)
		e.smithing(`druidcraft:chitin_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `druidcraft:chitin`)
		e.smithing(`druidcraft:bone_${a}`, Item.of(`minecraft:chainmail_${a}`).ignoreNBT(), `#forge:bones`)
		// Forbidden Arcanus
		e.smithing(`forbidden_arcanus:arcane_gold_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/arcane_gold`)
		// Gobber 2
		gobberTypes.forEach(t => {
			e.smithing(`gobber2:gobber2_${a}${t}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `gobber2:gobber2_ingot${t}`)
		})
		// Immersive Engineering
		e.smithing(`immersiveengineering:armor_steel_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : (a == 'helmet' ? 'head' : 'feet'))}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `#forge:plates/steel`)
		e.smithing(`immersiveengineering:armor_faraday_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : (a == 'helmet' ? 'head' : 'feet'))}`, Item.of(`minecraft:leather_${a}`).ignoreNBT(), `#forge:plates/aluminum`)
		// Ice and Fire
		e.smithing(`iceandfire:dragonsteel_lightning_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/dragonsteel_lightning`)
		e.smithing(`iceandfire:dragonsteel_ice_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/dragonsteel_ice`)
		e.smithing(`iceandfire:dragonsteel_fire_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/dragonsteel_fire`)
		e.smithing(`iceandfire:myrmex_jungle_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `iceandfire:myrmex_jungle_chitin`)
		e.smithing(`iceandfire:myrmex_desert_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `iceandfire:myrmex_desert_chitin`)
		// Minecraft
		e.smithing(`minecraft:iron_${a}`, Item.of(`minecraft:leather_${a}`).ignoreNBT(), `#forge:ingots/iron`)
		e.smithing(`minecraft:golden_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `#forge:ingots/gold`)
		e.smithing(`minecraft:diamond_${a}`, Item.of(`minecraft:golden_${a}`).ignoreNBT(), `#forge:gems/diamond`)
		// Mystical Agriculture
		e.smithing(`mysticalagriculture:inferium_${a}`, Item.of(`minecraft:diamond_${a}`).ignoreNBT(), `mysticalagriculture:inferium_gemstone`)
		e.smithing(`mysticalagriculture:prudentium_${a}`, Item.of(`mysticalagriculture:inferium_${a}`).ignoreNBT(), `mysticalagriculture:prudentium_gemstone`)
		e.smithing(`mysticalagriculture:tertium_${a}`, Item.of(`mysticalagriculture:prudentium_${a}`).ignoreNBT(), `mysticalagriculture:tertium_gemstone`)
		e.smithing(`mysticalagriculture:imperium_${a}`, Item.of(`mysticalagriculture:tertium_${a}`).ignoreNBT(), `mysticalagriculture:imperium_gemstone`)
		e.smithing(`mysticalagriculture:supremium_${a}`, Item.of(`mysticalagriculture:imperium_${a}`).ignoreNBT(), `mysticalagriculture:supremium_gemstone`)
		// Nature`s Aura
		e.smithing(`naturesaura:infused_iron_${a == `chestplate` ? `chest` : (a == `leggings` ? `pants` : (a == 'boots' ? 'shoes' : a))}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `naturesaura:infused_iron`)
		e.smithing(`naturesaura:sky_${a == `chestplate` ? `chest` : (a == `leggings` ? `pants` : (a == 'boots' ? 'shoes' : a))}`, Item.of(`minecraft:diamond_${a}`).ignoreNBT(), `naturesaura:sky_ingot`)
		// Pneumaticcraft
		e.smithing(`pneumaticcraft:compressed_iron_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `kubejs:compressed_iron_plate`)
		// PSI
		e.smithing(`psi:psimetal_exosuit_${a}`, Item.of(`minecraft:diamond_${a}`).ignoreNBT(), `#forge:gems/psigem`)
		// Twilight Forest
		e.smithing(`twilightforest:ironwood_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `#forge:ingots/ironwood`)
		e.smithing(`twilightforest:steeleaf_${a}`, Item.of(`minecraft:diamond_${a}`).ignoreNBT(), `#forge:ingots/steeleaf`)
		e.smithing(`twilightforest:fiery_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/fiery`)
		e.smithing(`twilightforest:knightmetal_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/knightmetal`)
		// Undergrden
		e.smithing(`undergarden:cloggrum_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:froststeel_${a}`, Item.of(`minecraft:iron_${a}`).ignoreNBT(), `#forge:ingots/froststeel`)
		e.smithing(`undergarden:utheric_${a}`, Item.of(`minecraft:netherite_${a}`).ignoreNBT(), `#forge:ingots/utherium`)
	})

	// Undergrden
	e.smithing(`undergarden:cloggrum_chestplate`, Item.of(`minecraft:iron_chestplate`).ignoreNBT(), `#forge:ingots/cloggrum`)
	e.smithing(`undergarden:froststeel_chestplate`, Item.of(`minecraft:iron_chestplate`).ignoreNBT(), `#forge:ingots/froststeel`)
	e.smithing(`undergarden:utheric_chestplate`, Item.of(`minecraft:netherite_chestplate`).ignoreNBT(), `#forge:ingots/utherium`)

	e.smithing(`undergarden:cloggrum_helmet`, Item.of(`minecraft:iron_helmet`).ignoreNBT(), `#forge:ingots/cloggrum`)
	e.smithing(`undergarden:froststeel_helmet`, Item.of(`minecraft:iron_helmet`).ignoreNBT(), `#forge:ingots/froststeel`)
	e.smithing(`undergarden:utheric_helmet`, Item.of(`minecraft:netherite_helmet`).ignoreNBT(), `#forge:ingots/utherium`)

	e.smithing(`undergarden:cloggrum_leggings`, Item.of(`minecraft:iron_leggings`).ignoreNBT(), `#forge:ingots/cloggrum`)
	e.smithing(`undergarden:froststeel_leggings`, Item.of(`minecraft:iron_leggings`).ignoreNBT(), `#forge:ingots/froststeel`)
	e.smithing(`undergarden:utheric_leggings`, Item.of(`minecraft:netherite_leggings`).ignoreNBT(), `#forge:ingots/utherium`)

	e.smithing(`undergarden:cloggrum_boots`, Item.of(`minecraft:iron_boots`).ignoreNBT(), `#forge:ingots/cloggrum`)
	e.smithing(`undergarden:froststeel_boots`, Item.of(`minecraft:iron_boots`).ignoreNBT(), `#forge:ingots/froststeel`)
	e.smithing(`undergarden:utheric_boots`, Item.of(`minecraft:netherite_boots`).ignoreNBT(), `#forge:ingots/utherium`)

})
