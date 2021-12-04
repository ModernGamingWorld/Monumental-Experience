onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 5,
                max: 15,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:enchant_randomly",
                        enchantments: [
                            "minecraft:sharpness",
                            "minecraft:sweeping",
                            "minecraft:smite",
                            "minecraft:knockback"
                        ]
                    }],
                    name: "minecraft:iron_sword"
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
                    name: "mysticalagriculture:lapis_lazuli_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:iron_nugget"
                },
                {
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:gold_nugget"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 5,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:diamond_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 30,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 20,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:cobblestone"
                },
                {
                    type: "minecraft:item",
                    weight: 30,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 20,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:birch_planks"
                },
                {
                    type: "minecraft:item",
                    weight: 30,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 20,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:dark_oak_planks"
                }
            ],
            bonus_rolls: {
                min: 1,
                max: 7
            }
        }]
    };
    event.addJson(`illagers_plus:loot_tables/structure/illager_centre.json`, loot_table);
});