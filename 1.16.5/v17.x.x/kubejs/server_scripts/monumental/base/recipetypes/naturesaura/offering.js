onEvent('recipes', event => {
	const data = {
		recipes: [
			//Atum
			{
				start_item: { item: 'minecraft:stone_hoe' },
				input: { item: 'atum:limestone_cracked' },
				output: { item: 'atum:limestone_hoe' }
			},
			{
				start_item: { item: 'minecraft:stone_sword' },
				input: { item: 'atum:limestone_cracked' },
				output: { item: 'atum:limestone_sword' }
			},
			{
				start_item: { item: 'atum:stoneguard_sword' },
				input: { tag: 'forge:ingots/khnumite' },
				output: { item: 'atum:stoneguard_greatsword' }
			},
			{
				start_item: { item: 'atum:wanderer_chest' },
				input: { item: 'minecraft:iron_chestplate' },
				output: { item: 'atum:desert_chest_iron' }
			},
			{
				start_item: { item: 'atum:wanderer_chest' },
				input: { item: 'minecraft:golden_chestplate' },
				output: { item: 'atum:desert_chest_gold' }
			},
			{
				start_item: { item: 'atum:wanderer_chest' },
				input: { item: 'minecraft:diamond_chestplate' },
				output: { item: 'atum:desert_chest_diamond' }
			},
			{
				start_item: { item: 'atum:wanderer_helmet' },
				input: { item: 'minecraft:iron_helmet' },
				output: { item: 'atum:desert_helmet_iron' }
			},
			{
				start_item: { item: 'atum:wanderer_helmet' },
				input: { item: 'minecraft:golden_helmet' },
				output: { item: 'atum:desert_helmet_gold' }
			},
			{
				start_item: { item: 'atum:wanderer_helmet' },
				input: { item: 'minecraft:diamond_helmet' },
				output: { item: 'atum:desert_helmet_diamond' }
			},
			{
				start_item: { item: 'atum:wanderer_legs' },
				input: { item: 'minecraft:iron_leggings' },
				output: { item: 'atum:desert_legs_iron' }
			},
			{
				start_item: { item: 'atum:wanderer_legs' },
				input: { item: 'minecraft:golden_leggings' },
				output: { item: 'atum:desert_legs_gold' }
			},
			{
				start_item: { item: 'atum:wanderer_legs' },
				input: { item: 'minecraft:diamond_leggings' },
				output: { item: 'atum:desert_legs_diamond' }
			},
			{
				start_item: { item: 'atum:wanderer_boots' },
				input: { item: 'minecraft:iron_boots' },
				output: { item: 'atum:desert_boots_iron' }
			},
			{
				start_item: { item: 'atum:wanderer_boots' },
				input: { item: 'minecraft:golden_boots' },
				output: { item: 'atum:desert_boots_gold' }
			},
			{
				start_item: { item: 'atum:wanderer_boots' },
				input: { item: 'minecraft:diamond_boots' },
				output: { item: 'atum:desert_boots_diamond' }
			},
			//Aquaculture
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_boots' }
			},
			{
				start_item: { tag: 'forge:string' },
				input: { tag: 'forge:ingots/neptunium' },
				output: { item: 'aquaculture:neptunium_bow' }
			},
			//Aiot Botania
			{
				start_item: { item: 'minecraft:wooden_axe' },
				input: { tag: 'botania:livingwood' },
				output: { item: 'aiotbotania:livingwood_axe' }
			},
			{
				start_item: { item: 'minecraft:stone_axe' },
				input: { tag: 'botania:livingrock' },
				output: { item: 'aiotbotania:livingrock_axe' }
			},
			{
				start_item: { item: 'minecraft:wooden_shovel' },
				input: { tag: 'botania:livingwood' },
				output: { item: 'aiotbotania:livingwood_shovel' }
			},
			{
				start_item: { item: 'minecraft:stone_shovel' },
				input: { tag: 'botania:livingrock' },
				output: { item: 'aiotbotania:livingrock_shovel' }
			},
			{
				start_item: { item: 'minecraft:wooden_hoe' },
				input: { tag: 'botania:livingwood' },
				output: { item: 'aiotbotania:livingwood_hoe' }
			},
			{
				start_item: { item: 'minecraft:stone_hoe' },
				input: { tag: 'botania:livingrock' },
				output: { item: 'aiotbotania:livingrock_hoe' }
			},
			{
				start_item: { item: 'minecraft:wooden_sword' },
				input: { tag: 'botania:livingwood' },
				output: { item: 'aiotbotania:livingwood_sword' }
			},
			{
				start_item: { item: 'minecraft:stone_sword' },
				input: { tag: 'botania:livingrock' },
				output: { item: 'aiotbotania:livingrock_sword' }
			},
			{
				start_item: { item: 'minecraft:wooden_pickaxe' },
				input: { tag: 'botania:livingwood' },
				output: { item: 'aiotbotania:livingwood_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:stone_pickaxe' },
				input: { tag: 'botania:livingrock' },
				output: { item: 'aiotbotania:livingrock_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:shears' },
				input: { tag: 'botania:livingwood' },
				output: { item: 'aiotbotania:livingrock_shears' }
			},
			{
				start_item: { item: 'minecraft:shears' },
				input: { tag: 'botania:livingrock' },
				output: { item: 'aiotbotania:livingrock_shears' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:ingots/terrasteel' },
				output: { item: 'aiotbotania:terra_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:ingots/terrasteel' },
				output: { item: 'aiotbotania:terra_shovel' }
			},
			//Applied Energistics2
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { tag: 'forge:gems/certus_quartz' },
				output: { item: 'appliedenergistics2:certus_quartz_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { tag: 'forge:gems/certus_quartz' },
				output: { item: 'appliedenergistics2:certus_quartz_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:gems/certus_quartz' },
				output: { item: 'appliedenergistics2:certus_quartz_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { tag: 'forge:gems/certus_quartz' },
				output: { item: 'appliedenergistics2:certus_quartz_sword' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { tag: 'forge:gems/certus_quartz' },
				output: { item: 'appliedenergistics2:certus_quartz_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { tag: 'forge:gems/quartz' },
				output: { item: 'appliedenergistics2:nether_quartz_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { tag: 'forge:gems/quartz' },
				output: { item: 'appliedenergistics2:nether_quartz_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:gems/quartz' },
				output: { item: 'appliedenergistics2:nether_quartz_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { tag: 'forge:gems/quartz' },
				output: { item: 'appliedenergistics2:nether_quartz_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { tag: 'forge:gems/quartz' },
				output: { item: 'appliedenergistics2:nether_quartz_sword' }
			},
			//Botania
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:ingots/terrasteel' },
				output: { item: 'botania:terra_sword' }
			},
			//Better Shields
			{
				start_item: { item: 'minecraft:shield' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'bettershields:iron_shield' }
			},
			{
				start_item: { item: 'bettershields:iron_shield' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'bettershields:gold_shield' }
			},
			{
				start_item: { item: 'bettershields:gold_shield' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'bettershields:diamond_shield' }
			},
			// Botania
			{
				start_item: { item: 'botania:mana_string' },
				input: { item: 'botania:livingwood_twig' },
				output: { item: 'botania:livingwood_bow' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:ingots/terrasteel' },
				output: { item: 'botania:terrasteel_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_pick' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_shovel' }
			},
			{
				start_item: { item: 'botania:mana_tablet' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:mana_ring' }
			},
			{
				start_item: { item: 'botania:rune_mana' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:aura_ring' }
			},
			{
				start_item: { item: 'botania:lens_magnet' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:magnet_ring' }
			},
			{
				start_item: { item: 'minecraft:heart_of_the_sea' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:water_ring' }
			},
			{
				start_item: { item: 'botania:rune_air' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:dodge_ring' }
			},
			{
				start_item: { item: 'botania:rune_earth' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:mining_ring' }
			},
			{
				start_item: { item: 'botania:pixie_dust' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:pixie_ring' }
			},
			{
				start_item: { item: 'botania:rune_pride' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:reach_ring' }
			},
			{
				start_item: { tag: 'forge:storage_blocks/clay' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:swap_ring' }
			},
			{
				start_item: { tag: 'forge:ingots/terrasteel' },
				input: { item: 'botania:aura_ring' },
				output: { item: 'botania:aura_ring_greater' }
			},
			{
				start_item: { tag: 'forge:ingots/terrasteel' },
				input: { item: 'botania:mana_ring' },
				output: { item: 'botania:mana_ring_greater' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:manasteel_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_boots' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { tag: 'forge:ingots/terrasteel' },
				output: { item: 'botania:terrasteel_leggings' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_leggings' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_chestplate' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_chestplate' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:manasteel_sword' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { tag: 'forge:ingots/elementium' },
				output: { item: 'botania:elementium_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:ingots/terrasteel' },
				output: { item: 'botania:terrasteel_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:ingots/terrasteel' },
				output: { item: 'botania:terrasteel_chestplate' }
			},
			{
				start_item: { item: 'minecraft:wooden_pickaxe' },
				input: { tag: 'forge:ingots/manasteel' },
				output: { item: 'botania:glass_pickaxe' }
			},
			//Cyclic
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_boots' }
			},
			{
				start_item: { item: 'minecraft:diamond_boots' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_boots' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_leggings' }
			},
			{
				start_item: { item: 'minecraft:diamond_leggings' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_helmet' }
			},
			{
				start_item: { item: 'minecraft:diamond_helmet' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_chestplate' }
			},
			{
				start_item: { item: 'minecraft:diamond_chestplate' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_sword' }
			},
			{
				start_item: { item: 'minecraft:diamond_sword' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_sword' }
			},
			{
				start_item: { item: 'minecraft:stone_sword' },
				input: { tag: 'forge:sandstone' },
				output: { item: 'cyclic:sandstone_sword' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { tag: 'forge:bricks/nether' },
				output: { item: 'cyclic:netherbrick_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_shovel' }
			},
			{
				start_item: { item: 'minecraft:diamond_shovel' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_shovel' }
			},
			{
				start_item: { item: 'minecraft:stone_shovel' },
				input: { tag: 'forge:sandstone' },
				output: { item: 'cyclic:sandstone_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { tag: 'forge:bricks/nether' },
				output: { item: 'cyclic:netherbrick_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_axe' }
			},
			{
				start_item: { item: 'minecraft:diamond_axe' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_axe' }
			},
			{
				start_item: { item: 'minecraft:stone_axe' },
				input: { tag: 'forge:sandstone' },
				output: { item: 'cyclic:sandstone_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { tag: 'forge:bricks/nether' },
				output: { item: 'cyclic:netherbrick_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_hoe' }
			},
			{
				start_item: { item: 'minecraft:diamond_hoe' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_hoe' }
			},
			{
				start_item: { item: 'minecraft:stone_hoe' },
				input: { tag: 'forge:sandstone' },
				output: { item: 'cyclic:sandstone_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:bricks/nether' },
				output: { item: 'cyclic:netherbrick_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'cyclic:crystal_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { tag: 'forge:gems/emerald' },
				output: { item: 'cyclic:emerald_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:stone_pickaxe' },
				input: { tag: 'forge:sandstone' },
				output: { item: 'cyclic:sandstone_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { tag: 'forge:bricks/nether' },
				output: { item: 'cyclic:netherbrick_pickaxe' }
			},
			//DruidCraft
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_sword' }
			},
			{
				start_item: { item: 'minecraft:stone_sword' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_chestplate' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { item: 'druidcraft:chitin' },
				output: { item: 'druidcraft:chitin_chestplate' }
			},
			{
				start_item: { item: 'minecraft:chainmail_chestplate' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { item: 'druidcraft:chitin' },
				output: { item: 'druidcraft:chitin_helmet' }
			},
			{
				start_item: { item: 'minecraft:chainmail_helmet' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_leggings' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { item: 'druidcraft:chitin' },
				output: { item: 'druidcraft:chitin_leggings' }
			},
			{
				start_item: { item: 'minecraft:chainmail_leggings' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { item: 'druidcraft:chitin' },
				output: { item: 'druidcraft:chitin_boots' }
			},
			{
				start_item: { item: 'minecraft:chainmail_boots' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_boots' }
			},
			{
				start_item: { tag: 'minecraft:planks' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_shield' }
			},
			{
				start_item: { tag: 'forge:nuggets/iron' },
				input: { item: 'druidcraft:chitin' },
				output: { item: 'druidcraft:chitin_shield' }
			},
			{
				start_item: { tag: 'forge:nuggets/iron' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_shield' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_axe' }
			},
			{
				start_item: { item: 'minecraft:stone_axe' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_shovel' }
			},
			{
				start_item: { item: 'minecraft:stone_shovel' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { tag: 'forge:gems/moonstone' },
				output: { item: 'druidcraft:moonstone_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:stone_pickaxe' },
				input: { tag: 'forge:bones' },
				output: { item: 'druidcraft:bone_pickaxe' }
			},
			//Ice and Fire
			{
				start_item: { item: 'botania:mana_string' },
				input: { tag: 'forge:bones/wither' },
				output: { item: 'iceandfire:dragonbone_bow' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:ingots/dragonsteel_lightning' },
				output: { item: 'iceandfire:dragonsteel_lightning_boots' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_ice_boots' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { item: 'iceandfire:myrmex_jungle_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_boots' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { tag: 'forge:ingots/dragonsteel_lightning' },
				output: { item: 'iceandfire:dragonsteel_lightning_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_ice_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_leggings' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { item: 'iceandfire:myrmex_jungle_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_leggings' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:ingots/dragonsteel_lightning' },
				output: { item: 'iceandfire:dragonsteel_lightning_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_ice_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_sword' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { item: 'iceandfire:myrmex_jungle_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_sword' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:bones/dragon' },
				output: { item: 'iceandfire:dragonbone_sword' }
			},
			{
				start_item: { item: 'iceandfire:dragonbone_sword' },
				input: { item: 'iceandfire:lightning_dragon_blood' },
				output: { item: 'iceandfire:dragonbone_sword_lightning' }
			},
			{
				start_item: { item: 'iceandfire:dragonbone_sword' },
				input: { item: 'iceandfire:ice_dragon_blood' },
				output: { item: 'iceandfire:dragonbone_sword_ice' }
			},
			{
				start_item: { item: 'iceandfire:dragonbone_sword' },
				input: { item: 'iceandfire:fire_dragon_blood' },
				output: { item: 'iceandfire:dragonbone_sword_fire' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { item: 'iceandfire:hippogryph_talon' },
				output: { item: 'iceandfire:hippogryph_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:ingots/dragonsteel_lightning' },
				output: { item: 'iceandfire:dragonsteel_lightning_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_ice_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_chestplate' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { item: 'iceandfire:myrmex_jungle_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_chestplate' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:ingots/dragonsteel_lightning' },
				output: { item: 'iceandfire:dragonsteel_lightning_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_ice_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { item: 'iceandfire:myrmex_jungle_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_lightning_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_chitin' }
			},
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { tag: 'forge:bones/dragon' },
				output: { item: 'iceandfire:dragonbone_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:ingots/dragonsteel_lightning' },
				output: { item: 'iceandfire:dragonsteel_lightning_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_ice_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { item: 'iceandfire:myrmex_jungle_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:bones/dragon' },
				output: { item: 'iceandfire:dragonbone_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:ingots/dragonsteel_lightning' },
				output: { item: 'iceandfire:dragonsteel_lightning_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_ice_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { item: 'iceandfire:myrmex_jungle_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:bones/dragon' },
				output: { item: 'iceandfire:dragonbone_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { tag: 'forge:ingots/dragonsteel_lightning' },
				output: { item: 'iceandfire:dragonsteel_lightning_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { tag: 'forge:ingots/dragonsteel_ice' },
				output: { item: 'iceandfire:dragonsteel_ice_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { tag: 'forge:ingots/dragonsteel_fire' },
				output: { item: 'iceandfire:dragonsteel_fire_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { item: 'iceandfire:myrmex_jungle_chitin' },
				output: { item: 'iceandfire:myrmex_jungle_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { item: 'iceandfire:myrmex_desert_chitin' },
				output: { item: 'iceandfire:myrmex_desert_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { tag: 'forge:bones/dragon' },
				output: { item: 'iceandfire:dragonbone_pickaxe' }
			},
			//Immersive Engineering
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { tag: 'forge:ingots/steel' },
				output: { item: 'immersiveengineering:axe_steel' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { tag: 'forge:ingots/steel' },
				output: { item: 'immersiveengineering:shovel_steel' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:ingots/steel' },
				output: { item: 'immersiveengineering:hoe_steel' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { tag: 'forge:ingots/steel' },
				output: { item: 'immersiveengineering:hoe_sword' }
			},
			//Forbidden Arcanus
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { item: 'forbidden_arcanus:edelwood_stick' },
				output: { item: 'forbidden_arcanus:reinforced_arcane_golden_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:arcane_golden_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { item: 'forbidden_arcanus:golden_feather' },
				output: { item: 'forbidden_arcanus:slimec_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:arcane_gold_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:arcane_gold_boots' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { item: 'forbidden_arcanus:edelwood_stick' },
				output: { item: 'forbidden_arcanus:reinforced_arcane_golden_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:arcane_golden_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { item: 'forbidden_arcanus:edelwood_stick' },
				output: { item: 'forbidden_arcanus:reinforced_arcane_golden_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:arcane_golden_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { item: 'forbidden_arcanus:edelwood_stick' },
				output: { item: 'forbidden_arcanus:reinforced_arcane_golden_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:arcane_golden_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:reinforced_arcane_golden_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:arcane_gold_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:ingots/arcane_gold' },
				output: { item: 'forbidden_arcanus:arcane_gold_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:dragon_scales' },
				output: { item: 'forbidden_arcanus:draco_arcanus_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { item: 'forbidden_arcanus:obsidian_skull' },
				output: { item: 'forbidden_arcanus:infernum_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { tag: 'forge:dragon_scales' },
				output: { item: 'forbidden_arcanus:draco_arcanus_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { tag: 'forge:dragon_scales' },
				output: { item: 'forbidden_arcanus:draco_arcanus_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { tag: 'forge:dragon_scales' },
				output: { item: 'forbidden_arcanus:draco_arcanus_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { tag: 'forge:dragon_scales' },
				output: { item: 'forbidden_arcanus:draco_arcanus_shovel' }
			},
			{
				start_item: { item: 'minecraft:diamond_sword' },
				input: { tag: 'forge:ingots/obsidian' },
				output: { item: 'forbidden_arcanus:obsidian_sword' }
			},
			{
				start_item: { item: 'minecraft:diamond_shovel' },
				input: { tag: 'forge:ingots/obsidian' },
				output: { item: 'forbidden_arcanus:obsidian_shovel' }
			},
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { tag: 'forge:ingots/obsidian' },
				output: { item: 'forbidden_arcanus:obsidian_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:diamond_axe' },
				input: { tag: 'forge:ingots/obsidian' },
				output: { item: 'forbidden_arcanus:obsidian_axe' }
			},
			{
				start_item: { item: 'minecraft:diamond_helmet' },
				input: { tag: 'forge:ingots/obsidian' },
				output: { item: 'forbidden_arcanus:obsidian_helmet' }
			},
			//Gobber2
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:netherite_pickaxe' },
				input: { item: 'gobber2:gobber2_ingot_end' },
				output: { item: 'gobber2:gobber2_pickaxe_end' }
			},
			{
				start_item: { item: 'gobber2:gobber2_pickaxe' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_pickaxe_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_boots' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_boots_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { item: 'gobber2:gobber2_ingot_end' },
				output: { item: 'gobber2:gobber2_boots_end' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_helmet_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { item: 'gobber2:gobber2_ingot_end' },
				output: { item: 'gobber2:gobber2_helmet_end' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_leggings_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_leggings' },
				input: { item: 'gobber2:gobber2_ingot_end' },
				output: { item: 'gobber2:gobber2_leggings_end' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_chestplate_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { item: 'gobber2:gobber2_ingot_end' },
				output: { item: 'gobber2:gobber2_chestplate_end' }
			},
			{
				start_item: { item: 'gobber2:gobber2_paxel_end' },
				input: { item: 'gobber2:gobber2_staff_stars' },
				output: { item: 'gobber2:gobber2_paxel_stars' }
			},
			{
				start_item: { item: 'gobber2:gobber2_sword_end' },
				input: { item: 'gobber2:gobber2_staff_sniper' },
				output: { item: 'gobber2:gobber2_sword_sniper' }
			},
			{
				start_item: { item: 'gobber2:gobber2_sword_end' },
				input: { item: 'gobber2:gobber2_staff_sniper' },
				output: { item: 'gobber2:gobber2_sword_sniper' }
			},
			{
				start_item: { item: 'gobber2:gobber2_sword_end' },
				input: { item: 'gobber2:gobber2_ring_traveler' },
				output: { item: 'gobber2:gobber2_sword_traveler' }
			},
			{
				start_item: { item: 'gobber2:gobber2_ring_nether' },
				input: { tag: 'forge:magma' },
				output: { item: 'gobber2:gobber2_ring_phoenix' }
			},
			{
				start_item: { item: 'botania:mana_string' },
				input: { item: 'gobber2:gobber2_rod' },
				output: { item: 'gobber2:gobber2_bow' }
			},
			{
				start_item: { item: 'botania:mana_string' },
				input: { item: 'gobber2:gobber2_rod_nether' },
				output: { item: 'gobber2:gobber2_bow_nether' }
			},
			{
				start_item: { item: 'botania:mana_string' },
				input: { item: 'gobber2:gobber2_rod_end' },
				output: { item: 'gobber2:gobber2_bow_end' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { item: 'gobber2:gobber2_ingot_end' },
				output: { item: 'gobber2:gobber2_axe_end' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_axe_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_axe' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { item: 'gobber2:gobber2_rod_end' },
				output: { item: 'gobber2:gobber2_excavator_end' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_shovel_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { item: 'gobber2:gobber2_rod_nether' },
				output: { item: 'gobber2:gobber2_excavator_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_shovel' }
			},
			{
				start_item: { item: 'minecraft:netherite_shovel' },
				input: { item: 'gobber2:gobber2_rod' },
				output: { item: 'gobber2:gobber2_excavator' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { item: 'gobber2:gobber2_ingot_end' },
				output: { item: 'gobber2:gobber2_hoe_end' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_hoe_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_hoe' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_hoe' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { item: 'gobber2:gobber2_ingot_end' },
				output: { item: 'gobber2:gobber2_sword_end' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { item: 'gobber2:gobber2_ingot_nether' },
				output: { item: 'gobber2:gobber2_sword_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_sword' },
				input: { item: 'gobber2:gobber2_ingot' },
				output: { item: 'gobber2:gobber2_sword' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { item: 'gobber2:gobber2_block_nether' },
				output: { item: 'gobber2:gobber2_tree_axe_nether' }
			},
			{
				start_item: { item: 'minecraft:netherite_axe' },
				input: { item: 'gobber2:gobber2_block_end' },
				output: { item: 'gobber2:gobber2_tree_axe_end' }
			},
			//Mekanism
			{
				start_item: { item: 'minecraft:bow' },
				input: { item: 'mekanism:energy_tablet' },
				output: { item: 'mekanism:electric_bow' }
			},
			//Modular Routers
			{
				start_item: { item: 'modularrouters:blank_module' },
				input: { tag: 'forge:tools/pickaxe' },
				output: { item: 'modularrouters:breaker_module' }
			},
			{
				start_item: { item: 'modularrouters:breaker_module' },
				input: { item: 'modularrouters:blank_module' },
				output: { item: 'modularrouters:extruder_module_1' }
			},
			//Minecraft
			{
				start_item: { item: 'minecraft:wooden_pickaxe' },
				input: { tag: 'forge:stone' },
				output: { item: 'minecraft:stone_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:wooden_shovel' },
				input: { tag: 'forge:stone' },
				output: { item: 'minecraft:stone_shovel' }
			},
			{
				start_item: { item: 'minecraft:wooden_hoe' },
				input: { tag: 'forge:stone' },
				output: { item: 'minecraft:stone_hoe' }
			},
			{
				start_item: { item: 'minecraft:wooden_axe' },
				input: { tag: 'forge:stone' },
				output: { item: 'minecraft:stone_axe' }
			},
			{
				start_item: { item: 'minecraft:wooden_sword' },
				input: { tag: 'forge:stone' },
				output: { item: 'minecraft:stone_sword' }
			},
			{
				start_item: { item: 'minecraft:stone_pickaxe' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:stone_shovel' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_shovel' }
			},
			{
				start_item: { item: 'minecraft:stone_hoe' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_hoe' }
			},
			{
				start_item: { item: 'minecraft:stone_axe' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_axe' }
			},
			{
				start_item: { item: 'minecraft:stone_sword' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_sword' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_sword' }
			},
			{
				start_item: { item: 'minecraft:golden_pickaxe' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:golden_shovel' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_shovel' }
			},
			{
				start_item: { item: 'minecraft:golden_hoe' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_hoe' }
			},
			{
				start_item: { item: 'minecraft:golden_axe' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_axe' }
			},
			{
				start_item: { item: 'minecraft:golden_sword' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_sword' }
			},
			{
				start_item: { item: 'woodenutilities:wooden_helmet' },
				input: { tag: 'forge:chains' },
				output: { item: 'minecraft:chainmail_helmet' }
			},
			{
				start_item: { item: 'woodenutilities:wooden_chestplate' },
				input: { tag: 'forge:chains' },
				output: { item: 'minecraft:chainmail_chestplate' }
			},
			{
				start_item: { item: 'woodenutilities:wooden_leggings' },
				input: { tag: 'forge:chains' },
				output: { item: 'minecraft:chainmail_leggings' }
			},
			{
				start_item: { item: 'woodenutilities:wooden_boot' },
				input: { tag: 'forge:chains' },
				output: { item: 'minecraft:chainmail_boots' }
			},
			{
				start_item: { item: 'minecraft:chainmail_helmet' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_helmet' }
			},
			{
				start_item: { item: 'minecraft:chainmail_chestplate' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_chestplate' }
			},
			{
				start_item: { item: 'minecraft:chainmail_leggings' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_leggings' }
			},
			{
				start_item: { item: 'minecraft:chainmail_boots' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_chestplate' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_leggings' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_boots' }
			},
			{
				start_item: { item: 'minecraft:golden_helmet' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_helmet' }
			},
			{
				start_item: { item: 'minecraft:golden_chestplate' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_chestplate' }
			},
			{
				start_item: { item: 'minecraft:golden_leggings' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_leggings' }
			},
			{
				start_item: { item: 'minecraft:golden_boots' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_boots' }
			},
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { tag: 'forge:ingots/netherite' },
				output: { item: 'minecraft:netherite_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:diamond_shovel' },
				input: { tag: 'forge:ingots/netherite' },
				output: { item: 'minecraft:netherite_shovel' }
			},
			{
				start_item: { item: 'minecraft:diamond_hoe' },
				input: { tag: 'forge:ingots/netherite' },
				output: { item: 'minecraft:netherite_hoe' }
			},
			{
				start_item: { item: 'minecraft:diamond_axe' },
				input: { tag: 'forge:ingots/netherite' },
				output: { item: 'minecraft:netherite_axe' }
			},
			{
				start_item: { item: 'minecraft:diamond_sword' },
				input: { tag: 'forge:ingots/netherite' },
				output: { item: 'minecraft:netherite_sword' }
			},
			{
				start_item: { item: 'woodenutilities:wooden_shears' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:shears' }
			},
			{
				start_item: { item: 'woodenutilities:wooden_horse_armor' },
				input: { tag: 'forge:ingots/iron' },
				output: { item: 'minecraft:iron_horse_armor' }
			},
			{
				start_item: { item: 'minecraft:iron_horse_armor' },
				input: { tag: 'forge:ingots/gold' },
				output: { item: 'minecraft:golden_horse_armor' }
			},
			{
				start_item: { item: 'minecraft:golden_horse_armor' },
				input: { tag: 'forge:gems/diamond' },
				output: { item: 'minecraft:diamond_horse_armor' }
			},
			//Mystical Agriculture Pickaxe
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: { item: 'mysticalagriculture:inferium_pickaxe' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_pickaxe' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_pickaxe' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_pickaxe' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_pickaxe' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_pickaxe' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_pickaxe' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_pickaxe' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_pickaxe' }
			},
			//Mystical Agriculture Axe
			{
				start_item: { item: 'minecraft:diamond_axe' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: {
					item: 'mysticalagriculture:inferium_axe', id: 'botania:elven_trade/inferium_axe'
				}
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_axe' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_axe' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_axe' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_axe' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_axe' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_axe' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_axe' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_axe' }
			},
			//Mystical Agriculture Sword
			{
				start_item: { item: 'minecraft:diamond_sword' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: { item: 'mysticalagriculture:inferium_sword' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_sword' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_sword' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_sword' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_sword' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_sword' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_sword' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_sword' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_sword' }
			},
			//Mystical Agriculture Hoe
			{
				start_item: { item: 'minecraft:diamond_hoe' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: { item: 'mysticalagriculture:inferium_hoe' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_hoe' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_hoe' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_hoe' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_hoe' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_hoe' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_hoe' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_hoe' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_hoe' }
			},
			//Mystical Agriculture Shovel
			{
				start_item: { item: 'minecraft:diamond_shovel' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: { item: 'mysticalagriculture:inferium_shovel' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_shovel' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_shovel' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_shovel' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_shovel' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_shovel' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_shovel' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_shovel' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_shovel' }
			},
			//Mystical Agriculture Chestplates
			{
				start_item: { item: 'minecraft:diamond_chestplate' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: { item: 'mysticalagriculture:inferium_chestplate' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_chestplate' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_chestplate' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_chestplate' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_chestplate' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_chestplate' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_chestplate' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_chestplate' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_chestplate' }
			},
			//Mystical Agriculture Helmets
			{
				start_item: { item: 'minecraft:diamond_helmet' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: { item: 'mysticalagriculture:inferium_helmet' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_helmet' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_helmet' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_helmet' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_helmet' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_helmet' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_helmet' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_helmet' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_helmet' }
			},
			//Mystical Agriculture Leggings
			{
				start_item: { item: 'minecraft:diamond_leggings' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: { item: 'mysticalagriculture:inferium_leggings' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_leggings' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_leggings' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_leggings' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_leggings' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_leggings' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_leggings' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_leggings' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_leggings' }
			},
			//Mystical Agriculture Boots
			{
				start_item: { item: 'minecraft:diamond_boots' },
				input: { item: 'mysticalagriculture:inferium_gemstone' },
				output: { item: 'mysticalagriculture:inferium_boots' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_boots' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_boots' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_boots' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_boots' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_boots' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_boots' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_boots' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_boots' }
			},
			//Mystical Agriculture Furnace
			{
				start_item: { tag: 'forge:furnace' },
				input: { item: 'mysticalagriculture:inferium_block' },
				output: { item: 'mysticalagriculture:inferium_furnace' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_furnace' },
				input: { item: 'mysticalagriculture:prudentium_block' },
				output: { item: 'mysticalagriculture:prudentium_furnace' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_furnace' },
				input: { item: 'mysticalagriculture:tertium_block' },
				output: { item: 'mysticalagriculture:tertium_furnace' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_furnace' },
				input: { item: 'mysticalagriculture:imperium_block' },
				output: { item: 'mysticalagriculture:imperium_furnace' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_furnace' },
				input: { item: 'mysticalagriculture:supremium_block' },
				output: { item: 'mysticalagriculture:supremium_furnace' }
			},
			//Mystical Agriculture Seed Reprocessor
			{
				start_item: { item: 'mysticalagriculture:basic_reprocessor' },
				input: { item: 'mysticalagriculture:inferium_block' },
				output: { item: 'mysticalagriculture:inferium_reprocessor' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_reprocessor' },
				input: { item: 'mysticalagriculture:prudentium_block' },
				output: { item: 'mysticalagriculture:prudentium_reprocessor' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_reprocessor' },
				input: { item: 'mysticalagriculture:tertium_block' },
				output: { item: 'mysticalagriculture:tertium_reprocessor' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_reprocessor' },
				input: { item: 'mysticalagriculture:imperium_block' },
				output: { item: 'mysticalagriculture:imperium_reprocessor' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_reprocessor' },
				input: { item: 'mysticalagriculture:supremium_block' },
				output: { item: 'mysticalagriculture:supremium_reprocessor' }
			},
			//Mystical Agriculture Watering Can
			{
				start_item: { item: 'mysticalagriculture:mystical_fertilizer' },
				input: { item: 'mysticalagriculture:watering_can' },
				output: { item: 'mysticalagriculture:inferium_watering_can' }
			},
			{
				start_item: { item: 'mysticalagriculture:inferium_watering_can' },
				input: { item: 'mysticalagriculture:prudentium_gemstone' },
				output: { item: 'mysticalagriculture:prudentium_watering_can' }
			},
			{
				start_item: { item: 'mysticalagriculture:prudentium_watering_can' },
				input: { item: 'mysticalagriculture:tertium_gemstone' },
				output: { item: 'mysticalagriculture:tertium_watering_can' }
			},
			{
				start_item: { item: 'mysticalagriculture:tertium_watering_can' },
				input: { item: 'mysticalagriculture:imperium_gemstone' },
				output: { item: 'mysticalagriculture:imperium_watering_can' }
			},
			{
				start_item: { item: 'mysticalagriculture:imperium_watering_can' },
				input: { item: 'mysticalagriculture:supremium_gemstone' },
				output: { item: 'mysticalagriculture:supremium_watering_can' }
			},
			//Nature's Compass
			{
				start_item: { item: 'minecraft:compass' },
				input: { tag: 'minecraft:saplings' },
				output: { item: 'naturescompass:naturescompass' }
			},
			//Nature's Aura
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_axe' }
			},
			{
				start_item: { item: 'minecraft:diamond_axe' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_sword' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_sword' }
			},
			{
				start_item: { item: 'minecraft:diamond_sword' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_sword' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_hoe' }
			},
			{
				start_item: { item: 'minecraft:diamond_hoe' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_chest' }
			},
			{
				start_item: { item: 'minecraft:diamond_chestplate' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_chest' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_helmet' }
			},
			{
				start_item: { item: 'minecraft:diamond_helmet' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_pants' }
			},
			{
				start_item: { item: 'minecraft:diamond_leggings' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_pants' }
			},
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_shoes' }
			},
			{
				start_item: { item: 'minecraft:diamond_boots' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_shoes' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_shovel' }
			},
			{
				start_item: { item: 'minecraft:diamond_shovel' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { item: 'naturesaura:infused_iron' },
				output: { item: 'naturesaura:infused_iron_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { item: 'naturesaura:sky_ingot' },
				output: { item: 'naturesaura:sky_pickaxe' }
			},
			//Occultism
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { tag: 'forge:ingots/iesnium' },
				output: { item: 'occultism:iesnium_pickaxe' }
			},
			//Pneumaticcraft
			{
				start_item: { item: 'minecraft:iron_boots' },
				input: { item: 'kubejs:compressed_iron_plate' },
				output: { item: 'pneumaticcraft:compressed_iron_boots' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { item: 'kubejs:compressed_iron_plate' },
				output: { item: 'pneumaticcraft:compressed_iron_leggings' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { item: 'kubejs:compressed_iron_plate' },
				output: { item: 'pneumaticcraft:compressed_iron_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { item: 'kubejs:compressed_iron_plate' },
				output: { item: 'pneumaticcraft:compressed_iron_chestplate' }
			},
			//Wooden Utilities
			{
				start_item: { item: 'minecraft:leather_horse_armor' },
				input: { tag: 'forge:plates/wooden' },
				output: { item: 'woodenutilities:wooden_horse_armor' }
			},
			{
				start_item: { item: 'minecraft:leather_helmet' },
				input: { tag: 'forge:plates/wooden' },
				output: { item: 'woodenutilities:wooden_helmet' }
			},
			{
				start_item: { item: 'minecraft:leather_chestplate' },
				input: { tag: 'forge:plates/wooden' },
				output: { item: 'woodenutilities:wooden_chestplate' }
			},
			{
				start_item: { item: 'minecraft:leather_leggings' },
				input: { tag: 'forge:plates/wooden' },
				output: { item: 'woodenutilities:wooden_leggings' }
			},
			{
				start_item: { item: 'minecraft:leather_boots' },
				input: { tag: 'forge:plates/wooden' },
				output: { item: 'woodenutilities:wooden_boot' }
			},
			//Undergrden
			{
				start_item: { item: 'minecraft:stone_pickaxe' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:iron_pickaxe' },
				input: { tag: 'forge:ingots/froststeel' },
				output: { item: 'undergarden:froststeel_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:diamond_pickaxe' },
				input: { tag: 'forge:ingots/utherium' },
				output: { item: 'undergarden:utheric_pickaxe' }
			},
			{
				start_item: { item: 'minecraft:stone_hoe' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:ingots/froststeel' },
				output: { item: 'undergarden:froststeel_hoe' }
			},
			{
				start_item: { item: 'minecraft:diamond_hoe' },
				input: { tag: 'forge:ingots/utherium' },
				output: { item: 'undergarden:utheric_hoe' }
			},
			{
				start_item: { item: 'minecraft:stone_sword' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_sword' }
			},
			{
				start_item: { item: 'minecraft:iron_hoe' },
				input: { tag: 'forge:ingots/froststeel' },
				output: { item: 'undergarden:froststeel_hoe' }
			},
			{
				start_item: { item: 'minecraft:diamond_hoe' },
				input: { tag: 'forge:ingots/utherium' },
				output: { item: 'undergarden:utheric_hoe' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_chestplate' }
			},
			{
				start_item: { item: 'minecraft:iron_chestplate' },
				input: { tag: 'forge:ingots/froststeel' },
				output: { item: 'undergarden:froststeel_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { tag: 'forge:ingots/utherium' },
				output: { item: 'undergarden:utheric_chestplate' }
			},
			{
				start_item: { item: 'minecraft:netherite_chestplate' },
				input: { item: 'undergarden:masticator_scales' },
				output: { item: 'undergarden:utheric_chestplate' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_helmet' },
				input: { tag: 'forge:ingots/froststeel' },
				output: { item: 'undergarden:froststeel_helmet' }
			},
			{
				start_item: { item: 'minecraft:netherite_helmet' },
				input: { tag: 'forge:ingots/utherium' },
				output: { item: 'undergarden:utheric_helmet' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_leggings' }
			},
			{
				start_item: { item: 'minecraft:iron_leggings' },
				input: { tag: 'forge:ingots/froststeel' },
				output: { item: 'undergarden:froststeel_leggings' }
			},
			{
				start_item: { item: 'minecraft:netherite_boots' },
				input: { tag: 'forge:ingots/utherium' },
				output: { item: 'undergarden:utheric_boots' }
			},
			{
				start_item: { tag: 'minecraft:planks' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_shield' }
			},
			{
				start_item: { item: 'minecraft:stone_axe' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_axe' }
			},
			{
				start_item: { item: 'minecraft:iron_axe' },
				input: { tag: 'forge:ingots/froststeel' },
				output: { item: 'undergarden:froststeel_axe' }
			},
			{
				start_item: { item: 'minecraft:diamond_axe' },
				input: { tag: 'forge:ingots/utherium' },
				output: { item: 'undergarden:utheric_axe' }
			},
			{
				start_item: { item: 'minecraft:stone_shovel' },
				input: { tag: 'forge:ingots/cloggrum' },
				output: { item: 'undergarden:cloggrum_shovel' }
			},
			{
				start_item: { item: 'minecraft:iron_shovel' },
				input: { tag: 'forge:ingots/froststeel' },
				output: { item: 'undergarden:froststeel_shovel' }
			},
			{
				start_item: { item: 'minecraft:diamond_shovel' },
				input: { tag: 'forge:ingots/utherium' },
				output: { item: 'undergarden:utheric_shovel' }
			}
		]
	}

	data.recipes.forEach(recipe => {
		const re = {
			type: 'naturesaura:offering',
			input: recipe.input,
			start_item: recipe.start_item,
			output: recipe.output
		}

		if (recipe.id) re.id(recipe.id)

		event.custom(re)
	})
})
