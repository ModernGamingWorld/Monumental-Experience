onEvent('recipes', (event) => {
    const recipes = [    
    //Extended Crafting     
        {
            input: 'astralsorcery:illumination_powder',
            fluid: Fluid.of('astralsorcery:liquid_starlight', 1000),
            output: 'extendedcrafting:luminessence'
        }, 
    //Minecraft
        {
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
    //Upgrade Aquatic
        {
            input: 'upgrade_aquatic:squid_bucket',
            fluid: Fluid.of('astralsorcery:liquid_starlight', 250),
            output: 'upgrade_aquatic:glow_squid_bucket'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});