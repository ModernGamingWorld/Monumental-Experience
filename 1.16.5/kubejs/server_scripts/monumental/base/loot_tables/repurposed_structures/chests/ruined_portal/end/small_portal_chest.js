onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 9,
                    max: 15,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:fire_charge",
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:obsidian_essence",
                        type: "minecraft:item",
                        weight: 20,
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
                        name: "minecraft:crying_obsidian",
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 7,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:flint",
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 15,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:popped_chorus_fruit",
                        type: "minecraft:item",
                        weight: 20,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 13,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:golden_apple",
                        type: "minecraft:item",
                        weight: 15,
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
                        name: "minecraft:gold_ingot",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 9,
                                max: 35,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:golden_sword",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:golden_axe",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:golden_hoe",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:golden_shovel",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:golden_pickaxe",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:golden_boots",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:golden_chestplate",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:golden_helmet",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:golden_leggings",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 15,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    },
                    {
                        name: "minecraft:iron_block",
                        type: "minecraft:item",
                        weight: 12,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 7,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:flint_and_steel",
                        type: "minecraft:item",
                        weight: 8
                    },
                    {
                        name: "minecraft:firework_star",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 3,
                                    max: 7,
                                    type: "minecraft:uniform"
                                }
                            },
                            {
                                function: "set_nbt",
                                tag: "{Explosion:{Colors:[I;8073150], FadeColors:[I;12801229], Trail:1b, Flicker:1b, Type:2b}}"
                            }
                        ]
                    },
                    {
                        name: "minecraft:gold_block",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:glistering_melon_slice",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:golden_horse_armor",
                        type: "minecraft:item",
                        weight: 5
                    },
                    {
                        name: "minecraft:light_weighted_pressure_plate",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:golden_carrot",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 5,
                                max: 15,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:clock",
                        type: "minecraft:item",
                        weight: 5
                    },
                    {
                        name: "minecraft:firework_star",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 3,
                                    max: 7,
                                    type: "minecraft:uniform"
                                }
                            },
                            {
                                function: "set_nbt",
                                tag: "{Explosion:{Colors:[I;12801229], FadeColors:[I;8073150], Trail:1b, Flicker:1b, Type:2b}}"
                            }
                        ]
                    },
                    {
                        name: "minecraft:gold_nugget",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 30,
                                max: 50,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item",
                        weight: 3,
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
                        name: "minecraft:bell",
                        type: "minecraft:item",
                        weight: 2
                    },
                    {
                        name: "minecraft:dragon_breath",
                        type: "minecraft:item",
                        weight: 1
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        weight: 22
                    },
                    {
                        name: "minecraft:map",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:exploration_map",
                            destination: "endcity",
                            decoration: "banner_magenta",
                            zoom: 1,
                            skip_existing_chunks: false
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
                        weight: 5,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:bo,Color:3},{Pattern:bo,Color:3},{Pattern:bo,Color:3}]}}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 12
                    },
                    {
                        name: "minecraft:black_banner",
                        type: "minecraft:item",
                        weight: 28,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:bri,Color:14},{Pattern:bri,Color:10},{Pattern:mc,Color:15},{Pattern:ss,Color:1},{Pattern:ss,Color:14},{Pattern:bri,Color:15},{Pattern:gra,Color:10},{Pattern:gru,Color:14},{Pattern:bo,Color:15},{Pattern:bo,Color:15}]}}"
                        }]
                    },
                    {
                        name: "minecraft:firework_star",
                        type: "minecraft:item",
                        weight: 40,
                        functions: [{
                                function: "minecraft:set_count",
                                count: 2
                            },
                            {
                                function: "set_nbt",
                                tag: "{Explosion:{Colors:[I;12801229], FadeColors:[I;8073150], Trail:1b, Flicker:1b, Type:2b}}"
                            }
                        ]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/ruined_portal/end/small_portal_chest.json`, loot_table);;
})