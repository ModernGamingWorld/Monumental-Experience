onEvent('recipes', (event) => {
    const recipes = [
//Ae2
        {
            inputs: [Ingredient.of('#forge:rods/wooden', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('appliedenergistics2:wooden_gear', 1)],
            energy: 600
        },
// Emendatus Enigmatica Plates
        {
            inputs: [Ingredient.of('#forge:ingots/osmium', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:osmium_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/zinc', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:zinc_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:cobalt_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/brass', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:brass_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/diamond', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:diamond_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/emerald', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:emerald_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/lapis', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:lapis_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/aluminum', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:aluminum_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/steel', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:steel_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/iridium', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:iridium_plate', 1)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/peridot', 1), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:peridot_plate', 1)],
            energy: 600
        },
// Emendatus Enigmatica Gears
        {
            inputs: [Ingredient.of('#forge:ingots/steel', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:steel_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/brass', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:brass_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:cobalt_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/zinc', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:zinc_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/osmium', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:osmium_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/uranium', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:uranium_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/aluminum', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:aluminum_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/quartz', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:quartz_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/lapis', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:lapis_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/emerald', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:emerald_gear', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/quartz', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:diamond_gear', 2)],
            energy: 600
        },
//KubeJS
        {
            inputs: [Ingredient.of('#forge:ingots/compressed_iron', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('kubejs:compressed_iron_plate', 2)],
            energy: 600
        },
//Mekanism
        {
            inputs: [Item.of('mekanism:hdpe_pellet'), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mekanism:hdpe_sheet')],
            energy: 2400
        },
//Wooden Utilities
        {
            inputs: [Ingredient.of('#minecraft:planks', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('woodenutilities:wooden_plate', 2)],
            energy: 600
        },
    ];

    recipes.forEach((recipe) => {
        recipe.id ?
            event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id) :
            event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy);
    });
});