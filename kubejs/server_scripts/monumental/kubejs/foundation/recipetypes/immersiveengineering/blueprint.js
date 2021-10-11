onEvent('recipes', (event) => {
    var data = {
        recipes: [{
                inputs: [{
                    count: 4,
                    base_ingredient: {
                        item: 'immersiveengineering:wirecoil_copper'
                    }
                }],
                category: 'components',
                output: {
                    item: 'routerreborn:coppercoil'
                },
                id: 'copper_coil'
            },
            {
                inputs: [{
                        count: 1,
                        base_ingredient: {
                            item: 'immersiveengineering:wirecoil_redstone'
                        }
                    },
                    {
                        tag: 'forge:dusts/ender'
                    },
                    {
                        tag: 'forge:plates/emerald'
                    },
                    {
                        item: 'rftoolscontrol:network_card'
                    }
                ],
                category: 'components',
                output: {
                    item: 'rftoolscontrol:advanced_network_card'
                },
                id: 'advanced_network_card'
            },
            {
                inputs: [{
                        count: 1,
                        base_ingredient: {
                            item: 'immersiveengineering:electron_tube'
                        }
                    },
                    {
                        item: 'thermal:upgrade_augment_3'
                    },
                    {
                        tag: 'forge:plates/copper'
                    }
                ],
                category: 'components',
                output: {
                    item: 'immersiveengineering:circuit_board'
                },
                id: 'engineering_circuit_board'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'immersiveengineering:blueprint',
            inputs: recipe.inputs,
            category: recipe.category,
            result: recipe.output
        });

        if (recipe.id) {
            re.id('immersiveengineering:blueprint/' + recipe.id);
        }
    });
});