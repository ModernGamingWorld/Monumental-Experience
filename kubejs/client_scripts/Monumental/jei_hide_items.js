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
        );
});

mobsToUnify.forEach((mobs) => {
    itemsToHide.push(
        'minecraft:' + mobs + '_spawn_egg',
        'alexsmobs:spawn_egg_' + mobs,
        'doom:' + mobs + '_spawn_egg',
        'druidcraft:' + mobs + '_spawn_egg',
        'exoticbirds:' + mobs + '_spawn_egg',
        'exoticbirds:' + mobs + '_egg',
        'illagers_plus:' + mobs + '_egg',
        'infernalexp:' + mobs + '_spawn_egg',
        'instrumentalmobs:' + mobs + '_spawn_egg',
        'good_nights_sleep:' + mobs + '_spawn_egg',
        'iceandfire:spawn_egg_' + mobs,
        'iceandfire:' + mobs + '_spawner',
        'mowziesmobs:' + mobs + '_spawn_egg',
        'jellyfishing:' + mobs + '_spawn_egg',
        'aquaculture:' + mobs + '_spawn_egg',
        'artifacts:' + mobs + '_spawn_egg',
        'enchantwithmob:' + mobs + '_spawn_egg',
        'lava_monster:' + mobs + '_spawn_egg',
        'meetyourfight:' + mobs + '_spawn_egg',
        'more_jellyfish:' + mobs + '_spawn_egg',
        'mutantbeasts:' + mobs + '_spawn_egg',
        'nasty:' + mobs + '_spawn_egg',
        'quark:' + mobs + '_spawn_egg',
        'occultism:spawn_egg/' + mobs,
        'statues:' + mobs + '_spawn_egg',
        'supplementaries:' + mobs + '_spawn_egg',
        'farlanders:' + mobs + '_spawn_egg',
        'undergarden:' + mobs + '_spawn_egg',
        'thermal:' + mobs + '_spawn_egg',
        'waddles:' + mobs + '_spawn_egg',
        'tconstruct:' + mobs + '_spawn_egg',
        'twilightforest:' + mobs + '_spawn_egg',
        'forbidden_arcanus:' + mobs + '_spawn_egg',
        'hmm:' + mobs + '_spawn_egg',
        'minecolonies:' + mobs,
        'inventorypets:' + mobs + '_egg',
        'mythicbotany:' + mobs + '_spawn_egg',
        'twilightforest:' + mobs + '_spawner',
        'atum:' + mobs + '_spawn_egg',
        'projectvibrantjourneys:' + mobs + '_spawn_egg',
        'upgrade_aquatic:' + mobs + '_spawn_egg',
        'eidolon:spawn_' + mobs,
        'betterendforge:spawn_egg_' + mobs,
        'goblintraders:' + mobs + '_spawn_egg',
        'environmental:' + mobs + '_spawn_egg',
        'blue_skies:' + mobs + '_spawn_egg',
        'mana-and-artifice:' + mobs + '_spawn_egg'
    );
});

upgradesToUnify.forEach((upgrades) => {
    itemsToHide.push(
        'ironfurnaces:upgrade_' + upgrades
    );
});


bucketsToUnify.forEach((buckets) => {
    itemsToHide.push(
        'minecraft:' + buckets + '_bucket',
        'alexsmobs:' + buckets + '_bucket',
        'allthemodium:' + buckets + '_bucket',
        'aquaculture:' + buckets + '_bucket',
        'astralsorcery:' + buckets + '_bucket',
        'bloodmagic:' + buckets + '_bucket',
        'create:' + buckets + '_bucket',
        'cyclic:' + buckets + '_bucket',
        'forbidden_arcanus:' + buckets + '_bucket',
        'envirocore:' + buckets + '_bucket',
        'bigreactors:' + buckets + '_bucket',
        'immersiveengineering:' + buckets + '_bucket',
        'immersivepetroleum:' + buckets + '_bucket',
        'industrialforegoing:' + buckets + '_bucket',
        'mekanism:' + buckets + '_bucket',
        'mekanismgenerators:' + buckets + '_bucket',
        'mob_grinding_utils:' + buckets + '_bucket',
        'pneumaticcraft:' + buckets + '_bucket',
        'thermal:' + buckets + '_bucket',
        'quark:' + buckets + '_bucket',
        'undergarden:' + buckets + '_bucket',
        'woot:' + buckets + '_bucket',
        'transport:' + buckets + '_bucket',
        'tconstruct:' + buckets + '_bucket',
        'bettercompat:' + buckets + '_bucket'
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
        'good_nights_sleep:' + leaves + '_leaves',
        'druidcraft:' + leaves + '_leaves',
        'mythicbotany:' + leaves + '_leaves'
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