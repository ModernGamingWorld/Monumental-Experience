//BLOCK DROP LOOT TABLE SCRIPT
//BY ModernGamingWorld / 2021
//
//Makes vanilla and modded Blocks drop Mystical Agriculture Essence
//
onEvent('block.loot_tables', event => {

    //Dirt Essences
    event.addSimpleBlock('#forge:dirt', 'mysticalagriculture:dirt_essence')

    //Nether Essences
    event.addSimpleBlock('#forge:netherrack', 'mysticalagriculture:nether_essence')

    //End Essences
    event.addSimpleBlock('#forge:end_stones', 'mysticalagriculture:end_essence')

    //Ice Essences
    event.addSimpleBlock('#forge:snow_blocks', 'mysticalagriculture:ice_essence')

    //Obsidian Essences
    event.addSimpleBlock('#forge:obsidian', 'mysticalagriculture:obsidian_essence')

    //Nature Essences
    event.addSimpleBlock('#forge:hay_bales', 'mysticalagriculture:nature_essence')
    event.addSimpleBlock('minecraft:cactus', 'mysticalagriculture:nature_essence')
})