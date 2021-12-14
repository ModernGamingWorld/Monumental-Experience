onEvent('tags.block', (event) => {
    event.get('minecraft:water').remove(['create:honey', 'create:chocolate']);
});
