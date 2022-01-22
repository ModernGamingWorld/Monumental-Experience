onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 1,
                    max: 2
                },
                entries: [{
                    type: "minecraft:item",
                    name: "mysticalagriculture:creeper_essence",
                    weight: 1,
                    functions: [{
                        function: "set_count",
                        count: {
                            min: 1,
                            max: 8
                        }
                    }]
                }]
            },
            {
                rolls: {
                    min: 0,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:tnt",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:redstone_essence",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:coal_essence",
                        weight: 1,
                        functions: [{
                            function: "set_count",
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
                    min: 1,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:spruce_wood",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 3,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:cobweb",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:flint",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 6
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:flint_and_steel",
                        weight: 1,
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/illager_corsair/illager_corsair_barrels.json`, loot_table);
});