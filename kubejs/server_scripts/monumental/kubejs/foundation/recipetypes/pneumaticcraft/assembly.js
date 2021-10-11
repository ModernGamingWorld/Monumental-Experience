onEvent('recipes', (event) => {
    recipes = [
        {
            input: '#forge:ingots/compressed_iron',
            input_count: 4,
            output: { item: 'contenttweaker:compressed_plate', count: 1 },
            program: 'drill'
        }
    ];
    recipes.forEach((recipe) => {
        let constructed_input = recipe.input.charAt(0) == '#' ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        if (recipe.input_count) {
            constructed_input.type = 'pneumaticcraft:stacked_item';
            constructed_input.count = recipe.input_count;
        }

        let re = event.custom({
            type: `pneumaticcraft:assembly_${recipe.program}`,
            input: constructed_input,
            result: recipe.output,
            program: recipe.program
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
