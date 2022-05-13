onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: "minecraft:block",
        pools: [{
            "rolls": 1,
            "entries": [{
                "type": "minecraft:alternatives",
                "children": [{
                        "type": "minecraft:item",
                        "conditions": [{
                            "condition": "minecraft:match_tool",
                            "predicate": {
                                "enchantments": [{
                                    "enchantment": "minecraft:silk_touch",
                                    "levels": {
                                        "min": 1
                                    }
                                }]
                            }
                        }],
                        "name": "emendatusenigmatica:redstone_chunk"
                    },
                    {
                        "type": "minecraft:item",
                        "functions": [{
                                "function": "minecraft:apply_bonus",
                                "enchantment": "minecraft:fortune",
                                "formula": "minecraft:ore_drops"
                            },
                            {
                                "function": "minecraft:explosion_decay"
                            }
                        ],
                        "name": "minecraft:redstone"
                    }
                ]
            }]
        }]
    }
    event.addJson(`atum:loot_tables/blocks/redstone_ore.json`, loot_table);
});