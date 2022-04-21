onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 1,
                entries: [{
                        name: "minecraft:map",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "minecraft:exploration_map",
                            destination: "bastion_remnant",
                            decoration: "banner_black",
                            zoom: 2,
                            skip_existing_chunks: false
                        }]
                    },
                    {
                        name: "minecraft:map",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:exploration_map",
                            destination: "fortresses",
                            decoration: "banner_red",
                            zoom: 2,
                            skip_existing_chunks: false
                        }]
                    },
                    {
                        name: "minecraft:map",
                        type: "minecraft:item",
                        weight: 1
                    }
                ]
            },
            {
                rolls: 10,
                entries: [{
                        name: "minecraft:compass",
                        type: "minecraft:item",
                        weight: 3
                    },
                    {
                        name: "minecraft:map",
                        type: "minecraft:item",
                        weight: 3
                    },
                    {
                        name: "minecraft:clock",
                        type: "minecraft:item",
                        weight: 3
                    },
                    {
                        name: "minecraft:paper",
                        type: "minecraft:item",
                        weight: 18,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 10,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:chicken_essence",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 1,
                                max: 5,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:skeleton_essence",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "mysticalagriculture:coal_essence",
                        type: "minecraft:item",
                        weight: 3,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 3,
                                max: 6,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:writable_book",
                        type: "minecraft:item",
                        weight: 3
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        weight: 8,
                        functions: [{
                            function: "minecraft:set_count",
                            count: {
                                min: 2,
                                max: 8,
                                type: "minecraft:uniform"
                            }
                        }]
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        weight: 2,
                        functions: [{
                            function: "minecraft:enchant_with_levels",
                            levels: {
                                min: 25,
                                max: 35,
                                type: "minecraft:uniform"
                            },
                            treasure: true
                        }]
                    }
                ]
            },
            {
                rolls: 0,
                bonus_rolls: 1,
                entries: [{
                        name: "minecraft:pink_banner",
                        type: "minecraft:item",
                        weight: 1,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:bo,Color:3},{Pattern:bo,Color:3},{Pattern:bo,Color:3}]}}"
                        }]
                    },
                    {
                        type: "minecraft:empty",
                        weight: 256
                    },
                    {
                        name: "minecraft:writable_book",
                        type: "minecraft:item",
                        weight: 140
                    },
                    {
                        name: "minecraft:book",
                        type: "minecraft:item",
                        weight: 400,
                        functions: [{
                            function: "minecraft:set_count",
                            count: 3
                        }]
                    },
                    {
                        name: "minecraft:black_banner",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:gru,Color:14},{Pattern:bo,Color:15},{Pattern:bts,Color:15},{Pattern:tts,Color:15},{Pattern:mr,Color:14},{Pattern:mr,Color:4},{Pattern:mc,Color:1},{Pattern:flo,Color:15},{Pattern:flo,Color:14},{Pattern:sku,Color:14},{Pattern:sku,Color:14},{Pattern:sku,Color:15}]}}"
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/shipwreck/crimson/map_chest.json`, loot_table);;
})