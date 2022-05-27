onEvent('recipes', e => {
  e.shaped('routerreborn:barrel_t1', ['lll', 'iwi', 'lll'], {
    i: '#forge:ingots/steel',
    l: '#forge:plates/steel',
    w: 'storagedrawers:oak_full_drawers_1'
  })
  e.shaped('routerreborn:barrel_t2', ['lll', 'iwi', 'lll'], {
    i: '#forge:plates/electrum',
    l: '#forge:ingots/electrum',
    w: 'routerreborn:barrel_t1'
  })
  e.shaped('routerreborn:barrel_t3', ['lll', 'iwi', 'lll'], {
    i: 'minecraft:ender_eye',
    l: '#forge:plates/steel',
    w: 'routerreborn:barrel_t2'
  })
  e.shaped('9x routerreborn:itemconduit', ['iii', 'cRc', 'iii'], {
    i: '#forge:plates/steel',
    R: 'refinedpipes:basic_item_pipe',
    c: '#forge:gears/bronze'
  })
  e.shaped('9x routerreborn:energyconduit', ['iii', 'cRc', 'iii'], {
    i: '#forge:plates/steel',
    R: 'refinedpipes:basic_energy_pipe',
    c: '#forge:gears/bronze'
  })
  e.shaped('routerreborn:furnace', ['iii', 'ifi', 'ici'], {
    i: '#forge:plates/iron',
    f: 'ironfurnaces:iron_furnace',
    c: 'routerreborn:coppercoil'
  })
  e.shaped('routerreborn:generator', ['iii', 'cbc', 'sas'], {
    i: '#forge:plates/steel',
    b: '#forge:gears/steel',
    s: '#forge:sheetmetals/steel',
    c: 'routerreborn:coppercoil',
    a: 'immersiveengineering:circuit_board'
  })
  e.shaped('routerreborn:harvester', ['iii', 'cbc', 'iii'], {
    i: '#forge:plates/steel',
    b: '#forge:tools/hoes',
    c: 'routerreborn:coppercoil'
  })
  e.shaped('routerreborn:quarry', ['isi', 'cac', 'ibi'], {
    i: '#forge:plates/iron',
    b: '#forge:tools/pickaxe',
    s: 'immersiveengineering:pickaxe_steel',
    c: 'routerreborn:coppercoil',
    a: '#forge:gears/steel'
  })
  e.shaped('3x routerreborn:routerconduit', ['   ', 'cac', '   '], {
    c: 'immersiveengineering:insulating_glass',
    a: 'routerreborn:itemconduit'
  })
  e.shaped('routerreborn:treefarm', ['iii', 'cbc', 'iii'], {
    i: '#forge:plates/steel',
    b: 'minecraft:diamond_axe',
    c: 'routerreborn:coppercoil'
  })
  e.shaped('routerreborn:lamp', ['iii', 'ibi', 'iii'], {
    i: 'druidcraft:fiery_torch',
    b: 'thermal:lightning_charge'
  })

  removeRecipeByID(e, [
    'routerreborn:copper_ingot',
    'routerreborn:barrel_t1',
    'routerreborn:barrel_t2',
    'routerreborn:barrel_t3',
    'routerreborn:furnace',
    'routerreborn:generator',
    'routerreborn:harvester',
    'routerreborn:quarry',
    'routerreborn:treefarm',
    'routerreborn:routercable',
    'routerreborn:coppercoil',
    'routerreborn:energy_conduit',
    'routerreborn:item_conduit',
    'routerreborn:floodlight'
  ])
})
