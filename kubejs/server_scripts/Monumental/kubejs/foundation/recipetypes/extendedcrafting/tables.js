onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                result: 'botanypotstiers:elite_botany_pot',
                pattern: ['X X', 'XCX', 'SXS'],
                key: {
                    X: '#forge:terracotta',
                    C: 'industrialagriculture:bag_tier_one',
                    S: 'compressium:iron_2'
                }
            },
            {
                result: 'botanypotstiers:ultra_botany_pot',
                pattern: ['X X', 'XCX', 'SXS'],
                key: {
                    X: '#forge:terracotta',
                    C: 'industrialagriculture:bag_tier_two',
                    S: 'compressium:iron_3'
                }
            },
            {
                result: 'botanypotstiers:creative_botany_pot',
                pattern: ['X X', 'XCX', 'SXS'],
                key: {
                    X: '#forge:terracotta',
                    C: 'industrialagriculture:bag_tier_three',
                    S: 'compressium:iron_4'
                }
            },
            {
                result: 'appliedenergistics2:creative_storage_cell',
                pattern: ['ABCBA', 'BDXDB', 'CXEXC', 'BDXDB', 'ABCBA'],
                key: {
                    A: 'appliedenergistics2:quartz_glass',
                    B: 'appliedenergistics2:smooth_sky_stone_block',
                    C: 'appliedenergistics2:empty_storage_cell',
                    D: 'refinedstorage:quartz_enriched_iron',
                    E: 'refinedstorage:machine_casing',
                    X: 'appliedenergistics2:128_cubed_spatial_storage_cell'
                }
            },
            {
                result: 'appliedenergistics2:creative_energy_cell',
                pattern: ['ABCBA', 'BDXDB', 'CXDXC', 'BDXDB', 'ABCBA'],
                key: {
                    A: 'appliedenergistics2:energy_cell',
                    B: 'fluxnetworks:flux_block',
                    C: 'appliedenergistics2:dense_energy_cell',
                    D: 'appliedenergistics2:singularity',
                    X: 'appliedenergistics2:128_cubed_spatial_storage_cell'
                }
            },
            {
                result: 'rftoolsutility:creative_screen',
                pattern: ['ABCBA', 'BAXAB', 'CXAXC', 'BAXAB', 'ABCBA'],
                key: {
                    A: 'rftoolsutility:redstone_information',
                    B: 'rftoolsutility:module_template',
                    C: 'rftoolsutility:screen',
                    X: 'rftoolsbase:machine_base'
                }
            },
            {
                result: 'create:creative_blaze_cake',
                pattern: ['ABCBA', 'BAXAB', 'CXAXC', 'BAXAB', 'ABCBA'],
                key: {
                    A: 'minecraft:cake',
                    B: 'tconstruct:earth_cake',
                    C: 'createaddition:chocolate_cake',
                    X: 'mana-and-artifice:enchantment_focus_fire'
                }
            },
            {
                result: 'create:creative_motor',
                pattern: ['ABCBA', 'BAXAB', 'CXAXC', 'BAXAB', 'ABCBA'],
                key: {
                    A: 'createaddition:electric_motor',
                    B: 'transport:solid_fuel_engine',
                    C: 'immersiveengineering:toolbox',
                    X: 'create:furnace_engine'
                }
            },
            {
                result: 'rftoolspower:dimensionalcell_creative',
                pattern: ['ABCBA', 'BSXSB', 'CXZXC', 'BSXSB', 'ABCBA'],
                key: {
                    A: 'rftoolspower:dimensionalcell_simple',
                    B: 'rftoolspower:dimensionalcell',
                    C: 'rftoolspower:dimensionalcell_advanced',
                    X: 'rftoolspower:power_core2',
                    S: 'rftoolspower:power_core3',
                    Z: 'rftoolsbase:machine_frame'
                }
            },
            {
                result: 'mysticalagradditions:creative_essence',
                pattern: ['ABABA', 'BSXSB', 'AXZXA', 'BSXSB', 'ABABA'],
                key: {
                    A: 'mysticalagradditions:insanium_block',
                    B: 'gobber2:gobber2_ingot_end',
                    X: 'mysticalagriculture:prosperity_block',
                    S: '#mysticalagriculture:essences',
                    Z: 'extendedcrafting:ultimate_catalyst'
                }
            },
            {
                result: 'refinedstorage:creative_storage_disk',
                pattern: ['ABCBA', 'BSXSB', 'CXZXC', 'BSXSB', 'ABCBA'],
                key: {
                    A: 'refinedstorage:1k_storage_disk',
                    B: 'refinedstorage:4k_storage_disk',
                    C: 'refinedstorage:16k_storage_disk',
                    X: 'refinedstorage:64k_storage_disk',
                    S: 'refinedstorage:basic_processor',
                    Z: 'refinedstorage:machine_casing'
                }
            },
            {
                result: 'immersiveengineering:capacitor_creative',
                pattern: ['ABCBA', 'BSXSB', 'CXZXC', 'BSXSB', 'ABCBA'],
                key: {
                    A: 'immersiveengineering:capacitor_lv',
                    B: 'immersiveengineering:capacitor_mv',
                    C: 'immersiveengineering:capacitor_hv',
                    X: 'immersiveengineering:rs_engineering',
                    S: 'immersiveengineering:light_engineering',
                    Z: 'immersiveengineering:heavy_engineering'
                }
            },
            {
                result: 'refinedstorage:creative_fluid_storage_disk',
                pattern: ['ABCBA', 'BSXSB', 'CXZXC', 'BSXSB', 'ABCBA'],
                key: {
                    A: 'refinedstorage:64k_fluid_storage_disk',
                    B: 'refinedstorage:256k_fluid_storage_disk',
                    C: 'refinedstorage:1024k_fluid_storage_disk',
                    X: 'refinedstorage:4096k_fluid_storage_disk',
                    S: 'refinedstorage:advanced_processor',
                    Z: 'refinedstorage:machine_casing'
                }
            },
            {
                result: Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'),
                pattern: ['ABCBA', 'BSXSB', 'CXZXC', 'BSXSB', 'ABCBA'],
                key: {
                    A: 'mekanism:basic_energy_cube',
                    B: 'mekanism:advanced_energy_cube',
                    C: 'mekanism:elite_energy_cube',
                    X: 'mekanism:ultimate_energy_cube',
                    S: '#mekanism:alloys/atomic',
                    Z: 'mekanism:steel_casing'
                }
            },
            {
                result: 'refinedstorage:controller',
                pattern: ['ABCBA', 'BDDDB', 'CDEDC', 'BDDDB', 'ABCBA'],
                key: {
                    A: '#forge:gems/silicon',
                    B: 'appliedenergistics2:smooth_sky_stone_block',
                    C: 'refinedstorage:advanced_processor',
                    D: 'refinedstorage:quartz_enriched_iron',
                    E: 'refinedstorage:machine_casing'
                }
            },
            {
                result: 'draconicevolution:creative_capacitor',
                pattern: ['    A    ', '  BBABB  ', ' BCCACCB ', ' BCDADCB ', 'AAAAEAAAA', ' BCDADCB ', ' BCCACCB ', '  BBABB  ', '    A    '],
                key: {
                    A: 'draconicevolution:awakened_draconium_block',
                    B: 'gobber2:gobber2_ingot_end',
                    C: 'draconicevolution:awakened_draconium_ingot',
                    D: 'draconicevolution:draconic_capacitor',
                    E: 'extendedcrafting:ultimate_catalyst'
                }
            },
            {
                result: 'iceandfire:creative_dragon_meal',
                pattern: ['    A    ', '  BBABB  ', ' BCCACCB ', ' BCDADCB ', 'AAAAEAAAA', ' BCDADCB ', ' BCCACCB ', '  BBABB  ', '    A    '],
                key: {
                    A: 'iceandfire:sickly_dragon_meal',
                    B: 'iceandfire:dragon_meal',
                    C: 'pamhc2foodextended:delightedmealitem',
                    D: 'farmersdelight:steak_and_potatoes',
                    E: 'mana-and-artifice:enchantment_focus_fire'
                }
            },
            {
                result: 'botania:creative_pool',
                pattern: ['ABBBCBBBA', 'BDEEEEEDB', 'BEFGHGFEB', 'BEGIJIGEB', 'CEHJKJHEC', 'BEGIJIGEB', 'BEFGHGFEB', 'BDEEEEEDB', 'ABBBCBBBA'],
                key: {
                    A: 'botania:mana_pool',
                    B: '#forge:ingots/manasteel',
                    C: 'botania:diluted_pool',
                    D: 'botania:laputa_shard',
                    E: 'eidolon:shadow_gem',
                    F: 'botania:fabulous_pool',
                    G: '#forge:storage_blocks/terrasteel',
                    H: 'botania:gaia_pylon',
                    I: 'mythicbotany:aquapanthus',
                    J: 'mythicbotany:hellebore',
                    K: 'mythicbotany:ice_ring'
                }
            },
            {
                result: 'botania:creative_pool',
                pattern: ['ABCDEFGH', 'BDEEEEEDB', 'BEFGHGFEB', 'BEGIJIGEB', 'CEHJKJHEC', 'BEGIJIGEB', 'BEFGHGFEB', 'BDEEEEEDB', 'ABBBCBBBA'],
                key: {
                    A: 'botania:mana_pool',
                    B: '#forge:ingots/manasteel',
                    C: 'botania:diluted_pool',
                    D: 'botania:laputa_shard',
                    E: 'eidolon:shadow_gem',
                    F: 'botania:fabulous_pool',
                    G: '#forge:storage_blocks/terrasteel',
                    H: 'botania:gaia_pylon',
                    I: 'mythicbotany:aquapanthus',
                    J: 'mythicbotany:hellebore',
                    K: 'mythicbotany:ice_ring'
                }
            },
            {
                result: Item.of('botania:mana_tablet', '{mana:500000,creative:1b}'),
                pattern: ['ABBBCBBBA', 'BDEEEEEDB', 'BEFGHGFEB', 'BEGIJIGEB', 'CEHJKJHEC', 'BEGIJIGEB', 'BEFGHGFEB', 'BDEEEEEDB', 'ABBBCBBBA'],
                key: {
                    A: Item.of('botania:mana_tablet', '{mana:500000}'),
                    B: '#forge:ingots/manasteel',
                    C: 'botania:diluted_pool',
                    D: 'botania:laputa_shard',
                    E: 'eidolon:shadow_gem',
                    F: 'botania:fabulous_pool',
                    G: '#forge:storage_blocks/terrasteel',
                    H: 'botania:gaia_pylon',
                    I: 'mythicbotany:aquapanthus',
                    J: 'mythicbotany:hellebore',
                    K: 'mythicbotany:ice_ring'
                }
            },
            {
                result: 'storagenetwork:master',
                pattern: ['AABAA', 'ABCBA', 'BCDCB', 'ABCBA', 'AABAA'],
                key: {
                    A: '#forge:sheetmetals/steel',
                    B: 'storagenetwork:kabel',
                    C: 'immersiveengineering:circuit_board',
                    D: '#forge:gears/diamond'
                }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.extendedcrafting.shaped_table(
            recipe.result,
            recipe.pattern,
            recipe.key
        );
    });
});