onEvent('tags.block', (event) => {
    event.add('forge:tanks', [
        //'rftoolsutility:tank',
        //'rftoolscontrol:tank',
        'create:fluid_tank',
        'cyclic:cask',
        'cyclic:tank',
        'create:creative_fluid_tank',
        //'quantumstorage:tank',
        //'pneumaticcraft:small_tank',
        //'pneumaticcraft:medium_tank',
        //'pneumaticcraft:large_tank',
        //'pneumaticcraft:etching_tank'
    ]);
});
