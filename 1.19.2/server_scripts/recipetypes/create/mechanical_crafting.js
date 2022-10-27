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
  
 //Cylic
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['CPC', 'XBX', 'CWC'],
    key: {
      B: Ingredient.of('minecraft:blast_furnace').toJson(),
      C: Ingredient.of('#forge:ingots/obsidian').toJson(),
      P: Ingredient.of('create:electron_tube').toJson(),
      W: Ingredient.of('createaddition:capacitor').toJson(),
      X: Ingredient.of('immersiveengineering:insulating_glass').toJson()
    },
    result: Item.of('cyclic:melter').toJson(),
  }).id('monumentalexperience:mechanical_crafting/cyclic/melter')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['CPC', 'XBX', 'CWC'],
    key: {
      B: Ingredient.of('create:basin').toJson(),
      C: Ingredient.of('#forge:ingots/obsidian').toJson(),
      P: Ingredient.of('#forge:gems/lapis').toJson(),
      W: Ingredient.of('createaddition:capacitor').toJson(),
      X: Ingredient.of('immersiveengineering:insulating_glass').toJson()
    },
    result: Item.of('cyclic:solidifier').toJson(),
  }).id('monumentalexperience:mechanical_crafting/cyclic/solidifier')
 
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
      P: Ingredient.of('#forge:gems/emerald').toJson(),
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

  //Mekanism Generators
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['QQQ', 'AIA', 'OEO'],
    key: {
      A: Ingredient.of('#mekanism:alloys/infused').toJson(),
      I: Ingredient.of('#forge:circuits/basic').toJson(),
      E: Ingredient.of('mekanism:energy_tablet').toJson(),
      O: Ingredient.of('#forge:plates/osmium').toJson(),
      Q: Ingredient.of('mekanismgenerators:solar_panel').toJson(),
    },
    result: Item.of('mekanismgenerators:solar_generator').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mekanismgenerators/solar_generator')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['III', 'WOW', 'CFC'],
    key: {
      W: Ingredient.of('#forge:plates/osmium').toJson(),
      I: Ingredient.of('kubejs:compressed_iron_plate').toJson(),
      C: Ingredient.of('#forge:plates/bronze').toJson(),
      O: Ingredient.of('#forge:furnace').toJson(),
      F: Ingredient.of('#forge:circuits/basic').toJson()
    },
    result: Item.of('mekanismgenerators:heat_generator').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mekanismgenerators/heat_generator')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['OWO', 'XCX', 'OAO'],
    key: {
      W: Ingredient.of('mekanism:steel_casing').toJson(),
      A: Ingredient.of('#forge:circuits/basic').toJson(),
      C: Ingredient.of('mekanism:electrolytic_core').toJson(),
      X: Ingredient.of('#mekanism:alloys/infused').toJson(),
      O: Ingredient.of('#forge:plates/osmium').toJson()
    },
    result: Item.of('mekanismgenerators:gas_burning_generator').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mekanismgenerators/gas_burning_generator')
  
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PAP', 'PAP', 'III'],
    key: {
      P: Ingredient.of('mekanismgenerators:solar_generator').toJson(),
      A: Ingredient.of('#mekanism:alloys/infused').toJson(),
      I: Ingredient.of('kubejs:compressed_iron_plate').toJson()
    },
    result: Item.of('mekanismgenerators:advanced_solar_generator').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mekanismgenerators/advanced_solar_generator')

  //Mining Gadgets
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PPP', 'QBQ', 'PPP'],
    key: {
      P: Ingredient.of('#forge:sheetmetals/iron').toJson(),
      B: Ingredient.of('immersiveengineering:circuit_board').toJson(),
      Q: Ingredient.of('mininggadgets:upgrade_empty').toJson(),
    },
    result: Item.of('mininggadgets:modificationtable').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mininggadgets/modificationtable')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PWP', 'QBQ', 'PWP'],
    key: {
      P: Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      B: Ingredient.of('#forge:gears/diamond').toJson(),
      Q: Ingredient.of('immersiveengineering:insulating_glass').toJson(),
      W: Ingredient.of('#forge:gems/lapis').toJson()
    },
    result: Item.of('mininggadgets:upgrade_empty').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mininggadgets/upgrade_empty')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['SEE', 'SQZ', 'SEE'],
    key: {
      S: Ingredient.of('#forge:plates/diamond').toJson(),
      Q: Ingredient.of('cyclic:laser').toJson(),
      E: Ingredient.of('#forge:plates/iron').toJson(),
      Z: Ingredient.of('extendedcrafting:redstone_component').toJson()
    },
    result: Item.of('mininggadgets:mininggadget_simple').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mininggadgets/mininggadget_simple')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['SEE', 'SQZ', 'SEE'],
    key: {
      S: Ingredient.of('#forge:plates/diamond').toJson(),
      Q: Ingredient.of('mininggadgets:mininggadget_simple').toJson(),
      E: Ingredient.of('#forge:plates/iron').toJson(),
      Z: Ingredient.of('extendedcrafting:redstone_component').toJson()
    },
    result: Item.of('mininggadgets:mininggadget_fancy').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mininggadgets/mininggadget_fancy')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PWE', 'QBZ', 'PWE'],
    key: {
      P: Ingredient.of('#forge:plates/diamond').toJson(),
      B: Ingredient.of('mininggadgets:mininggadget_fancy').toJson(),
      Q: Ingredient.of('mininggadgets:upgrade_empty').toJson(),
      W: Ingredient.of('createaddition:capacitor').toJson(),
      Z: Ingredient.of('create:electron_tube').toJson(),
      E: Ingredient.of('#forge:plates/iron').toJson()
    },
    result: Item.of('mininggadgets:mininggadget').toJson(),
  }).id('monumentalexperience:mechanical_crafting/mininggadgets/mininggadget')

  //Refined Storage
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['IEI', 'XGX', 'IBI'],
    key: {
      E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
      G: Ingredient.of('ae2:cell_component_1k').toJson(),
      X: Ingredient.of('ae2:quartz_vibrant_glass').toJson(),
      I: Ingredient.of('#forge:silicon').toJson(),
      B: Ingredient.of('extendedcrafting:redstone_component').toJson()
    },
    result: Item.of('refinedstorage:1k_storage_part').toJson(),
  }).id('monumentalexperience:mechanical_crafting/refinedstorage/1k_storage_part')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['IEI', 'XBX', 'IXI'],
    key: {
      E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
      B: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      X: Ingredient.of('refinedstorage:1k_storage_part').toJson(),
      I: Ingredient.of('refinedstorage:basic_processor').toJson(),
    },
    result: Item.of('refinedstorage:4k_storage_part').toJson(),
  }).id('monumentalexperience:mechanical_crafting/refinedstorage/4k_storage_part')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['IEI', 'XBX', 'IXI'],
    key: {
      E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
      B: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      X: Ingredient.of('refinedstorage:4k_storage_part').toJson(),
      I: Ingredient.of('refinedstorage:improved_processor').toJson(),
    },
    result: Item.of('refinedstorage:16k_storage_part').toJson(),
  }).id('monumentalexperience:mechanical_crafting/refinedstorage/16k_storage_part')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['IEI', 'XBX', 'IXI'],
    key: {
      E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
      B: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      X: Ingredient.of('refinedstorage:16k_storage_part').toJson(),
      I: Ingredient.of('refinedstorage:advanced_processor').toJson(),
    },
    result: Item.of('refinedstorage:64k_storage_part').toJson(),
  }).id('monumentalexperience:mechanical_crafting/refinedstorage/64k_storage_part')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['IEI', 'XGX', 'IBI'],
    key: {
      E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
      B: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      X: Ingredient.of('ae2:quartz_vibrant_glass').toJson(),
      I: Ingredient.of('#forge:silicon').toJson(),
      G: Ingredient.of('ae2:fluid_cell_component_1k').toJson(),
    },
    result: Item.of('refinedstorage:64k_fluid_storage_part').toJson(),
  }).id('monumentalexperience:mechanical_crafting/refinedstorage/64k_fluid_storage_part')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['IEI', 'XGX', 'IXI'],
    key: {
      E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
      X: Ingredient.of('refinedstorage:64k_fluid_storage_part').toJson(),
      I: Ingredient.of('refinedstorage:basic_processor').toJson(),
      G: Ingredient.of('cyclic:tank').toJson(),
    },
    result: Item.of('refinedstorage:256k_fluid_storage_part').toJson(),
  }).id('monumentalexperience:mechanical_crafting/refinedstorage/256k_fluid_storage_part')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PEP', 'SRS', 'PSP'],
    key: {
      P: Ingredient.of('refinedstorage:improved_processor').toJson(),
      E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
      S: Ingredient.of('refinedstorage:256k_fluid_storage_part').toJson(),
      R: Ingredient.of('#pneumaticcraft:fluid_tanks').toJson(),
    },
    result: Item.of('refinedstorage:1024k_fluid_storage_part').toJson(),
  }).id('monumentalexperience:mechanical_crafting/refinedstorage/1024k_fluid_storage_part')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PEP', 'SRS', 'PSP'],
    key: {
      P: Ingredient.of('refinedstorage:advanced_processor').toJson(),
      E: Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
      S: Ingredient.of('refinedstorage:1024k_fluid_storage_part').toJson(),
      R: Ingredient.of('#pneumaticcraft:fluid_tanks').toJson(),
    },
    result: Item.of('refinedstorage:4096k_fluid_storage_part').toJson(),
  }).id('monumentalexperience:mechanical_crafting/refinedstorage/4096k_fluid_storage_part')

