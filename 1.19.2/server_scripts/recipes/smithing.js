ServerEvents.recipes(e => {
	let tools = [`sword`, `shovel`, `pickaxe`, `axe`, `hoe`]
	let armors = [`helmet`, `chestplate`, `leggings`, `boots`]
	let gobberTypes = ['_nether', '_end']
	let blueSkiesPlankTypes = ['cherry', 'maple', 'frostbright', 'dusk', 'starlit', 'lunar', 'bluebright']

	// Alex's Mobs
		e.smithing(`alexsmobs:crocodile_chestplate`, Item.of(`minecraft:iron_chestplate`), `alexsmobs:crocodile_scute`)
	// Aquaculture
		e.smithing(`aquaculture:neptunium_bow`, `#forge:string`, `#forge:ingots/neptunium`)
	// Explorer`s Compass
		e.smithing(`explorerscompass:explorerscompass`, `minecraft:compass`, `minecraft:cracked_stone_bricks`)
	// Forbidden Arcanus
		e.smithing(`forbidden_arcanus:slimec_pickaxe`, Item.of(`minecraft:diamond_pickaxe`), `forbidden_arcanus:golden_feather`)
	// Gobber 2
		e.smithing(`gobber2:gobber2_ring_phoenix`, `gobber2:gobber2_ring_nether`, `minecraft:magma_cream`)
		e.smithing(`gobber2:gobber2_paxel_stars`, `gobber2:gobber2_paxel_end`, `gobber2:gobber2_staff_stars`)
		e.smithing(`gobber2:gobber2_sword_sniper`, `gobber2:gobber2_sword_end`, `gobber2:gobber2_staff_sniper`)
		e.smithing(`gobber2:gobber2_sword_traveler`, `gobber2:gobber2_sword_end`, `gobber2:gobber2_ring_traveler`)
	gobberTypes.forEach(t => {
		e.smithing(`gobber2:gobber2_bow${t}`, `#forge:string`, `gobber2:gobber2_rod${t}`)
		e.smithing(`gobber2:gobber2_excavator${t}`, Item.of(`minecraft:netherite_shovel`), `gobber2:gobber2_rod${t}`)
	})
	// Immersive Engineering
	e.smithing(`immersiveengineering:shield`, Item.of(`minecraft:shield`), `#forge:treated_wood`)
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
		e.smithing(`mysticalagriculture:inferium_reprocessor`, `mysticalagriculture:machine_frame`, `mysticalagriculture:inferium_block`)
		e.smithing(`mysticalagriculture:prudentium_reprocessor`, `mysticalagriculture:inferium_reprocessor`, `mysticalagriculture:prudentium_block`)
		e.smithing(`mysticalagriculture:tertium_reprocessor`, `mysticalagriculture:prudentium_reprocessor`, `mysticalagriculture:tertium_block`)
		e.smithing(`mysticalagriculture:imperium_reprocessor`, `mysticalagriculture:tertium_reprocessor`, `mysticalagriculture:imperium_block`)
		e.smithing(`mysticalagriculture:supremium_reprocessor`, `mysticalagriculture:imperium_reprocessor`, `mysticalagriculture:supremium_block`)
		e.smithing(`mysticalagriculture:inferium_crossbow`, `minecraft:crossbow`, `mysticalagriculture:inferium_block`)
		e.smithing(`mysticalagriculture:prudentium_crossbow`, `mysticalagriculture:inferium_crossbow`, `mysticalagriculture:prudentium_block`)
		e.smithing(`mysticalagriculture:tertium_crossbow`, `mysticalagriculture:prudentium_crossbow`, `mysticalagriculture:tertium_block`)
		e.smithing(`mysticalagriculture:imperium_crossbow`, `mysticalagriculture:tertium_crossbow`, `mysticalagriculture:imperium_block`)
		e.smithing(`mysticalagriculture:supremium_crossbow`, `mysticalagriculture:imperium_crossbow`, `mysticalagriculture:supremium_block`)
		e.smithing(`mysticalagriculture:inferium_bow`, `minecraft:bow`, `mysticalagriculture:inferium_block`)
		e.smithing(`mysticalagriculture:prudentium_bow`, `mysticalagriculture:inferium_bow`, `mysticalagriculture:prudentium_block`)
		e.smithing(`mysticalagriculture:tertium_bow`, `mysticalagriculture:prudentium_bow`, `mysticalagriculture:tertium_block`)
		e.smithing(`mysticalagriculture:imperium_bow`, `mysticalagriculture:tertium_bow`, `mysticalagriculture:imperium_block`)
		e.smithing(`mysticalagriculture:supremium_bow`, `mysticalagriculture:imperium_bow`, `mysticalagriculture:supremium_block`)
	// Nature`s Compass
		e.smithing(`naturescompass:naturescompass`, `minecraft:compass`, `#minecraft:saplings`)
	// Occultism
		e.smithing(`occultism:iesnium_pickaxe`, Item.of(`minecraft:diamond_pickaxe`), `#forge:ingots/iesnium`)
	// Twilight Forest
		e.smithing(`twilightforest:knightmetal_shield`, Item.of(`#twilightforest:towerwood`), `#forge:ingots/knightmetal`)
		e.smithing(`twilightforest:knightmetal_sword`, Item.of(`minecraft:diamond_sword`), `#forge:ingots/knightmetal`)
		e.smithing(`twilightforest:knightmetal_axe`, Item.of(`minecraft:netherite_axe`), `#forge:ingots/knightmetal`)
		e.smithing(`twilightforest:knightmetal_pickaxe`, Item.of(`minecraft:diamond_pickaxe`), `#forge:ingots/knightmetal`)
		e.smithing(`twilightforest:fiery_pickaxe`, Item.of(`minecraft:netherite_pickaxe`), `#forge:ingots/fiery`)
		e.smithing(`twilightforest:fiery_sword`, Item.of(`minecraft:netherite_sword`), `#forge:ingots/fiery`)
	// Undergrden
		e.smithing(`undergarden:cloggrum_shield`, `#minecraft:planks`, `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:masticated_chestplate`, Item.of(`minecraft:iron_chestplate`), `undergarden:masticator_scales`)

	// TOOLS
	tools.forEach(t => {
		// Aquaculture
		e.smithing(`aquaculture:neptunium_${t}`, Item.of(`minecraft:netherite_${t}`), `#forge:ingots/neptunium`)
		// Applied Energistics 2
		e.smithing(`ae2:certus_quartz_${t}`, Item.of(`minecraft:iron_${t}`), `#forge:gems/certus_quartz`)
		e.smithing(`ae2:nether_quartz_${t}`, Item.of(`minecraft:iron_${t}`), `#forge:gems/quartz`)
		// Blue Skies
		blueSkiesPlankTypes.forEach(b => {
			e.smithing(`blue_skies:${b}_${t}`, Item.of(`minecraft:wooden_${t}`), `blue_skies:${b}_planks`)
		})
		e.smithing(`blue_skies:lunar_stone_${t}`, Item.of(`minecraft:stone_${t}`), `blue_skies:lunar_cobblestone`)
		e.smithing(`blue_skies:turquoise_stone_${t}`, Item.of(`minecraft:stone_${t}`), `blue_skies:turquoise_cobblestone`)
		e.smithing(`blue_skies:pyrope_${t}`, Item.of(`minecraft:iron_${t}`), `#blue_skies:gems/pyrope`)
		e.smithing(`blue_skies:horizonite_${t}`, Item.of(`minecraft:diamond_${t}`), `#blue_skies:ingots/horizonite`)
		e.smithing(`blue_skies:charoite_${t}`, Item.of(`minecraft:diamond_${t}`), `#blue_skies:gems/charoite`)
		e.smithing(`blue_skies:aquite_${t}`, Item.of(`minecraft:diamond_${t}`), `#blue_skies:gems/aquite`)
		e.smithing(`blue_skies:diopside_${t}`, Item.of(`minecraft:netherite_${t}`), `#blue_skies:gems/diopside`)
		// Create Additions
		e.smithing(`create_sa:brass_${t}`, Item.of(`minecraft:diamond_${t}`), `#forge:ingots/brass`)
		e.smithing(`create_sa:zinc_${t}`, Item.of(`minecraft:iron_${t}`), `#forge:ingots/zinc`)
		e.smithing(`create_sa:copper_${t}`, Item.of(`minecraft:iron_${t}`), `#forge:ingots/copper`)
		// Forbidden Arcanus
		e.smithing(`forbidden_arcanus:reinforced_deorum_${t}`, Item.of(`minecraft:netherite_${t}`), `forbidden_arcanus:edelwood_stick`)
		e.smithing(`forbidden_arcanus:deorum_${t}`, Item.of(`minecraft:netherite_${t}`), `#forge:ingots/arcane_gold`)
		e.smithing(`forbidden_arcanus:draco_arcanus_${t}`, Item.of(`minecraft:netherite_${t}`), `#forge:dragon_scales`)
		// Gobber 2
		gobberTypes.forEach(g => {
			e.smithing(`gobber2:gobber2_${t}${g}`, Item.of(`minecraft:netherite_${t}`), `gobber2:gobber2_ingot${g}`)
	})
		// Immersive Engineering
		e.smithing(`immersiveengineering:${t}_steel`, Item.of(`minecraft:iron_${t}`), `#forge:ingots/steel`)
		// Minecraft
		e.smithing(`minecraft:stone_${t}`, Item.of(`minecraft:wooden_${t}`), `#forge:stone`)
		e.smithing(`minecraft:iron_${t}`, Item.of(`minecraft:stone_${t}`), `#forge:ingots/iron`)
		e.smithing(`minecraft:golden_${t}`, Item.of(`minecraft:iron_${t}`), `#forge:ingots/gold`)
		e.smithing(`minecraft:diamond_${t}`, Item.of(`minecraft:golden_${t}`), `#forge:gems/diamond`)
		// Mystical Agriculture
		e.smithing(`mysticalagriculture:inferium_${t}`, Item.of(`minecraft:diamond_${t}`), `mysticalagriculture:inferium_gemstone`)
		e.smithing(`mysticalagriculture:prudentium_${t}`, Item.of(`mysticalagriculture:inferium_${t}`), `mysticalagriculture:prudentium_gemstone`)
		e.smithing(`mysticalagriculture:tertium_${t}`, Item.of(`mysticalagriculture:prudentium_${t}`), `mysticalagriculture:tertium_gemstone`)
		e.smithing(`mysticalagriculture:imperium_${t}`, Item.of(`mysticalagriculture:tertium_${t}`), `mysticalagriculture:imperium_gemstone`)
		e.smithing(`mysticalagriculture:supremium_${t}`, Item.of(`mysticalagriculture:imperium_${t}`), `mysticalagriculture:supremium_gemstone`)
		// Nature`s Aura
		e.smithing(`naturesaura:infused_iron_${t}`, Item.of(`minecraft:iron_${t}`), `naturesaura:infused_iron`)
		e.smithing(`naturesaura:sky_${t}`, Item.of(`minecraft:diamond_${t}`), `naturesaura:sky_ingot`)
		// PSI
		//if (t != 'hoe') e.smithing(`psi:psimetal_${t}`, Item.of(`minecraft:diamond_${t}`).ignoreNBT(), `#forge:gems/psigem`)
		// Twilight Forest
		e.smithing(`twilightforest:ironwood_${t}`, Item.of(`minecraft:iron_${t}`), `#forge:ingots/ironwood`)
		e.smithing(`twilightforest:steeleaf_${t}`, Item.of(`minecraft:diamond_${t}`), `#forge:ingots/steeleaf`)
		// Undergrden
		e.smithing(`undergarden:cloggrum_${t}`, Item.of(`minecraft:stone_${t}`), `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:froststeel_${t}`, Item.of(`minecraft:iron_${t}`), `#forge:ingots/froststeel`)
		e.smithing(`undergarden:utherium_${t}`, Item.of(`minecraft:diamond_${t}`), `#forge:ingots/utherium`)
	})

	// ARMORS
	armors.forEach(a => {
		// Aquaculture
		e.smithing(`aquaculture:neptunium_${a}`, Item.of(`minecraft:netherite_${a}`), `#forge:ingots/neptunium`)
		// Blue Skies
		e.smithing(`blue_skies:pyrope_${a}`, Item.of(`minecraft:iron_${a}`), `#blue_skies:gems/pyrope`)
		e.smithing(`blue_skies:shadow_${a}`, Item.of(`minecraft:golden_${a}`), `#forge:ingots/shadow_steel`)
		e.smithing(`blue_skies:horizonite_${a}`, Item.of(`minecraft:diamond_${a}`), `#blue_skies:ingots/horizonite`)
		e.smithing(`blue_skies:charoite_${a}`, Item.of(`minecraft:diamond_${a}`), `#blue_skies:gems/charoite`)
		e.smithing(`blue_skies:aquite_${a}`, Item.of(`minecraft:diamond_${a}`), `#blue_skies:gems/aquite`)
		e.smithing(`blue_skies:diopside_${a}`, Item.of(`minecraft:netherite_${a}`), `#blue_skies:gems/diopside`)
		// Forbidden Arcanus
		e.smithing(`forbidden_arcanus:deorum_${a}`, Item.of(`minecraft:netherite_${a}`), `#forge:ingots/arcane_gold`)
		// Gobber 2
		gobberTypes.forEach(t => {
			e.smithing(`gobber2:gobber2_${a}${t}`, Item.of(`minecraft:netherite_${a}`), `gobber2:gobber2_ingot${t}`)
		})
		// Immersive Engineering
		e.smithing(`immersiveengineering:armor_steel_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : (a == 'helmet' ? 'head' : 'feet'))}`, Item.of(`minecraft:iron_${a}`), `#forge:plates/steel`)
		e.smithing(`immersiveengineering:armor_faraday_${a == `chestplate` ? `chest` : (a == `leggings` ? `legs` : (a == 'helmet' ? 'head' : 'feet'))}`, Item.of(`minecraft:leather_${a}`), `#forge:plates/aluminum`)
		// Minecraft
		e.smithing(`minecraft:iron_${a}`, Item.of(`minecraft:leather_${a}`), `#forge:ingots/iron`)
		e.smithing(`minecraft:golden_${a}`, Item.of(`minecraft:iron_${a}`), `#forge:ingots/gold`)
		e.smithing(`minecraft:diamond_${a}`, Item.of(`minecraft:golden_${a}`), `#forge:gems/diamond`)
		// Mystical Agriculture
		e.smithing(`mysticalagriculture:inferium_${a}`, Item.of(`minecraft:diamond_${a}`), `mysticalagriculture:inferium_gemstone`)
		e.smithing(`mysticalagriculture:prudentium_${a}`, Item.of(`mysticalagriculture:inferium_${a}`), `mysticalagriculture:prudentium_gemstone`)
		e.smithing(`mysticalagriculture:tertium_${a}`, Item.of(`mysticalagriculture:prudentium_${a}`), `mysticalagriculture:tertium_gemstone`)
		e.smithing(`mysticalagriculture:imperium_${a}`, Item.of(`mysticalagriculture:tertium_${a}`), `mysticalagriculture:imperium_gemstone`)
		e.smithing(`mysticalagriculture:supremium_${a}`, Item.of(`mysticalagriculture:imperium_${a}`), `mysticalagriculture:supremium_gemstone`)
		// Nature`s Aura
		e.smithing(`naturesaura:infused_iron_${a == `chestplate` ? `chest` : (a == `leggings` ? `pants` : (a == 'boots' ? 'shoes' : a))}`, Item.of(`minecraft:iron_${a}`), `naturesaura:infused_iron`)
		e.smithing(`naturesaura:sky_${a == `chestplate` ? `chest` : (a == `leggings` ? `pants` : (a == 'boots' ? 'shoes' : a))}`, Item.of(`minecraft:diamond_${a}`), `naturesaura:sky_ingot`)
		// Pneumaticcraft
		e.smithing(`pneumaticcraft:compressed_iron_${a}`, Item.of(`minecraft:iron_${a}`), `kubejs:compressed_iron_plate`)
		// PSI
		//e.smithing(`psi:psimetal_exosuit_${a}`, Item.of(`minecraft:diamond_${a}`), `#forge:gems/psigem`)
		// Twilight Forest
		e.smithing(`twilightforest:ironwood_${a}`, Item.of(`minecraft:iron_${a}`), `#forge:ingots/ironwood`)
		e.smithing(`twilightforest:steeleaf_${a}`, Item.of(`minecraft:diamond_${a}`), `#forge:ingots/steeleaf`)
		e.smithing(`twilightforest:fiery_${a}`, Item.of(`minecraft:netherite_${a}`), `#forge:ingots/fiery`)
		e.smithing(`twilightforest:knightmetal_${a}`, Item.of(`minecraft:netherite_${a}`), `#forge:ingots/knightmetal`)
		// Undergrden
		e.smithing(`undergarden:cloggrum_${a}`, Item.of(`minecraft:iron_${a}`), `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:froststeel_${a}`, Item.of(`minecraft:iron_${a}`), `#forge:ingots/froststeel`)
		e.smithing(`undergarden:utherium_${a}`, Item.of(`minecraft:netherite_${a}`), `#forge:ingots/utherium`)
	})

	// Undergrden
		e.smithing(`undergarden:cloggrum_chestplate`, Item.of(`minecraft:iron_chestplate`), `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:froststeel_chestplate`, Item.of(`minecraft:iron_chestplate`), `#forge:ingots/froststeel`)
		e.smithing(`undergarden:utherium_chestplate`, Item.of(`minecraft:netherite_chestplate`), `#forge:ingots/utherium`)

		e.smithing(`undergarden:cloggrum_helmet`, Item.of(`minecraft:iron_helmet`), `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:froststeel_helmet`, Item.of(`minecraft:iron_helmet`), `#forge:ingots/froststeel`)
		e.smithing(`undergarden:utherium_helmet`, Item.of(`minecraft:netherite_helmet`), `#forge:ingots/utherium`)

		e.smithing(`undergarden:cloggrum_leggings`, Item.of(`minecraft:iron_leggings`), `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:froststeel_leggings`, Item.of(`minecraft:iron_leggings`), `#forge:ingots/froststeel`)
		e.smithing(`undergarden:utherium_leggings`, Item.of(`minecraft:netherite_leggings`), `#forge:ingots/utherium`)

		e.smithing(`undergarden:cloggrum_boots`, Item.of(`minecraft:iron_boots`), `#forge:ingots/cloggrum`)
		e.smithing(`undergarden:froststeel_boots`, Item.of(`minecraft:iron_boots`), `#forge:ingots/froststeel`)
		e.smithing(`undergarden:utherium_boots`, Item.of(`minecraft:netherite_boots`), `#forge:ingots/utherium`)

})
