onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 1,
                max: 4,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 5,
                            max: 22,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:arrow"
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
                    name: "minecraft:stick"
                },
                {
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:bread"
                },
                {
                    type: "minecraft:item",
                    weight: 20,
                    functions: [{
                        function: "minecraft:enchant_randomly"
                    }],
                    name: "minecraft:bow"
                },
                {
                    type: "minecraft:item",
                    weight: 30,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 7,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:string"
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
                    name: "mysticalagriculture:coal_essence"
                }
            ]
        }]
    };
    event.addJson(`illagers_plus:loot_tables/structure/illager_archer_tower.json`, loot_table);
});