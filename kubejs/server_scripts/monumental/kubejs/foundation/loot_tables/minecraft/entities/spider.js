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
                    name: "minecraft:string"
                }]
            },
            {
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
                    name: "mysticalagriculture:spider_essence"
                }],
                conditions: [{
                    condition: "minecraft:killed_by_player"
                }]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/entities/spider.json`, loot_table);
});