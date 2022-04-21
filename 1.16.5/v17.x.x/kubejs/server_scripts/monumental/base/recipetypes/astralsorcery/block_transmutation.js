onEvent('recipes', (event) => {
    var data = {
        recipes: [
            { inputTag: '#forge:ores/iron', output: 'astralsorcery:starmetal_ore', starlight: 100 },
            { inputTag: '#forge:ores/diamond', output: 'emendatusenigmatica:emerald_ore', starlight: 1000 },
            { inputTag: 'compressium:netherrack_6', output: 'gobber2:gobber2_ore_nether', starlight: 2000 },
            { inputTag: '#forge:workbenches', output: 'astralsorcery:altar_discovery', starlight: 60 },
            { inputTag: 'twilightforest:uncrafting_table', output: 'astralsorcery:altar_discovery', starlight: 60 },
            { inputTag: 'forbidden_arcanus:arcane_crystal_block', output: 'naturesaura:infused_stone', starlight: 2500 },
            { inputTag: '#forge:storage_blocks/compressed_iron', output: 'naturesaura:infused_iron', starlight: 2500 }
        ]
    };
    data.recipes.forEach((recipe) => {
        Ingredient.of(recipe.inputTag).stacks.forEach((input) => {
            if (!input.id.includes('chunk')) {
                event.recipes.astralsorcery.block_transmutation({
                    type: 'astralsorcery.block_transmutation',
                    input: {
                        block: input.id
                    },
                    output: {
                        block: recipe.output
                    },
                    starlight: recipe.starlight
                });
            }
        });
    });
});
