onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: 'minecraft:chest',
        pools: [
            {
                rolls: {
                    min: 6.0,
                    max: 10.0,
                    type: 'minecraft:uniform'
                },
                entries: [
                    {
                        type: 'minecraft:item',
                        weight: 15,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 3.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'mysticalagriculture:iron_essence'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 15,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 4.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'mysticalagriculture:prismarine_essence'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 10,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 2.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'mysticalagriculture:emerald_essence'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 10,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 4.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'minecraft:gold_nugget'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 8,
                        name: 'mysticalagriculture:enderman_essence'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 5,
                        name: 'minecraft:compass'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 3,
                        functions: [
                            {
                                function: 'minecraft:enchant_with_levels',
                                levels: 30,
                                treasure: true
                            }
                        ],
                        name: 'minecraft:book'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 2,
                        functions: [
                            {
                                function: 'minecraft:enchant_with_levels',
                                levels: 30,
                                treasure: true
                            }
                        ],
                        name: 'minecraft:heart_of_the_sea'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 3,
                        functions: [
                            {
                                function: 'minecraft:enchant_with_levels',
                                levels: 30,
                                treasure: true
                            }
                        ],
                        name: 'minecraft:book'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'tconstruct:sky_slime_sling'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'tconstruct:sky_slime_boots'
                    },
                    {
                        type: 'item',
                        weight: 2,
                        name: 'apotheosis:potion_charm',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{Damage:0,Potion:\"minecraft:long_slow_falling\"}`
                            }
                        ]
                    },
                    {
                        type: 'item',
                        weight: 1,
                        name: 'minecraft:enchanted_book',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{StoredEnchantments:[{lvl:5s,id:\"minecraft:feather_falling\"}]}`
                            }
                        ]
                    },
                    {
                        type: 'minecraft:item',
                        weight: 15,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 4.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'aquaculture:neptunium_nugget'
                    },
                    {
                        type: 'item',
                        weight: 1,
                        name: 'minecraft:trident',
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                levels: 30,
                                treasure: true
                            }
                        ]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [
                    {
                        type: 'minecraft:item',
                        name: 'minecraft:map'
                    }
                ]
            }
        ]
    };
    event.addJson(`towers_of_the_wild:loot_tables/chests/tower/ocean/ocean_tower_chest.json`, loot_table);
});
