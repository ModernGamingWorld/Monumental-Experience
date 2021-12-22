onEvent('tags.block', (event) => {
    let items = [
        'minecraft:crafting_table'
    ];
    event.add('forge:workbench', items);
});