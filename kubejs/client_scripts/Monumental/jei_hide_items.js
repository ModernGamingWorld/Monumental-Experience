events.listen('jei.hide.items', (event) => {

    materialsToUnify.forEach((material) => {
        itemsToHide.push(
            'draconicevolution:' + material + '_ore',
            'byg:' + material + '_ore',
            'mythicbotany:' + material + '_ore',
            'zycraft:' + material + '_ore',
            'astralsorcery:' + material + '_ore',
            'druidcraft:' + material + '_ore',
            'bigreactors:' + material + '_ore',
            'forbidden_arcanus:' + material + '_ore',
            'atum:' + material + '_ore',
            'undergarden:' + material + '_ore',
            'mysticalagradditions:' + material + '_ore',
            'mysticalagriculture:' + material + '_ore',
            'mana-and-artifice:' + material + '_ore',
            'gobber2:' + material + '_ore',
            'tconstruct:' + material + '_ore',
            'gobber2:' + material + '_ore_nether',
            'gobber2:' + material + '_ore_end',
            'quark:' + material + '_ore',
            'iceandfire:' + material + '_ore',
            'biggerreactors:' + material + '_ore',
            'blue_skies:' + material + '_ore',
            'phosphophyllite:' + material + '_ore',
            'betterendforge:' + material + '_ore',
            'appliedenergistics2:' + material + '_ore'
        );
    });


mobsToUnify.forEach((mobs) => {
        itemsToHide.push(
            'aquaculture:' + mobs + '_spawn_egg',
            'supplementaries:' + mobs + '_spawn_egg',
            'betterendforge:spawn_egg_' + mobs,
            'meetyourfight:' + mobs + '_spawn_egg',
            'eyesinthedarkness:' + mobs + '_spawn_egg',
            'mythicbotany:' + mobs + '_spawn_egg',
            'tconstruct:' + mobs + '_spawn_egg',
            'environmental:' + mobs + '_spawn_egg',
            'nasty:' + mobs + '_spawn_egg',
            'illagers_plus:' + mobs + '_egg',
            'mana-and-artifice:' + mobs + '_spawn_egg',
            'lava_monster:' + mobs + '_spawn_egg',
            'eidolon:spawn_' + mobs,
            'twilightforest:' + mobs + '_spawn_egg',
            'thermal:' + mobs + '_spawn_egg',
            'iceandfire:spawn_egg_' + mobs,
            'blue_skies:' + mobs + '_spawn_egg',
            'quark:' + mobs + '_spawn_egg',
            'occultism:spawn_egg/' + mobs,
            'atum:' + mobs + '_spawn_egg',
            'upgrade_aquatic:' + mobs + '_spawn_egg',
            'druidcraft:' + mobs + '_spawn_egg',
            'undergarden:' + mobs + '_spawn_egg',
            'doom:' + mobs + '_spawn_egg',
            'minecraft:' + mobs + '_spawn_egg',
            'alexsmobs:spawn_egg_' + mobs,
            'twilightforest:boss_spawner_' + mobs,
            'inventorypets:' + mobs + '_spawn',
        );
    });

upgradesToUnify.forEach((upgrades) => {
        itemsToHide.push(
            'ironfurnaces:upgrade_' + upgrades
    );
});

leavesToUnify.forEach((leaves) => {
    itemsToHide.push(
        'twilightforest:' + leaves + '_leaves',
        'quark:' + leaves + '_leaves',
        'undergarden:' + leaves + '_leaves',
        'byg:' + leaves + '_leaves',
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
        'mythicbotany:' + leaves + '_leaves'
    );
});


bucketsToUnify.forEach((buckets) => {
    itemsToHide.push(
        'minecraft:' + buckets + '_bucket',
        'alexsmobs:' + buckets + '_bucket',
        'aquaculture:' + buckets + '_bucket',
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
        'biggerreactors:' + buckets + '_bucket',
        'environmental:' + buckets + '_bucket',
        'sushigocrafting:' + buckets + '_bucket',
        'upgrade_aquatic:' + buckets + '_bucket',
        'betterendforge:bucket_' + buckets
    );
});

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
    });

    colors.forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });
});