onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:end_stones',
                output: Item.of('occultism:crushed_end_stone', 4),
                secondary: [],
                id: 'immersiveengineering:crusher/end_stone'
            },
            {
                input: 'minecraft:sugar_cane',
                output: Item.of('minecraft:sugar', 2),
                secondary: [Item.of('minecraft:sugar').withChance(0.1)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});