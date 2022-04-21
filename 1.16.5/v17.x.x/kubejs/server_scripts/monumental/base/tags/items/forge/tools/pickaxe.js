onEvent('tags.items', (event) => {
    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/pickaxe'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/_pickaxe/)
            .remove(exceptions);
    });
});
