onEvent('recipes', (event) => {
    const recipes = [    
    //Astral Sorcery     
        /*{
            input: 'astralsorcery:illumination_powder',
            fluid: Fluid.of('astralsorcery:liquid_starlight', 1000),
            output: 'extendedcrafting:luminessence'
        },*/
    //Farmer's Delight
        {
            input: 'minecraft:glass_bottle',
            fluid: {
                fluidTag: 'forge:milk',
                amount: 250
            },
            output: 'farmersdelight:milk_bottle'
        },
        {
            input: 'farmersdelight:milk_bottle',
            fluid: Fluid.of('create:chocolate', 250),
            output: 'farmersdelight:hot_cocoa'
        },
    //Minecraft
        /*{
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('industrialforegoing:essence', 250),
            output: 'minecraft:experience_bottle'
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
            output: 'minecraft:experience_bottle'
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('cofh_core:experience', 250),
            output: 'minecraft:experience_bottle'
        },
    //Upgraded Aquatic
        {
            input: 'upgrade_aquatic:squid_bucket',
            fluid: Fluid.of('astralsorcery:liquid_starlight', 250),
            output: 'upgrade_aquatic:glow_squid_bucket'
        },*/
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});