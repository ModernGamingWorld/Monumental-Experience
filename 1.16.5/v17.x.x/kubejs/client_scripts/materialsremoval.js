onEvent('jei.hide.items', event => {
    function compactHide (modid, itemids) {
        itemids.forEach(itemid => {
            event.hide(`${modid}:${itemid}`)
        })
    }
    
    compactHide('blue_skies', [
        'everdawn_diopside_ore',
        'everdawn_pyrope_ore',
        'everdawn_aquite_ore',
        'everdawn_charoite_ore',
        'everdawn_moonstone_ore',
        'everdawn_emerald_ore',
        'everdawn_horizonite_ore',
        'everbright_diopside_ore',
        'everbright_pyrope_ore',
        'everbright_aquite_ore',
        'everbright_charoite_ore',
        'everbright_moonstone_ore',
        'everbright_emerald_ore',
        'falsite_ore',
        'ventium_ore'
    ])
    
    compactHide('draconicevolution', [
        'end_draconium_ore',
        'nether_draconium_ore',
        'overworld_draconium_ore'
    ])
    
    compactHide('mythicbotany', [
        'elementium_ore',
        'dragonstone_ore',
        'gold_ore'
    ])
    
    compactHide('iceandfire', [
        'silver_ore',
        'sapphire_ore',
        'copper_ore',
        'amythest_ore'
    ])
    
    compactHide('astralsorcery', [
        'rock_crystal_ore',
        'starmetal_ore'
    ])
    
    compactHide('gobber2', [
        'gobber2_ore_end',
        'gobber2_ore'
    ])
    
    compactHide('appliedenergistics2', [
        'charged_quartz_ore',
        'quartz_ore'
    ])
    
    compactHide('mysticalagradditions', [
        'nether_prosperity_ore',
        'end_prosperity_ore',
        'nether_inferium_ore',
        'end_inferium_ore'
    ])
    
    compactHide('mysticalagriculture', [
        'prosperity_ore',
        'inferium_ore',
        'soulium_ore'
    ])
    
    compactHide('rftoolsbase', [
        'dimensionalshard_overworld',
        'dimensionalshard_nether',
        'dimensionalshard_end'
    ])
    
    compactHide('bigreactors', [
        'yellorite_ore',
        'anglesite_ore',
        'benitoite_ore'
    ])
    
    compactHide('undergarden', [
        'gold_ore',
        'iron_ore',
        'coal_ore',
        'diamond_ore',
        'cloggrum_ore',
        'frosteel_ore',
        'utherium_ore',
        'otherside_utherium_ore',
        'regalium_ore'
    ])
    
    compactHide('atum', [
        'gold_ore',
        'iron_ore',
        'coal_ore',
        'nether_gold_ore',
        'lapis_ore',
        'diamond_ore',
        'redstone_ore',
        'emerald_ore',
        'bone_ore',
        'relic_ore',
        'nebu_ore'
    ])
    
    compactHide('minecraft', [
        'gold_ore',
        'iron_ore',
        'coal_ore',
        'nether_gold_ore',
        'lapis_ore',
        'diamond_ore',
        'redstone_ore',
        'emerald_ore',
        'nether_quartz_ore'
    ])
    
    compactHide('immersiveengineering', [
        'dust_coke',
        'dust_saltpeter',
        'dust_sulfur',
        'dust_wood',
        'coke',
        'coal_coke',
        'ore_copper',
        'ore_aluminum',
        'ore_lead',
        'ore_silver',
        'ore_nickel',
        'ore_uranium',
        'stick_iron',
        'stick_steel',
        'stick_aluminum',
        'slag'
    ])
    compactHide('mekanism', [
        'dust_bronze',
        'dust_lapis_lazuli',
        'dust_coal',
        'dust_charcoal',
        'dust_quartz',
        'dust_quartz',
        'dust_emerald',
        'dust_diamond',
        'dust_netherite',
        'dust_steel',
        'dust_sulfur',
        'dust_lithium',
        'dust_obsidian',
        'dust_fluorite',
        'ingot_bronze',
        'ingot_steel',
        'nugget_bronze',
        'nugget_steel',
        'ingot_osmium',
        'ingot_copper',
        'ingot_tin',
        'ingot_lead',
        'ingot_uranium',
        'nugget_osmium',
        'nugget_copper',
        'nugget_tin',
        'nugget_lead',
        'nugget_uranium',
        'block_osmium',
        'block_copper',
        'block_tin',
        'block_lead',
        'block_uranium',
        'copper_ore',
        'tin_ore',
        'osmium_ore',
        'uranium_ore',
        'fluorite_ore',
        'lead_ore',
        'block_bronze',
        'block_charcoal',
        'block_steel',
        'block_fluorite'
    ])
    compactHide('occultism', [
        'copper_ingot',
        'silver_ingot',
        'copper_nugget',
        'silver_nugget',
        'obsidian_dust',
        'iron_dust',
        'gold_dust',
        'copper_dust',
        'silver_dust',
        'copper_ore',
        'silver_ore',
        'copper_block',
        'silver_block'
    ])
    compactHide('create', [
        'powdered_obsidian',
        'copper_ingot',
        'zinc_ingot',
        'brass_ingot',
        'copper_nugger',
        'zinc_nugget',
        'brass_nugget',
        'copper_sheet',
        'brass_sheet',
        'iron_sheet',
        'golden_sheet',
        'copper_ore',
        'zinc_ore',
        'copper_block',
        'zinc_block',
        'brass_block'
    ])
    compactHide('createaddition', [
        'diamond_grit',
        'zinc_sheet',
        'copper_wire',
        'copper_rod',
        'iron_rod',
        'gold_rod',
        'brass_rod'
    ])
    compactHide('thermal', [
        'apatite_ore',
        'cinnabar_ore',
        'niter_ore',
        'sulfur_ore',
        'copper_ore',
        'tin_ore',
        'lead_ore',
        'silver_ore',
        'nickel_ore',
        'apatite_block',
        'cinnabar_block',
        'niter_block',
        'sulfur_block',
        'coal_coke_block'
    ])

    { // Hide non-stone EE ores
        let enigmatic_ores = [
            'coal',
            'iron',
            'gold',
            'diamond',
            'emerald',
            'lapis',
            'redstone',
            'quartz',
            'copper',
            'aluminum',
            'silver',
            'lead',
            'nickel',
            'uranium',
            'osmium',
            'tin',
            'zinc',
            'cobalt',
            'iridium',
            'certus_quartz',
            'charged_certus_quartz',
            'fluorite',
            'bitumen',
            'cinnabar',
            'apatite',
            'sulfur',
            'potassium_nitrate',
            'arcane',
            'dimensional',
            'ruby',
            'sapphire',
            'peridot'
        ]
        let enigmatic_strata = [
            'andesite',
            'granite',
            'diorite',
            'sand',
            'gravel',
            'netherrack',
            'blackstone',
            'basalt',
            'soul_soil',
            'end_stone',
            'gabbro',
            'c_limestone',
            'scoria',
            'weathered_limestone',
            'jasper',
            'marble',
            'slate',
            'deepslate',
            'mossy_stone',
            'brimstone',
            'subzero_ash',
            'blue_netherrack',
            'nylium_soul_soil',
            'ether_stone',
            'cryptic_stone',
            'flavolite',
            'sulphuric_rock',
            'violecite',
            'raw_marble'
        ]

        enigmatic_ores.forEach(ore => {
            enigmatic_strata.forEach(stratum => {
                event.hide(`emendatusenigmatica:${ore}_${stratum}_ore`)
            })
        })
    }

    { // Hide IE ingots, nuggets, blocks, plates, and dusts
        let immersive_metals = [
            'copper',
            'aluminum',
            'lead',
            'silver',
            'nickel',
            'uranium',
            'constantan',
            'electrum',
            'steel',
            'iron',
            'gold'
        ]

        immersive_metals.forEach(metal => {
            compactHide('immersiveengineering', [
                `plate_${metal}`,
                `dust_${metal}`,
                `storage_${metal}`,
                `nugget_${metal}`,
                `ingot_${metal}`
            ])
        })
    }

    { // Hide Thermal materials
        let thermal_materials = [ // No netherite as the thermal gear and dust are used
            'iron',
            'gold',
            'lapis',
            'diamond',
            'emerald',
            'quartz',
            'copper',
            'tin',
            'lead',
            'silver',
            'nickel',
            'bronze',
            'electrum',
            'invar',
            'constantan',
            'signalum',
            'lumium',
            'enderium'
        ]

        thermal_materials.forEach(material => {
            compactHide('thermal', [
                `${material}_block`,
                `${material}_ingot`,
                `${material}_nugget`,
                `${material}_dust`,
                `${material}_gear`,
                `${material}_plate`
            ])
        })
    }
})