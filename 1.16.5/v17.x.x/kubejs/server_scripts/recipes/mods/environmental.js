onEvent('recipes', e => {
  removeRecipeByID(e, [
    'environmental:building/wood/willow/willow_pressure_plate',
    'environmental:building/wood/cherry/cherry_pressure_plate',
    'environmental:building/wood/wisteria/wisteria_pressure_plate'
  ])
})
