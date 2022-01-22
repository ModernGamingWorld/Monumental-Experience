//priority: 1005

function shapedRecipe(result, pattern, key, id) {
    return { result: result, pattern: pattern, key: key, id: id };
}

function unificationBlacklistEntry(material, type) {
    return { material: material, type: type };
}
function entryIsBlacklisted(material, type) {
    for (var i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material == material && unificationBlacklist[i].type == type) {
            return true;
        }
    }
    return false;
}

const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

recipetypes_crushing = (event, recipe) => {
    event.custom({
        type: 'occultism:crushing',
        ingredient: recipe.input,
        result: recipe.output,
        crushing_time: recipe.duration,
        ignore_crushing_multiplier: recipe.ignore_occultism_multiplier
    });
    event.custom({
        type: 'astralsorcery:infuser',
        fluidInput: 'astralsorcery:liquid_starlight',
        input: recipe.input,
        output: recipe.output,
        consumptionChance: 0.1,
        duration: recipe.duration,
        consumeMultipleFluids: false,
        acceptChaliceInput: true,
        copyNBTToOutputs: false
    });
    event.custom({
        type: 'industrialforegoing:crusher',
        input: recipe.input,
        output: recipe.output
    });
    event.recipes.thermal
        .pulverizer([recipe.output, recipe.secondary_output], recipe.input)
        .experience(recipe.experience);
    event.recipes.mekanism.enriching(recipe.output, recipe.input);
    event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary_output);
    event.recipes.create.milling([recipe.output, recipe.secondary_output], recipe.input);
};