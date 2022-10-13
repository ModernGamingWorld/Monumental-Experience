ServerEvents.recipes(e => {
  e.shaped('create:electron_tube', ['NCN', 'XXX', 'LAL'], {
    L: '#forge:plates/iron',
    A: '#forge:gears/iron',
    N: 'immersiveengineering:insulating_glass',
    X: 'create:pulse_repeater',
    C: 'create:polished_rose_quartz',
  })
  e.shaped('4x create:copper_casing', ['AAA', 'CSC', 'AAA'], {
    A: '#forge:sheetmetals/copper',
    C: '#forge:plates/copper',
    S: 'supplementaries:timber_frame'
  })
  e.shaped('4x create:brass_casing', ['AAA', 'CSC', 'AAA'], {
    A: 'createdeco:brass_sheet_metal',
    C: '#forge:plates/brass',
    S: 'supplementaries:timber_frame'
  })
  e.shaped('4x create:andesite_casing', ['AAA', 'CSC', 'AAA'], {
    A: 'create:layered_andesite',
    C: 'create:andesite_alloy',
    S: 'prefab:item_bundle_of_timber'
  })
  e.shaped('create:schematicannon', [' C ', 'LDL', 'SIS'], {
    L: '#minecraft:logs',
    D: 'minecraft:dispenser',
    C: '#forge:cauldron',
    S: 'minecraft:smooth_stone',
    I: 'compressium:iron_1'
  })
  e.shaped('create:basin', ['A A', 'BAB'], {
    A: '#forge:plates/iron',
    B: 'create:andesite_alloy'
  })
  e.shaped('create:empty_blaze_burner', ['A A', 'S S', 'WWW'], {
    S: 'minecraft:iron_bars',
    A: '#forge:plates/iron',
    W: 'create:andesite_alloy'
  })
  e.shaped('2x create:large_cogwheel', ['SDS', 'DCD', 'SDS'], {
    S: '#minecraft:wooden_buttons',
    C: 'create:andesite_alloy',
    D: '#minecraft:logs'
  })
  e.shaped('create:mechanical_piston', [' B ', 'SCS', ' I '], {
    B: '#forge:piston',
    S: 'create:cogwheel',
    C: 'create:andesite_casing',
    I: 'create:piston_extension_pole'
  })
  e.shaped('create:mechanical_press', ['WBW', 'SCS', 'WIW'], {
    W: '#forge:plates/iron',
    S: 'create:cogwheel',
    C: 'create:andesite_casing',
    I: '#forge:piston',
    B: 'create:shaft'
  })
  e.shaped('create:millstone', ['VBV', 'SCS', 'VBV'], {
    B: '#forge:treated_wood',
    S: 'create:andesite_alloy',
    C: 'create:cogwheel',
    V: '#forge:plates/iron'
  })

  removeRecipeByID(e, [
    'createaddition:crafting/spool',
    'createaddition:compat/immersiveengineering/blastingfurnace_preheater',
    'create:crafting/materials/electron_tube',
    'create:crafting/kinetics/millstone',
    'create:crafting/kinetics/basin',
    'create:crafting/kinetics/empty_blaze_burner',
    'create:crafting/kinetics/large_cogwheel',
    'create:crafting/kinetics/large_cogwheelfrom_little',
    'create:crafting/kinetics/mechanical_piston',
    'create:crafting/kinetics/mechanical_press',
    'create:crafting/schematics/schematicannon',
    'create:crafting/materials/copper_casing',
    'create:crafting/materials/rose_quartz',
    'create:crafting/materials/shadow_steel_casing',
    'create:crafting/materials/refined_radiance_casing',
    'create:crafting/materials/andesite_casing',
    'create:crafting/materials/brass_casing',
    'create:materials/electron_tube',
    'create:crafting/materials/andesite_alloy',
    'create:mechanical_crafting/crushing_wheel',
    'create:mixing/andesite_alloy',
    'create:crafting/materials/copper_ingot_from_decompacting',
    'create:crafting/materials/copper_ingot_from_compacting',
    'create:blasting/copper_ingot_from_ore',
    'create:smelting/copper_ingot_from_ore',
    'create:blasting/lead_ingot_compat_eidolon',
    'create:blasting/lead_ingot_compat_thermal',
    'create:blasting/ingot_lead_compat_mekanism',
    'create:blasting/ingot_lead_compat_immersiveengineering',
    'create:smelting/ingot_lead_compat_immersiveengineering',
    'create:smelting/lead_ingot_compat_thermal',
    'create:smelting/lead_ingot_compat_eidolon',
    'create:smelting/ingot_lead_compat_mekanism',
    'create_stuff_additions:brasss_pickaxe_recipe',
    'create_stuff_additions:brasss_axe_recipe',
    'create_stuff_additions:brasss_sword_recipe',
    'create_stuff_additions:brasss_hoe_recipe',
    'create_stuff_additions:copper_pickaxe_recipe',
    'create_stuff_additions:copper_axe_recipe',
    'create_stuff_additions:copper_hoe_recipe',
    'create_stuff_additions:copper_sword_recipe',
    'create_stuff_additions:zinc_pickaxe_recipe',
    'create_stuff_additions:zinc_axe_recipe',
    'create_stuff_additions:zinc_sword_recipe',
    'create_stuff_additions:zinc_hoe_recipe',
    'createaddition:crushing/diamond_ore'
  ])
})
