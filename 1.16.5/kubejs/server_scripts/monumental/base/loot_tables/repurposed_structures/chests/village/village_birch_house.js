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
                        name: "minecraft:gold_nugget",
                        type: "minecraft:item",
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
                        name: "minecraft:oxeye_daisy",
                        type: "minecraft:item",
                        weight: 4
                    },
                    {
                        name: "minecraft:lily_of_the_valley",
                        type: "minecraft:item",
                        weight: 4
                    },
                    {
                        name: "mysticalagriculture:nature_essence",
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
                        name: "minecraft:bread",
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
                        name: "minecraft:carrot",
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
                        name: "mysticalagriculture:chicken_essence",
                        type: "minecraft:item"
                    },
                    {
                        name: "mysticalagriculture:emerald_essence",
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
                        name: "minecraft:birch_sapling",
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
                        name: "minecraft:white_banner",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:gru,Color:12},{Pattern:gru,Color:8},{Pattern:bri,Color:15},{Pattern:bri,Color:0},{Pattern:tts,Color:14},{Pattern:tts,Color:4},{Pattern:bts,Color:14},{Pattern:bts,Color:4},{Pattern:mc,Color:12},{Pattern:flo,Color:15},{Pattern:flo,Color:14},{Pattern:flo,Color:4}]}}"
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
    event.addJson(`repurposed_structures:loot_tables/chests/village/village_birch_house.json`, loot_table);;
})