//Priority: 2
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

  ☻/ Recipe Tags Event Handler
  /▌
  /\﻿

*/
//======= ITEM =======
ServerEvents.tags('item', event => {

  //======= Industrial Foregoing =======
  event.add('industrialforegoing:bioreactor', '#forge:crops')
  event.add('industrialforegoing:laser_lenses', [
    'industrialforegoing:laser_lens0',
    'industrialforegoing:laser_lens1',
    'industrialforegoing:laser_lens2',
    'industrialforegoing:laser_lens3',
    'industrialforegoing:laser_lens4',
    'industrialforegoing:laser_lens5',
    'industrialforegoing:laser_lens6',
    'industrialforegoing:laser_lens7',
    'industrialforegoing:laser_lens8',
    'industrialforegoing:laser_lens9',
    'industrialforegoing:laser_lens10',
    'industrialforegoing:laser_lens11',
    'industrialforegoing:laser_lens12',
    'industrialforegoing:laser_lens13',
    'industrialforegoing:laser_lens14',
    'industrialforegoing:laser_lens15'
  ])

  //======= RFTools =======
  //======= Crafters =======
  event.add('rftools:crafter', [
    'rftoolsutility:crafter1',
    'rftoolsutility:crafter2',
    'rftoolsutility:crafter3'
  ])
  //======= Power Cells =======
  event.add('rftools:powercell', [
    'rftoolspower:cell1',
    'rftoolspower:cell2',
    'rftoolspower:cell3'
  ])
  //======= Dimensional Cells =======
  event.add('rftools:dimensionalcell', [
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_simple',
    'rftoolspower:dimensionalcell_advanced'
  ])

  //======= BLUE SKIES =======
  //======= Spears =======
  event.add('blue_skies:spears', [
    'blue_skies:bluebright_spear',
    'blue_skies:starlit_spear',
    'blue_skies:frostbright_spear',
    'blue_skies:lunar_spear',
    'blue_skies:dusk_spear',
    'blue_skies:maple_spear',
    'blue_skies:cherry_spear'
  ])

  //======= Summoner Artifact Drops =======
  event.add('blue_skies:summoner_drops', [
    'blue_skies:ethereal_arc',
    'blue_skies:soulbound_spear',
    'blue_skies:summoning_tome',
    'blue_skies:summoning_table',
    'blue_skies:blinding_rage'
  ])

  //======= Starlit Crusher Artifact Drops =======
  event.add('blue_skies:starlit_crusher_drops', [
    'blue_skies:crushing_hammer',
    'blue_skies:nature_arc',
    'blue_skies:defying_starlight'
  ])

  //======= Alchemist Artifact Drops =======
  event.add('blue_skies:alchemist_drops', [
    'blue_skies:spike_shield',
    'blue_skies:dusk_arc',
    'blue_skies:alchemy_table',
    'blue_skies:blinding_rage'
  ])

  //======= Arachnarch Artifact Drops =======
  event.add('blue_skies:arachnarch_drops', [
    'blue_skies:venom_sac',
    'blue_skies:poison_arc',
    'blue_skies:different_sword',
    'blue_skies:venomous_encounter'
  ])
})