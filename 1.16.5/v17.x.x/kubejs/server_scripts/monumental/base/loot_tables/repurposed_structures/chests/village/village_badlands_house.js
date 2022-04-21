onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 3,
                    max: 8,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:clay_ball",
                        type: "minecraft:item",
                        weight: 2
                    },
                    {
                        name: "minecraft:green_dye",
                        type: "minecraft:item",
                        weight: 2
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
                        name: "minecraft:red_terracotta",
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
                        name: "mysticalagriculture:nature_essence",
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
                        name: "mysticalagriculture:nature_essence",
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
                        name: "minecraft:book",
                        type: "minecraft:item"
                    },
                    {
                        name: "minecraft:stick",
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
                        name: "minecraft:dead_bush",
                        type: "minecraft:item",
                        weight: 7,
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
                        name: "minecraft:gold_nugget",
                        type: "minecraft:item",
                        weight: 2,
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
                        weight: 1,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:bo,Color:3},{Pattern:bo,Color:3},{Pattern:bo,Color:3}]}}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 4
                    },
                    {
                        name: "minecraft:orange_banner",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:gru,Color:14},{Pattern:gru,Color:4},{Pattern:bri,Color:15},{Pattern:bri,Color:1},{Pattern:tts,Color:14},{Pattern:tts,Color:4},{Pattern:bts,Color:14},{Pattern:bts,Color:4},{Pattern:mc,Color:0},{Pattern:flo,Color:15},{Pattern:flo,Color:14},{Pattern:flo,Color:4}]}}"
                        }]
                    },
                    {
                        name: "mysticalagriculture:emerald_essence",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: 3
                        }]
                    },
                    {
                        name: "minecraft:iron_hoe",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                                function: "minecraft:set_damage",
                                damage: {
                                    min: 0,
                                    max: 0.6
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
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/village/village_badlands_house.json`, loot_table);;
})