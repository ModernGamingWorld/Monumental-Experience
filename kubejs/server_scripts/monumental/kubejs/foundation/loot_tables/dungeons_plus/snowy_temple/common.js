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
                        name: "mysticalagriculture:ice_essence",
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
                        name: "minecraft:snowball",
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
                        name: "minecraft:arrow",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:skeleton_essence",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:flint",
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
                        name: "mysticalagriculture:chicken_essence",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2,
                                type: "minecraft:uniform"
                            }
                        }]
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
                        name: "minecraft:packed_ice",
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
                        name: "mysticalagriculture:iron_essence",
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
                        name: "mysticalagriculture:lapis_lazuli_essence",
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
                        name: "minecraft:bow",
                        weight: 1,
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
                        name: "minecraft:chainmail_chestplate",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_leggings",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:book",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:leather_boots",
                        weight: 1,
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            enchantments: [
                                "minecraft:frost_walker"
                            ]
                        }]
                    }
                ]
            }
        ]
    }
    event.addJson(`dungeons_plus:loot_tables/chests/snowy_temple/common.json`, loot_table);
});