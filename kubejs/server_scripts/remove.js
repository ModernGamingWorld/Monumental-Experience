ServerEvents.recipes(e => {
  gear.forEach((material) => {
  plates.forEach((material) => {

  removeRecipeByID(e, [
    `thermal:parts/${material}_gear`,
    `allthecompatibility:ad_astra/hammering/${material}`,
    `ad_astra:hammering/steel_plate`
    ])
  })
})
})