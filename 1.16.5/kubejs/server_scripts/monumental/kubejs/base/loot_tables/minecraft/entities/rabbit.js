onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:entity",
        pools: [{
                rolls: 1,
                entries: [{
                    type: "minecraft:item",
                    functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 0,
                                max: 1,
                                type: "minecraft:uniform"
                            }
                        },
                        {
                            function: "minecraft:looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }
                    ],
                    name: "mysticalagriculture:rabbit_essence"
                }]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:item",
                    functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 0,
                                max: 1,
                                type: "minecraft:uniform"
                            }
                        },
                        {
                            function: "minecraft:furnace_smelt",
                            conditions: [{
                                condition: "minecraft:entity_properties",
                                predicate: {
                                    flags: {
                                        is_on_fire: true
                                    }
                                },
                                entity: "this"
                            }]
                        },
                        {
                            function: "minecraft:looting_enchant",
                            count: {
                                min: 0,
                                max: 1
                            }
                        }
                    ],
                    name: "minecraft:rabbit"
                }]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:item",
                    name: "minecraft:rabbit_foot"
                }],
                conditions: [{
                        condition: "minecraft:killed_by_player"
                    },
                    {
                        condition: "minecraft:random_chance_with_looting",
                        chance: 0.1,
                        looting_multiplier: 0.03
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/entities/rabbit.json`, loot_table);
});