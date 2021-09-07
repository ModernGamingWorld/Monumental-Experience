onEvent('recipes', (event) => {
    const recipes = [{
            input: '#forge:storage_blocks/manasteel',
            output: 'astralsorcery:starmetal',
            count: 1,
            mana: 27000
        },
        {
            input: '#forge:gems/psigem',
            output: 'botania:mana_diamond',
            count: 1,
            mana: 10000
        },
        {
            input: 'forbidden_arcanus:chorus_pearl',
            output: 'botania:mana_pearl',
            count: 1,
            mana: 6000
        },
        {
            input: 'psi:psidust',
            output: 'botania:mana_powder',
            count: 1,
            mana: 6000
        },
        {
            input: 'create:polished_rose_quartz',
            output: 'botania:quartz_mana',
            count: 1,
            mana: 250
        },
        {
            input: 'naturesaura:infused_iron',
            output: 'botania:manasteel_ingot',
            count: 1,
            mana: 3000
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: {
                item: recipe.output,
                count: recipe.count
            },
            mana: recipe.mana
        };
        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});