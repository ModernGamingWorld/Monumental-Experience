onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
    type: "minecraft:chest",
    pools: [{
            rolls: 1,
            entries: [{
                    type: "minecraft:item",
                    weight: 20,
                    name: "minecraft:golden_apple"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:enchanted_golden_apple"
                },
                {
                    type: "minecraft:item",
                    weight: 30,
                    name: "minecraft:name_tag"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:enchant_randomly"
                    }],
                    name: "minecraft:book"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    name: "minecraft:iron_pickaxe"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    name: "routerreborn:coppercoil"
                },
            ]
        },
        {
            rolls: {
                min: 2,
                max: 4,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 5,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:iron_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:gold_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 9,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:redstone_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 9,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:lapis_lazuli_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 2,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:diamond_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 3,
                            max: 8,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:coal_essence"
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
                    name: "minecraft:bread"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:melon_seeds"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:pumpkin_seeds"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:beetroot_seeds"
                }
            ]
        },
        {
            rolls: 3,
            entries: [{
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 8,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:rail"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:powered_rail"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:detector_rail"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:activator_rail"
                },
                {
                    type: "minecraft:item",
                    weight: 15,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 16,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:torch"
                    }
                ]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/chests/abandoned_mineshaft.json`, loot_table);
});