onEvent('recipes', event => {
	const recipes = [
		//Atum
		{
			inputs: [{ item: 'minecraft:stone_hoe' }, { item: 'atum:limestone_cracked' }],
			output: { item: 'atum:limestone_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_sword' }, { item: 'atum:limestone_cracked' }],
			output: { item: 'atum:limestone_sword' }
		},
		{
			inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:ingots/khnumite' }],
			output: { item: 'atum:stoneguard_sword' }
		},
		{
			inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:ingots/khnumite' }],
			output: { item: 'atum:stoneguard_greatsword' }
		},
		{
			inputs: [{ item: 'atum:wanderer_chest' }, { item: 'minecraft:iron_chestplate' }],
			output: { item: 'atum:desert_chest_iron' }
		},
		{
			inputs: [{ item: 'atum:wanderer_chest' }, { item: 'minecraft:golden_chestplate' }],
			output: { item: 'atum:desert_chest_gold' }
		},
		{
			inputs: [{ item: 'atum:wanderer_chest' }, { item: 'minecraft:diamond_chestplate' }],
			output: { item: 'atum:desert_chest_diamond' }
		},
		{
			inputs: [{ item: 'atum:wanderer_helmet' }, { item: 'minecraft:iron_helmet' }],
			output: { item: 'atum:desert_helmet_iron' }
		},
		{
			inputs: [{ item: 'atum:wanderer_helmet' }, { item: 'minecraft:golden_helmet' }],
			output: { item: 'atum:desert_helmet_gold' }
		},
		{
			inputs: [{ item: 'atum:wanderer_helmet' }, { item: 'minecraft:diamond_helmet' }],
			output: { item: 'atum:desert_helmet_diamond' }
		},
		{
			inputs: [{ item: 'atum:wanderer_legs' }, { item: 'minecraft:iron_leggings' }],
			output: { item: 'atum:desert_legs_iron' }
		},
		{
			inputs: [{ item: 'atum:wanderer_legs' }, { item: 'minecraft:golden_leggings' }],
			output: { item: 'atum:desert_legs_gold' }
		},
		{
			inputs: [{ item: 'atum:wanderer_legs' }, { item: 'minecraft:diamond_leggings' }],
			output: { item: 'atum:desert_legs_diamond' }
		},
		{
			inputs: [{ item: 'atum:wanderer_boots' }, { item: 'minecraft:iron_boots' }],
			output: { item: 'atum:desert_boots_iron' }
		},
		{
			inputs: [{ item: 'atum:wanderer_boots' }, { item: 'minecraft:golden_boots' }],
			output: { item: 'atum:desert_boots_gold' }
		},
		{
			inputs: [{ item: 'atum:wanderer_boots' }, { item: 'minecraft:diamond_boots' }],
			output: { item: 'atum:desert_boots_iron' }
		},
		{
			inputs: [{ item: 'atum:wanderer_boots' }, { item: 'minecraft:diamond_boots' }],
			output: { item: 'atum:desert_boots_iron' }
		},
		//Aquaculture
		{
			inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_sword' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_axe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_leggings' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_boots' }
		},
		{
			inputs: [{ tag: 'forge:string' }, { tag: 'forge:ingots/neptunium' }],
			output: { item: 'aquaculture:neptunium_bow' }
		},
		//Aiot Botania
		{
			inputs: [{ item: 'minecraft:wooden_axe' }, { tag: 'botania:livingwood' }],
			output: { item: 'aiotbotania:livingwood_axe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'botania:livingrock' }],
			output: { item: 'aiotbotania:livingrock_axe' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_shovel' }, { tag: 'botania:livingwood' }],
			output: { item: 'aiotbotania:livingwood_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'botania:livingrock' }],
			output: { item: 'aiotbotania:livingrock_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_hoe' }, { tag: 'botania:livingwood' }],
			output: { item: 'aiotbotania:livingwood_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'botania:livingrock' }],
			output: { item: 'aiotbotania:livingrock_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_sword' }, { tag: 'botania:livingwood' }],
			output: { item: 'aiotbotania:livingwood_sword' }
		},
		{
			inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'botania:livingrock' }],
			output: { item: 'aiotbotania:livingrock_sword' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_pickaxe' }, { tag: 'botania:livingwood' }],
			output: { item: 'aiotbotania:livingwood_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'botania:livingrock' }],
			output: { item: 'aiotbotania:livingrock_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:shears' }, { tag: 'botania:livingwood' }],
			output: { item: 'aiotbotania:livingrock_shears' }
		},
		{
			inputs: [{ item: 'minecraft:shears' }, { tag: 'botania:livingrock' }],
			output: { item: 'aiotbotania:livingrock_shears' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:ingots/terrasteel' }],
			output: { item: 'aiotbotania:terra_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/terrasteel' }],
			output: { item: 'aiotbotania:terra_shovel' }
		},
		//Applied Energistics2
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:gems/certus_quartz' }],
			output: { item: 'appliedenergistics2:certus_quartz_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:gems/certus_quartz' }],
			output: { item: 'appliedenergistics2:certus_quartz_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:gems/certus_quartz' }],
			output: { item: 'appliedenergistics2:certus_quartz_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:gems/certus_quartz' }],
			output: { item: 'appliedenergistics2:certus_quartz_sword' }
		},
		{
			inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:gems/certus_quartz' }],
			output: { item: 'appliedenergistics2:certus_quartz_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:gems/quartz' }],
			output: { item: 'appliedenergistics2:nether_quartz_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:gems/quartz' }],
			output: { item: 'appliedenergistics2:nether_quartz_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:gems/quartz' }],
			output: { item: 'appliedenergistics2:nether_quartz_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:gems/quartz' }],
			output: { item: 'appliedenergistics2:nether_quartz_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:gems/quartz' }],
			output: { item: 'appliedenergistics2:nether_quartz_sword' }
		},
		//Botania
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/terrasteel' }],
			output: { item: 'botania:terra_sword' }
		},
		//Better Shields
		{
			inputs: [{ item: 'minecraft:shield' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'bettershields:iron_shield' }
		},
		{
			inputs: [{ item: 'bettershields:iron_shield' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'bettershields:gold_shield' }
		},
		{
			inputs: [{ item: 'bettershields:gold_shield' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'bettershields:diamond_shield' }
		},
		// Botania
		{
			inputs: [{ item: 'botania:mana_string' }, { item: 'botania:livingwood_twig' }],
			output: { item: 'botania:livingwood_bow' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { tag: 'forge:ingots/terrasteel' }],
			output: { item: 'botania:terrasteel_boots' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_pick' }
		},
		{
			inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_shovel' }
		},
		{
			inputs: [{ item: 'botania:mana_tablet' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:mana_ring' }
		},
		{
			inputs: [{ item: 'botania:rune_mana' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:aura_ring' }
		},
		{
			inputs: [{ item: 'botania:lens_magnet' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:magnet_ring' }
		},
		{
			inputs: [{ item: 'minecraft:heart_of_the_sea' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:water_ring' }
		},
		{
			inputs: [{ item: 'botania:rune_air' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:dodge_ring' }
		},
		{
			inputs: [{ item: 'botania:rune_earth' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:mining_ring' }
		},
		{
			inputs: [{ item: 'botania:pixie_dust' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:pixie_ring' }
		},
		{
			inputs: [{ item: 'botania:rune_pride' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:reach_ring' }
		},
		{
			inputs: [{ tag: 'forge:storage_blocks/clay' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:swap_ring' }
		},
		{
			inputs: [{ tag: 'forge:ingots/terrasteel' }, { item: 'botania:aura_ring' }],
			output: { item: 'botania:aura_ring_greater' }
		},
		{
			inputs: [{ tag: 'forge:ingots/terrasteel' }, { item: 'botania:mana_ring' }],
			output: { item: 'botania:mana_ring_greater' }
		},
		{
			inputs: [{ item: 'minecraft:iron_boots' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_boots' }
		},
		{
			inputs: [{ item: 'minecraft:iron_boots' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:manasteel_boots' }
		},
		{
			inputs: [{ item: 'minecraft:iron_boots' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_boots' }
		},
		{
			inputs: [{ item: 'minecraft:iron_boots' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_boots' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_leggings' }, { tag: 'forge:ingots/terrasteel' }],
			output: { item: 'botania:terrasteel_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:iron_leggings' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:iron_helmet' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:iron_helmet' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:manasteel_sword' }
		},
		{
			inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/elementium' }],
			output: { item: 'botania:elementium_sword' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { tag: 'forge:ingots/terrasteel' }],
			output: { item: 'botania:terrasteel_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/terrasteel' }],
			output: { item: 'botania:terrasteel_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_pickaxe' }, { tag: 'forge:ingots/manasteel' }],
			output: { item: 'botania:glass_pickaxe' }
		},
		//Cyclic
		{
			inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:bricks/nether' }],
			output: { item: 'cyclic:netherbrick_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:sandstone' }],
			output: { item: 'cyclic:sandstone_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:bricks/nether' }],
			output: { item: 'cyclic:netherbrick_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'forge:sandstone' }],
			output: { item: 'cyclic:sandstone_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:bricks/nether' }],
			output: { item: 'cyclic:netherbrick_axe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:sandstone' }],
			output: { item: 'cyclic:sandstone_axe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_axe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:bricks/nether' }],
			output: { item: 'cyclic:netherbrick_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:sandstone' }],
			output: { item: 'cyclic:sandstone_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:bricks/nether' }],
			output: { item: 'cyclic:netherbrick_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:sandstone' }],
			output: { item: 'cyclic:sandstone_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:bricks/nether' }],
			output: { item: 'cyclic:netherbrick_sword' }
		},
		{
			inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:sandstone' }],
			output: { item: 'cyclic:sandstone_sword' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_sword' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_sword' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_sword' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_chestplate' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_leggings' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_leggings' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_boots' }, { tag: 'forge:gems/emerald' }],
			output: { item: 'cyclic:emerald_boots' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'cyclic:crystal_boots' }
		},
		//DruidCraft
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_sword' }
		},
		{
			inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_sword' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'druidcraft:chitin' }],
			output: { item: 'druidcraft:chitin_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:chainmail_chestplate' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:iron_helmet' }, { item: 'druidcraft:chitin' }],
			output: { item: 'druidcraft:chitin_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:chainmail_helmet' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_leggings' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:iron_leggings' }, { item: 'druidcraft:chitin' }],
			output: { item: 'druidcraft:chitin_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:chainmail_leggings' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_boots' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { item: 'druidcraft:chitin' }],
			output: { item: 'druidcraft:chitin_boots' }
		},
		{
			inputs: [{ item: 'minecraft:chainmail_boots' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_boots' }
		},
		{
			inputs: [{ tag: 'minecraft:planks' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_shield' }
		},
		{
			inputs: [{ tag: 'forge:nuggets/iron' }, { item: 'druidcraft:chitin' }],
			output: { item: 'druidcraft:chitin_shield' }
		},
		{
			inputs: [{ tag: 'forge:nuggets/iron' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_shield' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_axe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_axe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:gems/moonstone' }],
			output: { item: 'druidcraft:moonstone_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:bones' }],
			output: { item: 'druidcraft:bone_pickaxe' }
		},
		//Ice and Fire
		{
			inputs: [{ item: 'botania:mana_string' }, { tag: 'forge:bones/wither' }],
			output: { item: 'iceandfire:dragonbone_bow' }
		},
		//Immersive Engineering
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/steel' }],
			output: { item: 'immersiveengineering:axe_steel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/steel' }],
			output: { item: 'immersiveengineering:shovel_steel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/steel' }],
			output: { item: 'immersiveengineering:hoe_steel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/steel' }],
			output: { item: 'immersiveengineering:sword_steel' }
		},
		//Forbidden Arcanus
		{
			inputs: [{ item: 'minecraft:netherite_pickaxe' }, { item: 'forbidden_arcanus:edelwood_stick' }],
			output: { item: 'forbidden_arcanus:reinforced_arcane_golden_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_golden_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { item: 'forbidden_arcanus:golden_feather' }],
			output: { item: 'forbidden_arcanus:slimec_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_leggings' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_gold_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_gold_boots' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'forbidden_arcanus:edelwood_stick' }],
			output: { item: 'forbidden_arcanus:reinforced_arcane_golden_axe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_golden_axe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_golden_axe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'forbidden_arcanus:edelwood_stick' }],
			output: { item: 'forbidden_arcanus:reinforced_arcane_golden_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_golden_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { item: 'forbidden_arcanus:edelwood_stick' }],
			output: { item: 'forbidden_arcanus:reinforced_arcane_golden_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_golden_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'forbidden_arcanus:edelwood_stick' }],
			output: { item: 'forbidden_arcanus:reinforced_arcane_golden_sword' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_golden_sword' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_gold_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { tag: 'forge:ingots/arcane_gold' }],
			output: { item: 'forbidden_arcanus:arcane_gold_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { tag: 'forge:dragon_scales' }],
			output: { item: 'forbidden_arcanus:draco_arcanus_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:dragon_scales' }],
			output: { item: 'forbidden_arcanus:draco_arcanus_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:dragon_scales' }],
			output: { item: 'forbidden_arcanus:draco_arcanus_sword' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:dragon_scales' }],
			output: { item: 'forbidden_arcanus:draco_arcanus_axe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:dragon_scales' }],
			output: { item: 'forbidden_arcanus:draco_arcanus_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_sword' }, { tag: 'forge:ingots/obsidian' }],
			output: { item: 'forbidden_arcanus:obsidian_sword' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:ingots/obsidian' }],
			output: { item: 'forbidden_arcanus:obsidian_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/obsidian' }],
			output: { item: 'forbidden_arcanus:obsidian_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:ingots/obsidian' }],
			output: { item: 'forbidden_arcanus:obsidian_axe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { item: 'forbidden_arcanus:obsidian_skull' }],
			output: { item: 'forbidden_arcanus:infernum_pickaxe' }
		},
		//Gobber2
		{
			inputs: [{ item: 'minecraft:netherite_pickaxe' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_pickaxe' }, { item: 'gobber2:gobber2_ingot_end' }],
			output: { item: 'gobber2:gobber2_pickaxe_end' }
		},
		{
			inputs: [{ item: 'gobber2:gobber2_pickaxe' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_pickaxe_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_boots' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_boots_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { item: 'gobber2:gobber2_ingot_end' }],
			output: { item: 'gobber2:gobber2_boots_end' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_helmet_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { item: 'gobber2:gobber2_ingot_end' }],
			output: { item: 'gobber2:gobber2_helmet_end' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_leggings' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_leggings' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_leggings_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_leggings' }, { item: 'gobber2:gobber2_ingot_end' }],
			output: { item: 'gobber2:gobber2_leggings_end' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_chestplate_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { item: 'gobber2:gobber2_ingot_end' }],
			output: { item: 'gobber2:gobber2_chestplate_end' }
		},
		{
			inputs: [{ item: 'gobber2:gobber2_paxel_end' }, { item: 'gobber2:gobber2_staff_stars' }],
			output: { item: 'gobber2:gobber2_paxel_stars' }
		},
		{
			inputs: [{ item: 'gobber2:gobber2_sword_end' }, { item: 'gobber2:gobber2_staff_sniper' }],
			output: { item: 'gobber2:gobber2_sword_sniper' }
		},
		{
			inputs: [{ item: 'gobber2:gobber2_sword_end' }, { item: 'gobber2:gobber2_ring_traveler' }],
			output: { item: 'gobber2:gobber2_sword_traveler' }
		},
		{
			inputs: [{ item: 'gobber2:gobber2_ring_nether' }, { tag: 'forge:magma' }],
			output: { item: 'gobber2:gobber2_ring_phoenix' }
		},
		{
			inputs: [{ item: 'botania:mana_string' }, { item: 'gobber2:gobber2_rod' }],
			output: { item: 'gobber2:gobber2_bow' }
		},
		{
			inputs: [{ item: 'botania:mana_string' }, { item: 'gobber2:gobber2_rod_nether' }],
			output: { item: 'gobber2:gobber2_bow_nether' }
		},
		{
			inputs: [{ item: 'botania:mana_string' }, { item: 'gobber2:gobber2_rod_end' }],
			output: { item: 'gobber2:gobber2_bow_end' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'gobber2:gobber2_ingot_end' }],
			output: { item: 'gobber2:gobber2_axe_end' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_axe_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_axe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_rod_end' }],
			output: { item: 'gobber2:gobber2_excavator_end' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_shovel_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_rod_nether' }],
			output: { item: 'gobber2:gobber2_excavator_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_rod' }],
			output: { item: 'gobber2:gobber2_excavator' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { item: 'gobber2:gobber2_ingot_end' }],
			output: { item: 'gobber2:gobber2_hoe_end' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_hoe_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_hoe' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'gobber2:gobber2_ingot_end' }],
			output: { item: 'gobber2:gobber2_sword_end' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'gobber2:gobber2_ingot_nether' }],
			output: { item: 'gobber2:gobber2_sword_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'gobber2:gobber2_ingot' }],
			output: { item: 'gobber2:gobber2_sword' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'gobber2:gobber2_block_nether' }],
			output: { item: 'gobber2:gobber2_tree_axe_nether' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'gobber2:gobber2_block_end' }],
			output: { item: 'gobber2:gobber2_tree_axe_end' }
		},
		//Mekanism
		{
			inputs: [{ item: 'minecraft:bow' }, { item: 'mekanism:energy_tablet' }],
			output: { item: 'mekanism:electric_bow' }
		},
		//Minecraft
		{
			inputs: [{ item: 'minecraft:wooden_pickaxe' }, { tag: 'forge:stone' }],
			output: { item: 'minecraft:stone_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_shovel' }, { tag: 'forge:stone' }],
			output: { item: 'minecraft:stone_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_hoe' }, { tag: 'forge:stone' }],
			output: { item: 'minecraft:stone_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_axe' }, { tag: 'forge:stone' }],
			output: { item: 'minecraft:stone_axe' }
		},
		{
			inputs: [{ item: 'minecraft:wooden_sword' }, { tag: 'forge:stone' }],
			output: { item: 'minecraft:stone_sword' }
		},
		{
			inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_axe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_sword' }
		},
		{
			inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_sword' }
		},
		{
			inputs: [{ item: 'minecraft:golden_pickaxe' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:golden_shovel' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:golden_hoe' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:golden_axe' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_axe' }
		},
		{
			inputs: [{ item: 'minecraft:golden_sword' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_sword' }
		},
		{
			inputs: [{ item: 'woodenutilities:wooden_helmet' }, { tag: 'forge:chains' }],
			output: { item: 'minecraft:chainmail_helmet' }
		},
		{
			inputs: [{ item: 'woodenutilities:wooden_chestplate' }, { tag: 'forge:chains' }],
			output: { item: 'minecraft:chainmail_chestplate' }
		},
		{
			inputs: [{ item: 'woodenutilities:wooden_leggings' }, { tag: 'forge:chains' }],
			output: { item: 'minecraft:chainmail_leggings' }
		},
		{
			inputs: [{ item: 'woodenutilities:wooden_boot' }, { tag: 'forge:chains' }],
			output: { item: 'minecraft:chainmail_boots' }
		},
		{
			inputs: [{ item: 'minecraft:chainmail_helmet' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:chainmail_chestplate' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:chainmail_leggings' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:chainmail_boots' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_boots' }
		},
		{
			inputs: [{ item: 'minecraft:iron_helmet' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:iron_leggings' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:iron_boots' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_boots' }
		},
		{
			inputs: [{ item: 'minecraft:golden_helmet' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:golden_chestplate' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:golden_leggings' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:golden_boots' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_boots' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/netherite' }],
			output: { item: 'minecraft:netherite_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:ingots/netherite' }],
			output: { item: 'minecraft:netherite_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'forge:ingots/netherite' }],
			output: { item: 'minecraft:netherite_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:ingots/netherite' }],
			output: { item: 'minecraft:netherite_axe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_sword' }, { tag: 'forge:ingots/netherite' }],
			output: { item: 'minecraft:netherite_sword' }
		},
		{
			inputs: [{ item: 'woodenutilities:wooden_shears' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:shears' }
		},
		{
			inputs: [{ item: 'woodenutilities:wooden_horse_armor' }, { tag: 'forge:ingots/iron' }],
			output: { item: 'minecraft:iron_horse_armor' }
		},
		{
			inputs: [{ item: 'minecraft:iron_horse_armor' }, { tag: 'forge:ingots/gold' }],
			output: { item: 'minecraft:golden_horse_armor' }
		},
		{
			inputs: [{ item: 'minecraft:golden_horse_armor' }, { tag: 'forge:gems/diamond' }],
			output: { item: 'minecraft:diamond_horse_armor' }
		},
		//Mystical Agriculture Pickaxe
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: { item: 'mysticalagriculture:inferium_pickaxe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_pickaxe' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_pickaxe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_pickaxe' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_pickaxe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_pickaxe' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_pickaxe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_pickaxe' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_pickaxe' }
		},
		//Mystical Agriculture Axe
		{
			inputs: [{ item: 'minecraft:diamond_axe' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: {
				item: 'mysticalagriculture:inferium_axe',
				id: 'botania:elven_trade/inferium_axe'
			}
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_axe' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_axe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_axe' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_axe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_axe' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_axe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_axe' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_axe' }
		},
		//Mystical Agriculture Sword
		{
			inputs: [{ item: 'minecraft:diamond_sword' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: { item: 'mysticalagriculture:inferium_sword', }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_sword' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_sword' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_sword' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_sword' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_sword' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_sword' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_sword' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_sword' }
		},
		//Mystical Agriculture Hoe
		{
			inputs: [{ item: 'minecraft:diamond_hoe' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: { item: 'mysticalagriculture:inferium_hoe', }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_hoe' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_hoe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_hoe' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_hoe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_hoe' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_hoe' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_hoe' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_hoe' }
		},
		//Mystical Agriculture Shovel
		{
			inputs: [{ item: 'minecraft:diamond_shovel' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: { item: 'mysticalagriculture:inferium_shovel', }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_shovel' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_shovel' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_shovel' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_shovel' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_shovel' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_shovel' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_shovel' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_shovel' }
		},
		//Mystical Agriculture Chestplates
		{
			inputs: [{ item: 'minecraft:diamond_chestplate' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: { item: 'mysticalagriculture:inferium_chestplate', }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_chestplate' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_chestplate' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_chestplate' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_chestplate' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_chestplate' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_chestplate' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_chestplate' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_chestplate' }
		},
		//Mystical Agriculture Helmets
		{
			inputs: [{ item: 'minecraft:diamond_helmet' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: { item: 'mysticalagriculture:inferium_helmet', }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_helmet' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_helmet' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_helmet' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_helmet' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_helmet' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_helmet' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_helmet' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_helmet' }
		},
		//Mystical Agriculture Leggings
		{
			inputs: [{ item: 'minecraft:diamond_leggings' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: { item: 'mysticalagriculture:inferium_leggings', }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_leggings' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_leggings' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_leggings' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_leggings' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_leggings' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_leggings' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_leggings' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_leggings' }
		},
		//Mystical Agriculture Boots
		{
			inputs: [{ item: 'minecraft:diamond_boots' }, { item: 'mysticalagriculture:inferium_gemstone' }],
			output: { item: 'mysticalagriculture:inferium_boots', }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_boots' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_boots' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_boots' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_boots' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_boots' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_boots' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_boots' }, { item: 'mysticalagriculture:supremium_gemstone' }],
			output: { item: 'mysticalagriculture:supremium_boots' }
		},
		//Mystical Agriculture Furnace
		{
			inputs: [{ tag: 'forge:furnace' }, { item: 'mysticalagriculture:inferium_block' }],
			output: { item: 'mysticalagriculture:inferium_furnace' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_furnace' }, { item: 'mysticalagriculture:prudentium_block' }],
			output: { item: 'mysticalagriculture:prudentium_furnace' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_furnace' }, { item: 'mysticalagriculture:tertium_block' }],
			output: { item: 'mysticalagriculture:tertium_furnace' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_furnace' }, { item: 'mysticalagriculture:imperium_block' }],
			output: { item: 'mysticalagriculture:imperium_furnace' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_furnace' },
			{ item: 'mysticalagriculture:supremium_block' }
			],
			output: { item: 'mysticalagriculture:supremium_furnace' }
		},
		//Mystical Agriculture Seed Reprocessor
		{
			inputs: [{ item: 'mysticalagriculture:basic_reprocessor' }, { item: 'mysticalagriculture:inferium_block' }],
			output: { item: 'mysticalagriculture:inferium_reprocessor' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_reprocessor' }, { item: 'mysticalagriculture:prudentium_block' }],
			output: { item: 'mysticalagriculture:prudentium_reprocessor' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_reprocessor' }, { item: 'mysticalagriculture:tertium_block' }],
			output: { item: 'mysticalagriculture:tertium_reprocessor' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_reprocessor' }, { item: 'mysticalagriculture:imperium_block' }],
			output: { item: 'mysticalagriculture:imperium_reprocessor' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_reprocessor' },
			{ item: 'mysticalagriculture:supremium_block' }
			],
			output: { item: 'mysticalagriculture:supremium_reprocessor' }
		},
		//Mystical Agriculture Watering Can
		{
			inputs: [{ item: 'mysticalagriculture:mystical_fertilizer' }, { item: 'mysticalagriculture:watering_can' }],
			output: { item: 'mysticalagriculture:inferium_watering_can' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:inferium_watering_can' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
			output: { item: 'mysticalagriculture:prudentium_watering_can' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:prudentium_watering_can' }, { item: 'mysticalagriculture:tertium_gemstone' }],
			output: { item: 'mysticalagriculture:tertium_watering_can' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:tertium_watering_can' }, { item: 'mysticalagriculture:imperium_gemstone' }],
			output: { item: 'mysticalagriculture:imperium_watering_can' }
		},
		{
			inputs: [{ item: 'mysticalagriculture:imperium_watering_can' },
			{ item: 'mysticalagriculture:supremium_gemstone' }
			],
			output: { item: 'mysticalagriculture:supremium_watering_can' }
		},
		//Nature's Compass
		{
			inputs: [{ item: 'minecraft:compass' }, { tag: 'minecraft:saplings' }],
			output: { item: 'naturescompass:naturescompass' }
		},
		//Nature's Aura
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_axe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_axe' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_sword' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_sword' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_sword' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_sword' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_hoe' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_chest' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_chestplate' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_chest' }
		},
		{
			inputs: [{ item: 'minecraft:iron_helmet' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_helmet' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:iron_leggings' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_pants' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_leggings' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_pants' }
		},
		{
			inputs: [{ item: 'minecraft:iron_boots' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_shoes' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_boots' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_shoes' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_shovel' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_pickaxe' }, { item: 'naturesaura:infused_iron' }],
			output: { item: 'naturesaura:infused_iron_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { item: 'naturesaura:sky_ingot' }],
			output: { item: 'naturesaura:sky_pickaxe' }
		},
		//Occultism
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/iesnium' }],
			output: { item: 'occultism:iesnium_pickaxe' }
		},
		//Pneumaticcraft
		{
			inputs: [{ item: 'minecraft:iron_boots' }, { item: 'kubejs:compressed_iron_plate' }],
			output: { item: 'pneumaticcraft:compressed_iron_boots' }
		},
		{
			inputs: [{ item: 'minecraft:iron_leggings' }, { item: 'kubejs:compressed_iron_plate' }],
			output: { item: 'pneumaticcraft:compressed_iron_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:iron_helmet' }, { item: 'kubejs:compressed_iron_plate' }],
			output: { item: 'pneumaticcraft:compressed_iron_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'kubejs:compressed_iron_plate' }],
			output: { item: 'pneumaticcraft:compressed_iron_chestplate' }
		},
		//Wooden Utilities
		{
			inputs: [{ item: 'minecraft:leather_horse_armor' }, { tag: 'forge:plates/wooden' }],
			output: { item: 'woodenutilities:wooden_horse_armor' }
		},
		{
			inputs: [{ item: 'minecraft:leather_helmet' }, { tag: 'forge:plates/wooden' }],
			output: { item: 'woodenutilities:wooden_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:leather_chestplate' }, { tag: 'forge:plates/wooden' }],
			output: { item: 'woodenutilities:wooden_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:leather_leggings' }, { tag: 'forge:plates/wooden' }],
			output: { item: 'woodenutilities:wooden_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:leather_boots' }, { tag: 'forge:plates/wooden' }],
			output: { item: 'woodenutilities:wooden_boot' }
		},
		//Undergrden
		{
			inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/froststeel' }],
			output: { item: 'undergarden:froststeel_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/utherium' }],
			output: { item: 'undergarden:utheric_pickaxe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/froststeel' }],
			output: { item: 'undergarden:froststeel_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'forge:ingots/utherium' }],
			output: { item: 'undergarden:utheric_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_sword' }
		},
		{
			inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/froststeel' }],
			output: { item: 'undergarden:froststeel_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'forge:ingots/utherium' }],
			output: { item: 'undergarden:utheric_hoe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/froststeel' }],
			output: { item: 'undergarden:froststeel_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/utherium' }],
			output: { item: 'undergarden:utheric_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_chestplate' }, { item: 'undergarden:masticator_scales' }],
			output: { item: 'undergarden:utheric_chestplate' }
		},
		{
			inputs: [{ item: 'minecraft:iron_helmet' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:iron_helmet' }, { tag: 'forge:ingots/froststeel' }],
			output: { item: 'undergarden:froststeel_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_helmet' }, { tag: 'forge:ingots/utherium' }],
			output: { item: 'undergarden:utheric_helmet' }
		},
		{
			inputs: [{ item: 'minecraft:iron_leggings' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:iron_leggings' }, { tag: 'forge:ingots/froststeel' }],
			output: { item: 'undergarden:froststeel_leggings' }
		},
		{
			inputs: [{ item: 'minecraft:netherite_boots' }, { tag: 'forge:ingots/utherium' }],
			output: { item: 'undergarden:utheric_boots' }
		},
		{
			inputs: [{ tag: 'minecraft:planks' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_shield' }
		},
		{
			inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_axe' }
		},
		{
			inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/froststeel' }],
			output: { item: 'undergarden:froststeel_axe' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:ingots/utherium' }],
			output: { item: 'undergarden:utheric_axe' }
		},
		{
			inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:ingots/cloggrum' }],
			output: { item: 'undergarden:cloggrum_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/froststeel' }],
			output: { item: 'undergarden:froststeel_shovel' }
		},
		{
			inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:ingots/utherium' }],
			output: { item: 'undergarden:utheric_shovel' }
		}
	]

	recipes.forEach(recipe => {
		const re = {
			type: 'botania:elven_trade',
			ingredients: recipe.inputs,
			output: recipe.output
		}

		if (recipe.id) re.id(recipe.id)

		event.custom(re)
	})
})
