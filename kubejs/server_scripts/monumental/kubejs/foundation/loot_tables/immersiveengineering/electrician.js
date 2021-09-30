onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [{
            rolls: 1,
            entries: [{
                    type: "minecraft:item",
                    name: "immersiveengineering:stick_treated"
                },
                {
                    type: "minecraft:item",
                    name: "emendatusenigmatica:iron_rod"
                },
                {
                    type: "minecraft:item",
                    name: "emendatusenigmatica:steel_rod"
                }
            ]
        }]
    };

    event.addJson(`immersiveengineering:loot_tables/gameplay/hero_of_the_village/electrician.json`, loot_table);
});