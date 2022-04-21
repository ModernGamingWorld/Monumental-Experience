onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 0,
                    max: 1,
                    type: "minecraft:uniform"
                },
                entries: [{
                    name: "minecraft:crossbow",
                    type: "minecraft:item"
                }]
            },
            {
                rolls: {
                    min: 2,
                    max: 3,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:gold_ore",
                        type: "minecraft:item",
                        weight: 7,
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
                        name: "minecraft:dead_bush",
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
                        name: "minecraft:cobweb",
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
                    name: "minecraft:chiseled_red_sandstone",
                    type: "minecraft:item",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }]
                }]
            },
            {
                rolls: {
                    min: 2,
                    max: 3,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "minecraft:experience_bottle",
                        type: "minecraft:item",
                        weight: 7
                    },
                    {
                        name: "mysticalagriculture:spider_essence",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:arrow",
                        type: "minecraft:item",
                        weight: 4,
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
                        name: "minecraft:tripwire_hook",
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
                    },
                    {
                        name: "mysticalagriculture:iron_essence",
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
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        functions: [{
                            function: "minecraft:enchant_randomly"
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
                        name: "minecraft:orange_banner",
                        type: "minecraft:item",
                        weight: 140,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:gra,Color:14},{Pattern:tt,Color:14},{Pattern:bt,Color:1},{Pattern:bts,Color:15},{Pattern:tts,Color:15},{Pattern:ms,Color:15},{Pattern:mr,Color:15},{Pattern:flo,Color:0},{Pattern:flo,Color:1},{Pattern:flo,Color:14},{Pattern:sc,Color:15},{Pattern:flo,Color:15}]}}"
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
    event.addJson(`repurposed_structures:loot_tables/chests/outpost/birch_chest.json`, loot_table);;
})