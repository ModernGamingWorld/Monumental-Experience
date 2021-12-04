onEvent('recipes', (event) => {
    const recipes = [{
            input: Item.of('dustrial_decor:rusty_iron_ingot'),
            output: Item.of('#forge:ingots/iron')
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_nugget'),
            output: Item.of('#forge:nuggets/iron')
        },
        {
            input: 'aquaculture:tin_can',
            output: Item.of('emendatusenigmatica:tin_nugget', 7),
            xp: 0.7,
            id: 'aquaculture:tin_can_to_iron_nugget_from_blasting'
        },
        {
            input: '#forge:chunks/charged_certus_quartz',
            output: Item.of('emendatusenigmatica:charged_certus_quartz_gem', 1),
            xp: 0.7,
            id: 'appliedenergistics2:charged_certus_to_crystal'
        },
        {
            input: '#forge:chunks/certus_quartz',
            output: Item.of('emendatusenigmatica:certus_quartz_gem', 1),
            xp: 0.7,
            id: 'appliedenergistics2:certus_to_crystal'
        },
        {
            input: '#forge:chunks/cinnabar',
            output: Item.of('emendatusenigmatica:cinnabar_gem', 1),
            xp: 0.7,
            id: 'emendatusenigmatica:cinnabar_chunks_to_gem'
        },
        {
            input: '#forge:chunks/apatite',
            output: Item.of('emendatusenigmatica:apatite_gem', 1),
            xp: 0.7,
            id: 'emendatusenigmatica:apatite_chunks_to_gem'
        },
        {
            input: '#forge:chunks/sulfur',
            output: Item.of('emendatusenigmatica:sulfur_gem', 1),
            xp: 0.7,
            id: 'emendatusenigmatica:sulfur_chunks_to_gem'
        },
        {
            input: '#forge:chunks/dimensional',
            output: Item.of('emendatusenigmatica:dimensional_gem', 1),
            xp: 0.7,
            id: 'emendatusenigmatica:dimensional_chunks_to_gem'
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