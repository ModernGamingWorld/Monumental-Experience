onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:firework_rocket",
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 16
                                }
                            },
                            {
                                function: "minecraft:set_nbt",
                                tag: "{Fireworks:{Flight:3b,Explosions:[{Type:0,Flicker:1b,Colors:[I;10685337],FadeColors:[I;16711680]},{Type:2,Colors:[I;8718716],FadeColors:[I;16711680]},{Type:4,Flicker:1b,Colors:[I;4195388],FadeColors:[I;16711680]},{Type:4,Trail:1b,Colors:[I;16711680],FadeColors:[I;16777024]}]}}"
                            }
                        ]
                    },
                    {
                        type: "minecraft:tag",
                        name: "minecraft:arrows",
                        expand: true,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 300
                    },
                    {
                        type: "minecraft:tag",
                        weight: 5,
                        name: "minecraft:music_discs",
                        expand: true
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:crossbow",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{Enchantments:[{id:\"minecraft:quick_charge\",lvl:4s}]}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 1300
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:diamond_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 0,
                                max: 15
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
                        weight: 40,
                        name: "mysticalagriculture:diamond_essence",
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
                        weight: 50,
                        name: "mysticalagriculture:gold_essence",
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
                        name: "mysticalagriculture:iron_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 8,
                                max: 24
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:gold_block",
                        functions: [{
                            function: "minecraft:set_count",
                            count: 1
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
                        type: "minecraft:empty",
                        weight: 10
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:diamond_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:diamond_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:diamond_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:diamond_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 15
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/woodland_mansion"
                    },
                    {
                        type: "minecraft:loot_table",
                        name: "minecraft:chests/simple_dungeon"
                    }
                ]
            }
        ],
        type: "minecraft:chest"
    }
    event.addJson(`dungeons_arise:loot_tables/chests/chests/illager_fortress_big.json`, loot_table);;
});