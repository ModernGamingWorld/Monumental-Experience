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
                    name: "mysticalagriculture:emerald_essence"
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
                    name: "minecraft:arrow"
                },
                {
                    type: "minecraft:item",
                    weight: 6,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:chicken_essence"
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
                    name: "minecraft:egg"
                },
                {
                    type: "minecraft:item",
                    weight: 6,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:flint"
                },
                {
                    type: "minecraft:item",
                    weight: 6,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:stick"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/village/village_fletcher.json`, loot_table);
});