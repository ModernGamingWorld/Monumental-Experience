onEvent('server.datapack.high_priority', (event) => {
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
                        weight: 10,
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
                        weight: 20,
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
                        weight: 20,
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
                        weight: 20,
                        name: "minecraft:carrot",
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
                        name: "minecraft:golden_apple"
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:slime_essence"
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:dark_oak_sapling",
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
                        name: "minecraft:dark_oak_wood",
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
                        name: "minecraft:iron_axe"
                    },
                    {
                        type: "minecraft:item",
                        weight: 20,
                        name: "minecraft:string",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/illager_campsite/illager_campsite_supply.json`, loot_table);
});