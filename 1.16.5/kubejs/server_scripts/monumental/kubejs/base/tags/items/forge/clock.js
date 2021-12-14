onEvent('tags.items', (event) => {
    event.add('forge:clock', [
        'minecraft:clock',
        'supplementaries:clock_block',
        'create:mysterious_cuckoo_clock',
        'cyclic:clock',
        'create:cuckoo_clock',
        'botania:cosmetic_clock_eye'
    ]);
});
