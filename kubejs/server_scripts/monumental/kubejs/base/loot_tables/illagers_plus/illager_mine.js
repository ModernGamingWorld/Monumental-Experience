onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 5,
                    max: 10,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }],
                        name: "minecraft:iron_pickaxe"
                    },
                    {
                        type: "minecraft:item",
                        weight: 6,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }],
                        name: "minecraft:stone_pickaxe"
                    },
                    {
                        type: "minecraft:item",
                        weight: 7,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }],
                        name: "minecraft:wooden_pickaxe"
                    },
                    {
                        type: "minecraft:item",
                        weight: 50,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
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
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:iron_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
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
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:diamond_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:lapis_lazuli_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:iron_nugget"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:gold_nugget"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:flint"
                    }
                ],
                bonus_rolls: {
                    min: 1,
                    max: 3
                }
            },
            {
                rolls: {
                    min: 2,
                    max: 4,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 20,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "woodenutilities:wooden_tnt"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:minecart"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:rail"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:powered_rail"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:detector_rail"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:activator_rail"
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 5,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:cobblestone"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:granite"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:andesite"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:diorite"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:stone"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:spruce_planks"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:dark_oak_planks"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:stripped_dark_oak_wood"
                    },
                    {
                        type: "minecraft:item",
                        weight: 25,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:stick"
                    }
                ]
            }
        ]
    };
    event.addJson(`illagers_plus:loot_tables/structure/illager_mine.json`, loot_table);
});