onEvent('recipes', e => {
  let items = [
    {
      mod: 'tconstruct',
      plates: ['greenheart', 'skyroot', 'bloodshroom']
    }, {
      mod: 'twilightforest',
      plates: ['canopy', 'twilight_oak', 'mangrove', 'dark', 'time', 'trans', 'mine', 'sort'],
      item_name: 'plate'
    }, {
      mod: 'upgrade_aquatic',
      plates: ['driftwood', 'river']
    }, {
      mod: 'undergarden',
      plates: ['depthrock', 'shiverstone', 'tremblecrust'],
      materials: ['undergarden:depthrock', 'undergarden:shiverstone', 'undergarden:tremblecrust']
    }, {
      mod: 'undergarden',
      plates: ['smogstem', 'wigglewood', 'grongle'],
    }, {
      mod: 'quark',
      plates: ['obsidian'],
      materials: ['#forge:obsidian']
    }, {
      mod: 'minecraft',
      plates: ['stone', 'polished_blackstone', 'light_weighted', 'heavy_weighted'],
      materials: ['#forge:stone', 'minecraft:polished_blackstone', '#forge:ingots/gold', '#forge:ingots/iron']
    }, {
      mod: 'minecraft',
      plates: ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
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
      plates: ['arcane_gold', 'polished_darkstone'],
      materials: ['forbidden_arcanus:arcane_gold_ingot', 'forbidden_arcanus:darkstone']
    }, {
      mod: 'forbidden_arcanus',
      plates: ['cherrywood', 'edelwood', 'mysterywood', 'fungyss']
    }, {
      mod: 'druidcraft',
      plates: ['elder', 'darkwood']
    }, {
      mod: 'environmental',
      plates: ['willow', 'cherry', 'wisteria']
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
      mod: 'atum',
      plates: ['limestone'],
      materials: ['atum:limestone']
    }, {
      mod: 'atum',
      plates: ['palm', 'deadwood']
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
