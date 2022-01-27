onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 4,
                max: 9,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:iron_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:gold_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:diamond_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 5,
                            max: 20,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:emerald_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 10,
                            max: 25,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:experience_bottle"
                },
                {
                    type: "minecraft:item",
                    weight: 15,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 5,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:cod"
                },
                {
                    type: "minecraft:item",
                    weight: 15,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 5,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:salmon"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 5,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:iron_nugget"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 5,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:gold_nugget"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 5,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "emendatusenigmatica:quartz_ore"
                },
                {
                    type: "minecraft:item",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:netherite_scrap"
                }
            ],
            bonus_rolls: {
                min: 1,
                max: 5
            }
        }]
    };
    event.addJson(`illagers_plus:loot_tables/structure/ice_castle_rare.json`, loot_table);
});