onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
    type: "minecraft:chest",
    pools: [{
            rolls: 1,
            entries: [{
                type: "minecraft:item",
                name: "minecraft:experience_bottle",
                functions: [{
                    function: "minecraft:set_count",
                    count: {
                        min: 12,
                        max: 18
                    }
                }]
            }]
        },
        {
            rolls: 1,
            entries: [{
                    type: "minecraft:item",
                    name: "minecraft:diamond_helmet",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 12
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:diamond_chestplate",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 12
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:diamond_leggings",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 12
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:diamond_boots",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 12
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    name: "minecraft:iron_helmet",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 20
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    name: "minecraft:iron_leggings",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 20
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    name: "minecraft:iron_chestplate",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 20
                    }]
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    name: "minecraft:iron_boots",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 20
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
                    name: "mysticalagriculture:diamond_essence",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 8
                        }
                    }]
                },
                {
                    type: "minecraft:item",
                    name: "mysticalagriculture:gold_essence",
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
                    weight: 2,
                    name: "mysticalagriculture:iron_essence",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 16,
                            max: 24
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
    event.addJson(`dungeons_arise:loot_tables/chests/illager_fort/illager_fort_normal.json`, loot_table);
})