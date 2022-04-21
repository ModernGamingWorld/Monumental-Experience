onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [];

    var tags = ['chipped:glowstone'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/rechiseled:glowstone_/).remove(exceptions);
    });
});
