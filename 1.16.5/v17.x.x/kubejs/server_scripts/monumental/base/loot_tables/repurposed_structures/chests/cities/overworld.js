onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    type: "minecraft:uniform",
                    min: 2,
                    max: 4
                },
                entries: [{
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 8
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:bread",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 7
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:pig_essence",
                        type: "minecraft:item",
                        weight: 6,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 6,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:cow_essence",
                        type: "minecraft:item",
                        weight: 6,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:sheep_essence",
                        type: "minecraft:item",
                        weight: 6,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:cod",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:chicken_essence",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:salmon",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 5
                            },
                            add: false
                        }]
                    }
                ]
            },
            {
                rolls: {
                    type: "minecraft:uniform",
                    min: 1,
                    max: 4
                },
                entries: [{
                        name: "minecraft:map",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 1,
                                max: 2
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:arrow",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 7
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:compass",
                        type: "minecraft:item",
                        weight: 2
                    },
                    {
                        name: "minecraft:water_bucket",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 1,
                                max: 3
                            },
                            add: false
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_helmet",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_chestplate",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_leggings",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_boots",
                        weight: 1
                    },
                    {
                        name: "minecraft:iron_pickaxe",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        name: "minecraft:iron_sword",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        name: "minecraft:iron_shovel",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:shears",
                        weight: 1
                    },
                    {
                        name: "minecraft:leather_chestplate",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        name: "minecraft:leather_boots",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        name: "minecraft:leather_helmet",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        name: "minecraft:leather_leggings",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:saddle",
                        weight: 1
                    },
                    {
                        name: "minecraft:iron_horse_armor",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        name: "minecraft:golden_horse_armor",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        name: "minecraft:diamond_horse_armor",
                        type: "minecraft:item",
                        weight: 1
                    }
                ]
            },
            {
                rolls: {
                    type: "minecraft:uniform",
                    min: 3,
                    max: 5
                },
                entries: [{
                        name: "minecraft:paper",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 7
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:emerald_essence",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:oak_sapling",
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 4
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:coal_essence",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 4,
                                max: 15
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:flint",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 7
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:iron_essence",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:chicken_essence",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:dandelion",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 1,
                                max: 4
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:redstone_essence",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:obsidian_essence",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 4,
                                max: 8
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:zombie_essence",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 4
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:diamond_essence",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 4
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:gold_essence",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:lapis_lazuli_essence",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:stone_bricks",
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
                    },
                    {
                        name: "mysticalagriculture:stone_essence",
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
                    },
                    {
                        name: "minecraft:yellow_dye",
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
                    },
                    {
                        name: "minecraft:smooth_stone",
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
                    },
                    {
                        name: "minecraft:clay_ball",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "mysticalagriculture:cow_essence",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:flower_pot",
                        type: "minecraft:item",
                        weight: 1
                    },
                    {
                        name: "minecraft:white_wool",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 3,
                                max: 10
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:black_wool",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:gray_wool",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:brown_wool",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:light_gray_wool",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 5
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:poppy",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 1,
                                max: 4
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:gold_nugget",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 1,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:stick",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:barrel",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 1,
                                max: 3
                            },
                            add: false
                        }]
                    },
                    {
                        name: "minecraft:wheat_seeds",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                type: "minecraft:uniform",
                                min: 2,
                                max: 6
                            },
                            add: false
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
                        name: "minecraft:brown_banner",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:gru,Color:14},{Pattern:gru,Color:15},{Pattern:gra,Color:12},{Pattern:hhb,Color:7},{Pattern:ss,Color:15},{Pattern:pig,Color:8},{Pattern:tts,Color:15},{Pattern:bo,Color:15},{Pattern:ms,Color:8},{Pattern:ms,Color:7},{Pattern:ms,Color:15},{Pattern:tts,Color:15}]}}"
                        }]
                    },
                    {
                        name: "minecraft:firework_star",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "set_nbt",
                            tag: "{Explosion:{Type:2b,Flicker:1b,Trail:1b,Colors:[I;11743532,6719955],FadeColors:[I;8073150,12801229]}}"
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/cities/overworld.json`, loot_table);;
});