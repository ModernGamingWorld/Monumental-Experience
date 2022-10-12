onEvent('recipes', e => {
  e.shaped('refinedpipes:advanced_extractor_attachment', ['SPS', 'PIP', 'SPS'], {
    I: 'refinedpipes:improved_extractor_attachment',
    P: '#forge:gears/diamond',
    S: 'create:polished_rose_quartz'
  })
  e.shaped('refinedpipes:basic_extractor_attachment', ['SPS', 'PIP', 'SPS'], {
    I: '#forge:piston',
    P: '#forge:gears/iron',
    S: '#forge:plates/iron'
  })
  e.shaped('refinedpipes:improved_extractor_attachment', ['SPS', 'PIP', 'SPS'], {
    I: 'refinedpipes:basic_extractor_attachment',
    P: '#forge:gears/gold',
    S: '#forge:plates/gold'
  })
  e.shaped('refinedpipes:elite_extractor_attachment', ['SPS', 'PIP', 'SPS'], {
    I: 'refinedpipes:advanced_extractor_attachment',
    P: '#forge:gears/emerald',
    S: '#forge:rods/blaze'
  })
  e.shaped('refinedpipes:ultimate_extractor_attachment', ['SPS', 'PIP', 'SPS'], {
    I: 'refinedpipes:elite_extractor_attachment',
    P: '#chipped:purpur_block',
    S: '#chipped:prismarine'
  })
  e.shaped('3x refinedpipes:advanced_fluid_pipe', ['DQD', 'SGS', 'DQD'], {
    D: '#forge:plates/diamond',
    Q: 'create:polished_rose_quartz',
    G: 'refinedpipes:improved_fluid_pipe',
    S: '#quark:slime_blocks'
  })
  e.shaped('3x refinedpipes:ultimate_fluid_pipe', ['DQD', 'SGS', 'DQD'], {
    D: '#chipped:purpur_block',
    Q: '#chipped:prismarine',
    G: 'refinedpipes:elite_fluid_pipe',
    S: '#quark:slime_blocks'
  })
  e.shaped('3x refinedpipes:elite_fluid_pipe', ['DQD', 'SGS', 'DQD'], {
    D: '#forge:plates/emerald',
    Q: '#forge:rods/blaze',
    G: 'refinedpipes:advanced_fluid_pipe',
    S: '#quark:slime_blocks'
  })
  e.shaped('3x refinedpipes:advanced_item_pipe', ['DQD', 'GWG', 'DQD'], {
    D: '#forge:plates/diamond',
    Q: 'create:polished_rose_quartz',
    G: 'immersiveengineering:insulating_glass',
    W: 'refinedpipes:improved_item_pipe'
  })
  e.shaped('refinedpipes:basic_energy_pipe', ['CCC', 'GRG', 'CCC'], {
    C: '#forge:plates/steel',
    G: 'immersiveengineering:insulating_glass',
    R: 'immersiveengineering:rs_engineering'
  })
  e.shaped('3x refinedpipes:improved_energy_pipe', ['CCC', 'GRG', 'CCC'], {
    C: '#forge:plates/gold',
    G: 'immersiveengineering:insulating_glass',
    R: 'refinedpipes:basic_energy_pipe'
  })
  e.shaped('3x refinedpipes:advanced_energy_pipe', ['CCC', 'GRG', 'CCC'], {
    C: '#forge:plates/diamond',
    G: 'immersiveengineering:insulating_glass',
    R: 'refinedpipes:improved_energy_pipe'
  })
  e.shaped('3x refinedpipes:elite_energy_pipe', ['CCC', 'GRG', 'CCC'], {
    C: '#forge:plates/emerald',
    G: 'immersiveengineering:insulating_glass',
    R: 'refinedpipes:advanced_energy_pipe'
  })
  e.shaped('3x refinedpipes:ultimate_energy_pipe', ['CCC', 'GRG', 'CCC'], {
    C: 'minecraft:chorus_flower',
    G: 'immersiveengineering:insulating_glass',
    R: 'refinedpipes:elite_energy_pipe'
  })
  e.shaped('refinedpipes:basic_fluid_pipe', ['CCC', 'SGS', 'CCC'], {
    C: '#forge:plates/steel',
    G: 'immersiveengineering:insulating_glass',
    S: '#quark:slime_blocks'
  })
  e.shaped('3x refinedpipes:improved_fluid_pipe', ['CCC', 'SGS', 'CCC'], {
    C: '#forge:plates/gold',
    G: 'refinedpipes:basic_fluid_pipe',
    S: '#quark:slime_blocks'
  })
  e.shaped('3x refinedpipes:improved_item_pipe', ['CCC', 'GXG', 'CCC'], {
    C: '#forge:plates/gold',
    G: 'immersiveengineering:insulating_glass',
    X: 'refinedpipes:basic_item_pipe'
  })
  e.shaped('refinedpipes:basic_item_pipe', ['CCC', 'GGG', 'CCC'], {
    C: '#forge:plates/steel',
    G: 'immersiveengineering:insulating_glass'
  })

  removeRecipeByID(e, [
    'refinedpipes:basic_extractor_attachment',
    'refinedpipes:advanced_extractor_attachment',
    'refinedpipes:elite_extractor_attachment',
    'refinedpipes:improved_extractor_attachment',
    'refinedpipes:ultimate_extractor_attachment',
    'refinedpipes:basic_fluid_pipe',
    'refinedpipes:basic_energy_pipe',
    'refinedpipes:basic_item_pipe',
    'refinedpipes:advanced_fluid_pipe',
    'refinedpipes:ultimate_fluid_pipe',
    'refinedpipes:elite_fluid_pipe',
    'refinedpipes:advanced_item_pipe',
    'refinedpipes:improved_energy_pipe',
    'refinedpipes:improved_fluid_pipe',
    'refinedpipes:improved_item_pipe',
    'refinedpipes:advanced_energy_pipe',
    'refinedpipes:elite_energy_pipe',
    'refinedpipes:ultimate_energy_pipe'
  ])
})
