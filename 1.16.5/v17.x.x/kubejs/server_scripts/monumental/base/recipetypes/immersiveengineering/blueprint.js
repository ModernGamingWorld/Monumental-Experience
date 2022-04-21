onEvent('recipes', (event) => {
    var data = {
        recipes: [
        //Router Reborn
            {
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
        //Rftools Control
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