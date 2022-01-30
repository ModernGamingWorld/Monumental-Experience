onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecraft:splash_potion",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{CustomPotionEffects:[{Id:1b,Amplifier:3b,Duration:400},{Id:10b,Amplifier:5b,Duration:100}]}"
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        weight: 500
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:player_head",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{SkullOwner:\"DiamondTown\"}"
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:player_head",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{SkullOwner:\"TheCatsKing\"}"
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:tipped_arrow",
                        functions: [{
                                function: "minecraft:set_nbt",
                                tag: "{CustomPotionEffects:[{Id:2b,Amplifier:4b,Duration:600}]}"
                            },
                            {
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 8
                                }
                            }
                        ]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:tipped_arrow",
                        functions: [{
                                function: "minecraft:set_nbt",
                                tag: "{CustomPotionEffects:[{Id:20b,Amplifier:4b,Duration:30},{Id:25b,Amplifier:6b,Duration:600}]}"
                            },
                            {
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 8
                                }
                            }
                        ]
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
                        name: "minecraft:diamond_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_pickaxe",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 39
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_sword",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:golden_pickaxe",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{Unbreakable:1b,Enchantments:[{id:\"minecraft:efficiency\",lvl:5s},{id:\"minecraft:fortune\",lvl:4s},{id:\"minecraft:vanishing_curse\",lvl:1s}]}"
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 3
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:iron_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 16,
                                max: 48
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 16,
                                max: 32
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:emerald_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 48
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:diamond_essence",
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
                rolls: 1,
                entries: [{
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/simple_dungeon"
                    },
                    {
                        type: "minecraft:loot_table",
                        name: "dungeons_arise:chests/ship_treasure_big"
                    }
                ]
            }
        ]
    }
    event.addJson(`dungeons_arise:loot_tables/chests/ship_treasure_elite.json`, loot_table);;
});