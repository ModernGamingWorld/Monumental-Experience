onEvent('recipes', (event) => {
    var data = {
        recipes: [
        //Atum
            /*{
                outputs: [Item.of('atum:emmer_flour', 1), Item.of('atum:emmer_flour', 2).withChance(0.25), Item.of('atum:emmer_seeds').withChance(0.25)],
                input: 'atum:emmer'
            },*/
            {
                outputs: [
                    Item.of('buildinggadgets:construction_paste', 3),
                    Item.of('buildinggadgets:construction_paste').withChance(0.75),
                    Item.of('buildinggadgets:construction_paste').withChance(0.5)
                ],
                input: 'buildinggadgets:construction_block_dense'
            },
            /*{
                outputs: [Item.of('botania:elementium_nugget', 5)],
                input: '#forge:storage_blocks/elementium'
            },
            {
                outputs: [Item.of('botania:manasteel_nugget', 5)],
                input: '#forge:storage_blocks/manasteel'
            },
            {
                outputs: [Item.of('botania:terrasteel_nugget', 5)],
                input: '#forge:storage_blocks/terrasteel'
            },
            {
                outputs: [Item.of('minecraft:glowstone_dust', 5)],
                input: '#forge:storage_blocks/refined_glowstone'
            },
            {
                outputs: [Item.of('mekanism:dust_refined_obsidian', 5)],
                input: '#forge:storage_blocks/refined_obsidian'
            },
            {
                outputs: [Item.of('mekanism:dust_netherite', 5)],
                input: '#forge:storage_blocks/netherite'
            },*/
            {
                outputs: [Item.of('minecraft:redstone', 5)],
                input: '#forge:storage_blocks/redstone'
            },
            //Mystical Agradditions
            {
                outputs: [Item.of('mysticalagradditions:insanium_coal', 5)],
                input: 'mysticalagradditions:insanium_coal_block'
            },
            {
                outputs: [Item.of('mysticalagradditions:insanium_gemstone', 5)],
                input: 'mysticalagradditions:insanium_gemstone_block'
            },
            {
                outputs: [Item.of('mysticalagradditions:insanium_essence', 5)],
                input: 'mysticalagradditions:insanium_block'
            },
            //Mystical Agriculture
            {
                outputs: [Item.of('mysticalagriculture:imperium_essence', 5)],
                input: 'mysticalagriculture:imperium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:inferium_essence', 5)],
                input: 'mysticalagriculture:inferium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:prosperity_shard', 9)],
                input: 'mysticalagriculture:prosperity_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:tertium_essence', 5)],
                input: 'mysticalagriculture:tertium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:supremium_essence', 5)],
                input: 'mysticalagriculture:supremium_block'
            },
            {
                outputs: [
                    Item.of('mysticalagriculture:prosperity_shard', 2),
                    Item.of('buildinggadgets:construction_paste', 2).withChance(0.3),
                    Item.of('minecraft:cobblestone').withChance(0.125)
                ],
                input: '#forge:ores/prosperity'
            },
            {
                outputs: [Item.of('mysticalagriculture:prudentium_essence', 5)],
                input: 'mysticalagriculture:prudentium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:supremium_essence', 5)],
                input: 'mysticalagriculture:supremium_block'
            },
            {
                outputs: [Item.of('mysticalagriculture:tertium_essence', 5)],
                input: 'mysticalagriculture:tertium_block'
            },
        //Minecraft
            /*{
                outputs: [Item.of('minecraft:redstone', 5)],
                input: '#forge:storage_blocks/redstone'
            }*/
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.recipes.create.crushing(recipe.outputs, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});