onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [];
    var tags = ['forge:end_stones'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/rechiseled:end_stone/).remove(exceptions);
    });
});
