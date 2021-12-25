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
                    name: "mysticalagriculture:creeper_essence"
                }]
            },
            {
                rolls: 1,
                entries: [{
                    type: "minecraft:tag",
                    name: "minecraft:creeper_drop_music_discs",
                    expand: true
                }],
                conditions: [{
                    condition: "minecraft:entity_properties",
                    predicate: {
                        type: "#minecraft:skeletons"
                    },
                    entity: "killer"
                }]
            }
        ]
    };

    event.addJson(`minecraft:loot_tables/entities/creeper.json`, loot_table);
});