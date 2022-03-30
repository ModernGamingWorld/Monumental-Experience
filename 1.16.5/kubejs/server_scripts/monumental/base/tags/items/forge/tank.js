onEvent('tags.items', (event) => {
    event.add('forge:tank', [
        'rftoolsutility:tank',
        'rftoolscontrol:tank',
        'create:fluid_tank',
        'cyclic:cask',
        'cyclic:tank',
        'create:creative_fluid_tank',
        'quantumstorage:tank',
        'pneumaticcraft:small_tank',
        'pneumaticcraft:medium_tank',
        'pneumaticcraft:large_tank',
        'pneumaticcraft:etching_tank',
        'pneumaticcraft:huge_tank',
        'mekanism:basic_fluid_tank',
        'mekanism:advanced_fluid_tank',
        'mekanism:elite_fluid_tank',
        'mekanism:ultimate_fluid_tank'
    ]);
});
