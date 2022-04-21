onEvent('recipes', (event) => {
    data = {
        recipes: [
        //BloodMagic
            {
                inputs: ['#forge:crops/potato', '#forge:crops/potato', '#forge:crops/potato', '#forge:fertilizer'],
                output: 'bloodmagic:plantoil',
                count: 1,
                syphon: 100,
                ticks: 100,
                orbLevel: 1,
                id: 'plantoil_from_taters'
            },
            {
                inputs: ['#forge:crops/wheat', '#forge:crops/wheat', '#forge:crops/wheat', '#forge:fertilizer'],
                output: 'bloodmagic:plantoil',
                count: 1,
                syphon: 100,
                ticks: 100,
                orbLevel: 1,
                id: 'plantoil_from_wheat'
            },
        //Emendatus Enigmatica
            {
                inputs: ['minecraft:coal', 'minecraft:coal'],
                output: 'emendatusenigmatica:coal_dust',
                count: 2,
                syphon: 400,
                ticks: 200,
                orbLevel: 1,
                id: 'sand_coal'
            },
        //Minecraft
            {
                inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel'],
                output: 'minecraft:flint',
                count: 3,
                syphon: 50,
                ticks: 20,
                orbLevel: 0,
                id: 'flint_from_gravel'
            },
            {
                inputs: [
                    'minecraft:rotten_flesh',
                    'minecraft:rotten_flesh',
                    'minecraft:rotten_flesh',
                    'minecraft:rotten_flesh'
                ],
                output: 'minecraft:leather',
                count: 4,
                syphon: 100,
                ticks: 200,
                orbLevel: 1,
                id: 'leather_from_flesh'
            },
            {
                inputs: ['#forge:sand', '#forge:sand', '#forge:buckets/water'],
                output: 'minecraft:clay',
                count: 2,
                syphon: 50,
                ticks: 100,
                orbLevel: 2,
                id: 'clay_from_sand'
            },
            {
                inputs: ['#forge:rods/blaze'],
                output: 'minecraft:blaze_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: ['#forge:dirt', '#forge:fertilizer', '#forge:mushrooms'],
                output: 'minecraft:mycelium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['#forge:dirt', '#forge:fertilizer', '#minecraft:leaves'],
                output: 'minecraft:podzol',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel);
        if (recipe.id) {
            re.id(`bloodmagic:alchemytable/${recipe.id}`);
        }
    });
});