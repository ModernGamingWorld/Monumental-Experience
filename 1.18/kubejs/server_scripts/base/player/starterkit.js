onEvent('player.logged_in', event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
        // Add the stage
        event.player.stages.add('starting_items')
        // Give some items to player
        event.player.give('4x minecraft:oak_sapling')
        event.player.give(Item.of('minecraft:shield', "{Damage: 0}"))
        event.player.give(Item.of('minecraft:iron_sword', "{Damage: 0}"))
        event.player.give(Item.of('minecraft:iron_pickaxe', "{Damage: 0}"))
        event.player.give(Item.of('minecraft:iron_shovel', "{Damage: 0}"))
        event.player.give(Item.of('minecraft:iron_axe', "{Damage: 0}"))
        event.player.give(Item.of('constructionwand:iron_wand', "{Damage: 0}"))
        event.player.give('naturescompass:naturescompass')
        event.player.give('sophisticatedbackpacks:backpack')
        event.player.give('minecraft:bucket')
        event.player.give('prefab:item_start_house')
        event.player.give('4x minecraft:cookie')
        event.player.give('2x lootbagmod:lootbag')
    }
})