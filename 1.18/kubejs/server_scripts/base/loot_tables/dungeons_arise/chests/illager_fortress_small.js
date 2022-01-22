onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 0,
                    max: 3
                },
                entries: [{
                    type: "minecraft:empty"
                }]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:tag",
                        name: "minecraft:arrows",
                        expand: true,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 10
                    },
                    {
                        type: "minecraft:tag",
                        weight: 2,
                        name: "minecraft:music_discs",
                        expand: true
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:crossbow",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{Enchantments:[{id:\"minecraft:quick_charge\",lvl:4s}]}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 4000
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:iron_helmet",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 30
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_leggings",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 30
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_chestplate",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 30
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:iron_boots",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 10,
                                max: 30
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 2
                },
                entries: [{
                        type: "minecraft:item",
                        name: "mysticalagriculture:diamond_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 50,
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 8
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 70,
                        name: "mysticalagriculture:iron_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 16
                            }
                        }]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        weight: 400
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:diamond_helmet"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:diamond_boots"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:diamond_leggings"
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:diamond_chestplate"
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:loot_table",
                    name: "minecraft:chests/simple_dungeon"
                }]
            }
        ],
        type: "minecraft:chest"
    }
    event.addJson(`dungeons_arise:loot_tables/chests/chests/illager_fortress_small.json`, loot_table);;
});