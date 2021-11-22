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
                    name: "minecraft:blue_ice"
                },
                {
                    type: "minecraft:item",
                    weight: 4,
                    name: "minecraft:snow_block"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 7,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:potato"
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
                    name: "minecraft:beetroot_seeds"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:beetroot_soup"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:furnace"
                },
                {
                    type: "minecraft:item",
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
                            max: 7,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:snowball"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
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

    event.addJson(`minecraft:loot_tables/chests/village/village_snowy_house.json`, loot_table);
});