onEvent('recipes', (event) => {
    const recipes = [
        { type: {}, toReplace: 'create:dough', replaceWith: 'farmersdelight:wheat_dough' },
        { type: {}, toReplace: 'thermal:rubber', replaceWith: 'industrialforegoing:dryrubber' },
        { type: {}, toReplace: 'immersiveengineering:slag', replaceWith: 'thermal:slag' },
        {
            type: { mod: 'dustrial_decor' },
            toReplace: 'minecraft:iron_ingot',
            replaceWith: 'dustrial_decor:rusty_iron_ingot'
        },
        {
            type: { mod: 'dustrial_decor' },
            toReplace: 'minecraft:iron_nugget',
            replaceWith: 'dustrial_decor:rusty_iron_nugget'
        },
        {
            type: { mod: 'mysticalagriculture' },
            toReplace: 'forge:ingots/lead',
            replaceWith: '#forge:ingots/lead'
        },
        {
            type: { mod: 'mysticalagriculture' },
            toReplace: '#appliedenergistics2:dusts/ender',
            replaceWith: '#forge:dusts/ender'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.type, recipe.toReplace, recipe.replaceWith);
    });
    sharedDies.forEach((die) => {
        event.replaceOutput(
            {},
            `thermal:press_${die.thermalName}_die`,
            `immersiveengineering:mold_${die.immersiveEngineeringName}`
        );
    });
});
