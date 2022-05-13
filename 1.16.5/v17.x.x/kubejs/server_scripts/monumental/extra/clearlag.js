// Create item whitelist filter that won't be deleted with clearlag
var whitelist = ingredient.matchAny([
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

// Create variable for last clearlag result
var lastClearLagResult = utils.newList()
// Create variable for total number of items
var lastTotalClearLagResult = utils.newCountingMap()
// Minimal Item existence in ticks
var minItemTime = 1200

// Create new function that clears lag
function clearLag(server) {
    // Get a list of all entities on server with filter that only returns items
    var itemList = server.getEntities('@e[type=item]')
    // Create new local map for item counters
    var lastResult = utils.newCountingMap()
    // Clear old result lists
    lastClearLagResult.clear()
    lastTotalClearLagResult.clear()
    // Iterate over each entity in itemList and add item counters
    itemList.forEach(function(entity) {
        if (!whitelist.test(entity.item) && entity.getFullNBT().Age >= minItemTime) {
            // Get the name of item
            var key = entity.item.name
            // Add to entity count
            lastResult.add(key, 1)
            // Add to total item count
            lastTotalClearLagResult.add(key, entity.item.count)
            // Kill the item entity
            entity.kill()
        }
    })

    // Update and sort last result list
    lastClearLagResult.addAll(lastResult.entries)
    lastClearLagResult.sort(null)

    // Tell everyone how many items will be removed
    server.tell([
        text.lightPurple('[ClearLag]'),
        ' Removed ',
        lastTotalClearLagResult.totalCount,
        ' items. '
    ])
}

// Listen for server load event
events.listen('server.load', function(event) {
    // Log message in console
    event.server.tell([text.lightPurple('[ClearLag]'), ' Timer started, clearing lag in 30 minutes!'])
    // Schedule new task in 30 minutes
    event.server.schedule(MINUTE * 30, event.server, function(callback) {
        // Tell everyone on server that items will be removed
        callback.data.tell([text.lightPurple('[ClearLag]'), ' Removing all items on ground in one minute!'])
        // Schedule a subtask that will clear items in one minute
        callback.data.schedule(MINUTE, callback.data, function(callback2) {
            clearLag(callback2.data)
        })
        // Re-schedule this task for another 30 minutes (endless loop)
        callback.reschedule()
    })
})