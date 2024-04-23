//Priority: 1
/*
  ---╔═══╗------------╔═╗--╔═══╗--╔╗-------
  ---║╔═╗║------------║╔╝--║╔══╝-╔╝╚╗------
  ---║║ ║╠══╦══╗--╔══╦╝╚╗--║╚══╦═╩╗╔╬══╗---
  ---║╚═╝║╔╗║║═╣--║╔╗╠╗╔╝--║╔══╣╔╗║║║║═╣---
  ---║╔═╗║╚╝║║═╣--║╚╝║║║---║║--║╔╗║╚╣║═╣---
  ---╚╝ ╚╩═╗╠══╝--╚══╝╚╝---╚╝--╚╝╚╩═╩══╝---
  -------╔═╝║------------------------------
  -------╚══╝------------------------------
*/
/*

  ☻/ Items Modification Event Handler
  /▌
  /\﻿

*/
ItemEvents.modification(event => {

  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']

  function modifyStack(listOfItems, countPerStack) {
    listOfItems.forEach(item => {
      event.modify(item, item => item.maxStackSize = countPerStack)
    })
  }

  modifyStack([
    //Miscelleneous region
    /^industrialforegoing:.*addon.*/,
    /^sophisticatedbackpacks:.*upgrade.*/,
    /^sophisticatedstorage:.*upgrade.*/,
    /^mekanism:.*upgrade.*/,
    /^thermal:.*grenade.*/,
    'cyclic:heart',
    'cyclic:heart_empty',
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:cake',
    'minecraft:minecart',
    'minecraft:saddle',
    'blue_skies:camel_saddle',
    'minecraft:shulker_box',
    'minecraft:writable_book',
    'minecraft:enchanted_book',
    'minecraft:honey_bottle',
    'minecraft:totem_of_undying',
    'minecraft:snowball',
    'minecraft:armor_stand',
    'minecraft:bucket',
    'minecraft:water_bucket',
    'minecraft:milk_bucket',
    'minecraft:lava_bucket',
    'minecraft:powder_snow_bucket',
    'voidtotem:totem_of_void_undying',
    'powah:charged_snowball',
    'rftoolsbase:infused_enderpearl',
    'rftoolsbase:infused_diamond',
    //Sign region
    /^minecraft:.*sign.*/,
    /^framedblocks:.*sign.*/,
    /^twilightforest:.*sign.*/,
    /^securitycraft:.*sign.*/,
    /^quark:.*sign.*/,
    /^byg:.*sign.*/,
    /^deeperdarker:.*sign.*/,
    /^undergarden:.*sign.*/,
    //Boat region
    /^minecraft:.*boat.*/,
    /^quark:.*boat.*/,
    /^byg:.*boat.*/,
    /^undergarden:.*boat.*/,
    //Horse armor region
    'minecraft:iron_horse_armor',
    'minecraft:golden_horse_armor',
    'minecraft:diamond_horse_armor',
    'minecraft:leather_horse_armor',
    'byg:ametrine_horse_armor',
    'byg:pendorite_horse_armor',
    //Stew/soup region
    'minecraft:mushroom_stew',
    'minecraft:rabbit_stew',
    'minecraft:beetroot_soup',
    'thermal:hearty_stew',
    'thermal:xp_stew',
    'nourished_nether:nether_fungus_stew',
    //Music disk region
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
    'minecraft:music_disc_5',
    'botania:record_gaia_1',
    'botania:record_gaia_2',
    'alexsmobs:music_disc_thime',
    'alexsmobs:music_disc_daze',
    'quark:music_disc_endermosh',
    'quark:music_disc_drips',
    'quark:music_disc_ocean',
    'quark:music_disc_rain',
    'quark:music_disc_wind',
    'quark:music_disc_fire',
    'quark:music_disc_clock',
    'quark:music_disc_crickets',
    'quark:music_disc_chatter',
    'blue_skies:blinding_rage',
    'blue_skies:defying_starlight',
    'blue_skies:venomous_encounter',
    'blue_skies:population',
    'twilightforest:music_disc_radiance',
    'twilightforest:music_disc_steps',
    'twilightforest:music_disc_superstitious',
    'twilightforest:music_disc_home',
    'twilightforest:music_disc_wayfarer',
    'twilightforest:music_disc_findings',
    'twilightforest:music_disc_maker',
    'twilightforest:music_disc_thread',
    'twilightforest:music_disc_motion'
  ], 64)

  colors.forEach(color => {
    event.modify(`minecraft:${color}_banner`, item => item.maxStackSize = 64)
  })

  colors.forEach(color => {
    event.modify(`minecraft:${color}_bed`, item => item.maxStackSize = 64)
  })

  colors.forEach(color => {
    event.modify(`minecraft:${color}_shulker_box`, item => item.maxStackSize = 64)
  })

  event.modify('allthemodium:allthemodium_sword', modification => {
		modification.setAttackDamage(100)
	})
  event.modify('allthemodium:alloy_sword', modification => {
		modification.setAttackDamage(1500)
	})

  event.modify('thermal:sawdust_block', (item) => {
    item.burnTime = 1000
  })

})
