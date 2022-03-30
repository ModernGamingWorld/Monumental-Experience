onEvent('recipes', (event) => {
    const id_prefix = 'monumental:base/';
    const recipes = [
        //Atum,
        {
            output: Item.of('atum:nebu_drop', 9),
            inputs: ['#forge:ingots/nebu']
        },
        {
            output: Item.of('atum:ceramic_white'),
            inputs: ['#enigmatica:washables/ceramic', 'minecraft:water_bucket']
        },
        {
            output: Item.of('atum:ceramic_slab_white'),
            inputs: ['#enigmatica:washables/ceramic_slab', 'minecraft:water_bucket']
        },
        {
            output: Item.of('atum:ceramic_tile_white'),
            inputs: ['#enigmatica:washables/ceramic_tile', 'minecraft:water_bucket']
        },
        {
            output: Item.of('atum:ceramic_stairs_white'),
            inputs: ['#enigmatica:washables/ceramic_stairs', 'minecraft:water_bucket']
        },
        {
            output: Item.of('atum:ceramic_wall_white'),
            inputs: ['#enigmatica:washables/ceramic_wall', 'minecraft:water_bucket']
        },
        //Akashic tome
        {
            output: Item.of('akashictome:tome', {
                'akashictome:data': {
                    industrialforegoing: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: "Industrial Foregoing's Manual"
                            },
                            'patchouli:book': 'industrialforegoing:industrial_foregoing',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Industrial Foregoing\'s Manual"}]}'
                            }
                        }
                    },
                    astralsorcery: {
                        id: 'astralsorcery:tome',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Astral Tome'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Astral Tome"}]}'
                            }
                        }
                    },
                    theoneprobe: {
                        id: 'theoneprobe:probenote',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'The One Probe Read Me'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The One Probe Read Me"}]}'
                            }
                        }
                    },
                    ftbquests: {
                        id: 'ftbquests:book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Quest Book'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Quest Book"}]}'
                            }
                        }
                    },
                    alexsmobs: {
                        id: 'alexsmobs:animal_dictionary',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Animal Dictionary'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}'
                            }
                        }
                    },
                    immersiveengineering: {
                        id: 'immersiveengineering:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: "Engineer's Manual"
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Manual"}]}'
                            }
                        }
                    },
                    eidolon: {
                        id: 'eidolon:codex',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Ars Ecclesia'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Ars Ecclesia"}]}'
                            }
                        }
                    },
                    botania: {
                        id: 'botania:lexicon',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Lexica Botania'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}'
                            }
                        }
                    },
                    sushigocrafting: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Becoming an Itamae (Sushi Go Crafting Manual)'
                            },
                            'patchouli:book': 'sushigocrafting:sushigocrafting',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Becoming an Itamae (Sushi Go Crafting Manual)"}]}'
                            }
                        }
                    },
                    thermal: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Thermalpedia'
                            },
                            'patchouli:book': 'thermal:guidebook',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Thermalpedia"}]}'
                            }
                        }
                    },
                    patchouli: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Modded for Dummies'
                            },
                            'patchouli:book': 'patchouli:modded_for_dummies',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Modded for Dummies"}]}'
                            }
                        }
                    },
                    rftoolsbase: {
                        id: 'rftoolsbase:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Technology Guide'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Technology Guide"}]}'
                            }
                        }
                    },
                    cookingforblockheads: {
                        id: 'cookingforblockheads:crafting_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Cooking for Blockheads II'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Cooking for Blockheads II"}]}'
                            }
                        }
                    },
                    pneumaticcraft: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'PNC:R Manual'
                            },
                            'patchouli:book': 'pneumaticcraft:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"PNC:R Manual"}]}'
                            }
                        }
                    },
                    naturesaura: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Book of Natural Aura'
                            },
                            'patchouli:book': 'naturesaura:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Book of Natural Aura"}]}'
                            }
                        }
                    },
                    engineersdecor: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: "Engineer's Decor"
                            },
                            'patchouli:book': 'engineersdecor:engineersdecor_manual',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Decor"}]}'
                            }
                        }
                    },
                    occultism: {
                        id: 'occultism:dictionary_of_spirits',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Dictionary of Spirits'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Dictionary of Spirits"}]}'
                            }
                        }
                    },
                    solcarrot: {
                        id: 'solcarrot:food_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Food Book'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Food Book"}]}'
                            }
                        }
                    },
                    modularrouters: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Modular Routers Manual'
                            },
                            'patchouli:book': 'modularrouters:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Modular Routers Manual"}]}'
                            }
                        }
                    },
                    bloodmagic: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'Sanguine Scientiem'
                            },
                            'patchouli:book': 'bloodmagic:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Sanguine Scientiem"}]}'
                            }
                        }
                    },
                    betterendforge: {
                        id: 'betterendforge:guidebook',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': {
                                text: 'The End for Dummies'
                            },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The End for Dummies"}]}'
                            }
                        }
                    }
                }
            }),
            inputs: ['minecraft:book', '#forge:bookshelves']
        },
        //BYG
        {
            output: Item.of('byg:pollen_dust', 4),
            inputs: ['byg:pollen_block']
        },
        {
            output: 'minecraft:quartz',
            inputs: ['byg:quartzite_sand', 'byg:quartzite_sand', 'byg:quartzite_sand']
        },
        {
            output: Item.of('byg:brimstone', 2),
            inputs: ['#forge:netherrack', 'byg:sythian_wart_block']
        },
        //Botania
        {
            output: 'botania:fertilizer',
            inputs: ['#forge:fertilizer', '#forge:dyes', '#forge:dyes', '#forge:dyes', '#forge:dyes']
        },
        {
            output: 'botania:enchanted_soil',
            inputs: ['minecraft:grass_block', 'botania:overgrowth_seed']
        },
        //Betterend Forge
        {
            output: 'betterendforge:endstone_dust',
            inputs: [
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone'
            ]
        },
        {
            output: Item.of('betterendforge:thallasium_nugget', 9),
            inputs: ['#forge:ingots/thallasium']
        },
        {
            output: Item.of('betterendforge:terminite_nugget', 9),
            inputs: ['#forge:ingots/terminite']
        },
        {
            output: Item.of('betterendforge:glowing_pillar_seed', 4),
            inputs: ['betterendforge:glowing_pillar_luminophor']
        },
        {
            output: Item.of('betterendforge:lumecorn_seed', 6),
            inputs: ['betterendforge:lumecorn_rod']
        },
        {
            output: Item.of('betterendforge:bulb_vine_seed', 4),
            inputs: ['betterendforge:glowing_bulb']
        },
        {
            output: Item.of('betterendforge:end_lily_seed', 1),
            inputs: ['betterendforge:end_lily_leaf']
        },
        {
            output: Item.of('betterendforge:blue_vine_seed', 4),
            inputs: ['betterendforge:blue_vine_lantern']
        },
        //Emendatus Enigmatica
        {
            output: 'emendatusenigmatica:fluorite_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/fluorite']
        },
        {
            output: 'emendatusenigmatica:dimensional_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/dimensional']
        },
        {
            output: 'emendatusenigmatica:potassium_nitrate_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/potassium_nitrate']
        },
        {
            output: 'emendatusenigmatica:dimensional_gem',
            inputs: ['rftoolsbase:dimensionalshard']
        },
        //Eidolon
        {
            output: Item.of('eidolon:pewter_blend', 2),
            inputs: ['#forge:dusts/lead', '#forge:dusts/iron'],
            id: 'eidolon:pewter_blend'
        },
        //Farmer's
        {
            output: Item.of('farmersdelight:milk_bottle', 4),
            inputs: [
                'minecraft:milk_bucket',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle'
            ]
        },
        //Forge
        {
            output: Item.of('#forge:shards/ender'),
            inputs: ['#forge:ores/ender', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('#forge:shards/amber'),
            inputs: ['#forge:ores/amber', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('#forge:shards/ender'),
            inputs: ['#forge:ores/ender', 'thermal:earth_charge']
        },
        {
            output: Item.of('#forge:shards/amber'),
            inputs: ['#forge:ores/amber', 'thermal:earth_charge']
        },
        //Minecraft
        {
            output: 'minecraft:milk_bucket',
            inputs: [
                'minecraft:bucket',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle'
            ]
        },
        {
            output: 'minecraft:wheat_seeds',
            inputs: ['#forge:crops/wheat']
        },
        {
            output: 'minecraft:writable_book',
            inputs: ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            id: 'minecraft:writable_book'
        },
        {
            output: Item.of('minecraft:honeycomb', 9),
            inputs: ['minecraft:honeycomb_block']
        },
        {
            output: Item.of('minecraft:paper', 3),
            inputs: ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane']
        },
        {
            output: Item.of('minecraft:string', 3),
            inputs: ['#forge:crops/flax', '#forge:crops/flax', '#forge:crops/flax']
        },
        {
            output: Item.of('minecraft:green_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/yellow']
        },
        {
            output: Item.of('minecraft:brown_dye', 2),
            inputs: ['#forge:dyes/red', '#forge:dyes/green']
        }, ,
        {
            output: 'minecraft:charcoal',
            inputs: ['#chisel:charcoal'],
            id: `${id_prefix}charcoal`
        },
        {
            output: Item.of('minecraft:string', 3),
            inputs: ['#forge:crops/flax', '#forge:crops/flax', '#forge:crops/flax']
        },
        {
            output: Item.of('minecraft:green_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/yellow']
        },
        {
            output: Item.of('minecraft:brown_dye', 2),
            inputs: ['#forge:dyes/red', '#forge:dyes/green']
        },
        {
            output: 'minecraft:sticky_piston',
            inputs: ['minecraft:piston', '#forge:slimeballs']
        },
        {
            output: 'minecraft:flint',
            inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel']
        },
        {
            output: 'minecraft:chest',
            inputs: ['#forge:chests/wooden']
        },
        //Occultism
        {
            output: Item.of('occultism:tallow', 9),
            inputs: ['quark:tallow_block']
        },

        //Rftools
        {
            output: 'rftoolsbase:dimensionalshard',
            inputs: ['emendatusenigmatica:dimensional_gem']
        },

        //Supplementaries
        {
            output: 'supplementaries:flax_seeds',
            inputs: ['supplementaries:flax']
        },
        //Sushigocrafting
        {
            output: 'sushigocrafting:soy_seeds',
            inputs: ['sushigocrafting:soy_bean']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id ?
            event.shapeless(recipe.output, recipe.inputs).id(recipe.id) :
            event.shapeless(recipe.output, recipe.inputs);
    });

    colors.forEach(function(color) {
        let otherColors = colors.filter((filterColor) => filterColor !== color);

        let otherSimplePots = otherColors.map((otherColor) => `botanypots:${otherColor}_botany_pot`),
            otherHopperPots = otherColors.map((otherColor) => `botanypots:hopper_${otherColor}_botany_pot`);

        otherSimplePots.push('botanypots:botany_pot');
        otherHopperPots.push('botanypots:hopper_botany_pot');

        event.shapeless(`botanypots:${color}_botany_pot`, [Ingredient.of(otherSimplePots), `#forge:dyes/${color}`]);

        event.shapeless(`botanypots:hopper_${color}_botany_pot`, [
            Ingredient.of(otherHopperPots),
            `#forge:dyes/${color}`
        ]);

        if (color != 'white') {
            event.shapeless(Item.of(`2x atum:ceramic_slab_${color}`), [
                'atum:ceramic_slab_white',
                'atum:ceramic_slab_white',
                `#forge:dyes/${color}`
            ]);
            event.shapeless(Item.of(`6x atum:ceramic_tile_${color}`), [
                'atum:ceramic_tile_white',
                'atum:ceramic_tile_white',
                'atum:ceramic_tile_white',
                'atum:ceramic_tile_white',
                'atum:ceramic_tile_white',
                'atum:ceramic_tile_white',
                `#forge:dyes/${color}`
            ]);
            event.shapeless(Item.of(`3x atum:ceramic_stairs_${color}`), [
                'atum:ceramic_stairs_white',
                'atum:ceramic_stairs_white',
                'atum:ceramic_stairs_white',
                `#forge:dyes/${color}`
            ]);
            event.shapeless(`atum:ceramic_wall_${color}`, ['atum:ceramic_wall_white', `#forge:dyes/${color}`]);
        }
    });

    materialsToUnify.forEach((material) => {
        var ore = Item.of(`emendatusenigmatica:${material}_ore`);
        if (ore.exists) {
            event.shapeless(ore, `#forge:ores/${material}`);
        }
    });
});