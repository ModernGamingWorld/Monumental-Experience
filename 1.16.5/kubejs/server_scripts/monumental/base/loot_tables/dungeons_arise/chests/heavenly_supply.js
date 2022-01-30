onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        name: "mysticalagriculture:stone_essence",
                        weight: 50
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:splash_potion",
                        functions: [{
                                function: "minecraft:set_nbt",
                                tag: "{Potion:\"minecraft:strong_healing\"}",
                                count: 1
                            },
                            {
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3
                                }
                            }
                        ],
                        weight: 25
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:potion",
                        weight: 50,
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3
                                }
                            },
                            {
                                function: "minecraft:set_nbt",
                                tag: "{Potion:\"minecraft:healing\"}",
                                count: {
                                    min: 1,
                                    max: 3
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:totem_of_undying",
                        weight: 1
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        name: "mysticalagriculture:stone_essence",
                        weight: 10
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:book",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: 30,
                            count: 1
                        }],
                        weight: 1
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        name: "mysticalagriculture:stone_essence",
                        weight: 20
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chorus_fruit",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }],
                        weight: 2
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:pumpkin",
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
                        name: "minecraft:pumpkin_pie",
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
                        name: "minecraft:carrot",
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
                rolls: {
                    min: 1,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 12
                            }
                        }],
                        weight: 20
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:golden_carrot",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 8
                            }
                        }],
                        weight: 40
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:enchanted_golden_apple",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:golden_apple",
                        weight: 20,
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
                rolls: {
                    min: 1,
                    max: 2
                },
                entries: [{
                    type: "minecraft:loot_table",
                    name: "minecraft:chests/nether_bridge"
                }]
            }
        ],
        type: "minecraft:chest"
    }
    event.addJson(`dungeons_arise:loot_tables/chests/heavenly_supply.json`, loot_table);;
});