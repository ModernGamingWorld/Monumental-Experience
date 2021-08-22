onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                result: 'minecraft:apple',
                pattern: ['XXX', 'X X', 'XXX'],
                key: {
                    X: '#forge:ingots/gold',
                }
            },
            {
                result: 'minecraft:torch',
                pattern: ['XX XX', ' X X ', 'XYZYX'],
                key: {
                    X: '#forge:ingots/gold',
                    Y: '#forge:ingots/iron',
                    Z: 'minecraft:stick'
                }
            },
            {
                result: 'minecraft:coal',
                pattern: ['AAAAAAA', 'BBBBBBB', 'CCCCCCC', 'DDDDDDD'],
                key: {
                    A: '#forge:gems/diamond',
                    B: '#forge:gems/lapis',
                    C: 'minecraft:nether_star',
                    D: '#forge:ingots/iron'
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
                result: 'mekanism:creative_energy_cube',
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