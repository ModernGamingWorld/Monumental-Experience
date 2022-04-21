onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        name: "minecraft:redstone_block",
                        type: "minecraft:item",
                        weight: 16,
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
                        name: "minecraft:iron_shovel",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.15,
                                    max: 0.8
                                }
                            },
                            {
                                function: "minecraft:enchant_randomly"
                            }
                        ]
                    },
                    {
                        name: "minecraft:saddle",
                        type: "minecraft:item",
                        weight: 12
                    },
                    {
                        name: "minecraft:iron_pickaxe",
                        type: "minecraft:item",
                        weight: 12,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0.15,
                                    max: 0.95
                                }
                            },
                            {
                                function: "minecraft:enchant_randomly"
                            }
                        ]
                    },
                    {
                        name: "minecraft:iron_block",
                        type: "minecraft:item",
                        weight: 12
                    },
                    {
                        name: "minecraft:golden_carrot",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 8,
                                max: 17,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:golden_apple",
                        type: "minecraft:item",
                        weight: 10
                    },
                    {
                        name: "minecraft:diamond",
                        type: "minecraft:item",
                        weight: 8
                    },
                    {
                        name: "minecraft:bone_block",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: 3
                        }]
                    },
                    {
                        name: "minecraft:music_disc_strad",
                        type: "minecraft:item",
                        weight: 5
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item",
                        weight: 5
                    },
                    {
                        name: "minecraft:amethyst_shard",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 1,
                                max: 5
                            },
                            add: false
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 4,
                    max: 6,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:iron_axe",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        name: "mysticalagriculture:obsidian_essence",
                        type: "minecraft:item",
                        weight: 1,
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
                        name: "minecraft:lantern",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:deepslate_redstone_ore",
                        type: "minecraft:item",
                        weight: 1,
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
                        name: "minecraft:iron_ore",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 7,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:mycelium",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 7,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:redstone_essence",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 7,
                                max: 20,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:cow_essence",
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
                        name: "minecraft:arrow",
                        type: "minecraft:item",
                        weight: 1,
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
                        name: "mysticalagriculture:spider_essence",
                        type: "minecraft:item",
                        weight: 1,
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
                        name: "mysticalagriculture:skeleton_essence",
                        type: "minecraft:item",
                        weight: 1,
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
                        name: "mysticalagriculture:zombie_essence",
                        type: "minecraft:item",
                        weight: 1,
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
                        name: "minecraft:bread",
                        type: "minecraft:item",
                        weight: 1,
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
                        name: "minecraft:red_mushroom",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 7,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:brown_mushroom",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 7,
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
                        weight: 16
                    },
                    {
                        name: "minecraft:black_banner",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cr,Color:0},{Pattern:cr,Color:15},{Pattern:cbo,Color:0},{Pattern:cbo,Color:15},{Pattern:bo,Color:0},{Pattern:bo,Color:0},{Pattern:mr,Color:8},{Pattern:mr,Color:8},{Pattern:mr,Color:15},{Pattern:bo,Color:15},{Pattern:mc,Color:7},{Pattern:mc,Color:15}]}}"
                        }]
                    },
                    {
                        name: "mysticalagriculture:skeleton_essence",
                        type: "minecraft:item",
                        weight: 4
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/bastions/underground/skeleton_horse_stable.json`, loot_table);;
});