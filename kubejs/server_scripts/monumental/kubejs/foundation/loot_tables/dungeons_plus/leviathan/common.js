onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 4,
                    max: 7,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:bone",
                        weight: 10,
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
                        name: "minecraft:rabbit_hide",
                        weight: 10,
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
                        weight: 10,
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
                        name: "minecraft:gold_nugget",
                        weight: 10
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:sand",
                        weight: 10,
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
                        name: "minecraft:dead_bush",
                        weight: 1
                    }
                ]
            },
            {
                rolls: {
                    min: 3,
                    max: 4,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:quartz",
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
                        name: "mysticalagriculture:lapis_lazuli_essence",
                        weight: 2,
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
                        name: "mysticalagriculture:gold_essence",
                        weight: 5,
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
                        name: "mysticalagriculture:emerald_essence",
                        weight: 5,
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
                        name: "minecraft:golden_shovel",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 2,
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
                        name: "minecraft:experience_bottle",
                        weight: 3,
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
                        name: "minecraft:golden_horse_armor",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:name_tag",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:book",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    }
                ]
            }
        ]
    }
    event.addJson(`dungeons_plus:loot_tables/chests/leviathan/common.json`, loot_table);
});