onEvent('recipes', event => {
	let temp
	let gobberTypes = ['', '_nether', '_end']

	function elvenTradeRecipe(inputs, output) {
		inputs = inputs.map(item => { return Item.of(item).toJson() })
		event.custom({
			type: 'botania:elven_trade',
			ingredients: inputs,
			output: Item.of(output).toResultJson()
		})
	}

	// Aquaculture
	elvenTradeRecipe(['#forge:string', '#forge:ingots/neptunium'], 'aquaculture:neptunium_bow')
	//Atum
	elvenTradeRecipe(['minecraft:stone_hoe', 'atum:limestone_cracked'], 'atum:limestone_hoe')
	elvenTradeRecipe(['minecraft:stone_sword', 'atum:limestone_cracked'], 'atum:limestone_sword')
	elvenTradeRecipe(['minecraft:stone_sword', '#forge:ingots/khnumite'], 'atum:stoneguard_sword')
	elvenTradeRecipe(['minecraft:stone_sword', '#forge:ingots/khnumite'], 'atum:stoneguard_greatsword')
	// Botania
	elvenTradeRecipe(['minecraft:shears', '#botania:livingwood'], 'aiotbotania:livingwood_shears')
	elvenTradeRecipe(['minecraft:shears', '#botania:livingrock'], 'aiotbotania:livingrock_shears')
	elvenTradeRecipe(['minecraft:netherite_hoe', '#forge:ingots/terrasteel'], 'aiotbotania:terra_hoe')
	elvenTradeRecipe(['minecraft:netherite_shovel', '#forge:ingots/terrasteel'], 'aiotbotania:terra_shovel')
	elvenTradeRecipe(['minecraft:netherite_sword', '#forge:ingots/terrasteel'], 'botania:terra_sword')
	elvenTradeRecipe(['minecraft:shield', '#forge:ingots/iron'], 'bettershields:iron_shield')
	elvenTradeRecipe(['bettershields:iron_shield', '#forge:ingots/gold'], 'bettershields:gold_shield')
	elvenTradeRecipe(['bettershields:gold_shield', '#forge:gems/diamond'], 'bettershields:diamond_shield')
	elvenTradeRecipe(['botania:mana_string', 'botania:livingwood_twig'], 'botania:livingwood_bow')
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
	elvenTradeRecipe(['minecraft:wooden_pickaxe', '#forge:ingots/manasteel'], 'botania:glass_pickaxe')
	// Druidcraft
	elvenTradeRecipe(['#minecraft:planks', '#forge:bones'], 'druidcraft:bone_shield')
	elvenTradeRecipe(['#forge:nuggets/iron', 'druidcraft:chitin'], 'druidcraft:chitin_shield')
	elvenTradeRecipe(['#forge:nuggets/iron', '#forge:gems/moonstone'], 'druidcraft:moonstone_shield')
	// Ice and Fire
	elvenTradeRecipe(['botania:mana_string', '#forge:bones/wither'], 'iceandfire:dragonbone_bow')
	// Forbidden Arcanus
	elvenTradeRecipe(['minecraft:diamond_pickaxe', 'forbidden_arcanus:golden_feather'], 'forbidden_arcanus:slimec_pickaxe')
	elvenTradeRecipe(['minecraft:diamond_pickaxe', 'forbidden_arcanus:obsidian_skull'], 'forbidden_arcanus:infernum_pickaxe')
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
	// Mekanism
	elvenTradeRecipe(['minecraft:bow', 'mekanism:energy_tablet'], 'mekanism:electric_bow')

	// TOOLS
	temp = ['pickaxe', 'sword', 'axe', 'shovel', 'hoe']
	temp.forEach(t => {
		// Applied Energistics 2
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:gems/certus_quartz'], `appliedenergistics2:certus_quartz_${t}`)
		elvenTradeRecipe([`minecraft:iron_${t}`, '#forge:gems/quartz'], `appliedenergistics2:nether_quartz_${t}`)
		// Aquaculture
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:ingots/neptunium'], `aquaculture:neptunium_${t}`)
		// AIOT
		elvenTradeRecipe([`minecraft:wooden_${t}`, '#botania:livingwood'], `aiotbotania:livingwood_${t}`)
		elvenTradeRecipe([`minecraft:stone_${t}`, '#botania:livingrock'], `aiotbotania:livingrock_${t}`)
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
		// Minecraft
		elvenTradeRecipe([`minecraft:wooden_${t}`, '#forge:stone'], `minecraft:stone_${t}`)
		elvenTradeRecipe([`minecraft:stone_${t}`, '#forge:ingots/iron'], `minecraft:iron_${t}`)
	})

	// ARMOR
	temp = ['chestplate', 'helmet', 'leggings', 'boots']
	temp.forEach(t => {
		// Aquaculture
		elvenTradeRecipe([`minecraft:netherite_${t}`, '#forge:ingots/neptunium'], `aquaculture:neptunium_${t}`)
		// Atum
		elvenTradeRecipe([`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:iron_${t}`], `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_iron`)
		elvenTradeRecipe([`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:golden_${t}`], `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_gold`)
		elvenTradeRecipe([`atum:wanderer_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}`, `minecraft:diamond_${t}`], `atum:desert_${t == 'chestplate' ? 'chest' : (t == 'leggings' ? 'legs' : t)}_diamond`)
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
	})
})
