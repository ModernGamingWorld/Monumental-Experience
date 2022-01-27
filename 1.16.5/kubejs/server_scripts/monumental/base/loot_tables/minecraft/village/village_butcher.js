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
                    weight: 6,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:porkchop"
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
                    name: "minecraft:wheat"
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
                    name: "minecraft:beef"
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
                    name: "mysticalagriculture:sheep_essence"
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
                    name: "mysticalagriculture:coal_essence"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/village/village_butcher.json`, loot_table);
});