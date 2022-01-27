onEvent('recipes', (event) => {
    var data = {
        recipes: [{
            input: 'minecraft:snow_block',
            output: 'betterendforge:dense_snow'
        },
        {
            input: 'mana-and-artifice:decoration/vinteum_arcane_sandstone',
            output: 'botania:livingrock'
        }]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'botania:pure_daisy',
            input: {
                type: 'block',
                block: recipe.input
            },
            output: {
                name: recipe.output
            }
        });
    });
});