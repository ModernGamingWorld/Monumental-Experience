onEvent('recipes', (event) => {
    const recipes = [
        { output: 'mekanism:hdpe_sheet', input: 'mekanism:hdpe_pellet', mold: 'immersiveengineering:mold_plate' },
        { output: 'emendatusenigmatica:diamond_plate', input: '#forge:gems/diamond', mold: 'immersiveengineering:mold_plate' },
        { output: 'emendatusenigmatica:emerald_plate', input: '#forge:gems/emerald', mold: 'immersiveengineering:mold_plate' },
        { output: 'emendatusenigmatica:lapis_plate', input: '#forge:gems/lapis', mold: 'immersiveengineering:mold_plate' },
        { output: 'emendatusenigmatica:signalum_plate', input: '#forge:ingots/signalum', mold: 'immersiveengineering:mold_plate' },
        { output: 'emendatusenigmatica:lumium_plate', input: '#forge:ingots/lumium', mold: 'immersiveengineering:mold_plate' },
        { output: 'emendatusenigmatica:enderium_plate', input: '#forge:ingots/enderium', mold: 'immersiveengineering:mold_plate' },
        { output: 'kubejs:compressed_iron_plate', input: '#forge:ingots/compressed_iron', mold: 'immersiveengineering:mold_plate' },
        { output: 'woodenutilities:wooden_plate', input: '#minecraft:planks', mold: 'immersiveengineering:mold_plate' },
//gears
        { output: 'pneumaticcraft:compressed_iron_gear', input: '#forge:ingots/compressed_iron', mold: 'immersiveengineering:mold_gear' },
        { output: 'emendatusenigmatica:diamond_gear', input: '#forge:gems/diamond', mold: 'immersiveengineering:mold_gear' },
        { output: 'emendatusenigmatica:emerald_gear', input: '#forge:gems/emerald', mold: 'immersiveengineering:mold_gear' },
        { output: 'emendatusenigmatica:lapis_gear', input: '#forge:gems/lapis', mold: 'immersiveengineering:mold_gear' },
        { output: 'emendatusenigmatica:quartz_gear', input: '#forge:gems/quartz', mold: 'immersiveengineering:mold_gear' },
        { output: 'emendatusenigmatica:signalum_gear', input: '#forge:ingots/signalum', mold: 'immersiveengineering:mold_gear' },
        { output: 'emendatusenigmatica:lumium_gear', input: '#forge:ingots/lumium', mold: 'immersiveengineering:mold_gear' },
        { output: 'emendatusenigmatica:enderium_gear', input: '#forge:ingots/enderium', mold: 'immersiveengineering:mold_gear' }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id)
            : event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    });
});
