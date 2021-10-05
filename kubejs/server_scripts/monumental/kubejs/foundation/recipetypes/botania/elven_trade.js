onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ item: 'mysticalagriculture:dirt_essence' }],
            output: {
                item: 'byg:meadow_grass_block'
            }
        },
        {
            inputs: [{ item: 'doom:argent_energy' }, { tag: 'forge:ingots/netherite' }],
            output: {
                item: 'doom:argent_plate'
            }
        },
        {
            inputs: [{ item: 'minecraft:wooden_pickaxe' }, { tag: 'botania:livingwood' }],
            output: {
                item: 'aiotbotania:livingwood_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'botania:livingrock' }],
            output: {
                item: 'aiotbotania:livingrock_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/neptunium' }],
            output: {
                item: 'aquaculture:neptunium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:netherite_pickaxe' }, { tag: 'forge:ingots/neptunium' }],
            output: {
                item: 'aquaculture:neptunium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/manasteel' }],
            output: {
                item: 'botania:manasteel_pick'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/elementium' }],
            output: {
                item: 'botania:elementium_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { tag: 'forge:ingots/steel' }],
            output: {
                item: 'immersiveengineering:pickaxe_steel'
            }
        },
        {
            inputs: [{ item: 'minecraft:iron_pickaxe' }, { item: 'naturesaura:infused_iron' }],
            output: {
                item: 'naturesaura:infused_iron_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:diamond_pickaxe' }, { item: 'naturesaura:sky_ingot' }],
            output: {
                item: 'naturesaura:sky_pickaxe'
            }
        },
        {
            inputs: [{ item: 'minecraft:stone_pickaxe' }, { tag: 'forge:ingots/cloggrum' }],
            output: {
                item: 'undergarden:cloggrum_pickaxe'
            }
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:elven_trade',
            ingredients: recipe.inputs,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
