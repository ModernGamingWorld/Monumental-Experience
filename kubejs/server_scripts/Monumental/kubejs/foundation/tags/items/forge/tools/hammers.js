onEvent('item.tags', (event) => {
    var exceptions = ['betterendforge:aeternium_hammer_head'];

    var tags = ['forge:tools', 'forge:tools/hammer'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/betterendforge:\w+_hammer/)
            .remove(exceptions);
    });
});
