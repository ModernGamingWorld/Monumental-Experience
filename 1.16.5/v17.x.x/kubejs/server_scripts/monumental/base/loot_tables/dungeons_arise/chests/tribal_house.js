onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:stripped_acacia_log",
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
                        name: "minecraft:orange_wool",
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
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:golden_chestplate",
                        functions: [{
                                function: "minecraft:set_count",
                                count: 1
                            },
                            {
                                function: "minecraft:set_attributes",
                                modifiers: [{
                                    attribute: "minecraft:generic.max_health",
                                    name: "",
                                    amount: {
                                        min: 2,
                                        max: 4
                                    },
                                    operation: "addition",
                                    slot: "chest"
                                }]
                            }
                        ]
                    },
                    {
                        type: "minecraft:group",
                        children: [{
                                type: "minecraft:item",
                                name: "minecraft:leather_boots"
                            },
                            {
                                type: "minecraft:item",
                                weight: 2,
                                name: "minecraft:leather_chestplate"
                            },
                            {
                                type: "minecraft:item",
                                name: "minecraft:leather_helmet"
                            }
                        ]
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
                        name: "minecraft:stone"
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:stone_axe",
                        functions: [{
                                function: "minecraft:set_count",
                                count: 1
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 0,
                                    max: 2
                                }
                            },
                            {
                                function: "minecraft:enchant_randomly",
                                enchantments: [
                                    "minecraft:sharpness",
                                    "minecraft:looting",
                                    "minecraft:fire_aspect"
                                ]
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:stone_pickaxe",
                        functions: [{
                                function: "minecraft:set_count",
                                count: 1
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 0,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_randomly",
                                enchantments: [
                                    "minecraft:fortune",
                                    "minecraft:silk_touch"
                                ]
                            }
                        ]
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
                    name: "minecraft:chests/desert_pyramid",
                    functions: [{
                        function: "minecraft:set_count",
                        count: 1
                    }]
                }]
            },
            {
                rolls: {
                    min: 1,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:bone_block",
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
                        weight: 5,
                        name: "mysticalagriculture:skeleton_essence",
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
                        weight: 5,
                        name: "minecraft:bone_meal",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 32
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/tribal_house.json`, loot_table);;
});