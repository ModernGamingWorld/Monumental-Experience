onEvent('recipes', (event) => {
    const recipes = [
        {
            replaceTarget: { id: 'entangled:block' },
            toReplace: 'minecraft:chest',
            replaceWith: '#forge:chests/wooden'
        },
        {
            replaceTarget: { id: 'constructionwand:stone_wand' },
            toReplace: '#minecraft:stone_tool_materials',
            replaceWith: '#quark:stone_tool_materials'
        },
        {
            replaceTarget: {
                not: [{ id: 'minecraft:dried_kelp_block' }]
            },
            toReplace: 'minecraft:dried_kelp',
            replaceWith: ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed']
        },
    ];
    event.replaceInput('prefab:block_compressed_stone', 'compressium:stone_1');
    event.replaceInput('prefab:block_double_compressed_stone', 'compressium:stone_2');
    event.replaceInput('prefab:block_triple_compressed_stone', 'compressium:stone_3');
    event.replaceInput('prefab:block_compressed_dirt', 'compressium:dirt_1');
    event.replaceInput('prefab:block_double_compressed_dirt', 'compressium:dirt_2');
    event.replaceInput('astralsorcery:starmetal_ore', '#forge:ores/starmetal');
    event.replaceInput('upgrade_aquatic:beachgrass', '#forge:beach_grass');
    event.replaceInput('minecraft:nether_bricks', '#forge:bricks/nether');
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack');
    event.replaceInput(
        {
            not: [{ type: 'ars_nouveau:glyph_recipe' }]
        },
        'minecraft:crafting_table',
        '#forge:workbenches'
    );

    ['quark:tallow', 'eidolon:tallow', 'occultism:tallow'].forEach((tallow) => {
        event.replaceInput(tallow, '#forge:tallow');
    });

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
