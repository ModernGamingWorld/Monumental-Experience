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
                    name: "minecraft:arrow",
                    weight: 3,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 5,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:bone",
                    weight: 3,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 5,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:snowball",
                    weight: 2,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:flint",
                    weight: 1,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 2,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "mysticalagriculture:chicken_essence",
                    weight: 1,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 2,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "mysticalagriculture:spider_essence",
                    weight: 1,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 2,
                            type: "minecraft:uniform"
                        }
                    }]
                }
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
                    name: "mysticalagriculture:ice_essence",
                    weight: 2,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "mysticalagriculture:iron_essence",
                    weight: 4,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "mysticalagriculture:redstone_essence",
                    weight: 4,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "mysticalagriculture:coal_essence",
                    weight: 4,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:bow",
                    weight: 1
                }
            ]
        },
        {
            rolls: {
                min: 1,
                max: 3,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    name: "minecraft:bow",
                    weight: 2,
                    functions: [{
                        function: "minecraft:enchant_randomly"
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:chainmail_chestplate",
                    weight: 2
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:book",
                    weight: 5,
                    functions: [{
                        function: "minecraft:enchant_randomly"
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:music_disc_wait",
                    weight: 1
                    }
                ]
            }
        ]
    };

    event.addJson(`dungeons_plus:loot_tables/chests/bigger_dungeon/stray.json`, loot_table);
});