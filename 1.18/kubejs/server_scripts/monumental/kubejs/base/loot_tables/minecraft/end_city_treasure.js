onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
            rolls: {
                min: 2,
                max: 6,
                type: "minecraft:uniform"
            },
            entries: [{
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 7,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:diamond_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 10,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 4,
                            max: 8,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:iron_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 15,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 7,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:gold_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 2,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 2,
                            max: 6,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "mysticalagriculture:emerald_essence"
                },
                {
                    type: "minecraft:item",
                    weight: 5,
                    functions: [{
                        function: "minecraft:set_count",
                        count: {
                            min: 1,
                            max: 10,
                            type: "minecraft:uniform"
                        }
                    }],
                    name: "minecraft:beetroot_seeds"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    name: "minecraft:saddle"
                },
                {
                    type: "minecraft:item",
                    name: "minecraft:iron_horse_armor"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: {
                            min: 20,
                            max: 39,
                            type: "minecraft:uniform"
                        },
                        treasure: true
                    }],
                    name: "minecraft:diamond_sword"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: {
                            min: 20,
                            max: 39,
                            type: "minecraft:uniform"
                        },
                        treasure: true
                    }],
                    name: "minecraft:diamond_boots"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: {
                            min: 20,
                            max: 39,
                            type: "minecraft:uniform"
                        },
                        treasure: true
                    }],
                    name: "minecraft:diamond_chestplate"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: {
                            min: 20,
                            max: 39,
                            type: "minecraft:uniform"
                        },
                        treasure: true
                    }],
                    name: "minecraft:diamond_leggings"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: {
                            min: 20,
                            max: 39,
                            type: "minecraft:uniform"
                        },
                        treasure: true
                    }],
                    name: "minecraft:diamond_helmet"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: {
                            min: 20,
                            max: 39,
                            type: "minecraft:uniform"
                        },
                        treasure: true
                    }],
                    name: "minecraft:diamond_pickaxe"
                },
                {
                    type: "minecraft:item",
                    weight: 3,
                    functions: [{
                        function: "minecraft:enchant_with_levels",
                        levels: {
                            min: 20,
                            max: 39,
                            type: "minecraft:uniform"
                        },
                        treasure: true
                    }],
                    name: "minecraft:diamond_shovel"
                }
            ]
        }]
    };

    event.addJson(`minecraft:loot_tables/chests/end_city_treasure.json`, loot_table);
});