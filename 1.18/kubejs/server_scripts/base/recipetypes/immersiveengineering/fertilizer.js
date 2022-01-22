onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'farmingforblockheads:red_fertilizer',
                growthModifier: 2.0
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.fertilizer(recipe.input).growthModifier(recipe.growthModifier);
    });
});