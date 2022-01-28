onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 2,
                    max: 5,
                    type: "minecraft:uniform"
                },
                entries: [{
                        name: "mysticalagriculture:diamond_essence",
                        type: "minecraft:item",
                        weight: 6,
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
                        weight: 8,
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
                        name: "mysticalagriculture:lapis_lazuli_essence",
                        type: "minecraft:item",
                        weight: 20,
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
                        name: "mysticalagriculture:emerald_essence",
                        type: "minecraft:item",
                        weight: 16,
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
                        name: "mysticalagriculture:skeleton_essence",
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 4,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:snowball",
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
                        name: "mysticalagriculture:zombie_essence",
                        type: "minecraft:item",
                        weight: 15,
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
                        name: "minecraft:saddle",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        weight: 30,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        name: "minecraft:iron_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:golden_horse_armor"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:diamond_horse_armor"
                    },
                    {
                        name: "minecraft:golden_apple",
                        type: "minecraft:item",
                        weight: 20
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item",
                        weight: 2
                    },
                    {
                        type: "minecraft:empty",
                        weight: 10
                    }
                ]
            },
            {
                rolls: 4,
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
                        weight: 15,
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
                        name: "mysticalagriculture:ice_essence",
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
                        weight: 24
                    },
                    {
                        name: "minecraft:blue_banner",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:bri,Color:11},{Pattern:ss,Color:11},{Pattern:flo,Color:4},{Pattern:flo,Color:4},{Pattern:flo,Color:11},{Pattern:gru,Color:3},{Pattern:bt,Color:15},{Pattern:bt,Color:15},{Pattern:bt,Color:0},{Pattern:bts,Color:15},{Pattern:bts,Color:0},{Pattern:gra,Color:15}]}}"
                        }]
                    },
                    {
                        name: "minecraft:diamond_horse_armor",
                        type: "minecraft:item",
                        weight: 4
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:potion",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{Potion:\"minecraft:regeneration\"}"
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/pyramid/ocean_chest.json`, loot_table);;
})