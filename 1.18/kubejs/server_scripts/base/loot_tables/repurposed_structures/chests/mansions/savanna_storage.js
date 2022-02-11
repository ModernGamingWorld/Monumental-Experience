onEvent('server.datapack.high_priority', event => {
    let loot_table = {
        type: "minecraft:chest",
        pools: [{
                rolls: 3,
                entries: [{
                        type: "minecraft:empty",
                        weight: 1000
                    },
                    {
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 60
                    },
                    {
                        name: "mysticalagriculture:spider_essence",
                        type: "minecraft:item",
                        weight: 60
                    },
                    {
                        name: "mysticalagriculture:rabbit_essence",
                        type: "minecraft:item",
                        weight: 60
                    },
                    {
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 60
                    },
                    {
                        name: "minecraft:bread",
                        type: "minecraft:item",
                        weight: 60
                    },
                    {
                        name: "minecraft:melon_seeds",
                        type: "minecraft:item",
                        weight: 60
                    },
                    {
                        name: "minecraft:pumpkin_seeds",
                        type: "minecraft:item",
                        weight: 60
                    },
                    {
                        name: "mysticalagriculture:nature_essence",
                        type: "minecraft:item",
                        weight: 60
                    },
                    {
                        name: "mysticalagriculture:creeper_essence",
                        type: "minecraft:item",
                        weight: 30
                    },
                    {
                        name: "mysticalagriculture:redstone_essence",
                        type: "minecraft:item",
                        weight: 30
                    },
                    {
                        name: "mysticalagriculture:coal_essence",
                        type: "minecraft:item",
                        weight: 30
                    },
                    {
                        name: "mysticalagriculture:skeleton_essence",
                        type: "minecraft:item",
                        weight: 30
                    },
                    {
                        name: "minecraft:golden_apple",
                        type: "minecraft:item",
                        weight: 4
                    },
                    {
                        name: "minecraft:enchanted_golden_apple",
                        type: "minecraft:item",
                        weight: 1
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
                        weight: 168
                    },
                    {
                        name: "minecraft:black_banner",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "set_nbt",
                            tag: "{BlockEntityTag:{Patterns:[{Pattern:bt,Color:5},{Pattern:sku,Color:0},{Pattern:sku,Color:12},{Pattern:sku,Color:15},{Pattern:bs,Color:15},{Pattern:rs,Color:15},{Pattern:ls,Color:15},{Pattern:bo,Color:1},{Pattern:tts,Color:1},{Pattern:tts,Color:15},{Pattern:bts,Color:1},{Pattern:bts,Color:15}]}}"
                        }]
                    },
                    {
                        name: "mysticalagriculture:emerald_essence",
                        type: "minecraft:item",
                        weight: 4,
                        functions: [{
                            function: "minecraft:set_count",
                            count: 2
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/mansions/savanna_storage.json`, loot_table);;
});