onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 2,
                    max: 3
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 25,
                        name: "mysticalagriculture:lead_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        name: "minecraft:saddle"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        name: "minecraft:golden_apple"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        name: "minecraft:name_tag"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        name: "minecraft:iron_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:golden_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:diamond_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }],
                        name: "minecraft:book"
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
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 3
                            }
                        }],
                        name: "minecraft:apple"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        name: "minecraft:bread"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        name: "minecraft:rabbit_stew"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:bucket"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 6
                            }
                        }],
                        name: "mysticalagriculture:coal_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }],
                        name: "minecraft:melon_seeds"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }],
                        name: "minecraft:pumpkin_seeds"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }],
                        name: "minecraft:beetroot_seeds"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 6
                            }
                        }],
                        name: "minecraft:wheat"
                    }
                ]
            },
            {
                rolls: 2,
                entries: [{
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }],
                        name: "mysticalagriculture:skeleton_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }],
                        name: "mysticalagriculture:creeper_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }],
                        name: "mysticalagriculture:zombie_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }],
                        name: "mysticalagriculture:spider_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }],
                        name: "minecraft:arrow"
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            },
                            treasure: true
                        }],
                        name: "minecraft:iron_sword"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
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
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 5,
                                max: 10
                            },
                            treasure: true
                        }],
                        name: "minecraft:iron_chestplate"
                    },
                    {
                        type: "minecraft:item",
                        weight: 4,
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
                        weight: 4,
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
                        weight: 4,
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
                        weight: 4,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 5,
                                max: 10
                            },
                            treasure: true
                        }],
                        name: "minecraft:chainmail_boots"
                    }
                ]
            }
        ]
    };
    event.addJson(`valhelsia_structures:loot_tables/chests/castle_ruin.json`, loot_table);
});