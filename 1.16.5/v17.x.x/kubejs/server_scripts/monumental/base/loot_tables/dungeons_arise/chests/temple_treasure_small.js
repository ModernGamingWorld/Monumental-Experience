onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        pools: [{
                rolls: {
                    min: 1,
                    max: 12
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:beetroot"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:golden_carrot"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:bread",
                        weight: 3
                    }
                ]
            },
            {
                rolls: {
                    min: 2,
                    max: 3
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:chainmail_boots",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_leggings",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_helmet",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chainmail_chestplate",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            levels: 0,
                            count: {
                                min: 1,
                                max: 1
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:spider_essence"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:stick"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:mossy_cobblestone"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:cobweb"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:white_wool"
                    }
                ]
            },
            {
                rolls: {
                    min: 8,
                    max: 48
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:skeleton_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }],
                        weight: 2
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:nature_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }],
                        weight: 4
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:coal_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }],
                        weight: 4
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 3
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:emerald_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }],
                        weight: 2
                    }
                ]
            }
        ],
        type: "minecraft:chest"
    }
    event.addJson(`dungeons_arise:loot_tables/chests/temple_treasure_small.json`, loot_table);;
});