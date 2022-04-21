onEvent('recipes', (event) => {
    var data = {
        recipes: [
        //Emendatus Enigmatica
            {
                input: '#forge:obsidian',
                output: Item.of('emendatusenigmatica:obsidian_dust', 1),
                secondary: [Item.of('minecraft:obsidian').chance(0.75)],
                id: 'immersiveengineering:crusher/obsidian'
            },
        //Minecraft
            {
                input: 'minecraft:sugar_cane',
                output: Item.of('minecraft:sugar', 2),
                secondary: [Item.of('minecraft:sugar').chance(0.1)]
            },
        //Occultism
            {
                input: '#forge:end_stones',
                output: Item.of('occultism:crushed_end_stone', 4),
                secondary: [],
                id: 'immersiveengineering:crusher/end_stone'
            },
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});