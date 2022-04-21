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
                        weight: 2,
                        name: "mysticalagriculture:emerald_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 8,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "mysticalagriculture:gold_essence",
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
                        weight: 8,
                        name: "mysticalagriculture:iron_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 3,
                entries: [{
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:book",
                        functions: [{
                                function: "minecraft:enchant_with_levels",
                                levels: 20,
                                treasure: true
                            },
                            {
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 2
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:book",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        weight: 95
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:netherite_sword"
                    }
                ]
            },
            {
                rolls: {
                    min: 4,
                    max: 8
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:blue_orchid"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:lilac"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:peony"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:cornflower"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:chorus_fruit"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:lily_of_the_valley"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:rose_bush"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:poppy"
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:splash_potion",
                        functions: [{
                                function: "minecraft:set_nbt",
                                tag: "{CustomPotionEffects:[{Id:20b,Amplifier:5b,Duration:400}],CustomPotionColor:16770928}"
                            },
                            {
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:splash_potion",
                        functions: [{
                                function: "minecraft:set_nbt",
                                tag: "{CustomPotionEffects:[{Id:2b,Amplifier:5b,Duration:1200}],CustomPotionColor:16770928}"
                            },
                            {
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3
                                }
                            }
                        ]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:splash_potion",
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3
                                }
                            },
                            {
                                function: "minecraft:set_nbt",
                                tag: "{Potion:\"minecraft:regeneration\"}"
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:splash_potion",
                        functions: [{
                                function: "minecraft:set_nbt",
                                tag: "{Potion:\"minecraft:strong_healing\"}"
                            },
                            {
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3
                                }
                            }
                        ]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:loot_table",
                    name: "minecraft:chests/desert_pyramid"
                }]
            }
        ]
    }
    event.addJson(`dungeons_arise:loot_tables/chests/shiraz_palace/shiraz_palace_gardens.json`, loot_table);;
})