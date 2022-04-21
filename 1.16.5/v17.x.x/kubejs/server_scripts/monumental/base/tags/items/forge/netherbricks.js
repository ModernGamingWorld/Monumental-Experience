onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [];

    var tags = ['forge:bricks/nether'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/rechiseled:nether_bricks/).add(/chipped:nether_bricks/).remove(exceptions);
    });
});
