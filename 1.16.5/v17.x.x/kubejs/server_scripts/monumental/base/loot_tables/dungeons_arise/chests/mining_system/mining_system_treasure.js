onEvent('server.datapack.high_priority', event => {
    let loot_table = {
    type: "minecraft:chest",
    pools: [{
            rolls: 1,
            entries: [{
                    type: "minecraft:item",
                    name: "minecraft:brown_mushroom",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:red_mushroom",
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
                    weight: 3,
                    name: "minecraft:baked_potato",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 12,
                            max: 18
                        }
                    }]
                }
            ]
        },
        {
            rolls: 1,
            entries: [{
                    type: "minecraft:empty",
                    weight: 2000
                },
                {
                    type: "minecraft:tag",
                    weight: 2,
                    name: "minecraft:music_discs",
                    expand: true
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
                    weight: 5,
                    name: "mysticalagriculture:coal_essence",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 12
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 2,
                    name: "minecraft:gold_ore",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 3,
                            max: 12
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    name: "minecraft:iron_ore",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 16
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 8,
                    name: "mysticalagriculture:iron_essence",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 16
                        }
                    }]
                }
            ]
        },
        {
            rolls: 1,
            entries: [{
                type: "minecraft:loot_table",
                name: "minecraft:chests/simple_dungeon"
                }]
            }
        ]
    }
    event.addJson(`dungeons_arise:loot_tables/chests/mining_system/mining_system_treasure.json`, loot_table);
})