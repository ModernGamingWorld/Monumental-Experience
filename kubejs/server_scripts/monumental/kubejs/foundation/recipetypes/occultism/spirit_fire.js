onEvent('recipes', (event) => {
    const recipes = [
        {
            input: {
                item: 'tconstruct:blaze_head'
            },
            output: 'mysticalagriculture:blaze_essence',
            id: 'occultism:spirit_fire/blaze_essence'
        },
        {
            input: {
                item: 'tconstruct:enderman_head'
            },
            output: 'mysticalagriculture:enderman_essence',
            id: 'occultism:spirit_fire/enderman_essence'
        },
        {
            input: {
                item: 'minecraft:creeper_head'
            },
            output: 'mysticalagriculture:creeper_essence',
            id: 'occultism:spirit_fire/creeper_essence'
        },
        {
            input: {
                item: 'minecraft:zombie_head'
            },
            output: 'mysticalagriculture:zombie_essence',
            id: 'occultism:spirit_fire/zombie_essence'
        },
        {
            input: {
                item: 'mysticalagriculture:wood_essence'
            },
            output: 'occultism:otherworld_ashes',
            id: 'occultism:spirit_fire/otherworld_ashes'
        }
    ];

    recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'occultism:spirit_fire',
            ingredient: recipe.input,
            result: {
                item: recipe.output,
                count: recipe.count
            },
            crushing_time: recipe.time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});