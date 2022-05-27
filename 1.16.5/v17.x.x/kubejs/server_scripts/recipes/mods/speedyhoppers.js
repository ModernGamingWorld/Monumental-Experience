onEvent('recipes', e => {
  e.shaped('speedyhoppers:speedyhopper_mk1', ['A A', 'ASA', ' A '], {
    A: '#forge:plates/iron',
    S: '#forge:hopper'
  })
  e.shaped('speedyhoppers:speedyhopper_mk2', ['A A', 'ASA', ' A '], {
    A: '#forge:plates/gold',
    S: 'speedyhoppers:speedyhopper_mk1'
  })
  e.shaped('speedyhoppers:speedyhopper_mk3', ['A A', 'ASA', ' A '], {
    A: '#forge:plates/diamond',
    S: 'speedyhoppers:speedyhopper_mk2'
  })

  removeRecipeByID(e, [
    'speedyhoppers:speedyhopper_mk1',
    'speedyhoppers:speedyhopper_mk2',
    'speedyhoppers:speedyhopper_mk3'
  ])
})
