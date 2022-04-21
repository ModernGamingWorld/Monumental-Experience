onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                Item.of('buildinggadgets:construction_paste', 3),
                Item.of('buildinggadgets:construction_paste').withChance(0.75),
                Item.of('buildinggadgets:construction_paste').withChance(0.5)
            ],
            input: 'buildinggadgets:construction_block_dense',
            id: 'create:crushing/construction_paste'
        },
        {
            outputs: [
                Item.of('atum:emmer_flour'),
                Item.of('atum:emmer_flour', 2).withChance(0.25),
                Item.of('atum:emmer_seeds').withChance(0.25)
            ],
            input: 'atum:emmer',
            id: 'create:crushing/emmer_flour'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input).id(recipe.id);
    });
});
