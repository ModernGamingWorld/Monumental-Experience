onEvent('recipes', e => {
  e.shaped('naturesaura:offering_table', ['BAB', 'CBD', 'EEE'], {
    A: '#forge:ingots/starmetal',
    B: '#forge:stone',
    C: 'naturesaura:token_fear',
    D: 'naturesaura:token_sorrow',
    E: '#minecraft:logs'
  })

  removeRecipeByID(e, [
    'naturesaura:offering_table',
    'naturesaura:altar/tainted_gold_block',
    'naturesaura:infused_iron_block',
    'naturesaura:altar/tainted_gold',
    'naturesaura:altar/infused_iron',
    'naturesaura:infused_pickaxe',
    'naturesaura:sky_pickaxe',
    'naturesaura:infused_axe',
    'naturesaura:sky_axe',
    'naturesaura:infused_shovel',
    'naturesaura:sky_shovel',
    'naturesaura:infused_hoe',
    'naturesaura:sky_hoe',
    'naturesaura:infused_iron_chest',
    'naturesaura:sky_chest',
    'naturesaura:infused_chest',
    'naturesaura:sky_chest',
    'naturesaura:infused_pants',
    'naturesaura:sky_pants',
    'naturesaura:altar/infused_stone'
  ])
})
