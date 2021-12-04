onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 5,
                max: 7,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    name: "minecraft:crafting_table"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:anvil"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:bookshelf"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:book"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:paper"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:writable_book"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:map"
                },
                {
                    type: "minecraft:item",
                    functions: [{
                            function: "minecraft:exploration_map",
                            destination: "illagers_plus:illager_fort",
                            decoration: "banner_red"
                        },
                        {
                            function: "minecraft:exploration_map",
                            destination: "illagers_plus:ice_castle",
                            decoration: "banner_light_blue"
                        },
                        {
                            function: "minecraft:exploration_map",
                            destination: "illagers_plus:illager_mine",
                            decoration: "banner_brown"
                        },
                        {
                            function: "minecraft:exploration_map",
                            destination: "illagers_plus:illager_archer_tower",
                            decoration: "banner_black"
                        },
                        {
                            function: "minecraft:exploration_map",
                            destination: "illagers_plus:illager_centre",
                            decoration: "banner_light_gray"
                        }
                    ],
                    name: "minecraft:map"
                }
            ],
            bonus_rolls: {
                min: 2,
                max: 4
            }
        }]
    };
    event.addJson(`illagers_plus:loot_tables/structure/illager_tower_enchanting.json`, loot_table);
});