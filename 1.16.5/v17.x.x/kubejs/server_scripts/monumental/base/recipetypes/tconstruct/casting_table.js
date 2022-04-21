onEvent('recipes', (event) => {
    const recipes = [
    //Lumium
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lumium',
                amount: 144
            },
            result: 'emendatusenigmatica:lumium_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lumium',
                amount: 144
            },
            result: 'emendatusenigmatica:lumium_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lumium',
                amount: 144
            },
            result: 'emendatusenigmatica:lumium_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lumium',
                amount: 144
            },
            result: 'emendatusenigmatica:lumium_gear',
            cooling_time: 57
        },
    //Copper
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_copper',
                amount: 144
            },
            result: 'emendatusenigmatica:copper_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_copper',
                amount: 144
            },
            result: 'emendatusenigmatica:copper_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_copper',
                amount: 144
            },
            result: 'emendatusenigmatica:copper_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_copper',
                amount: 144
            },
            result: 'emendatusenigmatica:copper_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_copper',
                amount: 144
            },
            result: 'emendatusenigmatica:copper_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_copper',
                amount: 144
            },
            result: 'emendatusenigmatica:copper_gear',
            cooling_time: 57
        },
    //Gold
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_gold',
                amount: 144
            },
            result: 'emendatusenigmatica:gold_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_gold',
                amount: 144
            },
            result: 'emendatusenigmatica:gold_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_gold',
                amount: 144
            },
            result: 'emendatusenigmatica:gold_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_gold',
                amount: 144
            },
            result: 'emendatusenigmatica:gold_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_gold',
                amount: 144
            },
            result: 'emendatusenigmatica:gold_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_gold',
                amount: 144
            },
            result: 'emendatusenigmatica:gold_gear',
            cooling_time: 57
        },
    //Iron
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_iron',
                amount: 144
            },
            result: 'emendatusenigmatica:iron_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_iron',
                amount: 144
            },
            result: 'emendatusenigmatica:iron_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_iron',
                amount: 144
            },
            result: 'emendatusenigmatica:iron_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_iron',
                amount: 144
            },
            result: 'emendatusenigmatica:iron_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_iron',
                amount: 144
            },
            result: 'emendatusenigmatica:iron_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_iron',
                amount: 144
            },
            result: 'emendatusenigmatica:iron_gear',
            cooling_time: 57
        },
    //Diamond
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_diamond',
                amount: 144
            },
            result: 'emendatusenigmatica:diamond_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_diamond',
                amount: 144
            },
            result: 'emendatusenigmatica:diamond_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_diamond',
                amount: 144
            },
            result: 'emendatusenigmatica:diamond_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_diamond',
                amount: 144
            },
            result: 'emendatusenigmatica:diamond_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_diamond',
                amount: 144
            },
            result: 'emendatusenigmatica:diamond_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_diamond',
                amount: 144
            },
            result: 'emendatusenigmatica:diamond_gear',
            cooling_time: 57
        },
    //Lapis
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lapis',
                amount: 144
            },
            result: 'emendatusenigmatica:lapis_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lapis',
                amount: 144
            },
            result: 'emendatusenigmatica:lapis_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lapis',
                amount: 144
            },
            result: 'emendatusenigmatica:lapis_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lapis',
                amount: 144
            },
            result: 'emendatusenigmatica:lapis_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lapis',
                amount: 144
            },
            result: 'emendatusenigmatica:lapis_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lapis',
                amount: 144
            },
            result: 'emendatusenigmatica:lapis_gear',
            cooling_time: 57
        },
    //Quartz
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_quartz',
                amount: 144
            },
            result: 'emendatusenigmatica:quartz_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_quartz',
                amount: 144
            },
            result: 'emendatusenigmatica:quartz_gear',
            cooling_time: 57
        },
    //Enderium
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_enderium',
                amount: 144
            },
            result: 'emendatusenigmatica:enderium_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_enderium',
                amount: 144
            },
            result: 'emendatusenigmatica:enderium_plate',
            cooling_time: 57
        },
    //Emerald
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_emerald',
                amount: 144
            },
            result: 'emendatusenigmatica:emerald_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_emerald',
                amount: 144
            },
            result: 'emendatusenigmatica:emerald_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_emerald',
                amount: 144
            },
            result: 'emendatusenigmatica:emerald_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_emerald',
                amount: 144
            },
            result: 'emendatusenigmatica:emerald_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_emerald',
                amount: 144
            },
            result: 'emendatusenigmatica:emerald_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_emerald',
                amount: 144
            },
            result: 'emendatusenigmatica:emerald_gear',
            cooling_time: 57
        },
    //Silver
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_silver',
                amount: 144
            },
            result: 'emendatusenigmatica:silver_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_silver',
                amount: 144
            },
            result: 'emendatusenigmatica:silver_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_silver',
                amount: 144
            },
            result: 'emendatusenigmatica:silver_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_silver',
                amount: 144
            },
            result: 'emendatusenigmatica:silver_gear',
            cooling_time: 57
        },
    //Lead
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lead',
                amount: 144
            },
            result: 'emendatusenigmatica:lead_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lead',
                amount: 144
            },
            result: 'emendatusenigmatica:lead_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lead',
                amount: 144
            },
            result: 'emendatusenigmatica:lead_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_lead',
                amount: 144
            },
            result: 'emendatusenigmatica:lead_gear',
            cooling_time: 57
        },
    //Nickel
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_nickel',
                amount: 144
            },
            result: 'emendatusenigmatica:nickel_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_nickel',
                amount: 144
            },
            result: 'emendatusenigmatica:nickel_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_nickel',
                amount: 144
            },
            result: 'emendatusenigmatica:nickel_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_nickel',
                amount: 144
            },
            result: 'emendatusenigmatica:nickel_gear',
            cooling_time: 57
        },
    //Steel
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_steel',
                amount: 144
            },
            result: 'emendatusenigmatica:steel_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_steel',
                amount: 144
            },
            result: 'emendatusenigmatica:steel_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_steel',
                amount: 144
            },
            result: 'emendatusenigmatica:steel_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_steel',
                amount: 144
            },
            result: 'emendatusenigmatica:steel_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_steel',
                amount: 144
            },
            result: 'emendatusenigmatica:steel_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_steel',
                amount: 144
            },
            result: 'emendatusenigmatica:steel_gear',
            cooling_time: 57
        },
    //Aluminum
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_aluminum',
                amount: 144
            },
            result: 'emendatusenigmatica:aluminum_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_aluminum',
                amount: 144
            },
            result: 'emendatusenigmatica:aluminum_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_aluminum',
                amount: 144
            },
            result: 'emendatusenigmatica:aluminum_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_aluminum',
                amount: 144
            },
            result: 'emendatusenigmatica:aluminum_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_aluminum',
                amount: 144
            },
            result: 'emendatusenigmatica:aluminum_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_aluminum',
                amount: 144
            },
            result: 'emendatusenigmatica:aluminum_gear',
            cooling_time: 57
        },
    //Tin
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_tin',
                amount: 144
            },
            result: 'emendatusenigmatica:tin_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_tin',
                amount: 144
            },
            result: 'emendatusenigmatica:tin_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_tin',
                amount: 144
            },
            result: 'emendatusenigmatica:tin_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_tin',
                amount: 144
            },
            result: 'emendatusenigmatica:tin_gear',
            cooling_time: 57
        },
    //Zinc
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_zinc',
                amount: 144
            },
            result: 'emendatusenigmatica:zinc_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_zinc',
                amount: 144
            },
            result: 'emendatusenigmatica:zinc_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_zinc',
                amount: 144
            },
            result: 'emendatusenigmatica:zinc_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_zinc',
                amount: 144
            },
            result: 'emendatusenigmatica:zinc_gear',
            cooling_time: 57
        },
    //Uranium
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_uranium',
                amount: 144
            },
            result: 'emendatusenigmatica:uranium_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_uranium',
                amount: 144
            },
            result: 'emendatusenigmatica:uranium_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_uranium',
                amount: 144
            },
            result: 'emendatusenigmatica:uranium_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_uranium',
                amount: 144
            },
            result: 'emendatusenigmatica:uranium_gear',
            cooling_time: 57
        },
    //Bronze
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_bronze',
                amount: 144
            },
            result: 'emendatusenigmatica:bronze_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_bronze',
                amount: 144
            },
            result: 'emendatusenigmatica:bronze_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_bronze',
                amount: 144
            },
            result: 'emendatusenigmatica:bronze_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_bronze',
                amount: 144
            },
            result: 'emendatusenigmatica:bronze_gear',
            cooling_time: 57
        },
    //Brass
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_brass',
                amount: 144
            },
            result: 'emendatusenigmatica:brass_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/rod'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_brass',
                amount: 144
            },
            result: 'emendatusenigmatica:brass_rod',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_brass',
                amount: 144
            },
            result: 'emendatusenigmatica:brass_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_brass',
                amount: 144
            },
            result: 'emendatusenigmatica:brass_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_brass',
                amount: 144
            },
            result: 'emendatusenigmatica:brass_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_brass',
                amount: 144
            },
            result: 'emendatusenigmatica:brass_gear',
            cooling_time: 57
        },
    //Electrum
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_electrum',
                amount: 144
            },
            result: 'emendatusenigmatica:electrum_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_electrum',
                amount: 144
            },
            result: 'emendatusenigmatica:electrum_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_electrum',
                amount: 144
            },
            result: 'emendatusenigmatica:electrum_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_electrum',
                amount: 144
            },
            result: 'emendatusenigmatica:electrum_gear',
            cooling_time: 57
        },
    //Signalum
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_signalum',
                amount: 144
            },
            result: 'emendatusenigmatica:signalum_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_signalum',
                amount: 144
            },
            result: 'emendatusenigmatica:signalum_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_signalum',
                amount: 144
            },
            result: 'emendatusenigmatica:signalum_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_signalum',
                amount: 144
            },
            result: 'emendatusenigmatica:signalum_gear',
            cooling_time: 57
        },
    //Constantan
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_constantan',
                amount: 144
            },
            result: 'emendatusenigmatica:constantan_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_constantan',
                amount: 144
            },
            result: 'emendatusenigmatica:constantan_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_constantan',
                amount: 144
            },
            result: 'emendatusenigmatica:constantan_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_constantan',
                amount: 144
            },
            result: 'emendatusenigmatica:constantan_gear',
            cooling_time: 57
        },
    //Invar
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_invar',
                amount: 144
            },
            result: 'emendatusenigmatica:invar_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/plate'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_invar',
                amount: 144
            },
            result: 'emendatusenigmatica:invar_plate',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_invar',
                amount: 144
            },
            result: 'emendatusenigmatica:invar_gear',
            cooling_time: 57
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/gear'
            },
            cast_consumed: true,
            fluid: {
                name: 'emendatusenigmatica:molten_invar',
                amount: 144
            },
            result: 'emendatusenigmatica:invar_gear',
            cooling_time: 57
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:casting_table',
            cast: recipe.cast,
            cast_consumed: recipe.cast_consumed,
            fluid: recipe.fluid,
            result: recipe.result,
            cooling_time: recipe.cooling_time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});