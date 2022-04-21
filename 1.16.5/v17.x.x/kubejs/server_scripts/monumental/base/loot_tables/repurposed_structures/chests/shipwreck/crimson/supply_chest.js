onEvent('server.datapack.high_priority', event => {
    let loot_table = {

        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 5,
                    max: 11,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:suspicious_stew",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:set_stew_effect",
                            effects: [{
                                    type: "minecraft:blindness",
                                    duration: {
                                        min: 10,
                                        max: 25
                                    }
                                },
                                {
                                    type: "minecraft:wither",
                                    duration: {
                                        min: 10,
                                        max: 20
                                    }
                                },
                                {
                                    type: "minecraft:weakness",
                                    duration: {
                                        min: 30,
                                        max: 50
                                    }
                                },
                                {
                                    type: "minecraft:poison",
                                    duration: {
                                        min: 15,
                                        max: 30
                                    }
                                },
                                {
                                    type: "minecraft:unluck",
                                    duration: {
                                        min: 200,
                                        max: 400
                                    }
                                },
                                {
                                    type: "minecraft:fire_resistance",
                                    duration: {
                                        min: 360,
                                        max: 600
                                    }
                                },
                                {
                                    type: "minecraft:night_vision",
                                    duration: {
                                        min: 60,
                                        max: 120
                                    }
                                },
                                {
                                    type: "minecraft:saturation",
                                    duration: {
                                        min: 10,
                                        max: 12
                                    }
                                }
                            ]
                        }]
                    },
                    {
                        name: "minecraft:paper",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 12,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:crimson_fungus",
                        type: "minecraft:item",
                        weight: 7,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 12,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:nether_wart_block",
                        type: "minecraft:item",
                        weight: 7,
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
                        name: "minecraft:shroomlight",
                        type: "minecraft:item",
                        weight: 7,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 5,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:ghast_essence",
                        type: "minecraft:item",
                        weight: 6,
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
                        name: "minecraft:firework_star",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3,
                                    type: "minecraft:uniform"
                                }
                            },
                            {
                                function: "set_nbt",
                                tag: "{Explosion:{Colors:[I;0], FadeColors:[I;12201518], Trail:1b, Flicker:1b, Type:4b}}"
                            }
                        ]
                    },
                    {
                        name: "minecraft:firework_star",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                                function: "minecraft:set_count",
                                count: {
                                    min: 1,
                                    max: 3,
                                    type: "minecraft:uniform"
                                }
                            },
                            {
                                function: "set_nbt",
                                tag: "{Explosion:{Colors:[I;12201518], FadeColors:[I;0], Trail:1b, Flicker:1b, Type:4b}}"
                            }
                        ]
                    },
                    {
                        name: "minecraft:warped_fungus_on_a_stick",
                        type: "minecraft:item",
                        weight: 4
                    },
                    {
                        name: "mysticalagriculture:creeper_essence",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 10,
                                max: 15,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:iron_helmet",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        name: "minecraft:iron_chestplate",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        name: "minecraft:iron_leggings",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        name: "minecraft:iron_boots",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        name: "minecraft:red_stained_glass_pane",
                        type: "minecraft:item",
                        weight: 2,
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
                        name: "minecraft:black_stained_glass_pane",
                        type: "minecraft:item",
                        weight: 2,
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
                        type: "minecraft:empty",
                        weight: 1
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
                                        min: 10,
                                        max: 25
                                    }
                                },
                                {
                                    type: "minecraft:wither",
                                    duration: {
                                        min: 10,
                                        max: 20
                                    }
                                },
                                {
                                    type: "minecraft:weakness",
                                    duration: {
                                        min: 30,
                                        max: 50
                                    }
                                },
                                {
                                    type: "minecraft:poison",
                                    duration: {
                                        min: 15,
                                        max: 30
                                    }
                                },
                                {
                                    type: "minecraft:unluck",
                                    duration: {
                                        min: 200,
                                        max: 400
                                    }
                                },
                                {
                                    type: "minecraft:fire_resistance",
                                    duration: {
                                        min: 360,
                                        max: 600
                                    }
                                },
                                {
                                    type: "minecraft:night_vision",
                                    duration: {
                                        min: 60,
                                        max: 120
                                    }
                                },
                                {
                                    type: "minecraft:saturation",
                                    duration: {
                                        min: 10,
                                        max: 12
                                    }
                                }
                            ]
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/shipwreck/crimson/supply_chest.json`, loot_table);;
})