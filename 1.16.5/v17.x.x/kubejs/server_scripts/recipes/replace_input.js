onEvent('recipes', e => {
	const recipes = [
		{
			replaceTarget: { id: 'entangled:block' },
			toReplace: 'minecraft:chest',
			replaceWith: '#forge:chests/wooden'
		},
		{
			replaceTarget: { id: 'constructionwand:stone_wand' },
			toReplace: '#minecraft:stone_tool_materials',
			replaceWith: '#quark:stone_tool_materials'
		},
		{
			replaceTarget: { not: { id: 'minecraft:dried_kelp_block' } },
			toReplace: 'minecraft:dried_kelp',
			replaceWith: ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed']
		},
	]
	e.replaceInput('prefab:block_compressed_stone', 'compressium:stone_1')
	e.replaceInput('prefab:block_double_compressed_stone', 'compressium:stone_2')
	e.replaceInput('prefab:block_triple_compressed_stone', 'compressium:stone_3')
	e.replaceInput('prefab:block_compressed_dirt', 'compressium:dirt_1')
	e.replaceInput('prefab:block_double_compressed_dirt', 'compressium:dirt_2')
	e.replaceInput('astralsorcery:starmetal_ore', '#forge:ores/starmetal')
	e.replaceInput('upgrade_aquatic:beachgrass', '#forge:beach_grass')
	e.replaceInput('minecraft:nether_bricks', '#forge:bricks/nether')
	e.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone', true)
	e.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack')
	e.replaceInput({ not: [{ type: 'ars_nouveau:glyph_recipe' }] }, 'minecraft:crafting_table', '#forge:workbenches')

	['quark:tallow', 'eidolon:tallow', 'occultism:tallow'].forEach((tallow) => e.replaceInput(tallow, '#forge:tallow'))

	recipes.forEach((recipe) => e.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith))
})
