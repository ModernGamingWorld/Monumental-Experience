onEvent('recipes', (event) => {
    const recipes = [
    //Alex Mobs
        {
            ingredients: [{
                item: 'alexsmobs:shark_tooth'
            }, {
                tag: 'forge:rods/wooden'
            }, {
                item: 'minecraft:kelp'
            }],
            result: Item.of('alexsmobs:shark_tooth_arrow', 8)
        },
    //Forbidden Arcanus
        {
            ingredients: [{
                    item: 'minecraft:arrow'
                },
                {
                    tag: 'forge:rods/wooden'
                },
                {
                    tag: 'forge:tnt'
                }
            ],
            result: Item.of('forbidden_arcanus:boom_arrow', 4)
        },
        {
            ingredients: [{
                    item: 'minecraft:arrow'
                },
                {
                    tag: 'forge:rods/wooden'
                },
                {
                    item: 'minecraft:dragon_breath'
                }
            ],
            result: Item.of('forbidden_arcanus:draco_arcanus_arrow', 4)
        },
    //Ice and Fire
        /*{
            ingredients: [{
                    item: 'iceandfire:sea_serpent_fang'
                },
                {
                    tag: 'forge:rods/wooden'
                },
                {
                    tag: 'forge:scales/sea_serpent'
                }
            ],
            result: Item.of('iceandfire:sea_serpent_arrow', 4)
        },
        {
            ingredients: [{
                    item: 'minecraft:flint'
                },
                {
                    tag: 'forge:rods/wooden'
                },
                {
                    item: 'iceandfire:stymphalian_bird_feather'
                }
            ],
            result: Item.of('iceandfire:stymphalian_arrow', 4)
        },
        {
            ingredients: [{
                    item: 'minecraft:flint'
                },
                {
                    tag: 'forge:rods/wooden'
                },
                {
                    item: 'iceandfire:amphithere_feather'
                }
            ],
            result: Item.of('iceandfire:amphithere_arrow', 4)
        },
        {
            ingredients: [{
                    item: 'iceandfire:hydra_fang'
                },
                {
                    tag: 'forge:rods/wooden'
                },
                {
                    item: 'minecraft:lily_pad'
                }
            ],
            result: Item.of('iceandfire:hydra_arrow', 4)
        },
        /*{
            ingredients: [{
                tag: 'forge:bones/dragon'
            }, {
                tag: 'forge:rods/wooden'
            }, {
                item: 'iceandfire:wither_shard'
            }],
            result: Item.of('iceandfire:dragonbone_arrow', 5)
        },*/
        //Minecraft
        {
            ingredients: [{
                    item: 'mysticalagriculture:skeleton_essence'
                },
                {
                    tag: 'forge:rods/wooden'
                },
                {
                    tag: 'forge:feathers'
                }
            ],
            result: Item.of('minecraft:arrow', 8)
        },
        //Supplementaries
        {
            ingredients: [{
                    item: 'minecraft:arrow'
                },
                {
                    tag: 'supplementaries:ropes'
                },
                {
                    tag: 'supplementaries:ropes'
                }
            ],
            result: Item.of('supplementaries:rope_arrow', 2)
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'apotheosis:fletching',
            conditions: [{
                type: 'apotheosis:module',
                module: 'village'
            }],
            ingredients: recipe.ingredients,
            result: recipe.result
        });
    });
});