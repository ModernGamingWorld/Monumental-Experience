onEvent('item.tags', (event) => {
    event.add('forge:tank', [
        'rftoolsutility:tank',
        'rftoolscontrol:tank',
        'create:fluid_tank',
        'quantumstorage:tank',
        'pneumaticcraft:small_tank',
        'pneumaticcraft:medium_tank',
        'pneumaticcraft:large_tank',
        'pneumaticcraft:etching_tank'
    ]);
});
