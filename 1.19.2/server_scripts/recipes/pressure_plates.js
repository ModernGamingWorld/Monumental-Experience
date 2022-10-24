ServerEvents.recipes(e => {
  let items = [
    {
      mod: 'twilightforest',
      plates: ['canopy', 'twilight_oak', 'mangrove', 'dark', 'time', 'transformation', 'mining', 'sorting'],
      item_name: 'pressure_plate'
    }, {
      mod: 'undergarden',
      plates: ['depthrock', 'shiverstone', 'tremblecrust'],
      materials: ['undergarden:depthrock', 'undergarden:shiverstone', 'undergarden:tremblecrust']
    }, {
      mod: 'ars_nouveau',
      plates: ['archwood'],
    }, {
      mod: 'quark',
      plates: ['obsidian', 'azalea', 'blossom'],
      materials: ['#forge:obsidian', 'quark:azalea_planks', 'quark:blossom_planks']
    }, {
      mod: 'minecraft',
      plates: ['stone', 'polished_blackstone', 'light_weighted', 'heavy_weighted'],
      materials: ['#forge:stone', 'minecraft:polished_blackstone', '#forge:ingots/gold', '#forge:ingots/iron']
    }, {
      mod: 'minecraft',
      plates: ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove',]
    }, {
      mod: 'extendedcrafting',
      item_name: 'slate',
      plates: ['black_iron'],
      materials: ['extendedcrafting:black_iron_ingot']
    }, {
      mod: 'framedblocks',
      plates: ['framed'],
      materials: ['framedblocks:framed_cube']
    }, {
      mod: 'forbidden_arcanus',
      plates: ['deorum', 'polished_darkstone', 'aurum'],
      materials: ['forbidden_arcanus:deorum_ingot', 'forbidden_arcanus:darkstone', 'forbidden_arcanus:aurum_planks']
    }, {
      mod: 'forbidden_arcanus',
      plates: ['cherry', 'edelwood', 'fungyss']
    }, {
      mod: 'biomesoplenty',
      plates: ['fir', 'redwood', 'cherry', 'mahogany', 'jacaranda', 'palm', 'willow', 'dead', 'magic', 'umbran', 'hellbark'],
      materials: ['#biomesoplenty:fir_logs', '#biomesoplenty:redwood_logs', '#biomesoplenty:cherry_logs', '#biomesoplenty:mahogany_logs', '#biomesoplenty:jacaranda_logs', '#biomesoplenty:palm_logs', '#biomesoplenty:willow_logs', '#biomesoplenty:dead_logs', '#biomesoplenty:magic_logs', '#biomesoplenty:umbran_logs', '#biomesoplenty:hellbark_logs']
    }, {
      mod: 'blue_skies',
      plates: ['turquoise_stone', 'lunar_stone', 'moonstone'],
      materials: ['blue_skies:turquoise_stone', 'blue_skies:lunar_stone', 'blue_skies:moonstone']
    }, {
      mod: 'blue_skies',
      plates: ['bluebright', 'starlit', 'frostbright', 'lunar', 'dusk', 'maple', 'cherry', 'crystallized']
    }, {
      mod: 'hexerei',
      plates: ['mahogany', 'willow', 'polished_mahogany', 'polished_willow']
    }, {
      mod: 'undergarden',
      plates: ['depthrock', 'shiverstone', 'tremblecrust'],
      materials: ['undergarden:depthrock', 'undergarden:shiverstone', 'undergarden:tremblecrust']
    }, {
      mod: 'undergarden',
      plates: ['smogstem', 'wigglewood', 'grongle'],
    }
  ]

  items.forEach(item => {
    for (let i in item.plates) {
      if (item.materials) {
        e.shaped(`${item.mod}:${item.plates[i]}_${item.item_name ? item.item_name : 'pressure_plate'}`,
          ['A', 'A', 'B'],
          {
            A: item.materials[i],
            B: '#forge:tools/hammer'
          }
        )
      } else {
        e.shaped(`${item.mod}:${item.plates[i]}_${item.item_name ? item.item_name : 'pressure_plate'}`,
          ['A', 'A', 'B'],
          {
            A: `${item.mod}:${item.plates[i]}_planks`,
            B: '#forge:tools/hammer'
          }
        )
      }
    }
  })
})
