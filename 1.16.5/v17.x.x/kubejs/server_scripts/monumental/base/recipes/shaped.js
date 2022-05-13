onEvent('recipes', event => {
    //atum
    event.shaped(Item.of('atum:limestone_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'atum:limestone',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('atum:palm_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'atum:palm_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('atum:deadwood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'atum:deadwood_planks',
        B: '#forge:tools/hammer'
    })
    //Appliedenergistics2
    event.shaped(Item.of('appliedenergistics2:engineering_processor_press', 1), ["BBB", "BCB", "BBB"], {
        B: 'mysticalagriculture:certus_quartz_essence',
        C: '#forge:gems/mana_diamond'
    })
    event.shaped(Item.of('appliedenergistics2:silicon_press', 1), ["BBB", "BCB", "BBB"], {
        B: 'mysticalagriculture:certus_quartz_essence',
        C: 'mysticalagriculture:silicon_essence'
    })
    event.shaped(Item.of('appliedenergistics2:calculation_processor_press', 1), ["BBB", "BCB", "BBB"], {
        B: 'mysticalagriculture:certus_quartz_essence',
        C: 'rsgauges:industrial_day_timer'
    })
    event.shaped(Item.of('appliedenergistics2:logic_processor_press', 1), ["BBB", "BCB", "BBB"], {
        B: 'mysticalagriculture:certus_quartz_essence',
        C: '#forge:ingots/electrum'
    })
    event.shaped(Item.of('appliedenergistics2:quartz_growth_accelerator', 1), ["aba", "cdc", "aba"], {
        c: 'appliedenergistics2:quartz_glass',
        a: 'kubejs:compressed_iron_plate',
        b: 'appliedenergistics2:fluix_glass_cable',
        d: '#forge:storage_blocks/fluix'
    })
    event.shaped(Item.of('appliedenergistics2:quantum_ring', 1), ["aba", "cde", "aba"], {
        c: 'appliedenergistics2:engineering_processor',
        e: 'appliedenergistics2:fluix_smart_dense_cable',
        a: 'kubejs:compressed_iron_plate',
        d: 'appliedenergistics2:energy_cell',
        b: 'appliedenergistics2:logic_processor'
    })
    event.shaped(Item.of('appliedenergistics2:crafting_unit', 1), ["aba", "cdc", "aba"], {
        a: 'kubejs:compressed_iron_plate',
        d: 'appliedenergistics2:logic_processor',
        c: 'appliedenergistics2:fluix_glass_cable',
        b: 'appliedenergistics2:calculation_processor'
    })
    event.shaped(Item.of('appliedenergistics2:blank_pattern', 2), ["ABA", "BCB", "DDD"], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:ingots/refined_glowstone',
        C: 'appliedenergistics2:charged_certus_quartz_crystal',
        D: 'kubejs:compressed_iron_plate'
    })
    event.shaped(Item.of('appliedenergistics2:fluid_export_bus', 1), ["aca", "lbl"], {
        a: 'kubejs:compressed_iron_plate',
        b: 'appliedenergistics2:formation_core',
        c: '#forge:piston',
        l: '#pneumaticcraft:fluid_tanks'
    })
    event.shaped(Item.of('appliedenergistics2:import_bus', 1), [" a ", "bcb"], {
        a: 'appliedenergistics2:annihilation_core',
        b: 'kubejs:compressed_iron_plate',
        c: '#forge:piston'
    })
    event.shaped(Item.of('appliedenergistics2:fluid_import_bus', 1), ["lal", "bcb"], {
        a: 'appliedenergistics2:annihilation_core',
        b: 'kubejs:compressed_iron_plate',
        c: '#forge:piston',
        l: '#pneumaticcraft:fluid_tanks'
    })
    event.shaped(Item.of('appliedenergistics2:annihilation_plane', 1), ["aaa", "bcb"], {
        a: '#forge:gems/fluix',
        b: 'kubejs:compressed_iron_plate',
        c: 'appliedenergistics2:annihilation_core'
    })
    event.shaped(Item.of('appliedenergistics2:annihilation_plane', 1), ["ab", "cb", "ab"], {
        a: '#forge:gems/fluix',
        b: 'kubejs:compressed_iron_plate',
        c: 'appliedenergistics2:annihilation_core'
    })
    event.shaped(Item.of('appliedenergistics2:formation_plane', 1), ["aaa", "bcb"], {
        a: '#forge:gems/fluix',
        b: '#forge:plates/enderium',
        c: 'appliedenergistics2:formation_core'
    })
    event.shaped(Item.of('appliedenergistics2:formation_plane', 1), ["ab", "cb", "ab"], {
        a: '#forge:gems/fluix',
        b: '#forge:plates/enderium',
        c: 'appliedenergistics2:formation_core'
    })
    event.shaped(Item.of('appliedenergistics2:export_bus', 1), ["aba", " c "], {
        a: 'kubejs:compressed_iron_plate',
        b: 'appliedenergistics2:formation_core',
        c: '#forge:piston'
    });
    //Building Gadgets
    event.shaped(Item.of('buildinggadgets:gadget_building', 1), ["AEA", "DBD", "ACA"], {
        A: '#forge:plates/iron',
        B: 'immersiveengineering:insulating_glass',
        C: '#forge:plates/lapis',
        D: '#forge:gears/diamond',
        E: 'create:electron_tube'
    })
    event.shaped(Item.of('buildinggadgets:gadget_copy_paste', 1), ["AEA", "DBD", "ACA"], {
        A: '#forge:plates/iron',
        B: 'immersiveengineering:insulating_glass',
        C: '#forge:plates/lapis',
        D: '#forge:gears/emerald',
        E: 'create:electron_tube'
    })
    event.shaped(Item.of('buildinggadgets:gadget_destruction', 1), ["AEA", "DBD", "ACA"], {
        A: '#forge:plates/iron',
        B: 'immersiveengineering:insulating_glass',
        C: '#forge:plates/lapis',
        D: '#forge:dusts/ender_pearl',
        E: 'create:electron_tube'
    })
    event.shaped(Item.of('buildinggadgets:gadget_exchanging', 1), ["AEA", "DBD", "ACA"], {
        A: '#forge:plates/iron',
        B: 'immersiveengineering:insulating_glass',
        C: '#forge:plates/lapis',
        D: '#forge:gears/diamond',
        E: 'create:electron_tube'
    })
    //Biomes O Plenty
    event.shaped(Item.of('biomesoplenty:fir_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:fir_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:redwood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:redwood_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:cherry_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:cherry_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:mahogany_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:mahogany_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:jacaranda_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:jacaranda_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:palm_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:palm_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:willow_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:willow_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:dead_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:dead_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:magic_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:magic_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:umbran_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:umbran_logs',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('biomesoplenty:hellbark_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#biomesoplenty:hellbark_logs',
        B: '#forge:tools/hammer'
    })
    //Blue SKies
    event.shaped(Item.of('blue_skies:turquoise_stone_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:turquoise_stone',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:lunar_stone_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:lunar_stone',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:moonstone_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:moonstone_shard',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:bluebright_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:bluebright_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:starlit_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:starlit_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:frostbright_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:frostbright_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:lunar_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:lunar_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:dusk_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:dusk_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:maple_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:maple_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:cherry_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:cherry_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('blue_skies:crystallized_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'blue_skies:crystallized_planks',
        B: '#forge:tools/hammer'
    })
    //create
    event.shaped(Item.of('create:electron_tube', 1), ["NCN", "XXX", "LAL"], {
        L: '#forge:plates/iron',
        A: '#forge:gears/iron',
        N: 'immersiveengineering:insulating_glass',
        X: 'create:adjustable_pulse_repeater',
        C: 'create:polished_rose_quartz',
    })
    event.shaped(Item.of('create:copper_casing', 4), ["AAA", "CSC", "AAA"], {
        A: '#forge:plates/wooden',
        C: '#forge:plates/copper',
        S: '#structurize:timber_frames/timber_frames'
    })
    event.shaped(Item.of('create:refined_radiance_casing', 4), ["AAA", "CSC", "AAA"], {
        A: '#forge:plates/wooden',
        C: 'create:refined_radiance',
        S: '#structurize:timber_frames/timber_frames'
    })
    event.shaped(Item.of('create:brass_casing', 4), ["AAA", "CSC", "AAA"], {
        A: '#forge:plates/wooden',
        C: '#forge:plates/brass',
        S: '#structurize:timber_frames/timber_frames'
    })
    event.shaped(Item.of('create:andesite_casing', 4), ["AAA", "CSC", "AAA"], {
        A: '#forge:plates/wooden',
        C: 'create:andesite_alloy',
        S: 'prefab:item_bundle_of_timber'
    })
    event.shaped(Item.of('create:shadow_steel_casing', 4), ["AAA", "CSC", "AAA"], {
        A: '#forge:plates/wooden',
        C: 'create:shadow_steel',
        S: '#structurize:timber_frames/timber_frames'
    })
    event.shaped(Item.of('create:schematicannon', 1), [" C ", "LDL", "SIS"], {
        L: '#minecraft:logs',
        D: 'minecraft:dispenser',
        C: 'xreliquary:apothecary_cauldron',
        S: 'minecraft:smooth_stone',
        I: 'compressium:iron_1'
    })
    event.shaped(Item.of('create:basin', 1), ["A A", "BAB"], {
        A: '#forge:plates/iron',
        B: 'create:andesite_alloy'
    })
    event.shaped(Item.of('create:empty_blaze_burner', 1), ["A A", "S S", "WWW"], {
        S: 'minecraft:iron_bars',
        A: '#forge:plates/iron',
        W: 'create:andesite_alloy'
    })
    event.shaped(Item.of('create:large_cogwheel', 2), ["SDS", "DCD", "SDS"], {
        S: '#minecraft:wooden_buttons',
        C: 'create:andesite_alloy',
        D: '#forge:plates/wooden'
    })
    event.shaped(Item.of('create:mechanical_piston', 1), [" B ", "SCS", " I "], {
        B: '#forge:piston',
        S: 'create:cogwheel',
        C: 'create:andesite_casing',
        I: 'create:piston_extension_pole'
    })
    event.shaped(Item.of('create:mechanical_press', 1), ["WBW", "SCS", "WIW"], {
        W: '#forge:plates/iron',
        S: 'create:cogwheel',
        C: 'create:andesite_casing',
        I: '#forge:piston',
        B: 'create:shaft'
    })
    event.shaped(Item.of('create:millstone', 1), ["VBV", "SCS", "VBV"], {
        B: '#forge:treated_wood',
        S: 'create:andesite_alloy',
        C: 'create:cogwheel',
        V: '#forge:plates/iron'
    })
    //create additions
    event.shaped(Item.of('createaddition:spool', 8), [" A ", " B ", " A "], {
        A: '#forge:treated_wood_slab',
        B: '#forge:rods/iron'
    })
    //DruidCraft
    event.shaped(Item.of('druidcraft:elder_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'druidcraft:elder_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('druidcraft:darkwood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'druidcraft:darkwood_planks',
        B: '#forge:tools/hammer'
    })
    //Environmental
    event.shaped(Item.of('environmental:willow_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'environmental:willow_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('environmental:cherry_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'environmental:cherry_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('environmental:wisteria_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'environmental:wisteria_planks',
        B: '#forge:tools/hammer'
    })
    //Extended Crafting   
    event.shaped(Item.of('extendedcrafting:basic_table', 1), ['CDC', 'ABA', 'CDC'], {
        A: '#forge:plates/iron',
        B: 'immersiveengineering:craftingtable',
        C: 'extendedcrafting:basic_component',
        D: 'extendedcrafting:basic_catalyst'
    })
    event.shaped(Item.of('extendedcrafting:advanced_table', 1), ['CDC', 'ABA', 'CDC'], {
        A: '#forge:plates/gold',
        B: 'extendedcrafting:basic_table',
        C: 'extendedcrafting:advanced_component',
        D: 'extendedcrafting:advanced_catalyst'
    })
    event.shaped(Item.of('extendedcrafting:elite_table', 1), ["CDC", "ABA", "CDC"], {
        A: '#forge:plates/diamond',
        B: 'extendedcrafting:advanced_table',
        C: 'extendedcrafting:elite_component',
        D: 'extendedcrafting:elite_catalyst'
    })
    event.shaped(Item.of('extendedcrafting:ultimate_table', 1), ["CDC", "BAB", "CDC"], {
        A: 'extendedcrafting:elite_table',
        B: '#forge:plates/emerald',
        C: 'extendedcrafting:ultimate_component',
        D: 'extendedcrafting:ultimate_catalyst'
    })
    event.shaped(Item.of('extendedcrafting:black_iron_slate', 1), [' B ', ' A ', ' A '], {
        A: 'extendedcrafting:black_iron_ingot',
        B: '#forge:tools/hammer'
    })
    //Framed Blocks
    event.shaped(Item.of('framedblocks:framed_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'framedblocks:framed_cube',
        B: '#forge:tools/hammer'
    })
    //Forbidden Arcanus
    event.shaped(Item.of('forbidden_arcanus:arcane_gold_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'forbidden_arcanus:arcane_gold_ingot',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:cherrywood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'forbidden_arcanus:cherrywood_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:edelwood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'forbidden_arcanus:edelwood_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:mysterywood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'forbidden_arcanus:mysterywood_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:mysterywood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'forbidden_arcanus:mysterywood_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:fungyss_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'forbidden_arcanus:fungyss_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:polished_darkstone_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'forbidden_arcanus:darkstone',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('forbidden_arcanus:soul_extractor', 1), ["A  ", "BBC", "D  "], {
        A: 'minecraft:glass_bottle',
        B: '#forge:bricks/nether',
        C: '#forge:blocks/quartz',
        D: '#forge:gems/quartz'
    })
    //FluxNetworks
    event.shaped(Item.of('fluxnetworks:flux_plug', 1), ["xcx", "cbc", "xcx"], {
        c: 'fluxnetworks:flux_core',
        b: 'fluxnetworks:flux_block',
        x: 'pneumaticcraft:plastic'
    })
    event.shaped(Item.of('fluxnetworks:basic_flux_storage', 1), ["bbb", "g g", "bbb"], {
        g: 'fluxnetworks:flux_block',
        b: '#thermal:glass/hardened'
    })
    event.shaped(Item.of('fluxnetworks:flux_configurator', 1), [" fe", " of", "o  "], {
        o: '#forge:ingots/obsidian',
        f: 'fluxnetworks:flux_dust',
        e: 'fluxnetworks:flux_core'
    })
    event.shaped(Item.of('fluxnetworks:flux_controller', 1), ["bxb", "cac", "bbb"], {
        c: 'fluxnetworks:flux_core',
        b: 'fluxnetworks:flux_block',
        x: '#thermal:glass/hardened',
        a: 'pneumaticcraft:printed_circuit_board'
    })
    event.shaped(Item.of('fluxnetworks:flux_core', 4), ["fof", "oeo", "fof"], {
        o: '#forge:ingots/obsidian',
        f: 'fluxnetworks:flux_dust',
        e: 'cyclic:ender_eye_reuse'
    })
    event.shaped(Item.of('fluxnetworks:gargantuan_flux_storage', 1), ["bbb", "g g", "bbb"], {
        b: 'fluxnetworks:herculean_flux_storage',
        g: '#thermal:glass/hardened'
    })
    event.shaped(Item.of('fluxnetworks:herculean_flux_storage', 1), ["bbb", "g g", "bbb"], {
        b: 'fluxnetworks:basic_flux_storage',
        g: '#thermal:glass/hardened'
    })
    event.shaped(Item.of('fluxnetworks:flux_point', 1), ["xcx", "cbc", "xcx"], {
        b: 'extendedcrafting:redstone_catalyst',
        c: 'fluxnetworks:flux_core',
        x: '#forge:plastic'
    })
    //Immersive Engineering
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), [" k ", "ddd", "ppp"], {
        k: 'appliedenergistics2:printed_logic_processor',
        d: '#forge:dyes/blue',
        p: '#forge:paper'
    })
    event.shaped(Item.of('immersiveengineering:wirecoil_electrum', 2), [" w ", "wsw", " w "], {
        w: '#forge:wires/electrum',
        s: 'createaddition:spool'
    })
    event.shaped(Item.of('immersiveengineering:wirecoil_copper', 2), [" w ", "wsw", " w "], {
        w: '#forge:wires/copper',
        s: 'createaddition:spool'
    })
    event.shaped(Item.of('immersiveengineering:wirecoil_redstone', 2), [" w ", "asa", " w "], {
        w: '#forge:wires/aluminum',
        a: '#forge:dusts/redstone',
        s: 'createaddition:spool'
    })
    event.shaped(Item.of('immersiveengineering:wirecoil_steel', 2), [" w ", "asa", " w "], {
        w: '#forge:wires/aluminum',
        a: '#forge:wires/steel',
        s: 'createaddition:spool'
    })
    event.shaped(Item.of('immersiveengineering:wirecoil_structure_steel', 2), [" w ", "wsw", " w "], {
        w: 'immersiveengineering:wire_steel',
        s: 'createaddition:spool'
    })
    event.shaped(Item.of('immersiveengineering:workbench', 1), ["WWW", "SCS", "EIE"], {
        W: 'engineersdecor:halfslab_treated_wood',
        S: '#forge:plates/iron',
        I: 'immersiveengineering:craftingtable',
        C: '#forge:sheetmetals/steel',
        E: 'immersiveengineering:treated_fence'
    })
    event.shaped(Item.of('immersiveengineering:furnace_heater', 1), ["ici", "clc", "iri"], {
        i: '#forge:plates/iron',
        c: '#forge:plates/copper',
        l: 'immersiveengineering:coil_lv',
        r: '#forge:dusts/redstone'
    })
    event.shaped(Item.of('immersiveengineering:component_iron', 1), ["isi", "scs", "isi"], {
        i: 'create:andesite_alloy',
        c: '#forge:dusts/bronze',
        s: '#forge:plates/iron'
    })
    event.shaped(Item.of('immersiveengineering:component_steel', 1), ["isi", "scs", "isi"], {
        i: 'create:andesite_alloy',
        c: '#forge:dusts/bronze',
        s: '#forge:plates/steel'
    })
    //Iron Jetpacks
    event.shaped(Item.of('ironjetpacks:basic_coil', 1), [" AB", "ACA", "BA "], {
        A: 'kubejs:compressed_iron_plate',
        B: 'extendedcrafting:redstone_component',
        C: 'thermal:rf_coil'
    })
    event.shaped(Item.of('ironjetpacks:advanced_coil', 1), [" AB", "ACA", "BA "], {
        A: '#forge:plates/gold',
        B: 'extendedcrafting:redstone_component',
        C: 'thermal:rf_coil'
    })
    event.shaped(Item.of('ironjetpacks:elite_coil', 1), [" AB", "ACA", "BA "], {
        A: '#forge:plates/diamond',
        B: 'extendedcrafting:redstone_component',
        C: 'thermal:rf_coil'
    })
    event.shaped(Item.of('ironjetpacks:ultimate_coil', 1), [" AB", "ACA", "BA "], {
        A: '#forge:plates/emerald',
        B: 'extendedcrafting:redstone_component',
        C: 'thermal:rf_coil'
    })
    event.shaped(Item.of('ironjetpacks:strap', 1), ["AAA", "BCB", "AAA"], {
        A: '#forge:plates/iron',
        B: 'minecraft:tripwire_hook',
        C: 'minecraft:leather_chestplate'
    })
    //Modular Routers
    event.shaped(Item.of('modularrouters:blank_module', 2), ["SRS", "PPP", "GGG"], {
        R: 'extendedcrafting:redstone_ingot',
        P: '#forge:paper',
        G: '#forge:plates/gold',
        S: 'create:andesite_alloy',
    })
    event.shaped(Item.of('modularrouters:blank_upgrade', 2), ["PPG", "PLG", "SPG"], {
        P: '#forge:paper',
        L: '#forge:gears/lapis',
        G: '#forge:plates/gold',
        S: 'create:andesite_alloy',
    })
    event.shaped(Item.of('modularrouters:item_router', 4), ["IBI", "BMB", "IBI"], {
        I: '#forge:plates/steel',
        M: 'modularrouters:blank_module',
        B: '#forge:sheetmetals/steel'
    })
    //Mekanism
    event.shaped(Item.of('mekanism:basic_chemical_tank', 1), ["BAB", "A A", "BAB"], {
        A: 'kubejs:compressed_iron_plate',
        B: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('mekanism:basic_energy_cube', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:steel_casing',
        B: 'mekanism:energy_tablet',
        C: 'kubejs:compressed_iron_plate',
        D: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('mekanism:advanced_energy_cube', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:basic_energy_cube',
        B: 'mekanism:energy_tablet',
        C: '#forge:plates/osmium',
        D: '#mekanism:alloys/infused'
    })
    event.shaped(Item.of('mekanism:elite_energy_cube', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:advanced_energy_cube',
        B: 'mekanism:energy_tablet',
        C: '#forge:plates/electrum',
        D: '#mekanism:alloys/reinforced'
    })
    event.shaped(Item.of('mekanism:ultimate_energy_cube', 1), ["AEA", "IPI", "AEA"], {
        P: 'mekanism:elite_energy_cube',
        E: 'mekanism:energy_tablet',
        I: '#forge:plates/diamond',
        A: '#mekanism:alloys/atomic'
    })
    event.shaped(Item.of('mekanism:basic_fluid_tank', 1), ["BAB", "ACA", "BAB"], {
        A: 'extendedcrafting:redstone_ingot',
        B: '#forge:plates/iron',
        C: '#pneumaticcraft:fluid_tanks'
    })
    event.shaped(Item.of('mekanism:thermal_evaporation_block', 2), ["BAB", "ACA", "BAB"], {
        A: 'extendedcrafting:redstone_ingot',
        B: '#forge:plates/iron',
        C: '#pneumaticcraft:fluid_tanks'
    })
    event.shaped(Item.of('mekanism:thermal_evaporation_controller', 1), ["BDB", "ACA", "AAA"], {
        A: 'mekanism:thermal_evaporation_block',
        B: '#forge:circuits/advanced',
        C: '#pneumaticcraft:fluid_tanks',
        D: 'appliedenergistics2:quartz_vibrant_glass'
    })
    event.shaped(Item.of('mekanism:basic_tier_installer', 1), ["DBD", "CAC", "DBD"], {
        A: 'appliedenergistics2:smooth_sky_stone_block',
        B: '#forge:circuits/basic',
        C: 'pneumaticcraft:compressed_iron_gear',
        D: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('mekanism:advanced_tier_installer', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:basic_tier_installer',
        B: '#forge:circuits/advanced',
        C: '#forge:gears/osmium',
        D: '#mekanism:alloys/infused'
    })
    event.shaped(Item.of('mekanism:elite_tier_installer', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:advanced_tier_installer',
        B: '#forge:circuits/elite',
        C: '#forge:gears/electrum',
        D: '#mekanism:alloys/reinforced'
    })
    event.shaped(Item.of('mekanism:ultimate_tier_installer', 1), ["DBD", "CAC", "DBD"], {
        A: 'mekanism:elite_tier_installer',
        B: '#forge:circuits/ultimate',
        C: '#forge:gears/diamond',
        D: '#mekanism:alloys/atomic'
    })
    event.shaped(Item.of('mekanism:basic_logistical_transporter', 8), ["   ", "ACA", " B "], {
        A: 'kubejs:compressed_iron_plate',
        B: '#forge:circuits/basic',
        C: 'refinedpipes:basic_item_pipe'
    })
    event.shaped(Item.of('mekanism:basic_mechanical_pipe', 8), ["   ", "ABA", "   "], {
        A: 'kubejs:compressed_iron_plate',
        B: 'refinedpipes:basic_fluid_pipe'
    })
    event.shaped(Item.of('mekanism:basic_pressurized_tube', 8), [" A ", "BCB", " A "], {
        A: 'appliedenergistics2:quartz_glass',
        B: 'kubejs:compressed_iron_plate',
        C: 'mekanism:basic_mechanical_pipe'
    })
    event.shaped(Item.of('mekanism:basic_universal_cable', 8), ["   ", "ABA", "   "], {
        A: 'kubejs:compressed_iron_plate',
        B: 'refinedpipes:basic_energy_pipe'
    })
    event.shaped(Item.of('mekanism:diversion_transporter', 2), [" B ", "ACA", " B "], {
        A: 'kubejs:compressed_iron_plate',
        B: 'extendedcrafting:redstone_ingot',
        C: 'mekanism:restrictive_transporter'
    })
    event.shaped(Item.of('mekanism:restrictive_transporter', 2), [" B ", "ACA", " B "], {
        A: 'kubejs:compressed_iron_plate',
        B: 'minecraft:iron_bars',
        C: 'mekanism:basic_logistical_transporter'
    })
    event.shaped(Item.of('mekanism:upgrade_anchor', 1), [" A ", "CBC", " A "], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:dusts/diamond',
        C: 'refinedpipes:basic_item_pipe'
    })
    event.shaped(Item.of('mekanism:upgrade_energy', 2), [" A ", "CBC", " A "], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:dusts/gold',
        C: '#mekanism:alloys/infused'
    })
    event.shaped(Item.of('mekanism:upgrade_filter', 1), [" A ", "CBC", " A "], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:dusts/tin',
        C: 'mekanism:basic_mechanical_pipe'
    })
    event.shaped(Item.of('mekanism:upgrade_gas', 2), [" A ", "CBC", " A "], {
        A: 'kubejs:compressed_iron_plate',
        B: '#forge:dusts/iron',
        C: 'mekanism:restrictive_transporter'
    })
    event.shaped(Item.of('mekanism:upgrade_muffling', 1), [" A ", "CBC", " A "], {
        A: 'kubejs:compressed_iron_plate',
        B: '#forge:dusts/steel',
        C: 'mekanism:restrictive_transporter'
    })
    event.shaped(Item.of('mekanism:upgrade_speed', 2), [" A ", "CBC", " A "], {
        A: 'kubejs:compressed_iron_plate',
        B: '#forge:dusts/osmium',
        C: 'mekanism:basic_logistical_transporter'
    })
    event.shaped(Item.of('mekanism:chemical_injection_chamber', 1), ["CBC", "ADA", "CBC"], {
        A: '#forge:plates/electrum',
        B: '#forge:circuits/elite',
        C: '#mekanism:alloys/reinforced',
        D: 'mekanism:purification_chamber'
    })
    event.shaped(Item.of('mekanism:combiner', 1), ["CBC", "ADA", "CBC"], {
        A: 'pneumaticcraft:reinforced_stone',
        B: '#forge:circuits/elite',
        C: '#mekanism:alloys/reinforced',
        D: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:configurator', 1), [" BC", " AB", "D  "], {
        A: 'mekanism:energy_tablet',
        B: '#mekanism:alloys/infused',
        C: '#forge:gears/lapis',
        D: '#forge:rods/steel'
    })
    event.shaped(Item.of('mekanism:crusher', 1), ["ABA", "DCD", "ABA"], {
        A: 'extendedcrafting:redstone_component',
        B: '#forge:circuits/basic',
        C: 'mekanism:steel_casing',
        D: 'minecraft:lava_bucket'
    })
    event.shaped(Item.of('mekanism:electrolytic_separator', 1), ["ABA", "CDC", "ABA"], {
        A: 'kubejs:compressed_iron_plate',
        B: 'extendedcrafting:redstone_component',
        C: '#mekanism:alloys/infused',
        D: 'mekanism:electrolytic_core'
    })
    event.shaped(Item.of('mekanism:energized_smelter', 1), ["CBC", "ADA", "CEC"], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:circuits/basic',
        C: 'extendedcrafting:redstone_component',
        D: 'mekanism:steel_casing',
        E: '#forge:furnace'
    })
    event.shaped(Item.of('mekanism:energy_tablet', 1), ["ABA", "CDC", "ABA"], {
        A: 'extendedcrafting:redstone_component',
        B: '#forge:gears/electrum',
        C: '#mekanism:alloys/infused',
        D: 'thermal:rf_coil'
    })
    event.shaped(Item.of('mekanism:enrichment_chamber', 1), ["CBC", "ADA", "CBC"], {
        A: 'kubejs:compressed_iron_plate',
        B: '#forge:circuits/basic',
        C: 'extendedcrafting:redstone_component',
        D: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:fluidic_plenisher', 1), ["CCC", "BAB", "CCC"], {
        A: 'mekanism:electric_pump',
        B: '#forge:circuits/basic',
        C: '#forge:plates/bronze'
    })
    event.shaped(Item.of('mekanism:laser_amplifier', 1), ["BBB", "BCA", "BBB"], {
        A: 'pneumaticcraft:assembly_laser',
        B: '#forge:ingots/steel',
        C: 'mekanism:basic_energy_cube'
    })
    event.shaped(Item.of('mekanism:laser', 2), ["CD ", "CBA", "CD "], {
        A: 'pneumaticcraft:assembly_program_laser',
        B: 'mekanism:steel_casing',
        C: '#mekanism:alloys/reinforced',
        D: 'mekanism:energy_tablet'
    })
    event.shaped(Item.of('mekanism:logistical_sorter', 1), ["ACA", "ABA", "AAA"], {
        A: 'kubejs:compressed_iron_plate',
        B: '#forge:circuits/basic',
        C: '#forge:piston'
    })
    event.shaped(Item.of('mekanism:metallurgic_infuser', 1), ["ABA", "CEC", "ADA"], {
        A: 'kubejs:compressed_iron_plate',
        B: '#forge:gears/osmium',
        C: 'extendedcrafting:redstone_component',
        D: '#forge:furnace',
        E: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:module_base', 2), ["BAB", "ACA", "BAB"], {
        A: 'modularrouters:blank_module',
        B: '#forge:plates/bronze',
        C: 'mekanism:hdpe_sheet'
    })
    event.shaped(Item.of('mekanism:network_reader', 1), [" A ", "CDC", " B "], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:plates/steel',
        C: '#mekanism:alloys/infused',
        D: 'mekanism:energy_tablet'
    })
    event.shaped(Item.of('mekanism:nutritional_liquifier', 1), ["RCR", "DXD", "RCR"], {
        C: '#forge:circuits/basic',
        X: 'mekanism:steel_casing',
        R: 'extendedcrafting:redstone_component',
        D: '#forge:bowls'
    })
    event.shaped(Item.of('mekanism:osmium_compressor', 1), ["ACA", "BXB", "ACA"], {
        B: 'create:mechanical_piston',
        C: '#forge:circuits/advanced',
        A: '#mekanism:alloys/infused',
        X: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:personal_chest', 1), ["CDC", "ABA", "DDD"], {
        A: '#forge:chests/wooden',
        B: '#forge:circuits/basic',
        C: '#forge:ingots/steel',
        D: 'appliedenergistics2:quartz_glass'
    })
    event.shaped(Item.of('mekanism:precision_sawmill', 1), ["ABA", "CDC", "ABA"], {
        A: 'kubejs:compressed_iron_plate',
        B: '#forge:circuits/basic',
        C: '#mekanism:alloys/infused',
        D: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:qio_dashboard', 1), ["IAI", "AGA", "ITI"], {
        G: 'appliedenergistics2:quartz_vibrant_glass',
        A: '#forge:pellets/polonium',
        T: 'mekanism:teleportation_core',
        I: '#forge:ingots/lead'
    })
    event.shaped(Item.of('mekanism:resistive_heater', 1), ["BAB", "ADA", "BCB"], {
        A: 'extendedcrafting:redstone_component',
        B: '#forge:ingots/tin',
        C: 'mekanism:energy_tablet',
        D: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:rotary_condensentrator', 1), ["GCG", "TED", "GCG"], {
        G: 'appliedenergistics2:quartz_glass',
        C: '#forge:circuits/basic',
        T: 'mekanism:basic_chemical_tank',
        D: 'mekanism:basic_fluid_tank',
        E: 'mekanism:energy_tablet'
    })
    event.shaped(Item.of('mekanism:security_desk', 1), ["CAC", "BDB", "CEC"], {
        A: 'appliedenergistics2:quartz_glass',
        B: '#forge:circuits/elite',
        C: '#forge:ingots/steel',
        D: 'mekanism:steel_casing',
        E: 'mekanism:teleportation_core'
    })
    event.shaped(Item.of('mekanism:seismic_vibrator', 1), ["CAC", "BDB", "CCC"], {
        A: '#forge:gears/lapis',
        B: '#forge:circuits/basic',
        C: '#forge:plates/bronze',
        D: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:solar_neutron_activator', 1), ["ABA", "CXC", "III"], {
        I: '#forge:plates/bronze',
        C: '#forge:circuits/elite',
        A: '#mekanism:alloys/reinforced',
        X: 'mekanism:steel_casing',
        B: 'mekanism:hdpe_sheet'
    })
    event.shaped(Item.of('mekanism:steel_casing', 1), ["CAC", "ABA", "CAC"], {
        A: 'extendedcrafting:black_iron_slate',
        B: '#forge:gears/osmium',
        C: 'kubejs:compressed_iron_plate'
    })
    event.shaped(Item.of('mekanism:supercharged_coil', 1), ["CCC", "ABA", "DDD"], {
        A: '#forge:circuits/ultimate',
        B: 'mekanism:laser',
        C: '#forge:plates/bronze',
        D: 'mekanism:pellet_polonium'
    })
    event.shaped(Item.of('mekanism:superheating_element', 1), ["BAB", "ACA", "BAB"], {
        A: '#forge:plates/bronze',
        B: 'extendedcrafting:redstone_component',
        C: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:teleporter', 1), ["BCB", "CAC", "BDB"], {
        A: 'mekanism:teleportation_core',
        B: '#forge:circuits/basic',
        C: 'kubejs:compressed_iron_plate',
        D: 'mekanism:steel_casing'
    })
    event.shaped(Item.of('mekanism:flamethrower', 1), ["GGG", "GAR", "OQO"], {
        G: '#forge:ingots/tin',
        O: '#forge:plates/bronze',
        R: 'tconstruct:flint_and_bronze',
        A: 'mekanism:basic_chemical_tank',
        Q: '#forge:circuits/advanced'
    })
    //Mekanism Generators
    event.shaped(Item.of('mekanismgenerators:solar_panel', 1), ["GGG", "RAR", "OOO"], {
        G: 'appliedenergistics2:quartz_glass',
        O: '#forge:plates/osmium',
        R: 'extendedcrafting:redstone_ingot',
        A: '#mekanism:alloys/infused',
    })
    event.shaped(Item.of('mekanismgenerators:electromagnetic_coil', 1), ["SIS", "IEI", "SIS"], {
        S: '#forge:ingots/steel',
        I: '#forge:plates/electrum',
        E: 'mekanism:energy_tablet'
    })
    event.shaped(Item.of('mekanismgenerators:reactor_glass', 4), ["SIS", "IEI", "SIS"], {
        S: 'appliedenergistics2:quartz_glass',
        I: '#forge:ingots/lead',
        E: 'mekanism:enriched_iron'
    })
    event.shaped(Item.of('mekanismgenerators:fusion_reactor_controller', 1), ["CGC", "FTF", "FFF"], {
        C: '#forge:circuits/ultimate',
        G: 'appliedenergistics2:quartz_vibrant_glass',
        F: 'mekanismgenerators:fusion_reactor_frame',
        T: 'mekanism:basic_chemical_tank'
    })
    event.shaped(Item.of('mekanismgenerators:bio_generator', 1), ["RAR", "BCB", "IAI"], {
        R: 'extendedcrafting:redstone_component',
        A: '#mekanism:alloys/infused',
        I: 'kubejs:compressed_iron_plate',
        C: '#forge:circuits/basic',
        B: '#forge:fuels/bio'
    })
    //Morph o Tool Recipes
    event.shaped(Item.of('morphtool:tool', 1), ["AB ", "CD ", "  D"], {
        A: '#forge:dyes/blue',
        B: '#forge:dyes/red',
        C: '#forge:dyes/green',
        D: '#forge:plates/iron'
    })
    event.shaped(Item.of('morphtool:tool', {
            'morphtool:data': {
                astralsorcery: {
                    id: 'astralsorcery:wand',
                    Count: 1
                },
                pneumaticcraft: {
                    id: 'pneumaticcraft:pneumatic_wrench',
                    Count: 1
                },
                immersiveengineering: {
                    id: 'immersiveengineering:hammer',
                    Count: 1
                },
                transport: {
                    id: 'transport:rail_breaker',
                    Count: 1
                },
                botania: {
                    id: 'botania:twig_wand',
                    Count: 1,
                    tag: {
                        color1: 0,
                        color2: 0
                    }
                },
                mekanism: {
                    id: 'mekanism:configurator',
                    Count: 1
                },
                bloodmagic: {
                    id: 'bloodmagic:ritualtinkerer',
                    Count: 1
                },
                thermal: {
                    id: 'thermal:wrench',
                    Count: 1
                },
                rftoolsbase: {
                    id: 'rftoolsbase:smartwrench',
                    Count: 1
                },
                create: {
                    id: 'create:wrench',
                    Count: 1
                },
                chiselsandbits: {
                    id: 'chiselsandbits:wrench_wood',
                    Count: 1
                },
                refinedstorage: {
                    id: 'refinedstorage:wrench',
                    Count: 1
                },
                storagedrawers: {
                    id: 'storagedrawers:drawer_key',
                    Count: 1
                },
                fluxnetworks: {
                    id: 'fluxnetworks:flux_configurator',
                    Count: 1
                },
                compactmachines: {
                    id: 'compactmachines:personal_shrinking_device',
                    Count: 1
                }
            }
        }),
        ['ABA', 'CFD', 'AEA'], {
            A: '#forge:storage_blocks/redstone',
            B: '#forge:gears/gold',
            C: '#forge:gears/iron',
            D: '#forge:gears/silver',
            E: '#forge:gears/copper',
            F: 'morphtool:tool'
        })
    //Minecraft
    event.shaped(Item.of('minecraft:stone_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#forge:stone',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:oak_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:oak_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:spruce_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:spruce_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:birch_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:birch_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:jungle_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:jungle_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:acacia_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:acacia_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:dark_oak_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:dark_oak_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:crimson_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:crimson_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:warped_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:warped_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:polished_blackstone_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'minecraft:polished_blackstone',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:light_weighted_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#forge:ingots/gold',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:heavy_weighted_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#forge:ingots/iron',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('minecraft:torch', 2), [" A ", " B ", "   "], {
        A: '#forge:chunks/coal',
        B: '#forge:rods/wooden'
    })
    event.shaped(Item.of('minecraft:redstone_torch', 2), [" A ", " B ", "   "], {
        A: '#forge:chunks/redstone',
        B: '#forge:rods/wooden'
    })
    event.shaped(Item.of('minecraft:soul_torch', 2), [" A ", " B ", " C "], {
        A: '#forge:chunks/coal',
        B: '#forge:rods/wooden',
        C: '#minecraft:soul_fire_base_blocks'
    })
    event.shaped(Item.of('minecraft:piston', 1), ["TTT", "PXP", "PRP"], {
        R: 'extendedcrafting:redstone_ingot',
        P: 'immersiveengineering:concrete',
        T: '#forge:plates/wooden',
        X: '#forge:gears/iron',
    })
    event.shaped(Item.of('minecraft:sticky_piston', 1), ["TTT", "PXP", "PRP"], {
        R: 'extendedcrafting:redstone_ingot',
        P: 'immersiveengineering:concrete',
        T: '#forge:plates/wooden',
        X: '#forge:slimeballs',
    })
    event.shaped(Item.of('minecraft:compass', 1), [" S ", "SQS", " S "], {
        Q: 'extendedcrafting:redstone_ingot',
        S: '#forge:plates/iron',
    })
    event.shaped(Item.of('minecraft:hopper', 1), ["L L", "LXL", " L "], {
        X: 'woodenutilities:wooden_hopper',
        L: '#forge:plates/iron'
    })
    //Pneumaticcraft
    event.shaped(Item.of('pneumaticcraft:compressed_iron_gear', 1), [" C ", "CIC", " C "], {
        C: '#forge:ingots/compressed_iron',
        I: 'create:andesite_alloy'
    })
    event.shaped(Item.of('pneumaticcraft:air_compressor', 1), ["III", "ITI", "IFI"], {
        I: '#pneumaticcraft:reinforced_stone_bricks',
        T: 'pneumaticcraft:pressure_tube',
        F: 'routerreborn:furnace'
    })
    event.shaped(Item.of('pneumaticcraft:gps_tool', 1), ["SRS", "PGP", "PDP"], {
        R: 'extendedcrafting:redstone_ingot',
        P: '#forge:paper',
        G: 'immersiveengineering:insulating_glass',
        D: '#forge:gears/diamond',
        S: 'immersiveengineering:wirecoil_redstone'
    })
    event.shaped(Item.of('pneumaticcraft:heat_sink', 1), ["BBB", "IGI"], {
        B: 'immersiveengineering:toolupgrade_railgun_capacitors',
        I: '#forge:ingots/compressed_iron',
        G: '#forge:gears/electrum'
    })
    event.shaped(Item.of('pneumaticcraft:pressure_gauge', 1), [" G ", "GIG", " G "], {
        I: '#forge:plates/gold',
        G: '#forge:ingots/compressed_iron'
    })
    event.shaped(Item.of('pneumaticcraft:pressure_tube', 8), ["IGI"], {
        I: 'pneumaticcraft:compressed_iron_gear',
        G: '#forge:glass'
    })
    event.shaped(Item.of('pneumaticcraft:refinery', 1), ["SXS", "XTX", "SAS"], {
        S: '#forge:ingots/compressed_iron',
        T: '#forge:tanks/ender',
        A: 'thermal:upgrade_augment_2',
        X: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('pneumaticcraft:refinery_output', 1), ["SSS", "GDG", "SSS"], {
        S: 'pneumaticcraft:reinforced_stone_slab',
        G: 'immersiveengineering:insulating_glass',
        D: '#forge:gears/diamond'
    })
    event.shaped(Item.of('pneumaticcraft:small_tank', 1), ["BIB", "IGI", "BIB"], {
        B: '#forge:ingots/obsidian',
        I: '#forge:ingots/compressed_iron',
        G: 'cyclic:tank'
    })
    event.shaped(Item.of('pneumaticcraft:vortex_tube', 1), ["ITI", "GSG", "ITI"], {
        I: '#forge:ingots/compressed_iron',
        T: 'pneumaticcraft:pressure_tube',
        G: '#forge:plates/gold',
        S: 'pneumaticcraft:compressed_iron_gear'
    })
    //Nature's Aura
    event.shaped(Item.of('naturesaura:offering_table', 1), ["BAB", "CBD", "EEE"], {
        A: '#forge:ingots/starmetal',
        B: '#forge:stone',
        C: 'naturesaura:token_fear',
        D: 'naturesaura:token_sorrow',
        E: '#minecraft:logs'
    })
    //quark
    event.shaped(Item.of('quark:obsidian_pressure_plate', 1), [" A ", " A ", " B "], {
        A: '#forge:obsidian',
        B: '#forge:tools/hammer'
    })
    //Router Reborn
    event.shaped(Item.of('routerreborn:barrel_t1', 1), ["lll", "iwi", "lll"], {
        i: '#forge:ingots/steel',
        l: '#forge:plates/steel',
        w: 'storagedrawers:oak_full_drawers_1'
    })
    event.shaped(Item.of('routerreborn:barrel_t2', 1), ["lll", "iwi", "lll"], {
        i: '#forge:plates/electrum',
        l: '#forge:ingots/electrum',
        w: 'routerreborn:barrel_t1'
    })
    event.shaped(Item.of('routerreborn:barrel_t3', 1), ["lll", "iwi", "lll"], {
        i: 'minecraft:ender_eye',
        l: '#forge:plates/steel',
        w: 'routerreborn:barrel_t2'
    })
    event.shaped(Item.of('routerreborn:itemconduit', 9), ["iii", "cRc", "iii"], {
        i: '#forge:plates/steel',
        R: 'refinedpipes:basic_item_pipe',
        c: '#forge:gears/bronze'
    })
    event.shaped(Item.of('routerreborn:energyconduit', 9), ["iii", "cRc", "iii"], {
        i: '#forge:plates/steel',
        R: 'refinedpipes:basic_energy_pipe',
        c: '#forge:gears/bronze'
    })
    event.shaped(Item.of('routerreborn:furnace', 1), ["iii", "ifi", "ici"], {
        i: '#forge:plates/iron',
        f: 'ironfurnaces:iron_furnace',
        c: 'routerreborn:coppercoil'
    });
    event.shaped(Item.of('routerreborn:generator', 1), ["iii", "cbc", "sas"], {
        i: '#forge:plates/steel',
        b: '#forge:gears/steel',
        s: '#forge:sheetmetals/steel',
        c: 'routerreborn:coppercoil',
        a: 'immersiveengineering:circuit_board'
    })
    event.shaped(Item.of('routerreborn:harvester', 1), ["iii", "cbc", "iii"], {
        i: '#forge:plates/steel',
        b: '#forge:tools/hoes',
        c: 'routerreborn:coppercoil'
    })
    event.shaped(Item.of('routerreborn:quarry', 1), ["isi", "cac", "ibi"], {
        i: '#forge:plates/iron',
        b: '#forge:tools/pickaxe',
        s: 'immersiveengineering:pickaxe_steel',
        c: 'routerreborn:coppercoil',
        a: '#forge:gears/steel'
    })
    event.shaped(Item.of('routerreborn:routerconduit', 3), ["   ", "cac", "   "], {
        c: 'immersiveengineering:insulating_glass',
        a: 'routerreborn:itemconduit'
    })
    event.shaped(Item.of('routerreborn:treefarm', 1), ["iii", "cbc", "iii"], {
        i: '#forge:plates/steel',
        b: 'minecraft:diamond_axe',
        c: 'routerreborn:coppercoil'
    })
    event.shaped(Item.of('routerreborn:lamp', 1), ["iii", "ibi", "iii"], {
        i: 'druidcraft:fiery_torch',
        b: 'thermal:lightning_charge'
    }) 
    //Rftools Base
    event.shaped(Item.of('rftoolsbase:filter_module', 1), [" h ", "rir", " p "], {
        h: '#forge:hopper',
        r: '#forge:dusts/redstone',
        p: '#forge:paper',
        i: 'modularrouters:blank_module'
    })
    //Rftools Builder
    event.shaped(Item.of('rftoolsbuilder:shape_card_def', 1), ["pBp", "rir", "pBp"], {
        p: 'modularrouters:blank_module',
        B: 'immersiveengineering:alloybrick',
        r: 'extendedcrafting:redstone_catalyst',
        i: 'pneumaticcraft:compressed_iron_gear'
    })
    //Rftools Control
    event.shaped(Item.of('rftoolscontrol:console_module', 1), ["PMP", "rir", "PzP"], {
        M: 'rftoolscontrol:card_base',
        P: '#forge:glass_panes',
        z: '#forge:dyes/black',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module'
    })
    event.shaped(Item.of('rftoolscontrol:craftingstation', 1), ["rMr", "CFC", "rMr"], {
        M: 'rftoolscontrol:card_base',
        C: 'immersiveengineering:craftingtable',
        r: 'immersiveengineering:wirecoil_redstone',
        F: 'immersiveengineering:heavy_engineering'
    })
    event.shaped(Item.of('rftoolscontrol:interaction_module', 1), ["PMP", "rir", " z "], {
        M: 'rftoolscontrol:card_base',
        z: '#forge:dyes/black',
        P: 'minecraft:stone_pressure_plate',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module'
    })
    event.shaped(Item.of('rftoolscontrol:node', 1), ["ror", "rFr", "rMr"], {
        M: 'rftoolscontrol:card_base',
        r: 'immersiveengineering:wirecoil_redstone',
        F: 'immersiveengineering:heavy_engineering',
        o: '#forge:ender_pearls'
    })
    event.shaped(Item.of('rftoolscontrol:processor', 1), ["rqr", "MFM", "rqr"], {
        M: 'rftoolscontrol:card_base',
        q: 'create:polished_rose_quartz',
        r: 'immersiveengineering:wirecoil_redstone',
        F: 'immersiveengineering:heavy_engineering'
    })
    event.shaped(Item.of('rftoolscontrol:programmer', 1), ["rqr", "pFp", "rsr"], {
        q: 'create:polished_rose_quartz',
        p: 'pneumaticcraft:plastic',
        r: 'immersiveengineering:wirecoil_redstone',
        F: 'immersiveengineering:heavy_engineering',
        s: 'immersiveengineering:circuit_board'
    })
    event.shaped(Item.of('rftoolscontrol:variable_module', 1), [" M ", "rir", " z "], {
        M: 'rftoolscontrol:card_base',
        z: '#forge:dyes/black',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module'
    })
    event.shaped(Item.of('rftoolscontrol:vectorart_module', 1), ["PMP", "rIr", "PzP"], {
        M: 'rftoolscontrol:card_base',
        z: '#forge:dyes/black',
        P: '#forge:glass_panes',
        I: 'modularrouters:blank_module',
        r: '#forge:dusts/redstone'
    })
    //Rftools Power
    event.shaped(Item.of('rftoolspower:dimensionalcell', 1), ["RdR", "PFP", "ReR"], {
        P: '#forge:dusts/prismarine',
        R: 'extendedcrafting:redstone_catalyst',
        d: '#forge:gears/diamond',
        e: '#forge:gears/emerald',
        F: 'rftoolspower:dimensionalcell_simple'
    })
    event.shaped(Item.of('rftoolspower:dimensionalcell_advanced', 1), ["RdR", "dKd", "RdR"], {
        K: 'rftoolspower:dimensionalcell',
        R: 'extendedcrafting:redstone_catalyst',
        d: 'rftoolsbase:infused_diamond'
    })
    event.shaped(Item.of('rftoolspower:powercell_card', 1), ["rgr", "gpg", "rgr"], {
        g: 'immersiveengineering:wirecoil_electrum',
        p: 'modularrouters:blank_module',
        r: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('rftoolspower:dimensionalcell_simple', 1), ["RdR", "qFq", "RdR"], {
        R: 'extendedcrafting:redstone_catalyst',
        d: '#forge:gears/diamond',
        q: 'create:polished_rose_quartz',
        F: 'rftoolsbase:machine_frame'
    })
    //Rftools Storage
    event.shaped(Item.of('rftoolsstorage:storage_control_module', 1), [" X ", "rir", " X "], {
        X: '#forge:workbenches',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module'
    })
    event.shaped(Item.of('rftoolsstorage:dump_module', 1), [" X ", "rir", " X "], {
        X: '#minecraft:wooden_buttons',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module'
    })
    event.shaped(Item.of('rftoolsstorage:storage_module0', 1), [" C ", "gig", "qrq"], {
        g: '#forge:nuggets/gold',
        q: '#forge:gems/quartz',
        r: '#forge:dusts/redstone',
        C: '#forge:chests',
        i: 'modularrouters:blank_module'
    })
    //Rftools Utility
    event.shaped(Item.of('rftoolsutility:fluid_module', 1), [" X ", "rir", " Z "], {
        X: '#forge:tools/bucket',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
    })
    event.shaped(Item.of('rftoolsutility:energy_module', 1), [" r ", "rir", " Z "], {
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
    })
    event.shaped(Item.of('rftoolsutility:redstone_information', 1), ["ror", "rRr", "rrr"], {
        r: '#forge:dusts/redstone',
        R: 'modularrouters:blank_module',
        o: '#forge:ender_pearls'
    })
    event.shaped(Item.of('rftoolsutility:redstone_module', 1), [" X ", "rir", " Z "], {
        X: 'minecraft:repeater',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
    })
    event.shaped(Item.of('rftoolsutility:text_module', 1), [" p ", "rir", " Z "], {
        p: '#forge:paper',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
    })
    event.shaped(Item.of('rftoolsutility:crafter1', 1), ["QTQ", "CMC", "QTQ"], {
        C: 'immersiveengineering:craftingtable',
        M: 'immersiveengineering:heavy_engineering',
        T: '#forge:plates/steel',
        Q: 'immersiveengineering:wirecoil_redstone'
    })
    event.shaped(Item.of('rftoolsutility:crafter2', 1), ["QTQ", "CMC", "QTQ"], {
        C: 'immersiveengineering:craftingtable',
        M: 'rftoolsutility:crafter1',
        T: '#forge:plates/steel',
        Q: 'immersiveengineering:wirecoil_redstone'
    })
    event.shaped(Item.of('rftoolsutility:crafter3', 1), ["QTQ", "CMC", "QTQ"], {
        C: 'immersiveengineering:craftingtable',
        M: 'rftoolsutility:crafter2',
        T: '#forge:plates/steel',
        Q: 'immersiveengineering:wirecoil_redstone'
    })
    event.shaped(Item.of('rftoolsutility:button_module', 1), [" X ", "rir", " Z "], {
        X: 'minecraft:stone_button',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
    })
    event.shaped(Item.of('rftoolsutility:clock_module', 1), [" X ", "rir", " Z "], {
        X: '#forge:clock',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
    })
    event.shaped(Item.of('rftoolsutility:inventory_module', 1), [" X ", "rir", " Z "], {
        X: '#forge:chests',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
    })
    event.shaped(Item.of('rftoolsutility:machineinformation_module', 1), [" X ", "rir", " Z "], {
        X: '#forge:furnace',
        r: '#forge:dusts/redstone',
        i: 'modularrouters:blank_module',
        Z: '#forge:dyes/black'
    })
    //Refined Pipes
    event.shaped(Item.of('refinedpipes:advanced_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
        I: 'refinedpipes:improved_extractor_attachment',
        P: '#forge:gears/diamond',
        S: 'create:polished_rose_quartz'
    })
    event.shaped(Item.of('refinedpipes:basic_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
        I: '#forge:piston',
        P: '#forge:gears/iron',
        S: '#forge:plates/iron'
    })
    event.shaped(Item.of('refinedpipes:improved_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
        I: 'refinedpipes:basic_extractor_attachment',
        P: '#forge:gears/gold',
        S: '#forge:plates/gold'
    })
    event.shaped(Item.of('refinedpipes:elite_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
        I: 'refinedpipes:advanced_extractor_attachment',
        P: '#forge:gears/emerald',
        S: '#forge:rods/blaze'
    })
    event.shaped(Item.of('refinedpipes:ultimate_extractor_attachment', 1), ["SPS", "PIP", "SPS"], {
        I: 'refinedpipes:elite_extractor_attachment',
        P: '#chipped:purpur_block',
        S: '#chipped:prismarine'
    })
    event.shaped(Item.of('refinedpipes:advanced_fluid_pipe', 3), ["DQD", "SGS", "DQD"], {
        D: '#forge:gems/diamond',
        Q: 'create:polished_rose_quartz',
        G: 'refinedpipes:improved_fluid_pipe',
        S: '#quark:slime_blocks'
    })
    event.shaped(Item.of('refinedpipes:ultimate_fluid_pipe', 3), ["DQD", "SGS", "DQD"], {
        D: '#chipped:purpur_block',
        Q: '#chipped:prismarine',
        G: 'refinedpipes:elite_fluid_pipe',
        S: '#quark:slime_blocks'
    })
    event.shaped(Item.of('refinedpipes:elite_fluid_pipe', 3), ["DQD", "SGS", "DQD"], {
        D: '#forge:gems/emerald',
        Q: '#forge:rods/blaze',
        G: 'refinedpipes:advanced_fluid_pipe',
        S: '#quark:slime_blocks'
    })
    event.shaped(Item.of('refinedpipes:advanced_item_pipe', 3), ["DQD", "GWG", "DQD"], {
        D: '#forge:gems/diamond',
        Q: 'create:polished_rose_quartz',
        G: 'immersiveengineering:insulating_glass',
        W: 'refinedpipes:improved_item_pipe'
    })
    event.shaped(Item.of('refinedpipes:basic_energy_pipe', 1), ["CCC", "GRG", "CCC"], {
        C: '#forge:plates/steel',
        G: 'immersiveengineering:insulating_glass',
        R: 'immersiveengineering:rs_engineering'
    })
    event.shaped(Item.of('refinedpipes:improved_energy_pipe', 2), ["CCC", "GRG", "CCC"], {
        C: '#forge:plates/gold',
        G: 'immersiveengineering:insulating_glass',
        R: 'refinedpipes:basic_energy_pipe'
    })
    event.shaped(Item.of('refinedpipes:basic_fluid_pipe', 1), ["CCC", "SGS", "CCC"], {
        C: '#forge:plates/steel',
        G: 'immersiveengineering:insulating_glass',
        S: '#quark:slime_blocks'
    })
    event.shaped(Item.of('refinedpipes:improved_fluid_pipe', 2), ["CCC", "SGS", "CCC"], {
        C: '#forge:plates/gold',
        G: 'refinedpipes:basic_fluid_pipe',
        S: '#quark:slime_blocks'
    })
    event.shaped(Item.of('refinedpipes:improved_item_pipe', 2), ["CCC", "GXG", "CCC"], {
        C: '#forge:plates/gold',
        G: 'immersiveengineering:insulating_glass',
        X: 'refinedpipes:basic_item_pipe'
    })
    event.shaped(Item.of('refinedpipes:basic_item_pipe', 1), ["CCC", "GGG", "CCC"], {
        C: '#forge:plates/steel',
        G: 'immersiveengineering:insulating_glass'
    })
    //Refined Storage
    event.shaped(Item.of('refinedstorage:constructor', 1), ["ECE", "RMR", "EIE"], {
        E: 'refinedstorage:quartz_enriched_iron',
        C: 'refinedstorage:construction_core',
        R: 'extendedcrafting:redstone_component',
        M: 'refinedstorage:cable',
        I: 'refinedstorage:improved_processor'
    })
    event.shaped(Item.of('refinedstorage:1k_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:1k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:1k_storage_disk', 1), ["MRM", "RPR", "EEE"], {
        M: '#forge:glass',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:1k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:4k_storage_disk', 1), ["MRM", "RPR", "EEE"], {
        M: '#forge:glass',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:4k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:16k_storage_disk', 1), ["MRM", "RPR", "EEE"], {
        M: '#forge:glass',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:16k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:64k_storage_disk', 1), ["MRM", "RPR", "EEE"], {
        M: '#forge:glass',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:64k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:64k_fluid_storage_disk', 1), ["MRM", "RPR", "EEE"], {
        M: '#forge:glass',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:64k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:256k_fluid_storage_disk', 1), ["MRM", "RPR", "EEE"], {
        M: '#forge:glass',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:256k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:1024k_fluid_storage_disk', 1), ["MRM", "RPR", "EEE"], {
        M: '#forge:glass',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:1024k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:4096k_fluid_storage_disk', 1), ["MRM", "RPR", "EEE"], {
        M: '#forge:glass',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:4096k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:4k_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:4k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:16k_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:16k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:64k_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:64k_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:64k_fluid_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:64k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:256k_fluid_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:256k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:1024k_fluid_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:1024k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:4096k_fluid_storage_block', 1), ["EPE", "EME", "ERE"], {
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        P: 'refinedstorage:4096k_fluid_storage_part',
        E: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:cable', 12), ["EEE", "GRG", "EEE"], {
        E: 'refinedstorage:quartz_enriched_iron',
        G: 'appliedenergistics2:quartz_vibrant_glass',
        R: 'appliedenergistics2:fluix_glass_cable'
    })
    event.shaped(Item.of('refinedstorage:upgrade', 1), ["EGE", "EPE", "EGE"], {
        E: 'refinedstorage:quartz_enriched_iron',
        G: 'appliedenergistics2:quartz_vibrant_glass',
        P: 'refinedstorage:improved_processor'
    })
    event.shaped(Item.of('refinedstorage:storage_monitor', 1), ["PCG", "EMG", "PDG"], {
        P: 'refinedstorage:basic_processor',
        C: 'refinedstorage:construction_core',
        G: 'appliedenergistics2:semi_dark_monitor',
        E: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        D: 'refinedstorage:destruction_core'
    })
    event.shaped(Item.of('refinedstorage:storage_housing', 1), ["GRG", "RSR", "GRG"], {
        G: 'appliedenergistics2:quartz_vibrant_glass',
        R: 'refinedstorage:quartz_enriched_iron',
        S: 'appliedenergistics2:empty_storage_cell'
    })
    event.shaped(Item.of('refinedstorage:network_card', 1), ["SSS", "WQW", "SSS"], {
        Q: 'refinedstorage:advanced_processor',
        W: '#forge:plastic',
        S: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:machine_casing', 1), ["WEW", "ESE", "WEW"], {
        E: 'appliedenergistics2:smooth_sky_stone_block',
        S: 'refinedstorage:quartz_enriched_iron_block',
        W: 'create:refined_radiance'
    })
    event.shaped(Item.of('refinedstorage:interface', 1), ["UIU", "RMR", "UEU"], {
        I: 'refinedstorage:importer',
        E: 'refinedstorage:exporter',
        M: 'refinedstorage:machine_casing',
        R: 'extendedcrafting:redstone_component',
        U: 'refinedstorage:quartz_enriched_iron'
    })
    event.shaped(Item.of('refinedstorage:grid', 1), ["PCG", "EMG", "PDG"], {
        P: 'refinedstorage:improved_processor',
        C: 'refinedstorage:construction_core',
        G: 'appliedenergistics2:semi_dark_monitor',
        E: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        D: 'refinedstorage:destruction_core'
    })
    event.shaped(Item.of('refinedstorage:destructor', 1), ["EDE", "RMR", "EIE"], {
        E: 'refinedstorage:quartz_enriched_iron',
        D: 'refinedstorage:destruction_core',
        R: 'extendedcrafting:redstone_component',
        M: 'refinedstorage:cable',
        I: 'refinedstorage:improved_processor'
    })
    event.shaped(Item.of('refinedstorage:crafting_monitor', 1), ["PAG", "EMG", "PAG"], {
        P: 'refinedstorage:improved_processor',
        A: 'refinedstorage:pattern',
        G: 'appliedenergistics2:semi_dark_monitor',
        E: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing'
    })
    event.shaped(Item.of('refinedstorage:crafter_manager', 1), ["PCG", "EMG", "PCG"], {
        P: 'refinedstorage:advanced_processor',
        C: '#refinedstorage:crafter',
        G: 'appliedenergistics2:semi_dark_monitor',
        E: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing'
    })
    //Ranged Pumps
    event.shaped(Item.of('rangedpumps:pump', 1), ["OPO", "LDL", "OPO"], {
        O: '#forge:plates/steel',
        P: 'minecraft:diamond_pickaxe',
        L: '#forge:ingots/obsidian',
        D: 'immersiveengineering:fluid_pump',
    })
    //Storage Drawers
    event.shaped(Item.of('storagedrawers:drawer_key', 1), ["AB ", " B ", " C "], {
        A: '#forge:nuggets/gold',
        B: '#forge:ingots/gold',
        C: '#minecraft:signs',
    })
    //Speedy Ladders
    event.shaped(Item.of('speedyladders:diamond_ladder', 2), ["NLN", "NLN", "NLN"], {
        L: 'speedyladders:gold_ladder',
        N: '#forge:rods/diamond'
    })
    event.shaped(Item.of('speedyladders:gold_ladder', 2), ["NLN", "NLN", "NLN"], {
        L: 'speedyladders:iron_ladder',
        N: '#forge:rods/gold'
    })
    event.shaped(Item.of('speedyladders:iron_ladder', 2), ["NLN", "NLN", "NLN"], {
        L: 'speedyladders:stone_ladder',
        N: '#forge:rods/iron'
    })
    //Speedy Hoppers
    event.shaped(Item.of('speedyhoppers:speedyhopper_mk1', 1), ["A A", "ASA", " A "], {
        A: '#forge:plates/iron',
        S: '#forge:hopper'
    })
    event.shaped(Item.of('speedyhoppers:speedyhopper_mk2', 1), ["A A", "ASA", " A "], {
        A: '#forge:plates/gold',
        S: 'speedyhoppers:speedyhopper_mk1'
    })
    event.shaped(Item.of('speedyhoppers:speedyhopper_mk3', 1), ["A A", "ASA", " A "], {
        A: '#forge:plates/diamond',
        S: 'speedyhoppers:speedyhopper_mk2'
    })
    //Tinkers
    event.shaped(Item.of('tconstruct:greenheart_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'tconstruct:greenheart_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('tconstruct:skyroot_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'tconstruct:skyroot_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('tconstruct:bloodshroom_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'tconstruct:bloodshroom_planks',
        B: '#forge:tools/hammer'
    })
    //Twilight Forest
    event.shaped(Item.of('twilightforest:canopy_plate', 1), [" A ", " A ", " B "], {
        A: 'twilightforest:canopy_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('twilightforest:twilight_oak_plate', 1), [" A ", " A ", " B "], {
        A: 'twilightforest:twilight_oak_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('twilightforest:mangrove_plate', 1), [" A ", " A ", " B "], {
        A: 'twilightforest:mangrove_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('twilightforest:dark_plate', 1), [" A ", " A ", " B "], {
        A: 'twilightforest:dark_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('twilightforest:time_plate', 1), [" A ", " A ", " B "], {
        A: 'twilightforest:time_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('twilightforest:trans_plate', 1), [" A ", " A ", " B "], {
        A: 'twilightforest:trans_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('twilightforest:mine_plate', 1), [" A ", " A ", " B "], {
        A: 'twilightforest:mine_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('twilightforest:sort_plate', 1), [" A ", " A ", " B "], {
        A: 'twilightforest:sort_planks',
        B: '#forge:tools/hammer'
    })
    //Thermal
    event.shaped(Item.of('thermal:rf_coil', 1), ["WPQ", "PXP", "QPW"], {
        P: 'extendedcrafting:redstone_component',
        X: '#forge:gears/electrum',
        W: 'immersiveengineering:wirecoil_redstone',
        Q: '#forge:rods/electrum'
    })
    event.shaped(Item.of('thermal:redstone_servo', 1), ["WRW", "EIE", "WRW"], {
        I: '#forge:gears/iron',
        R: '#forge:plates/steel',
        E: 'immersiveengineering:wirecoil_redstone',
        W: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('thermal:energy_cell_frame', 1), ["IGI", "GEG", "IGI"], {
        G: '#thermal:glass/hardened',
        I: '#forge:plates/lead',
        E: '#forge:gears/electrum'
    })
    event.shaped(Item.of('thermal:fluid_cell_frame', 1), ["IGI", "GEG", "IGI"], {
        G: '#thermal:glass/hardened',
        I: '#forge:plates/bronze',
        E: '#forge:gears/bronze'
    })
    event.shaped(Item.of('thermal:energy_cell', 1), ["RXR", "ICI", "RPR"], {
        C: 'thermal:energy_cell_frame',
        I: '#forge:sheetmetals/steel',
        P: 'thermal:rf_coil',
        R: 'thermal:cured_rubber',
        X: 'extendedcrafting:redstone_catalyst'
    })
    event.shaped(Item.of('thermal:fluid_cell', 1), ["RXR", "ICI", "RPR"], {
        C: 'thermal:energy_cell_frame',
        I: '#forge:sheetmetals/steel',
        P: 'thermal:redstone_servo',
        R: 'thermal:cured_rubber',
        X: '#thermal:glass/hardened'
    })
    event.shaped(Item.of('thermal:press_gear_die', 1), [" P ", "PXP", " P "], {
        P: '#forge:plates/invar',
        X: '#forge:plates/bronze'
    })
    event.shaped(Item.of('thermal:upgrade_augment_1', 1), ["IGI", "RXR", "IGI"], {
        G: '#thermal:glass/hardened',
        I: '#forge:plates/invar',
        R: 'extendedcrafting:redstone_catalyst',
        X: '#forge:gears/electrum'
    })
    event.shaped(Item.of('thermal:upgrade_augment_2', 1), ["IGI", "RXR", "IGI"], {
        G: 'create:polished_rose_quartz',
        I: '#forge:plates/electrum',
        R: '#forge:gears/signalum',
        X: 'thermal:upgrade_augment_1'
    })
    event.shaped(Item.of('thermal:upgrade_augment_3', 1), ["IGI", "RXR", "IGI"], {
        G: 'thermal:enderium_glass',
        I: '#forge:plates/electrum',
        R: '#forge:gears/lumium',
        X: 'thermal:upgrade_augment_2'
    })
    //Torchmaster
    event.shaped(Item.of('torchmaster:megatorch', 1), ["TTT", "GLG", "DLD"], {
        T: 'xreliquary:sojourner_staff',
        G: '#forge:storage_blocks/gold',
        D: '#forge:storage_blocks/diamond',
        L: '#minecraft:logs'
    })
    event.shaped(Item.of('torchmaster:dreadlamp', 1), ["TTT", "GDG", "TLT"], {
        T: '#forge:obsidian',
        G: '#forge:glass_panes',
        D: 'xreliquary:lantern_of_paranoia',
        L: '#forge:dyes/black'
    })
    //Upgrade Aquatic
    event.shaped(Item.of('upgrade_aquatic:driftwood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'upgrade_aquatic:driftwood_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('upgrade_aquatic:river_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'upgrade_aquatic:river_planks',
        B: '#forge:tools/hammer'
    })
    //Undergarden
    event.shaped(Item.of('undergarden:depthrock_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'undergarden:depthrock',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('undergarden:shiverstone_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'undergarden:shiverstone',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('undergarden:tremblecrust_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'undergarden:tremblecrust',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('undergarden:smogstem_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'undergarden:smogstem_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('undergarden:wigglewood_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'undergarden:wigglewood_planks',
        B: '#forge:tools/hammer'
    })
    event.shaped(Item.of('undergarden:grongle_pressure_plate', 1), [" A ", " A ", " B "], {
        A: 'undergarden:grongle_planks',
        B: '#forge:tools/hammer'
    })
    //Waystones
    event.shaped(Item.of('waystones:return_scroll', 3), ["GEG", "PPP"], {
        G: 'naturesaura:tainted_gold',
        E: '#forge:dyes/purple',
        P: '#forge:paper'
    })
    event.shaped(Item.of('waystones:bound_scroll', 3), ["DDD", "GEG", "PPP"], {
        D: '#forge:dyes/purple',
        G: 'naturesaura:tainted_gold',
        E: 'botania:mana_pearl',
        P: '#forge:paper'
    })
    event.shaped(Item.of('waystones:warp_scroll', 3), ["GDG", "GEG", "PPP"], {
        G: 'naturesaura:tainted_gold',
        E: 'botania:mana_pearl',
        P: '#forge:paper',
        D: '#forge:dyes/purple'
    })
    //Xnet
    event.shaped(Item.of('xnet:advanced_connector_blue', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/blue',
        B: 'xnet:advanced_connector_routing'
    })
    event.shaped(Item.of('xnet:advanced_connector_green', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/green',
        B: 'xnet:advanced_connector_routing'
    })
    event.shaped(Item.of('xnet:advanced_connector_red', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/red',
        B: 'xnet:advanced_connector_routing'
    })
    event.shaped(Item.of('xnet:advanced_connector_yellow', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/yellow',
        B: 'xnet:advanced_connector_routing'
    })
    event.shaped(Item.of('xnet:connector_blue', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/blue',
        B: 'xnet:connector_routing'
    })
    event.shaped(Item.of('xnet:connector_green', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/green',
        B: 'xnet:connector_routing'
    })
    event.shaped(Item.of('xnet:connector_red', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/red',
        B: 'xnet:connector_routing'
    })
    event.shaped(Item.of('xnet:connector_yellow', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/yellow',
        B: 'xnet:connector_routing'
    })
    event.shaped(Item.of('xnet:netcable_blue', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/blue',
        B: 'xnet:netcable_routing'
    })
    event.shaped(Item.of('xnet:netcable_green', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/green',
        B: 'xnet:netcable_routing'
    })
    event.shaped(Item.of('xnet:netcable_red', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/red',
        B: 'xnet:netcable_routing'
    })
    event.shaped(Item.of('xnet:netcable_yellow', 1), [" A ", "ABA", " A "], {
        A: '#forge:dyes/yellow',
        B: 'xnet:netcable_routing'
    })
    event.shaped(Item.of('xnet:advanced_connector_routing', 1), ["AB ", "CD ", "   "], {
        A: 'xnet:connector_routing',
        B: 'minecraft:ender_eye',
        C: '#forge:plates/diamond',
        D: 'extendedcrafting:redstone_component'
    })
    event.shaped(Item.of('xnet:connector_routing', 1), ["AAA", "BCB", "AAA"], {
        A: '#thermal:rockwool',
        B: 'immersiveengineering:wirecoil_electrum',
        C: 'xnet:netcable_routing'
    });
});