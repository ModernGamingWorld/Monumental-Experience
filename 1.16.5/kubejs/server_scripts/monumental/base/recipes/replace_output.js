onEvent('recipes', (event) => {
    const recipes = [
    //Dustrial Decor
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
    //Create Additions
        {
            type: { mod: 'createaddition' },
            toReplace: 'create:dough',
            replaceWith: 'farmersdelight:wheat_dough'
        },
    //Farmers Delight
        { type: {}, toReplace: 'create:dough', replaceWith: 'farmersdelight:wheat_dough' },

    //Immersive Engineering
        { type: {}, toReplace: 'immersiveengineering:slag', replaceWith: 'thermal:slag' },
    //Mekanism
        {
            type: { mod: 'mekanism' },
            toReplace: 'mekanism:salt',
            replaceWith: '#forge:salt/salt'
        },
    //Mystiacl
        {
            type: { mod: 'mysticalagriculture' },
            toReplace: 'forge:ingots/lead',
            replaceWith: '#forge:ingots/lead'
        },
        {
            type: { mod: 'mysticalagriculture' },
            toReplace: '#appliedenergistics2:dusts/ender',
            replaceWith: '#forge:dusts/ender'
        },
    //Thermal
        { type: {}, toReplace: 'thermal:rubber', replaceWith: 'industrialforegoing:dryrubber' },
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
