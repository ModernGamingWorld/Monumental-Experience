onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:map",
                        functions: [{
                            function: "minecraft:exploration_map",
                            destination: "dungeons_arise:monastery",
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
                            destination: "dungeons_arise:mining_system",
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
                            destination: "dungeons_arise:thornborn_towers",
                            decoration: "blue_marker",
                            zoom: 4,
                            skip_existing_chunks: false
                        }]
                    }
                ]
            },
            {
                rolls: 3,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:wither_rose"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_bars",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_sword",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 1,
                            conditions: [{
                                condition: "minecraft:random_chance",
                                chance: 0.6
                            }]
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:bow",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 4
                            },
                            conditions: [{
                                condition: "minecraft:random_chance",
                                chance: 0.4
                            }]
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_sword",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 1
                        }]
                    }
                ]
            },
            {
                rolls: 2,
                entries: [{
                        type: "minecraft:item",
                        weight: 5,
                        name: "mysticalagriculture:enderman_essence",
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
                        weight: 5,
                        name: "mysticalagriculture:enderman_essence",
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
                        name: "minecraft:chainmail_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:stone_sword"
                    },
                    {
                        type: "minecraft:tag",
                        weight: 10,
                        name: "minecraft:arrows",
                        expand: true,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "mysticalagriculture:lapis_lazuli_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 12,
                                max: 18
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
                                min: 4,
                                max: 14
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:slime_essence",
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
                        name: "minecraft:lily_of_the_valley",
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
                        weight: 10,
                        name: "mysticalagriculture:emerald_essence",
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
                        weight: 20,
                        name: "mysticalagriculture:iron_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "mysticalagriculture:skeleton_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 12,
                                max: 16
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
    event.addJson(`dungeons_arise:loot_tables/chests/abandoned_temple/abandoned_temple_map.json`, loot_table);
})