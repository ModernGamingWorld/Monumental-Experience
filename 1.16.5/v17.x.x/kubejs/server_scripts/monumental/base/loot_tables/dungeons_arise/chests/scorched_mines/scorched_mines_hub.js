onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        weight: 5,
                        name: "mysticalagriculture:diamond_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "mysticalagriculture:iron_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 4
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 50,
                        name: "minecraft:cooked_porkchop",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 5
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 75,
                        name: "mysticalagriculture:pig_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 9
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 75,
                        name: "minecraft:shroomlight",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 100,
                        name: "minecraft:crimson_fungus",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/scorched_mines/scorched_mines_hub.json`, loot_table);;
});