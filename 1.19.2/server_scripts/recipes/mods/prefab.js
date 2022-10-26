ServerEvents.recipes(e => {
  
  e.shaped('prefab:item_aqua_base', ['AAA', 'BCB', 'EDE'], {
    A: '#forge:glass',
    B: 'compressium:stone_1',
    C: 'minecraft:sea_lantern',
    D: 'prefab:item_coil_of_lanterns',
    E: 'compressium:stone_3'
  }).id(`monumentalexperience:prefab/shaped/aqua_base`)

  e.shaped('prefab:item_aqua_base_improved', ['AAA', 'BCB', 'EDE'], {
    A: '#forge:glass',
    B: 'minecraft:conduit',
    C: 'minecraft:sea_lantern',
    D: 'prefab:item_coil_of_lanterns',
    E: 'compressium:stone_3'
  }).id(`monumentalexperience:prefab/shaped/aqua_base_improved`)

  e.shaped('prefab:item_defense_bunker', ['ABA', 'CDC', 'AAA'], {
    A: '#forge:storage_blocks/iron',
    B: 'prefab:item_coil_of_lanterns',
    C: 'compressium:stone_3',
    D: 'compressium:obsidian_2',
  }).id(`monumentalexperience:prefab/shaped/defense_bunker`)

  e.shaped('prefab:item_wind_mill', [' A ', 'ABA', 'CAD'], {
    A: 'prefab:item_bundle_of_timber',
    B: 'compressium:stone_3',
    C: 'compressium:dirt_2',
    D: 'minecraft:hay_block',
  }).id(`monumentalexperience:prefab/shaped/wind_mill`)

  e.shaped('prefab:item_watch_tower', ['BBB', 'CBD', 'CAD'], {
    A: 'compressium:stone_1',
    B: 'compressium:stone_2',
    C: '#forge:storage_blocks/iron',
    D: '#forge:storage_blocks/copper',
  }).id(`monumentalexperience:prefab/shaped/watch_tower`)

  e.shaped('prefab:item_warehouse', ['A A', 'ABA', 'CDC'], {
    A: 'compressium:stone_2',
    B: '#forge:chests',
    C: '#forge:storage_blocks/double_compressed_lights',
    D: 'compressium:stone_3',
  }).id(`monumentalexperience:prefab/shaped/warehouse`)

  e.shaped('prefab:item_warehouse_improved', ['ABA', 'ACA', 'DED'], {
    A: 'compressium:stone_2',
    B: 'prefab:item_warehouse',
    C: '#forge:chests',
    D: '#forge:storage_blocks/double_compressed_lights',
    E: 'compressium:stone_3',
  }).id(`monumentalexperience:prefab/shaped/warehouse_improved`)

  e.shaped('prefab:item_town_hall', ['BAB', 'DED', 'C C'], {
    A: 'prefab:item_heap_of_timber',
    B: 'compressium:stone_2',
    C: 'compressium:dirt_2',
    D: 'prefab:item_coil_of_lanterns',
    E: 'prefab:item_heap_of_timber',
  }).id(`monumentalexperience:prefab/shaped/town_hall`)

  e.shaped('prefab:item_nether_gate', ['ABA', 'BCB', 'ABA'], {
    A: 'compressium:stone_2',
    B: 'compressium:obsidian_2',
    C: 'minecraft:flint_and_steel',
  }).id(`monumentalexperience:prefab/shaped/nether_gate`)

  e.shaped('prefab:item_house', ['ABC', 'DED', 'FFF'], {
    A: '#forge:workbenches',
    B: '#forge:clocks',
    C: '#forge:furnace',
    D: 'compressium:stone_1',
    E: '#minecraft:beds',
    F: 'prefab:item_bundle_of_timber',
  }).id(`monumentalexperience:prefab/shaped/item_house`)

  e.shaped('prefab:item_ski_lodge', ['ACA', 'CFC', 'BED'], {
    A: 'compressium:snow_1',
    B: '#forge:storage_blocks/double_compressed_lights',
    C: 'prefab:item_bundle_of_timber',
    D: 'compressium:dirt_2',
    E: 'compressium:stone_3',
    F: 'minecraft:blue_ice',
  }).id(`monumentalexperience:prefab/shaped/ski_lodge`)

  e.shaped('prefab:item_modern_buildings', ['A A', 'BCB', 'DED'], {
    A: '#forge:storage_blocks/compressed_lights',
    B: 'compressium:stone_1',
    C: 'compressium:stone_2',
    D: '#forge:storage_blocks/iron',
    E: 'compressium:quartz_1',
  }).id(`monumentalexperience:prefab/shaped/modern_buildings`)

  e.shaped('prefab:item_modern_buildings_advanced', ['ADA', 'BEB', 'CDC'], {
    A: '#forge:storage_blocks/compressed_lights',
    B: 'compressium:stone_2',
    C: '#forge:storage_blocks/iron',
    D: 'compressium:quartz_2',
    E: 'compressium:stone_3',
  }).id(`monumentalexperience:prefab/shaped/modern_buildings_advanced`)

  e.shaped('prefab:item_farm', ['AAA', 'BCB', 'DED'], {
    A: '#forge:seeds/wheat',
    B: 'prefab:item_bundle_of_timber',
    C: 'compressium:dirt_1',
    D: '#minecraft:wool',
    E: '#forge:buckets/water',
  }).id(`monumentalexperience:prefab/shaped/farm`)

  e.shaped('prefab:item_farm_advanced', ['ABC', 'DDD', 'EFE'], {
    A: 'prefab:item_ton_of_timber',
    B: '#forge:storage_blocks/compressed_lights',
    C: 'prefab:item_pallet_of_bricks',
    D: 'compressium:dirt_2',
    E: 'compressium:stone_2',
    F: 'prefab:item_farm',
  }).id(`monumentalexperience:prefab/shaped/farm_advanced`)

  e.shaped('prefab:item_farm_improved', ['ABA', 'CDC', 'EBE'], {
    A: 'prefab:item_heap_of_timber',
    B: 'compressium:stone_1',
    C: 'compressium:dirt_2',
    D: '#forge:buckets/water',
    E: 'prefab:item_pile_of_bricks',
  }).id(`monumentalexperience:prefab/shaped/farm_improved`)

  e.shaped('prefab:item_modern_buildings_improved', ['A A', 'BBB', 'CDC'], {
    A: '#forge:storage_blocks/compressed_lights',
    B: 'compressium:stone_2',
    C: '#forge:storage_blocks/iron',
    D: 'compressium:quartz_2',
  }).id(`monumentalexperience:prefab/shaped/modern_buildings_improved`)

  e.shaped('prefab:item_mineshaft_entrance', ['ABA', 'CDC', 'BBB'], {
    A: '#forge:tools/pickaxes',
    B: 'prefab:item_bundle_of_timber',
    C: 'compressium:stone_1',
    D: '#minecraft:beds',
  }).id(`monumentalexperience:prefab/shaped/mineshaft_entrance`)

  e.shaped('prefab:item_jail', ['AAA', 'ABA', 'CDC'], {
    A: 'graveyard:dark_iron_bars',
    B: 'compressium:stone_3',
    C: 'compressium:dirt_2',
    D: 'compressium:stone_2',
  }).id(`monumentalexperience:prefab/shaped/jail`)

  e.shaped('prefab:item_ender_gateway', ['ABA', 'BCB', 'ADA'], {
    A: 'minecraft:prismarine',
    B: '#forge:storage_blocks/quartz',
    C: 'compressium:obsidian_2',
    D: 'compressium:stone_3',
  }).id(`monumentalexperience:prefab/shaped/ender_gateway`)

  e.shaped('prefab:item_villager_houses', ['AAA', 'AAA', 'BBB'], {
    A: 'prefab:item_bundle_of_timber',
    B: 'compressium:stone_1',
  }).id(`monumentalexperience:prefab/shaped/villager_houses`)

  e.shaped('prefab:item_instant_bridge', ['ABA', 'ABA', 'ABA'], {
    A: 'minecraft:torch',
    B: 'compressium:stone_2',
  }).id(`monumentalexperience:prefab/shaped/instant_bridge`)


  e.shaped('prefab:item_machinery_tower', ['AAA', ' B ', ' C '], {
    A: 'minecraft:powered_rail',
    B: 'prefab:item_string_of_lanterns',
    C: 'compressium:stone_3',
  }).id(`monumentalexperience:prefab/shaped/machinery_tower`)

  removeRecipeByID(e, [
    'prefab:block_compressed_dirt',
    'prefab:double_compressed_dirt_to_compressed_dirt',
    'prefab:block_compressed_stone',
    'prefab:double_compressed_stone_to_compressed_stone',
    'prefab:triple_compressed_stone_to_compressed_stone',
    'prefab:house',
    'prefab:aqua_base',
    'prefab:aqua_base_improved',
    'prefab:defense_bunker',
    'prefab:wind_mill',
    'prefab:watch_tower',
    'prefab:warehouse',
    'prefab:warehouse_improved',
    'prefab:villager_houses',
    'prefab:town_hall',
    'prefab:ski_lodge',
    'prefab:modern_buildings',
    'prefab:modern_buildings_advanced',
    'prefab:modern_buildings_improved',
    'prefab:mineshaft_entrance',
    'prefab:machinery_tower',
    'prefab:jail',
    'prefab:nether_gate',
    'prefab:instant_bridge',
    'prefab:item_house',
    'prefab:farm',
    'prefab:farm_advanced',
    'prefab:farm_improved',
    'prefab:ender_gateway'
  ])
})
