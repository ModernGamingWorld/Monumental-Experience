onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 1,
                    max: 3,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:saddle",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:golden_carrot",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item",
                        weight: 2
                    },
                    {
                        name: "minecraft:music_disc_cat",
                        type: "minecraft:item",
                        weight: 15
                    },
                    {
                        name: "minecraft:music_disc_ward",
                        type: "minecraft:item",
                        weight: 15
                    },
                    {
                        name: "minecraft:name_tag",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:slime_block",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "minecraft:dark_oak_boat",
                        type: "minecraft:item",
                        weight: 15
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecraft:music_disc_otherside"
                    },
                    {
                        name: "minecraft:bow",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 1,
                                max: 15,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 4,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "mysticalagriculture:iron_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:emerald_essence",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:mushroom_stew",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:suspicious_stew",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_stew_effect",
                            effects: [{
                                    type: "minecraft:blindness",
                                    duration: {
                                        min: 5,
                                        max: 7
                                    }
                                },
                                {
                                    type: "minecraft:poison",
                                    duration: {
                                        min: 10,
                                        max: 20
                                    }
                                },
                                {
                                    type: "minecraft:weakness",
                                    duration: {
                                        min: 6,
                                        max: 8
                                    }
                                },
                                {
                                    type: "minecraft:jump_boost",
                                    duration: {
                                        min: 7,
                                        max: 10
                                    }
                                },
                                {
                                    type: "minecraft:night_vision",
                                    duration: {
                                        min: 7,
                                        max: 10
                                    }
                                },
                                {
                                    type: "minecraft:saturation",
                                    duration: {
                                        min: 7,
                                        max: 10
                                    }
                                }
                            ]
                        }]
                    },
                    {
                        name: "minecraft:bucket",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "mysticalagriculture:redstone_essence",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:coal_essence",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:slime_essence",
                        type: "minecraft:item",
                        weight: 10,
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
                        name: "minecraft:pumpkin_seeds",
                        type: "minecraft:item",
                        weight: 10,
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
                        name: "minecraft:pumpkin",
                        type: "minecraft:item",
                        weight: 5,
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
                        name: "minecraft:carved_pumpkin",
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
                        name: "minecraft:carrot",
                        type: "minecraft:item",
                        weight: 10,
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
                        weight: 7,
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3,
                                    type: "minecraft:uniform"
                                }
                            },
                            {
                                function: "minecraft:set_nbt",
                                tag: "{Potion:\"minecraft:long_poison\"}"
                            }
                        ]
                    }
                ]
            },
            {
                rolls: 3,
                entries: [{
                        name: "mysticalagriculture:skeleton_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 5,
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
                        name: "mysticalagriculture:creeper_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:zombie_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:spider_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 0,
                bonus_rolls: 1,
                entries: [{
                        name: "minecraft:pink_banner",
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:bo,Color:3},{Pattern:bo,Color:3},{Pattern:bo,Color:3}]}}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 360
                    },
                    {
                        name: "minecraft:black_banner",
                        type: "minecraft:item",
                        weight: 92,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:mr,Color:12},{Pattern:flo,Color:12},{Pattern:flo,Color:15},{Pattern:tts,Color:15},{Pattern:tts,Color:15},{Pattern:tts,Color:12},{Pattern:bts,Color:15},{Pattern:bts,Color:15},{Pattern:bts,Color:12},{Pattern:cbo,Color:7},{Pattern:bo,Color:12},{Pattern:cbo,Color:15}]}}"
                        }]
                    },
                    {
                        name: "minecraft:music_disc_11",
                        type: "minecraft:item",
                        weight: 132
                    },
                    {
                        name: "minecraft:name_tag",
                        type: "minecraft:item",
                        weight: 176
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/dungeons/swamp.json`, loot_table);;
});