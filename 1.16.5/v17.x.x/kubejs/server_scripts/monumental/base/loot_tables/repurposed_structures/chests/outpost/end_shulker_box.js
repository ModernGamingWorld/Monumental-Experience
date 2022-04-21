onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 7,
                    max: 13,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:crossbow",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.1,
                                    max: 0.8
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:bow",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.1,
                                    max: 0.8
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:diamond_boots",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:diamond_chestplate",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:diamond_leggings",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:diamond_helmet",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_boots",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_chestplate",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_leggings",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_helmet",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:diamond_sword",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_sword",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.4,
                                    max: 1
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    }
                ]
            },
            {
                rolls: {
                    min: 3,
                    max: 6,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:smithing_table",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 1,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:chorus_fruit",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 6,
                                max: 18,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:phantom_membrane",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:arrow",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "immersiveengineering:circuit_board",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:tipped_arrow",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 4,
                                    max: 8,
                                    type: "minecraft:uniform"
                                }
                            },
                            {
                                function: "set_nbt",
                                tag: "{Potion:\"strong_healing\"}"
                            }
                        ]
                    },
                    {
                        name: "mysticalagriculture:diamond_essence",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:iron_block",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        name: "minecraft:crossbow",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.1,
                                    max: 0.8
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    },
                    {
                        name: "minecraft:bow",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.1,
                                    max: 0.8
                                }
                            },
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: {
                                    min: 10,
                                    max: 39,
                                    type: "minecraft:uniform"
                                },
                                treasure: true
                            }
                        ]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 3,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:arrow",
                        type: "minecraft:item",
                        weight: 9,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 7,
                                max: 15,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:tipped_arrow",
                        type: "minecraft:item",
                        weight: 9,
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 7,
                                    max: 15,
                                    type: "minecraft:uniform"
                                }
                            },
                            {
                                function: "set_nbt",
                                tag: "{Potion:\"strong_healing\"}"
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
                        weight: 25,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:bo,Color:3},{Pattern:bo,Color:3},{Pattern:bo,Color:3}]}}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 100
                    },
                    {
                        name: "minecraft:black_banner",
                        type: "minecraft:item",
                        weight: 140,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:gru,Color:2},{Pattern:gra,Color:10},{Pattern:bt,Color:2},{Pattern:tt,Color:10},{Pattern:ms,Color:15},{Pattern:bts,Color:15},{Pattern:tts,Color:15},{Pattern:mr,Color:15},{Pattern:flo,Color:10},{Pattern:flo,Color:2},{Pattern:flo,Color:15},{Pattern:sc,Color:15}]}}"
                        }]
                    },
                    {
                        name: "minecraft:experience_bottle",
                        type: "minecraft:item",
                        weight: 160,
                        functions: [{
                            function: "minecraft:set_count",
                            count: 2
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/outpost/end_shulker_box.json`, loot_table);;
})