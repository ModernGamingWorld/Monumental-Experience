ServerEvents.recipes(e => {
  e.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), [' k ', 'ddd', 'ppp'], {
    k: 'ae2:printed_logic_processor',
    d: '#forge:dyes/blue',
    p: '#forge:paper'
  })
  e.shaped('2x immersiveengineering:wirecoil_electrum', [' w ', 'wsw', ' w '], {
    w: '#forge:wires/electrum',
    s: 'createaddition:spool'
  })
  e.shaped('2x immersiveengineering:wirecoil_copper', [' w ', 'wsw', ' w '], {
    w: '#forge:wires/copper',
    s: 'createaddition:spool'
  })
  e.shaped('2x immersiveengineering:wirecoil_structure_rope', [' w ', 'wsw', ' w '], {
    w: '#forge:fiber_hemp',
    s: 'createaddition:spool'
  })
  e.shaped('2x immersiveengineering:wirecoil_redstone', [' w ', 'asa', ' w '], {
    w: '#forge:wires/aluminum',
    a: '#forge:dusts/redstone',
    s: 'createaddition:spool'
  })
  e.shaped('2x immersiveengineering:wirecoil_steel', [' w ', 'asa', ' w '], {
    w: '#forge:wires/aluminum',
    a: '#forge:wires/steel',
    s: 'createaddition:spool'
  })
  e.shaped('2x immersiveengineering:wirecoil_structure_steel', [' w ', 'wsw', ' w '], {
    w: 'immersiveengineering:wire_steel',
    s: 'createaddition:spool'
  })
  e.shaped('immersiveengineering:workbench', ['WWW', 'SCS', 'EIE'], {
    W: 'immersiveengineering:slab_treated_wood_packaged',
    S: '#forge:plates/iron',
    I: 'immersiveengineering:craftingtable',
    C: '#forge:sheetmetals/steel',
    E: 'immersiveengineering:treated_fence'
  })
  e.shaped('immersiveengineering:furnace_heater', ['ici', 'clc', 'iri'], {
    i: '#forge:plates/iron',
    c: '#forge:plates/copper',
    l: 'immersiveengineering:coil_lv',
    r: '#forge:dusts/redstone'
  })
  e.shaped('immersiveengineering:component_iron', ['isi', 'scs', 'isi'], {
    i: 'create:andesite_alloy',
    c: '#forge:dusts/bronze',
    s: '#forge:plates/iron'
  })
  e.shaped('immersiveengineering:component_steel', ['isi', 'scs', 'isi'], {
    i: 'create:andesite_alloy',
    c: '#forge:dusts/bronze',
    s: '#forge:plates/steel'
  })

  removeRecipeByID(e, [
    'immersivepetroleum:asphalt2',
    'immersivepetroleum:asphalt',
    'immersivepetroleum:gas_generator',
    'immersivepetroleum:distillationtower/oilcracking',
    'immersivepetroleum:hydrotreater/sulfur_recovery',
    'immersiveengineering:crafting/strip_lv',
    'immersiveengineering:crafting/strip_mv',
    'immersiveengineering:crafting/blueprint_components',
    'immersiveengineering:crafting/furnace_heater',
    'immersiveengineering:blueprint/component_steel',
    'immersiveengineering:blueprint/component_iron',
    'immersiveengineering:concrete',
    'immersiveengineering:concrete2',
    'immersiveengineering:crafting/treated_wood_horizontal_from_packaged',
    'immersiveengineering:crafting/treated_wood_horizontal',
    'immersiveengineering:crafting/insulating_glass',
    'immersiveengineering:alloysmelter/insulating_glass',
    'immersiveengineering:arcfurnace/insulating_glass',
    'immersiveengineering:crafting/cokebrick',
    'immersiveengineering:crafting/blastbrick',
    'immersiveengineering:crafting/blastbrick_reinforced',
    'immersiveengineering:crafting/alloybrick',
    'immersiveengineering:crafting/pickaxe_steel',
    'immersiveengineering:crafting/axe_steel',
    'immersiveengineering:crafting/armor_steel_chest',
    'immersiveengineering:crafting/armor_faraday_chest',
    'immersiveengineering:crafting/armor_steel_helmet',
    'immersiveengineering:crafting/armor_faraday_helmet',
    'immersiveengineering:crafting/sword_steel',
    'immersiveengineering:crafting/shovel_steel',
    'immersiveengineering:crafting/hoe_steel',
    'immersiveengineering:crafting/capacitor_lv',
    'immersiveengineering:crafting/capacitor_mv',
    'immersiveengineering:crafting/capacitor_hv',
    'immersiveengineering:crafting/coil_lv',
    'immersiveengineering:crafting/coil_mv',
    'immersiveengineering:crafting/coil_hv',
    'immersiveengineering:crafting/connector_lv',
    'immersiveengineering:crafting/connector_mv',
    'immersiveengineering:crafting/connector_hv',
    'immersiveengineering:crafting/connector_lv_relay',
    'immersiveengineering:crafting/connector_mv_relay',
    'immersiveengineering:crafting/connector_hv_relay',
    'immersiveengineering:crafting/component_iron',
    'immersiveengineering:crafting/component_steel',
    'immersiveengineering:crafting/wirecoil_copper',
    'immersiveengineering:crafting/wirecoil_redstone',
    'immersiveengineering:crafting/wirecoil_steel',
    'immersiveengineering:crafting/wirecoil_electrum',
    'immersiveengineering:crafting/wirecoil_structure_steel',
    'immersiveengineering:crafting/wirecoil_structure_rope',
    'immersiveengineering:crafting/blastingfurnace_preheater',
    'immersiveengineering:crafting/workbench',
    'immersiveengineering:crafting/concrete',
    'immersiveengineering:crafting/concrete2',
    'immersiveengineering:crafting/light_engineering',
    'immersiveengineering:crafting/dynamo',
    'immersiveengineering:crafting/conveyor_basic',
    'immersiveengineering:crafting/charging_station',
    'immersiveengineering:crafting/windmill',
    'immersiveengineering:crafting/watermill',
    'immersiveengineering:crafting/transformer',
    'immersiveengineering:crafting/transformer_hv',
    'immersiveengineering:crafting/thermoelectric_generator',
    'immersiveengineering:crafting/heavy_engineering',
    'immersiveengineering:crafting/rs_engineering',
    'immersiveengineering:blueprint/circuit_board',
    'immersiveengineering:crafting/storage_copper_to_ingot_copper',
    'immersiveengineering:crafting/storage_aluminum_to_ingot_aluminum',
    'immersiveengineering:crafting/storage_silver_to_ingot_silver',
    'immersiveengineering:crafting/nugget_copper_to_ingot_copper',
    'immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum',
    'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
    'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
    'immersiveengineering:crafting/storage_lead_to_ingot_lead',
    'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
    'immersiveengineering:crafting/ingot_lead_from_blasting',
    'immersiveengineering:crafting/ingot_lead_from_dust_from_blasting',
    'immersiveengineering:crafting/ingot_lead_from_dust',
    'immersiveengineering:crafting/ingot_lead',
    'immersiveengineering:crafting/ingot_copper_from_blasting',
    'immersiveengineering:crafting/ingot_copper_from_dust_from_blasting',
    'immersiveengineering:crafting/ingot_copper_from_smelting',
    'immersiveengineering:crafting/ingot_copper_from_dust',
    'immersiveengineering:crafting/ingot_copper',
    'immersiveengineering:crusher/ore_diamond',
    'immersiveengineering:crusher/ore_emerald',
    'immersiveengineering:crusher/ore_lapis'
  ])
})
