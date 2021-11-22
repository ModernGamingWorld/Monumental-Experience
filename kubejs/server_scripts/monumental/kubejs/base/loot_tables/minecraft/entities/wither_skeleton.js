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
                                min: -1,
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
                    name: "mysticalagriculture:coal_essence"
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
                                max: 2,
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
                    name: "mysticalagriculture:wither_skeleton_essence"
                }]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:item",
                    name: "minecraft:wither_skeleton_skull"
                }],
                conditions: [{
                        condition: "minecraft:killed_by_player"
                    },
                    {
                        condition: "minecraft:random_chance_with_looting",
                        chance: 0.025,
                        looting_multiplier: 0.01
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/entities/wither_skeleton.json`, loot_table);
});