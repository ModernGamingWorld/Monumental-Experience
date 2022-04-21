onEvent('tags.items', (event) => {
    var items = [
    'quark:netherrack_bricks'
    ];
    var exceptions = [];

    var tags = ['forge:netherrack'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/rechiseled:netherack_/).remove(exceptions);
    });
});
