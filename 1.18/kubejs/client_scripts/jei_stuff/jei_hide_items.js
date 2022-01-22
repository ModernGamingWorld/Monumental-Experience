onEvent('jei.hide.items', (event) => {

    materialsToUnify.forEach((material) => {
        itemsToHide.push(
            'draconicevolution:' + material + '_ore',
            'mythicbotany:' + material + '_ore',
            'astralsorcery:' + material + '_ore',
            'druidcraft:' + material + '_ore',
            'forbidden_arcanus:' + material + '_ore',
            'undergarden:' + material + '_ore',
            'mysticalagradditions:' + material + '_ore',
            'mysticalagriculture:' + material + '_ore',
            'mna:' + material + '_ore',
            'gobber2:' + material + '_ore',
            'gobber2:' + material + '_ore_nether',
            'gobber2:' + material + '_ore_end',
            'gobber2:' + material + '_ore_deepslate',
            'gobber2:' + material + '_lucky_block',
            'gobber2:' + material + '_lucky_block_deepslate',
            'gobber2:' + material + '_lucky_block_nehter',
            'quark:' + material + '_ore',
            'blue_skies:' + material + '_ore',
            'bigreactors:' + material + '_ore',
            'betterendforge:' + material + '_ore',
        );
    });

upgradesToUnify.forEach((upgrades) => {
        itemsToHide.push(
            'ironfurnaces:upgrade_' + upgrades
    );
});

leavesToUnify.forEach((leaves) => {
    itemsToHide.push(
        'hexerei:' + leaves + '_leaves',
        'twilightforest:' + leaves + '_leaves',
        'quark:' + leaves + '_leaves',
        'undergarden:' + leaves + '_leaves',
        'occultism:' + leaves + '_natural',
        'occultism:' + leaves + '_leaves',
        'naturesaura:' + leaves + '_leaves',
        'forbidden_arcanus:' + leaves + '_leaves',
        'druidcraft:' + leaves + '_leaves',
        'mythicbotany:' + leaves + '_leaves',
        'betterendforge:' + leaves + '_leaves',
        'upgrade_aquatic:' + leaves + '_leaves',
        'architects_palette:' + leaves + '_leaves',
        'sushigocrafting:' + leaves + '_leaves',
        'atum:' + leaves + '_leaves',
        'tconstruct:' + leaves + '_leaves',
        'environmental:' + leaves + '_leaves',
        'blue_skies:' + leaves + '_leaves',
        'mythicbotany:' + leaves + '_leaves',
        'minecraft:' + leaves + '_leaves'
    );
});

bucketsToUnify.forEach((buckets) => {
    itemsToHide.push(
        'hexerei:' + buckets + '_bucket',
        'biomesoplenty:' + buckets + '_bucket',
        'minecraft:' + buckets + '_bucket',
        'alexsmobs:' + buckets + '_bucket',
        'aquaculture:' + buckets + '_bucket',
        'astralsorcery:' + buckets + '_bucket',
        'bloodmagic:' + buckets + '_bucket',
        'mekanism:' + buckets + '_bucket',
        'mekanismgenerators:' + buckets + '_bucket',
        'pneumaticcraft:' + buckets + '_bucket',
        'thermal:' + buckets + '_bucket',
        'quark:' + buckets + '_bucket',
        'undergarden:' + buckets + '_bucket',
        'woot:' + buckets + '_bucket',
        'tconstruct:' + buckets + '_bucket',
        'immersiveengineering:' + buckets + '_bucket',
        'immersivepetroleum:' + buckets + '_bucket',
        'industrialforegoing:' + buckets + '_bucket',
        'emendatusenigmatica:' + buckets + '_bucket',
        'create:' + buckets + '_bucket',
        'cyclic:' + buckets + '_bucket',
        'forbidden_arcanus:' + buckets + '_bucket',
        'envirocore:' + buckets + '_bucket',
        'materialis:' + buckets + '_bucket',
        'blue_skies:' + buckets + '_bucket',
        'mysticalagradditions:' + buckets + '_bucket',
        'createaddition:' + buckets + '_bucket',
        'bigreactors:' + buckets + '_bucket',
        'environmental:' + buckets + '_bucket',
        'sushigocrafting:' + buckets + '_bucket',
        'upgrade_aquatic:' + buckets + '_bucket',
        'create:' + buckets + '_bucket',
        'betterendforge:bucket_' + buckets
    );
});


itemsToHide.forEach((disabledItem) => {
    if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
    }
});

    colors.forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });
});