onEvent('recipes', (event) => {
    const recipes = [{
            inputs: [Ingredient.of('#forge:ingots/compressed_iron', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('kubejs:compressed_iron_plate', 2)],
            energy: 600
        },
//Wooden Utilities
        {
            inputs: [Ingredient.of('#minecraft:planks', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('woodenutilities:wooden_plate', 2)],
            energy: 600
        },
//mcwfurnitures
        {
            inputs: [Ingredient.of('#minecraft:acacia_logs', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mcwfurnitures:acacia_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#minecraft:birch_logs', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mcwfurnitures:birch_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#minecraft:warped_stems', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mcwfurnitures:warped_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#minecraft:spruce_logs', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mcwfurnitures:spruce_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#minecraft:jungle_logs', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mcwfurnitures:jungle_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#minecraft:dark_oak_logs', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mcwfurnitures:dark_oak_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#minecraft:crimson_stems', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mcwfurnitures:crimson_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:obsidian', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('envirocore:obsidian_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#minecraft:oak_logs', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mcwfurnitures:oak_plate', 2)],
            energy: 600
        },
// Emendatus Enigmatica
        {
            inputs: [Ingredient.of('#forge:ingots/iron', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:iron_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/osmium', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:osmium_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/zinc', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:zinc_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:cobalt_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/brass', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:brass_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/diamond', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:diamond_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/emerald', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:emerald_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/lapis', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:lapis_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/copper', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:copper_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/gold', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:gold_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/aluminum', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:aluminum_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/steel', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:steel_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/iridium', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:iridium_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:ingots/cast_iron', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:cast_iron_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/ruby', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:ruby_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/sapphire', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:sapphire_plate', 2)],
            energy: 600
        },
        {
            inputs: [Ingredient.of('#forge:gems/peridot', 4), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('emendatusenigmatica:peridot_plate', 2)],
            energy: 600
        },
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
//Ae2
        {
            inputs: [Ingredient.of('#forge:rods/wooden', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('appliedenergistics2:wooden_gear', 1)],
            energy: 600
        },
//BYG
        {
            inputs: [Item.of('byg:purple_sandstone', 1), Ingredient.of('thermal:press_unpacking_die')],
            outputs: [Item.of('byg:purple_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('byg:blue_sandstone', 1), Ingredient.of('thermal:press_unpacking_die')],
            outputs: [Item.of('byg:blue_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('byg:white_sandstone', 1), Ingredient.of('thermal:press_unpacking_die')],
            outputs: [Item.of('byg:white_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('byg:black_sandstone', 1), Ingredient.of('thermal:press_unpacking_die')],
            outputs: [Item.of('byg:black_sand', 4)],
            energy: 2400
        },
//BetterEndForge
        {
            inputs: [Item.of('betterendforge:dense_snow', 1), Ingredient.of('thermal:press_unpacking_die')],
            outputs: [Item.of('minecraft:snow_block', 9)],
            energy: 2400
        },
        {
            inputs: [Item.of('minecraft:snow_block', 9), Ingredient.of('thermal:press_packing_3x3_die')],
            outputs: [Item.of('betterendforge:dense_snow', 1)],
            energy: 2400
        },
//Mekanism
        {
            inputs: [Item.of('mekanism:hdpe_pellet'), Ingredient.of('thermal:press_packing_2x2_die')],
            outputs: [Item.of('mekanism:hdpe_sheet')],
            energy: 2400
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id ?
            event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id) :
            event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy);
    });
});