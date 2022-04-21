onEvent('recipes', (event) => {
    const recipes = [
        { type: {}, toReplace: 'thermal:cinnabar', replaceWith: '#forge:gems/cinnabar' },
        { type: {}, toReplace: 'thermal:sulfur', replaceWith: '#forge:gems/sulfur' },
        { type: {}, toReplace: 'thermal:apatite', replaceWith: '#forge:gems/apatite' },
        { type: {}, toReplace: 'thermal:niter', replaceWith: '#forge:gems/niter' },
        { type: {}, toReplace: 'thermal:bitumen', replaceWith: '#forge:gems/bitumen' },
        { type: {}, toReplace: 'thermal:coal_coke', replaceWith: '#forge:gems/coal_coke' },
        { type: {}, toReplace: 'thermal:sawdust', replaceWith: 'emendatusenigmatica:wood_dust' },
        { type: {}, toReplace: 'refinedstorage:silicon', replaceWith: '#forge:gems/silicon' },
        { type: {}, toReplace: 'immersiveengineering:slag', replaceWith: 'thermal:slag' },
    ];

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.type, recipe.toReplace, recipe.replaceWith);
    });
});
