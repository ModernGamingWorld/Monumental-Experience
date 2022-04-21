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
                        name: "minecraft:golden_apple",
                        type: "minecraft:item",
                        weight: 15
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item",
                        weight: 2
                    },
                    {
                        name: "minecraft:music_disc_13",
                        type: "minecraft:item",
                        weight: 15
                    },
                    {
                        name: "minecraft:music_disc_strad",
                        type: "minecraft:item",
                        weight: 15
                    },
                    {
                        name: "minecraft:name_tag",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:lead",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:iron_shovel",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "minecraft:golden_shovel",
                        type: "minecraft:item",
                        weight: 5
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecraft:music_disc_otherside"
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
                        name: "mysticalagriculture:gold_essence",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:cow_essence",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:yellow_dye",
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
                                min: 3,
                                max: 9,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:rabbit_hide",
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
                        name: "minecraft:dead_bush",
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
                                min: 3,
                                max: 10,
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
                                min: 3,
                                max: 10,
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
                                min: 3,
                                max: 12,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:stick",
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
                    },
                    {
                        name: "minecraft:sand",
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
                        name: "minecraft:cobweb",
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
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:mr,Color:4},{Pattern:flo,Color:4},{Pattern:flo,Color:15},{Pattern:tts,Color:15},{Pattern:tts,Color:15},{Pattern:tts,Color:4},{Pattern:bts,Color:15},{Pattern:bts,Color:15},{Pattern:bts,Color:4},{Pattern:cbo,Color:7},{Pattern:bo,Color:4},{Pattern:cbo,Color:15}]}}"
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
    event.addJson(`repurposed_structures:loot_tables/chests/dungeons/desert.json`, loot_table);;
});