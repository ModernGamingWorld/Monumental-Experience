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
                name: "mysticalagriculture:chicken_essence"
            }]
        }]
    };

    event.addJson(`minecraft:loot_tables/entities/parrot.json`, loot_table);
});