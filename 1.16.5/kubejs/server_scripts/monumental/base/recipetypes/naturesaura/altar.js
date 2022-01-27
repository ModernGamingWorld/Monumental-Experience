onEvent('recipes', (event) => {
    const data = {
        recipes: [{
                input: 'undergarden:blood_mushroom',
                output: 'byg:soul_shroom',
                aura_type: 'naturesaura:nether',
                catalyst: {
                    item: 'naturesaura:conversion_catalyst'
                },
                aura: 30000,
                time: 250
            },
            {
                input: 'undergarden:veil_mushroom',
                output: 'byg:death_cap',
                aura_type: 'naturesaura:nether',
                catalyst: {
                    item: 'naturesaura:conversion_catalyst'
                },
                aura: 30000,
                time: 250
            },
            {
                input: 'undergarden:indigo_mushroom',
                output: 'byg:sythian_fungus',
                aura_type: 'naturesaura:nether',
                catalyst: {
                    item: 'naturesaura:conversion_catalyst'
                },
                aura: 30000,
                time: 250
            },
            {
                input: 'undergarden:ink_mushroom',
                output: 'byg:embur_wart',
                aura_type: 'naturesaura:nether',
                catalyst: {
                    item: 'naturesaura:conversion_catalyst'
                },
                aura: 30000,
                time: 250
            },
            {
                input: 'minecraft:bamboo',
                output: 'byg:sythian_stalk_block',
                aura_type: 'naturesaura:nether',
                catalyst: {
                    item: 'naturesaura:conversion_catalyst'
                },
                aura: 30000,
                time: 250
            },
            {
                input: '#forge:ingots/psimetal',
                output: 'naturesaura:tainted_gold',
                aura_type: 'naturesaura:nether',
                catalyst: {
                    item: 'naturesaura:conversion_catalyst'
                },
                aura: 30000,
                time: 250
            },
            {
                input: 'forbidden_arcanus:arcane_crystal_block',
                output: 'naturesaura:infused_stone',
                aura_type: 'naturesaura:overworld',
                catalyst: {
                    item: 'naturesaura:conversion_catalyst'
                },
                aura: 7500,
                time: 40
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'naturesaura:altar',
            input: Ingredient.of(recipe.input).toJson(),
            output: Ingredient.of(recipe.output).toJson(),
            aura_type: recipe.aura_type,
            aura: recipe.aura,
            time: recipe.time
        };
        if (recipe.catalyst) {
            constructed_recipe.catalyst = Ingredient.of(recipe.catalyst).toJson();
        }
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});