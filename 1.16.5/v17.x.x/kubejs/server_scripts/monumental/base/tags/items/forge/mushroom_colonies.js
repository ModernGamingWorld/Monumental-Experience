onEvent('tags.items', (event) => {
    event.add('forge:mushroom_colonies', ['#forge:mushroom_colonies/brown', '#forge:mushroom_colonies/red']);
    event.add('forge:mushroom_colonies/brown', ['aquaculture:brown_shrooma']);
    event.add('forge:mushroom_colonies/red', ['aquaculture:red_shrooma']);
});
