onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
    type: "minecraft:chest",
    pools: [{
        rolls: {
            min: 1,
            max: 4,
            type: "minecraft:uniform"
        },
        entries: [{
                type: "minecraft:item",
                weight: 10,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 5,
                        type: "minecraft:uniform"
                    }
                }],
                name: "mysticalagriculture:iron_essence"
            },
            {
                type: "minecraft:item",
                weight: 5,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 3,
                        type: "minecraft:uniform"
                    }
                }],
                name: "mysticalagriculture:gold_essence"
            },
            {
                type: "minecraft:item",
                weight: 5,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 4,
                        max: 9,
                        type: "minecraft:uniform"
                    }
                }],
                name: "mysticalagriculture:redstone_essence"
            },
            {
                type: "minecraft:item",
                weight: 10,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 3,
                        max: 8,
                        type: "minecraft:uniform"
                    }
                }],
                name: "mysticalagriculture:coal_essence"
            },
            {
                type: "minecraft:item",
                weight: 15,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 3,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:bread"
            },
            {
                type: "minecraft:item",
                weight: 15,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 3,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:apple"
            },
            {
                type: "minecraft:item",
                name: "minecraft:iron_pickaxe"
            },
            {
                type: "minecraft:item",
                functions: [{
                    function: "minecraft:enchant_with_levels",
                    levels: 30,
                    treasure: true
                }],
                name: "minecraft:book"
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/chests/stronghold_crossing.json`, loot_table);
});