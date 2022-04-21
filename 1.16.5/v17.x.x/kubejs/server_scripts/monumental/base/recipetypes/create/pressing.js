onEvent('recipes', (event) => {
    const recipes = [{
            output: 'mekanism:hdpe_sheet',
            inputs: ['mekanism:hdpe_pellet']
        },
        {
            output: 'kubejs:compressed_iron_plate',
            inputs: ['#forge:ingots/compressed_iron']
        },
        {
            output: 'pneumaticcraft:compressed_iron_gear',
            inputs: ['#forge:ingots/compressed_iron']
        },
//Emendatus Enigmatica
        {
            output: 'emendatusenigmatica:diamond_plate',
            inputs: ['#forge:gems/diamond']
        },
        {
            output: 'emendatusenigmatica:lapis_plate',
            inputs: ['#forge:gems/lapis']
        },
        {
            output: 'emendatusenigmatica:enderium_plate',
            inputs: ['#forge:ingots/enderium']
        },
        {
            output: 'emendatusenigmatica:emerald_plate',
            inputs: ['#forge:gems/emerald']
        },
        {
            output: 'emendatusenigmatica:aluminum_plate',
            inputs: ['#forge:ingots/aluminum']
        },
        {
            output: 'emendatusenigmatica:silver_plate',
            inputs: ['#forge:ingots/silver']
        },
        {
            output: 'emendatusenigmatica:lead_plate',
            inputs: ['#forge:ingots/lead']
        },
        {
            output: 'emendatusenigmatica:nickel_plate',
            inputs: ['#forge:ingots/nickel']
        },
        {
            output: 'emendatusenigmatica:uranium_plate',
            inputs: ['#forge:ingots/uranium']
        },
        {
            output: 'emendatusenigmatica:osmium_plate',
            inputs: ['#forge:ingots/osmium']
        },
        {
            output: 'emendatusenigmatica:tin_plate',
            inputs: ['#forge:ingots/tin']
        },
        {
            output: 'emendatusenigmatica:cobalt_plate',
            inputs: ['#forge:ingots/cobalt']
        },
        {
            output: 'emendatusenigmatica:bronze_plate',
            inputs: ['#forge:ingots/bronze']
        },
        {
            output: 'emendatusenigmatica:constantan_plate',
            inputs: ['#forge:ingots/constantan']
        },
        {
            output: 'emendatusenigmatica:cobalt_plate',
            inputs: ['#forge:ingots/cobalt']
        },
        {
            output: 'emendatusenigmatica:electrum_plate',
            inputs: ['#forge:ingots/electrum']
        },
        {
            output: 'emendatusenigmatica:steel_plate',
            inputs: ['#forge:ingots/steel']
        },
        {
            output: 'emendatusenigmatica:invar_plate',
            inputs: ['#forge:ingots/invar']
        },
        {
            output: 'emendatusenigmatica:signalum_plate',
            inputs: ['#forge:ingots/signalum']
        },
        {
            output: 'emendatusenigmatica:lumium_plate',
            inputs: ['#forge:ingots/lumium']
        },
        {
            output: 'emendatusenigmatica:iridium_plate',
            inputs: ['#forge:ingots/iridium']
        },
        {
            output: 'emendatusenigmatica:cast_iron_plate',
            inputs: ['#forge:ingots/cast_iron']
        },
        {
            output: 'emendatusenigmatica:ruby_plate',
            inputs: ['#forge:gems/ruby']
        },
        {
            output: 'emendatusenigmatica:sapphire_plate',
            inputs: ['#forge:gems/sapphire']
        },
        {
            output: 'emendatusenigmatica:peridot_plate',
            inputs: ['#forge:gems/peridot']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id ?
            event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id) :
            event.recipes.create.pressing(recipe.output, recipe.inputs);
    });
});