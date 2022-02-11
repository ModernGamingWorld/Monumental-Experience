onEvent('recipes', (event) => {
    var data = {
        recipes: [
        //Atum
            /*{
                input: 'atum:emmer',
                outputs: [Item.of('atum:emmer_flour', 1), Item.of('atum:emmer_flour', 2).withChance(0.25), Item.of('atum:emmer_seeds').withChance(0.25)],
                processingTime: 150
            },
        //Astral Sorcery
            {
                input: 'astralsorcery:starmetal_ingot',
                outputs: [Item.of('astralsorcery:stardust', 1)],
                processingTime: 250
            },*/
        //Big Reactors
            {
                input: '#forge:ingots/graphite',
                outputs: [Item.of('bigreactors:graphite_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ingots/cyanite',
                outputs: [Item.of('bigreactors:cyanite_dust', 1)],
                processingTime: 200
            },
            {
                input: 'forbidden_arcanus:arcane_crystal',
                outputs: [Item.of('forbidden_arcanus:arcane_crystal_dust', 1)],
                processingTime: 200
            },
        //Minecraft
            {
                input: 'minecraft:red_sandstone',
                outputs: [Item.of('minecraft:red_sand', 1)],
                processingTime: 200
            },
            /*{
                input: 'botania:pink_mystical_flower',
                outputs: [Item.of('minecraft:pink_dye', 2)],
                processingTime: 200
            },
            {
                input: 'botania:pink_shiny_flower',
                outputs: [Item.of('minecraft:pink_dye', 2)],
                processingTime: 200
            },
            {
                input: '#forge:ingots/netherite',
                outputs: [Item.of('mekanism:dust_netherite', 1)],
                processingTime: 400
            },*/
            {
                input: 'minecraft:ancient_debris',
                outputs: ['minecraft:netherite_scrap', Item.of('minecraft:ancient_debris', 1).withChance(0.66)],
                processingTime: 200
            },
            {
                input: '#forge:end_stones',
                outputs: [Item.of('occultism:crushed_end_stone', 4)],
                processingTime: 150
            },
        //PSI
            /*{
                input: '#forge:dusts/redstone',
                outputs: ['psi:psidust'],
                processingTime: 200
            },
        //Thermal
            {
                input: 'thermal:sawdust_block',
                outputs: ['mysticalagriculture:wood_essence', Item.of('emendatusenigmatica:wood_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:gems/apatite',
                outputs: [Item.of('thermal:apatite_dust', 1)],
                processingTime: 200
            },
            {
                input: 'thermal:blizz_rod',
                outputs: ['minecraft:snowball', Item.of('thermal:blizz_powder', 1)],
                processingTime: 200
            },
            {
                input: '#forge:gems/cinnabar',
                outputs: [Item.of('thermal:cinnabar_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:ender_pearls',
                outputs: [Item.of('thermal:ender_pearl_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:gems/niter',
                outputs: [Item.of('thermal:niter_dust', 1)],
                processingTime: 200
            },
            {
                input: '#forge:gems/sulfur',
                outputs: [Item.of('thermal:sulfur_dust', 1)],
                processingTime: 200
            },
        //xreliquary
            {
                input: 'minecraft:creeper_head',
                outputs: ['xreliquary:catalyzing_gland'],
                processingTime: 200
            },
            {
                input: 'minecraft:magma_block',
                outputs: ['xreliquary:molten_core'],
                processingTime: 200
            },
            {
                input: 'minecraft:dragon_head',
                outputs: ['xreliquary:nebulous_heart'],
                processingTime: 200
            },
            {
                input: 'minecraft:skeleton_skull',
                outputs: ['xreliquary:rib_bone'],
                processingTime: 200
            },
            {
                input: '#quark:slime_blocks',
                outputs: ['xreliquary:slime_pearl'],
                processingTime: 200
            }*/
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime);
    });
});