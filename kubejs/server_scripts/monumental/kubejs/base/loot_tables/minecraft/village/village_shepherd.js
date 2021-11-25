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
                    weight: 6,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 8,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:white_wool"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:black_wool"
                },
                {
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
                    name: "minecraft:gray_wool"
                },
                {
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
                    name: "minecraft:brown_wool"
                },
                {
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
                    name: "minecraft:light_gray_wool"
                },
                {
                    type: "minecraft:item",
                    name: "mysticalagriculture:emerald_essence"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:shears"
                },
                {
                    type: "minecraft:item",
                    weight: 6,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 6,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:wheat"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/village/village_shepherd.json`, loot_table);
});