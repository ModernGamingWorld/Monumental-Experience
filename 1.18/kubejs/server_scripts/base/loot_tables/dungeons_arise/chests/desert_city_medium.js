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
                        weight: 8,
                        name: "minecraft:bow",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 4,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        name: "minecraft:iron_sword",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 8,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:iron_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 30
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:iron_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 30
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:iron_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 30
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:iron_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 30
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_helmet"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_chestplate"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_leggings"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_boots"
                    },
                    {
                        type: "minecraft:empty",
                        weight: 20
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        name: "mysticalagriculture:slime_essence",
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
                        weight: 15,
                        name: "minecraft:fermented_spider_eye",
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
                        weight: 8,
                        name: "mysticalagriculture:enderman_essence",
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
                        weight: 24,
                        name: "mysticalagriculture:iron_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 24
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 32,
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        name: "minecraft:gold_nugget",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 8,
                                max: 64
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "mysticalagriculture:diamond_essence",
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
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:blue_orchid",
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
                        name: "minecraft:cobweb",
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
                        name: "minecraft:spruce_planks",
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
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/village/village_desert_house"
                    },
                    {
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/village/village_weaponsmith"
                    },
                    {
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/desert_pyramid"
                    }
                ]
            }
        ]
    }
    event.addJson(`dungeons_arise:loot_tables/chests/chests/desert_city_medium.json`, loot_table);;
});