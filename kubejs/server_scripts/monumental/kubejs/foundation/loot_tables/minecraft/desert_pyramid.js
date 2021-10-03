onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
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
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:diamond_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
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
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 7,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:gold_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:emerald_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 25,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:bone"
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
                        name: "mysticalagriculture:spider_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 25,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 7,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:rotten_flesh"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        name: "minecraft:saddle"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        name: "minecraft:iron_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }],
                        name: "minecraft:book"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        name: "minecraft:golden_apple"
                    },
                    {
                        type: "minecraft:item",
                        weight: 6,
                        name: "mysticalagriculture:enderman_essence"
                    },
                    {
                        type: "minecraft:empty",
                        weight: 15
                    }
                ]
            },
            {
                rolls: 4,
                entries: [{
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
                                type: "minecraft:uniform"
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
                                max: 4,
                                type: "minecraft:uniform"
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
                                max: 4,
                                type: "minecraft:uniform"
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
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:spider_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:sand"
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/chests/desert_pyramid.json`, loot_table);
})