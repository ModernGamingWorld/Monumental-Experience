onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        name: "minecraft:glistering_melon_slice",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item"
                    },
                    {
                        name: "minecraft:name_tag",
                        type: "minecraft:item",
                        weight: 30
                    },
                    {
                        name: "minecraft:compass",
                        type: "minecraft:item",
                        weight: 5
                    },
                    {
                        name: "minecraft:shears",
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
                        name: "minecraft:iron_pickaxe",
                        type: "minecraft:item",
                        weight: 5
                    },
                    {
                        type: "minecraft:empty",
                        weight: 5
                    }
                ]
            },
            {
                rolls: {
                    min: 2,
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
                                max: 5,
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
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:redstone_essence",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 9,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:lapis_lazuli_essence",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 9,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:diamond_essence",
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
                        name: "mysticalagriculture:coal_essence",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 6,
                                max: 12,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:bread",
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
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 7,
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
                        name: "minecraft:melon_seeds",
                        type: "minecraft:item",
                        weight: 7,
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
                        name: "minecraft:cocoa_beans",
                        type: "minecraft:item",
                        weight: 7,
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
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 7,
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
                        name: "mysticalagriculture:nature_essence",
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
                        name: "minecraft:poisonous_potato",
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
                    }
                ]
            },
            {
                rolls: 3,
                entries: [{
                        name: "minecraft:rail",
                        type: "minecraft:item",
                        weight: 20,
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
                        name: "minecraft:powered_rail",
                        type: "minecraft:item",
                        weight: 5,
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
                        name: "minecraft:detector_rail",
                        type: "minecraft:item",
                        weight: 5,
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
                        name: "minecraft:activator_rail",
                        type: "minecraft:item",
                        weight: 5,
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
                                min: 1,
                                max: 16,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:scaffolding",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 16,
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
                        name: "minecraft:black_banner",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:gra,Color:14},{Pattern:gra,Color:14},{Pattern:gru,Color:14},{Pattern:gru,Color:5},{Pattern:gru,Color:5},{Pattern:sku,Color:0},{Pattern:sku,Color:14},{Pattern:sku,Color:5},{Pattern:cbo,Color:15},{Pattern:bo,Color:15},{Pattern:drs,Color:5},{Pattern:ss,Color:15}]}}"
                        }]
                    },
                    {
                        name: "minecraft:tnt",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: 2
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/mineshaft/jungle.json`, loot_table);;
})