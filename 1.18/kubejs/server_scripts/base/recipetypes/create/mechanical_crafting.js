onEvent('recipes', (event) => {
    const data = {
        recipes: [
        //Ae2
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: 'kubejs:compressed_iron_plate',
                    C: '#forge:gems/fluix',
                    B: 'ae2:quartz_glass'
                },
                result: Item.of('ae2:energy_acceptor', 1)
            },
            {
                pattern: ["ABA", "C D", "ABA"],
                key: {
                    A: 'kubejs:compressed_iron_plate',
                    B: 'ae2:quartz_glass',
                    C: 'ae2:formation_core',
                    D: 'ae2:annihilation_core'
                },
                result: Item.of('ae2:interface', 1)
            },
            {
                pattern: ["ABA", "C C", "ABA"],
                key: {
                    A: 'kubejs:compressed_iron_plate',
                    B: 'ae2:engineering_processor',
                    C: 'ae2:fluix_glass_cable'
                },
                result: Item.of('ae2:drive', 1)
            },
            {
                pattern: ["ABA", "B B", "CCC"],
                key: {
                    A: 'ae2:quartz_glass',
                    B: 'extendedcrafting:redstone_component',
                    C: 'kubejs:compressed_iron_plate'
                },
                result: Item.of('ae2:item_cell_housing', 1)
            },
            /*{
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'ae2:fluix_pearl',
                    C: 'ae2:engineering_processor'
                },
                result: Item.of('ae2:spatial_cell_component_2', 1)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'ae2:spatial_cell_component_2',
                    C: 'ae2:engineering_processor'
                },
                result: Item.of('ae2:spatial_cell_component_16', 1)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'ae2:spatial_cell_component_16',
                    C: 'ae2:engineering_processor'
                },
                result: Item.of('ae2:ae2:spatial_cell_component_128', 1)
            },
            {
                pattern: ["ABA", "BCB", "ABA"],
                key: {
                    A: 'kubejs:compressed_iron_plate',
                    B: 'thermal:obsidian_glass',
                    C: '#forge:dusts/fluix'
                },
                result: Item.of('ae2:condenser', 1)
            },
            {
                pattern: ["ABA", "CDC", "ACA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'ae2:calculation_processor',
                    C: 'ae2:cell_component_4k',
                    D: 'ae2:quartz_glass'
                },
                result: Item.of('ae2:cell_component_16k', 1)
            },
            {
                pattern: ["ABA", "CDC", "ACA"],
                key: {
                    A: '#forge:ingots/refined_glowstone',
                    B: 'ae2:calculation_processor',
                    C: 'ae2:cell_component_16k',
                    D: 'ae2:quartz_glass'
                },
                result: Item.of('ae2:cell_component_64k', 1)
            },
            {
                pattern: ["AAA", "BCB", "DED"],
                key: {
                    A: 'thermal:obsidian_glass',
                    B: 'appliedenergistics2:fluix_glass_cable',
                    C: 'appliedenergistics2:io_port',
                    D: 'kubejs:compressed_iron_plate',
                    E: 'appliedenergistics2:engineering_processor'
                },
                result: Item.of('appliedenergistics2:spatial_io_port', 1)
            },
            {
                pattern: ["ABA", "C C", "DED"],
                key: {
                    A: 'thermal:obsidian_glass',
                    B: 'appliedenergistics2:terminal',
                    C: 'appliedenergistics2:fluix_glass_cable',
                    D: 'kubejs:compressed_iron_plate',
                    E: 'appliedenergistics2:purified_fluix_crystal'
                },
                result: Item.of('appliedenergistics2:chest', 1)
            },*/
            {
                pattern: ["ABA", "CDC", "ACA"],
                key: {
                    A: 'extendedcrafting:redstone_component',
                    B: 'ae2:calculation_processor',
                    C: 'ae2:cell_component_1k',
                    D: 'ae2:quartz_glass'
                },
                result: Item.of('ae2:cell_component_4k', 1)
            },
            {
                pattern: ["AAA", "BCB", "DED"],
                key: {
                    A: 'ae2:quartz_glass',
                    B: 'ae2:drive',
                    C: 'ae2:fluix_glass_cable',
                    D: 'kubejs:compressed_iron_plate',
                    E: 'ae2:logic_processor'
                },
                result: Item.of('ae2:io_port', 1)
            },
            {
                pattern: ["ABA", "CDE", "ABA"],
                key: {
                    A: 'kubejs:compressed_iron_plate',
                    B: 'ae2:quartz_glass',
                    C: 'ae2:annihilation_core',
                    D: 'create:mechanical_crafter',
                    E: 'ae2:formation_core'
                },
                result: Item.of('ae2:molecular_assembler', 1)
            },
            {
                pattern: ["ABA", "CDC", "AEA"],
                key: {
                    A: 'kubejs:compressed_iron_plate',
                    B: 'ae2:smooth_sky_stone_chest',
                    C: 'ae2:fluix_glass_cable',
                    D: 'ae2:cell_component_16k',
                    E: 'ae2:engineering_processor'
                },
                result: Item.of('ae2:security_station', 1)
            },
            //Create
            {
                pattern: [" AAA ", "AQPQA", "APSPA", "AQPQA", " AAA "],
                key: {
                    P: '#forge:treated_wood',
                    S: 'create:large_cogwheel',
                    A: 'create:andesite_alloy',
                    Q: '#forge:sheetmetals/iron'
                },
                result: Item.of('create:crushing_wheel', 2)
            },
            //Cyclic
            {
                pattern: ["CPC", "XBX", "CWC"],
                key: {
                    B: 'minecraft:blast_furnace',
                    C: '#forge:ingots/obsidian',
                    P: 'create:electron_tube',
                    W: 'createaddition:capacitor',
                    X: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('cyclic:melter', 1)
            },
            /*{
                pattern: ["CPC", "XBX", "CWC"],
                key: {
                    B: 'create:basin',
                    C: '#forge:ingots/obsidian',
                    P: '#forge:plates/lapis',
                    W: 'create:electron_tube',
                    X: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('cyclic:solidifier', 1)
            },*/
            //Immersive Engineering
            {
                pattern: [" C ", "CXC", " C "],
                key: {
                    X: '#forge:rods/steel',
                    C: 'immersiveengineering:waterwheel_segment'
                },
                result: Item.of('immersiveengineering:watermill', 1)
            },
            {
                pattern: ["S T", "CXC", "CCC"],
                key: {
                    X: 'immersiveengineering:coil_hv',
                    C: '#forge:sheetmetals/iron',
                    T: 'immersiveengineering:connector_hv',
                    S: 'immersiveengineering:connector_mv'
                },
                result: Item.of('immersiveengineering:transformer_hv', 1)
            },
            {
                pattern: ["S T", "CXC", "CCC"],
                key: {
                    X: 'immersiveengineering:coil_mv',
                    C: '#forge:sheetmetals/iron',
                    T: 'immersiveengineering:connector_mv',
                    S: 'immersiveengineering:connector_lv'
                },
                result: Item.of('immersiveengineering:transformer', 1)
            },
            {
                pattern: ["SSS", "CXC", "CTC"],
                key: {
                    X: 'immersiveengineering:circuit_board',
                    C: '#forge:sheetmetals/constantan',
                    T: 'immersiveengineering:coil_hv',
                    S: '#forge:sheetmetals/steel'
                },
                result: Item.of('immersiveengineering:thermoelectric_generator', 1)
            },
           /*{
                pattern: ["XTX", "TAT", "XTX"],
                key: {
                    X: '#forge:sheetmetals/steel',
                    A: '#forge:gears/electrum',
                    T: 'immersiveengineering:component_iron'
                },
                result: Item.of('immersiveengineering:heavy_engineering', 1)
            },
            {
                pattern: ["AWA", "CSC", "AWA"],
                key: {
                    A: '#forge:sheetmetals/iron',
                    C: 'create:electron_tube',
                    W: '#forge:plates/steel',
                    S: '#forge:gears/bronze'
                },
                result: Item.of('immersiveengineering:rs_engineering', 1)
            },
            {
                pattern: ["CCC", "CXC", "CCC"],
                key: {
                    X: '#forge:gears/iron',
                    C: 'immersiveengineering:windmill_blade'
                },
                result: Item.of('immersiveengineering:windmill', 1)
            },*/
            {
                pattern: [" W ", "CXC", "CXC"],
                key: {
                    W: 'immersiveengineering:wirecoil_copper',
                    X: '#forge:rods/copper',
                    C: '#forge:terracotta'
                },
                result: Item.of('immersiveengineering:connector_lv_relay', 4)
            },
            {
                pattern: [" W ", "CXC", "CXC"],
                key: {
                    W: 'immersiveengineering:wirecoil_steel',
                    X: '#forge:rods/aluminum',
                    C: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('immersiveengineering:connector_hv_relay', 4)
            },
            /*{
                pattern: ["XTX", "TAT", "XTX"],
                key: {
                    X: '#forge:sheetmetals/iron',
                    T: 'immersiveengineering:component_iron',
                    A: '#forge:gears/bronze'
                },
                result: Item.of('immersiveengineering:light_engineering', 2)
            },*/
            {
                pattern: ["   ", "XXX", "CTC"],
                key: {
                    X: 'create:belt_connector',
                    C: '#forge:sheetmetals/iron',
                    T: 'immersiveengineering:electron_tube'
                },
                result: Item.of('immersiveengineering:conveyor_basic', 4)
            },
            /*{
                pattern: ["WWW", "CAC", "XTX"],
                key: {
                    X: '#forge:treated_wood',
                    C: '#forge:plates/bronze',
                    T: 'immersiveengineering:electron_tube',
                    W: '#forge:sheetmetals/iron',
                    A: '#forge:gears/lead'
                },
                result: Item.of('immersiveengineering:capacitor_lv', 1)
            },
            {
                pattern: ["WWW", "CAC", "XTX"],
                key: {
                    X: '#forge:treated_wood',
                    C: '#forge:sheetmetals/aluminum',
                    T: 'immersiveengineering:electron_tube',
                    W: '#forge:sheetmetals/steel',
                    A: '#forge:gears/lead'
                },
                result: Item.of('immersiveengineering:capacitor_hv', 1)
            },
            {
                pattern: ["WWW", "CAC", "XTX"],
                key: {
                    X: '#forge:treated_wood',
                    C: '#forge:sheetmetals/electrum',
                    T: 'immersiveengineering:electron_tube',
                    W: '#forge:sheetmetals/iron',
                    A: '#forge:gears/lead'
                },
                result: Item.of('immersiveengineering:capacitor_mv', 1)
            },*/
            {
                pattern: ["STS", "WXW", "ACA"],
                key: {
                    X: 'create:electron_tube',
                    A: '#forge:treated_wood',
                    T: 'immersiveengineering:connector_lv',
                    S: '#forge:plates/iron',
                    W: 'immersiveengineering:insulating_glass',
                    C: 'immersiveengineering:coil_lv'
                },
                result: Item.of('immersiveengineering:charging_station', 1)
            },
            {
                pattern: ["CCC", "CXC", "CCC"],
                key: {
                    X: 'createaddition:spool',
                    C: 'immersiveengineering:wirecoil_copper'
                },
                result: Item.of('immersiveengineering:coil_lv', 1)
            },
            {
                pattern: ["CCC", "CXC", "CCC"],
                key: {
                    X: 'createaddition:spool',
                    C: 'immersiveengineering:wirecoil_electrum'
                },
                result: Item.of('immersiveengineering:coil_mv', 1)
            },
            {
                pattern: ["CCC", "CXC", "CCC"],
                key: {
                    X: 'createaddition:spool',
                    C: 'immersiveengineering:wirecoil_steel'
                },
                result: Item.of('immersiveengineering:coil_hv', 1)
            },
            /*{
                pattern: [" W ", "CXC", "CXC"],
                key: {
                    W: 'immersiveengineering:wirecoil_electrum',
                    X: '#forge:rods/electrum',
                    C: 'immersiveengineering:concrete'
                },
                result: Item.of('immersiveengineering:connector_mv', 2)
            },*/
            {
                pattern: [" W ", "CXC", "CXC"],
                key: {
                    W: 'immersiveengineering:wirecoil_copper',
                    X: '#forge:rods/copper',
                    C: 'immersiveengineering:concrete'
                },
                result: Item.of('immersiveengineering:connector_lv', 2)
            },
            {
                pattern: [" W ", "CXC", "CXC"],
                key: {
                    W: 'immersiveengineering:wirecoil_steel',
                    X: '#forge:rods/aluminum',
                    C: 'immersiveengineering:concrete'
                },
                result: Item.of('immersiveengineering:connector_hv', 2)
            },
            //Immersive Petroleum
            /*{
                pattern: ["PPP", "PGC", "PPP"],
                key: {
                    P: '#forge:plates/iron',
                    G: 'immersiveengineering:generator',
                    C: 'immersiveengineering:capacitor_lv'
                },
                result: Item.of('immersivepetroleum:gas_generator', 1)
            },*/
            //Iron Furnaces
            {
                pattern: ["AAA", "ABA", "AAA"],
                key: {
                    A: '#forge:plates/copper',
                    B: 'minecraft:furnace'
                },
                result: Item.of('ironfurnaces:copper_furnace', 1)
            },
            {
                pattern: ["AAA", "ABA", "ACA"],
                key: {
                    A: '#forge:glass',
                    B: 'ironfurnaces:diamond_furnace',
                    C: 'greater_eye:greater_eye'
                },
                result: Item.of('ironfurnaces:crystal_furnace', 1)
            },
            /*{
                pattern: ["AAA", "CBC", "AAA"],
                key: {
                    A: '#forge:plates/diamond',
                    B: 'ironfurnaces:gold_furnace',
                    C: '#forge:storage_blocks/diamond'
                },
                result: Item.of('ironfurnaces:diamond_furnace', 1)
            },
            {
                pattern: ["PPP", "PBP", "PPP"],
                key: {
                    P: '#forge:plates/emerald',
                    B: 'ironfurnaces:diamond_furnace'
                },
                result: Item.of('ironfurnaces:emerald_furnace', 1)
            },*/
            {
                pattern: ["AAA", "CBC", "AAA"],
                key: {
                    A: '#forge:plates/gold',
                    B: 'ironfurnaces:iron_furnace',
                    C: '#forge:storage_blocks/gold'
                },
                result: Item.of('ironfurnaces:gold_furnace', 1)
            },
            {
                pattern: ["AAA", "CBC", "AAA"],
                key: {
                    A: '#forge:plates/iron',
                    B: 'minecraft:furnace',
                    C: '#forge:storage_blocks/iron'
                },
                result: Item.of('ironfurnaces:iron_furnace', 1)
            },
            {
                pattern: ["ACA", "CBC", "ADA"],
                key: {
                    A: '#forge:ingots/netherite',
                    B: 'ironfurnaces:obsidian_furnace',
                    C: '#forge:magma',
                    D: '#chipped:soul_sand'
                },
                result: Item.of('ironfurnaces:netherite_furnace', 1)
            },
            {
                pattern: ["ACA", "CBC", "ACA"],
                key: {
                    A: '#forge:obsidian',
                    B: 'ironfurnaces:emerald_furnace',
                    C: '#forge:rods/blaze'
                },
                result: Item.of('ironfurnaces:obsidian_furnace', 1)
            },
            {
                pattern: ["AAA", "ABA", "AAA"],
                key: {
                    A: '#forge:plates/silver',
                    B: 'ironfurnaces:copper_furnace'
                },
                result: Item.of('ironfurnaces:silver_furnace', 1)
            },
            //Mining Gadget         
            {
                pattern: ["PWE", "QBZ", "PWE"],
                key: {
                    P: '#forge:dusts/diamond',
                    B: 'cyclic:laser',
                    W: 'createaddition:capacitor',
                    Q: 'mininggadgets:upgrade_empty',
                    Z: 'create:electron_tube',
                    E: '#forge:plates/iron'
                },
                result: Item.of('mininggadgets:mininggadget', 1)
            },
           /*{
                pattern: ["PWP", "QBQ", "PWP"],
                key: {
                    P: 'extendedcrafting:redstone_ingot',
                    B: '#forge:gears/diamond',
                    W: '#forge:plates/lapis',
                    Q: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('mininggadgets:upgrade_empty', 1)
            },*/
            {
                pattern: ["PPP", "QBQ", "PPP"],
                key: {
                    P: '#forge:sheetmetals/iron',
                    B: 'immersiveengineering:circuit_board',
                    Q: 'mininggadgets:upgrade_empty'
                },
                result: Item.of('mininggadgets:modificationtable', 1)
            },
            //Refined Storage
            {
                pattern: ["iei", "xgx", "ibi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    g: 'ae2:cell_component_1k',
                    i: '#forge:silicon',
                    b: 'extendedcrafting:redstone_component',
                    x: 'ae2:quartz_vibrant_glass'
                },
                result: Item.of('refinedstorage:1k_storage_part', 1)
            },
            {
                pattern: ["iei", "xbx", "ixi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    i: 'refinedstorage:basic_processor',
                    b: 'extendedcrafting:redstone_component',
                    x: 'refinedstorage:1k_storage_part'
                },
                result: Item.of('refinedstorage:4k_storage_part', 1)
            },
            {
                pattern: ["iei", "xbx", "ixi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    i: 'refinedstorage:improved_processor',
                    b: 'extendedcrafting:redstone_component',
                    x: 'refinedstorage:4k_storage_part'
                },
                result: Item.of('refinedstorage:16k_storage_part', 1)
            },
            {
                pattern: ["iei", "xbx", "ixi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    i: 'refinedstorage:advanced_processor',
                    b: 'extendedcrafting:redstone_component',
                    x: 'refinedstorage:16k_storage_part'
                },
                result: Item.of('refinedstorage:64k_storage_part', 1)
            },
            {
                pattern: ["PEP", "SRS", "PSP"],
                key: {
                    P: 'refinedstorage:improved_processor',
                    E: 'refinedstorage:quartz_enriched_iron',
                    S: 'refinedstorage:256k_fluid_storage_part',
                    R: '#forge:tank'
                },
                result: Item.of('refinedstorage:1024k_fluid_storage_part', 1)
            },
            {
                pattern: ["PEP", "SRS", "PSP"],
                key: {
                    P: 'refinedstorage:advanced_processor',
                    E: 'refinedstorage:quartz_enriched_iron',
                    S: 'refinedstorage:1024k_fluid_storage_part',
                    R: '#forge:tank'
                },
                result: Item.of('refinedstorage:4096k_fluid_storage_part', 1)
            },
            {
                pattern: ["iei", "xgx", "ibi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    i: '#forge:silicon',
                    b: 'extendedcrafting:redstone_component',
                    x: 'ae2:quartz_vibrant_glass',
                    g: '#forge:tank'
                },
                result: Item.of('refinedstorage:64k_fluid_storage_part', 1)
            },
            {
                pattern: ["iei", "xgx", "ixi"],
                key: {
                    e: 'refinedstorage:quartz_enriched_iron',
                    g: '#forge:tank',
                    i: 'refinedstorage:basic_processor',
                    x: 'refinedstorage:64k_fluid_storage_part'
                },
                result: Item.of('refinedstorage:256k_fluid_storage_part', 1)
            },
            //Rftools
            /*{
                pattern: ["qqq", "rpr", "qqq"],
                key: {
                    p: '#forge:gears/electrum',
                    q: '#pneumaticcraft:reinforced_stone',
                    r: '#forge:plates/electrum'
                },
                result: Item.of('rftoolsbase:machine_base', 1)
            },
            {
                pattern: ["qsq", "rpr", "qsq"],
                key: {
                    p: 'rftoolsbase:machine_frame',
                    q: '#forge:gems/dimensional',
                    r: '#forge:gems/diamond',
                    s: '#forge:dusts/redstone'
                },
                result: Item.of('rftoolsbase:machine_infuser', 1)
            },*/
            {
                pattern: ["rKr", "KFK", "rKr"],
                key: {
                    K: 'rftoolspower:power_core1',
                    r: 'extendedcrafting:redstone_component',
                    F: 'rftoolsbase:machine_frame'
                },
                result: Item.of('rftoolspower:cell1', 1)
            },
            {
                pattern: ["rKr", "KPK", "rKr"],
                key: {
                    K: 'rftoolspower:power_core2',
                    P: 'rftoolspower:cell1',
                    r: 'extendedcrafting:redstone_component'
                },
                result: Item.of('rftoolspower:cell2', 1)
            },
            {
                pattern: ["rKr", "KPK", "rKr"],
                key: {
                    K: 'rftoolspower:power_core3',
                    P: 'rftoolspower:cell2',
                    r: 'extendedcrafting:redstone_component'
                },
                result: Item.of('rftoolspower:cell3', 1)
            },
            {
                pattern: ["GGG", "bFb", "iii"],
                key: {
                    b: '#forge:bucket',
                    F: '#forge:tank',
                    G: 'immersiveengineering:insulating_glass',
                    i: '#forge:plates/steel'
                },
                result: Item.of('rftoolsutility:tank', 1)
            },
            /*{
                pattern: ["ToT", "gFg", "TsT"],
                key: {
                    g: '#forge:gears/quartz',
                    T: '#forge:sheetmetals/steel',
                    F: 'immersiveengineering:heavy_engineering',
                    o: '#forge:plates/steel',
                    s: 'create:electron_tube'
                },
                result: Item.of('rftoolsstorage:modular_storage', 1)
            },
            {
                pattern: ["RdR", "dMd", "RdR"],
                key: {
                    M: 'rftoolsutility:charged_porter',
                    R: 'extendedcrafting:redstone_catalyst',
                    d: '#forge:plates/diamond'
                },
                result: Item.of('rftoolsutility:advanced_charged_porter', 1)
            },*/
            {
                pattern: ["ioi", "oRo", " o "],
                key: {
                    R: 'extendedcrafting:redstone_catalyst',
                    i: '#forge:plates/steel',
                    o: 'minecraft:ender_eye'
                },
                result: Item.of('rftoolsutility:charged_porter', 1)
            },
            {
                pattern: ["rqr", "TFT", "rqr"],
                key: {
                    r: 'extendedcrafting:redstone_component',
                    T: 'immersiveengineering:wirecoil_redstone',
                    F: 'rftoolsbase:machine_frame',
                    q: 'extendedcrafting:redstone_catalyst'
                },
                result: Item.of('rftoolsutility:dialing_device', 1)
            },
            {
                pattern: ["RzR", "zFz", "RzR"],
                key: {
                    z: 'extendedcrafting:luminessence',
                    R: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame'
                },
                result: Item.of('rftoolsutility:matter_beamer', 1)
            },
            {
                pattern: ["QRQ", "RFR", "QRQ"],
                key: {
                    Q: 'extendedcrafting:redstone_component',
                    R: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame'
                },
                result: Item.of('rftoolsutility:matter_booster', 1)
            },
            {
                pattern: ["iii", "rFr", "oso"],
                key: {
                    r: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame',
                    i: '#forge:sheetmetals/steel',
                    o: 'minecraft:ender_eye',
                    s: 'cyclic:ender_eye_reuse'
                },
                result: Item.of('rftoolsutility:matter_receiver', 1)
            },
            {
                pattern: ["oso", "rFr", "iii"],
                key: {
                    r: 'extendedcrafting:redstone_catalyst',
                    F: 'rftoolsbase:machine_frame',
                    i: '#forge:sheetmetals/steel',
                    o: 'minecraft:ender_eye',
                    s: 'cyclic:ender_eye_reuse'
                },
                result: Item.of('rftoolsutility:matter_transmitter', 1)
            },
            {
                pattern: ["rYr", "TAT", "rYr"],
                key: {
                    A: 'rftoolsbase:machine_base',
                    r: 'extendedcrafting:redstone_component',
                    Y: 'extendedcrafting:redstone_catalyst',
                    T: 'immersiveengineering:wirecoil_redstone'
                },
                result: Item.of('rftoolsutility:simple_dialer', 1)
            },
            //Simple Storage Network
            /*{
                pattern: ["PPP", "QBQ", "PPP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'refinedpipes:advanced_item_pipe',
                    Q: '#forge:gears/electrum'
                },
                result: Item.of('storagenetwork:kabel', 12)
            },*/
            {
                pattern: ["PQP", "SBS", "PQP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'storagenetwork:kabel',
                    Q: 'extendedcrafting:redstone_ingot',
                    S: '#forge:rods/blaze'
                },
                result: Item.of('storagenetwork:stack_upgrade', 1)
            },
            {
                pattern: ["PSP", "QBQ", "PTP"],
                key: {
                    P: 'minecraft:sea_lantern',
                    B: 'storagenetwork:inventory_remote',
                    Q: 'immersiveengineering:coil_mv',
                    T: '#forge:storage_blocks/steel',
                    S: 'immersiveengineering:insulating_glass'
                },
                result: Item.of('storagenetwork:crafting_remote', 1)
            },
            {
                pattern: ["PQP", "QBQ", "PQP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'storagenetwork:inventory',
                    Q: 'storagenetwork:stack_upgrade'
                },
                result: Item.of('storagenetwork:exchange', 1)
            },
            {
                pattern: ["PQP", "QBQ", "PQP"],
                key: {
                    P: '#forge:sheetmetals/steel',
                    B: 'create:mechanical_crafter',
                    Q: 'storagenetwork:kabel'
                },
                result: Item.of('storagenetwork:inventory', 1)
            },
            {
                pattern: ["PQP", "QBQ", "PQP"],
                key: {
                    P: '#forge:plates/steel',
                    B: 'storagenetwork:inventory',
                    Q: 'storagenetwork:speed_upgrade'
                },
                result: Item.of('storagenetwork:collector', 1)
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.result, recipe.pattern, recipe.key);
    });
});