onEvent('recipes', (event) => {
    const recipes = [{
        replaceTarget: {
            id: 'entangled:block'
        },
        toReplace: 'minecraft:chest',
        replaceWith: '#forge:chests/wooden'
    },
    {
        replaceTarget: {
            id: 'naturesaura:calling_spirit'
        },
        toReplace: 'naturesaura:tainted_gold',
        replaceWith: 'mana-and-artifice:superheated_purified_vinteum_ingot'
    },
    {
        replaceTarget: {
            id: 'pamhc2foodextended:rawtofishitem'
        },
        toReplace: '#forge:soysauce',
        replaceWith: '#forge:condiments/soysauce'
    }];
    event.replaceInput({}, 'architects_palette:withered_bone', '#forge:bones/wither');
    event.replaceInput({}, 'minecraft:stick', '#forge:rods/wooden');
    event.replaceInput({}, 'immersiveengineering:hammer', '#forge:tools/crafting_hammer');
    event.replaceInput({}, 'minecraft:furnace', '#forge:furnace');
    event.replaceInput({}, 'emendatusenigmatica:enigmatic_hammer', '#forge:tools/crafting_hammer');
    event.replaceInput({}, 'minecraft:repeater', 'create:adjustable_pulse_repeater');
    event.replaceInput({}, 'minecraft:comparator', 'rsgauges:industrial_comparator_switch');
    event.replaceInput({}, 'minecraft:anvil', 'inventorypets:pet_anvil');
    event.replaceInput({}, 'minecraft:enchanting_table', 'inventorypets:pet_enchanting_table');
    event.replaceInput({}, 'minecraft:brewing_stand', 'inventorypets:pet_brewing_stand');
    event.replaceInput({}, 'prefab:block_compressed_dirt', 'compressium:dirt_1');
    event.replaceInput({}, 'prefab:block_double_compressed_dirt', 'compressium:dirt_2');
    event.replaceInput({}, 'prefab:block_compressed_stone', 'compressium:stone_1');
    event.replaceInput({}, 'prefab:block_double_compressed_stone', 'compressium:stone_2');
    event.replaceInput({}, 'prefab:block_triple_compressed_stone', 'compressium:stone_3');
    event.replaceInput({}, 'prefab:block_double_compressed_obsidian', 'compressium:obsidian_2');
    event.replaceInput({}, 'refinedstorage:crafter', '#refinedstorage:crafter');
    event.replaceInput({}, 'betterendforge:thallasium_ore', '#forge:ores/thallasium');
    event.replaceInput({}, 'astralsorcery:starmetal_ore', '#forge:ores/starmetal');
    event.replaceInput({}, 'thermal:rubber', 'industrialforegoing:dryrubber');
    event.replaceInput({}, 'thermal:slag', '#forge:slag');
    event.replaceInput({}, 'farmersdelight:brown_mushroom_colony', '#forge:mushroom_colonies/brown');
    event.replaceInput({}, 'farmersdelight:red_mushroom_colony', '#forge:mushroom_colonies/red');
    event.replaceInput({}, 'minecraft:iron_ore', '#forge:ores/iron');
    event.replaceInput({}, 'minecraft:gold_ore', '#forge:ores/gold');
    event.replaceInput({}, 'upgrade_aquatic:beachgrass', '#forge:beach_grass');
    event.replaceInput({}, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional');
    event.replaceInput({}, 'betterendforge:ender_dust', '#forge:dusts/ender');
    event.replaceInput({}, 'appliedenergistics2:ender_dust', '#forge:dusts/ender');
    event.replaceInput({}, 'minecraft:piston', '#forge:piston');
    event.replaceInput({
        id: '/simplefarming:\\w+burger/'
    }, 'minecraft:cooked_beef', 'farmersdelight:beef_patty');
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
    event.replaceInput({
        id: 'appliedenergistics2:network/wireless_booster'
    }, 'appliedenergistics2:ender_dust', '#forge:dusts/ender');
    event.replaceInput({
        id: 'notenoughwands:wand_core'
    }, 'minecraft:gold_nugget', '#forge:plates/gold');
    event.replaceInput({
        id: 'notenoughwands:advanced_wand_core'
    }, 'minecraft:diamond', '#forge:gems/mana_diamond');
    event.replaceInput({}, 'tconstruct:cobalt_nugget', '#forge:nuggets/cobalt');
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
    event.replaceInput({
        id: 'dustrial_decor:sheet_metal'
    }, '#forge:ingots/iron', '#forge:plates/iron');
    event.replaceInput({
        mod: 'buildinggadgets'
    }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum');

    ['quark:tallow', 'eidolon:tallow', 'occultism:tallow'].forEach((tallow) => {
        event.replaceInput({}, tallow, '#forge:tallow');
    });

    event.replaceInput({
            id: 'dustrial_decor:iron_bar_trapdoor'
        },
        'minecraft:iron_bars',
        'dustrial_decor:barbed_iron_bars'
    );
    event.replaceInput({
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
    );

    event.replaceInput({
            id: 'bloodmagic:alchemytable/basic_cutting_fluid'
        },
        'minecraft:potion',
        Item.of('minecraft:potion', {
            Potion: 'minecraft:water'
        })
    );

    event.replaceInput({
        id: 'minecraft:nether_bricks'
    }, '#forge:ingots/nether_brick', 'minecraft:nether_brick');
    event.replaceInput({
            id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing'
        },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    );
    event.replaceInput({
            id: 'thermal:machine/press/unpacking/press_wool_unpacking'
        },
        'minecraft:white_wool',
        '#forge:wool'
    );
    event.replaceInput({
            id: 'atum:trap_burning'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );
    event.replaceInput({
            id: 'darkutils:crafting/rune_fire'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );
    event.replaceInput({
            id: 'zycraft:fire_basin'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );
    event.replaceInput({
            id: 'immersivepetroleum:flarestack'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );
    event.replaceInput({
            id: 'occultism:ritual/summon_wild_afrit'
        },
        'minecraft:flint_and_steel',
        'tconstruct:flint_and_bronze'
    );
    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});