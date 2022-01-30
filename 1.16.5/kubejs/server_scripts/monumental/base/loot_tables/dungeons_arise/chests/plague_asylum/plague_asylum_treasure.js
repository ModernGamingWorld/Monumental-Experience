onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 1,
                    max: 2
                },
                entries: [{
                        type: "minecraft:tag",
                        name: "minecraft:arrows",
                        expand: true,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 8,
                                max: 16
                            }
                        }]
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
                        weight: 5,
                        name: "minecraft:crossbow",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{Enchantments:[{id:\"minecraft:quick_charge\",lvl:4s}]}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 1300
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
                                min: 0,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 15
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
                                min: 4,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 50,
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 24,
                                max: 32
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
                                min: 16,
                                max: 48
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:gold_block",
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
                                max: 15
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
                                max: 15
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
                                max: 15
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
                                max: 15
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/woodland_mansion"
                    },
                    {
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/simple_dungeon"
                    }
                ]
            }
        ]
    }
    event.addJson(`dungeons_arise:loot_tables/chests/plague_asylum/plague_asylum_treasure.json`, loot_table);;
})