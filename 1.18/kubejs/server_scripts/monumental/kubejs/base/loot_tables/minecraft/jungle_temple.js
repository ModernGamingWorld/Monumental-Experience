onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 2,
                max: 6,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
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
                            min: 1,
                            max: 5,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:iron_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 15,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 7,
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
                    name: "mysticalagriculture:nature_essence"
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
                    name: "mysticalagriculture:emerald_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 6,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:skeleton_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 16,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 3,
                            max: 7,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:zombie_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    name: "minecraft:saddle"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:iron_horse_armor"
                },
                {
                    type: "minecraft:item",
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: 30,
                        treasure: true
                    }],
                    name: "minecraft:book"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/jungle_temple.json`, loot_table);
});