onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [];
    var tags = ['forge:sandstone', 'forge:sandstone/colorless'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/rechiseled:sandstone_/).remove(exceptions);
    });
});
