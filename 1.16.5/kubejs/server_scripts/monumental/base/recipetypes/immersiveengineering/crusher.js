onEvent('recipes', (event) => {
    var data = {
        recipes: [
        //BYG
            {
                input: 'byg:quartzite_sand',
                output: Item.of('minecraft:sand'),
                secondary: [Item.of('minecraft:quartz').chance(0.1)]
            },
            {
                input: 'byg:pink_sandstone',
                output: Item.of('byg:pink_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/pink_sandstone'
            },
            {
                input: 'byg:purple_sandstone',
                output: Item.of('byg:purple_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/purple_sandstone'
            },
            {
                input: 'byg:blue_sandstone',
                output: Item.of('byg:blue_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/blue_sandstone'
            },
            {
                input: 'byg:white_sandstone',
                output: Item.of('byg:white_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/white_sandstone'
            },
            {
                input: 'byg:black_sandstone',
                output: Item.of('byg:black_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/black_sandstone'
            },
            {
                input: 'byg:raw_quartz_block',
                output: Item.of('byg:quartzite_sand', 2),
                secondary: [Item.of('byg:quartzite_sand').chance(0.5)]
            },
        //Emendatus Enigmatica
            {
                input: '#forge:obsidian',
                output: Item.of('emendatusenigmatica:obsidian_dust', 1),
                secondary: [Item.of('minecraft:obsidian').chance(0.75)],
                id: 'immersiveengineering:crusher/obsidian'
            },
        //Minecraft
            {
                input: 'minecraft:sugar_cane',
                output: Item.of('minecraft:sugar', 2),
                secondary: [Item.of('minecraft:sugar').chance(0.1)]
            },
        //Occultism
            {
                input: '#forge:end_stones',
                output: Item.of('occultism:crushed_end_stone', 4),
                secondary: [],
                id: 'immersiveengineering:crusher/end_stone'
            },
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});