onEvent('recipes', (event) => {
    const recipes = [{
        replaceTarget: {
            id: 'entangled:block'
        },
        toReplace: 'minecraft:chest',
        replaceWith: '#forge:chests/wooden'
    },
    /*{
        replaceTarget: {
            id: 'naturesaura:calling_spirit'
        },
        toReplace: 'naturesaura:tainted_gold',
        replaceWith: 'mana-and-artifice:superheated_purified_vinteum_ingot'
    },*/
    {
        replaceTarget: {
            id: 'create:smelting/bread'
        },
        toReplace: 'create:dough',
        replaceWith: 'farmersdelight:dough'
    },
    /*{
        replaceTarget: {
            id: 'mekanism:oxidizing/brine'
        },
        toReplace: 'mekanism:salt',
        replaceWith: '#forge:salt/salt'
    },
    {
        replaceTarget: {
            id: 'pamhc2foodextended:rawtofishitem'
        },
        toReplace: '#forge:soysauce',
        replaceWith: '#forge:condiments/soysauce'
    }*/];
//ATUM
    /*event.replaceInput({
            id: 'atum:trap_burning'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );
//Astral Sorcery
    event.replaceInput({}, 'astralsorcery:starmetal_ore', '#forge:ores/starmetal');*/
//Architects Palette
    event.replaceInput({}, 'architects_palette:withered_bone', '#forge:bones/wither');
//Building Gadgets
    event.replaceInput({
        mod: 'buildinggadgets'
    }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum');
//Cyclic
    /*event.replaceInput({
            id: 'cyclic:hopper_gold'
        },
        'cyclic:hopper',
        'woodenutilities:wooden_hopper'
    );
    event.replaceInput({
            id: 'cyclic:hopper_fluid'
        },
        'cyclic:hopper',
        'woodenutilities:wooden_hopper'
    );*/
//Cooking For Blockheads
    event.replaceInput({
        id: 'cookingforblockheads:kitchen_corner'
    }, 'minecraft:terracotta', '#forge:terracotta');
    event.replaceInput({
        id: 'cookingforblockheads:cooking_table'
    }, 'minecraft:terracotta', '#forge:terracotta');
    event.replaceInput({
        id: 'cookingforblockheads:sink'
    }, 'minecraft:terracotta', '#forge:terracotta');
    event.replaceInput({
        id: 'cookingforblockheads:kitchen_counter'
    }, 'minecraft:terracotta', '#forge:terracotta');
    event.replaceInput({
        id: 'cookingforblockheads:kitchen_cabinet'
    }, 'minecraft:terracotta', '#forge:terracotta');
    event.replaceInput({
        id: 'cookingforblockheads:hanging_corner'
    }, 'minecraft:terracotta', '#forge:terracotta');
    event.replaceInput({
        id: 'cookingforblockheads:crafting_book'
    }, 'minecraft:crafting_table', '#forge:workbenches');
//BetterendForge
    /*event.replaceInput({}, 'betterendforge:thallasium_ore', '#forge:ores/thallasium');
//BloodMagic

    event.replaceInput({
            id: 'bloodmagic:alchemytable/basic_cutting_fluid'
        },
        'minecraft:potion',
        Item.of('minecraft:potion', {
            Potion: 'minecraft:water'
        })
    );*/
//Create
    event.replaceInput({}, 'create:dough', '#forge:doughs');
//Dustrial Decor
    event.replaceInput({
        id: 'dustrial_decor:sheet_metal'
    }, '#forge:ingots/iron', '#forge:plates/iron');
    event.replaceInput({
            id: 'dustrial_decor:iron_bar_trapdoor'
        },
        'minecraft:iron_bars',
        'dustrial_decor:barbed_iron_bars'
    );
//Dark Utils
    /*event.replaceInput({
            id: 'darkutils:crafting/rune_fire'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );
//Emendatus Enigmatica
    event.replaceInput({}, 'emendatusenigmatica:enigmatic_hammer', '#forge:tools/crafting_hammer');*/
//Farmers delight
    event.replaceInput({}, 'farmersdelight:wheat_dough', '#forge:doughs');
    event.replaceInput({}, 'farmersdelight:brown_mushroom_colony', '#forge:mushroom_colonies/brown');
    event.replaceInput({}, 'farmersdelight:red_mushroom_colony', '#forge:mushroom_colonies/red');
//Immersive Engineering
    event.replaceInput({}, 'immersiveengineering:hammer', '#forge:tools/crafting_hammer');
//Immersive Petroleum
    /*event.replaceInput({
            id: 'immersivepetroleum:flarestack'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );*/
//Minecraft
    event.replaceInput({}, 'minecraft:furnace', '#forge:furnace');
    event.replaceInput({}, 'minecraft:nether_bricks', '#forge:netherbricks');
    event.replaceInput({}, 'minecraft:red_nether_bricks', '#forge:netherbricks_red');
    event.replaceInput({}, 'minecraft:stone', '#forge:stone');
    event.replaceInput({
            type: 'minecraft:crafting_shaped',
            not: [{
                id: 'minecraft:stone_slab'
            }, {
                id: 'minecraft:stone_stairs'
            }]
        },
        'minecraft:stone',
        '#forge:stone',
        true
    );
    event.replaceInput({
        type: 'minecraft:crafting_shapeless'
    }, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({
        type: 'minecraft:crafting_shapeless'
    }, 'minecraft:flint_and_steel', 'tconstruct:flint_and_bronze', true);
    event.replaceInput({
        type: 'minecraft:crafting_shaped'
    }, 'minecraft:netherrack', '#forge:netherrack');
    event.replaceInput({
        type: 'minecraft:crafting_shaped'
    }, 'minecraft:flint_and_steel', 'tconstruct:flint_and_bronze');
    event.replaceInput({}, 'minecraft:repeater', 'create:pulse_repeater');
    event.replaceInput({}, 'minecraft:comparator', 'rsgauges:industrial_comparator_switch');
    /*event.replaceInput({}, 'minecraft:anvil', 'inventorypets:pet_anvil');
    event.replaceInput({}, 'minecraft:enchanting_table', 'inventorypets:pet_enchanting_table');
    event.replaceInput({}, 'minecraft:brewing_stand', 'inventorypets:pet_brewing_stand');*/
    event.replaceInput({}, 'minecraft:piston', '#forge:piston');
    event.replaceInput({}, 'minecraft:iron_ore', '#forge:ores/iron');
    event.replaceInput({}, 'minecraft:gold_ore', '#forge:ores/gold');
    event.replaceInput({}, 'minecraft:stick', '#forge:rods/wooden');
    event.replaceInput({
        id: 'minecraft:nether_bricks'
    }, '#forge:ingots/nether_brick', 'minecraft:nether_brick');
//Not Enough Wands
    /*event.replaceInput({
        id: 'notenoughwands:wand_core'
    }, 'minecraft:gold_nugget', '#forge:plates/gold');
    event.replaceInput({
        id: 'notenoughwands:advanced_wand_core'
    }, 'minecraft:diamond', '#forge:gems/mana_diamond');*/
//Occultism
    event.replaceInput({
            id: 'occultism:ritual/summon_wild_afrit'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );
//Prefab
    event.replaceInput({}, 'prefab:block_compressed_dirt', 'compressium:dirt_1');
    event.replaceInput({}, 'prefab:block_double_compressed_dirt', 'compressium:dirt_2');
    event.replaceInput({}, 'prefab:block_compressed_stone', 'compressium:stone_1');
    event.replaceInput({}, 'prefab:block_double_compressed_stone', 'compressium:stone_2');
    event.replaceInput({}, 'prefab:block_triple_compressed_stone', 'compressium:stone_3');
    event.replaceInput({}, 'prefab:block_double_compressed_obsidian', 'compressium:obsidian_2');
//Quark
    /*['quark:tallow', 'eidolon:tallow', 'occultism:tallow'].forEach((tallow) => {
        event.replaceInput({}, tallow, '#forge:tallow');
    });
//RftoolsBase
    event.replaceInput({}, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional');
//Tinkers
    event.replaceInput({}, 'tconstruct:cobalt_nugget', '#forge:nuggets/cobalt');
//Thermal
    event.replaceInput({
            id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing'
        },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    );
    event.replaceInput({}, 'thermal:rubber', 'industrialforegoing:dryrubber');
    event.replaceInput({
            id: 'thermal:machine/press/unpacking/press_wool_unpacking'
        },
        'minecraft:white_wool',
        '#forge:wool'
    );
//Upgrade Aquatic
    event.replaceInput({}, 'upgrade_aquatic:beachgrass', '#forge:beach_grass');
//Zycraft
    event.replaceInput({
            id: 'zycraft:fire_basin'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );*/
    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});