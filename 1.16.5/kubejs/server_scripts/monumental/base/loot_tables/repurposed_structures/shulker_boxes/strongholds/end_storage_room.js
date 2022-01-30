onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 3,
                    max: 6,
                    type: "minecraft:uniform"
                },
                bonus_rolls: 1,
                entries: [{
                        name: "mysticalagriculture:lapis_lazuli_essence",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 12,
                                max: 22,
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
                                min: 12,
                                max: 35,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:diamond_essence",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 5,
                                max: 14,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:iron_essence",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 10,
                                max: 20,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:diamond_sword",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        name: "minecraft:diamond_chestplate",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        name: "minecraft:ender_eye",
                        type: "minecraft:item",
                        weight: 3
                    },
                    {
                        name: "minecraft:suspicious_stew",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:set_stew_effect",
                            effects: [{
                                    type: "minecraft:blindness",
                                    duration: {
                                        min: 30,
                                        max: 50
                                    }
                                },
                                {
                                    type: "minecraft:levitation",
                                    duration: {
                                        min: 40,
                                        max: 60
                                    }
                                },
                                {
                                    type: "minecraft:weakness",
                                    duration: {
                                        min: 40,
                                        max: 120
                                    }
                                },
                                {
                                    type: "minecraft:jump_boost",
                                    duration: {
                                        min: 60,
                                        max: 440
                                    }
                                },
                                {
                                    type: "minecraft:night_vision",
                                    duration: {
                                        min: 60,
                                        max: 440
                                    }
                                },
                                {
                                    type: "minecraft:saturation",
                                    duration: {
                                        min: 10,
                                        max: 12
                                    }
                                },
                                {
                                    type: "minecraft:invisibility",
                                    duration: {
                                        min: 60,
                                        max: 440
                                    }
                                },
                                {
                                    type: "minecraft:slow_falling",
                                    duration: {
                                        min: 60,
                                        max: 440
                                    }
                                },
                                {
                                    type: "minecraft:glowing",
                                    duration: {
                                        min: 60,
                                        max: 500
                                    }
                                }
                            ]
                        }]
                    },
                    {
                        name: "minecraft:shulker_shell",
                        type: "minecraft:item",
                        weight: 2
                    },
                    {
                        name: "minecraft:experience_bottle",
                        type: "minecraft:item",
                        weight: 2,
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
                        name: "mysticalagriculture:obsidian_essence",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 6,
                                max: 15,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:crying_obsidian",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 12,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:chain",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 5,
                                max: 12,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item",
                        weight: 1
                    }
                ]
            },
            {
                rolls: 0,
                bonus_rolls: 1,
                entries: [{
                        name: "minecraft:pink_banner",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:bo,Color:3},{Pattern:bo,Color:3},{Pattern:bo,Color:3}]}}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 188
                    },
                    {
                        name: "minecraft:purple_banner",
                        type: "minecraft:item",
                        weight: 72,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:gra,Color:15},{Pattern:gru,Color:15},{Pattern:sc,Color:2},{Pattern:sc,Color:10},{Pattern:sc,Color:15},{Pattern:flo,Color:2},{Pattern:flo,Color:2},{Pattern:mr,Color:15},{Pattern:mc,Color:10},{Pattern:flo,Color:15},{Pattern:cbo,Color:15},{Pattern:bo,Color:15}]}}"
                        }]
                    },
                    {
                        name: "minecraft:ender_eye",
                        type: "minecraft:item",
                        weight: 140
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/shulker_boxes/strongholds/end_storage_room.json`, loot_table);;
})