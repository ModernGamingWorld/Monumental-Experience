onEvent('recipes', (event) => {
    const data = {
        recipes: [
            {
                input: {
                    item: 'blue_skies:falsite_ingot'
                },
                start_item: {
                    item: 'naturesaura:calling_spirit'
                },
                output: {
                    item: 'naturesaura:sky_ingot',
                    count: 2
                }
            },
            {
                input: {
                    item: 'blue_skies:ventium_ingot'
                },
                start_item: {
                    item: 'naturesaura:calling_spirit'
                },
                output: {
                    item: 'naturesaura:sky_ingot',
                    count: 2
                }
            },
            /*{
                input: {
                    item: 'mana-and-artifice:purified_vinteum_ingot'
                },
                start_item: {
                    item: 'naturesaura:calling_spirit'
                },
                output: {
                    item: 'naturesaura:sky_ingot',
                    count: 2
                }
            },
            {
                input: {
                    item: 'iceandfire:ghost_ingot'
                },
                start_item: {
                    item: 'naturesaura:calling_spirit'
                },
                output: {
                    item: 'naturesaura:sky_ingot',
                    count: 3
                }
            },
            {
                input: {
                    item: 'mana-and-artifice:superheated_vinteum_ingot'
                },
                start_item: {
                    item: 'naturesaura:calling_spirit'
                },
                output: {
                    item: 'naturesaura:sky_ingot',
                    count: 3
                }
            },
            {
                input: {
                    item: 'mana-and-artifice:superheated_purified_vinteum_ingot'
                },
                start_item: {
                    item: 'naturesaura:calling_spirit'
                },
                output: {
                    item: 'naturesaura:sky_ingot',
                    count: 3
                }
            }*/
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'naturesaura:offering',
            input: recipe.input,
            start_item: recipe.start_item,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
