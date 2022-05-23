onEvent('recipes', (event) => {
    var data = {
        recipes_unheated: [{
                inputs: [
                    '#forge:clay',
                    '#forge:gravel',
                    '#forge:sand',
                    '#forge:sand',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Fluid.of('immersiveengineering:concrete', 500)
            },
            {
                inputs: [
                    '#forge:clay',
                    '#forge:gravel',
                    '#forge:slag',
                    '#forge:slag',
                    Fluid.of('minecraft:water', 750)
                ],
                output: Fluid.of('immersiveengineering:concrete', 750)
            },
        ],
        recipes_heated: [
        //Astral
            {
                inputs: [
                    '#forge:dusts/iron',
                    Fluid.of('astralsorcery:liquid_starlight', 750)
                ],
                output: Item.of('astralsorcery:stardust', 2)
            },
        //Ae2
            {
                inputs: ['#thermal:glass/hardened', '#forge:dusts/quartz', '#forge:dusts/certus_quartz', 'computercraft:cable'],
                output: Item.of('appliedenergistics2:quartz_fiber', 2)
            },
            {
                inputs: [
                    'thermal:obsidian_glass',
                    '#forge:dusts/certus_quartz',
                    '#forge:dusts/quartz'
                ],
                output: Item.of('appliedenergistics2:quartz_glass', 2)
            },
            {
                inputs: [
                    '#forge:ingots/refined_glowstone',
                    'appliedenergistics2:quartz_glass'
                ],
                output: Item.of('appliedenergistics2:quartz_vibrant_glass', 2)
            },
        //Building Gadgets
            {
                inputs: [
                    '#forge:dusts/lapis',
                    '#forge:sand',
                    '#forge:clay'
                ],
                output: Item.of('buildinggadgets:construction_block_powder', 1)
            },
        //Create
            {
                inputs: [
                    '#forge:gems/quartz',
                    '#forge:dusts/redstone'
                ],
                output: Item.of('create:rose_quartz', 1)
            },
        //Emendatus Enigmatica
            {
                inputs: [
                    '#forge:charcoal',
                    '#forge:dusts/iron'
                ],
                output: Item.of('emendatusenigmatica:steel_ingot', 1)
            },
        //Eidolon
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
                output: Item.of('eidolon:pewter_ingot', 2)
            },
        //Extended Crafting
            {
                inputs: [
                    '#forge:ingots/compressed_iron',
                    '#forge:dyes/black'
                ],
                output: Item.of('extendedcrafting:black_iron_ingot', 1)
            },
            {
                inputs: [
                    '#forge:ingots/enderium',
                    '#forge:ingots/compressed_iron'
                ],
                output: Item.of('extendedcrafting:ender_ingot', 1)
            },
            {
                inputs: [
                    '#forge:dusts/redstone',
                    '#forge:ingots/iron',
                ],
                output: Item.of('extendedcrafting:redstone_ingot', 1)
            },
        //Flux Networks
            {
                inputs: [
                    '#forge:dusts/redstone',
                    '#forge:dusts/obsidian'
                ],
                output: Item.of('fluxnetworks:flux_dust', 1)
            },
        //Forbidden Arcanus
            {
                inputs: [
                    'forbidden_arcanus:mundabitur_dust',
                    '#forge:ingots/gold',
                    '#forge:charcoal',
                    '#forge:charcoal',
                    '#forge:charcoal',
                    'forbidden_arcanus:mundabitur_dust',
                    '#forge:dusts/arcane_crystal',
                    '#forge:charcoal'
                ],
                output: Item.of('forbidden_arcanus:arcane_gold_ingot', 1)
            },
            {
                inputs: [
                    '#forge:crops/nether_wart',
                    '#forge:dusts/arcane_crystal',
                    '#forge:nuggets/ender_pearl',
                    '#forge:ingots/obsidian',
                    'minecraft:blaze_powder'
                ],
                output: Item.of('forbidden_arcanus:corrupti_dust', 4)
            },
            {
                inputs: [
                    'minecraft:bone_meal',
                    'minecraft:phantom_membrane',
                    '#forge:gunpowder',
                    '#forge:dusts/arcane_crystal',
                    '#forge:dusts/redstone',
                    'minecraft:blaze_powder'
                ],
                output: Item.of('forbidden_arcanus:mundabitur_dust', 4)
            },
            {
                inputs: [
                    '#forge:obsidian',
                    'create:andesite_alloy',
                ],
                output: Item.of('forbidden_arcanus:obsidian_ingot', 1)
            },
        //Greater Eye
            {
                inputs: ['minecraft:ender_eye', '#forge:gems/diamond', '#forge:gems/emerald'],
                output: Item.of('greater_eye:greater_eye', 1)
            },
            {
                inputs: ['greater_eye:greater_eye', 'minecraft:chorus_fruit'],
                output: Item.of('greater_eye:greater_eye_end', 1)
            },
            {
                inputs: ['greater_eye:greater_eye', '#forge:gems/quartz'],
                output: Item.of('greater_eye:greater_eye_nether', 1)
            },
        //Immersive Engineering
            {
                inputs: [
                    'minecraft:light_gray_concrete_powder',
                    'buildinggadgets:construction_block_powder',
                    Fluid.of('minecraft:water', 250)
                ],
                output: Item.of('immersiveengineering:concrete', 1)
            },
            {
                inputs: ['#forge:dyes/green', '#forge:dusts/iron', '#forge:sand'],
                output: Item.of('immersiveengineering:insulating_glass', 2)
            },
            {
                inputs: [
                    '#minecraft:planks',
                    '#minecraft:planks',
                    '#minecraft:planks',
                    '#minecraft:planks',
                    {
                        fluidTag: 'forge:creosote',
                        amount: 500
                    }
                ],
                output: Item.of('immersiveengineering:treated_wood_horizontal', 4)
            },
        //Immersive Petroleum
            {
                inputs: [
                    '#forge:gems/bitumen',
                    '#forge:gravel',
                    '#forge:sand',
                    '#forge:sand',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Item.of('immersivepetroleum:asphalt', 12)
            },
        //Iron Coals
            {
                inputs: ['#forge:gems/emerald', 'ironcoals:diamond_coal'],
                output: Item.of('ironcoals:emerald_coal', 2)
            },
            {
                inputs: ['#forge:gems/diamond', 'ironcoals:gold_coal'],
                output: Item.of('ironcoals:diamond_coal', 2)
            },
            {
                inputs: ['#forge:ingots/gold', 'ironcoals:iron_coal'],
                output: Item.of('ironcoals:gold_coal', 2)
            },
            {
                inputs: ['#forge:ingots/iron', 'minecraft:coal'],
                output: Item.of('ironcoals:iron_coal', 2)
            },
        //Mystical Agriculture
            {
                inputs: [
                    'mysticalagriculture:prosperity_shard',
                    'mysticalagriculture:prosperity_shard',
                    '#forge:gems/diamond'
                ],
                output: Item.of('mysticalagriculture:prosperity_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:soulium_dust',
                    'mysticalagriculture:soulium_dust',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:soulium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:inferium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:prudentium_gemstone', 1)
            },
        //Mystical Agradditions
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    '#minecraft:coals'
                ],
                output: Item.of('mysticalagradditions:inferium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagradditions:inferium_coal'
                ],
                output: Item.of('mysticalagradditions:prudentium_coal', 1)
            },
        //Mystical Ingot
            {
                inputs: [
                    'mysticalagriculture:prosperity_ingot',
                    'mysticalagriculture:soulium_dust',
                    'mysticalagriculture:soulium_dust'
                ],
                output: Item.of('mysticalagriculture:soulium_ingot', 1)
            },
            {
                inputs: [
                    'forbidden_arcanus:purifying_soap',
                    'mysticalagriculture:prosperity_shard',
                    'mysticalagriculture:prosperity_shard'
                ],
                output: Item.of('mysticalagriculture:prosperity_ingot', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:prosperity_ingot',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence'
                ],
                output: Item.of('mysticalagriculture:inferium_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prosperity_ingot',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence'
                ],
                output: Item.of('mysticalagriculture:prudentium_ingot', 1)
            },
            //Mystical Watering Can
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:inferium_ingot',
                    'mysticalagriculture:inferium_ingot',
                    'mysticalagriculture:inferium_ingot',
                    'mysticalagriculture:inferium_ingot',
                    'mysticalagriculture:watering_can'
                ],
                output: Item.of('mysticalagriculture:inferium_watering_can', 1)
            }, 
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:inferium_watering_can'
                ],
                output: Item.of('mysticalagriculture:prudentium_watering_can', 1)
            },
            //Mystical Apples
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:inferium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagradditions:inferium_apple'
                ],
                output: Item.of('mysticalagradditions:prudentium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagradditions:prudentium_apple'
                ],
                output: Item.of('mysticalagradditions:tertium_apple', 1)
            },
            //Mystical Farmland
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    '#forge:hoes',
                    '#forge:dirt'
                ],
                output: Item.of('mysticalagriculture:inferium_farmland', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    '#forge:hoes',
                    'mysticalagriculture:inferium_farmland'
                ],
                output: Item.of('mysticalagriculture:prudentium_farmland', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    '#forge:hoes',
                    'mysticalagriculture:prudentium_farmland'
                ],
                output: Item.of('mysticalagriculture:tertium_farmland', 2)
            },
            //Mystical Essence
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'matc:inferium_crystal'
                ],
                output: Item.of('mysticalagriculture:prudentium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'matc:prudentium_crystal',
                ],
                output: Item.of('mysticalagriculture:tertium_essence', 2)
            },
        //Minecraft
            {
                inputs: ['#forge:ender_pearls', '#forge:dusts/blaze'],
                output: Item.of('minecraft:ender_eye', 1)
            },
        //Thermal
            {
                inputs: [
                    Fluid.of('industrialforegoing:latex_fluid', 100),
                    '#forge:slimeballs'
                ],
                output: Item.of('thermal:rubber', 1)
            },
        //Waystones
            {
                inputs: ['#forge:ender_pearls', '#forge:dyes/purple'],
                output: Item.of('waystones:warp_dust', 4)
            }
        ],
        recipes_superheated: [
            {
                inputs: [
                    '#forge:gems/quartz',
                    '#forge:dusts/fluix',
                    'appliedenergistics2:logic_processor'
                ],
                output: Item.of('appliedenergistics2:annihilation_core', 1)
            },
            {
                inputs: [
                    '#forge:gems/certus_quartz',
                    '#forge:dusts/fluix',
                    'appliedenergistics2:logic_processor'
                ],
                output: Item.of('appliedenergistics2:formation_core', 1)
            },
        //Extended Crafting
            {
                inputs: [
                    '#forge:ingots/enderium',
                    '#forge:ingots/enderium',
                    '#forge:ingots/enderium',
                    '#forge:ingots/enderium',
                    'extendedcrafting:ender_star'
                ],
                output: Item.of('extendedcrafting:enhanced_ender_ingot', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:redstone_ingot',
                    'extendedcrafting:redstone_ingot',
                    'extendedcrafting:redstone_ingot',
                    'extendedcrafting:redstone_ingot',
                    'extendedcrafting:ender_ingot',
                    'extendedcrafting:ender_ingot',
                    'extendedcrafting:ender_ingot',
                    'extendedcrafting:ender_ingot',
                    'extendedcrafting:enhanced_ender_ingot',
                    'extendedcrafting:enhanced_ender_ingot',
                    'extendedcrafting:enhanced_ender_ingot',
                    'extendedcrafting:enhanced_ender_ingot',
                    'extendedcrafting:crystaltine_ingot',
                    'extendedcrafting:crystaltine_ingot',
                    'extendedcrafting:crystaltine_ingot',
                    'extendedcrafting:crystaltine_ingot'
                ],
                output: Item.of('extendedcrafting:the_ultimate_ingot', 1)
            },
        //Forbidden Arcanus
            {
                inputs: [
                    '#forge:dusts/prismarine',
                    '#forge:gems/prismarine',
                    '#forge:dusts/arcane_crystal',
                    'forbidden_arcanus:dragon_scale'
                ],
                output: Item.of('forbidden_arcanus:aquatic_dragon_scale', 1)
            },
            {
                inputs: [
                    '#forge:dusts/arcane_crystal',
                    '#forge:dusts/arcane_crystal',
                    '#forge:dusts/arcane_crystal',
                    '#forge:dusts/arcane_crystal',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold',
                    'forbidden_arcanus:dragon_scale'
                ],
                output: Item.of('forbidden_arcanus:golden_dragon_scale', 1)
            },
            {
                inputs: [
                    '#forge:slimeballs',
                    '#forge:gems/prismarine',
                    '#minecraft:small_flowers',
                    '#forge:dusts/arcane_crystal',
                    'forbidden_arcanus:wax'
                ],
                output: Item.of('forbidden_arcanus:purifying_soap', 1)
            },
            {
                inputs: [
                    '#forge:dusts/arcane_crystal',
                    '#forge:dusts/arcane_crystal',
                    '#forge:dusts/arcane_crystal',
                    '#forge:dusts/arcane_crystal',
                    '#forge:ingots/silver',
                    '#forge:ingots/silver',
                    '#forge:ingots/silver',
                    'forbidden_arcanus:dragon_scale'
                ],
                output: Item.of('forbidden_arcanus:silver_dragon_scale', 1)
            },
        //Gobber2
            {
                inputs: [
                    'forbidden_arcanus:purifying_soap',
                    'astralsorcery:starmetal_ingot',
                    'doom:argent_energy',
                    'gobber2:gobber2_glob'
                ],
                output: Item.of('gobber2:gobber2_ingot', 2)
            },
            {
                inputs: [
                    'gobber2:gobber2_glob_end',
                    'gobber2:gobber2_ingot_nether',
                    'gobber2:gobber2_ingot_nether',
                    'minecraft:chorus_flower'
                ],
                output: Item.of('gobber2:gobber2_ingot_end', 2)
            },
            {
                inputs: [
                    'gobber2:gobber2_glob_nether',
                    'gobber2:gobber2_ingot',
                    'gobber2:gobber2_ingot',
                    '#forge:ingots/netherite_scrap'
                ],
                output: Item.of('gobber2:gobber2_ingot_nether', 2)
            },
        //Mystical Ingot
            {
                inputs: [
                    'mysticalagriculture:prudentium_ingot',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence'
                ],
                output: Item.of('mysticalagriculture:tertium_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence'
                ],
                output: Item.of('mysticalagriculture:imperium_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence'
                ],
                output: Item.of('mysticalagriculture:supremium_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence'
                ],
                output: Item.of('mysticalagradditions:insanium_ingot', 1)
            },
        //Mystical Apples
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagradditions:tertium_apple'
                ],
                output: Item.of('mysticalagradditions:imperium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagradditions:imperium_apple'
                ],
                output: Item.of('mysticalagradditions:supremium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:supremium_apple'
                ],
                output: Item.of('mysticalagradditions:insanium_apple', 1)
            },
        //Mystical Gemstone
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:prudentium_gemstone'
                ],
                output: Item.of('mysticalagriculture:tertium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:tertium_gemstone'
                ],
                output: Item.of('mysticalagriculture:imperium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:imperium_gemstone'
                ],
                output: Item.of('mysticalagriculture:supremium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagriculture:supremium_gemstone'
                ],
                output: Item.of('mysticalagradditions:insanium_gemstone', 1)
            },
        //Mystical Coals
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagradditions:prudentium_coal'
                ],
                output: Item.of('mysticalagradditions:tertium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagradditions:tertium_coal'
                ],
                output: Item.of('mysticalagradditions:imperium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagradditions:imperium_coal'
                ],
                output: Item.of('mysticalagradditions:supremium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:supremium_coal'
                ],
                output: Item.of('mysticalagradditions:insanium_coal', 1)
            },
            //Mystical Watering Can
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:tertium_ingot',
                    'mysticalagriculture:prudentium_watering_can'
                ],
                output: Item.of('mysticalagriculture:tertium_watering_can', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:tertium_watering_can'
                ],
                output: Item.of('mysticalagriculture:imperium_watering_can', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:mystical_fertilizer',
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagriculture:supremium_ingot',
                    'mysticalagriculture:imperium_watering_can'
                ],
                output: Item.of('mysticalagriculture:supremium_watering_can', 1)
            },
            //Mystical Farmland
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    '#forge:hoes',
                    '#forge:dirt'
                ],
                output: Item.of('mysticalagriculture:imperium_farmland', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    '#forge:hoes',
                    'mysticalagriculture:imperium_farmland'
                ],
                output: Item.of('mysticalagriculture:supremium_farmland', 2)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    '#forge:hoes',
                    'mysticalagriculture:supremium_farmland'
                ],
                output: Item.of('mysticalagradditions:insanium_farmland', 2)
            },
            //Mystical Essence
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'matc:tertium_crystal'
                ],
                output: Item.of('mysticalagriculture:imperium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'matc:imperium_crystal'
                ],
                output: Item.of('mysticalagriculture:supremium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'matc:supremium_crystal'
                ],
                output: Item.of('mysticalagradditions:insanium_essence', 2)
            },
            //Refined Storage
            {
                inputs: [
                    '#forge:gems/silicon',
                    '#forge:gems/silicon',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('refinedstorage:quartz_enriched_iron', 4)
            },
            {
                inputs: [
                    'immersiveengineering:hemp_fiber',
                    'immersiveengineering:hemp_fiber',
                    'bloodmagic:reagentbinding',
                    'mysticalagriculture:pink_slime_essence',
                    'mysticalagriculture:pink_slime_essence'
                ],
                output: Item.of('refinedstorage:processor_binding', 1)
            },
            {
                inputs: [
                    'refinedstorage:basic_processor',
                    '#forge:gems/quartz'
                ],
                output: Item.of('refinedstorage:destruction_core', 1)
            },
            {
                inputs: [
                    'immersiveengineering:wirecoil_electrum',
                    '#forge:gems/silicon',
                    'extendedcrafting:redstone_catalyst',
                    'refinedstorage:processor_binding',
                    'immersiveengineering:wirecoil_electrum'
                ],
                output: Item.of('refinedstorage:raw_improved_processor', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_ingot',
                    '#forge:gems/silicon',
                    'extendedcrafting:redstone_catalyst',
                    'refinedstorage:processor_binding'
                ],
                output: Item.of('refinedstorage:raw_basic_processor', 1)
            },
            {
                inputs: [
                    '#forge:gears/diamond',
                    '#forge:gems/silicon',
                    'extendedcrafting:redstone_catalyst',
                    'refinedstorage:processor_binding'
                ],
                output: Item.of('refinedstorage:raw_advanced_processor', 1)
            },
            //Thermal
            {
                inputs: [
                    'thermal:obsidian_glass',
                    'thermal:obsidian_glass',
                    '#forge:ingots/enderium'
                ],
                output: Item.of('thermal:enderium_glass', 2)
            },
            {
                inputs: [
                    'thermal:obsidian_glass',
                    'thermal:obsidian_glass',
                    '#forge:ingots/lumium'
                ],
                output: Item.of('thermal:lumium_glass', 2)
            },
            {
                inputs: [
                    'thermal:obsidian_glass',
                    'thermal:obsidian_glass',
                    '#forge:ingots/signalum'
                ],
                output: Item.of('thermal:signalum_glass', 2)
            },
            {
                inputs: [
                    'immersiveengineering:insulating_glass',
                    'create:polished_rose_quartz',
                    '#forge:ingots/obsidian'
                ],
                output: Item.of('thermal:obsidian_glass', 1)
            }
        ]
    };

    data.recipes_unheated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs);
    });
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).superheated();
    });
});