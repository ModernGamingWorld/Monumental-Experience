//for more info: Lady Lexxie#6969 on Discord

let runCL = true  //whether to start the CL when server starts
let minutes = 30  //must be >= 2 to avoid issues
let blacklist = Ingredient.matchAny([ //blacklist of what it should avoid
	'appliedenergistics2:certus_crystal_seed',
	'appliedenergistics2:fluix_crystal_seed',
	'appliedenergistics2:nether_quartz_seed',
	'appliedenergistics2:purified_certus_quartz_crystal',
	'appliedenergistics2:purified_nether_quartz_crystal',
	'appliedenergistics2:purified_fluix_crystal',
	'botania:manasteel_ingot',
	'botania:terrasteel_ingot',
	'botania:mana_pearl',
	'botania:mana_diamond',
	'botania:elementium_ingot',
	'botania:mana_string',
	'botania:mana_powder',
	'botania:livingrock',
	'botania:livingwood',
	'create:shadow_steel',
	'create:chromatic_compound',
	'extendedcrafting:elite_table',
	'extendedcrafting:ultimate_table',
	'enigmaticlegacy:etherium_helmet',
	'enigmaticlegacy:etherium_chestplate',
	'enigmaticlegacy:etherium_leggings',
	'enigmaticlegacy:etherium_boots',
	'enigmaticlegacy:etherium_pickaxe',
	'enigmaticlegacy:etherium_shovel',
	'enigmaticlegacy:etherium_axe',
	'enigmaticlegacy:etherium_sword',
	'enigmaticlegacy:etherium_scythe',
	'enigmaticlegacy:astral_breaker',
	'mysticalagriculture:supremium_furnace',
	'mysticalagriculture:supremium_farmland',
	'mysticalagriculture:supremium_reprocessor',
	'mysticalagriculture:supremium_watering_can',
	'mysticalagriculture:imperium_furnace',
	'mysticalagriculture:imperium_farmland',
	'mysticalagriculture:imperium_reprocessor',
	'mysticalagriculture:imperium_watering_can',
	'matc:supremium_crystal',
	'matc:imperium_crystal',
	'minecraft:diamond'
])

// DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU'RE DOING!
//================================================================================================================

let lastClearLagResult = Utils.newList()
let lastTotalClearLagResult = Utils.newCountingMap()

//the actual clear lag script
let clearLag = (server) => {
	let itemList = server.getEntities('@e[type=item]')
	let lastResult = Utils.newCountingMap()
	lastClearLagResult.clear()
	lastTotalClearLagResult.clear()

	itemList.forEach(entity => {
		if (!blacklist.test(entity.item)) {
			lastResult.add(entity.item.name, 1)
			lastTotalClearLagResult.add(entity.item.name, entity.item.count)
			entity.kill()
		}
	})

	lastClearLagResult.addAll(lastResult.entries)
	lastClearLagResult.sort(null)

	server.tell([
		Text.lightPurple('[ClearLag]'), ` Removed ${lastTotalClearLagResult.totalCount} items. `,
		'Type ', Text.yellow('!clearlagresults'), ' or ', Text.yellow('!cl results'), ' for results.'
	])
}

//the script that shows the CL results
let clearLagResults = (server) => {
	server.tell([Text.lightPurple('[ClearLag]'), ' Last clearlag results:'])
	lastClearLagResult.forEach(entry => {
		let total = lastTotalClearLagResult.get(entry.key)

		if (entry.value == total) server.tell([Text.gold(entry.key), ': ', Text.red(entry.value)])
		else server.tell([Text.gold(entry.key), ': ', Text.red(entry.value), ' entities, ', Text.red(total), ' total'])
	})
}

//the loop that runs CL every X minutes
let runClearLagLoop = (server) => {
	server.tell([Text.lightPurple('[ClearLag]'), ` Timer started, clearing lag in ${minutes} minutes!`])
	server.schedule(MINUTE * (minutes - 1), (callback) => {
		server.tell([Text.lightPurple('[ClearLag]'), ' Removing all items on ground in one minute!'])
		server.schedule(SECOND * 50, () => {
			server.tell([Text.lightPurple('[ClearLag]'), ' Removing all items on ground in ten seconds!'])
			server.schedule(SECOND * 10, () => clearLag(server))
		})
		if (runCL) callback.reschedule()
	})
}

//the script that starts the loop if runCL is set to true
onEvent('server.load', e => {
	if (!runCL) return
	e.server.schedule(SECOND * 5, () => {
		runClearLagLoop(e.server)
	})
})

//the chat input script
onEvent('player.chat', e => {
	//rough method of checking if player has OP
	if (e.server.runCommandSilent(`execute as ${e.player.name} run summon minecraft:item ~ ~-400 ~ {Item:{id:'minecraft:dirt',Count:1b}}`) != 0) {
		//CL on demand
		if (e.message === '!cl' || e.message === '!clearlag') {
			e.server.schedule(500, () => clearLag(e.server))
		}

		//show results of last CL
		if (e.message === '!cl results' || e.message === '!clearlag results') {
			e.server.schedule(500, () => clearLagResults(e.server))
		}

		//stop the CL timer
		if (e.message === '!cl stop' || e.message === '!clearlag stop') {
			e.server.schedule(500, () => {
				if (!runCL) {
					e.server.tell([Text.lightPurple('[ClearLag]'), ' Timer is already stopped!'])
					return
				}
				e.server.tell([Text.lightPurple('[ClearLag]'), ' Timer will stop after next clear!'])
				runCL = false
			})
		}

		//start the CL timer
		if (e.message === '!cl start' || e.message === '!clearlag start') {
			e.server.schedule(500, () => {
				if (runCL) {
					e.server.tell([Text.lightPurple('[ClearLag]'), ' Timer is already started!'])
					return
				}
				runCL = true
				runClearLagLoop(e.server)
			})
		}
	}
})
