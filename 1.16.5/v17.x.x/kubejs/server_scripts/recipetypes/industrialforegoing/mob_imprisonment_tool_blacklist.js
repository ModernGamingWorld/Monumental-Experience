onEvent('server.datapack.low_priority', e => {
	let entities = [
		'occultism:wild_hunt_wither_skeleton',
		'occultism:wild_hunt_skeleton',
		'occultism:possessed_skeleton',
		'occultism:possessed_endermite',
		'occultism:possessed_enderman',
		'occultism:otherworld_bird',
		'occultism:foliot',
		'occultism:djinni',
		'occultism:afrit_wild',
		'occultism:afrit',
		'alexsmobs:mimicube',
		'alexsmobs:centipede_body',
		'alexsmobs:centipede_tail',
		'alexsmobs:bone_serpent_part',
		'artifacts:mimic',
		'losttrinkets:dark_vex'
	]

	e.addJson('industrialforegoing:tags/entity_types/mob_imprisonment_tool_blacklist.json', {
		replace: false,
		values: entities
	})
})
