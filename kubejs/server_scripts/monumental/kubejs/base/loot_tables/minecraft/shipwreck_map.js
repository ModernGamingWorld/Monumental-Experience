onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                    type: "minecraft:item",
                    functions: [{
                        function: "minecraft:exploration_map",
                        decoration: "red_x",
                        zoom: 1,
                        skip_existing_chunks: false
                    }],
                    name: "minecraft:map"
                }]
            },
            {
                rolls: 3,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:compass"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:map"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:clock"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:paper"
                    },
                    {
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
                        name: "mysticalagriculture:chicken_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:book"
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/chests/shipwreck_map.json`, loot_table);
});