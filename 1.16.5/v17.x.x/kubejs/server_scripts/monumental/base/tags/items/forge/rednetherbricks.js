onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [];

    var tags = ['forge:netherbricks/red'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/rechiseled:red_nether_bricks/).remove(exceptions);
    });
});
