onEvent('jei.hide.items', e => {
  let colors = ['cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black', 'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray']

  let itemsToHide = [
    /.*spawn_egg.*/,
    /^appliedenergistics2:.+_ore$/,
    /^aquaculture:.+_bucket$/,

    'ars_nouveau:bucket_of_mana',
    /^ars_nouveau:.+_se$/,

    /^astralsorcery:.+_(ore|bucket)$/,
    /^atum:.+_ore$/,
    /^bigreactors:.+(ore|bucket)$/,
    /^bloodmagic:.+_bucket$/,
    /^blue_skies:.+_ore$/,
    /^blue_skies:ventium_.+_bucket$/,

    /^cfm:(?!.*spruce).+_(table|chair|cabinet|desk|blinds|fence|gate|crate|bench|mail_box|hedge|counter|drawer|sink_light|sink_dark)$/,
    /^cfm:(?!.*white).+_(sofa|cooler|grill|counter|fence|gate|drawer|kitchen_sink)$/,
    /^morecfm:(?!.*spruce).+_(table|chair|cabinet|desk|blinds|fence|gate|crate|bench|mail_box|hedge|counter|drawer|sink_light|sink_dark)$/,
    /^morecfm:(?!.*white).+_(sofa|cooler|grill|counter|fence|gate|drawer|kitchen_sink)$/,

    '@chipped',

    /^create:.+_(ore|bucket)$/,
    'create:powdered_obsidian',
    'createaddition:diamond_grit',
    'createaddition:zinc_sheet',
    'createaddition:copper_wire',
    'createaddition:seed_oil_bucket',
    /^createaddition:.+_rod$/,
	
	/^cyclic:.*_bucket$/,

    /^doggytalents:dog_bed$/,
    /^draconicevolution:.+_ore$/,
    'eidolon:lead_ore',

    /emendatusenigmatica:.+_(andesite|granite|diorite|sand|gravel|netherrack|blackstone|basalt|soul_soil|end_stone|gabbro|c_limestone|scoria|weathered_limestone|jasper|marble|slate|deepslate|mossy_stone|brimstone|subzero_ash|blue_netherrack|nylium_soul_soil|ether_stone|cryptic_stone|flavolite|sulphuric_rock|violecite|raw_marble)_ore$/,
    /^emendatusenigmatica:.+_bucket$/,

    /^environmental:.+_bucket$/,
    /^forbidden_arcanus:.+_bucket$/,
    /^ftbquests:.+/,
    /^gobber2:.+_ore$/,
    /^hexerei:.+_bucket$/,
    /^iceandfire:.+_ore$/,

    /^immersive(engineering|petroleum):.+_bucket$/,
    /^immersiveengineering:(ore|dust|stick|plate|storage|nugget|ingot)_.+/,
    'immersiveengineering:coke',
    'immersiveengineering:coal_coke',
    'immersiveengineering:slag',

    /^industrialforegoing:.+_bucket$/,
    /^ironfurnaces:augment_.+/,
    /^materialis:molten_.+_bucket$/,

    /^mcwbridges:(?!.*spruce).+_(log_bridge_middle|bridge|bridge_pier|bridge_stair)$/,
    /^mcwdoors:(?!.*spruce).+_door$/,
    /^mcwfences:(?!.*spruce).+_(fence|gate|wall)$/,
    /^mcwfencesbop:.+_(fence|gate|wall)$/,
    /^mcwfurnitures:(?!.*spruce).+_(wardrobe|bookshelf|cupboard|drawer|desk|table|chair|counter)$/,
    /^mcwlights:(?!.*spruce).+_(lamp|torch|ceiling_light)$/,
    /^mcwroofs:(?!.*spruce).+_(awning|roof)$/,
    /^mcwroofs:gutter_(?!.*base).+/,
    /^mcwwindows:(?!.*spruce).+_(window|window2|parapet|blinds)$/,

    /^mekanism:.+_(ore|bucket)$/,
    /^mekanism:(dust|ingot|nugget)_.+/,
    'mekanism:creative_chemical_tank',
    'mekanism:creative_fluid_tank',
    'mekanism:uranium_hexafluoride_bucket',
    'mekanism:uranium_oxide_bucket',
    /^mekanismgenerators:.+_bucket$/,

    /^minecraft:.+_(ore|bucket|bed)$/,
    /^minecraft:infested_.+/,
    'minecraft:bedrock',
    'minecraft:end_portal_frame',

    /^minecolonies:.+egg/,
    /^mysticalagradditions:.+_(ore|bucket)$/,
    /^mysticalagriculture:.+_ore$/,
    /^mythicbotany:.+_ore$/,

    /^occultism:(copper|silver)_(ore|ingot|nugget|dust)$/,
    /^occultism:(obsidian|iron|gold)_dust$/,
    'occultism:lighted_air',
    /^pneumaticcraft:.+_bucket$/,

    /^quark:.+_ore$/,
    /^quark:ancient_tome$/,

    '@rechiseled',
    /^rftoolsbase:dimensionalshard_.+/,
    'routerreborn:copper_ore',

    /^structurize:.+timber_frame$/,
    /^structurize:.+shingle$/,
    /^structurize:.+shingle_slab$/,

    /supplementaries:bamboo_spikes_tipped/,
    /^sushigocrafting:.+_bucket$/,
    /^tconstruct:.+_(ore|bucket)$/,

    /^thermal:.+_(ore|bucket)$/,
    /^thermal:(apatite|cinnabar|niter|sulfur|coal_coke)_block$/,
    /^thermal:(iron|gold|lapis|diamond|emerald|quartz|copper|tin|lead|silver|nickel|bronze|electrum|invar|constantan|signalum|lumium|enderium)_(block|ingot|nugget|dust|gear|plate)$/,

	'tombstone:grave_key',
	'tombstone:ghostly_shape',
	'tombstone:preservation',
	'tombstone:unstable_intangibleness',
	'tombstone:diversion',
	'tombstone:feather_fall',
	'tombstone:purification',
	'tombstone:true_sight',
	'tombstone:prayer',
	'tombstone:reach',
	'tombstone:lighting_aquatic_liferesistance',
	'tombstone:frost_resistance',
	'tombstone:bone_shield',
	'tombstone:bait',
	'tombstone:aquatic_life',

    /^twilightforest:force_field_.+/,
    /^twilightforest:.+_miniature_structure$/,
    /^twilightforest:.+door$/,

    /^undergarden:.+_bucket$/,
    /^upgrade_aquatic:.+_bucket$/,

    /^xreliquary:bullets\/neutral_bullet$/,
    /^xreliquary:magazines\/neutral_magazine$/
  ]

  itemsToHide.forEach(i => e.hide(i))
  colors.forEach(c => { if(c != 'light_blue') e.hide(`/^refinedstorage:${c}_.+/`) })
})

onEvent('jei.hide.fluids', e => e.hideAll())
