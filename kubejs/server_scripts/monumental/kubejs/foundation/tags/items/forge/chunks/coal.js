onEvent('block.tags', (event) => {
    let items = [
        'ironcoals:base_coal_chunk',
        'ironcoals:charcoal_chunk',
        'ironcoals:iron_coal_chunk',
        'ironcoals:gold_coal_chunk',
        'ironcoals:diamond_coal_chunk',
        'ironcoals:emerald_coal_chunk'
    ];

    event.add('forge:chunks/coal', items);
    event.add('forge:chunks', items);
});
