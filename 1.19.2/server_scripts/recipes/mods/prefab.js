ServerEvents.recipes(e => {
  removeRecipeByID(e, [
    'prefab:block_compressed_dirt',
    'prefab:double_compressed_dirt_to_compressed_dirt',
    'prefab:block_compressed_stone',
    'prefab:double_compressed_stone_to_compressed_stone',
    'prefab:triple_compressed_stone_to_compressed_stone',
  ])
})
