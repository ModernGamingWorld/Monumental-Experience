onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        name: "minecraft:stone",
                        weight: 10
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:enchanted_book",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{StoredEnchantments:[{id:\"minecraft:looting\",lvl:4s},{id:\"minecraft:fortune\",lvl:4s}]}",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }],
                        weight: 1
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 8
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:wither_skeleton_skull"
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:glowstone_essence",
                        weight: 40
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:glowstone",
                        weight: 40
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:bow",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:crossbow",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            levels: {
                                min: 1,
                                max: 0
                            },
                            count: 1
                        }]
                    }
                ]
            },
            {
                rolls: 3,
                entries: [{
                        type: "minecraft:empty",
                        name: "minecraft:stone",
                        weight: 1
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:book",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 39
                            },
                            count: 1,
                            treasure: true
                        }],
                        weight: 2
                    }
                ]
            },
            {
                rolls: {
                    min: 2,
                    max: 3
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:diamond_helmet",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_boots",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_leggings",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_boots",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_chestplate",
                        functions: [{
                            function: "minecraft:enchant_randomly",
                            count: 1
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 64
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:iron_essence",
                        weight: 5
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:diamond_essence",
                        weight: 2
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:emerald_essence",
                        weight: 3
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:emerald_ore",
                        weight: 3
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:gold_ore",
                        weight: 5
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:loot_table",
                    name: "dungeons_arise:chests/temple_treasure_small"
                }]
            }
        ],
        type: "minecraft:chest"
    }
    event.addJson(`dungeons_arise:loot_tables/chests/temple_treasure_big.json`, loot_table);;
});