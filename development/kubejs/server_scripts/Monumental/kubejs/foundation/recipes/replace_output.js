onEvent('recipes', (event) => {
    event.replaceOutput({ mod: 'dustrial_decor' }, 'minecraft:iron_ingot', 'dustrial_decor:rusty_iron_ingot');
    event.replaceOutput({ mod: 'dustrial_decor' }, 'minecraft:iron_nugget', 'dustrial_decor:rusty_iron_nugget');
});
