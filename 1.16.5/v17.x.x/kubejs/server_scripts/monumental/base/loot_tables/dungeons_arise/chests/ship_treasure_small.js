onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 1,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:iron_essence",
                        weight: 20,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_nugget",
                        weight: 30,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 64
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:gold_essence",
                        weight: 15,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:gold_nugget",
                        weight: 30,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 64
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:creeper_essence",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:cobweb",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:book",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:golden_apple",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:golden_carrot",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 0,
                    max: 1
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:music_disc_chirp",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:music_disc_far",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:music_disc_ward",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:music_disc_mall",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:music_disc_stal",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 0,
                    max: 1
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:diamond_essence",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:emerald_essence",
                        weight: 5,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 5
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:lapis_lazuli_essence",
                        weight: 10,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/ship_treasure_small.json`, loot_table);;
});