onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
  type: "minecraft:chest",
  pools: [
    {
      rolls: {
        min: 5,
        max: 15,
        type: "minecraft:uniform"
      },
      entries: [
        {
          type: "minecraft:item",
          weight: 20,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
              }
            }
          ],
          name: "minecraft:dark_oak_planks"
        },
        {
          type: "minecraft:item",
          weight: 20,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
              }
            }
          ],
          name: "minecraft:cobblestone"
        },
        {
          type: "minecraft:item",
          weight: 20,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
              }
            }
          ],
          name: "minecraft:birch_planks"
        },
        {
          type: "minecraft:item",
          weight: 20,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
              }
            }
          ],
          name: "minecraft:stick"
        },
        {
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
              }
            }
          ],
          name: "minecraft:porkchop"
        },
        {
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
              }
            }
          ],
          name: "minecraft:beef"
        },
        {
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 5,
                type: "minecraft:uniform"
              }
            }
          ],
          name: "minecraft:arrow"
        },
        {
          type: "minecraft:item",
          functions: [
            {
              function: "minecraft:enchant_randomly"
            }
          ],
          name: "minecraft:crossbow"
        },
        {
          type: "minecraft:item",
          functions: [
            {
              function: "minecraft:enchant_randomly"
            }
          ],
          name: "minecraft:bow"
        }
      ],
      bonus_rolls: {
        min: 1,
        max: 3
            }
        }]
    };
    event.addJson(`illagers_plus:loot_tables/structure/illager_tower_common.json`, loot_table);
});