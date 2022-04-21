onEvent('recipes', (event) => {
    var data = {
        recipes: [
        //Eidolon
            {
                input1: '#forge:ingots/iron',
                input2: '#forge:ingots/lead',
                output: Item.of('eidolon:pewter_ingot', 2)
            },
        //Tinkers
            {
                input1: '#forge:glass',
                input2: Ingredient.of('#forge:ingots/copper', 3),
                output: Item.of('tconstruct:tinkers_bronze_ingot', 3)
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});