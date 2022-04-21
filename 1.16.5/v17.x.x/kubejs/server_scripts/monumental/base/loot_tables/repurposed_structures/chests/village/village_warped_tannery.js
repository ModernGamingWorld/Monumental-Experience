onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 3,
                max: 8,
                type: "minecraft:uniform"
            },
            entries: [{
                    name: "mysticalagriculture:leather_essence",
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 6,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    name: "minecraft:leather_chestplate",
                    type: "minecraft:item",
                    weight: 2
                },
                {
                    name: "minecraft:leather_boots",
                    type: "minecraft:item",
                    weight: 2
                },
                {
                    name: "minecraft:leather_helmet",
                    type: "minecraft:item",
                    weight: 2
                },
                {
                    name: "minecraft:leather_leggings",
                    type: "minecraft:item",
                    weight: 2
                },
                {
                    name: "mysticalagriculture:pig_essence",
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    name: "minecraft:cooked_porkchop",
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    name: "minecraft:nether_wart",
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }]
                },
                {
                    name: "minecraft:saddle",
                    type: "minecraft:item",
                    weight: 3
                },
                {
                    name: "minecraft:gold_ingot",
                    type: "minecraft:item",
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 4,
                            type: "minecraft:uniform"
                        }
                    }]
                }
            ]
        }]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/village/village_warped_tannery.json`, loot_table);;
})