//Rftools
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ioi', 'oRo', ' o '],
    key: {
      o: Ingredient.of('#forge:eyes').toJson(),
      i: Ingredient.of('#forge:plates/steel').toJson(),
      R: Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
    },
    result: Item.of('rftoolsutility:charged_porter').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/charged_porter')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['RdR', 'dMd', 'RdR'],
    key: {
      M: Ingredient.of('rftoolsutility:charged_porter').toJson(),
      d: Ingredient.of('#forge:plates/diamond').toJson(),
      R: Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
    },
    result: Item.of('rftoolsutility:advanced_charged_porter').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/advanced_charged_porter')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['rqr', 'TFT', 'rqr'],
    key: {
      F: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      T: Ingredient.of('immersiveengineering:wirecoil_redstone').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      q: Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
    },
    result: Item.of('rftoolsutility:dialing_device').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/dialing_device')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['RzR', 'zFz', 'RzR'],
    key: {
      z: Ingredient.of('extendedcrafting:luminessence').toJson(),
      F: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      R: Ingredient.of('extendedcrafting:redstone_catalyst').toJson()
    },
    result: Item.of('rftoolsutility:matter_beamer').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/matter_beamer')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['QRQ', 'RFR', 'QRQ'],
    key: {
      Q: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      F: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      R: Ingredient.of('extendedcrafting:redstone_catalyst').toJson()
    },
    result: Item.of('rftoolsutility:matter_booster').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/matter_booster')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['iii', 'rFr', 'oso'],
    key: {
      o: Ingredient.of('#forge:eyes').toJson(),
      F: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      i: Ingredient.of('#forge:sheetmetals/steel').toJson(),
      s: Ingredient.of('cyclic:eye_redstone').toJson()
    },
    result: Item.of('rftoolsutility:matter_receiver').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/matter_receiver')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['oso', 'rFr', 'iii'],
    key: {
      o: Ingredient.of('#forge:eyes').toJson(),
      F: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      i: Ingredient.of('#forge:sheetmetals/steel').toJson(),
      s: Ingredient.of('cyclic:eye_redstone').toJson()
    },
    result: Item.of('rftoolsutility:matter_transmitter').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/matter_transmitter')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['rYr', 'TAT', 'rYr'],
    key: {
      T: Ingredient.of('immersiveengineering:wirecoil_redstone').toJson(),
      A: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      Y: Ingredient.of('extendedcrafting:redstone_catalyst').toJson()
    },
    result: Item.of('rftoolsutility:simple_dialer').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/simple_dialer')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['rzr', 'oFo', 'rPr'],
    key: {
      F: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      P: Ingredient.of('#forge:heart').toJson(),
      z: Ingredient.of('#forge:dragon_scales').toJson(),
      o: Ingredient.of('#forge:bones').toJson()
    },
    result: Item.of('rftoolsutility:spawner').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/spawner')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['GGG', 'bFb', 'iii'],
    key: {
      b: Ingredient.of('#forge:buckets/empty').toJson(),
      F: Ingredient.of('#pneumaticcraft:fluid_tanks').toJson(),
      G: Ingredient.of('immersiveengineering:insulating_glass').toJson(),
      i: Ingredient.of('#forge:plates/steel').toJson()
    },
    result: Item.of('rftoolsutility:tank').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsutility/tank')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ToT', 'gFg', 'TsT'],
    key: {
      o: Ingredient.of('#forge:plates/steel').toJson(),
      F: Ingredient.of('immersiveengineering:heavy_engineering').toJson(),
      g: Ingredient.of('#forge:gears/quartz').toJson(),
      T: Ingredient.of('#forge:sheetmetals/steel').toJson(),
      s: Ingredient.of('create:electron_tube').toJson()

    },
    result: Item.of('rftoolsstorage:modular_storage').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsstorage/modular_storage')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['ToT', 'gFg', 'TsT'],
    key: {
      o: Ingredient.of('#forge:gears/enderium').toJson(),
      F: Ingredient.of('immersiveengineering:heavy_engineering').toJson(),
      g: Ingredient.of('immersiveengineering:electron_tube').toJson(),
      T: Ingredient.of('#forge:sheetmetals/steel').toJson(),
      s: Ingredient.of('immersiveengineering:circuit_board').toJson()

    },
    result: Item.of('rftoolsstorage:storage_scanner').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsstorage/storage_scanner')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['qsq', 'rpr', 'qaq'],
    key: {
      p: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      q: Ingredient.of('rftoolspower:blazing_rod').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      a: Ingredient.of('pneumaticcraft:printed_circuit_board').toJson(),
      s: Ingredient.of('rftoolsbase:infused_enderpearl').toJson()

    },
    result: Item.of('rftoolspower:blazing_generator').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolspower/blazing_generator')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['rKr', 'KFK', 'rKr'],
    key: {
      K: Ingredient.of('rftoolspower:power_core1').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_component').toJson(),
      F: Ingredient.of('rftoolsbase:machine_frame').toJson(),

    },
    result: Item.of('rftoolspower:cell1').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolspower/cell1')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['rKr', 'KPK', 'rKr'],
    key: {
      K: Ingredient.of('rftoolspower:power_core2').toJson(),
      P: Ingredient.of('rftoolspower:cell1').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_component').toJson(),

    },
    result: Item.of('rftoolspower:cell2').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolspower/cell2')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['rKr', 'KPK', 'rKr'],
    key: {
      K: Ingredient.of('rftoolspower:power_core3').toJson(),
      P: Ingredient.of('rftoolspower:cell2').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_component').toJson(),

    },
    result: Item.of('rftoolspower:cell2').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolspower/cell3')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['qqq', 'rpr', 'qqq'],
    key: {
      q: Ingredient.of('#pneumaticcraft:reinforced_stone').toJson(),
      p: Ingredient.of('#forge:gears/electrum').toJson(),
      r: Ingredient.of('#forge:plates/electrum').toJson(),

    },
    result: Item.of('rftoolsbase:machine_base').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsbase/machine_base')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['qsq', 'rpr', 'qsq'],
    key: {
      q: Ingredient.of('#forge:gems/dimensional').toJson(),
      p: Ingredient.of('#forge:gears/electrum').toJson(),
      r: Ingredient.of('#forge:gems/diamond').toJson(),
      s: Ingredient.of('#forge:dusts/redstone').toJson()

    },
    result: Item.of('rftoolsbase:machine_infuser').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsbase/machine_infuser')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['qsq', 'rpr', 'qaq'],
    key: {
      q: Ingredient.of('immersiveengineering:alloybrick').toJson(),
      p: Ingredient.of('rftoolsbase:machine_frame').toJson(),
      r: Ingredient.of('extendedcrafting:redstone_catalyst').toJson(),
      s: Ingredient.of('rftoolsbase:infused_enderpearl').toJson(),
      a: Ingredient.of('pneumaticcraft:printed_circuit_board').toJson()

    },
    result: Item.of('rftoolsbuilder:builder').toJson(),
  }).id('monumentalexperience:mechanical_crafting/rftoolsbuilder/builder')

