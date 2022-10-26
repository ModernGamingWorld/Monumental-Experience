ServerEvents.recipes(e => {
//Ae2
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'CDC', 'AEA'],
    key: {
      A: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      B: Ingredient.of('ae2:chest').toJson(),
      C: Ingredient.of('ae2:fluix_glass_cable').toJson(),
      D: Ingredient.of('ae2:cell_component_16k').toJson(),
      E: Ingredient.of('ae2:engineering_processor').toJson()
    },
    result: Item.of('ae2:security_station').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/security_station')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'BCB', 'DED'],
    key: {
      A: Ingredient.of('ae2:quartz_glass').toJson(),
      B: Ingredient.of('ae2:drive').toJson(),
      C: Ingredient.of('ae2:fluix_glass_cable').toJson(),
      D: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      E: Ingredient.of('ae2:logic_processor').toJson()
    },
    result: Item.of('ae2:io_port').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/io_port')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'CDE', 'ABA'],
    key: {
      A: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      B: Ingredient.of('ae2:quartz_glass').toJson(),
      C: Ingredient.of('ae2:annihilation_core').toJson(),
      D: Ingredient.of('create:mechanical_crafter').toJson(),
      E: Ingredient.of('ae2:formation_core').toJson()
    },
    result: Item.of('ae2:molecular_assembler').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/molecular_assembler')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'C D', 'ABA'],
    key: {
      A: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      B: Ingredient.of('ae2:quartz_glass').toJson(),
      C: Ingredient.of('ae2:formation_core').toJson(),
      D: Ingredient.of('ae2:annihilation_core').toJson()
    },
    result: Item.of('ae2:interface').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/interface')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'C C', 'ABA'],
    key: {
      A: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      B: Ingredient.of('ae2:engineering_processor').toJson(),
      C: Ingredient.of('ae2:fluix_glass_cable').toJson()
    },
    result: Item.of('ae2:drive').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/drive')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'ABA', 'ACA'],
    key: {
      A: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      B: Ingredient.of('#forge:furnace').toJson(),
      C: Ingredient.of('ae2:energy_acceptor').toJson()
    },
    result: Item.of('ae2:vibration_chamber').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/vibration_chamber')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'B B', 'CCC'],
    key: {
      A: Ingredient.of('ae2:quartz_glass').toJson(),
      B: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      C: Ingredient.of('kubejs:compressed_iron_plate').toJson()
    },
    result: Item.of('ae2:item_cell_housing').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/item_cell_housing')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'B B', 'CCC'],
    key: {
      A: Ingredient.of('ae2:quartz_glass').toJson(),
      B: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      C: Ingredient.of('#forge:plates/copper').toJson()
    },
    result: Item.of('ae2:fluid_cell_housing').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/fluid_cell_housing')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'BCB', 'ABA'],
    key: {
      A: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      B: Ingredient.of('#forge:gems/fluix').toJson(),
      C: Ingredient.of('ae2:quartz_glass').toJson()
    },
    result: Item.of('ae2:energy_acceptor').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/energy_acceptor')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'CDC', 'ABA'],
    key: {
      A: Ingredient.of('#forge:sheetmetals/steel').toJson(),
      B: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      C: Ingredient.of('#forge:gems/fluix').toJson(),
      D: Ingredient.of('immersiveengineering:charging_station').toJson()
    },
    result: Item.of('ae2:charger').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/charger')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'BCB', 'ABA'],
    key: {
      A: Ingredient.of('#forge:ingots/refined_glowstone').toJson(),
      B: Ingredient.of('ae2:fluix_pearl').toJson(),
      C: Ingredient.of('ae2:engineering_processor').toJson()
    },
    result: Item.of('ae2:spatial_cell_component_2').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/spatial_cell_component_2')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'BCB', 'ABA'],
    key: {
      A: Ingredient.of('#forge:ingots/refined_glowstone').toJson(),
      B: Ingredient.of('ae2:spatial_cell_component_2').toJson(),
      C: Ingredient.of('ae2:engineering_processor').toJson()
    },
    result: Item.of('ae2:spatial_cell_component_16').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/spatial_cell_component_16')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'BCB', 'ABA'],
    key: {
      A: Ingredient.of('#forge:ingots/refined_glowstone').toJson(),
      B: Ingredient.of('ae2:spatial_cell_component_16').toJson(),
      C: Ingredient.of('ae2:engineering_processor').toJson()
    },
    result: Item.of('ae2:spatial_cell_component_128').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/spatial_cell_component_128')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'BCB', 'ABA'],
    key: {
      A: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      B: Ingredient.of('#forge:gems/certus_quartz').toJson(),
      C: Ingredient.of('ae2:logic_processor').toJson()
    },
    result: Item.of('ae2:cell_component_1k').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/cell_component_1k')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'CDC', 'ACA'],
    key: {
      A: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      B: Ingredient.of('ae2:calculation_processor').toJson(),
      C: Ingredient.of('ae2:cell_component_1k').toJson(),
      D: Ingredient.of('ae2:quartz_glass').toJson()
    },
    result: Item.of('ae2:cell_component_4k').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/cell_component_4k')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'CDC', 'ACA'],
    key: {
      A: Ingredient.of('#forge:ingots/refined_glowstone').toJson(),
      B: Ingredient.of('ae2:calculation_processor').toJson(),
      C: Ingredient.of('ae2:cell_component_4k').toJson(),
      D: Ingredient.of('ae2:quartz_glass').toJson()
    },
    result: Item.of('ae2:cell_component_16k').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/cell_component_16k')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'CDC', 'ACA'],
    key: {
      A: Ingredient.of('#forge:ingots/refined_glowstone').toJson(),
      B: Ingredient.of('ae2:calculation_processor').toJson(),
      C: Ingredient.of('ae2:cell_component_16k').toJson(),
      D: Ingredient.of('ae2:quartz_glass').toJson()
    },
    result: Item.of('ae2:cell_component_64k').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/cell_component_64k')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ABA', 'CDC', 'ACA'],
    key: {
      A: Ingredient.of('ae2:sky_dust').toJson(),
      B: Ingredient.of('ae2:calculation_processor').toJson(),
      C: Ingredient.of('ae2:cell_component_64k').toJson(),
      D: Ingredient.of('ae2:quartz_glass').toJson()
    },
    result: Item.of('ae2:cell_component_256k').toJson()
  }).id('monumentalexperience:mechanical_crafting/ae2/cell_component_256k')
 //Create

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' AAA ', 'ACDCA', 'ADBDA', 'ACDCA', ' AAA '],
    key: {
      A: Ingredient.of('create:andesite_alloy').toJson(),
      B: Ingredient.of('create:large_cogwheel').toJson(),
      C: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      D: Ingredient.of('#forge:treated_wood').toJson()
    },
    result: Item.of('create:crushing_wheel', 2).toJson()
  }).id('monumentalexperience:mechanical_crafting/create/crushing_wheel')
 
 //Immersive Engineering
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['XTX', 'TAT', 'XTX'],
    key: {
      X: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      T: Ingredient.of('immersiveengineering:component_iron').toJson(),
      A: Ingredient.of('#forge:gears/bronze').toJson()
    },
    result: Item.of('immersiveengineering:light_engineering').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/light_engineering')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AWA', 'CSC', 'AWA'],
    key: {
      C: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      W: Ingredient.of('#forge:plates/steel').toJson(),
      S: Ingredient.of('#forge:gears/bronze').toJson(),
      A: Ingredient.of('#forge:sheetmetals/iron').toJson()
    },
    result: Item.of('immersiveengineering:rs_engineering').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/rs_engineering')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['XTX', 'TAT', 'XTX'],
    key: {
      X: Ingredient.of('#forge:sheetmetals/steel').toJson(),
      A: Ingredient.of('#forge:gears/electrum').toJson(),
      T: Ingredient.of('immersiveengineering:component_iron').toJson()
    },
    result: Item.of('immersiveengineering:heavy_engineering').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/heavy_engineering')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['   ', 'XXX', 'CTC'],
    key: {
      X: Ingredient.of('create:belt_connector').toJson(),
      C: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      T: Ingredient.of('immersiveengineering:electron_tube').toJson()
    },
    result: Item.of('immersiveengineering:light_engineering', 4).toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/conveyor_basic')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['CTC', 'XSX', 'CCC'],
    key: {
      X: Ingredient.of('create:electron_tube').toJson(),
      T: Ingredient.of('pneumaticcraft:printed_circuit_board').toJson(),
      C: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      S: Ingredient.of('immersiveengineering:coil_lv').toJson()
    },
    result: Item.of('immersiveengineering:dynamo').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/dynamo')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['CCC', 'CXC', 'CCC'],
    key: {
      X: Ingredient.of('createaddition:spool').toJson(),
      C: Ingredient.of('immersiveengineering:wirecoil_copper').toJson()
    },
    result: Item.of('immersiveengineering:coil_lv').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/coil_lv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['CCC', 'CXC', 'CCC'],
    key: {
      X: Ingredient.of('createaddition:spool').toJson(),
      C: Ingredient.of('immersiveengineering:wirecoil_electrum').toJson()
    },
    result: Item.of('immersiveengineering:coil_mv').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/coil_mv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['CCC', 'CXC', 'CCC'],
    key: {
      X: Ingredient.of('createaddition:spool').toJson(),
      C: Ingredient.of('immersiveengineering:wirecoil_steel').toJson()
    },
    result: Item.of('immersiveengineering:coil_hv').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/coil_hv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' W ', 'CXC', 'CXC'],
    key: {
      X: Ingredient.of('#forge:rods/copper').toJson(),
      C: Ingredient.of('immersiveengineering:concrete').toJson(),
      W: Ingredient.of('immersiveengineering:wirecoil_copper').toJson()
    },
    result: Item.of('immersiveengineering:connector_lv', 2).toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/connector_lv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' W ', 'CXC', 'CXC'],
    key: {
      X: Ingredient.of('#forge:rods/copper').toJson(),
      C: Ingredient.of('#forge:terracotta').toJson(),
      W: Ingredient.of('immersiveengineering:wirecoil_copper').toJson()
    },
    result: Item.of('immersiveengineering:connector_lv_relay', 4).toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/connector_lv_relay')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' W ', 'CXC', 'CXC'],
    key: {
      X: Ingredient.of('#forge:rods/electrum').toJson(),
      C: Ingredient.of('immersiveengineering:concrete').toJson(),
      W: Ingredient.of('immersiveengineering:wirecoil_electrum').toJson()
    },
    result: Item.of('immersiveengineering:connector_lv', 2).toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/connector_mv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' W ', 'CXC', 'CXC'],
    key: {
      X: Ingredient.of('#forge:rods/copper').toJson(),
      C: Ingredient.of('#forge:terracotta').toJson(),
      W: Ingredient.of('immersiveengineering:wirecoil_electrum').toJson()
    },
    result: Item.of('immersiveengineering:connector_mv_relay', 4).toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/connector_mv_relay')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' W ', 'CXC', 'CXC'],
    key: {
      X: Ingredient.of('#forge:rods/aluminum').toJson(),
      C: Ingredient.of('immersiveengineering:concrete').toJson(),
      W: Ingredient.of('immersiveengineering:wirecoil_steel').toJson()
    },
    result: Item.of('immersiveengineering:connector_hv', 2).toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/connector_hv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' W ', 'CXC', 'CXC'],
    key: {
      X: Ingredient.of('#forge:rods/aluminum').toJson(),
      C: Ingredient.of('#forge:terracotta').toJson(),
      W: Ingredient.of('immersiveengineering:wirecoil_steel').toJson()
    },
    result: Item.of('immersiveengineering:connector_hv_relay', 4).toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/connector_hv_relay')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['WWW', 'CAC', 'XTX'],
    key: {
      X: Ingredient.of('#forge:treated_wood').toJson(),
      T: Ingredient.of('immersiveengineering:electron_tube').toJson(),
      C: Ingredient.of('#forge:plates/bronze').toJson(),
      W: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      A: Ingredient.of('#forge:gears/lead').toJson()
    },
    result: Item.of('immersiveengineering:capacitor_lv').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/capacitor_lv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['WWW', 'CAC', 'XTX'],
    key: {
      X: Ingredient.of('#forge:treated_wood').toJson(),
      T: Ingredient.of('immersiveengineering:electron_tube').toJson(),
      C: Ingredient.of('#forge:sheetmetals/electrum').toJson(),
      W: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      A: Ingredient.of('#forge:gears/lead').toJson()
    },
    result: Item.of('immersiveengineering:capacitor_mv').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/capacitor_mv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['WWW', 'CAC', 'XTX'],
    key: {
      X: Ingredient.of('#forge:treated_wood').toJson(),
      T: Ingredient.of('immersiveengineering:electron_tube').toJson(),
      C: Ingredient.of('#forge:sheetmetals/aluminum').toJson(),
      W: Ingredient.of('#forge:sheetmetals/steel').toJson(),
      A: Ingredient.of('#forge:gears/lead').toJson()
    },
    result: Item.of('immersiveengineering:capacitor_mv').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/capacitor_hv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['STS', 'WXW', 'ACA'],
    key: {
      X: Ingredient.of('create:electron_tube').toJson(),
      T: Ingredient.of('immersiveengineering:connector_lv').toJson(),
      S: Ingredient.of('#forge:plates/iron').toJson(),
      W: Ingredient.of('immersiveengineering:insulating_glass').toJson(),
      A: Ingredient.of('#forge:treated_wood').toJson(),
      C: Ingredient.of('immersiveengineering:coil_lv').toJson()
    },
    result: Item.of('immersiveengineering:capacitor_mv').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/charging_station')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['CCC', 'CXC', 'CCC'],
    key: {
      X: Ingredient.of('#forge:gears/iron').toJson(),
      C: Ingredient.of('immersiveengineering:windmill_blade').toJson()
    },
    result: Item.of('immersiveengineering:windmill').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/windmill')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' C ', 'CXC', ' C '],
    key: {
      X: Ingredient.of('#forge:rods/steel').toJson(),
      C: Ingredient.of('immersiveengineering:waterwheel_segment').toJson()
    },
    result: Item.of('immersiveengineering:windmill').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/watermill')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['S T', 'CXC', 'CCC'],
    key: {
      X: Ingredient.of('immersiveengineering:coil_mv').toJson(),
      C: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      T: Ingredient.of('immersiveengineering:connector_mv').toJson(),
      S: Ingredient.of('immersiveengineering:connector_lv').toJson()
    },
    result: Item.of('immersiveengineering:transformer').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/transformer')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['S T', 'CXC', 'CCC'],
    key: {
      X: Ingredient.of('immersiveengineering:coil_hv').toJson(),
      C: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      T: Ingredient.of('immersiveengineering:connector_hv').toJson(),
      S: Ingredient.of('immersiveengineering:connector_mv').toJson()
    },
    result: Item.of('immersiveengineering:transformer_hv').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/transformer_hv')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['SSS', 'CXC', 'CTC'],
    key: {
      X: Ingredient.of('immersiveengineering:circuit_board').toJson(),
      C: Ingredient.of('#forge:sheetmetals/constantan').toJson(),
      T: Ingredient.of('immersiveengineering:coil_hv').toJson(),
      S: Ingredient.of('#forge:sheetmetals/steel').toJson()
    },
    result: Item.of('immersiveengineering:thermoelectric_generator').toJson(),
  }).id('monumentalexperience:mechanical_crafting/immersiveengineering/thermoelectric_generator')
  
  //Iron Furnace
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'ABA', 'AAA'],
    key: {
      A: Ingredient.of('#forge:plates/copper').toJson(),
      B: Ingredient.of('minecraft:furnace').toJson()
    },
    result: Item.of('ironfurnaces:copper_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/copper_furnace')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'ABA', 'ACA'],
    key: {
      A: Ingredient.of('#forge:glass').toJson(),
      B: Ingredient.of('ironfurnaces:diamond_furnace').toJson(),
      C: Ingredient.of('greater_eye:greater_eye').toJson()
    },
    result: Item.of('ironfurnaces:crystal_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/crystal_furnace')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'CBC', 'AAA'],
    key: {
      A: Ingredient.of('#forge:plates/diamond').toJson(),
      B: Ingredient.of('ironfurnaces:gold_furnace').toJson(),
      C: Ingredient.of('#forge:storage_blocks/diamond').toJson()
    },
    result: Item.of('ironfurnaces:diamond_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/diamond_furnace')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'CBC', 'AAA'],
    key: {
      A: Ingredient.of('#forge:plates/diamond').toJson(),
      B: Ingredient.of('ironfurnaces:gold_furnace').toJson(),
      C: Ingredient.of('#forge:storage_blocks/diamond').toJson()
    },
    result: Item.of('ironfurnaces:diamond_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/diamond_furnace')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'CBC', 'AAA'],
    key: {
      A: Ingredient.of('#forge:plates/gold').toJson(),
      B: Ingredient.of('ironfurnaces:iron_furnace').toJson(),
      C: Ingredient.of('#forge:storage_blocks/gold').toJson()
    },
    result: Item.of('ironfurnaces:gold_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/gold_furnace')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'CBC', 'AAA'],
    key: {
      A: Ingredient.of('#forge:plates/iron').toJson(),
      B: Ingredient.of('minecraft:furnace').toJson(),
      C: Ingredient.of('#forge:storage_blocks/iron').toJson()
    },
    result: Item.of('ironfurnaces:iron_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/iron_furnace')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ACA', 'CBC', 'ADA'],
    key: {
      A: Ingredient.of('#forge:ingots/netherite').toJson(),
      B: Ingredient.of('ironfurnaces:obsidian_furnace').toJson(),
      C: Ingredient.of('#forge:magma').toJson(),
      D: Ingredient.of('compressium:soulsand_1').toJson()
    },
    result: Item.of('ironfurnaces:netherite_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/netherite_furnace')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ACA', 'CBC', 'ACA'],
    key: {
      A: Ingredient.of('#forge:obsidian').toJson(),
      B: Ingredient.of('ironfurnaces:emerald_furnace').toJson(),
      C: Ingredient.of('#forge:rods/blaze').toJson()
    },
    result: Item.of('ironfurnaces:obsidian_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/obsidian_furnace')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['AAA', 'ABA', 'AAA'],
    key: {
      A: Ingredient.of('#forge:plates/silver').toJson(),
      B: Ingredient.of('ironfurnaces:copper_furnace').toJson()
    },
    result: Item.of('ironfurnaces:silver_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/silver_furnace')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PPP', 'PBP', 'PPP'],
    key: {
      P: Ingredient.of('#forge:plates/emerald').toJson(),
      B: Ingredient.of('ironfurnaces:diamond_furnace').toJson(),
    },
    result: Item.of('ironfurnaces:emerald_furnace').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironfurnaces/emerald_furnace')

  //Iron Coals
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ACA', 'DBD', 'ACA'],
    key: {
      A: Ingredient.of('ironcoals:emerald_coal').toJson(),
      B: Ingredient.of('#forge:storage_blocks/netherite').toJson(),
      C: Ingredient.of('minecraft:heart_of_the_sea').toJson(),
      D: Ingredient.of('#forge:nether_stars').toJson()
    },
    result: Item.of('ironcoals:aeon_coal').toJson(),
  }).id('monumentalexperience:mechanical_crafting/ironcoals/aeon_coal')
})