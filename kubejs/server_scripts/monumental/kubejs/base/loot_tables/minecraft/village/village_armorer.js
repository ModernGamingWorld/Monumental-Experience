onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 2,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:iron_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 4,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:bread"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:iron_helmet"
                },
                {
                    type: "minecraft:item",
                    name: "mysticalagriculture:emerald_essence"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/village/village_armorer.json`, loot_table);
});