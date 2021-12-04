onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 2,
                    max: 8,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:apple"
                    },
                    {
                        type: "minecraft:item",
                        weight: 15,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 4,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:coal_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:gold_nugget"
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecraft:stone_axe"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        name: "minecraft:rotten_flesh"
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:emerald_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 10,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "minecraft:wheat"
                    }
                ]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:item",
                    name: "minecraft:golden_apple"
                }]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/chests/igloo_chest.json`, loot_table);
});