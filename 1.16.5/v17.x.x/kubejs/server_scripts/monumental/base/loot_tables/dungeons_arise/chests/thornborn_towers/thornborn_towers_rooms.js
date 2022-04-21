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
                        name: "minecraft:beetroot",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:golden_carrot",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:bread",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 12,
                                max: 28
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
                        name: "minecraft:chainmail_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 18
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 18
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 18
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 18
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
                        name: "mysticalagriculture:spider_essence",
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
                        name: "minecraft:stick"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:birch_sapling"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:cobweb"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:rose_bush",
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
                        name: "mysticalagriculture:glowstone_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:nether_quartz_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 2,
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:diamond_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "mysticalagriculture:iron_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 12,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "mysticalagriculture:emerald_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 6,
                                max: 12
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/thornborn_towers/thornborn_towers_rooms.json`, loot_table);;
});