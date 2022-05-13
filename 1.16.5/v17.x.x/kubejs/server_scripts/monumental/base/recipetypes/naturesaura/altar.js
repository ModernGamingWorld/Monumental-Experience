onEvent('recipes', (event) => {
    const id_prefix = 'monumental:base/naturesaura/altar/';

    const recipes = [
        {
            input: 'forbidden_arcanus:arcane_crystal_block',
            output: { item: 'naturesaura:infused_stone' },
            aura_type: 'naturesaura:overworld',
            aura: 7500,
            time: 40,
            id: `${id_prefix}infused_stone`
        },
        {
            input: '#forge:storage_blocks/psimetal',
            output: { item: 'naturesaura:tainted_gold_block' },
            aura_type: 'naturesaura:nether',
            aura: 30000,
            time: 250,
            id: `${id_prefix}tainted_gold_block`
        },
        {
            input: '#forge:ingots/psimetal',
            output: { item: 'naturesaura:tainted_gold' },
            aura_type: 'naturesaura:nether',
            aura: 30000,
            time: 250,
            id: `${id_prefix}tainted_gold`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
