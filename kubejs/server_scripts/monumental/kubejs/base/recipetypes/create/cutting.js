onEvent('recipes', (event) => {
    const recipes = [{
            input: '#minecraft:planks',
            outputs: [Item.of('minecraft:stick', 6), Item.of('emendatusenigmatica:wood_dust').chance(0.25), Item.of('mysticalagriculture:wood_essence').chance(0.020)]
        },
        {
            input: '#minecraft:signs',
            outputs: [Item.of('minecraft:stick', 6), Item.of('emendatusenigmatica:wood_dust').chance(0.25), Item.of('mysticalagriculture:wood_essence').chance(0.020)]
        },
        {
            input: '#minecraft:wooden_slabs',
            outputs: [Item.of('minecraft:stick', 3), Item.of('emendatusenigmatica:wood_dust').chance(0.125), Item.of('mysticalagriculture:wood_essence').chance(0.020)]
        },
        {
            input: '#minecraft:wooden_stairs',
            outputs: [Item.of('minecraft:stick', 9), Item.of('emendatusenigmatica:wood_dust').chance(0.375), Item.of('mysticalagriculture:wood_essence').chance(0.020)]
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.cutting(recipe.outputs, recipe.input);
    });
});