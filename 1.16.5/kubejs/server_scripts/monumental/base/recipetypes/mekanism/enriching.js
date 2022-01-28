onEvent('recipes', (event) => {
    var data = {
        recipes: [
    //BYG
            {
                input: 'byg:quartzite_sand',
                output: Item.of('minecraft:quartz')
            },
    //BetterEndForge
            {
                input: '#forge:ores/ender',
                output: Item.of('betterendforge:ender_shard', 3)
            },
    //Create
            {
                input: '#forge:grain',
                output: Item.of('create:wheat_flour', 1)
            },
    //Druidcraft
            {
                input: '#forge:ores/amber',
                output: Item.of('druidcraft:amber', 3)
            },
    //Minecraft
            {
                input: 'minecraft:sugar_cane',
                output: Item.of('minecraft:sugar', 2)
            },
            {
                input: 'minecraft:blaze_rod',
                output: Item.of('minecraft:blaze_powder', 4)
            },
    //Mekanism
            {
                input: '#forge:ores/quartz',
                output: Item.of('minecraft:quartz', 3),
                id: 'mekanism:processing/quartz/from_ore'
            },
            {
                input: 'mekanism:hdpe_pellet',
                output: 'mekanism:hdpe_sheet',
                id: 'mekanism:enriching/hdpe_sheet'
            },
            {
                input: 'mekanism:dirty_netherite_scrap',
                output: Item.of('minecraft:netherite_scrap'),
                id: 'mekanism:processing/netherite/dirty_scrap_to_scrap'
            },
    //Thermal
            {
                input: 'thermal:blizz_rod',
                output: Item.of('thermal:blizz_powder', 4)
            },
            {
                input: 'thermal:blitz_rod',
                output: Item.of('thermal:blitz_powder', 4)
            },
            {
                input: 'thermal:basalz_rod',
                output: Item.of('thermal:basalz_powder', 4)
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.recipes.mekanism.enriching(recipe.output, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});