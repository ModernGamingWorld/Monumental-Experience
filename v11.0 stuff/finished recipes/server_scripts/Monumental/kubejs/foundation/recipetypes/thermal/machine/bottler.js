onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('minecraft:milk', 250),
            output: 'farmersdelight:milk_bottle'
        },
        {
            input: 'farmersdelight:milk_bottle',
            fluid: Fluid.of('create:chocolate', 250),
            output: 'farmersdelight:hot_cocoa'
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
            output: 'minecraft:experience_bottle'
        },
        {
            input: 'buildinggadgets:construction_block_powder',
            fluid: Fluid.of('minecraft:water', 1000),
            output: 'buildinggadgets:construction_block_dense'
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        let honey = honeyVariety.split(':')[1];
        recipes.push({
            input: Item.of('minecraft:glass_bottle'),
            fluid: Fluid.of(honeyVariety, 250),
            output: Item.of(
                honeyVariety == 'resourcefulbees:honey' ? 'minecraft:honey_bottle' : `${honeyVariety}_bottle`
            ),
            id: `thermal:machine/bottler/bottler_${honey}_bottle`
        });
    });

    recipes.forEach((recipe) => {
        const re = event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
