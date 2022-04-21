onEvent('recipes', (event) => {
    var data = {
        recipes_unheated: [
            //Minecraft
            {
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
            }
        ],
        recipes_heated: [
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
                    '#forge:ingots/steel',
                    '#forge:ingots/steel',
                    '#forge:ingots/steel'
                ],
                output: Item.of('extendedcrafting:basic_component', 1)
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
            },
            //Immersive Engineering
            {
                inputs: [Fluid.of('immersiveengineering:concrete', 500)],
                output: 'immersiveengineering:slab_concrete'
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
            //Industrial Foregoing
            {
                inputs: ['minecraft:vine'],
                output: Fluid.of('industrialforegoing:latex', 50)
            },
            {
                inputs: ['minecraft:dandelion'],
                output: Fluid.of('industrialforegoing:latex', 50)
            },
            //Pneumaticcraft
            {
                inputs: [
                    'kubejs:compressed_iron_plate',
                    'minecraft:smooth_stone'
                ],
                output: Item.of('pneumaticcraft:reinforced_stone', 4)
            }
        ],
        recipes_superheated: [{
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
                    'extendedcrafting:basic_component',
                    'extendedcrafting:basic_component',
                    'extendedcrafting:redstone_component',
                    'extendedcrafting:redstone_component',
                    'extendedcrafting:ender_component',
                    'extendedcrafting:ender_component',
                    'extendedcrafting:enhanced_ender_component',
                    'extendedcrafting:enhanced_ender_component',
                    'extendedcrafting:crystaltine_component',
                    'extendedcrafting:crystaltine_component',
                    'extendedcrafting:ultimate_component',
                    'extendedcrafting:ultimate_component'
                ],
                output: Item.of('extendedcrafting:the_ultimate_component', 1)
            },
            {
                inputs: [
                    'extendedcrafting:basic_catalyst',
                    'extendedcrafting:basic_catalyst',
                    'extendedcrafting:redstone_catalyst',
                    'extendedcrafting:redstone_catalyst',
                    'extendedcrafting:ender_catalyst',
                    'extendedcrafting:ender_catalyst',
                    'extendedcrafting:enhanced_ender_catalyst',
                    'extendedcrafting:enhanced_ender_catalyst',
                    'extendedcrafting:crystaltine_catalyst',
                    'extendedcrafting:crystaltine_catalyst',
                    'extendedcrafting:ultimate_catalyst',
                    'extendedcrafting:ultimate_catalyst'
                ],
                output: Item.of('extendedcrafting:the_ultimate_catalyst', 1)
            },
            {
                inputs: [
                    '#forge:plates/steel',
                    'immersiveengineering:blastbrick'
                ],
                output: Item.of('immersiveengineering:blastbrick_reinforced', 2)
            }
        ]
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