onEvent('tags.items', (event) => {
    event.add('create:chassis', [/create:\w+_chassis/]);
});
