onEvent('recipes', (event) => {
    var data = {
        recipes_unheated: [
        //Immersive Engineering
            {
                inputs: [
                    '#forge:clay',
                    '#forge:gravel',
                    '#forge:sand',
                    '#forge:sand',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Fluid.of('immersiveengineering:concrete', 500)
            },
        //MNA
            {
                inputs: [
                    'mna:vinteum_dust',
                    'mna:arcane_ash',
                    '#mna:ma_flowers'
                ],
                output: Item.of('mna:purified_vinteum_dust', 2)
            },
            {
                inputs: [
                    'mna:vinteum_dust',
                    'mna:bone_ash',
                    '#mna:ma_flowers'
                ],
                output: Item.of('mna:arcane_compound', 2)
            },
        //Mystical Agriculture
            {
                inputs: [
                    'mysticalagriculture:soulium_dust',
                    'mysticalagriculture:soulium_dust',
                    'mysticalagriculture:soulium_dust'
                ],
                output: Item.of('mysticalagriculture:soulium_gemstone', 1)
            }
        ],
        recipes_heated: [
        //Building Gadgets
            /*{
                inputs: [
                    '#forge:dusts/lapis',
                    '#forge:sand',
                    '#forge:clay'
                ],
                output: Item.of('buildinggadgets:construction_block_powder', 1)
            },*/
        //Create
            {
                inputs: [
                    '#forge:gems/quartz',
                    '#forge:dusts/redstone'
                ],
                output: Item.of('create:rose_quartz', 1)
            },
        //Extended Crafting
            {
                inputs: [
                    'extendedcrafting:ultimate_component',
                    'extendedcrafting:ultimate_component',
                    'extendedcrafting:ultimate_component',
                    'extendedcrafting:ultimate_component',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:ultimate_catalyst', 1)
            },
            {
                inputs: [
                    '#forge:dusts/redstone',
                    '#forge:ingots/iron',
                ],
                output: Item.of('extendedcrafting:redstone_ingot', 1)
            },
        //Forbidden
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
            {
                inputs: ['#forge:dyes/green', '#forge:dusts/iron', '#forge:sand'],
                output: Item.of('immersiveengineering:insulating_glass', 2)
            },
        //Mna
            {
                inputs: ['#forge:ingots/iron', 'mna:vinteum_dust'],
                output: Item.of('mna:vinteum_coated_iron', 1)
            },
            {
                inputs: ['#forge:ingots/iron', 'mna:purified_vinteum_dust'],
                output: Item.of('mna:purified_vinteum_coated_iron', 1)
            },
        //Minecraft
            {
                inputs: ['#forge:ender_pearls', 'minecraft:blaze_powder'],
                output: Item.of('minecraft:ender_eye', 1)
            },
        //Mystical Agriculture
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
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:imperium_gemstone', 1)
            },
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
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:tertium_gemstone', 1)
            },
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
            {
                inputs: [
                    'mysticalagriculture:prosperity_ingot',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence'
                ],
                output: Item.of('mysticalagriculture:tertium_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prosperity_ingot',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence'
                ],
                output: Item.of('mysticalagriculture:imperium_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prosperity_ingot',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence'
                ],
                output: Item.of('mysticalagriculture:supremium_ingot', 1)
            },
        //Mystical Agradditions
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:imperium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'minecraft:coal'
                ],
                output: Item.of('mysticalagradditions:imperium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:prudentium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'minecraft:coal'
                ],
                output: Item.of('mysticalagradditions:prudentium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'minecraft:coal'
                ],
                output: Item.of('mysticalagradditions:supremium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:supremium_gemstone', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:tertium_apple', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'minecraft:coal'
                ],
                output: Item.of('mysticalagradditions:tertium_coal', 1)
            },
            {
                inputs: [
                    'mysticalagriculture:prosperity_ingot',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence'
                ],
                output: Item.of('mysticalagradditions:insanium_ingot', 1)
            },
            {
                inputs: [
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:insanium_apple', 1)
            },
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
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    '#minecraft:coals'
                ],
                output: Item.of('mysticalagradditions:insanium_coal', 1)
            },
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
                    'mysticalagradditions:insanium_essence',
                    'mysticalagradditions:insanium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagradditions:insanium_gemstone', 1)
            },
        //Waystones
            {
                inputs: ['#forge:ender_pearls', '#forge:dyes/purple'],
                output: Item.of('waystones:warp_dust', 4)
            }
        ],
        recipes_superheated: [
        //Ae2
            /*{
                inputs: [
                    '#ae2:crystals/nether',
                    '#forge:dusts/fluix',
                    'ae2:logic_processor'
                ],
                output: Item.of('ae2:annihilation_core', 1)
            },*/
            {
                inputs: [
                    '#forge:gems/certus_quartz',
                    '#forge:dusts/fluix',
                    'ae2:logic_processor'
                ],
                output: Item.of('ae2:formation_core', 1)
            },
        //Create,
            {
                inputs: [
                    '#forge:dusts/glowstone',
                    '#forge:dusts/glowstone',
                    '#forge:dusts/glowstone',
                    '#forge:dusts/obsidian',
                    '#forge:dusts/obsidian',
                    '#forge:dusts/obsidian',
                    'create:polished_rose_quartz'
                ],
                output: Item.of('create:chromatic_compound', 1)
            },
        //Extended Crafting
            {
                inputs: [
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget',
                    'extendedcrafting:black_iron_nugget'
                ],
                output: Item.of('extendedcrafting:black_iron_ingot', 3)
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
        //Gobber
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
                    '#forge:ingots/netherite'
                ],
                output: Item.of('gobber2:gobber2_ingot_nether', 2)
            },
        //Mystical Agriculture
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
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget',
                    'mysticalagriculture:inferium_nugget'
                ],
                output: Item.of('mysticalagriculture:inferium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    'mysticalagriculture:tertium_essence',
                    '#mysticalagriculture:infusion_crystals'
                ],
                output: Item.of('mysticalagriculture:imperium_essence', 2)
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
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot',
                    'mysticalagriculture:imperium_ingot'
                ],
                output: Item.of('mysticalagriculture:imperium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget',
                    'mysticalagriculture:prosperity_nugget'
                ],
                output: Item.of('mysticalagriculture:prosperity_ingot', 3)
            },
            {
                inputs: [
                    'mna:superheated_purified_vinteum_ingot',
                    'mysticalagriculture:prosperity_shard',
                    'mysticalagriculture:prosperity_shard'
                ],
                output: Item.of('mysticalagriculture:prosperity_ingot', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    'mysticalagriculture:inferium_essence',
                    '#mysticalagriculture:infusion_crystals'
                ],
                output: Item.of('mysticalagriculture:prudentium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prosperity_gemstone'
                ],
                output: Item.of('mysticalagriculture:prudentium_gemstone', 1)
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
            {
                inputs: [
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget',
                    'mysticalagriculture:prudentium_nugget'
                ],
                output: Item.of('mysticalagriculture:prudentium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    'mysticalagriculture:imperium_essence',
                    '#mysticalagriculture:infusion_crystals'
                ],
                output: Item.of('mysticalagriculture:supremium_essence', 2)
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
            {
                inputs: [
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget',
                    'mysticalagriculture:supremium_nugget'
                ],
                output: Item.of('mysticalagriculture:supremium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    'mysticalagriculture:prudentium_essence',
                    '#mysticalagriculture:infusion_crystals',
                    'mysticalagriculture:supremium_nugget'
                ],
                output: Item.of('mysticalagriculture:tertium_essence', 2)
            },
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
        //Mystical Agradditions
            {
                inputs: [
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget',
                    'mysticalagradditions:insanium_nugget'
                ],
                output: Item.of('mysticalagradditions:insanium_ingot', 3)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    '#mysticalagriculture:infusion_crystals'
                ],
                output: Item.of('mysticalagradditions:insanium_essence', 2)
            },
            {
                inputs: [
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'mysticalagriculture:supremium_essence',
                    'minecraft:golden_apple'
                ],
                output: Item.of('mysticalagradditions:supremium_apple', 1)
            },
        //MNA
            {
                inputs: ['#forge:ingots/iron', 'mna:vinteum_dust'],
                output: Item.of('mna:vinteum_coated_iron', 2)
            },
            {
                inputs: ['#forge:ingots/iron', 'mna:purified_vinteum_dust'],
                output: Item.of('mna:purified_vinteum_coated_iron', 2)
            },
            {
                inputs: [
                    'mna:vinteum_ingot',
                    'mna:purified_vinteum_dust'
                ],
                output: Item.of('mna:purified_vinteum_ingot', 1)
            },
        //Minecraft
            {
                inputs: [
                    'minecraft:netherite_scrap',
                    'minecraft:netherite_scrap',
                    'minecraft:netherite_scrap',
                    'minecraft:netherite_scrap',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold'
                ],
                output: Item.of('minecraft:netherite_ingot', 1)
            },
            {
                inputs: [
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron',
                    '#forge:nuggets/iron'
                ],
                output: Item.of('minecraft:iron_ingot', 3)
            },
            {
                inputs: [
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold',
                    '#forge:nuggets/gold'
                ],
                output: Item.of('minecraft:gold_ingot', 3)
            },
            //Refined Storage
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
                    '#forge:silicon',
                    'extendedcrafting:redstone_catalyst',
                    'refinedstorage:processor_binding',
                    'immersiveengineering:wirecoil_electrum'
                ],
                output: Item.of('refinedstorage:raw_improved_processor', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_ingot',
                    '#forge:silicon',
                    'extendedcrafting:redstone_catalyst',
                    'refinedstorage:processor_binding'
                ],
                output: Item.of('refinedstorage:raw_basic_processor', 1)
            },
            /*{
                inputs: [
                    '#forge:gears/diamond',
                    '#forge:silicon',
                    'extendedcrafting:redstone_catalyst',
                    'refinedstorage:processor_binding'
                ],
                output: Item.of('refinedstorage:raw_advanced_processor', 1)
            },*/
            {
                inputs: [
                    '#forge:silicon',
                    '#forge:silicon',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('refinedstorage:quartz_enriched_iron', 4)
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