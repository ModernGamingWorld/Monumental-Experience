ServerEvents.recipes(e => {
  removeRecipeByID(e, [
    'pipez:item_pipe',
    'pipez:fluid_pipe',
    'pipez:energy_pipe',
    'pipez:universal_pipe',
    'pipez:gas_pipe',
    'pipez:basic_upgrade',
    'pipez:improved_upgrade',
    'pipez:ultimate_upgrade',
    'pipez:filter_destination_tool'
  ])
})
