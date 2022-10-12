onEvent('recipes', e => {
	e.recipes.thermal.bottler('minecraft:experience_bottle', ['minecraft:glass_bottle', Fluid.of('pneumaticcraft:memory_essence', 250)])
	e.recipes.thermal.bottler('buildinggadgets:construction_block_dense', ['buildinggadgets:construction_block_powder', Fluid.of('minecraft:water', 1000)])
	e.recipes.thermal.bottler('extendedcrafting:luminessence', ['astralsorcery:illumination_powder', Fluid.of('astralsorcery:liquid_starlight', 1000)])
})
