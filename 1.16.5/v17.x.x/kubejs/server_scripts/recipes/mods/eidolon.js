onEvent('recipes', e => {
  removeRecipeByID(e, [
    'eidolon:lead_ingot',
    'eidolon:lead_block',
    'eidolon:decompress_lead_block',
    'eidolon:blast_lead_ore',
    'eidolon:blast_lead_dust',
    'eidolon:smelt_lead_dust',
    'eidolon:smelt_lead_ore'
  ])
})
