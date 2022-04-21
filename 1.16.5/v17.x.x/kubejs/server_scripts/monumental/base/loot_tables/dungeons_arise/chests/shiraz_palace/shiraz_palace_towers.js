onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:brown_mushroom",
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
                        name: "minecraft:red_mushroom",
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
                rolls: 1,
                entries: [{
                        type: "minecraft:tag",
                        name: "minecraft:arrows",
                        expand: true,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 200
                    },
                    {
                        type: "minecraft:tag",
                        weight: 5,
                        name: "minecraft:music_discs",
                        expand: true
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:diamond_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 30
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 30
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 30
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 30
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
                        weight: 40,
                        name: "mysticalagriculture:diamond_essence",
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
                        weight: 10,
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 16,
                                max: 32
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
                                min: 32,
                                max: 48
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:gold_block",
                        functions: [{
                            function: "minecraft:set_count",
                            count: 3
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
                        type: "minecraft:empty",
                        weight: 10
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:diamond_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 25
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:diamond_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 25
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:diamond_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 25
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:diamond_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 25
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
                    type: "minecraft:loot_table",
                    name: "minecraft:chests/simple_dungeon"
                }]
            }
        ]
    }
    event.addJson(`dungeons_arise:loot_tables/chests/shiraz_palace/shiraz_palace_towers.json`, loot_table);;
})