onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:entity",
        pools: [{
            rolls: 1,
            entries: [{
                type: "minecraft:item",
                functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 3,
                            type: "minecraft:uniform"
                        }
                    },
                    {
                        function: "minecraft:furnace_smelt",
                        conditions: [{
                            condition: "minecraft:entity_properties",
                            predicate: {
                                flags: {
                                    is_on_fire: true
                                }
                            },
                            entity: "this"
                        }]
                    },
                    {
                        function: "minecraft:looting_enchant",
                        count: {
                            min: 0,
                            max: 1
                        }
                    }
                ],
                name: "mysticalagriculture:pig_essence"
            }]
        }]
    };

    event.addJson(`minecraft:loot_tables/entities/pig.json`, loot_table);
});