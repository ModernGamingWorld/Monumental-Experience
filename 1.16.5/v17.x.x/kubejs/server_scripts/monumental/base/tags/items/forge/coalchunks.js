onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [];

    var tags = ['forge:chunks/coal'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add('ironcoals:base_coal_chunk').remove(exceptions);
    });
});
