ServerEvents.tags('item', e => {
  //Tag Add
  e.add('upgrade_aquatic:driftwood_logs', 'aquaculture:driftwood')
  e.add('forge:tanks/empty', ['naturesaura:color_changer', 'forbidden_arcanus:edelwood_bucket', 'blue_skies:ventium_bucket'])
  e.add('forge:corals', [/\w+:(?!dead)(\w+)_coral$/])
  e.add('forge:coral_blocks', [/\w+:(?!dead)(\w+)_coral_block$/])
  e.add('forge:coral_fans', [/\w+:(?!dead)(\w+)_coral_fan$/])
  e.add('forge:dead_corals', [/dead_\w+coral$/])
  e.add('forge:dead_coral_blocks', [/dead_\w+coral_block$/])
  e.add('forge:dead_coral_fans', [/dead_\w+coral_fan$/])
  //e.add('forge:bones/wither', 'tconstruct:necrotic_bone')

  //Tag Get
  e.get('forge:mushroom_caps').add(['undergarden:blood_mushroom_cap', 'undergarden:ink_mushroom_cap', 'undergarden:veil_mushroom_cap', 'undergarden:indigo_mushroom_cap']);
  e.get('forge:mushroom_colonies/brown').add(['aquaculture:brown_shrooma']);
  e.get('forge:mushroom_colonies/red').add(['aquaculture:red_shrooma']);
  e.get('forge:sandstone/red').add([/rechiseled:red_sandstone/]);
  e.get('forge:sandstone/colorless').add([/rechiseled:sandstone_/]);
  e.get('chipped:diorite').add([/rechiseled:diorite_/]);
  e.get('chipped:andesite').add([/rechiseled:andesite_/]);
  e.get('forge:beach_grass').add(['upgrade_aquatic:beachgrass']);

  //let realms = ['asgard', 'vanaheim', 'alfheim', 'midgard', 'joetunheim', 'muspelheim', 'niflheim', 'nidavellir', 'helheim']
  //realms.forEach(realm => e.add(`botania:runes/${realm}`, `mythicbotany:${realm}_rune`))
  //#endregion

  //#region REMOVALS
  e.remove('forge:string', 'undergarden:twistytwig')
  e.remove('forge:tools/wrench', 'immersiveengineering:hammer')
  e.remove('forge:tools/hammers', 'immersiveengineering:gunpart_hammer', 'industrialforegoing:infinity_hammer', 'immersiveengineering:bannerpattern_hammer')
  e.remove('forge:tools/pickaxes', 'occultism:ritual_dummy/craft_infused_pickaxe', 'apotheosis:pickaxe_tome')
  //#endregion
})