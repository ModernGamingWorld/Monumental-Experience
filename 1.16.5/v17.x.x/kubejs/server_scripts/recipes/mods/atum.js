onEvent('recipes', e => {
	e.shapeless('9x atum:nebu_drop', '#forge:ingots/nebu')

	removeRecipeByID(e, [
		'atum:diamond_from_blasting',
		'atum:limestone_pickaxe',
		'atum:limestone_axe',
		'atum:limestone_pressure_plate',
		'atum:palm_pressure_plate',
		'atum:deadwood_pressure_plate',
		'atum:stoneguard_sword',
		'atum:stoneguard_greatsword',
		'atum:desert_chestplate_iron',
		'atum:desert_chestplate_gold',
		'atum:desert_chestplate_diamond',
		'atum:desert_helmet_iron',
		'atum:desert_helmet_gold',
		'atum:desert_helmet_diamond',
		'atum:desert_legs_iron',
		'atum:desert_legs_gold',
		'atum:desert_legs_diamond',
		'atum:desert_boots_iron',
		'atum:desert_boots_gold',
		'atum:desert_boots_diamond'
	])
})
