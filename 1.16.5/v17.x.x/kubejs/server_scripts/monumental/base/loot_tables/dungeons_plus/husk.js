onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 3,
                    max: 5,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:sand",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:bone",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:rotten_flesh",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:dead_bush",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:gold_nugget",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:iron_essence",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 2,
                    max: 4,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:red_sand",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:glass_bottle",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:gold_essence",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:redstone_essence",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:coal_essence",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_shovel",
                        weight: 1
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 3,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:golden_apple",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:bucket",
                        weight: 2
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:book",
                        weight: 5,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:gold_nugget",
                        weight: 3
                    }
                ]
            }
        ]
    };

    event.addJson(`dungeons_plus:loot_tables/chests/bigger_dungeon/husk.json`, loot_table);
});