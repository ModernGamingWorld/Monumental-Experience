onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 3,
                max: 8,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 2,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:redstone_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 7,
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
                    weight: 7,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:rotten_flesh"
                },
                {
                    type: "minecraft:item",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:lapis_lazuli_essence"
                },
                {
                    type: "minecraft:item",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:gold_essence"
                },
                {
                    type: "minecraft:item",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:emerald_essence"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/village/village_temple.json`, loot_table);
});