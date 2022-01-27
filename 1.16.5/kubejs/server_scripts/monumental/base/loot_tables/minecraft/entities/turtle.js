onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
    type: "minecraft:entity",
    pools: [{
            rolls: 1,
            entries: [{
                type: "minecraft:item",
                weight: 3,
                functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 0,
                            max: 2,
                            type: "minecraft:uniform"
                        }
                    },
                    {
                        function: "minecraft:looting_enchant",
                        count: {
                            min: 0,
                            max: 1
                        }
                    }
                ],
                name: "mysticalagriculture:turtle_essence"
            }]
        },
        {
            rolls: 1,
            entries: [{
                type: "minecraft:item",
                name: "minecraft:bowl"
            }],
            conditions: [{
                condition: "minecraft:damage_source_properties",
                predicate: {
                    is_lightning: true
                }
            }]
        }]
    };

    event.addJson(`minecraft:loot_tables/entities/turtle.json`, loot_table);
});