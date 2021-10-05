onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 3,
                max: 8,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
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
                    name: "minecraft:grass"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    name: "minecraft:tall_grass"
                },
                {
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
                    name: "minecraft:bread"
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
                    name: "minecraft:wheat_seeds"
                },
                {
                    type: "minecraft:item",
                    weight: 2,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:emerald_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 2,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:acacia_sapling"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:saddle"
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
                    name: "minecraft:torch"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:bucket"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/village/village_savanna_house.json`, loot_table);
});