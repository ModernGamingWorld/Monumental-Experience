onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { tag: 'botania:livingwood' }],
            output: {
                item: 'aiotbotania:livingwood_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'botania:livingrock' }],
            output: {
                item: 'aiotbotania:livingrock_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/neptunium' }],
            output: {
                item: 'aquaculture:neptunium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/manasteel' }],
            output: {
                item: 'botania:manasteel_pick'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/elementium' }],
            output: {
                item: 'botania:elementium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/steel' }],
            output: {
                item: 'immersiveengineering:pickaxe_steel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { item: 'naturesaura:infused_iron' }],
            output: {
                item: 'naturesaura:infused_iron_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { item: 'naturesaura:sky_ingot' }],
            output: {
                item: 'naturesaura:sky_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:ingots/cloggrum' }],
            output: {
                item: 'undergarden:cloggrum_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/froststeel' }],
            output: {
                item: 'undergarden:froststeel_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/utherium' }],
            output: {
                item: 'undergarden:utheric_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/iesnium' }],
            output: {
                item: 'occultism:iesnium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'twilightforest:giant_cobblestone' }, { item: 'twilightforest:giant_log' }],
            output: {
                item: 'twilightforest:giant_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/knightmetal' }],
            output: {
                item: 'twilightforest:knightmetal_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/steeleaf' }],
            output: {
                item: 'twilightforest:steeleaf_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/fiery' }],
            output: {
                item: 'twilightforest:fiery_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/ironwood' }],
            output: {
                item: 'twilightforest:ironwood_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:gems/psigem' }],
            output: {
                item: 'psi:psimetal_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/dragonsteel_lightning' }],
            output: {
                item: 'iceandfire:dragonsteel_lightning_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/dragonsteel_ice' }],
            output: {
                item: 'iceandfire:dragonsteel_ice_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/dragonsteel_fire' }],
            output: {
                item: 'iceandfire:dragonsteel_fire_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { item: 'iceandfire:myrmex_jungle_chitin' }],
            output: {
                item: 'iceandfire:myrmex_jungle_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { item: 'iceandfire:myrmex_desert_chitin' }],
            output: {
                item: 'iceandfire:myrmex_desert_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:bones/dragon' }],
            output: {
                item: 'iceandfire:dragonbone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:rods/wooden' }],
            output: {
                item: 'atum:limestone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { item: 'gobber2:gobber2_ingot_end' }],
            output: {
                item: 'gobber2:gobber2_pickaxe_end'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { item: 'gobber2:gobber2_ingot_nether' }],
            output: {
                item: 'gobber2:gobber2_pickaxe_nether'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { item: 'gobber2:gobber2_ingot' }],
            output: {
                item: 'gobber2:gobber2_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'blue_skies:ingots/horizonite' }],
            output: {
                item: 'blue_skies:horizonite_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'blue_skies:gems/charoite' }],
            output: {
                item: 'blue_skies:charoite_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'blue_skies:gems/diopside' }],
            output: {
                item: 'blue_skies:diopside_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'blue_skies:gems/aquite' }],
            output: {
                item: 'blue_skies:aquite_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'blue_skies:gems/pyrope' }],
            output: {
                item: 'blue_skies:pyrope_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { item: 'blue_skies:lunar_cobblestone' }],
            output: {
                item: 'blue_skies:lunar_stone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { item: 'blue_skies:turquoise_cobblestone' }],
            output: {
                item: 'blue_skies:turquoise_stone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { item: 'blue_skies:cherry_planks' }],
            output: {
                item: 'blue_skies:cherry_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { item: 'blue_skies:maple_planks' }],
            output: {
                item: 'blue_skies:maple_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { item: 'blue_skies:frostbright_planks' }],
            output: {
                item: 'blue_skies:frostbright_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { item: 'blue_skies:dusk_planks' }],
            output: {
                item: 'blue_skies:dusk_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { item: 'blue_skies:starlit_planks' }],
            output: {
                item: 'blue_skies:starlit_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { item: 'blue_skies:lunar_planks' }],
            output: {
                item: 'blue_skies:lunar_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { item: 'blue_skies:bluebright_planks' }],
            output: {
                item: 'blue_skies:bluebright_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:gems/certus_quartz' }],
            output: {
                item: 'appliedenergistics2:certus_quartz_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:gems/quartz' }],
            output: {
                item: 'appliedenergistics2:nether_quartz_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:bone_block' }],
            output: {
                item: 'forbidden_arcanus:bone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:ingots/obsidian' }],
            output: {
                item: 'forbidden_arcanus:obsidian_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { item: 'forbidden_arcanus:edelwood_stick' }],
            output: {
                item: 'forbidden_arcanus:reinforced_arcane_golden_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/arcane_gold' }],
            output: {
                item: 'forbidden_arcanus:arcane_golden_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:gems/moonstone' }],
            output: {
                item: 'druidcraft:moonstone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:bones' }],
            output: {
                item: 'druidcraft:bone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:netherbricks' }],
            output: {
                item: 'cyclic:netherbrick_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:sandstone' }],
            output: {
                item: 'cyclic:sandstone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { tag: 'forge:gems/emerald' }],
            output: {
                item: 'cyclic:emerald_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:gems/diamond' }],
            output: {
                item: 'cyclic:crystal_pickaxe'
            }
        },
        {
            inputs: [{ item: 'doom:argent_energy' }, { tag: 'forge:rods/wooden' }],
            output: {
                item: 'doom:argent_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:rods/wooden' }],
            output: {
                item: 'atum:limestone_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { item: 'mysticalagriculture:inferium_gemstone' }],
            output: {
                item: 'mysticalagriculture:inferium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:inferium_pickaxe' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
            output: {
                item: 'mysticalagriculture:prudentium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:prudentium_pickaxe' }, { item: 'mysticalagriculture:tertium_gemstone' }],
            output: {
                item: 'mysticalagriculture:tertium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:tertium_pickaxe' }, { item: 'mysticalagriculture:imperium_gemstone' }],
            output: {
                item: 'mysticalagriculture:imperium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:imperium_pickaxe' }, { item: 'mysticalagriculture:supremium_gemstone' }],
            output: {
                item: 'mysticalagriculture:supremium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { tag: 'botania:livingwood' }],
            output: {
                item: 'aiotbotania:livingwood_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'botania:livingrock' }],
            output: {
                item: 'aiotbotania:livingrock_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/neptunium' }],
            output: {
                item: 'aquaculture:neptunium_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/manasteel' }],
            output: {
                item: 'botania:manasteel_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/elementium' }],
            output: {
                item: 'botania:elementium_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/steel' }],
            output: {
                item: 'immersiveengineering:axe_steel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { item: 'naturesaura:infused_iron' }],
            output: {
                item: 'naturesaura:infused_iron_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { item: 'naturesaura:sky_ingot' }],
            output: {
                item: 'naturesaura:sky_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:ingots/cloggrum' }],
            output: {
                item: 'undergarden:cloggrum_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/froststeel' }],
            output: {
                item: 'undergarden:froststeel_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:ingots/utherium' }],
            output: {
                item: 'undergarden:utheric_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:gems/certus_quartz' }],
            output: {
                item: 'appliedenergistics2:certus_quartz_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:gems/quartz' }],
            output: {
                item: 'appliedenergistics2:nether_quartz_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'blue_skies:ingots/horizonite' }],
            output: {
                item: 'blue_skies:horizonite_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'blue_skies:gems/charoite' }],
            output: {
                item: 'blue_skies:charoite_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'blue_skies:gems/diopside' }],
            output: {
                item: 'blue_skies:diopside_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'blue_skies:gems/aquite' }],
            output: {
                item: 'blue_skies:aquite_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'blue_skies:gems/pyrope' }],
            output: {
                item: 'blue_skies:pyrope_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_axe' }, { item: 'blue_skies:lunar_cobblestone' }],
            output: {
                item: 'blue_skies:lunar_stone_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_axe' }, { item: 'blue_skies:turquoise_cobblestone' }],
            output: {
                item: 'blue_skies:turquoise_stone_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { item: 'blue_skies:cherry_planks' }],
            output: {
                item: 'blue_skies:cherry_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { item: 'blue_skies:maple_planks' }],
            output: {
                item: 'blue_skies:maple_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { item: 'blue_skies:frostbright_planks' }],
            output: {
                item: 'blue_skies:frostbright_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { item: 'blue_skies:dusk_planks' }],
            output: {
                item: 'blue_skies:dusk_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { item: 'blue_skies:starlit_planks' }],
            output: {
                item: 'blue_skies:starlit_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { item: 'blue_skies:lunar_planks' }],
            output: {
                item: 'blue_skies:lunar_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { item: 'blue_skies:bluebright_planks' }],
            output: {
                item: 'blue_skies:bluebright_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:netherbricks' }],
            output: {
                item: 'cyclic:netherbrick_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:sandstone' }],
            output: {
                item: 'cyclic:sandstone_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:gems/emerald' }],
            output: {
                item: 'cyclic:emerald_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:gems/diamond' }],
            output: {
                item: 'cyclic:crystal_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:gems/moonstone' }],
            output: {
                item: 'druidcraft:moonstone_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:bones' }],
            output: {
                item: 'druidcraft:bone_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:bone_block' }],
            output: {
                item: 'forbidden_arcanus:bone_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:ingots/obsidian' }],
            output: {
                item: 'forbidden_arcanus:obsidian_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'forbidden_arcanus:edelwood_stick' }],
            output: {
                item: 'forbidden_arcanus:reinforced_arcane_golden_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/arcane_gold' }],
            output: {
                item: 'forbidden_arcanus:arcane_golden_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'gobber2:gobber2_ingot_end' }],
            output: {
                item: 'gobber2:gobber2_axe_end'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'gobber2:gobber2_ingot_nether' }],
            output: {
                item: 'gobber2:gobber2_axe_nether'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { item: 'gobber2:gobber2_ingot' }],
            output: {
                item: 'gobber2:gobber2_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:gems/psigem' }],
            output: {
                item: 'psi:psimetal_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/dragonsteel_lightning' }],
            output: {
                item: 'iceandfire:dragonsteel_lightning_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/dragonsteel_ice' }],
            output: {
                item: 'iceandfire:dragonsteel_ice_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/dragonsteel_fire' }],
            output: {
                item: 'iceandfire:dragonsteel_fire_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { item: 'iceandfire:myrmex_jungle_chitin' }],
            output: {
                item: 'iceandfire:myrmex_jungle_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { item: 'iceandfire:myrmex_desert_chitin' }],
            output: {
                item: 'iceandfire:myrmex_desert_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:bones/dragon' }],
            output: {
                item: 'iceandfire:dragonbone_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { item: 'mysticalagriculture:inferium_gemstone' }],
            output: {
                item: 'mysticalagriculture:inferium_axe'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:inferium_axe' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
            output: {
                item: 'mysticalagriculture:prudentium_axe'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:prudentium_axe' }, { item: 'mysticalagriculture:tertium_gemstone' }],
            output: {
                item: 'mysticalagriculture:tertium_axe'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:tertium_axe' }, { item: 'mysticalagriculture:imperium_gemstone' }],
            output: {
                item: 'mysticalagriculture:imperium_axe'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:imperium_axe' }, { item: 'mysticalagriculture:supremium_gemstone' }],
            output: {
                item: 'mysticalagriculture:supremium_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/ironwood' }],
            output: {
                item: 'twilightforest:ironwood_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:ingots/steeleaf' }],
            output: {
                item: 'twilightforest:steeleaf_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_axe' }, { tag: 'forge:ingots/knightmetal' }],
            output: {
                item: 'twilightforest:knightmetal_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_axe' }, { tag: 'forge:stone' }],
            output: {
                item: 'minecraft:stone_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_axe' }, { tag: 'forge:ingots/gold' }],
            output: {
                item: 'minecraft:golden_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_axe' }, { tag: 'forge:ingots/iron' }],
            output: {
                item: 'minecraft:iron_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_axe' }, { tag: 'forge:ingots/netherite' }],
            output: {
                item: 'minecraft:netherite_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { tag: 'forge:stone' }],
            output: {
                item: 'minecraft:stone_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/gold' }],
            output: {
                item: 'minecraft:golden_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:ingots/iron' }],
            output: {
                item: 'minecraft:iron_axe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:ingots/netherite' }],
            output: {
                item: 'minecraft:netherite_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { tag: 'botania:livingwood' }],
            output: {
                item: 'aiotbotania:livingwood_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'botania:livingrock' }],
            output: {
                item: 'aiotbotania:livingrock_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/neptunium' }],
            output: {
                item: 'aquaculture:neptunium_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/manasteel' }],
            output: {
                item: 'botania:manasteel_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/elementium' }],
            output: {
                item: 'botania:elementium_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/steel' }],
            output: {
                item: 'immersiveengineering:shovel_steel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { item: 'naturesaura:infused_iron' }],
            output: {
                item: 'naturesaura:infused_iron_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { item: 'naturesaura:sky_ingot' }],
            output: {
                item: 'naturesaura:sky_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:ingots/cloggrum' }],
            output: {
                item: 'undergarden:cloggrum_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/froststeel' }],
            output: {
                item: 'undergarden:froststeel_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:ingots/utherium' }],
            output: {
                item: 'undergarden:utheric_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:gems/certus_quartz' }],
            output: {
                item: 'appliedenergistics2:certus_quartz_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:gems/quartz' }],
            output: {
                item: 'appliedenergistics2:nether_quartz_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'blue_skies:ingots/horizonite' }],
            output: {
                item: 'blue_skies:horizonite_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'blue_skies:gems/charoite' }],
            output: {
                item: 'blue_skies:charoite_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'blue_skies:gems/diopside' }],
            output: {
                item: 'blue_skies:diopside_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'blue_skies:gems/aquite' }],
            output: {
                item: 'blue_skies:aquite_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'blue_skies:gems/pyrope' }],
            output: {
                item: 'blue_skies:pyrope_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_shovel' }, { item: 'blue_skies:lunar_cobblestone' }],
            output: {
                item: 'blue_skies:lunar_stone_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_shovel' }, { item: 'blue_skies:turquoise_cobblestone' }],
            output: {
                item: 'blue_skies:turquoise_stone_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { item: 'blue_skies:cherry_planks' }],
            output: {
                item: 'blue_skies:cherry_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { item: 'blue_skies:maple_planks' }],
            output: {
                item: 'blue_skies:maple_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { item: 'blue_skies:frostbright_planks' }],
            output: {
                item: 'blue_skies:frostbright_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { item: 'blue_skies:dusk_planks' }],
            output: {
                item: 'blue_skies:dusk_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { item: 'blue_skies:starlit_planks' }],
            output: {
                item: 'blue_skies:starlit_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { item: 'blue_skies:lunar_planks' }],
            output: {
                item: 'blue_skies:lunar_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_shovel' }, { item: 'blue_skies:bluebright_planks' }],
            output: {
                item: 'blue_skies:bluebright_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:netherbricks' }],
            output: {
                item: 'cyclic:netherbrick_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:sandstone' }],
            output: {
                item: 'cyclic:sandstone_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:gems/emerald' }],
            output: {
                item: 'cyclic:emerald_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:gems/diamond' }],
            output: {
                item: 'cyclic:crystal_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:gems/moonstone' }],
            output: {
                item: 'druidcraft:moonstone_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:bones' }],
            output: {
                item: 'druidcraft:bone_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_shovel' }, { tag: 'forge:bone_block' }],
            output: {
                item: 'forbidden_arcanus:bone_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:ingots/obsidian' }],
            output: {
                item: 'forbidden_arcanus:obsidian_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'forbidden_arcanus:edelwood_stick' }],
            output: {
                item: 'forbidden_arcanus:reinforced_arcane_golden_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/arcane_gold' }],
            output: {
                item: 'forbidden_arcanus:arcane_golden_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_ingot_end' }],
            output: {
                item: 'gobber2:gobber2_shovel_end'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_rod_end' }],
            output: {
                item: 'gobber2:gobber2_excavator_end'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_ingot_nether' }],
            output: {
                item: 'gobber2:gobber2_shovel_nether'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_rod_nether' }],
            output: {
                item: 'gobber2:gobber2_excavator_nether'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_ingot' }],
            output: {
                item: 'gobber2:gobber2_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { item: 'gobber2:gobber2_rod' }],
            output: {
                item: 'gobber2:gobber2_excavator'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:gems/psigem' }],
            output: {
                item: 'psi:psimetal_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/dragonsteel_lightning' }],
            output: {
                item: 'iceandfire:dragonsteel_lightning_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/dragonsteel_ice' }],
            output: {
                item: 'iceandfire:dragonsteel_ice_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:ingots/dragonsteel_fire' }],
            output: {
                item: 'iceandfire:dragonsteel_fire_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { item: 'iceandfire:myrmex_jungle_chitin' }],
            output: {
                item: 'iceandfire:myrmex_jungle_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { item: 'iceandfire:myrmex_desert_chitin' }],
            output: {
                item: 'iceandfire:myrmex_desert_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_shovel' }, { tag: 'forge:bones/dragon' }],
            output: {
                item: 'iceandfire:dragonbone_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { item: 'mysticalagriculture:inferium_gemstone' }],
            output: {
                item: 'mysticalagriculture:inferium_shovel'
            }
        },
        {
            inputs: [{ item: 'mysticalagriculture:inferium_shovel' }, { item: 'mysticalagriculture:prudentium_gemstone' }],
            output: {
                item: 'mysticalagriculture:prudentium_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_shovel' }, { tag: 'forge:ingots/ironwood' }],
            output: {
                item: 'twilightforest:ironwood_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:ingots/steeleaf' }],
            output: {
                item: 'twilightforest:steeleaf_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_hoe' }, { tag: 'botania:livingwood' }],
            output: {
                item: 'aiotbotania:livingwood_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'botania:livingrock' }],
            output: {
                item: 'aiotbotania:livingrock_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:ingots/neptunium' }],
            output: {
                item: 'aquaculture:neptunium_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/manasteel' }],
            output: {
                item: 'botania:manasteel_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/elementium' }],
            output: {
                item: 'botania:elementium_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/steel' }],
            output: {
                item: 'immersiveengineering:hoe_steel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { item: 'naturesaura:infused_iron' }],
            output: {
                item: 'naturesaura:infused_iron_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_hoe' }, { item: 'naturesaura:sky_ingot' }],
            output: {
                item: 'naturesaura:sky_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'forge:ingots/cloggrum' }],
            output: {
                item: 'undergarden:cloggrum_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/froststeel' }],
            output: {
                item: 'undergarden:froststeel_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'forge:ingots/utherium' }],
            output: {
                item: 'undergarden:utheric_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:gems/certus_quartz' }],
            output: {
                item: 'appliedenergistics2:certus_quartz_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:gems/quartz' }],
            output: {
                item: 'appliedenergistics2:nether_quartz_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'blue_skies:ingots/horizonite' }],
            output: {
                item: 'blue_skies:horizonite_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'blue_skies:gems/charoite' }],
            output: {
                item: 'blue_skies:charoite_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'blue_skies:gems/diopside' }],
            output: {
                item: 'blue_skies:diopside_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'blue_skies:gems/aquite' }],
            output: {
                item: 'blue_skies:aquite_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'blue_skies:gems/pyrope' }],
            output: {
                item: 'blue_skies:pyrope_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_hoe' }, { item: 'blue_skies:lunar_cobblestone' }],
            output: {
                item: 'blue_skies:lunar_stone_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_hoe' }, { item: 'blue_skies:turquoise_cobblestone' }],
            output: {
                item: 'blue_skies:turquoise_stone_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_hoe' }, { item: 'blue_skies:cherry_planks' }],
            output: {
                item: 'blue_skies:cherry_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_hoe' }, { item: 'blue_skies:maple_planks' }],
            output: {
                item: 'blue_skies:maple_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_hoe' }, { item: 'blue_skies:frostbright_planks' }],
            output: {
                item: 'blue_skies:frostbright_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_hoe' }, { item: 'blue_skies:dusk_planks' }],
            output: {
                item: 'blue_skies:dusk_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_hoe' }, { item: 'blue_skies:starlit_planks' }],
            output: {
                item: 'blue_skies:starlit_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_hoe' }, { item: 'blue_skies:lunar_planks' }],
            output: {
                item: 'blue_skies:lunar_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_hoe' }, { item: 'blue_skies:bluebright_planks' }],
            output: {
                item: 'blue_skies:bluebright_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:netherbricks' }],
            output: {
                item: 'cyclic:netherbrick_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'forge:sandstone' }],
            output: {
                item: 'cyclic:sandstone_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'forge:gems/emerald' }],
            output: {
                item: 'cyclic:emerald_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:gems/diamond' }],
            output: {
                item: 'cyclic:crystal_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:gems/moonstone' }],
            output: {
                item: 'druidcraft:moonstone_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'forge:bones' }],
            output: {
                item: 'druidcraft:bone_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_hoe' }, { tag: 'forge:bone_block' }],
            output: {
                item: 'forbidden_arcanus:bone_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'forge:ingots/obsidian' }],
            output: {
                item: 'forbidden_arcanus:obsidian_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { item: 'forbidden_arcanus:edelwood_stick' }],
            output: {
                item: 'forbidden_arcanus:reinforced_arcane_golden_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:ingots/arcane_gold' }],
            output: {
                item: 'forbidden_arcanus:arcane_golden_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { item: 'gobber2:gobber2_ingot_end' }],
            output: {
                item: 'gobber2:gobber2_hoe_end'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { item: 'gobber2:gobber2_ingot_nether' }],
            output: {
                item: 'gobber2:gobber2_hoe_nether'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { item: 'gobber2:gobber2_ingot' }],
            output: {
                item: 'gobber2:gobber2_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:ingots/dragonsteel_lightning' }],
            output: {
                item: 'iceandfire:dragonsteel_lightning_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:ingots/dragonsteel_ice' }],
            output: {
                item: 'iceandfire:dragonsteel_ice_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:ingots/dragonsteel_fire' }],
            output: {
                item: 'iceandfire:dragonsteel_fire_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { item: 'iceandfire:myrmex_jungle_chitin' }],
            output: {
                item: 'iceandfire:myrmex_jungle_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { item: 'iceandfire:myrmex_desert_chitin' }],
            output: {
                item: 'iceandfire:myrmex_desert_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:bones/dragon' }],
            output: {
                item: 'iceandfire:dragonbone_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { item: 'mysticalagriculture:inferium_gemstone' }],
            output: {
                item: 'mysticalagriculture:inferium_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_hoe' }, { tag: 'forge:ingots/ironwood' }],
            output: {
                item: 'twilightforest:ironwood_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_shovel' }, { tag: 'forge:ingots/steeleaf' }],
            output: {
                item: 'twilightforest:steeleaf_shovel'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_hoe' }, { item: 'atum:limestone_cracked' }],
            output: {
                item: 'atum:limestone_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_hoe' }, { tag: 'forge:ingots/terrasteel' }],
            output: {
                item: 'aiotbotania:terra_hoe'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_sword' }, { tag: 'botania:livingwood' }],
            output: {
                item: 'aiotbotania:livingwood_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'botania:livingrock' }],
            output: {
                item: 'aiotbotania:livingrock_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/neptunium' }],
            output: {
                item: 'aquaculture:neptunium_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/manasteel' }],
            output: {
                item: 'botania:manasteel_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/elementium' }],
            output: {
                item: 'botania:elementium_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/steel' }],
            output: {
                item: 'immersiveengineering:sword_steel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { item: 'naturesaura:infused_iron' }],
            output: {
                item: 'naturesaura:infused_iron_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_sword' }, { item: 'naturesaura:sky_ingot' }],
            output: {
                item: 'naturesaura:sky_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:ingots/cloggrum' }],
            output: {
                item: 'undergarden:cloggrum_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/froststeel' }],
            output: {
                item: 'undergarden:froststeel_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_sword' }, { tag: 'forge:ingots/utherium' }],
            output: {
                item: 'undergarden:utheric_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:gems/certus_quartz' }],
            output: {
                item: 'appliedenergistics2:certus_quartz_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:gems/quartz' }],
            output: {
                item: 'appliedenergistics2:nether_quartz_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'blue_skies:ingots/horizonite' }],
            output: {
                item: 'blue_skies:horizonite_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_hoe' }, { tag: 'blue_skies:gems/charoite' }],
            output: {
                item: 'blue_skies:charoite_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'blue_skies:gems/diopside' }],
            output: {
                item: 'blue_skies:diopside_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'blue_skies:gems/aquite' }],
            output: {
                item: 'blue_skies:aquite_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'blue_skies:gems/pyrope' }],
            output: {
                item: 'blue_skies:pyrope_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { item: 'blue_skies:lunar_cobblestone' }],
            output: {
                item: 'blue_skies:lunar_stone_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { item: 'blue_skies:turquoise_cobblestone' }],
            output: {
                item: 'blue_skies:turquoise_stone_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_sword' }, { item: 'blue_skies:cherry_planks' }],
            output: {
                item: 'blue_skies:cherry_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_sword' }, { item: 'blue_skies:maple_planks' }],
            output: {
                item: 'blue_skies:maple_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_sword' }, { item: 'blue_skies:frostbright_planks' }],
            output: {
                item: 'blue_skies:frostbright_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_sword' }, { item: 'blue_skies:dusk_planks' }],
            output: {
                item: 'blue_skies:dusk_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_sword' }, { item: 'blue_skies:starlit_planks' }],
            output: {
                item: 'blue_skies:starlit_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_sword' }, { item: 'blue_skies:lunar_planks' }],
            output: {
                item: 'blue_skies:lunar_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_sword' }, { item: 'blue_skies:bluebright_planks' }],
            output: {
                item: 'blue_skies:bluebright_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:netherbricks' }],
            output: {
                item: 'cyclic:netherbrick_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:sandstone' }],
            output: {
                item: 'cyclic:sandstone_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_sword' }, { tag: 'forge:gems/emerald' }],
            output: {
                item: 'cyclic:emerald_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:gems/diamond' }],
            output: {
                item: 'cyclic:crystal_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:gems/moonstone' }],
            output: {
                item: 'druidcraft:moonstone_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:bones' }],
            output: {
                item: 'druidcraft:bone_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:bone_block' }],
            output: {
                item: 'forbidden_arcanus:bone_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_sword' }, { tag: 'forge:ingots/obsidian' }],
            output: {
                item: 'forbidden_arcanus:obsidian_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'forbidden_arcanus:edelwood_stick' }],
            output: {
                item: 'forbidden_arcanus:reinforced_arcane_golden_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/arcane_gold' }],
            output: {
                item: 'forbidden_arcanus:arcane_golden_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'gobber2:gobber2_ingot_end' }],
            output: {
                item: 'gobber2:gobber2_sword_end'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'gobber2:gobber2_ingot_nether' }],
            output: {
                item: 'gobber2:gobber2_sword_nether'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'gobber2:gobber2_ingot' }],
            output: {
                item: 'gobber2:gobber2_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_sword' }, { tag: 'forge:gems/psigem' }],
            output: {
                item: 'psi:psimetal_sword'
            }
        },
        {
            inputs: [{ item: 'iceandfire:dragonbone_sword' }, { item: 'iceandfire:lightning_dragon_blood' }],
            output: {
                item: 'iceandfire:dragonbone_sword_lightning'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/dragonsteel_lightning' }],
            output: {
                item: 'iceandfire:dragonsteel_lightning_sword'
            }
        },
        {
            inputs: [{ item: 'iceandfire:dragonbone_sword' }, { item: 'iceandfire:ice_dragon_blood' }],
            output: {
                item: 'iceandfire:dragonbone_sword_ice'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/dragonsteel_ice' }],
            output: {
                item: 'iceandfire:dragonsteel_ice_sword'
            }
        },
        {
            inputs: [{ item: 'iceandfire:dragonbone_sword' }, { item: 'iceandfire:fire_dragon_blood' }],
            output: {
                item: 'iceandfire:dragonbone_sword_fire'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/dragonsteel_fire' }],
            output: {
                item: 'iceandfire:dragonsteel_fire_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { item: 'iceandfire:myrmex_jungle_chitin' }],
            output: {
                item: 'iceandfire:myrmex_jungle_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { item: 'iceandfire:myrmex_desert_chitin' }],
            output: {
                item: 'iceandfire:myrmex_desert_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:bones/dragon' }],
            output: {
                item: 'iceandfire:dragonbone_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { item: 'iceandfire:hippogryph_talon' }],
            output: {
                item: 'iceandfire:hippogryph_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_sword' }, { item: 'mysticalagriculture:inferium_gemstone' }],
            output: {
                item: 'mysticalagriculture:inferium_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_sword' }, { tag: 'forge:ingots/ironwood' }],
            output: {
                item: 'twilightforest:ironwood_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_sword' }, { tag: 'forge:ingots/steeleaf' }],
            output: {
                item: 'twilightforest:steeleaf_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/knightmetal' }],
            output: {
                item: 'twilightforest:knightmetal_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_sword' }, { tag: 'forge:ingots/fiery' }],
            output: {
                item: 'twilightforest:fiery_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { item: 'atum:limestone_cracked' }],
            output: {
                item: 'atum:limestone_sword'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_sword' }, { tag: 'forge:ingots/khnumite' }],
            output: {
                item: 'atum:stoneguard_sword'
            }
        },
        {
            inputs: [{ item: 'atum:stoneguard_sword' }, { tag: 'forge:ingots/khnumite' }],
            output: {
                item: 'atum:stoneguard_greatsword'
            }
        },
        {
            inputs: [{ tag: 'minecraft:planks' }, { tag: 'forge:ingots/iron' }],
            output: {
                item: 'minecraft:shield'
            }
        },
        {
            inputs: [{ item: 'minecraft:shield' }, { tag: 'forge:treated_wood' }],
            output: {
                item: 'immersiveengineering:shield'
            }
        },
        {
            inputs: [{ tag: 'minecraft:planks' }, { tag: 'forge:ingots/cloggrum' }],
            output: {
                item: 'undergarden:cloggrum_shield'
            }
        },
        {
            inputs: [{ tag: 'forge:rods/wooden' }, { item: 'blue_skies:raw_moonstone' }],
            output: {
                item: 'blue_skies:moonstone_shield'
            }
        },
        {
            inputs: [{ tag: 'forge:nuggets/iron' }, { item: 'druidcraft:chitin' }],
            output: {
                item: 'druidcraft:chitin_shield'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_chestplate' }, { tag: 'forge:gems/psigem' }],
            output: {
                item: 'psi:psimetal_exosuit_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/neptunium' }],
            output: {
                item: 'aquaculture:neptunium_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/manasteel' }],
            output: {
                item: 'botania:manasteel_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/elementium' }],
            output: {
                item: 'botania:elementium_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'naturesaura:infused_iron' }],
            output: {
                item: 'naturesaura:infused_iron_chest'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'contenttweaker:compressed_plate' }],
            output: {
                item: 'pneumaticcraft:compressed_iron_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_chestplate' }, { item: 'naturesaura:sky_ingot' }],
            output: {
                item: 'naturesaura:sky_chest'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:plates/steel' }],
            output: {
                item: 'immersiveengineering:armor_steel_chest'
            }
        },
        {
            inputs: [{ item: 'minecraft:leather_chestplate' }, { tag: 'forge:plates/aluminum' }],
            output: {
                item: 'immersiveengineering:armor_faraday_chest'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/cloggrum' }],
            output: {
                item: 'undergarden:cloggrum_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/froststeel' }],
            output: {
                item: 'undergarden:froststeel_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/utherium' }],
            output: {
                item: 'undergarden:utheric_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'undergarden:masticator_scales' }],
            output: {
                item: 'undergarden:masticated_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_chestplate' }, { tag: 'blue_skies:ingots/horizonite' }],
            output: {
                item: 'blue_skies:horizonite_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_chestplate' }, { tag: 'blue_skies:gems/charoite' }],
            output: {
                item: 'blue_skies:charoite_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'blue_skies:gems/diopside' }],
            output: {
                item: 'blue_skies:diopside_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'blue_skies:gems/aquite' }],
            output: {
                item: 'blue_skies:aquite_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'blue_skies:gems/pyrope' }],
            output: {
                item: 'blue_skies:pyrope_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/shadow_steel' }],
            output: {
                item: 'blue_skies:shadow_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_chestplate' }, { tag: 'forge:gems/emerald' }],
            output: {
                item: 'cyclic:emerald_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:gems/diamond' }],
            output: {
                item: 'cyclic:crystal_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:gems/moonstone' }],
            output: {
                item: 'druidcraft:moonstone_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'druidcraft:chitin' }],
            output: {
                item: 'druidcraft:chitin_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:chainmail_chestplate' }, { tag: 'forge:bones' }],
            output: {
                item: 'druidcraft:bone_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { item: 'gobber2:gobber2_ingot_end' }],
            output: {
                item: 'gobber2:gobber2_chestplate_end'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { item: 'gobber2:gobber2_ingot_nether' }],
            output: {
                item: 'gobber2:gobber2_chestplate_nether'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { item: 'gobber2:gobber2_ingot' }],
            output: {
                item: 'gobber2:gobber2_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/dragonsteel_lightning' }],
            output: {
                item: 'iceandfire:dragonsteel_lightning_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/dragonsteel_ice' }],
            output: {
                item: 'iceandfire:dragonsteel_ice_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/dragonsteel_fire' }],
            output: {
                item: 'iceandfire:dragonsteel_fire_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/arcane_gold' }],
            output: {
                item: 'forbidden_arcanus:arcane_gold_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_chestplate' }, { tag: 'forge:ingots/obsidian' }],
            output: {
                item: 'forbidden_arcanus:obsidian_shoulder_pads'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'iceandfire:myrmex_jungle_chitin' }],
            output: {
                item: 'iceandfire:myrmex_jungle_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'iceandfire:myrmex_desert_chitin' }],
            output: {
                item: 'iceandfire:myrmex_desert_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_chestplate' }, { item: 'mysticalagriculture:inferium_gemstone' }],
            output: {
                item: 'mysticalagriculture:inferium_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { tag: 'forge:ingots/ironwood' }],
            output: {
                item: 'twilightforest:ironwood_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_chestplate' }, { tag: 'forge:ingots/steeleaf' }],
            output: {
                item: 'twilightforest:steeleaf_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/fiery' }],
            output: {
                item: 'twilightforest:fiery_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/knightmetal' }],
            output: {
                item: 'twilightforest:knightmetal_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_chestplate' }, { tag: 'forge:ingots/terrasteel' }],
            output: {
                item: 'botania:terrasteel_chestplate'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_chestplate' }, { item: 'alexsmobs:crocodile_scute' }],
            output: {
                item: 'alexsmobs:crocodile_chestplate'
            }
        },
        {
            inputs: [{ item: 'atum:wanderer_chest' }, { item: 'minecraft:iron_chestplate' }],
            output: {
                item: 'atum:desert_chest_iron'
            }
        },
        {
            inputs: [{ item: 'atum:wanderer_chest' }, { item: 'minecraft:golden_chestplate' }],
            output: {
                item: 'atum:desert_chest_gold'
            }
        },
        {
            inputs: [{ item: 'atum:wanderer_chest' }, { item: 'minecraft:diamond_chestplate' }],
            output: {
                item: 'atum:desert_chest_diamond'
            }
        },
        {
            inputs: [{ tag: 'forge:furnace' }, { item: 'mysticalagriculture:inferium_block' }],
            output: {
                item: 'mysticalagriculture:inferium_furnace'
            }
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:elven_trade',
            ingredients: recipe.inputs,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});