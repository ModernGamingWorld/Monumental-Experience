onEvent('recipes', (event) => {
    const id_prefix = 'monumental:base/mekanism/crushing/';
    const recipes = [
        {
            input: '#forge:stone',
            output: 'minecraft:cobblestone',
                id: 'mekanism:processing/cobblestone'
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            output: Item.of('buildinggadgets:construction_paste', 3),
                id: 'mekanism:processing/construction_paste'
        },
        {
            input: Item.of('create:limesand', 3),
            output: Item.of('emendatusenigmatica:silicon_gem'),
                id: 'mekanism:processing/silicon_gem'
        },
        {
            input: '#forge:end_stones',
            output: Item.of('occultism:crushed_end_stone', 4),
                id: 'mekanism:processing/crushed_end_stone'
        },
        {
            input: '#forge:ores/netherite',
            output: Item.of('mekanism:dirty_netherite_scrap', 3),
            id: 'mekanism:processing/netherite/ancient_debris_to_dirty_scrap'
        },
        {
            input: '#forge:coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            id: 'mekanism:processing/petcoke_dust'
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            output: Item.of('9x immersivepetroleum:petcoke_dust'),
            id: 'mekanism:processing/petcoke_dust_from_block'
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            output: Item.of('9x emendatusenigmatica:coke_dust'),
            id: 'mekanism:processing/coke_dust_from_block'
        }
    ];

    const biofuels = [
        {
            count: 2,
            inputs: [
                '#minecraft:leaves',
                'environmental:cattail',
            ]
        },
        {
            count: 5,
            inputs: [
                '#minecraft:small_flowers',
                '#minecraft:tall_flowers',
                '#forge:mushroom_stems',
                '#forge:mushrooms'
            ]
        },
        {
            count: 7,
            inputs: ['#forge:mushroom_caps']
        }
    ];

    biofuels.forEach((biofuel) => {
        biofuel.inputs.forEach((input) => {
            recipes.push({
                input: input,
                output: Item.of('mekanism:bio_fuel', biofuel.count),
                id: `${id_prefix}bio_fuel_from_${input.split(':')[0].replace('#', '')}_${input.split(':')[1]}`
            });
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input).id(recipe.id);
    });
});
