onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
    type: "minecraft:chest",
    pools: [{
            rolls: 1,
            entries: [{
                type: "minecraft:item",
                name: "mythicbotany:cursed_andwari_ring"
            }]
        },
        {
            rolls: {
                min: 8,
                max: 13,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 1,
                    name: "minecraft:enchanted_golden_apple"
                },
                {
                    type: "minecraft:item",
                    weight: 4,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:golden_apple"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 3,
                            max: 8,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:gold_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 20,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:gold_nugget"
                    }
                ]
            }
        ]
    };

    event.addJson(`mythicbotany:loot_tables/chests/andwari_cave.json`, loot_table);
});