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
                name: "mysticalagriculture:emerald_essence"
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
                name: "minecraft:cod"
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
                name: "minecraft:salmon"
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
                name: "minecraft:water_bucket"
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
                name: "minecraft:barrel"
            },
            {
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
                name: "minecraft:wheat_seeds"
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
                name: "mysticalagriculture:coal_essence"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/village/village_fisher.json`, loot_table);
});