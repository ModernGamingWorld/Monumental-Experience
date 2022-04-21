onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 1,
                    max: 3
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:white_wool",
                        weight: 50,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 30
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:ice_essence",
                        weight: 33,
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
                        name: "minecraft:spruce_wood",
                        weight: 33,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 10,
                                max: 30
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:tnt",
                        weight: 22,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 2,
                                max: 12
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 3,
                    max: 5
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:iron_helmet",
                        weight: 22,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 10,
                                    max: 16
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_chestplate",
                        weight: 22,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 10,
                                    max: 16
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_chestplate",
                        weight: 11,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 10,
                                    max: 16
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_sword",
                        weight: 33,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 10,
                                    max: 25
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_pickaxe",
                        weight: 11,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 10,
                                    max: 25
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_leggings",
                        weight: 22,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 20,
                                    max: 39
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:leather_chestplate",
                        weight: 33,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 0,
                                    max: 20
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:leather_boots",
                        weight: 33,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 0,
                                    max: 20
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:stone_axe",
                        weight: 44,
                        functions: [{
                                function: "set_count",
                                count: {
                                    min: 1,
                                    max: 1
                                }
                            },
                            {
                                function: "enchant_with_levels",
                                treasure: true,
                                levels: {
                                    min: 20,
                                    max: 39
                                }
                            }
                        ]
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
                        name: "minecraft:golden_apple",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 0,
                                max: 2
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:spider_essence",
                        weight: 10,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 10
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:compass",
                        weight: 10,
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
                        name: "mysticalagriculture:redstone_essence",
                        weight: 10,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 4,
                                max: 10
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:music_disc_wait",
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
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/icy_ship_small.json`, loot_table);;
});