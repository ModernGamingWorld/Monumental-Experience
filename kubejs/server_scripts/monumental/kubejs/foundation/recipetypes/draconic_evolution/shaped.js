onEvent('recipes', event => {
    event.shaped(Item.of('draconicevolution:draconium_energy_module', 1), ["CCC", "ABA", "CCC"], {
        A: 'extendedcrafting:black_iron_slate',
        B: 'draconicevolution:module_core',
        C: 'compressium:redstone_2'
    })
    event.shaped(Item.of('draconicevolution:module_core', 1), ["CAC", "BDB", "CAC"], {
        A: 'extendedcrafting:redstone_component',
        B: '#forge:plates/gold',
        C: 'contenttweaker:compressed_plate',
        D: '#forge:ingots/draconium'
    })
    event.shaped(Item.of('draconicevolution:draconium_speed_module', 1), ["CAC", "BDB", "CAC"], {
        A: 'psi:cad_core_hyperclocked',
        B: 'create:clockwork_bearing',
        C: 'contenttweaker:compressed_plate',
        D: 'draconicevolution:module_core'
    })
    event.shaped(Item.of('draconicevolution:draconium_core', 1), ["BAB", "ACA", "BAB"], {
        B: '#forge:ingots/draconium',
        A: '#forge:plates/gold',
        C: '#forge:gems/mana_diamond'
    });
});