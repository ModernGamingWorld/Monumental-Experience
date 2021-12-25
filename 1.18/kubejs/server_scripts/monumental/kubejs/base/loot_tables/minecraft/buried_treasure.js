onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                    type: "minecraft:item",
                    name: "minecraft:heart_of_the_sea"
                }]
            },
            {
                rolls: {
                    min: 5,
                    max: 8,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
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
                                max: 4,
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
                                max: 2,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:tnt"
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
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:emerald_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:diamond_essence"
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
                        name: "minecraft:prismarine_crystals"
                    }
                ]
            },
            {
                rolls: {
                    min: 0,
                    max: 1,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:leather_chestplate"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_sword"
                    }
                ]
            },
            {
                rolls: 2,
                entries: [{
                        type: "minecraft:item",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:cooked_cod"
                    },
                    {
                        type: "minecraft:item",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:cooked_salmon"
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/chests/buried_treasure.json`, loot_table);
})