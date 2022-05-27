onEvent('recipes', e => {
  removeRecipeByID(e, [
    'storagenetwork:collector',
    'storagenetwork:crafting_remote',
    'storagenetwork:exchange',
    'storagenetwork:inventory',
    'storagenetwork:inventory_remote',
    'storagenetwork:request',
    'storagenetwork:speed_upgrade',
    'storagenetwork:kabel',
    'storagenetwork:stack_upgrade',
    'storagenetwork:master'
  ])
})
