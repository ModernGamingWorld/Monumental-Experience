onEvent('tags.entity_type', (event) => {
    let entities = ['atum:villager_male', 'atum:villager_female', 'undergarden:stoneborn'];
    event.get('forge:villagers').add(entities);
});
