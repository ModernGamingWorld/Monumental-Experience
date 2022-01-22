onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
    type: "minecraft:chest",
    pools: [{
        rolls: {
            min: 3,
            max: 10,
            type: "minecraft:uniform"
        },
        entries: [{
                type: "minecraft:item",
                weight: 8,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 12,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:paper"
            },
            {
                type: "minecraft:item",
                weight: 7,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 2,
                        max: 6,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:potato"
            },
            {
                type: "minecraft:item",
                weight: 7,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 2,
                        max: 6,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:poisonous_potato"
            },
            {
                type: "minecraft:item",
                weight: 7,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 4,
                        max: 8,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:carrot"
            },
            {
                type: "minecraft:item",
                weight: 7,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 8,
                        max: 21,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:wheat"
            },
            {
                type: "minecraft:item",
                weight: 10,
                functions: [{
                    function: "minecraft:set_stew_effect",
                    effects: [{
                            type: "minecraft:jump_boost",
                            duration: {
                                min: 7,
                                max: 10
                            }
                        },
                        {
                            type: "minecraft:saturation",
                            duration: {
                                min: 7,
                                max: 10
                            }
                        },
                        {
                            type: "minecraft:blindness",
                            duration: {
                                min: 5,
                                max: 7
                            }
                        },
                        {
                            type: "minecraft:poison",
                            duration: {
                                min: 10,
                                max: 20
                            }
                        },
                        {
                            type: "minecraft:night_vision",
                            duration: {
                                min: 7,
                                max: 10
                            }
                        },
                        {
                            type: "minecraft:weakness",
                            duration: {
                                min: 6,
                                max: 8
                            }
                        }
                    ]
                }],
                name: "minecraft:suspicious_stew"
            },
            {
                type: "minecraft:item",
                weight: 6,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 2,
                        max: 8,
                        type: "minecraft:uniform"
                    }
                }],
                name: "mysticalagriculture:coal_essence"
            },
            {
                type: "minecraft:item",
                weight: 5,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 5,
                        max: 24,
                        type: "minecraft:uniform"
                    }
                }],
                name: "mysticalagriculture:zombie_essence"
            },
            {
                type: "minecraft:item",
                weight: 2,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 3,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:pumpkin"
            },
            {
                type: "minecraft:item",
                weight: 2,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 3,
                        type: "minecraft:uniform"
                    }
                }],
                name: "mysticalagriculture:nature_essence"
            },
            {
                type: "minecraft:item",
                weight: 3,
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 5,
                        type: "minecraft:uniform"
                    }
                }],
                name: "mysticalagriculture:creeper_essence"
            },
            {
                type: "minecraft:item",
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 2,
                        type: "minecraft:uniform"
                    }
                }],
                name: "minecraft:tnt"
            },
            {
                type: "minecraft:item",
                weight: 3,
                functions: [{
                    function: "minecraft:enchant_randomly"
                }],
                name: "minecraft:leather_helmet"
            },
            {
                type: "minecraft:item",
                weight: 3,
                functions: [{
                    function: "minecraft:enchant_randomly"
                }],
                name: "minecraft:leather_chestplate"
            },
            {
                type: "minecraft:item",
                weight: 3,
                functions: [{
                    function: "minecraft:enchant_randomly"
                }],
                name: "minecraft:leather_leggings"
            },
            {
                type: "minecraft:item",
                weight: 3,
                functions: [{
                    function: "minecraft:enchant_randomly"
                }],
                name: "minecraft:leather_boots"
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/chests/shipwreck_supply.json`, loot_table);
});