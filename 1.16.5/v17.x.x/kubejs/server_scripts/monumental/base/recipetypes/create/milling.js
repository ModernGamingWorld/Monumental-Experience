onEvent('recipes', (event) => {
    const recipes = [
        {
            input: '#forge:end_stones',
            outputs: [Item.of('occultism:crushed_end_stone', 4)],
            processingTime: 150,
            id: 'create:milling/crushed_end_stone'
        },
        {
            input: 'minecraft:ancient_debris',
            outputs: ['minecraft:netherite_scrap', Item.of('minecraft:ancient_debris', 1).withChance(0.66)],
            processingTime: 200,
            id: 'create:milling/netherite_scrap'
        },
        {
            input: 'atum:emmer',
            outputs: [
                Item.of('atum:emmer_flour'),
                Item.of('atum:emmer_flour', 2).withChance(0.25),
                Item.of('atum:emmer_seeds').withChance(0.25)
            ],
            processingTime: 150,
            id: 'create:milling/emmer_flour'
        },
        {
            input: '#forge:coal_petcoke',
            outputs: ['immersivepetroleum:petcoke_dust'],
            processingTime: 150,
            id: 'create:milling/petcoke_dust'
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            outputs: [Item.of('9x immersivepetroleum:petcoke_dust')],
            processingTime: 1200,
            id: 'create:milling/petcoke_dust_from_block'
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            outputs: [Item.of('9x emendatusenigmatica:coke_dust')],
            processingTime: 1200,
            id: 'create:milling/coke_dust_from_block'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime).id(recipe.id);
    });
});
