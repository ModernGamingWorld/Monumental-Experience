onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                result: 'refinedstorage:controller',
                pattern: ['ABCBA', 'BDDDB', 'CDEDC', 'BDDDB', 'ABCBA'],
                key: {
                    A: '#forge:gems/silicon',
                    B: 'appliedenergistics2:smooth_sky_stone_block',
                    C: 'refinedstorage:advanced_processor',
                    D: 'refinedstorage:quartz_enriched_iron',
                    E: 'refinedstorage:machine_casing'
                }
            },
            {
                result: 'storagenetwork:master',
                pattern: ['AABAA', 'ABCBA', 'BCDCB', 'ABCBA', 'AABAA'],
                key: {
                    A: '#forge:sheetmetals/steel',
                    B: 'storagenetwork:kabel',
                    C: 'immersiveengineering:circuit_board',
                    D: '#forge:gears/diamond'
                }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.extendedcrafting.shaped_table(
            recipe.result,
            recipe.pattern,
            recipe.key
        );
    });
});