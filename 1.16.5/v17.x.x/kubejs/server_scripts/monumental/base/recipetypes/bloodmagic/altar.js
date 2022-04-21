onEvent('recipes', (event) => {
    data = {
        recipes: [
        //Ae2
            {
                input: 'emendatusenigmatica:certus_quartz_gem',
                output: 'emendatusenigmatica:charged_certus_quartz_gem',
                syphon: 500,
                altarLevel: 0,
                consumptionRate: 5,
                drainRate: 1
            },
        //Blood Magic
            {
                input: 'psi:psidust_block',
                output: 'bloodmagic:apprenticebloodorb',
                syphon: 5000,
                altarLevel: 1,
                consumptionRate: 5,
                drainRate: 5
            },
            {
                input: 'occultism:spirit_attuned_gem',
                output: 'bloodmagic:weakbloodorb',
                syphon: 2000,
                altarLevel: 0,
                consumptionRate: 5,
                drainRate: 1
            },
            {
                input: 'bloodmagic:sacrificialdagger',
                output: 'bloodmagic:daggerofsacrifice',
                syphon: 2500,
                altarLevel: 1,
                consumptionRate: 5,
                drainRate: 5
            },
            {
                input: '#forge:storage_blocks/ivory_psimetal',
                output: 'bloodmagic:magicianbloodorb',
                syphon: 25000,
                altarLevel: 2,
                consumptionRate: 20,
                drainRate: 20
            },
            {
                input: 'quark:white_rune',
                output: 'bloodmagic:blankslate',
                syphon: 1000,
                altarLevel: 0,
                consumptionRate: 5,
                drainRate: 5
            },
            {
                input: 'botania:mana_string',
                output: 'bloodmagic:soulsnare',
                syphon: 500,
                altarLevel: 0,
                consumptionRate: 5,
                drainRate: 1
            },
        //Forbidden
            {
                input: 'forbidden_arcanus:arcane_crystal_block',
                output: 'naturesaura:infused_stone',
                syphon: 25000,
                altarLevel: 2,
                consumptionRate: 20,
                drainRate: 20
            },
        //Immersive Engineering
            {
                input: '#forge:dusts/coke',
                output: 'immersiveengineering:dust_hop_graphite',
                syphon: 2500,
                altarLevel: 0,
                consumptionRate: 150,
                drainRate: 150
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});