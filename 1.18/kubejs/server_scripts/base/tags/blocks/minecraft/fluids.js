onEvent('tags.blocks', (event) => {
    event.get('minecraft:water').remove(['create:honey', 'create:chocolate']);
});
