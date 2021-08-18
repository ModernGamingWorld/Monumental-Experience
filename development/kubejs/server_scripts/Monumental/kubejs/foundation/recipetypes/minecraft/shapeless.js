onEvent('recipes', (event) => {
    const recipes = [
        { output: Item.of('appliedenergistics2:crafting_terminal', 1), inputs: ['appliedenergistics2:terminal', 'create:mechanical_crafter', 'appliedenergistics2:calculation_processor'] },
        { output: Item.of('refinedstorage:pattern', 1), inputs: ['appliedenergistics2:blank_pattern'] },
        { output: Item.of('minecraft:red_sandstone', 1), inputs: ['#forge:sandstone/colorless', '#forge:sandstone/colorless', '#forge:dyes/red'] },
        { output: Item.of('pamhc2foodextended:bananasplititem', 1), inputs: ['#forge:tool_mixingbowl', '#forge:crops/banana', '#forge:icecreams', '#forge:fruits', 'pamhc2trees:walnutitem', '#forge:chocolatebar'] },
        { output: Item.of('pamhc2foodcore:cottoncandyitem', 1), inputs: ['#forge:tool_mixingbowl', '#forge:sugar', '#forge:icecreams', '#forge:dyes'] },
        { output: Item.of('pamhc2foodextended:peachesandcreamoatmealitem', 1), inputs: ['#forge:tool_pot', '#forge:crops/oats', '#forge:crops/peach', '#forge:cream', '#forge:water'] },
        { output: Item.of('pamhc2foodcore:cookingoilitem', 1), inputs: ['#forge:tool_roller', 'pamhc2trees:walnutitem'] },
        { output: Item.of('immersiveengineering:wirecoil_copper', 1), inputs: ['createaddition:copper_spool'] },
        {
            output: Item.of('akashictome:tome', {
                'akashictome:data': {
                    industrialforegoing: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Industrial Foregoing's Manual" },
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
                            'akashictome:displayName': { text: 'Astral Tome' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Astral Tome"}]}'
                            }
                        }
                    },
                    theoneprobe: {
                        id: 'theoneprobe:probenote',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'The One Probe Read Me' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The One Probe Read Me"}]}'
                            }
                        }
                    },
                    ftbquests: {
                        id: 'ftbquests:book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Quest Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Quest Book"}]}'
                            }
                        }
                    },
                    alexsmobs: {
                        id: 'alexsmobs:animal_dictionary',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Animal Dictionary' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}'
                            }
                        }
                    },
                    immersiveengineering: {
                        id: 'immersiveengineering:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Engineer's Manual" },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Manual"}]}'
                            }
                        }
                    },
                    eidolon: {
                        id: 'eidolon:codex',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Ars Ecclesia' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Ars Ecclesia"}]}'
                            }
                        }
                    },
                    botania: {
                        id: 'botania:lexicon',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Lexica Botania' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}'
                            }
                        }
                    },
                    sushigocrafting: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Becoming an Itamae (Sushi Go Crafting Manual)' },
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
                            'akashictome:displayName': { text: 'Thermalpedia' },
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
                            'akashictome:displayName': { text: 'Modded for Dummies' },
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
                            'akashictome:displayName': { text: 'Technology Guide' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Technology Guide"}]}'
                            }
                        }
                    },
                    cookingforblockheads: {
                        id: 'cookingforblockheads:crafting_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Cooking for Blockheads II' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Cooking for Blockheads II"}]}'
                            }
                        }
                    },
                    pneumaticcraft: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'PNC:R Manual' },
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
                            'akashictome:displayName': { text: 'Book of Natural Aura' },
                            'patchouli:book': 'naturesaura:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Book of Natural Aura"}]}'
                            }
                        }
                    },
                    transport: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Advanced Transport' },
                            'patchouli:book': 'transport:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Transport"}]}'
                            }
                        }
                    },
                    engineersdecor: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Engineer's Decor" },
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
                            'akashictome:displayName': { text: 'Dictionary of Spirits' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Dictionary of Spirits"}]}'
                            }
                        }
                    },
                    solcarrot: {
                        id: 'solcarrot:food_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Food Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Food Book"}]}'
                            }
                        }
                    },
                    modularrouters: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Modular Routers Manual' },
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
                            'akashictome:displayName': { text: 'Sanguine Scientiem' },
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
                            'akashictome:displayName': { text: 'The End for Dummies' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The End for Dummies"}]}'
                            }
                        }
                    }
                }
            }),
            inputs: ['minecraft:book', '#forge:bookshelves']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
