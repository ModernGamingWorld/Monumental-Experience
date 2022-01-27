onEvent('tags.items', (event) => {
    let items = [
        /betterendforge:\w+_sign/,
        /blue_skies:\w+_sign/
    ];

    event.add('minecraft:signs', items);
});
