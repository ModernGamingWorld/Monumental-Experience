ServerEvents.recipes(e => {

    const recipes = [

        {

            replaceTarget: { id: 'supplementaries:jar_boat' },

            toReplace: '#minecraft:boats',

            replaceWith: '#modernrecipes:boats'

        },

        {

            replaceTarget: { id: 'entangled:block' },

            toReplace: 'minecraft:chest',

            replaceWith: '#forge:chests/wooden'

        },

        {

            replaceTarget: { id: 'ae2:network/wireless_booster' },

            toReplace: 'thermal:ender_pearl_dust',

            replaceWith: '#forge:dusts/ender_pearl'

        }

    ];
    //Misc Changes
    
    e.replaceInput({},'minecraft:ender_chest', '#forge:chests/ender');
    
    e.replaceInput({},'minecraft:leather', 'material_elements:leather_sheet');

    e.replaceInput({},'#forge:leather', 'material_elements:leather_sheet');

    e.replaceInput({},'majruszsdifficulty:enderium_ingot', '#forge:ingots/enderium');

    e.replaceInput({},'mekanism:salt', '#forge:salt');

    e.replaceInput({},'croptopia:salt', '#forge:salt');

    e.replaceInput({},'#pneumaticcraft:plastic_sheets', '#forge:plastic');

    //Tool Changes
    
    e.replaceInput({},'#alltheores:ore_hammers', '#forge:tools/hammers');

    //Storage Block changes

    e.replaceInput({},'minecraft:glowstone', '#forge:storage_blocks/glowstone');

    e.replaceInput({},'minecraft:netherite_block', '#forge:storage_blocks/netherite');

    e.replaceInput({},'minecraft:coal_block', '#forge:storage_blocks/coal');

    e.replaceInput({},'majruszsdifficulty:enderium_block', '#forge:storage_blocks/enderium');

    e.replaceInput({},'minecraft:redstone_block', '#forge:storage_blocks/redstone');


    //Block Changes

    e.replaceInput({},'cyclic:compressed_cobblestone', 'compressium:cobblestone_1');

    e.replaceInput({},'culturaldelights:eggplant_crate', 'thermal:eggplant_block');

    e.replaceInput({},'farmersdelight:beetroot_crate', 'thermal:beetroot_block');

    e.replaceInput({},'farmersdelight:carrot_crate', 'thermal:carrot_block');

    e.replaceInput({},'farmersdelight:potato_crate', 'thermal:potato_block');

    e.replaceInput({},'farmersdelight:onion_crate', 'thermal:onion_block');

    e.replaceInput({},'prefab:item_crate_of_potatoes', 'thermal:potato_block');

    e.replaceInput({},'prefab:item_crate_of_carrots', 'thermal:carrot_block');

    e.replaceInput({},'quark:beetroot_crate', 'thermal:beetroot_block');

    e.replaceInput({},'quark:carrot_crate', 'thermal:carrot_block');

    e.replaceInput({},'quark:potato_crate', 'thermal:potato_block');

    e.replaceInput({},'quark:apple_crate', 'thermal:apple_block');

    e.replaceInput({},'minecraft:nether_bricks', '#forge:bricks/nether');

    e.replaceInput({},'prefab:block_compressed_dirt', 'compressium:dirt_1');

    e.replaceInput({},'prefab:block_double_compressed_dirt', 'compressium:dirt_2');

    e.replaceInput({},'prefab:block_compressed_obsidian', 'compressium:obsidian_1');

    e.replaceInput({},'prefab:block_double_compressed_obsidian', 'compressium:obsidian_2');

    e.replaceInput({},'prefab:block_compressed_quartz_crete', 'compressium:quartz_1');

    e.replaceInput({},'prefab:block_double_compressed_quartz_crete', 'compressium:quartz_2');

    e.replaceInput({},'quark:sugar_cane_block', 'thermal:sugar_cane_block');

    e.replaceInput({},'quark:gunpowder_sack', 'thermal:gunpowder_block');

    e.replaceInput({},'quark:bamboo_block', 'thermal:bamboo_block');

    e.replaceInput({},'supplementaries:flax_block', 'thermal:flax_block');

    e.replaceInput({},'prefab:block_compressed_stone', 'compressium:stone_1');

    e.replaceInput({},'prefab:block_double_compressed_stone', 'compressium:stone_2');

    e.replaceInput({},'prefab:block_triple_compressed_stone', 'compressium:stone_3');



    recipes.forEach((recipe) => {

        e.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);

    });

});

