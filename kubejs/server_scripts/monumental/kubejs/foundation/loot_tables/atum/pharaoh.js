onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
  pools: [
    {
      name: "atum:pharaoh",
      rolls: {
        min: 4,
        max: 6
      },
      entries: [
        {
          type: "item",
          name: "mysticalagriculture:zombie_essence",
          entryName: "zombie_essence",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 8
              }
            }
          ],
          weight: 100
        },
        {
          type: "item",
          name: "mysticalagriculture:cow_essence",
          entryName: "cow_essence",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 3
              }
            }
          ],
          weight: 75
        },
        {
          type: "item",
          name: "atum:dusty_bone",
          entryName: "dusty_bone",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 5
              }
            }
          ],
          weight: 100
        },
        {
          type: "item",
          name: "mysticalagriculture:redstone_essence",
          entryName: "redstone_essence",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 8
              }
            }
          ],
          weight: 50
        },
        {
          type: "item",
          name: "mysticalagriculture:coal_essence",
          entryName: "coal_essence",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 8
              }
            }
          ],
          weight: 45
        },
        {
          type: "item",
          name: "atum:date",
          entryName: "date",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 8
              }
            }
          ],
          weight: 45
        },
        {
          type: "item",
          name: "atum:golden_date",
          entryName: "golden_date",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 2
              }
            }
          ],
          weight: 5
        },
        {
          type: "item",
          name: "mysticalagriculture:draconium_essence",
          entryName: "draconium_essence",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 2
              }
            }
          ],
          weight: 5
        },
        {
          type: "item",
          name: "atum:golden_date_enchanted",
          entryName: "golden_date_enchanted",
          weight: 1
        },
        {
          type: "loot_table",
          name: "atum:chests/subloot/gold_weapons_0",
          weight: 50,
          quality: 2
        },
        {
          type: "loot_table",
          name: "atum:chests/subloot/gold_weapons_35",
          weight: 10,
          quality: 2
        },
        {
          type: "loot_table",
          name: "atum:chests/subloot/gold_armor_0",
          weight: 50,
          quality: 2
        },
        {
          type: "loot_table",
          name: "atum:chests/subloot/gold_armor_35",
          weight: 10,
          quality: 2
        },
        {
          type: "loot_table",
          name: "atum:chests/subloot/diamond_weapons_35",
          weight: 2,
          quality: 2
        },
        {
          type: "loot_table",
          name: "atum:chests/subloot/diamond_armor_35",
          weight: 2,
          quality: 2
        },
        {
          type: "item",
          name: "mysticalagriculture:iron_essence",
          entryName: "iron_essence",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 2
              }
            }
          ],
          weight: 20
        },
        {
          type: "item",
          name: "mysticalagriculture:gold_essence",
          entryName: "gold_essence",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 2
              }
            }
          ],
          weight: 20
        },
        {
          type: "item",
          name: "atum:coin_dirty",
          entryName: "coin_dirty",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 5
              }
            }
          ],
          weight: 100
        },
        {
          type: "item",
          name: "atum:relic_dirty_ring",
          entryName: "loot_dirty_ring",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 3
              }
            }
          ],
          weight: 100
        },
        {
          type: "item",
          name: "atum:relic_dirty_necklace",
          entryName: "loot_dirty_necklace",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 3
              }
            }
          ],
          weight: 50
        },
        {
          type: "item",
          name: "atum:relic_dirty_brooch",
          entryName: "loot_dirty_brooch",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 3
              }
            }
          ],
          weight: 40
        },
        {
          type: "item",
          name: "atum:relic_dirty_bracelet",
          entryName: "loot_dirty_bracelet",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 2
              }
            }
          ],
          weight: 30
        },
        {
          type: "item",
          name: "atum:relic_dirty_idol",
          entryName: "loot_dirty_idol",
          functions: [
            {
              function: "set_count",
              count: {
                min: 1,
                max: 2
              }
            }
          ],
          weight: 15
        },
        {
          type: "item",
          name: "minecraft:name_tag",
          entryName: "name_tag",
          weight: 10
        },
        {
          type: "item",
          name: "minecraft:totem_of_undying",
          entryName: "totem_of_undying",
          weight: 10
        },
        {
          type: "item",
          name: "minecraft:book",
          entryName: "enchanted_book",
          functions: [
            {
              function: "enchant_with_levels",
              levels: 30,
              treasure: true
            }
          ],
          weight: 60
        }
      ]
    },
    {
      name: "atum:pharaoh_sand",
      rolls: 1,
      entries: [
        {
          type: "item",
          name: "atum:sand",
          entryName: "sand",
          functions: [
            {
              function: "set_count",
              count: {
                min: 0,
                max: 6
              }
            }
          ],
          weight: 1
        }
      ]
    },
    {
      name: "atum:pharaoh_artifact",
      rolls: 1,
      entries: [
        {
          type: "loot_table",
          name: "atum:gods/all",
          weight: 1,
          quality: 2
        },
        {
          type: "empty",
          weight: 150
                    }
                ]
            }
        ]
    };
    event.addJson(`atum:loot_tables/chests/pharaoh.json`, loot_table);
});