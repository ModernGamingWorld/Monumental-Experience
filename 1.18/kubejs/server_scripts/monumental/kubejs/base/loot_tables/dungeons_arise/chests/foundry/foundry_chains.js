onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:granite",
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
                        name: "minecraft:blackstone",
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
                        name: "immersiveengineering:circuit_board",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:glowstone_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:netherite_scrap",
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
                        weight: 5,
                        name: "mysticalagriculture:diamond_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:gold_ore",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:gold_nugget",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 32,
                                max: 48
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/foundry/foundry_chains.json`, loot_table);
});