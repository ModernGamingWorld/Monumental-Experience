onEvent('server.datapack.high_priority', event => {
    let loot_table = {
    type: "minecraft:chest",
    pools: [{
            rolls: 1,
            entries: [{
                    type: "minecraft:item",
                    name: "minecraft:rose_bush",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 2
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:blue_orchid",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 2
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
                    weight: 5,
                    name: "mysticalagriculture:diamond_essence",
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
                    weight: 80,
                    name: "mysticalagriculture:iron_essence",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 12,
                            max: 24
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 70,
                    name: "mysticalagriculture:gold_essence",
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
                    weight: 50,
                    name: "mysticalagriculture:emerald_essence",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 8,
                            max: 24
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 30,
                    name: "minecraft:gold_nugget",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 48,
                            max: 64
                        }
                    }]
                }
            ]
        },
        {
            rolls: 1,
            entries: [{
                type: "minecraft:loot_table",
                name: "minecraft:chests/village/village_plains_house"
                }]
            }
        ]
    }
    event.addJson(`dungeons_arise:loot_tables/chests/mushroom_village/mushroom_village_normal.json`, loot_table);
})