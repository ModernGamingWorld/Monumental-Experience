onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 2,
                    max: 5
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }],
                        name: "mysticalagriculture:lead_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        name: "minecraft:saddle"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        name: "minecraft:golden_apple"
                    },
                    {
                        type: "minecraft:item",
                        weight: 17,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }],
                        name: "minecraft:cooked_beef"
                    },
                    {
                        type: "minecraft:item",
                        weight: 17,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }],
                        name: "minecraft:cooked_chicken"
                    },
                    {
                        type: "minecraft:item",
                        weight: 25,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 10
                            }
                        }],
                        name: "minecraft:melon_slice"
                    },
                    {
                        type: "minecraft:item",
                        weight: 12,
                        name: "minecraft:leather_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:golden_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        name: "minecraft:iron_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }],
                        name: "minecraft:book"
                    }
                ]
            },
            {
                rolls: {
                    min: 2,
                    max: 3
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }],
                        name: "mysticalagriculture:iron_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        name: "mysticalagriculture:gold_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        name: "mysticalagriculture:emerald_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "mysticalagriculture:diamond_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 9
                            }
                        }],
                        name: "minecraft:paper"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 5
                            }
                        }],
                        name: "mysticalagriculture:nature_essence"
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:compass"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:clock"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:bucket"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:map"
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
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            },
                            treasure: true
                        }],
                        name: "minecraft:chainmail_helmet"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            },
                            treasure: true
                        }],
                        name: "minecraft:chainmail_chestplate"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            },
                            treasure: true
                        }],
                        name: "minecraft:chainmail_leggings"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            },
                            treasure: true
                        }],
                        name: "minecraft:chainmail_boots"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 5,
                                max: 10
                            },
                            treasure: true
                        }],
                        name: "minecraft:iron_sword"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 5,
                                max: 10
                            },
                            treasure: true
                        }],
                        name: "minecraft:iron_pickaxe"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 5,
                                max: 10
                            },
                            treasure: true
                        }],
                        name: "minecraft:iron_axe"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 5,
                                max: 10
                            },
                            treasure: true
                        }],
                        name: "minecraft:iron_shovel"
                    }
                ]
            }
        ]
    };
    event.addJson(`valhelsia_structures:loot_tables/chests/desert_house.json`, loot_table);
});