onEvent('tags.blocks', (event) => {
    event.add('forge:pistons', [
        'minecraft:sticky_piston',
        'minecraft:piston',
        'create:mechanical_piston',
        'create:sticky_mechanical_piston',
        'multipiston:multipistonblock'
    ]);
});