//Storage Networks
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'QBQ', 'PQP'],
    key: {
      P: Ingredient.of('#forge:plates/steel').toJson(),
      Q: Ingredient.of('storagenetwork:speed_upgrade').toJson(),
      B: Ingredient.of('storagenetwork:inventory').toJson()

    },
    result: Item.of('storagenetwork:collector').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/collector')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PSP', 'QBQ', 'PTP'],
    key: {
      P: Ingredient.of('minecraft:sea_lantern').toJson(),
      Q: Ingredient.of('immersiveengineering:coil_mv').toJson(),
      B: Ingredient.of('storagenetwork:inventory_remote').toJson(),
      T: Ingredient.of('#forge:storage_blocks/steel').toJson(),
      S: Ingredient.of('immersiveengineering:insulating_glass').toJson()

    },
    result: Item.of('storagenetwork:crafting_remote').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/crafting_remote')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'QBQ', 'PQP'],
    key: {
      P: Ingredient.of('#forge:plates/steel').toJson(),
      Q: Ingredient.of('storagenetwork:stack_upgrade').toJson(),
      B: Ingredient.of('storagenetwork:inventory').toJson()

    },
    result: Item.of('storagenetwork:exchange').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/exchange')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'QBQ', 'PQP'],
    key: {
      P: Ingredient.of('#forge:sheetmetals/steel').toJson(),
      Q: Ingredient.of('storagenetwork:kabel').toJson(),
      B: Ingredient.of('create:mechanical_crafter').toJson()

    },
    result: Item.of('storagenetwork:inventory').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/inventory')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'QBQ', 'PQP'],
    key: {
      P: Ingredient.of('#forge:sheetmetals/electrum').toJson(),
      Q: Ingredient.of('#forge:gears/constantan').toJson(),
      B: Ingredient.of('storagenetwork:inventory').toJson()

    },
    result: Item.of('storagenetwork:request').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/request')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'SBS', 'PQP'],
    key: {
      P: Ingredient.of('#forge:plates/steel').toJson(),
      Q: Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      B: Ingredient.of('storagenetwork:kabel').toJson(),
      S: Ingredient.of('#forge:plates/electrum').toJson()

    },
    result: Item.of('storagenetwork:speed_upgrade').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/speed_upgrade')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'SBS', 'PQP'],
    key: {
      P: Ingredient.of('#forge:plates/steel').toJson(),
      Q: Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      B: Ingredient.of('storagenetwork:kabel').toJson(),
      S: Ingredient.of('#forge:plates/copper').toJson()

    },
    result: Item.of('storagenetwork:slow_upgrade').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/slow_upgrade')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'SBS', 'PQP'],
    key: {
      P: Ingredient.of('#forge:plates/steel').toJson(),
      Q: Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      B: Ingredient.of('storagenetwork:kabel').toJson(),
      S: Ingredient.of('#forge:chests/wooden').toJson()

    },
    result: Item.of('storagenetwork:stock_upgrade').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/stock_upgrade')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'SBS', 'PQP'],
    key: {
      P: Ingredient.of('#forge:plates/steel').toJson(),
      Q: Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      B: Ingredient.of('storagenetwork:kabel').toJson(),
      S: Ingredient.of('minecraft:comparator').toJson()

    },
    result: Item.of('storagenetwork:operation_upgrade').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/operation_upgrade')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'SBS', 'PQP'],
    key: {
      P: Ingredient.of('#forge:plates/steel').toJson(),
      Q: Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      B: Ingredient.of('storagenetwork:kabel').toJson(),
      S: Ingredient.of('#minecraft:coals').toJson()

    },
    result: Item.of('storagenetwork:single_upgrade').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/single_upgrade')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['PQP', 'SBS', 'PQP'],
    key: {
      P: Ingredient.of('#forge:plates/steel').toJson(),
      Q: Ingredient.of('extendedcrafting:redstone_ingot').toJson(),
      B: Ingredient.of('storagenetwork:kabel').toJson(),
      S: Ingredient.of('#forge:rods/blaze').toJson()

    },
    result: Item.of('storagenetwork:stack_upgrade').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/stack_upgrade')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' Q ', 'QBQ', ' Q '],
    key: {
      Q: Ingredient.of('storagenetwork:kabel').toJson(),
      B: Ingredient.of('storagenetwork:inventory_remote').toJson(),

    },
    result: Item.of('storagenetwork:picker_remote').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/picker_remote')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' Q ', 'QBQ', ' Q '],
    key: {
      Q: Ingredient.of('storagenetwork:import_kabel').toJson(),
      B: Ingredient.of('storagenetwork:inventory_remote').toJson(),

    },
    result: Item.of('storagenetwork:collector_remote').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/collector_remote')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' Q ', 'QBQ', ' Q '],
    key: {
      Q: Ingredient.of('storagenetwork:request').toJson(),
      B: Ingredient.of('storagenetwork:inventory_remote').toJson(),

    },
    result: Item.of('storagenetwork:builder_remote').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/builder_remote')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' Q ', 'QBQ', ' Q '],
    key: {
      Q: Ingredient.of('storagenetwork:kabel').toJson(),
      B: Ingredient.of('#forge:piston').toJson(),

    },
    result: Item.of('storagenetwork:export_kabel', 2).toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/export_kabel')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' Q ', 'QBQ', ' Q '],
    key: {
      Q: Ingredient.of('storagenetwork:kabel').toJson(),
      B: Ingredient.of('minecraft:observer').toJson(),

    },
    result: Item.of('storagenetwork:filter_kabel', 2).toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/filter_kabel')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' Q ', 'QBQ', ' Q '],
    key: {
      Q: Ingredient.of('storagenetwork:kabel').toJson(),
      B: Ingredient.of('#forge:barrels/wooden').toJson(),

    },
    result: Item.of('storagenetwork:import_filter_kabel', 2).toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/import_filter_kabel')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' Q ', 'QBQ', ' Q '],
    key: {
      Q: Ingredient.of('storagenetwork:kabel').toJson(),
      B: Ingredient.of('#forge:hopper').toJson(),

    },
    result: Item.of('storagenetwork:import_kabel', 2).toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/import_kabel')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' Q ', 'QBQ', ' Q '],
    key: {
      Q: Ingredient.of('storagenetwork:kabel').toJson(),
      B: Ingredient.of('#forge:chests/wooden').toJson(),

    },
    result: Item.of('storagenetwork:storage_kabel', 2).toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/storage_kabel')

  e.custom({
    type: "create:mechanical_crafting",
    pattern: [' S ', 'QBQ', ' T '],
    key: {
      T: Ingredient.of('#forge:storage_blocks/glowstone').toJson(),
      Q: Ingredient.of('#forge:gears/electrum').toJson(),
      B: Ingredient.of('storagenetwork:master').toJson(),
      S: Ingredient.of('immersiveengineering:insulating_glass').toJson()

    },
    result: Item.of('storagenetwork:inventory_remote').toJson(),
  }).id('monumentalexperience:mechanical_crafting/storagenetwork/inventory_remote')
})