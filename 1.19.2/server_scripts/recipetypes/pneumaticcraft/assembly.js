ServerEvents.recipes(e => {
	e.custom({
		type: 'pneumaticcraft:assembly_drill',
		input:
		{
			tag: 'forge:ingots/compressed_iron',
			type: 'pneumaticcraft:stacked_item',
			count: 4
		},
		result: { item: 'kubejs:compressed_iron_plate', count: 1 },
		program: 'drill'
	})
})
