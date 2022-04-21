onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [
    'mysticalagriculture:imperium_furnace',
    'mysticalagriculture:supremium_furnace',
    'minecraft:furnace_minecart',
    'ironfurnaces:item_heater',
    'ironfurnaces:augment_blasting',
    'ironfurnaces:augment_smoking',
    'ironfurnaces:augment_speed',
    'ironfurnaces:augment_fuel',
    'ironfurnaces:item_copy',
    'ironfurnaces:rainbow_core',
    'ironfurnaces:rainbow_plating',
    'ironfurnaces:upgrade_iron',
    'ironfurnaces:upgrade_gold',
    'ironfurnaces:upgrade_diamond',
    'ironfurnaces:upgrade_emerald',
    'ironfurnaces:upgrade_obsidian',
    'ironfurnaces:upgrade_crystal',
    'ironfurnaces:upgrade_netherite',
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_obsidian2',
    'ironfurnaces:upgrade_iron2',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:upgrade_silver2',
    'ironfurnaces:upgrade_diamond',
    'ironfurnaces:upgrade_unobtainium',
    'ironfurnaces:upgrade_vibranium',
    'ironfurnaces:vibranium_furnace',
    'ironfurnaces:allthemodium_furnace',
    'ironfurnaces:upgrade_allthemodium',
    'ironfurnaces:upgrade_unobtainium',
    'inventorypets:pet_furnace',
    'ironfurnaces:rainbow_coal',
    'naturesaura:furnace_heater',
    'naturesaura:blast_furnace_booster',
    'create:furnace_engine',
    'create:furnace_minecart_contraption',
    'bloodmagic:furnacecell_primitive',
    'immersiveengineering:blastfurnace_preheater',
    'immersiveengineering:furnace_heater'
    ];

    var tags = ['forge:furnace'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/furnace/).add(/_furnace/).remove(exceptions);
    });
});
