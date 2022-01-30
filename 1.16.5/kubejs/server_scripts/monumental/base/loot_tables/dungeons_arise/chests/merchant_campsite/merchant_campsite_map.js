onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:map",
                        functions: [{
                            function: "minecraft:exploration_map",
                            destination: "dungeons_arise:illager_campsite",
                            decoration: "target_x",
                            zoom: 4,
                            skip_existing_chunks: false
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:map",
                        functions: [{
                            function: "minecraft:exploration_map",
                            destination: "dungeons_arise:illager_fort",
                            decoration: "target_x",
                            zoom: 4,
                            skip_existing_chunks: false
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:book"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:paper"
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 3
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:charcoal",
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
                        name: "mysticalagriculture:coal_essence",
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
                        name: "mysticalagriculture:iron_essence",
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
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
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
                    min: 1,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:leather_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 6
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:leather_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 6
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:leather_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 6
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:leather_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 6
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
                        name: "minecraft:rose_bush",
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
                        name: "minecraft:stick",
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
                        name: "minecraft:white_wool",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:loot_table",
                    name: "minecraft:chests/village/village_weaponsmith"
                }]
            }
        ]
    }
    event.addJson(`dungeons_arise:loot_tables/chests/merchant_campsite/merchant_campsite_map.json`, loot_table);
})