onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: {
                    min: 3,
                    max: 5,
                    type: "minecraft:uniform"
                },
                entries: [{
                        type: "minecraft:item",
                        weight: 18,
                        name: "astralsorcery:constellation_paper"
                    },
                    {
                        type: "minecraft:item",
                        weight: 12,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "astralsorcery:aquamarine"
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 1,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "enigmaticlegacy:etherium_scythe"
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
                        name: "mysticalagriculture:skeleton_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 2,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:gold_essence"
                    },
                    {
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
                        name: "mysticalagriculture:iron_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecraft:diamond"
                    },
                    {
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 3,
                                type: "minecraft:uniform"
                            }
                        }],
                        name: "mysticalagriculture:glowstone_essence"
                    },
                    {
                        type: "minecraft:item",
                        name: "mysticalagriculture:emerald_essence"
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "mysticalagriculture:enderman_essence"
                    }
                ],
                bonus_rolls: {
                    min: 1,
                    max: 2
                }
        }]
    };
    event.addJson(`astralsorcery:loot_tables/shrine_chest.json`, loot_table);
});