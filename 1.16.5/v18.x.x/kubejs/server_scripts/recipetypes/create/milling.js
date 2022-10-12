onEvent('recipes', e => {
	e.recipes.create.milling(['4x occultism:crushed_end_stone'], '#forge:end_stones').processingTime(150).id('create:milling/crushed_end_stone')
	e.recipes.create.milling(['minecraft:netherite_scrap', Item.of('minecraft:ancient_debris', 1).withChance(0.66)], 'minecraft:ancient_debris').processingTime(200).id('create:milling/netherite_scrap')
	e.recipes.create.milling([Item.of('atum:emmer_flour'), Item.of('atum:emmer_flour', 2).withChance(0.25), Item.of('atum:emmer_seeds').withChance(0.25)], 'atum:emmer').processingTime(150).id('create:milling/emmer_flour')
	e.recipes.create.milling(['immersivepetroleum:petcoke_dust'], '#forge:coal_petcoke').processingTime(150).id('create:milling/petcoke_dust')
	e.recipes.create.milling(['9x immersivepetroleum:petcoke_dust'], '#forge:storage_blocks/coal_petcoke').processingTime(1200).id('create:milling/petcoke_dust_from_block')
	e.recipes.create.milling(['9x emendatusenigmatica:coke_dust'], '#forge:storage_blocks/coal_coke').processingTime(1200).id('create:milling/coke_dust_from_block')
})
