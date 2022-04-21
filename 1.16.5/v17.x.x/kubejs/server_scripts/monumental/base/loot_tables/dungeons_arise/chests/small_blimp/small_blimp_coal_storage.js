onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 3,
                    max: 4
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:redstone_essence",
                        weight: 50,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 16,
                                max: 32
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:redstone_lamp",
                        weight: 50,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:repeater",
                        weight: 30,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 6,
                                max: 12
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:comparator",
                        weight: 30,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 6,
                                max: 12
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:redstone_torch",
                        weight: 20,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 4
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 0,
                    max: 3
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:stone_essence",
                        weight: 50,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 8,
                                max: 32
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:nether_quartz_essence",
                        weight: 30,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 6,
                                max: 12
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:coal_essence",
                        weight: 30,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:charcoal",
                        weight: 20,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 12
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:tnt",
                        weight: 5,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 20,
                                max: 32
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 0,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:piston",
                        weight: 30,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 12
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:sticky_piston",
                        weight: 20,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:slime_block",
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
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/small_blimp/small_blimp_coal_storage.json`, loot_table);;
});