ItemEvents.modification(e => {
	function modifyStack(listOfItems, countPerStack) {
		listOfItems.forEach(item => {
			e.modify(item, item => item.maxStackSize = countPerStack)
		})
	}

	modifyStack([
		'minecraft:ender_pearl',
		'minecraft:music_disc_13',
		'minecraft:music_disc_cat',
		'minecraft:music_disc_blocks',
		'minecraft:music_disc_chirp',
		'minecraft:music_disc_far',
		'minecraft:music_disc_mall',
		'minecraft:music_disc_mellohi',
		'minecraft:music_disc_stal',
		'minecraft:music_disc_strad',
		'minecraft:music_disc_ward',
		'minecraft:music_disc_11',
		'minecraft:music_disc_wait',
		'minecraft:music_disc_otherside',
		'minecraft:music_disc_pigstep',
		'minecraft:iron_horse_armor',
		'minecraft:golden_horse_armor',
		'minecraft:diamond_horse_armor',
		'minecraft:leather_horse_armor',
		'minecraft:honey_bottle',
		'minecraft:beetroot_soup',
		'minecraft:rabbit_stew',
		'minecraft:mushroom_stew',
		'minecraft:suspicious_stew',
		'undergarden:veiled_stew',
		'undergarden:indigo_stew',
		'undergarden:bloody_stew'
	], 64)

	modifyStack([
		'forbidden_arcanus:quantum_catcher',
		'aquaculture:worm',
		'immersiveengineering:graphite_electrode'
	], 1)

	modifyStack([
		'minecraft:saddle'
	], 16)
})
