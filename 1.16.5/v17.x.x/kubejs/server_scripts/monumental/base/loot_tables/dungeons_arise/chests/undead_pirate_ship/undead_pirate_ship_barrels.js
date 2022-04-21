onEvent('server.datapack.high_priority', event => {
    let loot_table = {
    type: "minecraft:chest",
    pools: [{
            rolls: 1,
            entries: [{
                type: "minecraft:item",
                name: "mysticalagriculture:diamond_essence",
                conditions: [{
                    condition: "minecraft:random_chance",
                    chance: 0.03
                }]
            }]
        },
        {
            rolls: {
                min: 1,
                max: 2
            },
            entries: [{
                type: "minecraft:item",
                name: "mysticalagriculture:creeper_essence",
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 1,
                        max: 8
                    }
                }]
            }]
        },
        {
            rolls: {
                min: 0,
                max: 2
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 1,
                    name: "minecraft:tnt",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 1,
                    name: "mysticalagriculture:redstone_essence",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 8
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 1,
                    name: "mysticalagriculture:coal_essence",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 8
                        }
                    }]
                }
            ]
        },
        {
            rolls: {
                min: 1,
                max: 2
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 1,
                    name: "minecraft:spruce_wood",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 3,
                            max: 8
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 1,
                    name: "minecraft:cobweb",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 6
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 1,
                    name: "minecraft:flint",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 6
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 1,
                    name: "minecraft:flint_and_steel",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 1
                            }
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`dungeons_arise:loot_tables/chests/undead_pirate_ship/undead_pirate_ship_barrels.json`, loot_table);;
});