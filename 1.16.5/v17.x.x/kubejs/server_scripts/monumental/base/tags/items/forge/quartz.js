onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [];
    var tags = ['forge:blocks/quartz'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/rechiseled:quartz_block/).add(/chipped:quartz_block/).remove(exceptions);
    });
});
