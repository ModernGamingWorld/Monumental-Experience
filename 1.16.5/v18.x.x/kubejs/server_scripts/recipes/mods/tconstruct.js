onEvent('recipes', e => {
  removeRecipeByID(e, [
    'tconstruct:tables/pattern',
    'tconstruct:world/wood/greenheart/pressure_plate',
    'tconstruct:world/wood/skyroot/pressure_plate',
    'tconstruct:world/wood/bloodshroom/pressure_plate',
    'tconstruct:common/materials/copper_ingot_from_block',
    'tconstruct:common/materials/copper_ingot_from_nuggets',
    'tconstruct:common/materials/copper_ingot_blasting',
    'tconstruct:common/materials/copper_ingot_smelting',
    'tconstruct:common/slime/sticky_piston',
    'tconstruct:tables/part_chest'
  ])
})
