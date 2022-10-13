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
    'naturesaura:sky_helmet',
    'naturesaura:sky_chest',
    'naturesaura:sky_pants',
    'naturesaura:sky_shoes',
    'naturesaura:sky_pickaxe',
    'naturesaura:sky_axe',
    'naturesaura:sky_shovel',
    'naturesaura:sky_hoe',
    'naturesaura:sky_sword',
    'naturesaura:infused_pickaxe',
    'naturesaura:infused_axe',
    'naturesaura:infused_shovel',
    'naturesaura:infused_hoe',
    'naturesaura:infused_iron_chest',
    'naturesaura:infused_chest',
    'naturesaura:infused_pants',
    'naturesaura:infused_sword',
    'naturesaura:altar/infused_stone'
  ])
})
