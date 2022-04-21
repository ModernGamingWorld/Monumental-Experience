onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        weight: 80
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:shulker_box",
                        functions: [{
                            function: "minecraft:set_loot_table",
                            name: "minecraft:chests/end_city_treasure"
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 12
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:cobweb"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:stripped_birch_log"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:yellow_concrete"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:yellow_wool"
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/simple_dungeon"
                    },
                    {
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/woodland_mansion"
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 8
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:book",
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
                        name: "minecraft:book",
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 24
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:gold_nugget",
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
                        weight: 1,
                        name: "mysticalagriculture:iron_essence",
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
                        weight: 2,
                        name: "mysticalagriculture:diamond_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "mysticalagriculture:gold_essence",
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
                        weight: 3,
                        name: "mysticalagriculture:emerald_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 12
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 32
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:hay_block",
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
                        weight: 10,
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
                        weight: 5,
                        name: "mysticalagriculture:nature_essence",
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
                        name: "minecraft:golden_apple",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:golden_carrot",
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
                        weight: 1,
                        name: "minecraft:enchanted_golden_apple"
                    }
                ]
            },
            {
                rolls: 4,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:splash_potion",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{CustomPotionEffects:[{Id:2b,Amplifier:4b,Duration:1200},{Id:20b,Amplifier:2b,Duration:200}],CustomPotionColor:9546751}"
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:splash_potion",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{CustomPotionEffects:[{Id:1b,Amplifier:3b,Duration:4200},{Id:3b,Amplifier:3b,Duration:4200}],CustomPotionColor:16761175}"
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:splash_potion",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{CustomPotionEffects:[{Id:6b,Amplifier:3b,Duration:1},{Id:21b,Amplifier:1b,Duration:10000}],CustomPotionColor:16743204}"
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/pillager_palace_supply.json`, loot_table);;
});