onEvent('server.datapack.high_priority', event => {
    let loot_table = {
  type: "minecraft:chest",
  pools: [
    {
      rolls: {
        min: 1,
        max: 5,
        type: "minecraft:uniform"
      },
      entries: [
        {
          name: "minecraft:lead",
          type: "minecraft:item",
          weight: 20
        },
        {
          name: "minecraft:golden_apple",
          type: "minecraft:item",
          weight: 15
        },
        {
          name: "minecraft:enchanted_golden_apple",
          type: "minecraft:item",
          weight: 2
        },
        {
          name: "minecraft:music_disc_13",
          type: "minecraft:item",
          weight: 15
        },
        {
          name: "minecraft:music_disc_cat",
          type: "minecraft:item",
          weight: 15
        },
        {
          name: "minecraft:name_tag",
          type: "minecraft:item",
          weight: 20
        },
        {
          name: "minecraft:chainmail_chestplate",
          type: "minecraft:item",
          weight: 10
        },
        {
          name: "minecraft:diamond_hoe",
          type: "minecraft:item",
          weight: 15
        },
        {
          name: "minecraft:diamond_chestplate",
          type: "minecraft:item",
          weight: 5
        },
        {
          name: "minecraft:book",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:enchant_randomly"
            }
          ]
        }
      ]
    },
    {
      rolls: {
        min: 1,
        max: 4,
        type: "minecraft:uniform"
      },
      entries: [
        {
          name: "mysticalagriculture:iron_essence",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 4,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "mysticalagriculture:gold_essence",
          type: "minecraft:item",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 4,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "minecraft:bread",
          type: "minecraft:item",
          weight: 20
        },
        {
          name: "mysticalagriculture:nature_essence",
          type: "minecraft:item",
          weight: 20,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 4,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "minecraft:bucket",
          type: "minecraft:item",
          weight: 10
        },
        {
          name: "mysticalagriculture:redstone_essence",
          type: "minecraft:item",
          weight: 15,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 4,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "mysticalagriculture:coal_essence",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 4,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "minecraft:melon_seeds",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 2,
                max: 4,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "minecraft:pumpkin_seeds",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 2,
                max: 4,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "mysticalagriculture:nature_essence",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 2,
                max: 4,
                type: "minecraft:uniform"
              }
            }
          ]
        }
      ]
    },
    {
      rolls: 3,
      entries: [
        {
          name: "mysticalagriculture:skeleton_essence",
          type: "minecraft:item",
          weight: 15,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 8,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "mysticalagriculture:creeper_essence",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 8,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "mysticalagriculture:zombie_essence",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 8,
                type: "minecraft:uniform"
              }
            }
          ]
        },
        {
          name: "mysticalagriculture:spider_essence",
          type: "minecraft:item",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 8,
                type: "minecraft:uniform"
              }
            }
          ]
        }
      ]
    },
    {
      rolls: 0,
      bonus_rolls: 1,
      entries: [
        {
          name: "minecraft:pink_banner",
          type: "minecraft:item",
          weight: 1,
          functions: [
            {
              function: "set_nbt",
              tag: "{BlockEntityTag:{Patterns:[{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:cs,Color:0},{Pattern:bo,Color:3},{Pattern:bo,Color:3},{Pattern:bo,Color:3}]}}"
            }
          ]
        },
        {
          type: "minecraft:empty",
          weight: 8
        },
        {
          name: "minecraft:black_banner",
          type: "minecraft:item",
          weight: 4,
          functions: [
            {
              function: "set_nbt",
              tag: "{BlockEntityTag:{Patterns:[{Pattern:bt,Color:5},{Pattern:sku,Color:0},{Pattern:sku,Color:12},{Pattern:sku,Color:15},{Pattern:bs,Color:15},{Pattern:rs,Color:15},{Pattern:ls,Color:15},{Pattern:bo,Color:12},{Pattern:tts,Color:5},{Pattern:tts,Color:15},{Pattern:bts,Color:5},{Pattern:bts,Color:15}]}}"
            }
          ]
        },
        {
          name: "mysticalagriculture:emerald_essence",
          type: "minecraft:item",
          weight: 4,
          functions: [
            {
              function: "minecraft:set_count",
              count: 2
                        }]
                    }
                ]
            }
        ]
    };
    event.addJson(`repurposed_structures:loot_tables/chests/mansions/oak.json`, loot_table);;
});