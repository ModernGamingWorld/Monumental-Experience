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
                        weight: 10,
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
                        weight: 2,
                        name: "minecraft:stone_axe"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "mysticalagriculture:zombie_essence"
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
                        name: "minecraft:leather_chestplate"
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:golden_helmet"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:enchant_randomly"
                        }],
                        name: "minecraft:fishing_rod"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:exploration_map",
                            decoration: "red_x",
                            zoom: 1,
                            skip_existing_chunks: false
                        }],
                        name: "minecraft:map"
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/chests/underwater_ruin_small.json`, loot_table);
});