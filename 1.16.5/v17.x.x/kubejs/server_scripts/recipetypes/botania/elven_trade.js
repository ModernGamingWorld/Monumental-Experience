onEvent('recipes', event => {
	let tools = ['pickaxe', 'sword', 'axe', 'shovel', 'hoe']
	let armors = ['chestplate', 'helmet', 'leggings', 'boots']
	let gobberTypes = ['', '_nether', '_end']
	let blueSkiesPlankTypes = [`cherry`, `maple`, `frostbright`, `dusk`, `starlit`, `lunar`, `bluebright`]

	function elvenTradeRecipe(inputs, output) {
		inputs = inputs.map(item => { return Item.of(item).toJson() })
		event.custom({
			type: 'botania:elven_trade',
			ingredients: inputs,
			output: Item.of(output).toResultJson()
		})
	}

	// AIOT
	elvenTradeRecipe([`minecraft:netherite_hoe`, `#forge:ingots/terrasteel`], `aiotbotania:terra_hoe`)
	elvenTradeRecipe(['minecraft:netherite_shovel', '#forge:ingots/terrasteel'], 'aiotbotania:terra_shovel')
	elvenTradeRecipe(['minecraft:shears', '#botania:livingwood'], 'aiotbotania:livingwood_shears')
	elvenTradeRecipe(['minecraft:shears', '#botania:livingrock'], 'aiotbotania:livingrock_shears')
	// Aquaculture
	elvenTradeRecipe(['#forge:string', '#forge:ingots/neptunium'], 'aquaculture:neptunium_bow')
	// Atum
	elvenTradeRecipe(['minecraft:stone_sword', '#forge:ingots/khnumite'], 'atum:stoneguard_sword')
	elvenTradeRecipe(['minecraft:stone_sword', '#forge:ingots/khnumite'], 'atum:stoneguard_greatsword')
	// Better Shields
	elvenTradeRecipe(['minecraft:shield', '#forge:ingots/iron'], 'bettershields:iron_shield')
	elvenTradeRecipe(['bettershields:iron_shield', '#forge:ingots/gold'], 'bettershields:gold_shield')
	elvenTradeRecipe(['bettershields:gold_shield', '#forge:gems/diamond'], 'bettershields:diamond_shield')
	// Botania
	elvenTradeRecipe([`botania:mana_string`, `botania:livingwood_twig`], `botania:livingwood_bow`)
	elvenTradeRecipe(['botania:mana_tablet', '#forge:ingots/manasteel'], 'botania:mana_ring')
	elvenTradeRecipe(['botania:rune_mana', '#forge:ingots/manasteel'], 'botania:aura_ring')
	elvenTradeRecipe(['botania:lens_magnet', '#forge:ingots/manasteel'], 'botania:magnet_ring')
	elvenTradeRecipe(['minecraft:heart_of_the_sea', '#forge:ingots/manasteel'], 'botania:water_ring')
	elvenTradeRecipe(['botania:rune_air', '#forge:ingots/manasteel'], 'botania:dodge_ring')
	elvenTradeRecipe(['botania:rune_earth', '#forge:ingots/manasteel'], 'botania:mining_ring')
	elvenTradeRecipe(['botania:pixie_dust', '#forge:ingots/elementium'], 'botania:pixie_ring')
	elvenTradeRecipe(['botania:rune_pride', '#forge:ingots/elementium'], 'botania:reach_ring')
	elvenTradeRecipe(['#forge:storage_blocks/clay', '#forge:ingots/manasteel'], 'botania:swap_ring')
	elvenTradeRecipe(['#forge:ingots/terrasteel', 'botania:aura_ring'], 'botania:aura_ring_greater')
	elvenTradeRecipe(['#forge:ingots/terrasteel', 'botania:mana_ring'], 'botania:mana_ring_greater')
	elvenTradeRecipe([`botania:magnet_ring`, `#forge:ingots/terrasteel`], `botania:magnet_ring_greater`)
	elvenTradeRecipe(['minecraft:netherite_sword', '#forge:ingots/terrasteel'], 'botania:terra_sword')
	elvenTradeRecipe(['minecraft:wooden_pickaxe', '#forge:ingots/manasteel'], 'botania:glass_pickaxe')
	// Druidcraft
	elvenTradeRecipe(['#minecraft:planks', '#forge:bones'], 'druidcraft:bone_shield')
	elvenTradeRecipe(['#forge:nuggets/iron', 'druidcraft:chitin'], 'druidcraft:chitin_shield')
	elvenTradeRecipe(['#forge:nuggets/iron', '#forge:gems/moonstone'], 'druidcraft:moonstone_shield')
	// Explorer`s Compass
	elvenTradeRecipe([`minecraft:compass`, `minecraft:cracked_stone_bricks`], `explorerscompass:explorerscompass`)
	// Forbidden Arcanus
	elvenTradeRecipe(['minecraft:diamond_pickaxe', 'forbidden_arcanus:golden_feather'], 'forbidden_arcanus:slimec_pickaxe')
	elvenTradeRecipe(['minecraft:diamond_pickaxe', 'forbidden_arcanus:obsidian_skull'], 'forbidden_arcanus:infernum_pickaxe')
	elvenTradeRecipe([`minecraft:diamond_helmet`, `#forge:ingots/obsidian`], `forbidden_arcanus:obsidian_helmet`)
	// Gobber 2
	gobberTypes.forEach(type => {
		elvenTradeRecipe(['botania:mana_string', `gobber2:gobber2_rod${type}`], `gobber2:gobber2_bow${type}`)
		elvenTradeRecipe(['minecraft:netherite_shovel', `gobber2:gobber2_rod${type}`], `gobber2:gobber2_excavator${type}`)
		elvenTradeRecipe(['minecraft:netherite_axe', `gobber2:gobber2_block${type}`], `gobber2:gobber2_tree_axe${type}`)
	})
	elvenTradeRecipe(['gobber2:gobber2_paxel_end', 'gobber2:gobber2_staff_stars'], 'gobber2:gobber2_paxel_stars')
	elvenTradeRecipe(['gobber2:gobber2_sword_end', 'gobber2:gobber2_staff_sniper'], 'gobber2:gobber2_sword_sniper')
	elvenTradeRecipe(['gobber2:gobber2_sword_end', 'gobber2:gobber2_ring_traveler'], 'gobber2:gobber2_sword_traveler')
	elvenTradeRecipe(['gobber2:gobber2_ring_nether', '#forge:magma'], 'gobber2:gobber2_ring_phoenix')
	// Ice and Fire
	elvenTradeRecipe([`iceandfire:dragonbone_sword`, `iceandfire:lightning_dragon_blood`], `iceandfire:dragonbone_sword_lightning`)
	elvenTradeRecipe([`iceandfire:dragonbone_sword`, `iceandfire:ice_dragon_blood`], `iceandfire:dragonbone_sword_ice`)
	elvenTradeRecipe([`iceandfire:dragonbone_sword`, `iceandfire:fire_dragon_blood`], `iceandfire:dragonbone_sword_fire`)
	elvenTradeRecipe([`minecraft:netherite_sword`, `iceandfire:hippogryph_talon`], `iceandfire:hippogryph_sword`)
	elvenTradeRecipe(['botania:mana_string', '#forge:bones/wither'], 'iceandfire:dragonbone_bow')
	// Immersive Engineering
	elvenTradeRecipe([`minecraft:shield`, `#forge:treated_wood`], `immersiveengineering:shield`)
	// Mekanism
	elvenTradeRecipe(['minecraft:bow', 'mekanism:energy_tablet'], 'mekanism:electric_bow')
	// Minecraft
	elvenTradeRecipe([`#minecraft:planks`, `#forge:ingots/iron`], `minecraft:shield`)
	elvenTradeRecipe([`#forge:plates/iron`, `extendedcrafting:redstone_ingot`], `minecraft:compass`)
	elvenTradeRecipe([`#forge:rods/wooden`, `#forge:string`], `minecraft:bow`)
	elvenTradeRecipe([`minecraft:tripwire_hook`, `#forge:ingots/iron`], `minecraft:crossbow`)
	// Mystical Agriculture
	elvenTradeRecipe([`#forge:furnace`, `mysticalagriculture:inferium_block`], `mysticalagriculture:inferium_furnace`)
	elvenTradeRecipe([`mysticalagriculture:inferium_furnace`, `mysticalagriculture:prudentium_block`], `mysticalagriculture:prudentium_furnace`)
	elvenTradeRecipe([`mysticalagriculture:prudentium_furnace`, `mysticalagriculture:tertium_block`], `mysticalagriculture:tertium_furnace`)
	elvenTradeRecipe([`mysticalagriculture:tertium_furnace`, `mysticalagriculture:imperium_block`], `mysticalagriculture:imperium_furnace`)
	elvenTradeRecipe([`mysticalagriculture:imperium_furnace`, `mysticalagriculture:supremium_block`], `mysticalagriculture:supremium_furnace`)
	// Modular Routers
	elvenTradeRecipe([`modularrouters:blank_module`, `#forge:tools/pickaxe`], `modularrouters:breaker_module`)
	elvenTradeRecipe([`modularrouters:breaker_module`, `modularrouters:blank_module`], `modularrouters:extruder_module_1`)
	// Nature`s Compass
	elvenTradeRecipe([`minecraft:compass`, `#minecraft:saplings`], `naturescompass:naturescompass`)
	// Occultism
	elvenTradeRecipe([`minecraft:diamond_pickaxe`, `#forge:ingots/iesnium`], `occultism:iesnium_pickaxe`)
	// PSI
	elvenTradeRecipe([`#forge:string`, `#forge:gems/psigem`], `psipherals:psimetal_bow`)
	// Twilight Forest
	elvenTradeRecipe([`#twilightforest:towerwood`, `#forge:ingots/knightmetal`], `twilightforest:knightmetal_shield`)
	elvenTradeRecipe([`minecraft:diamond_sword`, `#forge:ingots/knightmetal`], `twilightforest:knightmetal_sword`)
	elvenTradeRecipe([`minecraft:netherite_axe`, `#forge:ingots/knightmetal`], `twilightforest:knightmetal_axe`)
	elvenTradeRecipe([`minecraft:diamond_pickaxe`, `#forge:ingots/knightmetal`], `twilightforest:knightmetal_pickaxe`)
	elvenTradeRecipe([`minecraft:netherite_pickaxe`, `#forge:ingots/fiery`], `twilightforest:fiery_pickaxe`)
	elvenTradeRecipe([`minecraft:netherite_sword`, `#forge:ingots/fiery`], `twilightforest:fiery_sword`)
	// Undergrden
	elvenTradeRecipe([`#minecraft:planks`, `#forge:ingots/cloggrum`], `undergarden:cloggrum_shield`)
	elvenTradeRecipe([`minecraft:iron_chestplate`, `undergarden:masticator_scales`], `undergarden:masticated_chestplate`)

	// TOOLS
	tools.forEach(t => {
		// AIOT
		elvenTradeRecipe([`minecraft:wooden_${t}`, '#botania:livingwood'], `aiotbotania:livingwood_${t}`)
		elvenTradeRecipe([`minecraft:stone_${t}`, '#botania:livingrock'], `aiotbotania:livingrock_${t}`)
		// Applied Energistics 2
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:gems/certus_quartz'], `appliedenergistics2:certus_quartz_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:gems/quartz'], `appliedenergistics2:nether_quartz_${t}`)
		// Aquaculture
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:ingots/neptunium'], `aquaculture:neptunium_${t}`)
		// Atum
		elvenTradeRecipe([`minecraft:stone_${t}`, `atum:limestone_cracked`], `atum:limestone_${t}`)
		// Blue Skies
		blueSkiesPlankTypes.forEach(b => {
			elvenTradeRecipe([`minecraft:wooden_${t}`, `blue_skies:${b}_planks`], `blue_skies:${b}_${t}`)
		})
		elvenTradeRecipe([`minecraft:stone_${t}`, `blue_skies:lunar_cobblestone`], `blue_skies:lunar_stone_${t}`)
		elvenTradeRecipe([`minecraft:stone_${t}`, `blue_skies:turquoise_cobblestone`], `blue_skies:turquoise_stone_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `#blue_skies:gems/pyrope`], `blue_skies:pyrope_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#blue_skies:ingots/horizonite`], `blue_skies:horizonite_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#blue_skies:gems/charoite`], `blue_skies:charoite_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#blue_skies:gems/aquite`], `blue_skies:aquite_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#blue_skies:gems/diopside`], `blue_skies:diopside_${t}`)
		// Create Additions
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#forge:ingots/brass`], `create_stuff_additions:brass_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/zinc`], `create_stuff_additions:zinc_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/copper`], `create_stuff_additions:copper_${t}`)
		// Botania
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:ingots/manasteel'], `botania:manasteel_${t == 'pickaxe' ? 'pick' : t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:ingots/elementium'], `botania:elementium_${t}`)
		// Cyclic
		elvenTradeRecipe([`minecraft:stone_${t}`, '#forge:sandstone'], `cyclic:sandstone_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:bricks/nether'], `cyclic:netherbrick_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, '#forge:gems/emerald'], `cyclic:emerald_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:gems/diamond'], `cyclic:crystal_${t}`)
		// Druidcraft
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:gems/moonstone'], `druidcraft:moonstone_${t}`)
		elvenTradeRecipe([`minecraft:stone_${t}`, '#forge:bones'], `druidcraft:bone_${t}`)
		// Immersive Engineering
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:ingots/steel'], `immersiveengineering:${t}_steel`)
		// Forbidden Arcanus
		elvenTradeRecipe([`minecraft:netherite_${t}`, 'forbidden_arcanus:edelwood_stick'], `forbidden_arcanus:reinforced_arcane_golden_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:ingots/arcane_gold'], `forbidden_arcanus:arcane_golden_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:dragon_scales'], `forbidden_arcanus:draco_arcanus_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, '#forge:ingots/obsidian'], `forbidden_arcanus:obsidian_${t}`)
		// Gobber 2
		gobberTypes.forEach(type => elvenTradeRecipe([`minecraft:netherite_${t}`, `gobber2:gobber2_ingot${type}`], `gobber2:gobber2_${t}${type}`))
		// Ice and Fire
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_lightning`], `iceandfire:dragonsteel_lightning_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_ice`], `iceandfire:dragonsteel_ice_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_fire`], `iceandfire:dragonsteel_fire_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `iceandfire:myrmex_jungle_chitin`], `iceandfire:myrmex_jungle_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `iceandfire:myrmex_desert_chitin`], `iceandfire:myrmex_desert_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:bones/dragon`], `iceandfire:dragonbone_${t}`)
		// Minecraft
		elvenTradeRecipe([`minecraft:wooden_${t}`, '#forge:stone'], `minecraft:stone_${t}`)
		elvenTradeRecipe([`minecraft:stone_${t}`, '#forge:ingots/iron'], `minecraft:iron_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/gold`], `minecraft:golden_${t}`)
		elvenTradeRecipe([`minecraft:golden_${t}`, `#forge:gems/diamond`], `minecraft:diamond_${t}`)
		// Mystical Agriculture
		elvenTradeRecipe([`minecraft:diamond_${t}`, `mysticalagriculture:inferium_gemstone`], `mysticalagriculture:inferium_${t}`)
		elvenTradeRecipe([`mysticalagriculture:inferium_${t}`, `mysticalagriculture:prudentium_gemstone`], `mysticalagriculture:prudentium_${t}`)
		elvenTradeRecipe([`mysticalagriculture:prudentium_${t}`, `mysticalagriculture:tertium_gemstone`], `mysticalagriculture:tertium_${t}`)
		elvenTradeRecipe([`mysticalagriculture:tertium_${t}`, `mysticalagriculture:imperium_gemstone`], `mysticalagriculture:imperium_${t}`)
		elvenTradeRecipe([`mysticalagriculture:imperium_${t}`, `mysticalagriculture:supremium_gemstone`], `mysticalagriculture:supremium_${t}`)
		// Nature`s Aura
		elvenTradeRecipe([`minecraft:iron_${t}`, `naturesaura:infused_iron`], `naturesaura:infused_iron_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `naturesaura:sky_ingot`], `naturesaura:sky_${t}`)
		// PSI
		if (t != 'hoe') elvenTradeRecipe([`minecraft:diamond_${t}`, `#forge:gems/psigem`], `psi:psimetal_${t}`)
		// Twilight Forest
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/ironwood`], `twilightforest:ironwood_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#forge:ingots/steeleaf`], `twilightforest:steeleaf_${t}`)
		// Undergrden
		elvenTradeRecipe([`minecraft:stone_${t}`, `#forge:ingots/cloggrum`], `undergarden:cloggrum_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/froststeel`], `undergarden:froststeel_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#forge:ingots/utherium`], `undergarden:utheric_${t}`)
	})

	// ARMOR
	armors.forEach(t => {
		// Aquaculture
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:ingots/neptunium'], `aquaculture:neptunium_${t}`)
		// Atum
		elvenTradeRecipe([`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:iron_${t}`], `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_iron`)
		elvenTradeRecipe([`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:golden_${t}`], `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_gold`)
		elvenTradeRecipe([`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:diamond_${t}`], `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_diamond`)
		// Blue Skies
		elvenTradeRecipe([`minecraft:iron_${t}`, `#blue_skies:gems/pyrope`], `blue_skies:pyrope_${t}`)
		elvenTradeRecipe([`minecraft:golden_${t}`, `#forge:ingots/shadow_steel`], `blue_skies:shadow_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#blue_skies:ingots/horizonite`], `blue_skies:horizonite_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#blue_skies:gems/charoite`], `blue_skies:charoite_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#blue_skies:gems/aquite`], `blue_skies:aquite_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#blue_skies:gems/diopside`], `blue_skies:diopside_${t}`)
		// Botania
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:ingots/manasteel'], `botania:manasteel_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:ingots/elementium'], `botania:elementium_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:ingots/terrasteel'], `botania:terrasteel_${t}`)
		// Cyclic
		elvenTradeRecipe([`minecraft:diamond_${t}`, '#forge:gems/emerald'], `cyclic:emerald_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:gems/diamond'], `cyclic:crystal_${t}`)
		// Druidcraft
		elvenTradeRecipe([`minecraft:chainmail_${t}`, '#forge:bones'], `druidcraft:bone_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, 'druidcraft:chitin'], `druidcraft:chitin_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:gems/moonstone'], `druidcraft:moonstone_${t}`)
		// Forbidden Arcanus
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:ingots/arcane_gold'], `forbidden_arcanus:arcane_gold_${t}`)
		// Gobber 2
		gobberTypes.forEach(type => elvenTradeRecipe([`minecraft:netherite_${t}`, `gobber2:gobber2_ingot${type}`], `gobber2:gobber2_${t}${type}`))
		// Immersive Engineering
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:plates/steel`], `immersiveengineering:armor_steel_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : (t == 'helmet' ? 'head' : 'feet'))}`)
		elvenTradeRecipe([`minecraft:leather_${t}`, `#forge:plates/aluminum`], `immersiveengineering:armor_faraday_${t == `chestplate` ? `chest` : (t == `leggings` ? `legs` : (t == 'helmet' ? 'head' : 'feet'))}`)
		// Ice and Fire
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_lightning`], `iceandfire:dragonsteel_lightning_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_ice`], `iceandfire:dragonsteel_ice_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/dragonsteel_fire`], `iceandfire:dragonsteel_fire_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `iceandfire:myrmex_jungle_chitin`], `iceandfire:myrmex_jungle_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `iceandfire:myrmex_desert_chitin`], `iceandfire:myrmex_desert_${t}`)
		// Minecraft
		elvenTradeRecipe([`minecraft:leather_${t}`, `#forge:ingots/iron`], `minecraft:iron_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/gold`], `minecraft:golden_${t}`)
		elvenTradeRecipe([`minecraft:golden_${t}`, `#forge:gems/diamond`], `minecraft:diamond_${t}`)
		// Mystical Agriculture
		elvenTradeRecipe([`minecraft:diamond_${t}`, `mysticalagriculture:inferium_gemstone`], `mysticalagriculture:inferium_${t}`)
		elvenTradeRecipe([`mysticalagriculture:inferium_${t}`, `mysticalagriculture:prudentium_gemstone`], `mysticalagriculture:prudentium_${t}`)
		elvenTradeRecipe([`mysticalagriculture:prudentium_${t}`, `mysticalagriculture:tertium_gemstone`], `mysticalagriculture:tertium_${t}`)
		elvenTradeRecipe([`mysticalagriculture:tertium_${t}`, `mysticalagriculture:imperium_gemstone`], `mysticalagriculture:imperium_${t}`)
		elvenTradeRecipe([`mysticalagriculture:imperium_${t}`, `mysticalagriculture:supremium_gemstone`], `mysticalagriculture:supremium_${t}`)
		// Nature`s Aura
		elvenTradeRecipe([`minecraft:iron_${t}`, `naturesaura:infused_iron`], `naturesaura:infused_iron_${t == `chestplate` ? `chest` : (t == `leggings` ? `pants` : (t == 'boots' ? 'shoes' : t))}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `naturesaura:sky_ingot`], `naturesaura:sky_${t == `chestplate` ? `chest` : (t == `leggings` ? `pants` : (t == 'boots' ? 'shoes' : t))}`)
		// Pneumaticcraft
		elvenTradeRecipe([`minecraft:iron_${t}`, `kubejs:compressed_iron_plate`], `pneumaticcraft:compressed_iron_${t}`)
		// PSI
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#forge:gems/psigem`], `psi:psimetal_exosuit_${t}`)
		// Twilight Forest
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/ironwood`], `twilightforest:ironwood_${t}`)
		elvenTradeRecipe([`minecraft:diamond_${t}`, `#forge:ingots/steeleaf`], `twilightforest:steeleaf_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/fiery`], `twilightforest:fiery_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/knightmetal`], `twilightforest:knightmetal_${t}`)
		// Undergrden
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/cloggrum`], `undergarden:cloggrum_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, `#forge:ingots/froststeel`], `undergarden:froststeel_${t}`)
		elvenTradeRecipe([`minecraft:netherite_${t}`, `#forge:ingots/utherium`], `undergarden:utheric_${t}`)
	})
})
