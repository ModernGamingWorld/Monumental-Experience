onEvent('tags.items', (event) => {
    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/wrench'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/_wrench/)
            .add(/wrench/)
            .remove(exceptions);
    });
});
