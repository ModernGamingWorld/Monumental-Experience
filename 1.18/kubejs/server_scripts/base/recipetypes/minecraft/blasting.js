onEvent('recipes', (event) => {
    const recipes = [{
            input: Item.of('dustrial_decor:rusty_iron_ingot'),
            output: Item.of('#forge:ingots/iron')
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_nugget'),
            output: Item.of('#forge:nuggets/iron')
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.blasting(recipe.output, recipe.input);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});