onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 2,
                    max: 6,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "mysticalagriculture:diamond_essence",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:iron_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 9,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:gold_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 7,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:emerald_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 9,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:cocoa_beans",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:iron_bars",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:stone_bricks",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:mossy_stone_bricks",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:saddle",
                        type: "minecraft:item",
                        weight: 5
                    },
                    {
                        weight: 10,
                        name: "minecraft:cobweb",
                        type: "minecraft:item",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        weight: 10,
                        name: "mysticalagriculture:skeleton_essence",
                        type: "minecraft:item",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        weight: 10,
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:diamond_sword",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.2,
                                    max: 0.7
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 15,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:leather_boots",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.9,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 15,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:leather_chestplate",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.9,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 15,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:leather_leggings",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.9,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 15,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:leather_helmet",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.9,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 15,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:diamond_pickaxe",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.2,
                                    max: 0.7
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 15,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:diamond_shovel",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.2,
                                    max: 0.7
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 15,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_sword",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_boots",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_chestplate",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_leggings",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_helmet",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_pickaxe",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_shovel",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:chainmail_helmet",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:chainmail_chestplate",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:chainmail_leggings",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    },
                    {
                        name: "minecraft:chainmail_boots",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.7,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: -10,
                                    max: 25,
                                    type: "minecraft:uniform"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                rolls: 0,
                bonus_rolls: 1,
                entries: [{
                        name: "minecraft:pink_banner",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:bo,Color:3},{Pattern:bo,Color:3},{Pattern:bo,Color:3}]}}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 8
                    },
                    {
                        name: "minecraft:light_gray_banner",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cr,Color:15},{Pattern:cr,Color:8},{Pattern:cbo,Color:15},{Pattern:cbo,Color:8},{Pattern:bo,Color:15},{Pattern:mr,Color:15},{Pattern:mr,Color:8},{Pattern:bo,Color:8},{Pattern:mc,Color:15},{Pattern:mc,Color:15},{Pattern:mc,Color:15},{Pattern:mc,Color:8}]}}"
                        }]
                    },
                    {
                        name: "minecraft:compass",
                        type: "minecraft:item",
                        weight: 8
                    },
                    {
                        name: "minecraft:lead",
                        type: "minecraft:item",
                        weight: 4
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/fortresses/jungle_shrine.json`, loot_table);;
});