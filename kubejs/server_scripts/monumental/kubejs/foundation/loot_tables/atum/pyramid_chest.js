onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [{
                name: "atum:pyramid_chest",
                rolls: {
                    min: 2,
                    max: 5
                },
                entries: [{
                        type: "item",
                        name: "'mysticalagriculture:spider_essence'",
                        entryName: "spider_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 75
                    },
                    {
                        type: "item",
                        name: "mysticalagriculture:chicken_essence",
                        entryName: "chicken_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 75
                    },
                    {
                        type: "item",
                        name: "'mysticalagriculture:draconium_essence'",
                        entryName: "draconium_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }],
                        weight: 5
                    },
                    {
                        type: "item",
                        name: "mysticalagriculture:cow_essence",
                        entryName: "cow_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 75
                    },
                    {
                        type: "item",
                        name: "atum:cloth_scrap",
                        entryName: "cloth_scrap",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 75
                    },
                    {
                        type: "item",
                        name: "mysticalagriculture:creeper_essence",
                        entryName: "creeper_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 50
                    },
                    {
                        type: "item",
                        name: "atum:fertile_soil_pile",
                        entryName: "fertile_soil_pile",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 40
                    },
                    {
                        type: "item",
                        name: "mysticalagriculture:zombie_essence",
                        entryName: "zombie_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 100
                    },
                    {
                        type: "item",
                        name: "atum:dusty_bone",
                        entryName: "dusty_bone",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 100
                    },
                    {
                        type: "item",
                        name: "mysticalagriculture:redstone_essence",
                        entryName: "redstone_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 50
                    },
                    {
                        type: "item",
                        name: "mysticalagriculture:coal_essence",
                        entryName: "coal_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 45
                    },
                    {
                        type: "item",
                        name: "atum:date",
                        entryName: "date",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }],
                        weight: 45
                    },
                    {
                        type: "item",
                        name: "atum:emmer_seeds",
                        entryName: "emmer_seeds",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 40
                    },
                    {
                        type: "item",
                        name: "melon_seeds",
                        entryName: "melon_seeds",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 20
                    },
                    {
                        type: "item",
                        name: "atum:golden_date",
                        entryName: "golden_date",
                        weight: 1
                    },
                    {
                        type: "item",
                        name: "atum:golden_date_enchanted",
                        entryName: "golden_date_enchanted",
                        weight: 1
                    },
                    {
                        type: "loot_table",
                        name: "atum:chests/subloot/iron_weapons_0",
                        weight: 75,
                        quality: 2
                    },
                    {
                        type: "loot_table",
                        name: "atum:chests/subloot/iron_weapons_25",
                        weight: 10,
                        quality: 2
                    },
                    {
                        type: "loot_table",
                        name: "atum:chests/subloot/iron_armor_0",
                        weight: 75,
                        quality: 2
                    },
                    {
                        type: "loot_table",
                        name: "atum:chests/subloot/iron_armor_25",
                        weight: 10,
                        quality: 2
                    },
                    {
                        type: "loot_table",
                        name: "atum:chests/subloot/diamond_weapons_35",
                        weight: 2,
                        quality: 2
                    },
                    {
                        type: "loot_table",
                        name: "atum:chests/subloot/diamond_armor_35",
                        weight: 2,
                        quality: 2
                    },
                    {
                        type: "item",
                        name: "mysticalagriculture:iron_essence",
                        entryName: "iron_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }],
                        weight: 20
                    },
                    {
                        type: "item",
                        name: "mysticalagriculture:gold_essence",
                        entryName: "gold_essence",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 2
                            }
                        }],
                        weight: 20
                    },
                    {
                        type: "item",
                        name: "atum:nebu_torch",
                        entryName: "nebu_torch",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 1
                            }
                        }],
                        weight: 40
                    },
                    {
                        type: "item",
                        name: "atum:coin_dirty",
                        entryName: "coin_dirty",
                        functions: [{
                            function: "set_count",
                            count: {
                                min: 1,
                                max: 3
                            }
                        }],
                        weight: 45
                    },
                    {
                        type: "item",
                        name: "atum:relic_dirty_ring",
                        entryName: "loot_dirty_ring",
                        weight: 20
                    },
                    {
                        type: "item",
                        name: "atum:relic_dirty_necklace",
                        entryName: "loot_dirty_necklace",
                        weight: 15
                    },
                    {
                        type: "item",
                        name: "atum:relic_dirty_brooch",
                        entryName: "loot_dirty_brooch",
                        weight: 10
                    },
                    {
                        type: "item",
                        name: "atum:relic_dirty_bracelet",
                        entryName: "loot_dirty_bracelet",
                        weight: 5
                    },
                    {
                        type: "item",
                        name: "atum:relic_dirty_idol",
                        entryName: "loot_dirty_idol",
                        weight: 1
                    },
                    {
                        type: "item",
                        name: "minecraft:name_tag",
                        entryName: "name_tag",
                        weight: 10
                    },
                    {
                        type: "item",
                        name: "atum:desert_wolf_iron_armor",
                        entryName: "desert_wolf_iron_armor",
                        weight: 10
                    },
                    {
                        type: "item",
                        name: "atum:desert_wolf_gold_armor",
                        entryName: "desert_wolf_gold_armor",
                        weight: 5
                    },
                    {
                        type: "item",
                        name: "atum:desert_wolf_diamond_armor",
                        entryName: "desert_wolf_diamond_armor",
                        weight: 3
                    },
                    {
                        type: "item",
                        name: "atum:camel_iron_armor",
                        entryName: "camel_iron_armor",
                        weight: 10
                    },
                    {
                        type: "item",
                        name: "atum:camel_gold_armor",
                        entryName: "camel_gold_armor",
                        weight: 5
                    },
                    {
                        type: "item",
                        name: "atum:camel_diamond_armor",
                        entryName: "camel_diamond_armor",
                        weight: 3
                    },
                    {
                        type: "item",
                        name: "minecraft:totem_of_undying",
                        entryName: "totem_of_undying",
                        weight: 5
                    },
                    {
                        type: "item",
                        name: "minecraft:book",
                        entryName: "enchanted_book",
                        functions: [{
                            function: "enchant_randomly"
                        }],
                        weight: 20
                    }
                ]
            },
            {
                name: "atum:pyramid_sand",
                rolls: 1,
                entries: [{
                    type: "item",
                    name: "atum:sand",
                    entryName: "sand",
                    functions: [{
                        function: "set_count",
                        count: {
                            min: 1,
                            max: 8
                        }
                    }],
                    weight: 1
                }]
            },
            {
                name: "atum:pyramid_chest_artifact",
                rolls: {
                    min: 0,
                    max: 1
                },
                entries: [{
                        type: "loot_table",
                        name: "atum:gods/all",
                        weight: 1,
                        quality: 2
                    },
                    {
                        type: "empty",
                        weight: 100
                    }
                ]
            }
        ]
    };
    event.addJson(`atum:loot_tables/chests/pyramid_chest.json`, loot_table);
});