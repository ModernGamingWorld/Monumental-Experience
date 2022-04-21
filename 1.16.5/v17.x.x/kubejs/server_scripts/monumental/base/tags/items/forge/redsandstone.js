onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [];
    var tags = ['forge:sandstone', 'forge:sandstone/red'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/rechiseled:red_sandstone/).remove(exceptions);
    });
});
