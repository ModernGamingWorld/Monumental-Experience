onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 5,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:arrow"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:enchant_randomly"
                    }],
                    name: "minecraft:crossbow"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:enchant_randomly"
                    }],
                    name: "minecraft:bow"
                },
                {
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 5,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:stick"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    name: "minecraft:wooden_pickaxe"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    name: "minecraft:wooden_sword"
                },
                {
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 5,
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
                            min: 1,
                            max: 5,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:diamond_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    name: "minecraft:leather_chestplate"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    name: "minecraft:leather_helmet"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    name: "minecraft:golden_apple"
                }
            ],
            bonus_rolls: {
                min: 1,
                max: 3
            }
        }]
    };
    event.addJson(`illagers_plus:loot_tables/structure/illager_tower_uncommon.json`, loot_table);
});