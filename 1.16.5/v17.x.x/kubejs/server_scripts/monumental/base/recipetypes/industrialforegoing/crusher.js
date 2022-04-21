onEvent('recipes', (event) => {
    const recipes = [
    //Emendatus Enigmatica
        {
            input: {
                item: 'create:limesand'
            },
            output: {
                item: 'emendatusenigmatica:silicon_gem'
            },
            id: 'monumental:industrialforegoing/crusher/silicon_gem'
        },
    //Minecraft
        {
            input: {
                tag: 'forge:cobblestone'
            },
            output: {
                item: 'minecraft:gravel'
            },
            id: 'industrialforegoing:crusher/cobble_gravel'
        },
        {
            input: {
                tag: 'forge:gravel'
            },
            output: {
                item: 'minecraft:sand'
            },
            id: 'industrialforegoing:crusher/gravel_sand'
        },
        {
            input: {
                item: 'minecraft:red_sandstone'
            },
            output: {
                item: 'minecraft:red_sand'
            },
            id: 'monumental:industrialforegoing/crusher/red_sandstone_sand'
        },
        {
            input: {
                item: 'minecraft:sandstone'
            },
            output: {
                item: 'minecraft:sand'
            },
            id: 'monumental:industrialforegoing/crusher/sandstone_sand'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'industrialforegoing:crusher',
                input: recipe.input,
                output: recipe.output
            })
            .id(recipe.id);
    });
});