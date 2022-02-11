onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        type: "minecraft:empty",
                        weight: 80
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:shulker_box",
                        functions: [{
                            function: "minecraft:set_loot_table",
                            name: "minecraft:chests/end_city_treasure"
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 12
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:cobweb"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:stripped_birch_log"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:yellow_concrete"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:yellow_wool"
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:loot_table",
                    name: "minecraft:chests/woodland_mansion"
                }]
            },
            {
                rolls: {
                    min: 1,
                    max: 8
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:book",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:book",
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 16,
                    max: 32
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:gold_nugget",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 16
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "mysticalagriculture:iron_essence",
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
                        weight: 2,
                        name: "mysticalagriculture:diamond_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "mysticalagriculture:gold_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4
                            }
                        }]
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "mysticalagriculture:emerald_essence",
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 12
                            }
                        }]
                    }
                ]
            },
            {
                rolls: {
                    min: 1,
                    max: 4
                },
                entries: [{
                        type: "minecraft:item",
                        name: "minecraft:shield",
                        functions: [{
                            function: "minecraft:set_nbt",
                            tag: "{HideFlags:1,Unbreakable:1b,Enchantments:[{id:\"minecraft:sharpness\",lvl:8s},{id:\"minecraft:knockback\",lvl:3s}],BlockEntityTag:{Base:10,Patterns:[{Color:3,Pattern:\"sku\"},{Color:15,Pattern:\"cs\"},{Color:15,Pattern:\"cbo\"},{Color:15,Pattern:\"cre\"},{Color:3,Pattern:\"mc\"},{Color:11,Pattern:\"flo\"}]}}"
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:crossbow",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:bow",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_axe",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_pickaxe",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 39
                            },
                            treasure: true
                        }]
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond_sword",
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 20,
                                max: 39
                            },
                            treasure: true
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/pillager_palace_treasure.json`, loot_table);;
});