onEvent('item.tooltip', e => {
  let formattedTooltip = (item, tooltip) => {
    e.add(item, '')
    let line = ''
    tooltip.split(' ').forEach(word => {
      line.length == 0 ? line = word : line += ` ${word}`
      if (line.length > 40) {
        e.add(item, Text.of(line).darkPurple())
        line = ''
      }
    })
    if (line.length > 0) e.add(item, Text.of(line).darkPurple())
    e.add(item, '')
  }

  formattedTooltip('minecraft:smithing_table', 'Can be found within chests that are located in structures throughout the world.')
  formattedTooltip('routerreborn:coppercoil', 'Can be found within chests that are located in structures throughout the world.')
  formattedTooltip('enigmaticlegacy:etherium_helmet', 'Can be found within chests at stage 5 in DungeonCrawl dungeons throughout the world.')
  formattedTooltip('enigmaticlegacy:etherium_chestplate', 'Can be found within a tower chest throughout the world.')
  formattedTooltip('enigmaticlegacy:etherium_leggings', 'Can be found within a Quark MonsterBox throughout the world at a weight of 1.')
  formattedTooltip('enigmaticlegacy:etherium_boots', 'Can be found within a Cyclops cave throughout the world at a weight of 1.')
  formattedTooltip('inventorypets:solstice_sword', 'Can be found within a Quark MonsterBox throughout the world at a weight of 1.')
  formattedTooltip('enigmaticlegacy:etherium_pickaxe', 'Can be found within a Witch Hut throughout the world at a weight of 1.')
  formattedTooltip('enigmaticlegacy:etherium_axe', 'Can be found within a Mausoleum throughout the world at a weight of 1.')
  formattedTooltip('enigmaticlegacy:etherium_shovel', 'Can be found within a Red Giant Mushroom throughout the world at a weight of 1.')
  formattedTooltip('enigmaticlegacy:etherium_sword', 'Can be found within a Illager Campsite Tent throughout the world at a weight of 1.')
  formattedTooltip('enigmaticlegacy:etherium_scythe', 'Can be found within a Astral Sorcery Shine chests throughout the world at a weight of 1.')
})
