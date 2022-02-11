onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 0,
                    max: 32
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecraft:emerald"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:gold_ingot"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        name: "mysticalagriculture:iron_essence"
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
                        name: "minecraft:golden_sword",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{HideFlags:1,Unbreakable:1b,Enchantments:[{id:\"minecraft:sharpness\",lvl:3s},{id:\"minecraft:fire_aspect\",lvl:5s}]}"
                        }]
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
                rolls: {
                    min: 1,
                    max: 3
                },
                entries: [{
                        type: "minecraft:empty",
                        weight: 10
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:chainmail_helmet",
                        functions: [{
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 20,
                                    max: 39
                                },
                                treasure: true
                            },
                            {
                                function: "minecraft:set_nbt",
                                tag: "{Unbreakable:1b}"
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:chainmail_chestplate",
                        functions: [{
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 20,
                                    max: 39
                                },
                                treasure: true
                            },
                            {
                                function: "minecraft:set_nbt",
                                tag: "{Unbreakable:1b}"
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:chainmail_leggings",
                        functions: [{
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 20,
                                    max: 39
                                },
                                treasure: true
                            },
                            {
                                function: "minecraft:set_nbt",
                                tag: "{Unbreakable:1b}"
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:chainmail_boots",
                        functions: [{
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 20,
                                    max: 39
                                },
                                treasure: true
                            },
                            {
                                function: "minecraft:set_nbt",
                                tag: "{Unbreakable:1b}"
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
    event.addJson(`dungeons_arise:loot_tables/chests/desert_garden_treasure.json`, loot_table);;
});