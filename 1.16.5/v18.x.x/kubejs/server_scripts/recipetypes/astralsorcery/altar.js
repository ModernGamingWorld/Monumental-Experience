onEvent('recipes', e => {
	function altarRecipe(type, duration, starlight, pattern, keys, output, effects) {
		e.custom({
			type: 'astralsorcery:altar',
			altar_type: type,
			duration: duration,
			starlight: starlight,
			pattern: pattern,
			key: keys,
			output: Item.of(output).toResultJson(),
			effects: effects
		})
	}

	altarRecipe(2, 400, 2000, ['A___A', '__D__', '__E__', 'C_B_C', '_____'],
		{
			A: Item.of('#forge:gems/aquamarine'),
			B: Item.of('botania:manasteel_pick'),
			C: Item.of('#forge:ingots/gold'),
			D: Item.of('#forge:gems/mana_diamond'),
			E: Item.of('astralsorcery:glass_lens')
		}, 'astralsorcery:colored_lens_break',
		['astralsorcery:built_in_effect_constellation_finish', 'astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:altar_default_sparkle', 'astralsorcery:built_in_effect_constellation_lines', 'astralsorcery:built_in_effect_attunement_sparkle']
	)

	altarRecipe(2, 400, 2000, ['A___A', '__D__', '__E__', 'C_B_C', '_____'],
		{
			A: Item.of('#forge:gems/aquamarine'),
			B: Item.of('#forge:gems/mana_diamond'),
			C: Item.of('#astralsorcery:stardust'),
			D: Item.of('botania:livingwood_twig'),
			E: Item.of('astralsorcery:glass_lens')
		}, 'astralsorcery:colored_lens_regeneration',
		['astralsorcery:built_in_effect_constellation_finish', 'astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:altar_default_sparkle', 'astralsorcery:built_in_effect_constellation_lines', 'astralsorcery:built_in_effect_attunement_sparkle']
	)

	altarRecipe(2, 400, 2000, ['_____', 'C_D_C', '_CEC_', '_A_A_', 'B___B'],
		{
			A: Item.of('botania:manaweave_cloth'),
			B: Item.of('#forge:gems/aquamarine'),
			C: Item.of('#forge:ingots/manasteel'),
			D: Item.of('#forge:gems/mana_diamond'),
			E: Item.of('astralsorcery:glass_lens')
		}, 'astralsorcery:colored_lens_damage',
		['astralsorcery:built_in_effect_constellation_finish', 'astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:altar_default_sparkle', 'astralsorcery:built_in_effect_constellation_lines', 'astralsorcery:built_in_effect_attunement_sparkle']
	)

	altarRecipe(2, 400, 2000, ['_____', '_CDC_', '_BEB_', 'B_A_B', '_B_B_'],
		{
			A: Item.of('botania:mana_pearl'),
			B: Item.of('#astralsorcery:stardust'),
			C: Item.of('naturesaura:tainted_gold'),
			D: Item.of('botania:mana_string'),
			E: Item.of('astralsorcery:shifting_star')
		}, 'astralsorcery:enchantment_amulet',
		['astralsorcery:built_in_effect_constellation_finish', 'astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:altar_default_sparkle', 'astralsorcery:built_in_effect_constellation_lines', 'astralsorcery:built_in_effect_attunement_sparkle']
	)

	altarRecipe(1, 100, 200, ['_____', '__BC_', '_BDB_', '_AB__', '_____'],
		{
			A: Item.of('#botania:livingwood'),
			B: Item.of('#forge:rods/wooden'),
			C: Item.of('astralsorcery:glass_lens'),
			D: Item.of('naturesaura:tainted_gold')
		}, 'astralsorcery:telescope',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 200, ['_____', '__C__', '_DED_', '_ABA_', '_____'],
		{
			A: Item.of('astralsorcery:infused_wood'),
			B: Item.of('naturesaura:tainted_gold'),
			C: Item.of('#forge:gems/aquamarine'),
			D: Item.of('astralsorcery:marble_raw'),
			E:
			{
				type: 'astralsorcery:fluid',
				fluid: [Fluid.of('astralsorcery:liquid_starlight', 1000).toJson()]
			}
		}, 'astralsorcery:resonator',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 700, ['_____', '_AAA_', '_CDC_', '_BXB_', '_____'],
		{
			A: Item.of('bloodmagic:stonetilepath'),
			B: Item.of('naturesaura:tainted_gold'),
			C: Item.of('#botania:livingwood'),
			D: Item.of('forbidden_arcanus:purifying_soap'),
			X: Item.of('bloodmagic:blankrune')
		}, 'bloodmagic:alchemytable',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(0, 100, 700, ['_____', '_AAA_', '_SDS_', '_BCB_', '_____'],
		{
			A: Item.of('#forge:stone'),
			B: Item.of('bloodmagic:infusedslate'),
			C: Item.of('#forge:furnace'),
			D: Item.of('bloodmagic:masterbloodorb'),
			S: Item.of('#forge:storage_blocks/iron')
		}, 'bloodmagic:alchemicalreactionchamber',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(3, 200, 1400, ['A___A', '_ESE_', '_GFD_', '_BCB_', 'A___A'],
		{
			A: Item.of('#botania:livingrock'),
			B: Item.of('naturesaura:tainted_gold'),
			C: Item.of('#forge:storage_blocks/starmetal'),
			D: Item.of('#botania:runes/envy'),
			E: Item.of('#forge:blood'),
			F: Item.of('#forge:furnace'),
			G: Item.of('#botania:runes/wrath'),
			S:
			{
				type: 'astralsorcery:crystal',
				hasToBeAttuned: false,
				hasToBeCelestial: false,
				canBeAttuned: true,
				canBeCelestialCrystal: true
			}
		}, 'bloodmagic:altar',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar', 'astralsorcery:built_in_effect_attunement_sparkle']
	)

	altarRecipe(0, 100, 700, ['_____', '_ABA_', '_ADA_', '_ECE_', '_____'],
		{
			A: Item.of('botania:livingrock'),
			B: Item.of('botania:incense_stick'),
			C: Item.of('bloodmagic:apprenticebloodorb'),
			D: Item.of('botania:ender_air_bottle'),
			E: Item.of('bloodmagic:blankrune')
		}, 'bloodmagic:incensealtar',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(0, 100, 700, ['_____', '_ABA_', '_BDB_', '_ECE_', '_____'],
		{
			A: Item.of('botania:mana_glass'),
			B: Item.of('bloodmagic:reagentlava'),
			C: Item.of('blue_skies:pyrope_gem'),
			D: Item.of('bloodmagic:masterbloodorb'),
			E: Item.of('#forge:ingots/obsidian')
		}, 'bloodmagic:lavacrystal',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(0, 40, 100, ['_____', '_BA__', '_AC__', '___D_', '_____'],
		{
			A: Item.of('bloodmagic:demonslate'),
			B: Item.of('bloodmagic:masterbloodorb'),
			C: Item.of('psi:cad_assembly_psimetal'),
			D: Item.of('astralsorcery:infused_glass')
		}, 'bloodmagic:ritualtinkerer',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 200, ['_____', '_D_D_', '_CAC_', '_CBC_', '_____'],
		{
			A: Item.of('bloodmagic:basemonstersoul'),
			B: Item.of('iceandfire:dragonforge_fire_core_disabled'),
			C: Item.of('bloodmagic:blankrune'),
			D: Item.of('forbidden_arcanus:purifying_soap')
		}, 'bloodmagic:soulforge',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 200, ['_____', '_LLL_', '_QPS_', '_LLL_', '_____'],
		{
			P: Item.of('#botania:petals/white'),
			Q: Item.of('#astralsorcery:starmetal'),
			L: Item.of('botania:livingwood'),
			S: Item.of('astralsorcery:glass_lens')
		}, 'botania:mana_spreader',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 200, ['_____', '__L__', '_LPL_', '__L__', '_____'],
		{
			P: Item.of('astralsorcery:glass_lens'),
			L: Item.of('#forge:ingots/manasteel')
		}, 'botania:lens_normal',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 250, ['_____', '_QQQ_', '_QPQ_', '_QLQ_', '_____'],
		{
			P: Item.of('#forge:gems/mana_diamond'),
			Q: Item.of('compressium:emerald_1'),
			L: Item.of('#forge:nether_stars')
		}, 'inventorypets:pet_illuminati',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 700, ['_____', '_ABA_', '_CDC_', '_DDD_', '_____'],
		{
			A: Item.of('psi:psimetal'),
			B: Item.of('psi:psigem'),
			C: Item.of('#thermal:rockwool'),
			D: Item.of('#botania:livingrock')
		}, 'mysticalagriculture:infusion_altar',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(0, 100, 700, ['_____', '_ABA_', '_CDC_', '_DDD_', '_____'],
		{
			A: Item.of('psi:psidust'),
			B: Item.of('psi:psimetal'),
			C: Item.of('#thermal:rockwool'),
			D: Item.of('#botania:livingrock')
		}, 'mysticalagriculture:infusion_pedestal',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(0, 100, 700, ['_____', '_BBB_', '_ABA_', '_BBB_', '_____'],
		{
			A: Item.of('mysticalagriculture:soulium_dust'),
			B: Item.of('#botania:livingrock')
		}, 'mysticalagriculture:tinkering_table',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(0, 100, 700, ['_____', '_DCD_', '_CXC_', '_DCD_', '_____'],
		{
			C: Item.of('forbidden_arcanus:purifying_soap'),
			D: Item.of('#astralsorcery:starmetal'),
			X: Item.of('psi:psidust_block')
		}, 'psi:programmer',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(0, 100, 700, ['_____', '_DCD_', '_CXC_', '_DCD_', '_____'],
		{
			C: Item.of('forbidden_arcanus:purifying_soap'),
			D: Item.of('#astralsorcery:starmetal'),
			X: Item.of('#botania:runes/mana')
		}, 'psi:cad_assembler',
		['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar']
	)

	altarRecipe(0, 100, 200, ['_____', '_PTP_', '_TPT_', '_PTP_', '_____'],
		{
			P: Item.of('#forge:treated_wood'),
			T: Item.of('#forge:treated_wood')
		}, '3x tconstruct:pattern',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 200, ['_____', '_LQL_', '_QPQ_', '_LQL_', '_____'],
		{
			P: Item.of('botanicalmachinery:mana_emerald'),
			Q: Item.of('botania:mana_pearl'),
			L: Item.of('#forge:dyes/purple')
		}, 'waystones:warp_stone',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)

	altarRecipe(0, 100, 200, ['_____', '__Q__', '_QPQ_', '_LLL_', '_____'],
		{
			P: Item.of('waystones:warp_stone'),
			Q: Item.of('#botania:livingrock'),
			L: Item.of('#forge:ingots/obsidian')
		}, 'waystones:waystone',
		['astralsorcery:built_in_effect_discovery_central_beam']
	)
})

