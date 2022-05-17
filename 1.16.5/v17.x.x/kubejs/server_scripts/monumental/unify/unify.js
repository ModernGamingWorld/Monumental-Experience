onEvent('recipes', event => {
    materials = [{
            name: 'wood',
            dust: 'emendatusenigmatica:wood_dust'
        }, {
            name: 'graphite',
            ingot: 'bigreactors:graphite_ingot',
            storage_block: 'bigreactors:graphite_block',
            dust: 'emendatusenigmatica:graphite_dust'
        }, {
            name: 'lithium',
            dust: 'emendatusenigmatica:lithium_dust'
        }, {
            name: 'coal',
            storage_block: 'minecraft:coal_block',
            dust: 'emendatusenigmatica:coal_dust'
        }, {
            name: 'charcoal',
            storage_block: 'mekanism:block_charcoal',
            dust: 'emendatusenigmatica:charcoal_dust'
        }, {
            name: 'coal_coke',
            storage_block: 'emendatusenigmatica:coke_block',
            dust: 'emendatusenigmatica:coke_dust'
        }, {
            name: 'saltpeter',
            gem: 'emendatusenigmatica:potassium_nitrate_gem',
            storage_block: 'emendatusenigmatica:potassium_nitrate_block',
            dust: 'emendatusenigmatica:potassium_nitrate_dust'
        }, {
            name: 'niter',
            gem: 'emendatusenigmatica:potassium_nitrate_gem',
            storage_block: 'emendatusenigmatica:potassium_nitrate_block',
            dust: 'emendatusenigmatica:potassium_nitrate_dust'
        }, {
            name: 'sulfur',
            gem: 'emendatusenigmatica:sulfur_gem',
            storage_block: 'emendatusenigmatica:sulfur_block',
            dust: 'emendatusenigmatica:sulfur_dust'
        }, {
            name: 'mana',
            gem: 'emendatusenigmatica:arcane_gem',
            storage_block: 'emendatusenigmatica:arcane_block'
        }, {
            name: 'diamond',
            gem: 'minecraft:diamond',
            storage_block: 'minecraft:diamond_block',
            nugget: 'inventorypets:nugget_diamond',
            dust: 'emendatusenigmatica:diamond_dust',
            gear: 'emendatusenigmatica:diamond_gear',
            plate: 'emendatusenigmatica:diamond_plate',
            rod: 'emendatusenigmatica:diamond_rod'
        }, {
            name: 'lapis',
            gem: 'minecraft:lapis_lazuli',
            storage_block: 'minecraft:lapis_block',
            dust: 'emendatusenigmatica:lapis_dust',
            gear: 'emendatusenigmatica:lapis_gear',
            plate: 'emendatusenigmatica:lapis_plate',
            rod: 'emendatusenigmatica:lapis_rod'
        }, {
            name: 'emerald',
            gem: 'minecraft:emerald',
            storage_block: 'minecraft:emerald_block',
            dust: 'emendatusenigmatica:emerald_dust',
            gear: 'emendatusenigmatica:emerald_gear',
            plate: 'emendatusenigmatica:emerald_plate',
            rod: 'emendatusenigmatica:emerald_rod'
        }, {
            name: 'certus_quartz',
            gem: 'emendatusenigmatica:certus_quartz_gem',
            dust: 'emendatusenigmatica:certus_quartz_dust',
            block: 'emendatusenigmatica:certus_quartz_block'
        }, {
            name: 'charged_certus_quartz',
            gem: 'emendatusenigmatica:charged_certus_quartz_gem',
            dust: 'emendatusenigmatica:charged_certus_quartz_dust',
            block: 'emendatusenigmatica:charged_certus_quartz_block'
        },{
            name: 'fluix',
            gem: 'emendatusenigmatica:fluix_gem',
            dust: 'emendatusenigmatica:fluix_dust',
            block: 'emendatusenigmatica:fluix_block'
        }, {
            name: 'quartz',
            gem: 'minecraft:quartz',
            storage_block: 'minecraft:quartz_block',
            dust: 'emendatusenigmatica:quartz_dust',
            gear: 'emendatusenigmatica:quartz_gear'
        }, {
            name: 'fluorite',
            gem: 'emendatusenigmatica:fluorite_gem',
            storage_block: 'emendatusenigmatica:fluorite_block',
            dust: 'emendatusenigmatica:fluorite_dust'
        }, {
            name: 'cinnabar',
            gem: 'emendatusenigmatica:cinnabar_gem',
            storage_block: 'emendatusenigmatica:cinnabar_block',
            dust: 'emendatusenigmatica:cinnabar_dust'
        }, {
            name: 'apatite',
            gem: 'emendatusenigmatica:apatite_gem',
            storage_block: 'emendatusenigmatica:apatite_block',
            dust: 'emendatusenigmatica:apatite_dust'
        }, {
            name: 'ruby',
            gem: 'emendatusenigmatica:ruby_gem',
            storage_block: 'emendatusenigmatica:ruby_block',
            dust: 'emendatusenigmatica:ruby_dust',
            gear: 'emendatusenigmatica:ruby_gear',
            plate: 'emendatusenigmatica:ruby_plate',
            rod: 'emendatusenigmatica:ruby_rod'
        }, {
            name: 'peridot',
            gem: 'emendatusenigmatica:peridot_gem',
            storage_block: 'emendatusenigmatica:peridot_block',
            dust: 'emendatusenigmatica:peridot_dust',
            gear: 'emendatusenigmatica:peridot_gear',
            plate: 'emendatusenigmatica:peridot_plate',
            rod: 'emendatusenigmatica:peridot_rod'
        }, {
            name: 'obsidian',
            dust: 'emendatusenigmatica:obsidian_dust'
        }, {
            name: 'sapphire',
            gem: 'emendatusenigmatica:sapphire_gem',
            storage_block: 'emendatusenigmatica:sapphire_block',
            dust: 'emendatusenigmatica:sapphire_dust',
            gear: 'emendatusenigmatica:sapphire_gear',
            plate: 'emendatusenigmatica:sapphire_plate',
            rod: 'emendatusenigmatica:sapphire_rod'
        }, {
            name: 'iron',
            ingot: 'minecraft:iron_ingot',
            storage_block: 'minecraft:iron_block',
            nugget: 'minecraft:iron_nugget',
            dust: 'emendatusenigmatica:iron_dust',
            gear: 'emendatusenigmatica:iron_gear',
            plate: 'emendatusenigmatica:iron_plate',
            rod: 'emendatusenigmatica:iron_rod'
        }, {
            name: 'copper',
            ingot: 'emendatusenigmatica:copper_ingot',
            storage_block: 'emendatusenigmatica:copper_block',
            nugget: 'emendatusenigmatica:copper_nugget',
            dust: 'emendatusenigmatica:copper_dust',
            gear: 'emendatusenigmatica:copper_gear',
            plate: 'emendatusenigmatica:copper_plate',
            rod: 'emendatusenigmatica:copper_rod'
        }, {
            name: 'aluminum',
            ingot: 'emendatusenigmatica:aluminum_ingot',
            storage_block: 'emendatusenigmatica:aluminum_block',
            nugget: 'emendatusenigmatica:aluminum_nugget',
            dust: 'emendatusenigmatica:aluminum_dust',
            gear: 'emendatusenigmatica:aluminum_gear',
            plate: 'emendatusenigmatica:aluminum_plate',
            rod: 'emendatusenigmatica:aluminum_rod'
        }, {
            name: 'silver',
            ingot: 'emendatusenigmatica:silver_ingot',
            storage_block: 'emendatusenigmatica:silver_block',
            nugget: 'emendatusenigmatica:silver_nugget',
            dust: 'emendatusenigmatica:silver_dust',
            gear: 'emendatusenigmatica:silver_gear',
            plate: 'emendatusenigmatica:silver_plate',
            rod: 'emendatusenigmatica:silver_rod'
        }, {
            name: 'lead',
            ingot: 'emendatusenigmatica:lead_ingot',
            storage_block: 'emendatusenigmatica:lead_block',
            nugget: 'emendatusenigmatica:lead_nugget',
            dust: 'emendatusenigmatica:lead_dust',
            gear: 'emendatusenigmatica:lead_gear',
            plate: 'emendatusenigmatica:lead_plate',
            rod: 'emendatusenigmatica:lead_rod'
        }, {
            name: 'nickel',
            ingot: 'emendatusenigmatica:nickel_ingot',
            storage_block: 'emendatusenigmatica:nickel_block',
            nugget: 'emendatusenigmatica:nickel_nugget',
            dust: 'emendatusenigmatica:nickel_dust',
            gear: 'emendatusenigmatica:nickel_gear',
            plate: 'emendatusenigmatica:nickel_plate',
            rod: 'emendatusenigmatica:nickel_rod'
        }, {
            name: 'uranium',
            ingot: 'emendatusenigmatica:uranium_ingot',
            storage_block: 'emendatusenigmatica:uranium_block',
            nugget: 'emendatusenigmatica:uranium_nugget',
            dust: 'emendatusenigmatica:uranium_dust',
            gear: 'emendatusenigmatica:uranium_gear',
            plate: 'emendatusenigmatica:uranium_plate',
            rod: 'emendatusenigmatica:uranium_rod'
        }, {
            name: 'osmium',
            ingot: 'emendatusenigmatica:osmium_ingot',
            storage_block: 'emendatusenigmatica:osmium_block',
            nugget: 'emendatusenigmatica:osmium_nugget',
            dust: 'emendatusenigmatica:osmium_dust',
            gear: 'emendatusenigmatica:osmium_gear',
            plate: 'emendatusenigmatica:osmium_plate',
            rod: 'emendatusenigmatica:osmium_rod'
        }, {
            name: 'tin',
            ingot: 'emendatusenigmatica:tin_ingot',
            storage_block: 'emendatusenigmatica:tin_block',
            nugget: 'emendatusenigmatica:tin_nugget',
            dust: 'emendatusenigmatica:tin_dust',
            gear: 'emendatusenigmatica:tin_gear',
            plate: 'emendatusenigmatica:tin_plate',
            rod: 'emendatusenigmatica:tin_rod'
        }, {
            name: 'zinc',
            ingot: 'emendatusenigmatica:zinc_ingot',
            storage_block: 'emendatusenigmatica:zinc_block',
            nugget: 'emendatusenigmatica:zinc_nugget',
            dust: 'emendatusenigmatica:zinc_dust',
            gear: 'emendatusenigmatica:zinc_gear',
            plate: 'emendatusenigmatica:zinc_plate',
            rod: 'emendatusenigmatica:zinc_rod'
        }, {
            name: 'cobalt',
            ingot: 'emendatusenigmatica:cobalt_ingot',
            storage_block: 'emendatusenigmatica:cobalt_block',
            nugget: 'emendatusenigmatica:cobalt_nugget',
            dust: 'emendatusenigmatica:cobalt_dust',
            gear: 'emendatusenigmatica:cobalt_gear',
            plate: 'emendatusenigmatica:cobalt_plate',
            rod: 'emendatusenigmatica:cobalt_rod'
        }, {
            name: 'bronze',
            ingot: 'emendatusenigmatica:bronze_ingot',
            storage_block: 'emendatusenigmatica:bronze_block',
            nugget: 'emendatusenigmatica:bronze_nugget',
            dust: 'emendatusenigmatica:bronze_dust',
            gear: 'emendatusenigmatica:bronze_gear',
            plate: 'emendatusenigmatica:bronze_plate',
            rod: 'emendatusenigmatica:bronze_rod'
        }, {
            name: 'brass',
            ingot: 'emendatusenigmatica:brass_ingot',
            storage_block: 'emendatusenigmatica:brass_block',
            nugget: 'emendatusenigmatica:brass_nugget',
            dust: 'emendatusenigmatica:brass_dust',
            gear: 'emendatusenigmatica:brass_gear',
            plate: 'emendatusenigmatica:brass_plate',
            rod: 'emendatusenigmatica:brass_rod'
        }, {
            name: 'constantan',
            ingot: 'emendatusenigmatica:constantan_ingot',
            storage_block: 'emendatusenigmatica:constantan_block',
            nugget: 'emendatusenigmatica:constantan_nugget',
            dust: 'emendatusenigmatica:constantan_dust',
            gear: 'emendatusenigmatica:constantan_gear',
            plate: 'emendatusenigmatica:constantan_plate',
            rod: 'emendatusenigmatica:constantan_rod'
        }, {
            name: 'electrum',
            ingot: 'emendatusenigmatica:electrum_ingot',
            storage_block: 'emendatusenigmatica:electrum_block',
            nugget: 'emendatusenigmatica:electrum_nugget',
            dust: 'emendatusenigmatica:electrum_dust',
            gear: 'emendatusenigmatica:electrum_gear',
            plate: 'emendatusenigmatica:electrum_plate',
            rod: 'emendatusenigmatica:electrum_rod'
        }, {
            name: 'steel',
            ingot: 'emendatusenigmatica:steel_ingot',
            storage_block: 'emendatusenigmatica:steel_block',
            nugget: 'emendatusenigmatica:steel_nugget',
            dust: 'emendatusenigmatica:steel_dust',
            gear: 'emendatusenigmatica:steel_gear',
            plate: 'emendatusenigmatica:steel_plate',
            rod: 'emendatusenigmatica:steel_rod'
        }, {
            name: 'invar',
            ingot: 'emendatusenigmatica:invar_ingot',
            storage_block: 'emendatusenigmatica:invar_block',
            nugget: 'emendatusenigmatica:invar_nugget',
            dust: 'emendatusenigmatica:invar_dust',
            gear: 'emendatusenigmatica:invar_gear',
            plate: 'emendatusenigmatica:invar_plate',
            rod: 'emendatusenigmatica:invar_rod'
        }, {
            name: 'signalum',
            ingot: 'emendatusenigmatica:signalum_ingot',
            storage_block: 'emendatusenigmatica:signalum_block',
            nugget: 'emendatusenigmatica:signalum_nugget',
            dust: 'emendatusenigmatica:signalum_dust',
            gear: 'emendatusenigmatica:signalum_gear',
            plate: 'emendatusenigmatica:signalum_plate',
            rod: 'emendatusenigmatica:signalum_rod'
        }, {
            name: 'lumium',
            ingot: 'emendatusenigmatica:lumium_ingot',
            storage_block: 'emendatusenigmatica:lumium_block',
            nugget: 'emendatusenigmatica:lumium_nugget',
            dust: 'emendatusenigmatica:lumium_dust',
            gear: 'emendatusenigmatica:lumium_gear',
            plate: 'emendatusenigmatica:lumium_plate',
            rod: 'emendatusenigmatica:lumium_rod'
        }, {
            name: 'enderium',
            ingot: 'emendatusenigmatica:enderium_ingot',
            storage_block: 'emendatusenigmatica:enderium_block',
            nugget: 'emendatusenigmatica:enderium_nugget',
            dust: 'emendatusenigmatica:enderium_dust',
            gear: 'emendatusenigmatica:enderium_gear',
            plate: 'emendatusenigmatica:enderium_plate',
            rod: 'emendatusenigmatica:enderium_rod'
        }, {
            name: 'gold',
            ingot: 'minecraft:gold_ingot',
            storage_block: 'minecraft:gold_block',
            nugget: 'minecraft:gold_nugget',
            dust: 'emendatusenigmatica:gold_dust',
            gear: 'emendatusenigmatica:gold_gear',
            plate: 'emendatusenigmatica:gold_plate',
            rod: 'emendatusenigmatica:gold_rod'
        }, {
            name: 'netherite',
            ingot: 'minecraft:netherite_ingot',
            storage_block: 'minecraft:netherite_block',
            nugget: 'createdeco:netherite_nugget',
            dust: 'thermal:netherite_dust',
            gear: 'thermal:netherite_gear',
            plate: 'createdeco:netherite_sheet'
        }
    ]

    // Iterates through the materials array
    materials.forEach(material => {
        // Iterates through every property of the object
        Object.keys(material).forEach(key => {
            if (key != 'name') {
                event.replaceOutput(`#forge:${key}s/${material.name}`, material[key])
                event.replaceInput(`#forge:${key}s/${material.name}`, `#forge:${key}s/${material.name}`)
            }
        })
    })

    // Materials with non-standard tags that won't work with the above code
    // Mana
    event.replaceInput('ars_nouveau:mana_gem_block', '#forge:storage_blocks/arcane')
    // Fluix
    event.replaceOutput('appliedenergistics2:fluix_block', '#forge:storage_blocks/fluix')
    event.replaceInput('appliedenergistics2:fluix_block', '#forge:storage_blocks/fluix')
    // Certus Quartz
    event.replaceOutput('appliedenergistics2:quartz_block', '#forge:storage_blocks/certus_quartz')
    event.replaceInput('appliedenergistics2:quartz_block', '#forge:storage_blocks/certus_quartz')
    // Bitumen
    event.replaceOutput('#forge:bitumen', 'emendatusenigmatica:bitumen_gem')
    event.replaceInput('#forge:bitumen', '#forge:bitumen')
    event.replaceInput('immersivepetroleum:bitumen', '#forge:bitumen')
    // Coal coke item (block and dust above)
    event.replaceOutput('#forge:coal_coke', 'emendatusenigmatica:coke_gem')
    event.replaceInput('#forge:coal_coke', '#forge:coal_coke')
    // Dimensional Shards
    event.replaceOutput('rftoolsbase:dimensionalshard', 'emendatusenigmatica:dimensional_gem')
    event.replaceInput('rftoolsbase:dimensionalshard', ['rftoolsbase:dimensionalshard', 'emendatusenigmatica:dimensional_gem'])
    // ENDER
    event.replaceOutput({}, '#forge:dusts/ender', 'emendatusenigmatica:ender_dust')
    event.replaceOutput({}, '#forge:dusts/ender_pearl', 'emendatusenigmatica:ender_dust')
    event.replaceOutput({}, 'appliedenergistics2:ender_dust', 'emendatusenigmatica:ender_dust')
    event.replaceOutput({}, 'thermal:ender_pearl_dust', 'emendatusenigmatica:ender_dust')
    // Slag
    event.replaceOutput('#forge:slag', 'thermal:slag')
    event.replaceInput('#forge:slag', '#forge:slag')
    // Silicon
    event.replaceOutput('#forge:silicon', 'emendatusenigmatica:silicon_gem')
    event.replaceInput('#forge:silicon', '#forge:silicon')
    // Flour
    event.replaceOutput('pneumaticcraft:wheat_flour', 'create:wheat_flour')
    event.replaceInput('pneumaticcraft:wheat_flour', 'create:wheat_flour')

    { // Replace CCA rolling recipes
        let additionsrecipes = [
            'createaddition:rolling/copper_ingot',
            'createaddition:rolling/brass_ingot',
            'createaddition:rolling/gold_ingot',
            'createaddition:rolling/iron_ingot',
            'createaddition:rolling/steel_ingot',
            'createaddition:rolling/copper_plate',
            'createaddition:rolling/aluminum_ingot'
        ]
        
        additionsrecipes.forEach(element => {
            event.remove({id: element})
        })

        let additionscustoms = [
            ['#forge:ingots/copper', 'emendatusenigmatica:copper_rod'],
            ['#forge:ingots/brass', 'emendatusenigmatica:brass_rod'],
            ['#forge:ingots/gold', 'emendatusenigmatica:gold_rod'],
            ['#forge:ingots/iron', 'emendatusenigmatica:iron_rod'],
            ['#forge:ingots/steel', 'emendatusenigmatica:steel_rod'],
            ['#forge:plates/copper', 'immersiveengineering:wire_copper'],
            ['#forge:ingots/aluminum', 'emendatusenigmatica:aluminum_rod']
        ]
        
        additionscustoms.forEach(element => {
            event.custom({
                "type": "createaddition:rolling",
                "input": element[0],
                "result": {
                    "item": element[1],
                    "count": 2
                }
            })
        })
    }
})