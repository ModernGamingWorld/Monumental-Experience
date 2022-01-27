onEvent('tags.items', (event) => {
    event.add('forge:wires', [
        'immersiveengineering:wire_steel',
        'immersiveengineering:wire_aluminum',
        'immersiveengineering:wire_copper',
        'immersiveengineering:wire_electrum',
        'immersiveengineering:wire_lead'
    ]);
});
