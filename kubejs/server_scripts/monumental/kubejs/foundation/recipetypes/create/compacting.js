onEvent('recipes', (event) => {
    var data = {
        recipes_unheated: [{
                inputs: [
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    {
                        fluidTag: 'minecraft:water',
                        amount: 250
                    }
                ],
                output: Item.of('minecraft:paper', 6)
            },
            {
                inputs: [Fluid.of('immersiveengineering:concrete', 500)],
                output: 'immersiveengineering:slab_concrete'
            }
        ],
        recipes_heated: [{
                inputs: ['minecraft:vine'],
                output: Fluid.of('industrialforegoing:latex', 50)
            },
            {
                inputs: ['minecraft:dandelion'],
                output: Fluid.of('industrialforegoing:latex', 50)
            },
            {
                inputs: ['#forge:sandstone', '#forge:sandstone', '#forge:sandstone', '#forge:sandstone', 'compressium:sand_2', '#engineersdecor:brick_blocks'],
                output: Item.of('immersiveengineering:alloybrick', 2)
            },
            {
                inputs: ['immersiveengineering:alloybrick', 'immersiveengineering:alloybrick', 'immersiveengineering:alloybrick', 'immersiveengineering:alloybrick', '#forge:sandstone', '#chipped:light_gray_concrete'],
                output: Item.of('immersiveengineering:cokebrick', 2)
            },
            {
                inputs: [
                    'immersiveengineering:cokebrick',
                    '#chipped:red_nether_bricks',
                    Fluid.of('cyclic:magma', 250)
                ],
                output: Item.of('immersiveengineering:blastbrick', 2)
            },
            {
                inputs: [
                    '#botania:livingrock',
                    'mana-and-artifice:vinteum_dust'
                ],
                output: Item.of('mana-and-artifice:stone_rune_blank', 2)
            },
            {
                inputs: [
                    'contenttweaker:compressed_plate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('pneumaticcraft:reinforced_stone', 4)
            },
            //Immersive
            {
                inputs: [
                    '#forge:plates/aluminum',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_aluminum', 2)
            },
            {
                inputs: [
                    'woot:black_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_black', 2)
            },
            {
                inputs: [
                    'woot:blue_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_blue', 2)
            },
            {
                inputs: [
                    'woot:brown_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_brown', 2)
            },
            {
                inputs: [
                    'woot:cyan_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_cyan', 2)
            },
            {
                inputs: [
                    'woot:gray_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_gray', 2)
            },
            {
                inputs: [
                    'woot:green_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_green', 2)
            },
            {
                inputs: [
                    'woot:light_blue_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_light_blue', 2)
            },
            {
                inputs: [
                    'woot:light_gray_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_light_gray', 2)
            },
            {
                inputs: [
                    'woot:yellow_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_yellow', 2)
            },
            {
                inputs: [
                    'woot:lime_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_lime', 2)
            },
            {
                inputs: [
                    'woot:magenta_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_magenta', 2)
            },
            {
                inputs: [
                    'woot:orange_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_orange', 2)
            },
            {
                inputs: [
                    'woot:pink_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_pink', 2)
            },
            {
                inputs: [
                    'woot:purple_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_purple', 2)
            },
            {
                inputs: [
                    'woot:red_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_red', 2)
            },
            {
                inputs: [
                    'woot:white_dyeplate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_colored_white', 2)
            },
            {
                inputs: [
                    '#forge:plates/uranium',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_uranium', 2)
            },
            {
                inputs: [
                    '#forge:plates/steel',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_steel', 2)
            },
            {
                inputs: [
                    '#forge:plates/silver',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_silver', 2)
            },
            {
                inputs: [
                    '#forge:plates/nickel',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_nickel', 2)
            },
            {
                inputs: [
                    '#forge:plates/nickel',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_lead', 2)
            },
            {
                inputs: [
                    '#forge:plates/iron',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_iron', 2)
            },
            {
                inputs: [
                    '#forge:plates/gold',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_gold', 2)
            },
            {
                inputs: [
                    '#forge:plates/electrum',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_electrum', 2)
            },
            {
                inputs: [
                    '#forge:plates/copper',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_copper', 2)
            },
            {
                inputs: [
                    '#forge:plates/constantan',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('immersiveengineering:sheetmetal_constantan', 2)
            },

            //Extended Crafting
            {
                inputs: [
                    'extendedcrafting:advanced_component',
                    'extendedcrafting:advanced_component',
                    'extendedcrafting:advanced_component',
                    'extendedcrafting:advanced_component',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:advanced_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:enhanced_ender_component',
                    'extendedcrafting:enhanced_ender_component',
                    'extendedcrafting:enhanced_ender_component',
                    'extendedcrafting:enhanced_ender_component',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:enhanced_ender_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:crystaltine_component',
                    'extendedcrafting:crystaltine_component',
                    'extendedcrafting:crystaltine_component',
                    'extendedcrafting:crystaltine_component',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:crystaltine_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:ender_component',
                    'extendedcrafting:ender_component',
                    'extendedcrafting:ender_component',
                    'extendedcrafting:ender_component',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:ender_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold',
                    '#forge:ingots/gold'
                ],
                output: Item.of('extendedcrafting:advanced_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    'extendedcrafting:ender_ingot',
                    'extendedcrafting:ender_ingot',
                    'extendedcrafting:ender_ingot'
                ],
                output: Item.of('extendedcrafting:ender_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    'extendedcrafting:enhanced_ender_ingot',
                    'extendedcrafting:enhanced_ender_ingot',
                    'extendedcrafting:enhanced_ender_ingot'

                ],
                output: Item.of('extendedcrafting:enhanced_ender_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    'extendedcrafting:crystaltine_ingot',
                    'extendedcrafting:crystaltine_ingot',
                    'extendedcrafting:crystaltine_ingot'
                ],
                output: Item.of('extendedcrafting:crystaltine_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:basic_component',
                    'extendedcrafting:basic_component',
                    'extendedcrafting:basic_component',
                    'extendedcrafting:basic_component',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:basic_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    '#forge:gems/emerald',
                    '#forge:gems/emerald',
                    '#forge:gems/emerald'
                ],
                output: Item.of('extendedcrafting:ultimate_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    '#forge:ingots/steel',
                    '#forge:ingots/steel',
                    '#forge:ingots/steel'
                ],
                output: Item.of('extendedcrafting:basic_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:elite_component',
                    'extendedcrafting:elite_component',
                    'extendedcrafting:elite_component',
                    'extendedcrafting:elite_component',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:elite_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    '#forge:gems/mana_diamond',
                    '#forge:gems/mana_diamond',
                    '#forge:gems/mana_diamond'
                ],
                output: Item.of('extendedcrafting:elite_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:redstone_component',
                    'extendedcrafting:redstone_component',
                    'extendedcrafting:redstone_component',
                    'extendedcrafting:redstone_component',
                    'extendedcrafting:black_iron_ingot',
                    'extendedcrafting:black_iron_ingot'
                ],
                output: Item.of('extendedcrafting:redstone_catalyst', 1)
            },
            {
                inputs: [
                    'extendedcrafting:black_iron_slate',
                    'extendedcrafting:luminessence',
                    'extendedcrafting:redstone_ingot',
                    'extendedcrafting:redstone_ingot',
                    'extendedcrafting:redstone_ingot'
                ],
                output: Item.of('extendedcrafting:redstone_component', 1)
            }
        ],
        recipes_superheated: [{
            inputs: [
                '#forge:plates/steel',
                'immersiveengineering:blastbrick'
            ],
            output: Item.of('immersiveengineering:blastbrick_reinforced', 2)
        }]
    };

    data.recipes_unheated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs);
    });
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs).superheated();
    });
});