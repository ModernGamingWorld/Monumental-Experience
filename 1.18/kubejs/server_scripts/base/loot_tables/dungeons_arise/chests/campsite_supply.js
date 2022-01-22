onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:skeleton_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:stick",
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
                rolls: {
                    min: 0,
                    max: 1
                },
                entries: [{
                    type: "minecraft:item",
                    name: "minecraft:glass_bottle",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 2
                        }
                    }]
                }]
            },
            {
                rolls: {
                    min: 1,
                    max: 8
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:poisonous_potato",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecraft:potato",
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
                        weight: 2,
                        name: "minecraft:wheat",
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
                        weight: 2,
                        name: "minecraft:carrot",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/chests/campsite_tent.json`, loot_table);;
});