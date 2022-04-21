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
                        name: "minecraft:glistering_melon_slice",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item",
                        weight: 2
                    },
                    {
                        name: "minecraft:music_disc_far",
                        type: "minecraft:item",
                        weight: 15
                    },
                    {
                        name: "minecraft:music_disc_cat",
                        type: "minecraft:item",
                        weight: 15
                    },
                    {
                        name: "minecraft:name_tag",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:writable_book",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "minecraft:fishing_rod",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "minecraft:shears",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "minecraft:iron_hoe",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: -10,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:diamond_hoe",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: -10,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        weight: 15,
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
                        name: "minecraft:bread",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:wheat",
                        type: "minecraft:item",
                        weight: 20,
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
                        name: "minecraft:torch",
                        type: "minecraft:item",
                        weight: 15,
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
                        name: "minecraft:melon_seeds",
                        type: "minecraft:item",
                        weight: 10,
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
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 10,
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
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 5,
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
                        name: "minecraft:cocoa_beans",
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
                        name: "mysticalagriculture:creeper_essence",
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
                        name: "mysticalagriculture:nature_essence",
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
                        name: "minecraft:poisonous_potato",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
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
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:mr,Color:5},{Pattern:flo,Color:5},{Pattern:flo,Color:15},{Pattern:tts,Color:15},{Pattern:tts,Color:15},{Pattern:tts,Color:5},{Pattern:bts,Color:15},{Pattern:bts,Color:15},{Pattern:bts,Color:5},{Pattern:cbo,Color:7},{Pattern:bo,Color:5},{Pattern:cbo,Color:15}]}}"
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
    event.addJson(`repurposed_structures:loot_tables/chests/dungeons/jungle.json`, loot_table);;
});